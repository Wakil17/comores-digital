export default function Constat() {
  return (
    <section id="constat" className="py-24 md:py-32 section-padding bg-bg-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left - label + ligne */}
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-accent" />
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-accent font-medium">
                D'où vient l'idée
              </span>
            </div>
            <div className="hidden lg:block w-px bg-border-light mt-8" style={{ height: '120px' }} />
          </div>

          {/* Right - texte */}
          <div>
            <h2
              className="font-serif text-text-primary leading-[1.12] mb-10"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Les usages sont là.<br />
              Les outils, eux,<br />
              manquent encore.
            </h2>

            <div className="space-y-6 max-w-2xl">
              <p className="font-sans text-text-secondary leading-[1.8]" style={{ fontSize: '1.02rem' }}>
                Aux Comores, les commerces sont actifs, les institutions fonctionnent,
                les gens s'organisent. Mais la plupart de ces acteurs n'ont pas de présence
                numérique au-delà d'une page Facebook - non par manque de volonté,
                mais parce que les outils adaptés n'ont pas encore été construits pour ici.
              </p>
              <p className="font-sans text-text-secondary leading-[1.8]" style={{ fontSize: '1.02rem' }}>
                Recharger un compteur électrique implique un déplacement. Passer commande
                chez un commerçant local passe par un appel. Accéder à un service public
                nécessite souvent une présence physique. Ce ne sont pas des habitudes figées -
                ce sont des frictions que des outils simples et fiables peuvent réduire.
              </p>
              <p className="font-sans leading-[1.8]" style={{ fontSize: '1.02rem', color: '#141412' }}>
                Comores Digital est né de ce constat : le potentiel est réel,
                le terrain est prêt, et quelqu'un doit se charger de construire
                ce qui manque - depuis ici, pour ici.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
