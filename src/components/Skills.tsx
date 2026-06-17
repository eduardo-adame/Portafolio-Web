import { useInView } from '../hooks/useInView'
import {
  SiReact, SiTypescript, SiHtml5, SiNextdotjs, SiTailwindcss,
  SiJavascript, SiPython, SiSpringboot, SiLaravel,
  SiOpenjdk, SiPostgresql, SiMongodb, SiMysql, SiSqlite,
  SiNodedotjs, SiDocker, SiLinux, SiNginx, SiGooglecloud,
  SiGit, SiFigma,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import type { IconType } from 'react-icons'
import './Skills.css'

const iconMap: Record<string, IconType> = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'HTML/CSS': SiHtml5,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Spring Boot': SiSpringboot,
  'Laravel': SiLaravel,
  'Java': SiOpenjdk,
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'SQLITE': SiSqlite,
  'AWS': FaAws,
  'Docker': SiDocker,
  'Linux': SiLinux,
  'Nginx': SiNginx,
  'Google Cloud': SiGooglecloud,
  'Git': SiGit,
  'VS Code': VscVscode,
  'Figma': SiFigma,
}

const domains = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS', 'JavaScript', 'VS Code', 'Figma'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs', 'Spring Boot', 'Laravel', 'Java'],
  },
  {
    name: 'Bases de Datos',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLITE'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'Google Cloud', 'Git'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className={`skills-heading-wrap ${inView ? 'skills-heading-reveal' : ''}`}>
        <h2 className="section-heading">Habilidades</h2>
      </div>
      <div className="skills-rows">
        {domains.map((domain, i) => (
          <div
            key={domain.name}
            className={`skills-row ${inView ? 'skills-row-reveal' : ''}`}
            style={{ '--i': i } as React.CSSProperties}
          >
            <h3 className="skills-row-label">{domain.name}</h3>
            <div className="skills-row-pills">
              {domain.items.map((item, j) => {
                const Icon = iconMap[item]
                return (
                  <span
                    key={item}
                    className={`skill-pill ${inView ? 'skill-pill-reveal' : ''}`}
                    style={{ '--j': j } as React.CSSProperties}
                  >
                    {Icon && <Icon size={14} aria-hidden="true" />}
                    {item}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
