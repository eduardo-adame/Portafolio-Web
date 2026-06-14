import { useInView } from '../hooks/useInView'
import './Experience.css'

const items = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company — Remote',
    date: '2023 — Present',
    description:
      'Lead development of customer-facing web applications serving 100k+ users. Architected microservices migration, reduced API latency by 40%, and mentored junior developers.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency — São Paulo',
    date: '2021 — 2023',
    description:
      'Built and maintained 15+ client projects across e-commerce, SaaS, and content platforms. Introduced TypeScript, automated testing, and CI/CD pipelines to the team workflow.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup — Remote',
    date: '2019 — 2021',
    description:
      'Developed the frontend architecture for an early-stage analytics platform. Collaborated closely with design and product to ship features on a two-week release cycle.',
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section className="experience" id="experience" ref={ref}>
      <h2 className={`section-label ${inView ? 'animate-in--fade' : 'animate-in'}`}>Experience</h2>
      <div className="experience-list">
        {items.map((item, i) => (
          <div key={item.title} className={`experience-item ${inView ? `animate-in--visible animate-in--delay-${i + 1}` : 'animate-in'}`}>
            <div className="experience-item-header">
              <h3 className="experience-item-title">{item.title}</h3>
              <span className="experience-item-date">{item.date}</span>
            </div>
            <div className="experience-item-company">{item.company}</div>
            <p className="experience-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
