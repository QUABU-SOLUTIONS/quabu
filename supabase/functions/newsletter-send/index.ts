import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify service role key for authorization
    const authHeader = req.headers.get("authorization");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    if (!authHeader || !authHeader.includes(supabaseKey)) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { subject, htmlContent } = await req.json();

    if (!subject || !htmlContent) {
      return new Response(JSON.stringify({ error: "Subject and htmlContent are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get all confirmed subscribers
    const { data: subscribers, error } = await supabase
      .from("newsletter_subscribers")
      .select("email, unsubscribe_token")
      .eq("confirmed", true);

    if (error) throw error;
    if (!subscribers || subscribers.length === 0) {
      return new Response(JSON.stringify({ success: true, message: "No confirmed subscribers found.", sent: 0 }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const gmailUser = Deno.env.get("GMAIL_USER")!;
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD")!;

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: { username: gmailUser, password: gmailPassword },
      },
    });

    let sent = 0;
    for (const sub of subscribers) {
      try {
        const unsubscribeUrl = `https://quabu.lovable.app/newsletter/unsubscribe?token=${sub.unsubscribe_token}`;
        const fullHtml = `
          ${htmlContent}
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            <a href="${unsubscribeUrl}" style="color: #999;">Unsubscribe</a> from this newsletter.
          </p>
        `;

        await client.send({
          from: gmailUser,
          to: sub.email,
          subject,
          content: subject,
          html: fullHtml,
        });
        sent++;
      } catch (e) {
        console.error(`Failed to send to ${sub.email}:`, e);
      }
    }

    await client.close();

    return new Response(JSON.stringify({ success: true, sent, total: subscribers.length }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Newsletter send error:", error);
    return new Response(JSON.stringify({ error: "An error occurred." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
