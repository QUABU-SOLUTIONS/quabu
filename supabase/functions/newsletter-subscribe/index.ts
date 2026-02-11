import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const allowedOrigins = [
  "https://quabu.lovable.app",
  "https://quabusolutions.com",
  "https://www.quabusolutions.com",
  "https://id-preview--f4890869-8187-4595-b931-ac27f753c6e5.lovable.app",
  "http://localhost:8080",
  "http://localhost:5173",
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const isAllowed = origin && allowedOrigins.some(allowed => origin === allowed || origin.endsWith('.lovable.app'));
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin! : "",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, action, token } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // CONFIRM action
    if (action === "confirm" && token) {
      const { data: subscriber, error: fetchError } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .eq("confirmation_token", token)
        .eq("confirmed", false)
        .single();

      if (fetchError || !subscriber) {
        return new Response(JSON.stringify({ error: "Invalid or expired confirmation link." }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({ confirmed: true, confirmed_at: new Date().toISOString() })
        .eq("id", subscriber.id);

      if (updateError) throw updateError;

      return new Response(JSON.stringify({ success: true, message: "Subscription confirmed!" }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // SUBSCRIBE action (default)
    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Valid email is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email address." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Check if already confirmed
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("confirmed")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (existing?.confirmed) {
      return new Response(JSON.stringify({ success: true, message: "You're already subscribed!" }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Delete existing unconfirmed to allow re-subscription
    if (existing && !existing.confirmed) {
      await supabase.from("newsletter_subscribers").delete().eq("email", email.toLowerCase().trim());
    }

    // Insert new subscriber
    const { data: newSub, error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.toLowerCase().trim() })
      .select("confirmation_token")
      .single();

    if (insertError) throw insertError;

    // Send confirmation email via SMTP
    const gmailUser = Deno.env.get("GMAIL_USER")!;
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD")!;

    const confirmUrl = `https://quabu.lovable.app/newsletter/confirm?token=${newSub.confirmation_token}`;

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: { username: gmailUser, password: gmailPassword },
      },
    });

    await client.send({
      from: gmailUser,
      to: email.toLowerCase().trim(),
      subject: "Confirm your subscription to Quabu Blog",
      content: "Please confirm your subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a1a2e; font-size: 24px;">Welcome to Quabu Blog! 🎉</h1>
          </div>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thank you for subscribing to our newsletter. Please confirm your email address by clicking the button below:
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmUrl}" 
               style="background-color: #6366f1; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">
              Confirm Subscription
            </a>
          </div>
          <p style="color: #666; font-size: 14px; line-height: 1.5;">
            If you didn't subscribe to our newsletter, you can safely ignore this email.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            © ${new Date().getFullYear()} Quabu Solutions. All rights reserved.
          </p>
        </div>
      `,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true, message: "Please check your email to confirm your subscription." }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return new Response(JSON.stringify({ error: "An error occurred. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
