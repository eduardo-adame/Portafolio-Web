import { useCallback, useEffect, useRef, useState } from 'react'
import './Nav.css'

const links = [
  { label: 'Acerca', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

const sectionIds = ['contact', 'experience', 'projects', 'skills', 'about', 'hero']

export default function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ids = links.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }

    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [menuOpen, closeMenu])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowUp' || e.key === 'k') {
        const idx = sectionIds.indexOf(active)
        if (idx < sectionIds.length - 1) {
          const next = document.getElementById(sectionIds[idx + 1])
          next?.scrollIntoView({ behavior: 'smooth' })
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'j') {
        const idx = sectionIds.indexOf(active)
        if (idx > 0) {
          const prev = document.getElementById(sectionIds[idx - 1])
          prev?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [active])

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = `${import.meta.env.BASE_URL}CV.pdf`
    try {
      const res = await fetch(url, { method: 'HEAD' })
      if (!res.ok) {
        e.preventDefault()
        setDownloadMsg('CV no disponible temporalmente')
        setTimeout(() => setDownloadMsg(null), 4000)
        return
      }
    } catch {
      e.preventDefault()
      setDownloadMsg('Error de conexión al descargar')
      setTimeout(() => setDownloadMsg(null), 4000)
      return
    }
    closeMenu()
  }

  return (
    <nav className="nav" role="navigation" aria-label="Navegación principal">
      <a href="#hero" className="nav-brand" onClick={closeMenu}>E.A</a>

      <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} ref={menuRef}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`nav-link${active === link.href.replace('#', '') ? ' nav-link--active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a href="#contact" className="btn-ghost" onClick={closeMenu}>Contactar</a>
        <a
          href={`${import.meta.env.BASE_URL}CV.pdf`}
          className="btn-filled"
          onClick={handleDownload}
          download
        >
          Descargar CV
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <button
          ref={toggleRef}
          className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={menuOpen}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </div>

      {downloadMsg && (
        <div className="nav-toast" role="alert" aria-live="polite">
          {downloadMsg}
        </div>
      )}
    </nav>
  )
}
