import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about-content ${inView ? 'about-reveal' : ''}`}>
        <h2 className="section-heading about-heading">Sobre mí</h2>
        <div className="about-body">
          <p>
            Soy un desarrollador full stack con experiencia creando aplicaciones
            de nivel productivo en todo el stack web. Desde diseño de bases de
            datos y arquitectura de APIs hasta frontends responsivos y despliegue
            en la nube, me enfoco en construir software mantenible, eficiente y
            fácil de usar.
          </p>
          <p>
            Mi enfoque combina fundamentos sólidos de ingeniería con pensamiento
            práctico de producto. Creo que los mejores sistemas se construyen
            cuando las decisiones técnicas están guiadas por necesidades reales
            de los usuarios y objetivos de negocio.
          </p>
        </div>
      </div>
    </section>
  )
}
