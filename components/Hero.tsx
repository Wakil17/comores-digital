export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">

      {/* ── Split layout: left white / right forest ── */}
      <div className="flex flex-1 min-h-[calc(100vh-4rem)]">

        {/* LEFT — Content */}
        <div className="relative flex flex-col justify-center w-full lg:w-[58%] px-6 md:px-12 lg:px-20 xl:px-32 py-20 bg-bg-primary">

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #D4D4D0 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              opacity: 0.35,
            }}
          />

          <div className="relative max-w-xl">

            {/* Eyebrow */}
            <div className="hero-animate-1 flex items-center gap-3 mb-10">
              <span className="block w-5 h-px bg-accent" />
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-accent font-medium">
                Moroni, Union des Comores
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-animate-2 font-serif text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] font-semibold text-text-primary leading-[1.02] mb-8"
              style={{ letterSpacing: '-0.02em' }}
            >
              Des solutions{' '}
              <em className="not-italic text-accent">numériques</em>
              <br />
              adaptées aux
              <br />
              réalités locales.
            </h1>

            {/* Sub */}
            <p className="hero-animate-3 font-sans text-[1rem] text-text-secondary leading-[1.75] max-w-md mb-10">
              Comores Digital conçoit et déploie des outils numériques
              pour les entreprises, les services et les institutions comoriennes.
            </p>

            {/* CTAs */}
            <div className="hero-animate-4 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#contact"
                className="inline-block font-sans text-sm font-medium px-7 py-3.5 bg-accent text-white hover:bg-[#006650] transition-colors duration-200 tracking-wide"
              >
                Échanger sur un besoin
              </a>
              <a
                href="#domaines"
                className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-accent transition-colors duration-200 group self-center"
              >
                Voir les domaines
                <svg
                  width="15" height="15" viewBox="0 0 16 16"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Dark forest panel */}
        <div className="hidden lg:flex flex-col justify-between w-[42%] bg-bg-forest px-14 py-20 relative overflow-hidden">

          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Large CD monogram */}
          <div className="hero-animate-2 flex items-start justify-end select-none relative">
            <span
              className="font-logo font-light leading-none"
              style={{
                fontSize: '11rem',
                color: 'rgba(255,255,255,0.06)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
              }}
            >
              CD
            </span>
          </div>

          {/* Bottom tagline */}
          <div className="hero-animate-3 relative">
            <div className="w-8 h-px bg-accent mb-6" />
            <p className="font-sans text-[0.72rem] text-white/40 tracking-[0.18em] uppercase leading-loose mb-2">
              Structure comorienne
            </p>
            <p
              className="font-serif text-white/75 text-[1.4rem] font-light leading-snug max-w-[220px]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Pragmatique,<br />
              locale,<br />
              fiable.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="hero-animate-5 bg-bg-dark border-t border-[#252523]">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-3 divide-x divide-[#252523]">
            <div className="py-5 pr-8">
              <span className="block font-serif text-2xl font-semibold text-white mb-0.5">7</span>
              <span className="block font-sans text-[0.6rem] text-white/35 uppercase tracking-widest">
                domaines d'intervention
              </span>
            </div>
            <div className="py-5 px-8">
              <span className="block font-serif text-2xl font-semibold text-white mb-0.5">100&nbsp;%</span>
              <span className="block font-sans text-[0.6rem] text-white/35 uppercase tracking-widest">
                solutions sur mesure
              </span>
            </div>
            <div className="py-5 pl-8">
              <span className="block font-serif text-2xl font-semibold text-white mb-0.5">Local</span>
              <span className="block font-sans text-[0.6rem] text-white/35 uppercase tracking-widest">
                ancrage comorien
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
