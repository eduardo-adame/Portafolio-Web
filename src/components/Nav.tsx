import './Nav.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <a href="#" className="nav-logo">Cesar</a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <a href="#contact" className="btn-ghost">Get in touch</a>
        <a href="#contact" className="btn-filled">
          Download CV
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}
