import { useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import './Nav.css'

const links = [
  { label: 'Acerca', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export default function Nav() {
  const { theme, toggle: toggleTheme } = useTheme()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [downloading, setDownloading] = useState(false)
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
      const current = active || 'hero'
      const idx = sectionIds.indexOf(current)
      if (e.key === 'ArrowUp' || e.key === 'k') {
        if (idx > 0) {
          document.getElementById(sectionIds[idx - 1])?.scrollIntoView({ behavior: 'smooth' })
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'j') {
        if (idx < sectionIds.length - 1) {
          document.getElementById(sectionIds[idx + 1])?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [active])

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = `${import.meta.env.BASE_URL}CV.pdf`
    setDownloading(true)
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
    } finally {
      setDownloading(false)
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
              aria-current={active === link.href.replace('#', '') ? 'true' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-links-actions">
          <button
            type="button"
            className="theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.5 2.5l1.5 1.5M12 12l1.5 1.5M2.5 13.5l1.5-1.5M12 4l1.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5 6 6 0 1 0 13.5 9.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn-ghost" onClick={closeMenu}>Contactar</a>
          <a
            href={`${import.meta.env.BASE_URL}CV.pdf`}
            className="btn-filled"
            onClick={handleDownload}
            download
          >
            Descargar CV
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.5 2.5l1.5 1.5M12 12l1.5 1.5M2.5 13.5l1.5-1.5M12 4l1.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5 6 6 0 1 0 13.5 9.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <a href="#contact" className="btn-ghost" onClick={closeMenu}>Contactar</a>
        <a
          href={`${import.meta.env.BASE_URL}CV.pdf`}
          className={`btn-filled${downloading ? ' btn-loading' : ''}`}
          onClick={handleDownload}
          download
          aria-busy={downloading}
        >
          {downloading ? 'Verificando…' : 'Descargar CV'}
          {!downloading && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
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
