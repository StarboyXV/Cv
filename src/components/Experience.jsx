import './Experience.css'

const EXPERIENCES = [
  {
    id: 1,
    company: 'Kerridge Commercial Systems',
    position: 'Software Engineer – Mobile Apps',
    period: '2024 – Present',
    description: [
      'Developed and maintained ERP mobile applications using Xamarin.Android and .NET MAUI, improving usability and performance for field-based workflows.',
      'Designed and implemented ASP.NET Web Services to support mobile features, enabling seamless data synchronization between mobile and ERP systems.',
      'Optimized SQL database interactions, improving data retrieval efficiency and reducing latency in key application features.',
      'Collaborated with cross-functional teams (QA, product, backend teams) to deliver production-ready features within Agile sprints.',
      'Migration from Xamarin to .NET MAUI, modernizing the mobile stack and improving long-term maintainability.'
    ]
  },
  {
    id: 2,
    company: 'Kerridge Commercial Systems',
    position: 'Software Engineer',
    period: '2022 – 2023',
    description: [
      'Developed ERP system features using KCML (VB), enhancing core system functionality used in daily business operations.',
      'Maintained and improved the K8 ERP system, resolving bugs and increasing system stability.',
      'Investigated and fixed production issues, reducing recurring defects and improving user experience.',
      'Collaborated with internal teams to support system integrations, ensuring smooth data flow across platforms.',
      'Contributed to Agile development cycles, helping deliver features on time and improving team velocity.'
    ]
  },
  {
    id: 3,
    company: 'Kerridge Commercial Systems',
    position: 'Graduate Software Engineer',
    period: '2021 – 2022',
    description: [
      'Assisted in the development and maintenance of ERP system features using KCML (VB).',
      'Participated in code reviews and contributed to improving code quality and maintainability.',
      'Supported the testing and debugging of new features, ensuring they met the required specifications.',
      'Collaborated with senior developers to learn best practices and improve technical skills.',
      'Participated in Agile development meetings to discuss progress and plan upcoming tasks.'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="experience section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Experience</h2>
        {EXPERIENCES.map(exp => (
          <div key={exp.id} className="experience-item card">
            <div className="experience-header">
              <h3>{exp.position}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company">{exp.company}</p>
            <ul className="description-bullets" role="list">
              {exp.description.map(desc => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
