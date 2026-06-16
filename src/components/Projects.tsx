import { useInView } from '../hooks/useInView'
import './Projects.css'

interface ArchitectureProject {
  title: string
  layout: 'architecture'
  problem: string
  solution: string
  results: string[]
  tech: string[]
  demoUrl?: string
  sourceUrl?: string
}

interface FullwidthProject {
  title: string
  layout: 'fullwidth'
  problem: string
  solution: string
  decisions: { label: string; detail: string }[]
  tech: string[]
  demoUrl?: string
  sourceUrl?: string
}

interface CompactProject {
  title: string
  layout: 'compact'
  problem: string
  solution: string
  decision: { question: string; answer: string }
  tech: string[]
  demoUrl?: string
  sourceUrl?: string
}

type Project = ArchitectureProject | FullwidthProject | CompactProject

const projects: Project[] = [
  {
    title: 'Plataforma de Comercio Electrónico',
    layout: 'architecture',
    problem:
      'Un minorista en crecimiento necesitaba una tienda en línea escalable y eficiente que pudiera manejar alto tráfico durante eventos de venta sin interrupciones.',
    solution:
      'Construí un frontend renderizado del lado del servidor con React, un CMS headless, una capa de caché con Redis e infraestructura de auto-escalado en AWS.',
    results: [
      '300% de aumento en capacidad de usuarios concurrentes',
      'Tiempo de respuesta p99 menor a 200ms en eventos de venta',
      'Cero interrupciones en 12 eventos de venta importantes',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    demoUrl: '',
    sourceUrl: '',
  },
  {
    title: 'Panel de Analíticas en Tiempo Real',
    layout: 'fullwidth',
    problem:
      'Los clientes no lograban entender sus datos de uso — los informes tardaban horas en generarse y llegaban desactualizados. El pipeline existente colapsaba con 5k eventos/segundo.',
    solution:
      'Rediseñé el pipeline de datos con Apache Kafka para ingesta, WebSocket para entrega en vivo y vistas materializadas en PostgreSQL para consultas históricas. El sistema ahora procesa 50k+ eventos/segundo con tiempos de consulta de menos de un segundo.',
    decisions: [
      { label: 'Ingesta en streaming', detail: 'Clúster Kafka maneja 50k+ eventos/segundo con particionamiento automático' },
      { label: 'Paneles en vivo', detail: 'Push WebSocket a 10fps, latencia p99 de 3ms del broker al navegador' },
      { label: 'Pipeline de alertas', detail: 'Reglas configurables evaluadas en flujo, notificación push en menos de 2s' },
    ],
    tech: ['Node.js', 'React', 'Kafka', 'WebSocket', 'PostgreSQL', 'Docker', 'Nginx'],
    demoUrl: '',
    sourceUrl: '',
  },
  {
    title: 'API Gateway y Servicio de Autenticación',
    layout: 'compact',
    problem:
      'Los microservicios tenían autenticación, límites de tasa y observabilidad inconsistentes — cada equipo resolvía los mismos problemas de forma distinta, creando brechas de seguridad y sobrecarga operativa.',
    solution:
      'Diseñé un gateway unificado que maneja autenticación, limitación de tasa, registro de actividad y enrutamiento para más de 12 servicios backend. Cada equipo redujo ~40% del código repetitivo.',
    decision: {
      question: '¿Por qué no un API gateway de código abierto?',
      answer:
        'Los servicios existentes usaban protocolos mixtos (gRPC, REST, WebSocket) y necesitaban middleware de autenticación personalizado para integración SAML heredada. Construimos un gateway ligero en Node.js que envuelve cadenas de middleware Express por ruta — más simple que Kong o Ambassador para nuestra topología, y cada equipo mantuvo su cadencia de despliegue.',
    },
    tech: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'PostgreSQL', 'JWT', 'Prometheus'],
    demoUrl: '',
    sourceUrl: '',
  },
]

function ProjectLinks({ demoUrl, sourceUrl }: { demoUrl?: string; sourceUrl?: string }) {
  const hasDemo = typeof demoUrl === 'string' && demoUrl.length > 0
  const hasSource = typeof sourceUrl === 'string' && sourceUrl.length > 0
  if (!hasDemo && !hasSource) return null
  return (
    <div className="project-links">
      {hasDemo && (
        <a href={demoUrl} className="btn-ghost" target="_blank" rel="noopener noreferrer">
          Ver demo
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
      {hasSource && (
        <a href={sourceUrl} className="btn-filled" target="_blank" rel="noopener noreferrer">
          Ver código
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className={`projects-heading-wrap ${inView ? 'projects-heading-reveal' : ''}`}>
        <h2 className="section-heading">Proyectos</h2>
      </div>
      <div className="projects-list">
        {projects.map((p, i) => {
          const cardAnim = inView ? 'project-card-reveal' : ''

          if (p.layout === 'architecture') {
            const arch = p as ArchitectureProject
            return (
              <article key={arch.title} className={`project-card project-card--architecture ${cardAnim}`} style={{ '--i': i } as React.CSSProperties}>
                <div className="project-card-text">
                  <h3>{arch.title}</h3>
                  <p><strong>Problema:</strong> {arch.problem}</p>
                  <p><strong>Solución:</strong> {arch.solution}</p>
                  <ul className="project-results">
                    {arch.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <ProjectLinks demoUrl={arch.demoUrl} sourceUrl={arch.sourceUrl} />
                  <div className="project-card-tech">
                    {arch.tech.map((t) => (
                      <span key={t} className="project-card-tech-item">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            )
          }

          if (p.layout === 'fullwidth') {
            const fw = p as FullwidthProject
            return (
              <article key={fw.title} className={`project-card project-card--fullwidth ${cardAnim}`} style={{ '--i': i } as React.CSSProperties}>
                <div className="project-card-text">
                  <h3>{fw.title}</h3>
                  <p><strong>Problema:</strong> {fw.problem}</p>
                  <p><strong>Solución:</strong> {fw.solution}</p>
                </div>
                <ProjectLinks demoUrl={fw.demoUrl} sourceUrl={fw.sourceUrl} />
                <div className="project-decisions">
                  {fw.decisions.map((d) => (
                    <div key={d.label} className="project-decision">
                      <span className="project-decision-label">{d.label}</span>
                      <span className="project-decision-detail">{d.detail}</span>
                    </div>
                  ))}
                </div>
                <div className="project-card-tech">
                  {fw.tech.map((t) => (
                    <span key={t} className="project-card-tech-item">{t}</span>
                  ))}
                </div>
              </article>
            )
          }

          const comp = p as CompactProject
          return (
            <article key={comp.title} className={`project-card project-card--compact ${cardAnim}`} style={{ '--i': i } as React.CSSProperties}>
              <div className="project-card-tech">
                {comp.tech.map((t) => (
                  <span key={t} className="project-card-tech-item">{t}</span>
                ))}
              </div>
              <div className="project-card-text">
                <h3>{comp.title}</h3>
                <p><strong>Problema:</strong> {comp.problem}</p>
                <p><strong>Solución:</strong> {comp.solution}</p>
              </div>
              <ProjectLinks demoUrl={comp.demoUrl} sourceUrl={comp.sourceUrl} />
              <aside className="project-decision-callout">
                <strong className="project-decision-callout-label">{comp.decision.question}</strong>
                <p>{comp.decision.answer}</p>
              </aside>
            </article>
          )
        })}
      </div>
    </section>
  )
}
