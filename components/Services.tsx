import Reveal from './Reveal'

const services = [
  {
    number: '01',
    title: 'Sites web professionnels',
    description:
      'Présence en ligne claire, crédible et maintenable pour entreprises, commerces et institutions.',
    cible: 'Entreprises, commerçants, associations',
    objectif: 'Établir une présence numérique lisible et professionnelle',
  },
  {
    number: '02',
    title: 'Portails institutionnels',
    description:
      "Sites et interfaces d'information pour structures publiques, organisations et services.",
    cible: 'Institutions, collectivités, services publics',
    objectif: 'Rendre les services et informations accessibles en ligne',
  },
  {
    number: '03',
    title: 'Solutions SaaS locales',
    description:
      'Outils de gestion, réservation, recrutement, suivi ou pilotage adaptés à des besoins concrets.',
    cible: 'Entreprises, structures de service',
    objectif: 'Automatiser et structurer les activités métier',
  },
  {
    number: '04',
    title: 'Systèmes métier sur mesure',
    description:
      'Réponses ciblées à des problèmes opérationnels : paiement, gestion usagers, formulaires, tableaux de bord.',
    cible: 'Toute organisation avec des processus à fiabiliser',
    objectif: 'Réduire la friction opérationnelle et gagner en efficacité',
  },
  {
    number: '05',
    title: 'Hébergement & infrastructure',
    description:
      'Déploiement, maintenance, architecture simple et fiable, cloud ou hybride selon le besoin.',
    cible: 'Structures ayant besoin de fiabilité technique',
    objectif: 'Assurer la disponibilité et la pérennité des services',
  },
  {
    number: '06',
    title: 'Cybersécurité & bonnes pratiques',
    description:
      "Sécurité intégrée dès la conception, recommandations, hygiène numérique et réduction du risque.",
    cible: 'Entreprises, institutions, PME',
    objectif: 'Protéger les données et les systèmes de manière pragmatique',
  },
  {
    number: '07',
    title: 'Accompagnement & sensibilisation',
    description:
      'Montée en compétence, adoption des outils, structuration des usages numériques.',
    cible: 'Équipes, directions, organisations en transition',
    objectif: 'Ancrer les outils dans les pratiques quotidiennes',
  },
]

export default function Services() {
  return (
    <section id="offres" className="py-24 section-padding bg-bg-secondary border-t border-border-light">
      <div className="container-wide">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-accent" />
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
              Offres
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug max-w-xl">
            Champs d'intervention
          </h2>
          <p className="mt-4 font-sans text-base text-text-secondary max-w-2xl leading-relaxed">
            Chaque intervention est cadrée à partir d'un besoin concret. L'objectif n'est pas de vendre une solution
            standard, mais de concevoir une réponse adaptée au contexte et au niveau de maturité du client.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light border border-border-light">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={Math.min(i % 3, 2) * 80}>
              <div className="card-hover bg-bg-primary p-8 h-full group cursor-default">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-sans text-xs text-text-tertiary tracking-widest">
                    {service.number}
                  </span>
                </div>
                <h3 className="card-title font-serif text-lg font-semibold text-text-primary mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="border-t border-border-light pt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-sans text-xs text-text-tertiary w-16 shrink-0 pt-px">Cible</span>
                    <span className="font-sans text-xs text-text-secondary">{service.cible}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-sans text-xs text-text-tertiary w-16 shrink-0 pt-px">Objectif</span>
                    <span className="font-sans text-xs text-text-secondary">{service.objectif}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
