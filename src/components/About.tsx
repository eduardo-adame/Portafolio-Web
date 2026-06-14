import './About.css'

const values = [
  'Clean Architecture',
  'Type Safety',
  'Testable Code',
  'Performance',
  'User Experience',
  'CI/CD',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-label">About</h2>
          <p>
            I am a full stack developer with experience building production-grade
            applications across the entire web stack. From database design and
            API architecture to responsive frontends and cloud deployment, I
            focus on creating software that is maintainable, performant, and
            user-friendly.
          </p>
          <p>
            My approach combines strong engineering fundamentals with practical
            product thinking. I believe the best systems are built when technical
            decisions are guided by real user needs and business goals.
          </p>
        </div>
        <div className="about-card">
          <h3 className="about-card-heading">What drives me</h3>
          <div className="about-card-tags">
            {values.map((v) => (
              <span key={v} className="about-card-tag">{v}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
