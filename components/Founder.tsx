import Reveal from './Reveal'; // Assurez-vous que ce composant est disponible pour les animations

export default function Founder() {
  return (
    <section className="bg-bg-secondary py-16 md:py-24">
      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <Reveal> {/* Animation principale pour la section entière */}
          <div className="flex flex-row items-center gap-6 md:gap-12 lg:gap-16">
            {/* Colonne Photo */}
            <div className="flex-shrink-0 flex justify-start">
              <Reveal delay={80}> {/* Animation pour la photo */}
                <div className="relative w-20 h-20 sm:w-36 sm:h-36 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-border-light shadow-sm">
                  <img
                    src="/images/wakil-portrait.jpg"
                    alt="Said Wakil Youssouf, Fondateur de Comores Digital"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </Reveal>
            </div>

            {/* Colonne Texte */}
            <div className="flex-1 text-left">
              <Reveal delay={180}> {/* Animation pour le bloc de texte */}
                <h2 className="text-text-tertiary text-xs font-sans font-semibold tracking-widest uppercase mb-2">
                  Fondateur
                </h2>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-4">
                  Said Wakil Youssouf
                </h3>
                <p className="font-sans text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                  Comores Digital est initié par Wakil, spécialisé en cybersécurité et systèmes d'information. Le projet s'appuie sur un constat simple : des besoins opérationnels restent encore peu couverts par des solutions numériques adaptées. L'objectif est d'apporter une expertise technique sérieuse, pensée pour les entreprises et projets comoriens.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
