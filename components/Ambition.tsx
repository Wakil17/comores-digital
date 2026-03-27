const pillars = [
  {
    title: 'Présence en ligne',
    body: 'Sites professionnels, portails institutionnels, plateformes e-commerce. Une vitrine numérique sérieuse pour chaque commerce et chaque institution.',
  },
  {
    title: 'Systèmes métier',
    body: 'Outils sur mesure pour automatiser et fiabiliser des process internes - gestion, paiements, logistique, communication administrative.',
  },
  {
    title: 'Infrastructure & sécurité',
    body: 'Hébergement, maintenance, cybersécurité. Des fondations techniques solides pour que les solutions durent dans le temps.',
  },
]

export default function Ambition() {
  return (
    <section id="ambition" className="py-24 md:py-32 section-padding bg-bg-dark">
      <div className="container-wide">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 mb-20">
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-accent" />
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-accent font-medium">
                Vision
              </span>
            </div>
          </div>
          <div>
            <h2
              className="font-serif text-white leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Être un acteur sérieux<br />
              de la transformation<br />
              numérique aux Comores.
            </h2>
            <p className="font-sans text-white/50 leading-[1.8] max-w-xl" style={{ fontSize: '1.02rem' }}>
              Pas une promesse abstraite. Un engagement concret : accompagner
              les entreprises, les commerces et les institutions comoriennes
              dans leur transition numérique - avec des outils qui fonctionnent,
              pensés pour leur contexte, maintenus dans la durée.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-bg-dark p-10 border-t-2 transition-colors duration-150 hover:bg-bg-forest"
              style={{ borderTopColor: '#379337' }}
            >
              <span className="block font-sans text-[10px] text-white/20 tracking-[0.25em] uppercase mb-6">
                0{i + 1}
              </span>
              <h3 className="font-serif text-white text-xl mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-white/45 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-16 pt-16 border-t border-white/8">
          <p
            className="font-serif text-white/70 leading-[1.4] max-w-2xl"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
          >
            L'objectif à terme : que chaque commerce, chaque institution,
            chaque service public aux Comores dispose des outils numériques
            qu'il mérite.
          </p>
        </div>

      </div>
    </section>
  )
}
