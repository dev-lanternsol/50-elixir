import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#131313' }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-12">
        {/* Top row — desktop: single row | mobile: stacked centered */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 md:gap-8 mb-16">
          {/* Nav links */}
          <div className="flex items-center gap-8">
            {[
              { label: 'ABOUT', to: '/about' },
              { label: 'SERVICE', to: '/services' },
              { label: 'CONTACT US', to: '/contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#CDC6B3] hover:text-[#D2B06B] transition-colors uppercase"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '-0.35px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone + Email — on mobile shows before social icons */}
          <div className="flex items-center gap-8 order-2 md:order-3">
            <a
              href="tel:7347356251"
              className="text-[#CDC6B3] hover:text-[#D2B06B] transition-colors uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px',
                letterSpacing: '-0.35px',
                borderBottom: '1px solid rgba(205,198,179,0.3)',
                paddingBottom: '2px',
              }}
            >
              (734) 735-6251
            </a>
            <a
              href="mailto:TIM@50ELIXIR.COM"
              className="text-[#CDC6B3] hover:text-[#D2B06B] transition-colors uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px',
                letterSpacing: '-0.35px',
                borderBottom: '1px solid rgba(205,198,179,0.3)',
                paddingBottom: '2px',
              }}
            >
              TIM@50ELIXIR.COM
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5 order-3 md:order-2">
            {/* X / Twitter */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#CDC6B3] hover:text-[#D2B06B] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#CDC6B3] hover:text-[#D2B06B] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="50 Elixir" className="h-auto" style={{ width: '200px' }} />
        </div>

        {/* Description */}
        <p
          className="text-center text-[#9F9F9F] mb-12"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '13px',
            lineHeight: '22px',
            maxWidth: '500px',
            margin: '0 auto 48px',
          }}
        >
          50 Elixir provides strategic consulting and regulatory advisory services.
          <br />
          The firm does not engage in registered lobbying activities.
        </p>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p
            className="text-[#8C8577]"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px' }}
          >
            &copy; {new Date().getFullYear()} 50 Elixir. All rights reserved.
          </p>
          <p
            className="text-[#8C8577]"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px' }}
          >
            Designed and Developed by Lantern Sol
          </p>
        </div>
      </div>
    </footer>
  )
}
