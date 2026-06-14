import './Hero.css'

const sources = [
  { label: 'REACT', icon: '⚛' },
  { label: 'TYPESCRIPT', icon: '△' },
  { label: 'NODE.JS', icon: '●' },
  { label: 'POSTGRES', icon: '▣' },
  { label: 'DOCKER', icon: '□' },
  { label: 'AWS', icon: '☁' },
]

const destinations = [
  { label: 'WEB APPS', icon: '◐' },
  { label: 'APIS', icon: '⇄' },
  { label: 'MOBILE', icon: '◌' },
  { label: 'CLOUD', icon: '○' },
  { label: 'PRODUCTS', icon: '◆' },
]

const badges = [
  { label: 'PLAN', neutral: true },
  { label: 'DESIGN' },
  { label: 'BUILD' },
  { label: 'DEPLOY' },
  { label: 'MAINTAIN' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="hero-headline">
        Full Stack Developer
      </h1>
      <p className="hero-subtitle">
        I design, build, deploy, and maintain modern web applications
        that solve real problems with clean, reliable code.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn-filled">
          View my work
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#contact" className="btn-ghost">Get in touch</a>
      </div>

      <div className="flow-diagram" role="img" aria-label="Data flow diagram showing development process from technologies to products">
        <div className="flow-lines" />

        <div className="flow-sources">
          {sources.map((s) => (
            <div key={s.label} className="flow-tag">
              <span className="flow-tag-icon" aria-hidden="true">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>

        <div className="flow-center">
          <div className="flow-center-glow" aria-hidden="true" />
          <div className="flow-center-node">
            <svg className="flow-center-node-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flow-badges">
            {badges.map((b) => (
              <div key={b.label} className="flow-badge">
                <span className={`flow-badge-dot${b.neutral ? ' flow-badge-dot--neutral' : ''}`} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flow-destinations">
          {destinations.map((d) => (
            <div key={d.label} className="flow-tag">
              {d.label}
              <span className="flow-tag-icon" aria-hidden="true">{d.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
