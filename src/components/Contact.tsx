import { useInView } from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section className="contact" id="contact" ref={ref}>
      <h2 className={`section-label ${inView ? 'animate-in--fade' : 'animate-in'}`}>Get in touch</h2>
      <p className={`contact-intro ${inView ? 'animate-in--visible animate-in--delay-1' : 'animate-in'}`}>
        Have a project in mind or just want to say hi? I'm always open to
        interesting conversations and new opportunities.
      </p>
      <div className={`contact-actions ${inView ? 'animate-in--visible animate-in--delay-2' : 'animate-in'}`}>
        <a href="mailto:hello@cesar.dev" className="btn-filled">
          Send an email
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#" className="btn-ghost">View GitHub</a>
      </div>
      <a href="mailto:hello@cesar.dev" className={`contact-email ${inView ? 'animate-in--fade animate-in--delay-3' : 'animate-in'}`}>
        hello@cesar.dev
      </a>
    </section>
  )
}
