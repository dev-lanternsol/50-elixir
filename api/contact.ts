// Vercel Node Function — /api/contact
// Receives contact form submissions and sends an email via Resend.
import type { IncomingMessage, ServerResponse } from 'node:http'

type ContactPayload = {
  name?: string
  email?: string
  organization?: string
  message?: string
  company?: string // honeypot
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

async function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, error: 'Method not allowed' })
  }

  let payload: ContactPayload
  try {
    // Vercel may pre-parse JSON body onto (req as any).body
    const preParsed = (req as IncomingMessage & { body?: unknown }).body
    if (preParsed && typeof preParsed === 'object') {
      payload = preParsed as ContactPayload
    } else {
      const raw = await readBody(req)
      payload = raw ? (JSON.parse(raw) as ContactPayload) : {}
    }
  } catch {
    return sendJson(res, 400, { ok: false, error: 'Invalid JSON' })
  }

  // Honeypot — silently succeed for bots
  if (payload.company && payload.company.trim() !== '') {
    return sendJson(res, 200, { ok: true })
  }

  const name = (payload.name || '').trim()
  const email = (payload.email || '').trim()
  const organization = (payload.organization || '').trim()
  const message = (payload.message || '').trim()

  if (!name || !email || !message) {
    return sendJson(res, 400, { ok: false, error: 'Name, email, and message are required.' })
  }
  if (!isValidEmail(email)) {
    return sendJson(res, 400, { ok: false, error: 'Invalid email.' })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
  const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'tim@50elixir.com'

  if (!RESEND_API_KEY) {
    return sendJson(res, 500, { ok: false, error: 'Email service is not configured.' })
  }

  const subject = `New contact form submission — ${name}`
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #0E0E10; color: #E5E2E1;">
      <div style="border-left: 3px solid #D2B06B; padding-left: 16px; margin-bottom: 24px;">
        <h2 style="margin: 0 0 4px; color: #D2B06B; font-size: 14px; letter-spacing: 3px; text-transform: uppercase;">50 Elixir</h2>
        <p style="margin: 0; color: #9F9F9F; font-size: 12px;">New contact form submission</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #9F9F9F; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td><td style="padding: 8px 0; color: #E5E2E1; font-size: 15px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #9F9F9F; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0; color: #E5E2E1; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #D2B06B; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
        ${organization ? `<tr><td style="padding: 8px 0; color: #9F9F9F; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Organization</td><td style="padding: 8px 0; color: #E5E2E1; font-size: 15px;">${escapeHtml(organization)}</td></tr>` : ''}
      </table>

      <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(210,176,107,0.2);">
        <p style="margin: 0 0 8px; color: #9F9F9F; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="margin: 0; color: #E5E2E1; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    </div>
  `.trim()

  const text = [
    `New contact form submission — 50 Elixir`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `50 Elixir <${CONTACT_FROM}>`,
        to: [CONTACT_TO],
        reply_to: email,
        subject,
        html,
        text,
      }),
    })

    if (!resendRes.ok) {
      const errBody = await resendRes.text()
      return sendJson(res, 502, { ok: false, error: 'Email delivery failed.', detail: errBody })
    }

    return sendJson(res, 200, { ok: true })
  } catch (err) {
    return sendJson(res, 500, { ok: false, error: 'Something went wrong.', detail: String(err) })
  }
}
