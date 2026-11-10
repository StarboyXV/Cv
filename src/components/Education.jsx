import './Education.css'

const EDUCATION = [
  {
    id: 1,
    school: 'North-West University',
    degree: 'Bachelor of Science',
    field: 'Information Technology',
    year: '2019'
  },
  {
    id: 2,
    school: 'Technical High School Sasolburg',
    degree: 'High School Diploma',
    field: 'General Education',
    year: '2015'
  }
]

export function Education() {
  return (
    <section id="education" className="education section" aria-labelledby="education-title">
      <div className="container">
        <h2 id="education-title" className="section-title">Education</h2>
        {EDUCATION.map(edu => (
          <div key={edu.id} className="education-item card">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <p className="school">{edu.school}</p>
            <p className="field">{edu.field}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
