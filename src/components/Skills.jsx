import './Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    skills: ['C#', 'VB (KCML)', 'Java', 'React']
  },
  {
    category: 'Mobile Development',
    skills: ['Xamarin.Android', '.NET MAUI']
  },
  {
    category: 'Backend & Web Technologies',
    skills: ['ASP.NET Web Services', 'SOAP APIs']
  },
  {
    category: 'Database Management',
    skills: ['SQL Server', 'Entity Framework', 'MySQL']
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'Agile/Scrum', 'SDLC', 'Jira']
  }
]

export function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat.category} className="skill-category">
              <h3>{cat.category}</h3>
              <ul role="list">
                {cat.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
