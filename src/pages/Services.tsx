import mountainContact from '../assets/mountain-contact.png'
import topoMapBg from '../assets/topo-map-bg.png'

const SearchIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-1">
    <path d="M0.928571 7.44286L0 6.77143L2.85714 2.2L4.57143 4.2L6.85714 0.485714L8.57143 3.05714L10.5 0L11.4286 0.671429L8.6 5.15714L6.9 2.6L4.72857 6.12857L3 4.11429L0.928571 7.44286ZM7.71429 9.71429C8.11429 9.71429 8.45238 9.57619 8.72857 9.3C9.00476 9.02381 9.14286 8.68571 9.14286 8.28571C9.14286 7.88571 9.00476 7.54762 8.72857 7.27143C8.45238 6.99524 8.11429 6.85714 7.71429 6.85714C7.31429 6.85714 6.97619 6.99524 6.7 7.27143C6.42381 7.54762 6.28571 7.88571 6.28571 8.28571C6.28571 8.68571 6.42381 9.02381 6.7 9.3C6.97619 9.57619 7.31429 9.71429 7.71429 9.71429ZM10.6286 12L9.08571 10.4571C8.88571 10.5905 8.66905 10.6905 8.43571 10.7571C8.20238 10.8238 7.9619 10.8571 7.71429 10.8571C7 10.8571 6.39286 10.6071 5.89286 10.1071C5.39286 9.60714 5.14286 9 5.14286 8.28571C5.14286 7.57143 5.39286 6.96429 5.89286 6.46429C6.39286 5.96429 7 5.71429 7.71429 5.71429C8.42857 5.71429 9.03571 5.96429 9.53571 6.46429C10.0357 6.96429 10.2857 7.57143 10.2857 8.28571C10.2857 8.53333 10.2524 8.77381 10.1857 9.00714C10.119 9.24048 10.019 9.45714 9.88571 9.65714L11.4286 11.2L10.6286 12Z" fill="#D2B06B"/>
  </svg>
)

const TempleIcon = () => (
  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" className="flex-shrink-0 mt-1">
    <path d="M1.73878 9.00799V4.63297H2.61376V9.00799H1.73878ZM4.94709 9.00799V4.63297H5.82207V9.00799H4.94709ZM0 11.0496V10.1747H10.7692V11.0496H0ZM8.15541 9.00799V4.63297H9.03038V9.00799H8.15541ZM0 3.4663V2.6362L5.38458 0L10.7692 2.6362V3.4663H0ZM2.06855 2.59132H8.70061L5.38458 0.987156L2.06855 2.59132Z" fill="#D2B06B"/>
  </svg>
)

const ScaleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-1">
    <path d="M0.648442 12V10.0547H2.65861L1.00509 4.64018C0.713287 4.47807 0.472823 4.24031 0.283694 3.92689C0.0945645 3.61348 0 3.27845 0 2.92181C0 2.38144 0.189129 1.92212 0.567387 1.54387C0.945645 1.16561 1.40496 0.976478 1.94533 0.976478C2.36681 0.976478 2.74237 1.09806 3.072 1.34123C3.40162 1.58439 3.63128 1.8951 3.76097 2.27336H5.83598V1.62492C5.83598 1.4412 5.89812 1.28719 6.02241 1.16291C6.14669 1.03862 6.3007 0.976478 6.48442 0.976478C6.58169 0.976478 6.67626 0.998093 6.76812 1.04132C6.85998 1.08455 6.93833 1.1494 7.00318 1.23586L8.10553 0.198347C8.2028 0.101081 8.31898 0.0389383 8.45407 0.0119199C8.58916 -0.0150985 8.72155 0.00381437 8.85124 0.0686586L11.3802 1.23586C11.5099 1.3007 11.599 1.39526 11.6476 1.51955C11.6963 1.64383 11.6936 1.76542 11.6395 1.8843C11.5747 2.01399 11.4801 2.09774 11.3558 2.13557C11.2316 2.17339 11.11 2.16529 10.9911 2.11125L8.65671 1.04132L7.13287 2.4679V3.37572L8.65671 4.76987L10.9911 3.69994C11.11 3.6459 11.2343 3.6405 11.364 3.68373C11.4936 3.72695 11.5855 3.80801 11.6395 3.92689C11.7044 4.05658 11.7098 4.18086 11.6558 4.29975C11.6017 4.41863 11.5099 4.51049 11.3802 4.57533L8.85124 5.77495C8.72155 5.8398 8.58916 5.85871 8.45407 5.83169C8.31898 5.80467 8.2028 5.74253 8.10553 5.64526L7.00318 4.60776C6.93833 4.6726 6.85998 4.73204 6.76812 4.78608C6.67626 4.84011 6.58169 4.86713 6.48442 4.86713C6.3007 4.86713 6.14669 4.80499 6.02241 4.68071C5.89812 4.55642 5.83598 4.40242 5.83598 4.21869V3.57025H3.76097C3.72854 3.65671 3.69342 3.73776 3.65559 3.81341C3.61777 3.88907 3.56643 3.97012 3.50159 4.05658L6.7438 10.0547H9.07819V12H0.648442ZM1.94533 3.57025C2.12905 3.57025 2.28306 3.50811 2.40734 3.38382C2.53163 3.25954 2.59377 3.10553 2.59377 2.92181C2.59377 2.73808 2.53163 2.58407 2.40734 2.45979C2.28306 2.33551 2.12905 2.27336 1.94533 2.27336C1.7616 2.27336 1.6076 2.33551 1.48331 2.45979C1.35903 2.58407 1.29688 2.73808 1.29688 2.92181C1.29688 3.10553 1.35903 3.25954 1.48331 3.38382C1.6076 3.50811 1.7616 3.57025 1.94533 3.57025Z" fill="#D2B06B"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" className="flex-shrink-0 mt-1">
    <path d="M4.37498 7.6506C5.2769 6.83469 5.8548 6.26314 6.1087 5.93595C6.3626 5.60877 6.48955 5.28247 6.48955 4.95706C6.48955 4.64045 6.37476 4.36781 6.14518 4.13914C5.91561 3.91048 5.64188 3.79615 5.32401 3.79615C5.1348 3.79615 4.95541 3.83349 4.78585 3.90818C4.61628 3.98288 4.47933 4.08613 4.37498 4.21794C4.26953 4.08613 4.13333 3.98288 3.96637 3.90818C3.79941 3.83349 3.61927 3.79615 3.42595 3.79615C3.1096 3.79615 2.83626 3.91038 2.60592 4.13885C2.37558 4.36732 2.26041 4.63999 2.26041 4.95685C2.26041 5.12408 2.28259 5.27811 2.32695 5.41894C2.37132 5.55977 2.46891 5.7248 2.61974 5.91403C2.77057 6.10327 2.98438 6.33436 3.26119 6.60729C3.53799 6.88022 3.90925 7.228 4.37498 7.6506ZM4.37498 11.0496C3.11334 10.7056 2.06877 9.96299 1.24126 8.82176C0.413753 7.68052 0 6.40467 0 4.99421V1.63781L4.37498 0L8.74996 1.63781V4.99421C8.74996 6.40467 8.3362 7.68052 7.5087 8.82176C6.68119 9.96299 5.63662 10.7056 4.37498 11.0496ZM4.37498 10.1275C5.38609 9.80671 6.2222 9.16504 6.88331 8.20254C7.54442 7.24004 7.87498 6.1706 7.87498 4.99421V2.23796L4.37498 0.931067L0.874979 2.23796V4.99421C0.874979 6.1706 1.20553 7.24004 1.86665 8.20254C2.52776 9.16504 3.36387 9.80671 4.37498 10.1275Z" fill="#D2B06B"/>
  </svg>
)

