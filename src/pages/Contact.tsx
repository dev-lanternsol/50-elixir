import { useState, type FormEvent } from 'react'
import SEO from '../components/SEO'
import SubscribeForm from '../components/SubscribeForm'
import TypedText from '../components/TypedText'
import mountainContact from '../assets/mountain-contact.png'

type ContactStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<ContactStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return

    if (honeypot) {
      setStatus('success')
      return
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in name, email, and message.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organization: organization.trim(),
          message: message.trim(),
          company: honeypot,
        }),
      })

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }

      if (!res.ok || !data.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setOrganization('')
      setMessage('')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  return (
    <div className="overflow-hidden">
      <SEO
        title="Contact — Discuss Your Project"
        description="Reach 50 Elixir to discuss strategic advisory, regulatory compliance, or growth strategy for healthcare, pharmaceutical, and technology organizations."
        path="/contact"
      />
      {/* ═══ CONTACT SECTION ═══ */}
      <section className="contact-section relative overflow-hidden flex flex-col" style={{ padding: '0px 0 110px', minHeight: '1220px' }}>
        {/* Mountain background */}
        <img
          src={mountainContact}
          alt=""
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            height: '83%',
          }}
        />
        {/* Gradient fade to black at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]"
          style={{
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgb(17, 17, 17))',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24" style={{ alignItems: 'start' }}>
            {/* Left — text */}
            <div className="contact-text" style={{ paddingTop: '120px' }}>
              {/* Label with gold line */}
              <div className="flex items-center gap-4 mb-4 md:mb-10">
                <div
                  style={{
                    width: '48px',
                    height: '1px',
                    backgroundColor: '#D2B06B',
                  }}
                />
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '3px',
                    lineHeight: '15px',
                    color: '#D2B06B',
                  }}
                >
                  Contact Us
                </span>
              </div>

              <h1
                className="relative text-[#E5E2E1] uppercase mb-6 md:mb-12"
                style={{
                  fontFamily: "'OCR A Std', monospace",
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  lineHeight: '1.15',
                }}
              >
                <span aria-hidden className="invisible block">
                  Discuss Your<br />Project
                </span>
                <span className="absolute inset-0">
                  <TypedText
                    segments={[
                      { text: 'Discuss Your' },
                      { lineBreak: true, text: '' },
                      { text: 'Project', gold: true },
                    ]}
                    speed={55}
                  />
                </span>
              </h1>

              <p
                className="text-[#E5E2E1] mb-4 md:mb-6"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '17px',
                  lineHeight: '28px',
                  maxWidth: '440px',
                }}
              >
                If your organization is building, scaling, or investing in healthcare, life sciences, or health technology platforms operating in regulated environments, we'd welcome a conversation.
              </p>

              <p
                className="text-[#E5E2E1] mb-6 md:mb-12"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '17px',
                  lineHeight: '28px',
                  maxWidth: '440px',
                }}
              >
                50 Elixir works with founders, executive teams, investors, and institutional partners facing complex regulatory and operational challenges where strategic clarity matters.
              </p>

              {/* Contact email */}
              <div className="flex items-center gap-4">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '5.6px',
                    lineHeight: '20px',
                    color: '#D2B06B',
                  }}
                >
                  Contact
                </span>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="#D2B06B" strokeWidth="1.5">
                  <rect x="1" y="1" width="18" height="14" rx="2" />
                  <path d="M1 1l9 7 9-7" />
                </svg>
                <a
                  href="mailto:tim@50elixir.com"
                  className="text-[#D2B06B] hover:text-[#E8D5A3] transition-colors"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16px',
                  }}
                >
                  tim@50elixir.com
                </a>
              </div>
            </div>

            {/* Right — contact form (pushed down) */}
            <form
              className="contact-form flex flex-col gap-4 mt-4 md:!mt-[180px]"
              style={{
                backgroundColor: 'rgba(14, 14, 16, 0.9)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(194, 162, 125, 0.4)',
                padding: '32px',
              }}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot — hidden from users, bots fill it */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                aria-hidden="true"
              />

              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="uppercase"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '10px',
                      letterSpacing: '1px',
                      lineHeight: '15px',
                      fontWeight: 500,
                      color: 'rgba(210, 176, 107, 0.6)',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'loading'}
                    required
                    className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors disabled:opacity-50"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(229, 226, 225, 0.7)',
                      padding: '13px 16px',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="uppercase"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '10px',
                      letterSpacing: '1px',
                      lineHeight: '15px',
                      fontWeight: 500,
                      color: 'rgba(210, 176, 107, 0.6)',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    required
                    className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors disabled:opacity-50"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(229, 226, 225, 0.7)',
                      padding: '13px 16px',
                    }}
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-2">
                <label
                  className="uppercase"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '1px',
                    lineHeight: '15px',
                    fontWeight: 500,
                    color: 'rgba(210, 176, 107, 0.6)',
                  }}
                >
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Health Systems Inc."
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors disabled:opacity-50"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(229, 226, 225, 0.7)',
                    padding: '13px 16px',
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  className="uppercase"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '1px',
                    lineHeight: '15px',
                    fontWeight: 500,
                    color: 'rgba(210, 176, 107, 0.6)',
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we assist you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === 'loading'}
                  required
                  className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors resize-none disabled:opacity-50"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(229, 226, 225, 0.7)',
                    padding: '12px 16px',
                    minHeight: '120px',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-subtle w-full uppercase text-[#E5E2E1] py-4 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '2px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(194,162,125,0.4)',
                }}
              >
                {status === 'loading'
                  ? 'Sending…'
                  : status === 'success'
                    ? 'Message Sent ✓'
                    : 'Send Message'}
              </button>

              {/* Feedback */}
              {status === 'error' && errorMsg && (
                <span
                  className="text-red-400"
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px' }}
                  aria-live="polite"
                >
                  {errorMsg}
                </span>
              )}
              {status === 'success' && (
                <span
                  className="text-[#D2B06B]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: '13px' }}
                  aria-live="polite"
                >
                  Thanks — we'll be in touch shortly.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* spacer to push subscribe to bottom */}
        <div style={{ minHeight: '40px' }} className="flex-1" />

        {/* ── Subscribe — solid black block on top of mountain image ── */}
        <div className="relative z-10 w-full px-5 md:px-0">
          <div
            className="contact-subscribe-block max-w-[1100px] mx-auto"
            style={{
              backgroundColor: '#0E0E10',
              padding: '48px 48px',
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3
                  className="text-[#D2B06B] uppercase mb-2"
                  style={{
                    fontFamily: "'OCR A Std', monospace",
                    fontSize: '20px',
                    lineHeight: '28px',
                  }}
                >
                  Subscribe to Strategic Insights.
                </h3>
                <p
                  className="text-[#D2B06B]/60"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    lineHeight: '22px',
                  }}
                >
                  Brief, actionable updates on healthcare regulation and execution.
                </p>
              </div>

              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
