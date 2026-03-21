'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg-dark border-t border-[#252523]">
      <div className="container-wide section-padding py-14">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-3">
              <span
                className="font-logo font-semibold text-white"
                style={{ fontSize: '1.45rem', letterSpacing: '-0.01em' }}
              >
                Comores Digital
              </span>
            </div>
            <p className="font-sans text-sm text-white/45 leading-relaxed max-w-xs mt-3">
              Solutions numériques pragmatiques pour les entreprises, services et institutions comoriennes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] text-white/25 tracking-[0.2em] uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Domaines d'intervention", href: '#domaines' },
                { label: 'Offres & services', href: '#offres' },
                { label: 'Notre approche', href: '#approche' },
                { label: 'Feuille de route', href: '#feuille-de-route' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-white/45 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] text-white/25 tracking-[0.2em] uppercase mb-5">
              Coordonnées
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@comores-digital.com"
                  className="font-sans text-sm text-white/45 hover:text-accent transition-colors duration-150"
                >
                  contact@comores-digital.com
                </a>
              </li>
              <li>
                <span className="font-sans text-sm text-white/45">
                  Iconi, Union des Comores
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#252523] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/25">
            © {year} Comores Digital. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-white/25">
            Structure en développement - Iconi, Union des Comores
          </p>
        </div>
      </div>
    </footer>
  )
}