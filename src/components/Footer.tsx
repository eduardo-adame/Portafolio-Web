import { useInView } from '../hooks/useInView'
import './Footer.css'

const groups = [
  {
    heading: 'Navegación',
    links: [
      { label: 'Sobre mí', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  {
    heading: 'Redes',
    links: [
      { label: 'GitHub', href: 'https://github.com/eduardo-adame' },
      { label: 'Correo', href: 'mailto:hello@cesar.dev' },
    ],
  },
  {
    heading: 'Recursos',
    links: [
      { label: 'Descargar CV', href: `${import.meta.env.BASE_URL}CV.pdf` },
    ],
  },
]

export default function Footer() {
  const { ref, inView } = useInView()

  return (
    <footer className={`footer ${inView ? 'footer-reveal' : ''}`} ref={ref}>
      <div className="footer-inner">
        {groups.map((group) => (
          <div key={group.heading}>
            <h4 className="footer-group-heading">{group.heading}</h4>
            <ul className="footer-links">
              {group.links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="footer-link" {...link.label === 'Descargar CV' ? { download: '' } : {}}>{link.label}</a>
        </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Eduardo Adame. Hecho con React, TypeScript y Vite.
      </div>
    </footer>
  )
}
