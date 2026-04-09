import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SubscribeForm from '../components/SubscribeForm'
import TypedText, { type TypedSegment } from '../components/TypedText'
import treesAbout from '../assets/trees-about.png'
import treesAboutMobile from '../assets/trees-about-mobile.png'
import mountainBg2 from '../assets/mountain-bg-2.png'
import mountainAboutMobile from '../assets/mountain-about-mobile.png'

const aboutHeadingSegments: TypedSegment[] = [
  { text: 'About ' },
  { text: 'Us', gold: true },
]

export default function About() {
  return (
    <div className="overflow-hidden">
      <SEO
        title="About — Regulatory Strategy Built on Operational Experience"
        description="Founded by Tim Frost, 50 Elixir brings regulatory affairs, government operations, and healthcare leadership experience to advisory engagements across pharmacy, manufacturing, digital health, and investor markets."
        path="/about"
      />
      {/* ═══ MOBILE: combined hero + founder wrapper with trees bg ═══ */}
      <div className="md:hidden relative">
        {/* Trees illustration — mobile: behind founder area */}
        <img
          src={treesAboutMobile}
          alt=""
          className="absolute right-0 pointer-events-none"
          style={{
            width: '85%',
            top: '215px',
            objectFit: 'contain',
            objectPosition: 'top right',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.05) 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.05) 90%, transparent 100%)',
          }}
        />

        <div className="relative z-10 px-5" style={{ paddingTop: '60px' }}>
          {/* Label with gold line */}
          <div className="flex items-center gap-4 mb-6">
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
              Strategic Advisory
            </span>
          </div>

          {/* Heading — typed animation */}
          <h1
            className="relative text-[#E5E2E1] uppercase mb-5"
            style={{
              fontFamily: "'OCR A Std', monospace",
              fontSize: '28px',
              lineHeight: '1.1',
            }}
          >
            <span aria-hidden className="invisible">About Us</span>
            <span className="absolute inset-0">
              <TypedText segments={aboutHeadingSegments} speed={70} />
            </span>
          </h1>

          {/* Description — italic on mobile */}
          <p
            className="text-[#D2B06B] mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: '1.15',
              textAlign: 'left',
              width: '100%',
            }}
          >
            50 Elixir's work is focused on execution, not theory. We partner
            with organizations to translate regulatory requirements into
            operating models that function in real healthcare environments,
            enabling solutions to move from concept to sustainable scale.
          </p>

          {/* Founder card */}
          <div
            className="border-l-2 border-[#D2B06B] mb-5"
            style={{
              backgroundColor: '#0E0E10',
              padding: '7px 18px',
            }}
          >
            <span
              className="uppercase block mb-1"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#D2B06B',
              }}
            >
              Founder &amp; President
            </span>
            <h3
              className="text-[#E5E2E1] mb-1"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '24px',
              }}
            >
              Tim Frost
            </h3>
            <a
              href="mailto:TIM@50ELIXIR.COM"
              className="text-[#CDC6B3] hover:text-[#D2B06B] transition-colors uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '10px',
                letterSpacing: '1px',
                lineHeight: '15px',
              }}
            >
              TIM@50ELIXIR.COM
            </a>
          </div>

          {/* Qualifications */}
          <div className="mb-4">
            <span
              className="uppercase block mb-1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '10px',
                letterSpacing: '1px',
                lineHeight: '15px',
                color: '#CDC6B3',
              }}
            >
              Qualifications
            </span>
            <p
              className="text-[#E5E2E1]"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '15px',
                lineHeight: '22px',
              }}
            >
              Registered Pharmacist (PharmD)
            </p>
          </div>

          {/* Operational Scope */}
          <div className="mb-14">
            <span
              className="uppercase block mb-1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '10px',
                letterSpacing: '1px',
                lineHeight: '15px',
                color: '#CDC6B3',
              }}
            >
              Operational Scope
            </span>
            <p
              className="text-[#E5E2E1]"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '15px',
                lineHeight: '22px',
              }}
            >
              Healthcare Strategy Consultant | Pharmacist | Senior Fellow | Former Chief of Staff Idaho Attorney General
            </p>
          </div>

          {/* Body text blocks */}
          <div className="flex flex-col gap-4 mb-4">
            <p
              className="text-[#E5E2E1]"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                lineHeight: '26px',
              }}
            >
              50 Elixir is a healthcare strategy and regulatory advisory firm focused on helping pharmacy, life sciences, and health technology organizations operate and scale in highly regulated environments
            </p>
            <p
              className="text-[#E5E2E1]"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                lineHeight: '26px',
              }}
            >
              The firm was founded to address a common problem in healthcare innovation: great ideas often stall when regulatory complexity, operational design, and market realities are not aligned. 50 Elixir helps organizations build business models that can succeed within existing regulatory frameworks while positioning for long-term growth.
            </p>
          </div>

          {/* Gold divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(210,176,107,0.4), rgba(210,176,107,0.1))',
              margin: '8px 0',
            }}
          />

          {/* Second text block */}
          <div className="flex flex-col gap-4 mt-4">
            <p
              className="text-[#E5E2E1]"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                lineHeight: '26px',
              }}
            >
              Founder Tim Frost is a pharmacist with extensive experience across healthcare operations, regulatory systems, and executive leadership. His background includes regulatory affairs roles at a Fortune-ranked healthcare company, oversight of statewide professional licensing agencies, and senior government operations leadership.
            </p>
            <p
              className="text-[#E5E2E1]"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                lineHeight: '26px',
              }}
            >
              This experience informs a pragmatic, execution-focused approach to regulatory strategy that prioritizes compliance, scalability, and business performance.
            </p>
          </div>

          {/* CTA — Discuss Your Project */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[#D2B06B] hover:text-[#E8D5A3] transition-colors uppercase mt-6"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '14px',
              letterSpacing: '0px',
              borderBottom: '1px solid rgba(210,176,107,0.4)',
              paddingBottom: '6px',
              width: 'fit-content',
            }}
          >
            Discuss Your Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ═══ DESKTOP: HERO ═══ */}
      <section
        className="hidden md:block relative w-full"
        style={{ minHeight: '600px', padding: '120px 0 80px' }}
      >
        {/* Trees illustration — desktop: bottom right */}
        <img
          src={treesAbout}
          alt=""
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: '45%',
            maxWidth: '650px',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-12 lg:px-20">
          {/* Label with gold line */}
          <div className="flex items-center gap-4 mb-6">
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
              Strategic Advisory
            </span>
          </div>

          {/* Heading — typed animation */}
          <h1
            className="relative text-[#E5E2E1] uppercase mb-16"
            style={{
              fontFamily: "'OCR A Std', monospace",
              fontSize: 'clamp(36px, 4vw, 56px)',
              lineHeight: '1.1',
            }}
          >
            <span aria-hidden className="invisible">About Us</span>
            <span className="absolute inset-0">
              <TypedText segments={aboutHeadingSegments} speed={70} />
            </span>
          </h1>

          {/* Description — centered block, left-aligned text */}
          <div className="flex justify-center">
            <p
              className="text-[#D2B06B]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: '1.15',
                width: '741.9px',
                maxWidth: '100%',
                textAlign: 'left',
              }}
            >
              50 Elixir's work is focused on execution, not theory. We partner
              with organizations to translate regulatory requirements into
              operating models that function in real healthcare environments,
              enabling solutions to move from concept to sustainable scale.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ DESKTOP: FOUNDER / ABOUT CONTENT ═══ */}
      <section className="hidden md:block" style={{ padding: '80px 0 0' }}>
        <div className="max-w-[1440px] mx-auto px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-12 lg:gap-20">
            {/* Left column — founder info */}
            <div className="col-span-4 lg:col-span-3 flex flex-col gap-10">
              {/* Founder card */}
              <div
                className="border-l-2 border-[#D2B06B]"
                style={{
                  backgroundColor: 'rgba(20,20,22,0.8)',
                  padding: '24px 28px',
                }}
              >
                <span
                  className="uppercase block mb-3"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '2px',
                    color: '#D2B06B',
                  }}
                >
                  Founder &amp; President
                </span>
                <h3
                  className="text-[#E5E2E1] mb-2"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '24px',
                  }}
                >
                  Tim Frost
                </h3>
                <a
                  href="mailto:TIM@50ELIXIR.COM"
                  className="text-[#9F9F9F] hover:text-[#D2B06B] transition-colors uppercase"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '1px',
                  }}
                >
                  TIM@50ELIXIR.COM
                </a>
              </div>

              {/* Qualifications */}
              <div>
                <span
                  className="uppercase block mb-3"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '2px',
                    color: '#9F9F9F',
                  }}
                >
                  Qualifications
                </span>
                <p
                  className="text-[#E5E2E1]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '15px',
                    lineHeight: '22px',
                  }}
                >
                  Registered Pharmacist (PharmD)
                </p>
              </div>

              {/* Operational Scope */}
              <div>
                <span
                  className="uppercase block mb-3"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '2px',
                    color: '#9F9F9F',
                  }}
                >
                  Operational Scope
                </span>
                <p
                  className="text-[#E5E2E1]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '15px',
                    lineHeight: '22px',
                  }}
                >
                  Healthcare Strategy Consultant | Pharmacist | Senior Fellow | Former Chief of Staff Idaho Attorney General
                </p>
              </div>
            </div>

            {/* Right column — main text */}
            <div className="col-span-8 lg:col-span-9 flex flex-col gap-6">
              {/* First text block */}
              <div className="flex flex-col gap-6" style={{ maxWidth: '700px' }}>
                <p
                  className="text-[#E5E2E1]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '18px',
                    lineHeight: '29.25px',
                  }}
                >
                  50 Elixir is a healthcare strategy and regulatory advisory firm focused on helping pharmacy, life sciences, and health technology organizations operate and scale in highly regulated environments
                </p>
                <p
                  className="text-[#E5E2E1]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '18px',
                    lineHeight: '29.25px',
                  }}
                >
                  The firm was founded to address a common problem in healthcare innovation: great ideas often stall when regulatory complexity, operational design, and market realities are not aligned. 50 Elixir helps organizations build business models that can succeed within existing regulatory frameworks while positioning for long-term growth.
                </p>
              </div>

              {/* Gold divider */}
              <div
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(210,176,107,0.4), rgba(210,176,107,0.1))',
                  margin: '16px 0',
                  maxWidth: '700px',
                }}
              />

              {/* Second text block */}
              <div className="flex flex-col gap-6" style={{ maxWidth: '700px' }}>
                <p
                  className="text-[#E5E2E1]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '18px',
                    lineHeight: '29.25px',
                  }}
                >
                  Founder Tim Frost is a pharmacist with extensive experience across healthcare operations, regulatory systems, and executive leadership. His background includes regulatory affairs roles at a Fortune-ranked healthcare company, oversight of statewide professional licensing agencies, and senior government operations leadership.
                </p>
                <p
                  className="text-[#E5E2E1]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '18px',
                    lineHeight: '29.25px',
                  }}
                >
                  This experience informs a pragmatic, execution-focused approach to regulatory strategy that prioritizes compliance, scalability, and business performance.
                </p>
              </div>

              {/* CTA — Discuss Your Project */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-[#D2B06B] hover:text-[#E8D5A3] transition-colors uppercase mt-0 mb-0"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '0px',
                  borderBottom: '1px solid rgba(210,176,107,0.4)',
                  paddingBottom: '6px',
                  width: 'fit-content',
                }}
              >
                Discuss Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MOUNTAIN + SUBSCRIBE ═══ */}
      <section className="about-mountain relative overflow-hidden flex flex-col" style={{ minHeight: '700px', padding: '40px 0 110px' }}>
        {/* Mountain background — desktop */}
        <img
          src={mountainBg2}
          alt=""
          className="hidden md:block absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            height: '83%',
          }}
        />
        {/* Mountain background — mobile */}
        <img
          src={mountainAboutMobile}
          alt=""
          className="md:hidden absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            height: '100%',
          }}
        />
        {/* Gradient fade to black at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]"
          style={{
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, #131313)',
          }}
        />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Subscribe block */}
        <div className="relative z-10 w-full px-5 md:px-0">
          <div
            className="about-subscribe-block max-w-[1100px] mx-auto"
            style={{
              backgroundColor: '#0E0E10',
              padding: '48px',
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
