import { useInView } from '../hooks/useInView'
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    problem: 'A growing retailer needed a scalable, performant online store that could handle high traffic during sales events without downtime.',
    solution: 'Built a server-side rendered React storefront with a headless CMS, Redis caching layer, and auto-scaling infrastructure on AWS.',
    tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    gradient: 'peach',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    problem: 'Customers could not make sense of their usage data — reports took hours to generate and were often stale by delivery.',
    solution: 'Developed a streaming data pipeline processing 50k+ events/sec with live dashboards, configurable alerts, and instant drill-down.',
    tech: ['Node.js', 'React', 'WebSocket', 'PostgreSQL', 'Docker', 'Chart.js', 'Nginx'],
    gradient: 'mint',
  },
  {
    title: 'API Gateway & Auth Service',
    problem: 'Microservices had inconsistent auth, rate limiting, and observability — each team solved the same problems differently.',
    solution: 'Designed a unified gateway handling authentication, rate-limiting, logging, and routing for 12+ backend services.',
    tech: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'PostgreSQL', 'JWT', 'Prometheus'],
    gradient: 'peach',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section className="projects" id="projects" ref={ref}>
      <h2 className={`section-label ${inView ? 'animate-in--fade' : 'animate-in'}`}>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={p.title} className={`project-card ${inView ? `animate-in--visible animate-in--delay-${i + 1}` : 'animate-in'}`}>
            <div className="project-card-text">
              <h3>{p.title}</h3>
              <p><strong>Problem:</strong> {p.problem}</p>
              <p><strong>Solution:</strong> {p.solution}</p>
              <div className="project-card-tech">
                {p.tech.map((t) => (
                  <span key={t} className="project-card-tech-item">{t}</span>
                ))}
              </div>
            </div>
            <div className={`project-card-illustration${p.gradient === 'mint' ? ' project-card-illustration--mint' : ''}`} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
