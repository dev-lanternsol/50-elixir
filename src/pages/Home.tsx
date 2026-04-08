import { Link } from 'react-router-dom'
import mountainLines from '../assets/mountain-lines.png'
import treesIllustration from '../assets/trees-illustration.png'
import founderPhoto from '../assets/founder.jpg'
import capitolDome from '../assets/capitol-dome.png'
import pubThumb1 from '../assets/pub-thumb-1.png'
import pubThumb2 from '../assets/pub-thumb-2.png'
import mountainBg from '../assets/mountain-bg.png'
import treesMobile from '../assets/trees-mobile.png'

/* ── Shared button style from Figma ─────────────────────────── */

const btnGlass: React.CSSProperties = {
  background:
    'radial-gradient(14.21% 187.56% at 50% 50%, rgba(233,232,230,0.2), rgba(230,230,227,0.2)) padding-box, linear-gradient(rgba(14,14,16,0.3), rgba(14,14,16,0.3)) padding-box, linear-gradient(90deg, rgba(204,202,201,0.44), rgba(101,100,99,0.44)) border-box',
  border: '0.8px solid transparent',
}

const btnGold: React.CSSProperties = {
  background:
    'radial-gradient(14.21% 187.56% at 50% 50%, rgba(233,232,230,0.2), rgba(230,230,227,0.2)) padding-box, linear-gradient(rgba(14,14,16,0.3), rgba(14,14,16,0.3)) padding-box, linear-gradient(90deg, rgba(194,162,125,0.44), rgba(92,77,59,0.44)) border-box',
  border: '0.8px solid transparent',
}

/* ── Service card data ──────────────────────────────────────── */

const services = [
  {
    num: '01 /',
    title: 'Pharmacy and Care\nDelivery Operating\nModels',
    desc: 'Strategic advisory for community pharmacy, mail-order, specialty pharmacy, and emerging care delivery platforms operating under pharmacy and medical regulatory frameworks.',
    tags: 'Scalable Operations // Telehealth // Medication Access',
  },
  {
    num: '02 /',
    title: 'Pharmaceutical\nManufacturing, API &\nHealthcare Infrastructure',
    desc: 'Advisory services for pharmaceutical manufacturers, API producers, diagnostics laboratories, and FDA-regulated outsourcing facilities operating under cGMP standards.',
    tags: 'cGMP Standards // Quality Systems // Supply Chain Resilience',
  },
  {
    num: '03 /',
    title: 'Digital Health, AI\nand Diagnostic\nPlatforms',
    desc: 'Strategic advisory for digital health and artificial intelligence platforms deploying automation in clinical, diagnostic, and administrative workflows.',
    tags: 'FDA Device Pathways // Clinical Governance // Operational Integration',
  },
  {
    num: '04 /',
    title: 'Executive Strategy,\nGrowth and Risk\nNavigation',
    desc: 'Executive-level advisory for founders, boards, and leadership teams navigating regulatory exposure, business model risk, and complex growth decisions.',
    tags: 'Risk Navigation // Crisis Response // Institutional Credibility',
  },
  {
    num: '05 /',
    title: 'Investor,\nTransaction and\nStrategic Partner\nAdvisory',
    desc: 'Strategic advisory for venture capital, private investors, and financial institutions evaluating or supporting healthcare businesses in regulated environments.',
    tags: 'Regulatory Diligence // Post-Investment Strategy // Strategic Partnerships',
  },
  {
    num: '06 /',
    title: 'Regulatory\nIntelligence\nand Strategic\nAnalysis',
    desc: 'Ongoing monitoring and interpretation of regulatory, enforcement, and licensure activity translated into actionable business guidance, enabling organizations to adapt operations proactively rather than reactively.',
    tags: 'Impact Analysis // Licensure Monitoring // Strategic Foresight',
  },
]

