const photos: { src?: string; caption: string }[] = [
  { caption: 'Vue sur Moroni' },
  { caption: 'Littoral comorien' },
  { caption: 'Économie locale' },
]

export default function PhotosComores() {
  return (
    <section className="bg-bg-secondary border-t border-border-light py-16">
      <div className="container-wide section-padding">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-accent" />
            <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
              Les Comores
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary">
            Un archipel en mouvement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden">
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-bg-tinted border border-border-medium flex items-center justify-center">
                  <span className="font-sans text-xs text-text-tertiary tracking-wide text-center px-4">
                    Photo à venir<br />{photo.caption}
                  </span>
                </div>
              )}
              <p className="mt-2 font-sans text-xs text-text-tertiary">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
