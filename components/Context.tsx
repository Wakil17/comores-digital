import Reveal from './Reveal'

const frictions = [
  {
    label: 'Processus encore très manuels',
    description:
      'De nombreuses démarches reposent sur des étapes papier, des intermédiaires physiques et des délais allongés.',
  },
  {
    label: "Information difficile d'accès",
    description:
      'Les usagers peinent souvent à trouver des renseignements fiables, actualisés et accessibles en ligne.',
  },
  {
    label: 'Outils dispersés ou inexistants',
    description:
      'Les équipes travaillent avec des ressources fragmentées, sans plateforme commune ni suivi structuré.',
  },
  {
    label: 'Faible continuité de service numérique',
    description:
      "L'interruption du service dès la fermeture des bureaux crée une discontinuité pénalisante pour les usagers.",
  },
]

export default function Context() {
  return (
    <section className="py-24 section-padding bg-bg-primary border-t border-border-light">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent" />
              <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
                Contexte
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug mb-6">
              Un potentiel numérique à construire
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              Aux Comores, de nombreux services et activités reposent encore sur des processus manuels,
              peu lisibles ou insuffisamment numérisés. Cela génère des lenteurs, des déplacements inutiles,
              des erreurs évitables et une expérience dégradée — pour les usagers comme pour les équipes.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Comores Digital intervient pour apporter des réponses concrètes, progressives et adaptées au terrain.
              Pas des solutions importées sans discernement, mais des outils pensés à partir des réalités locales.
            </p>
          </Reveal>

          {/* Right: friction cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {frictions.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card-hover border border-border-light p-5 bg-bg-primary h-full cursor-default">
                  <p className="card-title font-sans text-sm font-semibold text-text-primary mb-2">
                    {item.label}
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}