import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Allowed origins for CORS
const allowedOrigins = [
  "https://quabu.lovable.app",
  "https://id-preview--f4890869-8187-4595-b931-ac27f753c6e5.lovable.app",
  "http://localhost:8080",
  "http://localhost:5173",
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const isAllowed = origin && allowedOrigins.some(allowed => origin === allowed || origin.endsWith('.lovable.app'));
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : "",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

const SYSTEM_PROMPT = `You are Quabu's helpful AI assistant. Quabu is an Atlassian Gold Solution Partner that helps businesses accelerate their digital transformation with pre-built, customizable solutions.

About Quabu:
- Atlassian Gold Solution Partner with offices in Miami, FL and Barcelona, Spain
- Specializes in digital accelerators for Marketing, Sales, HR, Operations, Finance, IT, Customer Service, and R&D
- Offers services including Atlassian Services, Cloud Migration, and Custom Development
- Email: hello@quabusolutions.com

Key Services:
1. Digital Accelerators - Pre-built workflows that can be deployed in weeks, not months
2. Atlassian Services - Expert implementation and optimization of Atlassian tools
3. Cloud Migration - Help businesses migrate to Atlassian Cloud
4. Custom Development - Tailored solutions for unique business needs

Be helpful, professional, and concise. If users want to schedule a demo or contact sales, direct them to the contact page or email hello@quabusolutions.com. Answer questions about services, accelerators, and how Quabu can help their business.

Always respond in English.`;

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Validation constants
const MAX_MESSAGE_LENGTH = 4000;
const MAX_MESSAGES_COUNT = 50;
const VALID_ROLES = ["user", "assistant", "system"];

interface Message {
  role: string;
  content: string;
}

function getClientIdentifier(req: Request): string {
  // Use IP from headers or a fallback
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  return cfConnectingIp || realIp || forwarded?.split(",")[0]?.trim() || "unknown";
}

function checkRateLimit(clientId: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(clientId);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; sanitized?: Message[] } {
  // Check if messages is an array
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }

  // Check message count
  if (messages.length === 0) {
    return { valid: false, error: "At least one message is required" };
  }

  if (messages.length > MAX_MESSAGES_COUNT) {
    return { valid: false, error: `Maximum ${MAX_MESSAGES_COUNT} messages allowed` };
  }

  const sanitized: Message[] = [];

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];

    // Check message structure
    if (typeof msg !== "object" || msg === null) {
      return { valid: false, error: `Message at index ${i} must be an object` };
    }

    const { role, content } = msg as Record<string, unknown>;

    // Validate role
    if (typeof role !== "string" || !VALID_ROLES.includes(role)) {
      return { valid: false, error: `Invalid role at index ${i}. Must be one of: ${VALID_ROLES.join(", ")}` };
    }

    // Validate content
    if (typeof content !== "string") {
      return { valid: false, error: `Content at index ${i} must be a string` };
    }

    // Check content length
    if (content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message at index ${i} exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` };
    }

    // Sanitize content - remove control characters except newlines/tabs
    const sanitizedContent = content
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control chars except \t \n \r
      .trim();

    if (sanitizedContent.length === 0) {
      return { valid: false, error: `Message at index ${i} cannot be empty` };
    }

    sanitized.push({ role, content: sanitizedContent });
  }

  return { valid: true, sanitized };
}

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientId = getClientIdentifier(req);
    const rateLimitResult = checkRateLimit(clientId);

    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for client`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait before sending more messages." }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": String(rateLimitResult.retryAfter || 60)
          } 
        }
      );
    }

    const body = await req.json();
    
    // Validate and sanitize messages
    const validation = validateMessages(body.messages);
    if (!validation.valid) {
      console.log(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log(`Chat request with ${validation.sanitized!.length} messages`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...validation.sanitized!,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable, please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat assistant error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});