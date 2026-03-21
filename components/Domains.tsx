const domains = [
  'Sites web professionnels',
  'Portails institutionnels',
  'Solutions SaaS',
  'Automatisation',
  'Systèmes métier',
  'Hébergement & infrastructure',
  'Cybersécurité',
]

export default function Domains() {
  return (
    <section id="domaines" className="py-10 bg-bg-secondary border-y border-border-light">
      <div className="container-wide section-padding">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {domains.map((domain, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-sans text-sm text-text-secondary whitespace-nowrap">
                {domain}
              </span>
              {i < domains.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-border-medium" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
