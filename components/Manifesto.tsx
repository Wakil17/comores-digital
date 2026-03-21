import Reveal from './Reveal'

export default function Manifesto() {
  return (
    <section className="py-24 section-padding bg-bg-dark">
      <div className="container-narrow">

        <Reveal>
          <blockquote className="mb-10">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug max-w-3xl">
              Des solutions simples, fiables et utiles, adaptées aux réalités du terrain.
            </p>
          </blockquote>
        </Reveal>

        {/* Divider */}
        <Reveal delay={80}>
          <div className="w-12 h-px bg-accent mb-10" />
        </Reveal>

        {/* Body */}
        <Reveal delay={140}>
          <p className="font-sans text-base text-[#A0A09C] leading-relaxed max-w-2xl mb-6">
            Comores Digital privilégie une approche sérieuse et progressive : identifier les besoins,
            concevoir des réponses adaptées, déployer proprement et améliorer dans le temps.
          </p>
          <p className="font-sans text-base text-[#A0A09C] leading-relaxed max-w-2xl mb-12">
            Il ne s'agit pas de promettre des transformations abstraites, mais de contribuer concrètement
            à ce que les services soient plus accessibles, les processus plus fiables et les usages plus clairs —
            pour ceux qui en ont le plus besoin.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-block font-sans text-sm px-6 py-3 bg-accent text-white hover:bg-[#006650] transition-colors duration-150"
            >
              Présenter un besoin
            </a>
            <a
              href="#offres"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#A0A09C] hover:text-white transition-colors duration-150 group"
            >
              Voir les offres
              <svg
                width="16" height="16" viewBox="0 0 16 16"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
