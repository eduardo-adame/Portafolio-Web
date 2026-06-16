import { useInView } from '../hooks/useInView'
import './Experience.css'

const items = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company — Remoto',
    date: '2023 — Actualidad',
    description:
      'Lideré el desarrollo de aplicaciones web orientadas al cliente con más de 100 mil usuarios. Diseñé la arquitectura de la migración a microservicios, reduje la latencia de APIs en un 40% y mentoricé a desarrolladores junior.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Agencia Digital — São Paulo',
    date: '2021 — 2023',
    description:
      'Construí y mantuve más de 15 proyectos freelance en comercio electrónico, SaaS y plataformas de contenido. Introduje TypeScript, pruebas automatizadas y pipelines de CI/CD en el flujo de trabajo del equipo.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup — Remoto',
    date: '2019 — 2021',
    description:
      'Desarrollé la arquitectura frontend para una plataforma de analítica en etapa temprana. Colaboré estrechamente con diseño y producto para lanzar funciones en ciclos de dos semanas.',
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className={`experience-heading-wrap ${inView ? 'experience-heading-reveal' : ''}`}>
        <h2 className="section-heading">Experiencia</h2>
      </div>
      <div className={`experience-timeline ${inView ? 'experience-timeline-reveal' : ''}`}>
        <div className="experience-list">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`experience-item ${inView ? 'experience-item-reveal' : ''}`}
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="experience-item-header">
                <h3 className="experience-item-title">{item.title}</h3>
                <span className="experience-item-date">{item.date}</span>
              </div>
              <div className="experience-item-company">{item.company}</div>
              <p className="experience-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
