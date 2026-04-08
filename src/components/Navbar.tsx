import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

const navLinks = [
  { label: 'ABOUT', to: '/about' },
  { label: 'SERVICES', to: '/services' },
  { label: 'CONTACT US', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: 'blur(24px)',
          backgroundColor: '#13131399',
          boxShadow: '0px 1px 0px rgba(226, 207, 112, 0.1)',
        }}
      >
        {/* ═══ DESKTOP header ═══ */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 gap-5">
          <Link to="/">
            <img src={logo} alt="50 Elixir" className="h-auto object-cover" style={{ width: '169.8px' }} />
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm uppercase transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-[#D2B06B]'
                    : 'text-[#CDC6B3] hover:text-[#D2B06B]'
                }`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '-0.35px',
                  lineHeight: '20px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="flex items-center justify-center uppercase text-[#E5E2E1] text-base"
            style={{
              fontFamily: "'Manrope', sans-serif",
              letterSpacing: '0.6px',
              lineHeight: '16px',
              height: '48px',
              padding: '24px 14px',
              background:
                'radial-gradient(14.21% 187.56% at 50% 50%, rgba(233, 232, 230, 0.2), rgba(230, 230, 227, 0.2)) padding-box, linear-gradient(rgba(14, 14, 16, 0.3), rgba(14, 14, 16, 0.3)) padding-box, linear-gradient(90deg, rgba(204, 202, 201, 0.44), rgba(101, 100, 99, 0.44)) border-box',
              border: '0.8px solid transparent',
              boxSizing: 'border-box',
            }}
          >
            DISCUSS YOUR PROJECT
          </Link>
        </div>

        {/* ═══ MOBILE header (closed) — hamburger left, logo center ═══ */}
        <div className="md:hidden flex items-center px-8 py-4">
          <button
            className="text-[#D2B06B]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img src={logo} alt="50 Elixir" className="h-auto object-cover" style={{ width: '140px' }} />
            </Link>
          </div>
          <div style={{ width: '24px' }} />
        </div>
      </nav>

      {/* ═══ MOBILE fullscreen menu (outside nav to avoid stacking context) ═══ */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: '#0E0E10' }}
        >
          {/* Top bar — X + logo */}
          <div className="flex items-center px-8 py-4">
            <button
              className="text-[#D2B06B]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <div className="flex-1 flex justify-center">
              <img src={logo} alt="50 Elixir" className="h-auto object-cover" style={{ width: '140px' }} />
            </div>
            <div style={{ width: '24px' }} />
          </div>

          {/* Gold line separator */}
          <div style={{ height: '1px', background: 'rgba(210, 176, 107, 0.2)' }} />

          {/* Nav links */}
          <div className="flex flex-col gap-6 px-8 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`uppercase ${
                  location.pathname === link.to ? 'text-[#D2B06B]' : 'text-[#CDC6B3]'
                }`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '22px',
                  letterSpacing: '1px',
                  lineHeight: '30px',
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Discuss Your Project button */}
          <div className="px-8 mt-10">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="uppercase text-[#E5E2E1] text-base text-center block w-full"
              style={{
                fontFamily: "'Manrope', sans-serif",
                letterSpacing: '2px',
                lineHeight: '16px',
                padding: '20px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(194,162,125,0.4)',
              }}
            >
              DISCUSS YOUR PROJECT
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
