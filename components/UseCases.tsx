const segments = [
  {
    label: 'Entreprises',
    intro:
      'Pour les entreprises comoriennes, la priorité est de structurer la présence numérique et de gagner du temps sur les opérations répétitives.',
    items: [
      'Présenter leur activité de manière claire et crédible en ligne',
      'Simplifier la relation client : informations, devis, prises de contact',
      'Structurer certaines opérations internes : suivi, reporting, facturation',
      'Automatiser des tâches répétitives pour libérer du temps opérationnel',
    ],
  },
  {
    label: 'Institutions',
    intro:
      'Pour les institutions et structures publiques, l'enjeu est la lisibilité des services et la réduction des démarches en présentiel.',
    items: [
      'Rendre les informations publiques plus accessibles et mieux organisées',
      'Limiter les déplacements inutiles grâce à des services en ligne',
      'Améliorer la lisibilité et la cohérence de la présence numérique',
      'Professionnaliser la communication institutionnelle',
    ],
  },
  {
    label: 'Usagers',
    intro:
      'Pour les citoyens et utilisateurs finaux, l'objectif est de simplifier l'accès aux services et d'améliorer la qualité d'expérience.',
    items: [
      'Accéder plus simplement à l'information sans multiplier les intermédiaires',
      'Utiliser un service sans nécessiter un déplacement physique systématique',
      'Bénéficier d'une expérience claire, fluide et sans ambiguïté',
      'Gagner en autonomie et en continuité dans l'accès aux services',
    ],
  },
]

export default function UseCases() {
  return (
    <section className="py-24 section-padding bg-bg-secondary border-t border-border-light">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-accent" />
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
              Impact concret
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug max-w-xl">
            Ce que cela change, en pratique
          </h2>
          <p className="mt-4 font-sans text-base text-text-secondary max-w-2xl leading-relaxed">
            Les bénéfices sont identifiables et mesurables. Voici ce que les solutions déployées permettent
            concrètement pour chaque type de bénéficiaire.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-px bg-border-light border border-border-light">
          {segments.map((seg, i) => (
            <div key={i} className="bg-bg-primary p-8 md:p-10">
              <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                {seg.label}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                {seg.intro}
              </p>
              <ul className="space-y-3">
                {seg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
