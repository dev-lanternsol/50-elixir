import { useState } from 'react'
import Reveal from './Reveal'

/* ── Audience data (from Figma) ───────────────────────────────── */

const audiences = [
  {
    label: 'Community Pharmacy',
    desc: 'Community, retail, mail-order, compounding, and specialty pharmacy operators',
  },
  {
    label: 'Pharma Manufacturers',
    desc: 'Pharmaceutical manufacturers, API producers, and diagnostics companies',
  },
  {
    label: 'Outsourcing Facilities',
    desc: 'Outsourcing facilities, compounding, and production platforms',
  },
  {
    label: 'Digital Health',
    desc: 'Digital health and AI healthcare technology companies',
  },
  {
    label: 'VC Firms',
    desc: 'Venture capital and private investment firms focused on healthcare and life sciences',
  },
  {
    label: 'Portfolio Companies',
    desc: 'Portfolio companies navigating regulatory-constrained growth',
  },
  {
    label: 'Healthcare Law Firms',
    desc: 'Healthcare-focused law firms and financial advisors supporting regulated transactions',
  },
]

/* ── Section ──────────────────────────────────────────────────── */

export default function WhoWeWorkWith() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ padding: '0 18px' }}>
      <div className="max-w-[1400px] mx-auto">
        <Reveal
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[90px]"
          style={{
            borderTop: '1px solid rgba(76, 70, 56, 0.2)',
            padding: '48px 16px',
          }}
        >
          {/* Left — heading + tabs */}
          <div className="flex flex-col gap-4 w-full md:w-[663px] md:shrink-0 md:border-r md:pr-4" style={{ borderColor: 'rgba(76, 70, 56, 0.3)' }}>
            <h2
              className="text-[#E5E2E1] uppercase text-[24px] md:text-[36px] leading-[24px] md:leading-[36px]"
              style={{ fontFamily: "'OCR A Std', monospace" }}
            >
              who we <span className="text-[#D2B06B]">work with</span>
            </h2>

            <div className="flex flex-wrap gap-[8px]">
              {audiences.map((a, idx) => {
                const isActive = idx === active
                return (
                  <button
                    key={a.label}
                    onClick={() => setActive(idx)}
                    className="flex items-center p-[8px] uppercase transition-colors cursor-pointer"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 500,
                      fontSize: '12px',
                      letterSpacing: '1.2px',
                      lineHeight: '16px',
                      whiteSpace: 'nowrap',
                      backgroundColor: isActive ? '#131313' : 'rgba(19, 19, 19, 0.6)',
                      border: isActive ? '1px solid #C2A27D' : '1px solid rgba(76, 70, 56, 0.35)',
                      color: isActive ? '#D2B06B' : 'rgba(210, 176, 107, 0.72)',
                    }}
                  >
                    {a.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right — active description */}
          <div
            className="w-full md:flex-1 pt-4 md:pt-0 border-t md:border-t-0"
            style={{ borderColor: 'rgba(76, 70, 56, 0.3)' }}
          >
            <p
              key={active}
              className="text-[#E5E2E1] text-[20px] md:text-[24px] leading-[24px]"
              style={{ fontFamily: "'OCR A Std', monospace", animation: 'wwww-fade 0.4s ease-out' }}
            >
              {audiences[active].desc}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
