import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const WEBHOOK_URL = import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL as string | undefined

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (status === 'loading') return

    // Honeypot: if a bot filled this, silently "succeed"
    if (honeypot) {
      setStatus('success')
      return
    }

    const trimmed = email.trim()
    if (!isValidEmail(trimmed)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email.')
      return
    }

    if (!WEBHOOK_URL) {
      setStatus('error')
      setErrorMsg('Subscribe is not configured yet.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      // Google Apps Script web apps don't return CORS headers, so use no-cors.
      // The browser can't read the response, but the POST still reaches the script.
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          email: trimmed,
          source: window.location.pathname,
          timestamp: new Date().toISOString(),
        }).toString(),
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <form
      className="contact-subscribe-block flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-shrink-0 w-full md:w-auto"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
        }}
        aria-hidden="true"
      />

      <div className="w-full md:w-auto">
        <label
          className="block text-[#D2B06B]/60 uppercase mb-2"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '2px',
          }}
        >
          Email
        </label>
        <input
          type="email"
          required
          disabled={status === 'loading' || status === 'success'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') {
              setStatus('idle')
              setErrorMsg('')
            }
          }}
          placeholder="you@example.com"
          className="bg-transparent border border-[rgba(210,176,107,0.5)] px-4 py-3 text-[#D2B06B] text-sm placeholder:text-[#D2B06B]/30 focus:border-[#D2B06B] focus:outline-none transition-colors w-full md:w-[240px] disabled:opacity-60"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        />
      </div>

      <div className="flex flex-col items-stretch md:items-start gap-1 w-full md:w-auto">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="btn-subtle uppercase text-[#E5E2E1] px-8 py-3 w-full md:w-auto md:self-end disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '14px',
            letterSpacing: '2px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(194,162,125,0.4)',
          }}
        >
          {status === 'loading'
            ? 'Sending...'
            : status === 'success'
              ? 'Subscribed ✓'
              : 'Subscribe'}
        </button>
        {status === 'error' && (
          <span
            role="alert"
            className="text-[#E5B8B8] mt-1"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '12px',
              lineHeight: '16px',
            }}
          >
            {errorMsg}
          </span>
        )}
        {status === 'success' && (
          <span
            className="text-[#D2B06B] mt-1"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '12px',
              lineHeight: '16px',
            }}
          >
            Thanks — you're on the list.
          </span>
        )}
      </div>
    </form>
  )
}
