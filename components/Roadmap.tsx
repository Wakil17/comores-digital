const phases = [
  {
    phase: 'Phase 1',
    horizon: 'Court terme',
    title: 'Poser des bases solides',
    items: [
      'Livrer des premiers projets utiles et bien exécutés',
      'Documenter les réalisations et les apprentissages',
      'Construire des références crédibles sur le marché local',
      'Affiner la méthode d'intervention à partir du terrain',
    ],
    note: 'La priorité est la qualité d'exécution, pas le volume.',
  },
  {
    phase: 'Phase 2',
    horizon: 'Moyen terme',
    title: "Structurer l'activité",
    items: [
      'Développer des solutions réutilisables et documentées',
      'Intervenir sur des besoins plus larges et plus complexes',
      "Renforcer les capacités d'exécution et les ressources disponibles",
      'Établir des collaborations durables avec des partenaires locaux',
    ],
    note: "L'objectif est de passer d'un mode projet à un mode structuré.",
  },
  {
    phase: 'Phase 3',
    horizon: 'Long terme',
    title: 'Consolider une position reconnue',
    items: [
      'Contribuer à des projets plus structurants et à plus fort impact',
      'Développer une expertise reconnue localement dans le numérique',
      "Élargir progressivement le périmètre d'intervention",
      'Participer activement à la montée en maturité numérique du pays',
    ],
    note: 'La consolidation se construit sur la réputation bâtie lors des phases précédentes.',
  },
]

export default function Roadmap() {
  return (
    <section id="feuille-de-route" className="py-24 section-padding bg-bg-primary border-t border-border-light">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-accent" />
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
              Feuille de route
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug max-w-xl">
            Une trajectoire progressive, ancrée dans la réalité
          </h2>
          <p className="mt-4 font-sans text-base text-text-secondary max-w-2xl leading-relaxed">
            Le développement de Comores Digital s'inscrit dans la durée. Les ambitions sont claires, mais l'approche
            reste pragmatique : avancer étape par étape, valider ce qui fonctionne et construire sur des fondations solides.
          </p>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-0 border border-border-light">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`p-8 md:p-10 ${i < phases.length - 1 ? 'border-b md:border-b-0 md:border-r border-border-light' : ''}`}
            >
              {/* Phase label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block font-sans text-xs text-accent border border-accent px-2 py-0.5 tracking-wide">
                  {p.phase}
                </span>
                <span className="font-sans text-xs text-text-tertiary">
                  {p.horizon}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-text-primary mb-5 leading-snug">
                {p.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border-medium shrink-0" />
                    <span className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border-light pt-4">
                <p className="font-sans text-xs text-text-tertiary italic leading-relaxed">
                  {p.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
