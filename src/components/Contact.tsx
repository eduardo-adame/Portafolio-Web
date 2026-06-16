import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const { ref, inView } = useInView()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('hello@cesar.dev')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:hello@cesar.dev'
    }
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className={`contact-heading-wrap ${inView ? 'contact-heading-reveal' : ''}`}>
        <h2 className="section-heading">Contacto</h2>
      </div>
      <p className={`contact-intro ${inView ? 'contact-intro-reveal' : ''}`}>
        ¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a
        conversaciones interesantes y nuevas oportunidades.
      </p>
      <div className={`contact-actions ${inView ? 'contact-actions-reveal' : ''}`}>
        <a href="mailto:hello@cesar.dev" className="btn-filled">
          Enviar correo
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <button
          type="button"
          className={`btn-ghost${copied ? ' btn-copied' : ''}`}
          onClick={copyEmail}
        >
          {copied ? '¡Copiado!' : 'Copiar correo'}
        </button>
      </div>
    </section>
  )
}
