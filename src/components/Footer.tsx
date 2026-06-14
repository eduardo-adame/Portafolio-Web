import './Footer.css'

const groups = [
  {
    heading: 'Navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Projects',
    links: [
      { label: 'E-Commerce Platform', href: '#projects' },
      { label: 'Analytics Dashboard', href: '#projects' },
      { label: 'API Gateway', href: '#projects' },
    ],
  },
  {
    heading: 'Social',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'hello@cesar.dev', href: 'mailto:hello@cesar.dev' },
      { label: 'Download CV', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {groups.map((group) => (
          <div key={group.heading}>
            <h4 className="footer-group-heading">{group.heading}</h4>
            <ul className="footer-links">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Cesar. Built with React, TypeScript &amp; Vite.
      </div>
    </footer>
  )
}
