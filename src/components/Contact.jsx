import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <p>I'd love to hear from you. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:thapelo.moletsane0@gmail.com" className="contact-link">
              <span aria-hidden="true">📧</span> Email
            </a>
            <a
              href="https://www.linkedin.com/in/thapelo-moletsane-a16079129/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">💼</span> LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/StarboyXV"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">💻</span> GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="tel:+27812629051" className="contact-link">
              <span aria-hidden="true">📱</span> Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
