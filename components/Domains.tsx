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
    <section id="domaines" className="py-8 bg-bg-dark border-b border-[#252523]">
      <div className="container-wide section-padding">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {domains.map((domain, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-sans text-sm text-white/45 whitespace-nowrap tracking-wide hover:text-white/75 transition-colors duration-150 cursor-default">
                {domain}
              </span>
              {i < domains.length - 1 && (
                <span className="hidden md:block w-px h-3.5 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
