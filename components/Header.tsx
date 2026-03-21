'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md shadow-[0_1px_0_#E4E4E0]'
          : 'bg-bg-primary border-b border-border-light'
      }`}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span
              className="font-logo font-semibold text-text-primary"
              style={{ fontSize: '1.55rem', letterSpacing: '-0.01em', lineHeight: 1 }}
            >
              Comores Digital
            </span>
            <span className="text-[10px] font-sans text-text-tertiary tracking-[0.18em] uppercase mt-1">
              Solutions numériques
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Offres', href: '#offres' },
              { label: 'Approche', href: '#approche' },
              { label: 'Feuille de route', href: '#feuille-de-route' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-sans text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="text-sm font-sans px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-150"
            >
              Échanger sur un besoin
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M4 4 L16 16 M16 4 L4 16" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border-light py-4 flex flex-col gap-4">
            {[
              { label: 'Offres', href: '#offres' },
              { label: 'Approche', href: '#approche' },
              { label: 'Feuille de route', href: '#feuille-de-route' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-sans text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-sans px-4 py-2 border border-accent text-accent text-center hover:bg-accent hover:text-white transition-colors"
            >
              Échanger sur un besoin
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
