import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Maximum allowed HTML content size: 100KB
const MAX_HTML_SIZE = 100 * 1024;
const MAX_SUBJECT_LENGTH = 200;

// Allowed HTML tags for newsletter content (allowlist approach)
const ALLOWED_TAGS = new Set([
  'p', 'br', 'strong', 'b', 'em', 'i', 'a', 'h1', 'h2', 'h3', 'h4',
  'ul', 'ol', 'li', 'div', 'span', 'table', 'tr', 'td', 'th', 'tbody',
  'thead', 'img', 'hr', 'blockquote', 'pre', 'code'
]);

/**
 * Basic server-side HTML sanitizer — strips disallowed tags and dangerous attributes.
 * Removes <script>, <iframe>, on* event handlers and javascript: hrefs.
 */
function sanitizeHtml(html: string): string {
  // Remove script and iframe tags entirely (including content)
  let sanitized = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[\s\S]*?>/gi, '')
    .replace(/<form[\s\S]*?<\/form>/gi, '');

  // Remove on* event attributes (e.g. onclick, onload, onerror)
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*[^\s>]*/gi, '');

  // Remove javascript: hrefs and src values
  sanitized = sanitized.replace(/href\s*=\s*["']\s*javascript:[^"']*["']/gi, 'href="#"');
  sanitized = sanitized.replace(/src\s*=\s*["']\s*javascript:[^"']*["']/gi, 'src=""');

  return sanitized;
}

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

    // Input length validation
    if (subject.length > MAX_SUBJECT_LENGTH) {
      return new Response(JSON.stringify({ error: `Subject must be under ${MAX_SUBJECT_LENGTH} characters.` }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (htmlContent.length > MAX_HTML_SIZE) {
      return new Response(JSON.stringify({ error: "HTML content exceeds maximum allowed size (100KB)." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Sanitize HTML before sending to any recipient
    const sanitizedHtml = sanitizeHtml(htmlContent);

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
          ${sanitizedHtml}
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
        console.error(`Failed to send to subscriber:`, (e as Error)?.message ?? 'unknown error');
      }
    }

    await client.close();

    return new Response(JSON.stringify({ success: true, sent, total: subscribers.length }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Newsletter send error occurred");
    return new Response(JSON.stringify({ error: "An error occurred." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
