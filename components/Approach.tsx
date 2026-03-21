import Reveal from './Reveal'

const pillars = [
  {
    index: '01',
    title: 'Compréhension du terrain',
    body: [
      'Toute intervention commence par une lecture attentive du contexte : usages réels, contraintes locales, niveau de maturité numérique, ressources disponibles.',
      'Cette phase de diagnostic évite de déployer des solutions inadaptées et permet d'identifier les leviers les plus efficaces.',
    ],
  },
  {
    index: '02',
    title: 'Exécution technique sérieuse',
    body: [
      'Les solutions conçues sont claires, documentées, maintenables et sécurisées. La complexité n'est introduite que là où elle est strictement nécessaire.',
      'La qualité d'exécution n'est pas négociable : elle conditionne la durée de vie et la pertinence réelle de chaque outil déployé.',
    ],
  },
  {
    index: '03',
    title: 'Déploiement progressif',
    body: [
      'Commencer par ce qui est utile, le valider sur le terrain, puis étendre ce qui fonctionne. Cette méthode limite le risque, réduit les coûts d'erreur et produit des résultats mesurables à chaque étape.',
      'L'objectif est de construire des bases stables avant d'élargir le périmètre.',
    ],
  },
]

export default function Approach() {
  return (
    <section id="approche" className="py-24 section-padding bg-bg-forest border-t border-[#1a3d2b]">
      <div className="container-wide">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-accent" />
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
              Approche
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-snug max-w-xl">
            Une méthode structurée, pas un discours
          </h2>
        </Reveal>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-[#1a3d2b] border border-[#1a3d2b]">
          {pillars.map((pillar, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="dark-card-hover bg-bg-forest p-8 md:p-10 h-full cursor-default">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-sans text-xs text-white/30 tracking-widest">
                    {pillar.index}
                  </span>
                  <span className="block flex-1 h-px bg-[#1a3d2b]" />
                </div>
                <h3 className="dark-card-title font-serif text-xl font-semibold text-white mb-5 leading-snug">
                  {pillar.title}
                </h3>
                <div className="space-y-4">
                  {pillar.body.map((p, j) => (
                    <p key={j} className="font-sans text-sm text-white/55 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
