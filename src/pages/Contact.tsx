import mountainContact from '../assets/mountain-contact.png'

export default function Contact() {
  return (
    <div className="overflow-hidden">
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
                className="text-[#E5E2E1] uppercase mb-6 md:mb-12"
                style={{
                  fontFamily: "'OCR A Std', monospace",
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  lineHeight: '1.15',
                }}
              >
                Discuss Your
                <br />
                Project
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
              onSubmit={(e) => e.preventDefault()}
            >
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
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors"
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
                    className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors"
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
                  className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors"
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
                  className="w-full bg-transparent border border-[rgba(194,162,125,0.4)] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/60 focus:outline-none transition-colors resize-none"
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
                className="w-full uppercase text-[#E5E2E1] py-4"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '2px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(194,162,125,0.4)',
                }}
              >
                Send Message
              </button>
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

              <form
                className="flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-shrink-0 w-full md:w-auto"
                onSubmit={(e) => e.preventDefault()}
              >
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
                    placeholder="john@example.com"
                    className="bg-transparent border border-[rgba(210,176,107,0.5)] px-4 py-3 text-[#D2B06B] text-sm placeholder:text-[#D2B06B]/30 focus:border-[#D2B06B] focus:outline-none transition-colors w-full md:w-[240px]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="uppercase text-[#E5E2E1] px-8 py-3 w-full md:w-auto md:self-end"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    letterSpacing: '2px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(194,162,125,0.4)',
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
