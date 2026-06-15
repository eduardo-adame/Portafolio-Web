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

const iconColor: Record<string, string> = {
  'React': '#61DAFB',
  'TypeScript': '#3178C6',
  'HTML/CSS': '#E34F26',
  'Next.js': '#000000',
  'Tailwind CSS': '#06B6D4',
  'JavaScript': '#F7DF1E',
  'Python': '#3776AB',
  'Spring Boot': '#6DB33F',
  'Laravel': '#FF2D20',
  'Java': '#ED8B00',
  'Node.js': '#339933',
  'PostgreSQL': '#4169E1',
  'MongoDB': '#47A248',
  'MySQL': '#4479A1',
  'SQLITE': '#003B57',
  'AWS': '#FF9900',
  'Docker': '#2496ED',
  'Linux': '#FCC624',
  'Nginx': '#009639',
  'Google Cloud': '#4285F4',
  'Git': '#F05032',
  'VS Code': '#007ACC',
  'Figma': '#F24E1E',
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
      <div className={`${inView ? 'animate-in--fade' : 'animate-in'}`}>
        <h2 className="section-heading">Habilidades</h2>
      </div>
      <div className="skills-rows">
        {domains.map((domain, i) => (
          <div key={domain.name} className={`skills-row ${inView ? `animate-in--visible animate-in--delay-${i + 1}` : 'animate-in'}`}>
            <h3 className="skills-row-label">{domain.name}</h3>
            <div className="skills-row-pills">
              {domain.items.map((item) => {
                const Icon = iconMap[item]
                return (
                  <span key={item} className="skill-pill">
                    {Icon && <Icon size={14} style={{ color: iconColor[item] }} aria-hidden="true" />}
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
