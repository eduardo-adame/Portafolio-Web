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
  return (
    <section className="skills" id="skills">
      <h2 className="section-label">Technical Skills</h2>
      <div className="skills-grid">
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