const publications = [
  {
    tag: 'Regulatory',
    title: 'Navigating the complexities of 503B compounding regulations.',
    img: pubThumb1,
  },
  {
    tag: 'Infrastructure',
    title: 'Scale vs. Safety: Building resilient healthcare supply chains.',
    img: pubThumb2,
  },
  {
    tag: 'Innovation',
    title: 'Artificial Intelligence in diagnostics: Beyond the hype.',
    img: pubThumb1,
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-[920px] md:h-[758px]">
        {/* Mountain line art */}
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none"
          style={{ height: '501px' }}
        >
          <img
            src={mountainLines}
            alt=""
            className="w-full object-cover object-left-bottom"
            style={{ height: '375px' }}
          />
        </div>

        {/* Gradient fade overlay 1 */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: '169px',
            height: '195px',
            background: 'linear-gradient(180deg, rgba(14,14,16,0), #0E0E10)',
          }}
        />

        {/* Gradient fade overlay 2 */}
        <div
          className="absolute left-0 right-0 bottom-0 pointer-events-none"
          style={{
            top: '325px',
            background: 'linear-gradient(180deg, rgba(14,14,16,0), #0E0E10)',
          }}
        />

        {/* Trees illustration — desktop */}
        <img
          src={treesIllustration}
          alt=""
          className="absolute bottom-0 right-0 pointer-events-none hidden md:block md:w-[55%] md:max-w-[750px]"
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom right',
            maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
          }}
        />
        {/* Trees illustration — mobile */}
        <img
          src={treesMobile}
          alt=""
          className="absolute bottom-0 right-0 pointer-events-none opacity-50 block md:hidden w-full max-w-[500px]"
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom right',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 60%, transparent 100%)',
          }}
        />

        {/* Heading */}
        <h1
          className="absolute text-[#E5E2E1] uppercase top-[185px] md:top-[323px] text-[28px] md:text-[clamp(28px,3.3vw,48px)] leading-[32px] md:leading-[48px]"
          style={{
            left: '20px',
            right: '20px',
            fontFamily: "'OCR A Std', 'OCR-A', monospace",
            maxWidth: '1113px',
          }}
        >
          Strategic Advisory at the Intersection of{' '}
          <span className="text-[#D2B06B]">Healthcare</span>, Manufacturing,
          and Technology.
        </h1>

        {/* Subtext + CTAs */}
        <div
          className="absolute flex flex-col items-start top-[440px] md:top-[518px]"
          style={{
            left: '20px',
            right: '20px',
            maxWidth: '762px',
            gap: '32px',
          }}
        >
          <p
            className="text-[#E5E2E1] text-lg"
            style={{
              fontFamily: "'Manrope', sans-serif",
              lineHeight: '21px',
              maxWidth: '742px',
            }}
          >
            From pharmacy and healthcare delivery platforms to pharmaceutical
            manufacturing and AI-enabled diagnostics, 50 Elixir helps
            organizations design compliant, scalable operating models and execute
            growth in complex healthcare environments.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-start gap-4 md:gap-6 pt-4 w-full md:w-auto">
            <Link
              to="/services"
              className="flex items-center justify-center text-[#E5E2E1] uppercase hero-btn"
              style={{
                ...btnGlass,
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                letterSpacing: '0.6px',
                lineHeight: '16px',
                padding: '24px',
              }}
            >
              WORK WITH 50 ELIXIR
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center text-[#E5E2E1] uppercase hero-btn"
              style={{
                ...btnGold,
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                letterSpacing: '0.6px',
                lineHeight: '16px',
                padding: '24px',
              }}
            >
              DISCUSS YOUR PROJECT
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BUILDING SOLUTIONS ═══ */}
      <section className="pt-0 md:pt-56 pb-24 md:pb-32" style={{ backgroundColor: '#0E0E10' }}>
        <div className="mx-auto max-w-[1440px] px-5 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left — heading with left border */}
            <h2
              className="text-[#E5E2E1] uppercase text-[26px] md:text-[clamp(28px,3vw,42px)]"
              style={{
                fontFamily: "'OCR A Std', monospace",
                lineHeight: '1.15',
              }}
            >
              Building Solutions for Healthcare&apos;s Hardest Problems.
            </h2>

            {/* Right — body copy */}
            <div
              className="flex flex-col gap-[10px] md:gap-6 text-[#E5E2E1] border-t-0 md:border-l border-white/10 pt-0 md:pt-0 md:pl-8 text-[16px] md:text-[17px] leading-normal md:leading-[28px]"
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <p>
                The hardest challenges in healthcare are rarely technical alone. They sit at the intersection of regulation, operations, and market reality.
              </p>
              <p>
                50 Elixir helps organizations tackle those challenges by designing scalable, compliant operating models across pharmacy, manufacturing, and digital health.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ PUBLISHED IN / FEATURED IN ═══ */}
        <div className="mt-32 md:mt-72 text-center">
          <p
            className="uppercase text-[#E5E2E1] mb-10"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '17.3px',
              lineHeight: '24.48px',
              letterSpacing: '0.5px',
            }}
          >
            Published In / Featured In
          </p>

          {/* Scrolling logo carousel — infinite loop */}
          <div className="overflow-hidden w-full" style={{ height: '60px' }}>
            <div className="logo-scroll flex items-center" style={{ width: 'max-content' }}>
              {[0, 1, 2].map((setIndex) => (
                <div key={setIndex} className="flex items-center gap-28 pr-28">
                  <span className="text-[#E5E2E1]/40 text-lg font-bold whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>JAMA &nbsp;|&nbsp; <span className="font-normal">JAMA Network</span></span>
                  <span className="text-[#E5E2E1]/40 text-sm whitespace-nowrap border border-[#E5E2E1]/20 px-3 py-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Health Affairs</span>
                  <span className="text-[#E5E2E1]/40 text-lg font-bold whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>AJHP <span className="text-xs font-normal">American Journal of<br/>Health-System Pharmacy</span></span>
                  <span className="text-[#E5E2E1]/40 text-xs whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>U.S. FOOD &amp; DRUG<br/>ADMINISTRATION</span>
                  <span className="text-[#E5E2E1]/40 text-2xl italic whitespace-nowrap" style={{ fontFamily: "serif" }}>N</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR ORIGIN ═══ */}
      <section className="flex flex-col items-center py-8 md:py-32">
        <div className="w-full max-w-[1395px] px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
          {/* Left — text */}
          <div className="w-full md:max-w-[592px] flex flex-col gap-6 md:gap-8 order-1 md:order-none">
            <span
              className="text-[#D2B06B] uppercase"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '12px',
                letterSpacing: '4.8px',
                lineHeight: '16px',
              }}
            >
              About 50 Elixir
            </span>

            <h2
              className="text-[#E5E2E1] text-[26px] md:text-[40px] leading-[30px] md:leading-[40px]"
              style={{
                fontFamily: "'OCR A Std', monospace",
              }}
            >
              OUR ORIGIN
            </h2>

            <div className="flex flex-col gap-[10px] md:gap-6">
              <p
                className="text-[#E5E2E1] text-[16px] md:text-[18px] leading-normal md:leading-[29.25px]"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                50 Elixir is a healthcare strategy and regulatory advisory firm focused on helping pharmacy, life sciences, and health technology organizations operate and scale in highly regulated environments.
              </p>
              <p
                className="text-[#E5E2E1] text-[16px] md:text-[18px] leading-normal md:leading-[29.25px]"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Founded by a pharmacist with executive-level regulatory and healthcare operations experience, 50 Elixir bridges the gap between compliance requirements and real-world business execution.
              </p>
            </div>
          </div>

          {/* Right — founder photo (below text on mobile) */}
          <img
            src={founderPhoto}
            alt="Founder"
            className="object-cover grayscale w-full md:w-[544px] h-[300px] md:h-[440px] order-2 md:order-none"
            style={{
              maxWidth: '100%',
              boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          />
        </div>
      </section>

      {/* ═══ OUR FOUNDATION ═══ */}
      <section className="relative pb-4 md:pb-32 pt-4 md:pt-0">
        {/* Capitol dome — desktop: absolute left overlapping; mobile: below text */}
        <img
          src={capitolDome}
          alt="Capitol dome illustration"
          className="absolute left-0 pointer-events-none w-1/2 max-w-[720px] h-auto hidden md:block"
          style={{
            top: '-300px',
            zIndex: 0,
            objectFit: 'contain',
            objectPosition: 'left bottom',
            maskImage: 'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)',
          }}
        />

        <div className="relative z-10 w-full max-w-[1395px] mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-end">
          {/* Text */}
          <div className="w-full md:max-w-[614px] flex flex-col gap-6 md:gap-8">
            <h2
              className="text-[#E5E2E1] uppercase text-[26px] md:text-[40px] leading-[30px] md:leading-[40px]"
              style={{
                fontFamily: "'OCR A Std', monospace",
              }}
            >
              Our Foundation
            </h2>

            <div className="flex flex-col gap-[10px] md:gap-6">
              <p
                className="text-[#E5E2E1] text-[16px] md:text-[18px] leading-normal md:leading-[29.25px]"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                Prior to founding the firm, Tim Frost served in regulatory affairs for a Fortune-ranked healthcare company, oversaw statewide professional licensing agencies, and worked in senior government operations roles. This background informs a practical, business-first approach to regulatory strategy grounded in how healthcare systems actually function.
              </p>
              <div className="flex flex-col items-end gap-2">
                <p
                  className="text-[#E5E2E1] w-full text-[16px] md:text-[18px] leading-normal md:leading-[29.25px]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  50 Elixir's work is focused on execution, not theory. We partner with organizations to translate regulatory requirements into operating models that function in real healthcare environments, enabling solutions to move from concept to sustainable scale.
                </p>
                <Link
                  to="/about"
                  className="text-[#CDC6B3] font-light"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16px',
                    lineHeight: '24px',
                  }}
                >
                  About Us →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Capitol dome — mobile: below text, full width, large */}
        <img
          src={capitolDome}
          alt="Capitol dome illustration"
          className="block md:hidden w-full pointer-events-none"
          style={{
            marginTop: '-60px',
            opacity: 0.6,
            maskImage: 'linear-gradient(180deg, transparent 0%, black 25%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 25%, black 85%, transparent 100%)',
          }}
        />
      </section>

      {/* ═══ WHAT WE DO – SERVICES ═══ */}
      <section className="overflow-hidden" style={{ padding: '64px 18px' }}>
        <div className="max-w-[1400px] mx-auto flex flex-col">
          {/* Header — 12-col grid */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16">
            {/* Left: label + heading */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
              <span
                className="text-[#D2B06B] uppercase"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '3.6px',
                  lineHeight: '16px',
                }}
              >
                Services &amp; Solutions
              </span>
              <h2
                className="text-[#E5E2E1] uppercase text-[26px] md:text-[48px] leading-[30px] md:leading-[48px]"
                style={{
                  fontFamily: "'OCR A Std', monospace",
                }}
              >
                What We <span className="text-[#D2B06B]">Do.</span>
              </h2>
            </div>

            {/* Right: description with gold left border */}
            <div className="col-span-12 md:col-start-9 md:col-span-4 flex items-start">
              <div
                className="border-l pl-8 text-[14px] md:text-[18px] leading-[20px] md:leading-[29.25px]"
                style={{
                  borderColor: 'rgba(210, 176, 107, 0.3)',
                  fontFamily: "'Manrope', sans-serif",
                  color: '#E5E2E1',
                }}
              >
                Specialized expertise across the highly regulated pillars of the modern healthcare ecosystem.
              </div>
            </div>
          </div>

          {/* Service rows */}
          <div className="flex flex-col">
            {services.map((s) => (
              <div
                key={s.num}
                className="grid grid-cols-12 gap-4 md:gap-8"
                style={{
                  borderTop: '1px solid rgba(76, 70, 56, 0.2)',
                  padding: '64px 16px',
                }}
              >
                {/* Number */}
                <div className="hidden md:block col-span-1">
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(210, 176, 107, 0.4)',
                    }}
                  >
                    {s.num}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-4">
                  <span
                    className="block md:hidden mb-2"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(210, 176, 107, 0.4)',
                    }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="text-[#E5E2E1] whitespace-pre-line text-[20px] md:text-[30px] leading-[26px] md:leading-[37.5px]"
                    style={{
                      fontFamily: "'OCR A Std', monospace",
                    }}
                  >
                    {s.title}
                  </h3>
                </div>

                {/* Description + tags */}
                <div className="col-span-12 md:col-start-7 md:col-span-6 flex flex-col gap-6">
                  <p
                    className="text-[#E5E2E1] text-[16px] md:text-[18px] leading-[24px] md:leading-[29.25px]"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {s.desc}
                  </p>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '12px',
                      letterSpacing: '1.2px',
                      lineHeight: '16px',
                      color: 'rgba(210, 176, 107, 0.6)',
                    }}
                  >
                    {s.tags}
                  </span>
                </div>
              </div>
            ))}

            {/* Bottom border on last item */}
            <div style={{ borderTop: '1px solid rgba(76, 70, 56, 0.2)' }} />
          </div>

          {/* View Services link */}
          <div className="flex justify-end mt-6">
            <Link
              to="/services"
              className="text-[#CDC6B3] font-light"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BRANDS THAT TRUST US ═══ */}
      <section className="mt-12 md:mt-16 text-center">
        <p
          className="uppercase text-[#E5E2E1] mb-2"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '17.3px',
            lineHeight: '24.48px',
            letterSpacing: '0.5px',
          }}
        >
          Brands That Trust Us
        </p>
        <p
          className="text-[#E5E2E1]/50 mb-10"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          Select engagements include past clients, partners, and current work.
        </p>

        {/* Scrolling logo carousel — infinite loop */}
        <div className="overflow-hidden w-full" style={{ height: '60px' }}>
          <div className="brands-scroll flex items-center" style={{ width: 'max-content' }}>
            {[0, 1, 2].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-24 pr-24">
                <span className="text-[#E5E2E1]/40 text-sm whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>HERO</span>
                <span className="text-[#E5E2E1]/40 text-sm whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>208 Companies</span>
                <span className="text-[#E5E2E1]/40 text-xl italic whitespace-nowrap" style={{ fontFamily: "serif" }}>hims</span>
                <span className="text-[#E5E2E1]/40 text-sm whitespace-nowrap font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>+ CAPSULE</span>
                <span className="text-[#E5E2E1]/40 text-sm whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>build_</span>
                <span className="text-[#E5E2E1]/40 text-sm whitespace-nowrap tracking-wider" style={{ fontFamily: "'Manrope', sans-serif" }}>OPTIMERX</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESEARCH & PUBLICATIONS ═══ */}
      <section style={{ padding: '96px 18px' }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Label */}
          <span
            className="text-[#D2B06B] uppercase block mb-12"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              letterSpacing: '3.6px',
              lineHeight: '16px',
            }}
          >
            Research &amp; Publications
          </span>

          {/* 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <article key={pub.title} className="group flex flex-col">
                {/* Thumbnail */}
                <div className="overflow-hidden mb-6" style={{ maxHeight: '202px' }}>
                  <img
                    src={pub.img}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tag */}
                <span
                  className="text-[#D2B06B] uppercase mb-3"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '12px',
                    letterSpacing: '2px',
                    lineHeight: '16px',
                  }}
                >
                  {pub.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-[#E5E2E1] mb-4"
                  style={{
                    fontFamily: "'OCR A Std', monospace",
                    fontSize: '22px',
                    lineHeight: '30px',
                  }}
                >
                  {pub.title}
                </h3>

                {/* Read more */}
                <span
                  className="text-[#D2B06B] uppercase"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '12px',
                    letterSpacing: '1.2px',
                    lineHeight: '16px',
                  }}
                >
                  READ MORE →
                </span>
              </article>
            ))}
          </div>

          {/* View Publications link */}
          <div className="flex justify-end mt-10">
            <Link
              to="/services"
              className="text-[#CDC6B3] font-light"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              View Publications →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GET IN TOUCH / CONTACT ═══ */}
      <section className="relative overflow-hidden flex flex-col" style={{ padding: '0px 0 110px', minHeight: '1220px' }}>
        {/* Mountain background */}
        <img
          src={mountainBg}
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
            background: 'linear-gradient(to bottom, transparent, #131313)',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24" style={{ alignItems: 'start' }}>
            {/* Left — text */}
            <div className="mt-0 md:mt-[40px]">
              <span
                className="text-[#D2B06B] uppercase block mb-6"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '3.6px',
                  lineHeight: '16px',
                }}
              >
                Get In Touch
              </span>

              <h2
                className="text-[#E5E2E1] uppercase mb-8"
                style={{
                  fontFamily: "'OCR A Std', monospace",
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  lineHeight: '1.2',
                }}
              >
                Ready to bridge the gap between compliance and execution?
              </h2>

              <p
                className="text-[#E5E2E1] mb-4 w-[90%]"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '16px',
                  lineHeight: '26px',
                }}
              >
                Direct inquiries regarding strategic advisory,<br />
                regulatory compliance, or growth strategy.
              </p>

              <a
                href="mailto:tim@50elixir.com"
                className="inline-flex items-center gap-3 text-[#D2B06B] hover:text-[#E8D5A3] transition-colors"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '16px',
                }}
              >
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="1" width="18" height="14" rx="2" />
                  <path d="M1 1l9 7 9-7" />
                </svg>
                tim@50elixir.com
              </a>
            </div>

            {/* Right — contact form (pushed down) */}
            <form
              className="flex flex-col gap-5 mt-0 md:!mt-[480px]"
              style={{ backgroundColor: '#0E0E10', padding: '32px', borderRadius: '4px' }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-[#E5E2E1]/60 uppercase mb-2"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '11px',
                      letterSpacing: '2px',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#1a1a1c] border border-[rgba(194,162,125,0.4)] px-4 py-3 text-[#E5E2E1] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/50 focus:outline-none transition-colors"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[#E5E2E1]/60 uppercase mb-2"
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
                    className="w-full bg-[#1a1a1c] border border-[rgba(194,162,125,0.4)] px-4 py-3 text-[#E5E2E1] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/50 focus:outline-none transition-colors"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label
                  className="block text-[#E5E2E1]/60 uppercase mb-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '2px',
                  }}
                >
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Health Systems Inc."
                  className="w-full bg-[#1a1a1c] border border-[rgba(194,162,125,0.4)] px-4 py-3 text-[#E5E2E1] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/50 focus:outline-none transition-colors"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-[#E5E2E1]/60 uppercase mb-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '2px',
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we assist you?"
                  className="w-full bg-[#1a1a1c] border border-[rgba(194,162,125,0.4)] px-4 py-3 text-[#E5E2E1] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/50 focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
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
        <div className="relative z-10 w-full">
          <div
            className="max-w-[1100px] mx-auto"
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
                className="text-[#E5E2E1]/60"
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
                  className="block text-[#E5E2E1]/60 uppercase mb-2"
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
                  className="bg-[#1a1a1c] border border-[rgba(194,162,125,0.4)] px-4 py-3 text-[#E5E2E1] text-sm placeholder:text-[#E5E2E1]/30 focus:border-[#D2B06B]/50 focus:outline-none transition-colors w-full md:w-[240px]"
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
