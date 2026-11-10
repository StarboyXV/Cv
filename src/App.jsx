import { Header } from './components/Header'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Experience />
        <Skills />
        <Education />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App
