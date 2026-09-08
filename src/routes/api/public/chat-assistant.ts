import { createFileRoute } from '@tanstack/react-router'

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

Always respond in English.`

const RATE_LIMIT_WINDOW_MS = 60000
const MAX_REQUESTS_PER_WINDOW = 15
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const MAX_MESSAGE_LENGTH = 4000
const MAX_MESSAGES_COUNT = 50
const VALID_ROLES = ['user', 'assistant', 'system']

interface Message {
  role: string
  content: string
}

function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    forwarded?.split(',')[0]?.trim() ||
    'unknown'
  )
}

function checkRateLimit(clientId: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const record = rateLimitMap.get(clientId)

  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) rateLimitMap.delete(key)
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true }
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) }
  }

  record.count++
  return { allowed: true }
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; sanitized?: Message[] } {
  if (!Array.isArray(messages)) return { valid: false, error: 'Messages must be an array' }
  if (messages.length === 0) return { valid: false, error: 'At least one message is required' }
  if (messages.length > MAX_MESSAGES_COUNT) {
    return { valid: false, error: `Maximum ${MAX_MESSAGES_COUNT} messages allowed` }
  }

  const sanitized: Message[] = []

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]
    if (typeof msg !== 'object' || msg === null) {
      return { valid: false, error: `Message at index ${i} must be an object` }
    }

    const { role, content } = msg as Record<string, unknown>

    if (typeof role !== 'string' || !VALID_ROLES.includes(role)) {
      return { valid: false, error: `Invalid role at index ${i}. Must be one of: ${VALID_ROLES.join(', ')}` }
    }
    if (typeof content !== 'string') {
      return { valid: false, error: `Content at index ${i} must be a string` }
    }
    if (content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message at index ${i} exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` }
    }

    // eslint-disable-next-line no-control-regex
    const sanitizedContent = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim()
    if (sanitizedContent.length === 0) {
      return { valid: false, error: `Message at index ${i} cannot be empty` }
    }

    sanitized.push({ role, content: sanitizedContent })
  }

  return { valid: true, sanitized }
}

const json = (body: unknown, status: number, extra?: Record<string, string>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...(extra ?? {}) },
  })

export const Route = createFileRoute('/api/public/chat-assistant')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const rateLimitResult = checkRateLimit(getClientIdentifier(request))
          if (!rateLimitResult.allowed) {
            return json(
              { error: 'Too many requests. Please wait before sending more messages.' },
              429,
              { 'Retry-After': String(rateLimitResult.retryAfter || 60) },
            )
          }

          const body = (await request.json()) as { messages?: unknown }
          const validation = validateMessages(body.messages)
          if (!validation.valid) {
            return json({ error: validation.error }, 400)
          }

          const apiKey = process.env['LOVABLE_API_KEY']
          if (!apiKey) {
            console.error('LOVABLE_API_KEY is not configured')
            return json({ error: 'Assistant is not configured' }, 500)
          }

          const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'google/gemini-3-flash-preview',
              messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...validation.sanitized!],
              stream: true,
            }),
          })

          if (!response.ok) {
            if (response.status === 429) {
              return json({ error: 'Rate limits exceeded, please try again later.' }, 429)
            }
            if (response.status === 402) {
              return json({ error: 'Service temporarily unavailable, please try again later.' }, 402)
            }
            console.error('AI gateway error:', response.status, await response.text())
            return json({ error: 'AI gateway error' }, 500)
          }

          return new Response(response.body, {
            headers: {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-store',
            },
          })
        } catch (error) {
          console.error('Chat assistant error:', error)
          return json({ error: 'An error occurred. Please try again.' }, 500)
        }
      },
    },
  },
})
