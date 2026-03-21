export default function Hero() {
  return (
    <section className="pt-36 pb-24 section-padding bg-bg-primary">
      <div className="container-narrow">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-6 h-px bg-accent" />
          <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
            Moroni, Union des Comores
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight max-w-3xl mb-8">
          Des solutions numériques adaptées aux réalités locales
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mb-10">
          Comores Digital conçoit et déploie des outils numériques pour les entreprises, les services et les institutions comoriennes.
          L'objectif est simple : rendre les usages plus clairs, les services plus accessibles et les processus plus fiables.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="inline-block font-sans text-sm px-6 py-3 bg-accent text-white hover:bg-[#006650] transition-colors duration-150"
          >
            Échanger sur un besoin
          </a>
          <a
            href="#domaines"
            className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            Voir les domaines d'intervention
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-border-light" />
      </div>
    </section>
  )
}
