import { useInView } from '../hooks/useInView'
import './Skills.css'

const groups = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle', 'SQL'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'Terraform'],
  },
  {
    name: 'Mobile',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    name: 'Tools & Workflow',
    items: ['Git', 'VS Code', 'Figma', 'Notion', 'Linear', 'Jira'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section className="skills" id="skills" ref={ref}>
      <h2 className={`section-label ${inView ? 'animate-in--fade' : 'animate-in'}`}>Technical Skills</h2>
      <div className={`skills-grid ${inView ? 'animate-in--visible' : 'animate-in'}`}>
        {groups.map((group) => (
          <div key={group.name}>
            <h3 className="skills-group-heading">{group.name}</h3>
            <ul className="skills-list">
              {group.items.map((item) => (
                <li key={item} className="skills-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
