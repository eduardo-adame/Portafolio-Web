import type { ReactNode } from 'react'
import './Hero.css'

const socials: { icon: ReactNode; label: string; href: string }[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/eduardo-adame',
    icon: (
      <svg viewBox="0 0 19 19" fill="none" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@cesar.dev',
    icon: (
      <svg viewBox="0 0 19 19" fill="none" aria-hidden="true">
        <rect x="2" y="4.5" width="15" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 6l7.5 5L17 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-photo" aria-label="Eduardo Adame">
        <span className="hero-photo-monogram" aria-hidden="true">EA</span>
      </div>

      <p className="hero-greeting animate-in--visible">
        Hola, soy
      </p>
      <h1 className="hero-name animate-in--visible">
        Eduardo Adame
      </h1>
      <p className="hero-role animate-in--visible animate-in--delay-1">
        Full Stack Developer
      </p>
      <p className="hero-description animate-in--visible animate-in--delay-1">
        Diseño, construyo, despliego y mantengo aplicaciones web modernas
        que resuelven problemas reales con código limpio y confiable.
      </p>

      <div className="hero-socials animate-in--fade animate-in--delay-2">
        {socials.map((s) => (
          <a key={s.label} href={s.href} className="hero-social-link" aria-label={s.label} target="_blank" rel="noopener noreferrer">
            {s.icon}
          </a>
        ))}
      </div>

      <div className="hero-actions animate-in--fade animate-in--delay-3">
        <a href="#projects" className="btn-filled">
          Ver mi trabajo
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#contact" className="btn-ghost">Contactar</a>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Desplázate para conocer más">
        <span className="hero-scroll-text">Desplaza</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" fill="currentColor" className="hero-scroll-dot" />
        </svg>
      </a>
    </section>
  )
}
