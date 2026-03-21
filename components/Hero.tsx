export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-0 section-padding bg-bg-primary overflow-hidden">

      {/* Subtle background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8C8C4 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.25,
        }}
      />

      <div className="container-narrow relative">

        {/* Eyebrow */}
        <div className="hero-animate-1 flex items-center gap-3 mb-10">
          <span className="block w-6 h-px bg-accent" />
          <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
            Moroni, Union des Comores
          </span>
        </div>

        {/* Layout: heading + decorative right column */}
        <div className="flex items-start justify-between gap-8">

          {/* Left: heading + text + CTAs */}
          <div className="max-w-3xl">
            <h1 className="hero-animate-2 font-serif text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-text-primary leading-[1.04] mb-8">
              Des solutions{' '}
              <span className="text-accent italic">numériques</span>
              <br />
              adaptées aux<br />
              réalités locales
            </h1>

            <p className="hero-animate-3 font-sans text-base md:text-[1.0625rem] text-text-secondary leading-relaxed max-w-lg mb-10">
              Comores Digital conçoit et déploie des outils numériques
              pour les entreprises, les services et les institutions comoriennes.
              L'objectif&nbsp;: rendre les usages plus clairs, les services
              plus accessibles et les processus plus fiables.
            </p>

            <div className="hero-animate-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#contact"
                className="inline-block font-sans text-sm font-medium px-7 py-3.5 bg-accent text-white hover:bg-[#006650] transition-colors duration-200 tracking-wide"
              >
                Échanger sur un besoin
              </a>
              <a
                href="#domaines"
                className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-accent transition-colors duration-200 group"
              >
                Voir les domaines d'intervention
                <svg
                  width="16" height="16" viewBox="0 0 16 16"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: large decorative monogram */}
          <div className="hero-animate-2 hidden lg:flex items-start pt-2 select-none shrink-0">
            <span
              className="font-serif font-semibold leading-none"
              style={{ fontSize: '9rem', color: '#E4E4E0', letterSpacing: '-0.02em' }}
            >
              CD
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar — pinned to bottom */}
      <div className="hero-animate-5 mt-20 border-t border-border-light">
        <div className="container-narrow">
          <div className="grid grid-cols-3 divide-x divide-border-light">
            <div className="py-6 pr-8">
              <span className="block font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-1">
                7
              </span>
              <span className="block font-sans text-[0.65rem] text-text-tertiary uppercase tracking-widest">
                domaines d'intervention
              </span>
            </div>
            <div className="py-6 px-8">
              <span className="block font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-1">
                100&nbsp;%
              </span>
              <span className="block font-sans text-[0.65rem] text-text-tertiary uppercase tracking-widest">
                solutions sur mesure
              </span>
            </div>
            <div className="py-6 pl-8">
              <span className="block font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-1">
                Local
              </span>
              <span className="block font-sans text-[0.65rem] text-text-tertiary uppercase tracking-widest">
                ancrage comorien
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