const services = [
  {
    num: '01',
    category: 'Strategic Pillar',
    title: 'Pharmacy and Care Delivery Operating Models',
    description:
      'Strategic advisory for community pharmacy, mail-order, specialty pharmacy, and emerging care delivery platforms operating under pharmacy and medical regulatory frameworks.',
    detail:
      'We support organizations designing scalable pharmacy operations, telehealth-enabled services, and integrated medication access models that align clinical care, compliance requirements, and patient experience.',
    bordered: false,
    iconType: 'shield' as const,
  },
  {
    num: '02',
    category: 'Precision Grid',
    title: 'Pharmaceutical Manufacturing, API and Healthcare Infrastructure',
    description:
      'Advisory services for pharmaceutical manufacturers, API producers, diagnostics laboratories, and FDA-regulated outsourcing facilities operating under cGMP standards.',
    detail:
      'Services include regulatory readiness, facility and workforce strategy, quality systems design, supply chain planning, and market positioning for hospital, health system, and enterprise buyers.',
    bordered: true,
    iconType: 'scale' as const,
  },
  {
    num: '03',
    category: 'Precision Grid',
    title: 'Digital Health, AI and Diagnostic Platforms',
    description:
      'Strategic advisory for digital health and artificial intelligence platforms deploying automation in clinical, diagnostic, and administrative workflows.',
    detail:
      'We focus on regulatory risk assessment, FDA device and diagnostic pathways, clinical governance models, and operational integration within healthcare delivery systems.',
    bordered: true,
    iconType: 'temple' as const,
  },
  {
    num: '04',
    category: 'Strategic Pillar',
    title: 'Executive Strategy, Growth and Risk Navigation',
    description:
      'Executive-level advisory for founders, boards, and leadership teams navigating regulatory exposure, business model risk, and complex growth decisions in healthcare and life sciences markets.',
    detail:
      'Includes enterprise partnerships, institutional credibility, crisis response, and strategic positioning for capital, customers, and regulators.',
    bordered: false,
    iconType: 'shield' as const,
  },
  {
    num: '05',
    category: 'Strategic Pillar',
    title: 'Investor, Transaction and Strategic Partner Advisory',
    description:
      'Strategic advisory for venture capital firms, private investors, law firms, and financial institutions evaluating, investing in, or supporting healthcare and life sciences businesses operating in regulated environments.',
    detail:
      'Engagements may include regulatory and operational risk assessments, strategic diligence, post-investment operating strategy, portfolio company advisory, and facilitation of strategic partnerships across healthcare operators, manufacturers, and technology platforms.',
    bordered: false,
    iconType: 'search' as const,
  },
  {
    num: '06',
    category: 'Precision Grid',
    title: 'Regulatory Intelligence and Strategic Analysis',
    description:
      'Ongoing monitoring and interpretation of regulatory, enforcement, and licensure activity translated into actionable business guidance, enabling organizations to adapt operations proactively rather than reactively.',
    detail: '',
    bordered: true,
    iconType: 'circle' as const,
  },
]

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* ═══ MAIN SERVICES SECTION — huge bg ═══ */}
      <section className="relative">
        {/* Topographic map background */}
        <img
          src={topoMapBg}
          alt=""
          className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            opacity: 0.18,
          }}
        />
        {/* Gradient fade to black at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]"
          style={{
            height: '15%',
            background: 'linear-gradient(to bottom, transparent, rgb(17, 17, 17))',
          }}
        />

        <div className="services-content relative z-10 max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20" style={{ paddingTop: '120px' }}>
          {/* Label with gold line */}
          <div className="relative z-10 flex items-center gap-4 mb-6">
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
              Solutions We Provide
            </span>
          </div>

          {/* Heading with dark blob behind */}
          <div className="relative mb-8 md:mb-24">
            <div
              className="absolute pointer-events-none"
              style={{
                top: '50%',
                left: '30%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '600px',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 65%)',
                zIndex: 0,
              }}
            />
            <h1
              className="relative z-[1] text-[#E5E2E1] uppercase"
              style={{
                fontFamily: "'OCR A Std', monospace",
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: '1.15',
              }}
            >
              Services &amp;
              <br />
              Solutions
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
            {services.map((service, i) => (
              <div
                key={service.num}
                className={`relative flex flex-col gap-5 ${i % 2 === 1 ? 'services-card-offset' : ''}`}
              >
                {/* Dark radial blob behind each card */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 65%)',
                    zIndex: 0,
                  }}
                />
                {/* Card content */}
                <div
                  className={`relative z-[1] flex flex-col gap-5 ${service.bordered ? 'services-card-bordered' : 'services-card-pillar'}`}
                  style={{
                    backgroundColor: service.bordered
                      ? '#0E0E10E5'
                      : 'transparent',
                    padding: '32px',
                    ...(service.bordered
                      ? { border: '1px solid rgba(194,162,125,0.25)' }
                      : { borderLeft: '1px solid #D2B06B' }),
                  }}
                >

                {!service.bordered ? (
                  /* ═══ STRATEGIC PILLAR LAYOUT (01, 04, 05) ═══ */
                  <>
                    {/* Category label */}
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '3px',
                        lineHeight: '15px',
                        color: '#D2B06B',
                        fontWeight: 600,
                      }}
                    >
                      {service.category}
                    </span>

                    {/* Title + Number row */}
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="text-[#E5E2E1] uppercase flex-1"
                        style={{
                          fontFamily: "'OCR A Std', monospace",
                          fontSize: 'clamp(18px, 2vw, 24px)',
                          lineHeight: '1.3',
                        }}
                      >
                        {service.title}
                      </h3>
                      <span
                        className="flex-shrink-0"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '60px',
                          lineHeight: '60px',
                          letterSpacing: '0px',
                          color: 'rgba(210, 176, 107, 0.2)',
                          fontWeight: 500,
                        }}
                      >
                        {service.num}
                      </span>
                    </div>

                    {/* Description — italic */}
                    <p
                      className="text-[#E5E2E1]"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        lineHeight: '26px',
                        fontStyle: 'italic',
                        opacity: 0.85,
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Detail with icon */}
                    {service.detail && (
                      <div className="flex gap-3 items-start">
                        {service.iconType === 'shield' ? (
                          <ShieldIcon />
                        ) : service.iconType === 'scale' ? (
                          <ScaleIcon />
                        ) : service.iconType === 'temple' ? (
                          <TempleIcon />
                        ) : service.iconType === 'search' ? (
                          <SearchIcon />
                        ) : null}
                        <p
                          className="text-[#E5E2E1]"
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '14px',
                            lineHeight: '22px',
                            opacity: 0.7,
                          }}
                        >
                          {service.detail}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  /* ═══ PRECISION GRID LAYOUT (02, 03, 06) ═══ */
                  <>
                    {/* Category — white */}
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '3px',
                        lineHeight: '15px',
                        color: '#E5E2E1',
                        fontWeight: 600,
                      }}
                    >
                      {service.category}
                    </span>

                    {/* Title — gold */}
                    <h3
                      className="text-[#D2B06B] uppercase"
                      style={{
                        fontFamily: "'OCR A Std', monospace",
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        lineHeight: '1.3',
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description — italic */}
                    <p
                      className="text-[#E5E2E1]"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        lineHeight: '26px',
                        fontStyle: 'italic',
                        opacity: 0.85,
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Detail with icon + Number bottom-right */}
                    <div className="relative" style={{ minHeight: '60px' }}>
                      {service.detail && (
                        <div className="flex gap-3 items-start" style={{ paddingRight: '80px' }}>
                          {service.iconType === 'shield' ? (
                            <ShieldIcon />
                          ) : service.iconType === 'scale' ? (
                            <ScaleIcon />
                          ) : service.iconType === 'temple' ? (
                            <TempleIcon />
                          ) : service.iconType === 'search' ? (
                            <SearchIcon />
                          ) : null}
                          <p
                            className="text-[#E5E2E1]"
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                              fontSize: '14px',
                              lineHeight: '22px',
                              opacity: 0.7,
                            }}
                          >
                            {service.detail}
                          </p>
                        </div>
                      )}
                      <span
                        className="absolute bottom-0 right-0"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '60px',
                          lineHeight: '60px',
                          letterSpacing: '0px',
                          color: 'rgba(210, 176, 107, 0.2)',
                          fontWeight: 500,
                        }}
                      >
                        {service.num}
                      </span>
                    </div>
                  </>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ═══ MOUNTAIN + SUBSCRIBE ═══ */}
      <section className="relative overflow-hidden flex flex-col" style={{ padding: '0px 0 110px', minHeight: '850px', marginTop: '-195px' }}>
        {/* Mountain background */}
        <img
          src={mountainContact}
          alt=""
          className="absolute bottom-0 left-0 w-full pointer-events-none"
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
            background: 'linear-gradient(to bottom, transparent, rgb(17, 17, 17))',
          }}
        />

        {/* Spacer */}
        <div style={{ minHeight: '40px' }} className="flex-1" />

        {/* Subscribe block */}
        <div className="relative z-10 w-full px-5 md:px-0">
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
