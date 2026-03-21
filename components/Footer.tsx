export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-light">
      <div className="container-wide section-padding py-12">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span className="font-serif text-lg font-semibold text-text-primary">
                Comores Digital
              </span>
            </div>
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-xs">
              Solutions numériques pragmatiques pour les entreprises, services et institutions comoriennes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs text-text-tertiary tracking-widest uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Domaines d'intervention', href: '#domaines' },
                { label: 'Offres & services', href: '#offres' },
                { label: 'Notre approche', href: '#approche' },
                { label: 'Feuille de route', href: '#feuille-de-route' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs text-text-tertiary tracking-widest uppercase mb-4">
              Coordonnées
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@comores-digital.com"
                  className="font-sans text-sm text-text-secondary hover:text-accent transition-colors duration-150"
                >
                  contact@comores-digital.com
                </a>
              </li>
              <li>
                <span className="font-sans text-sm text-text-secondary">
                  Moroni, Union des Comores
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-light pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-text-tertiary">
            © {year} Comores Digital. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-text-tertiary">
            Structure en développement — Moroni, Union des Comores
          </p>
        </div>
      </div>
    </footer>
  )
}
