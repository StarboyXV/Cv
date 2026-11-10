import { useEffect, useRef, useState } from 'react'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const navRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    const onPointerDown = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <div className="header-top">
          <div className="brand">
            <h1>Thapelo Moletsane</h1>
            <p className="job-title">Software Engineer | Mobile & ERP Developer</p>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(open => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            ref={navRef}
            id="main-nav"
            aria-label="Main navigation"
            className={`main-nav ${menuOpen ? 'open' : ''}`}
          >
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>

        <p className="summary">
          Results-driven Software Engineer with experience developing ERP mobile applications and supporting backend services using .NET, C#, and Xamarin/.NET MAUI. Skilled in building scalable features, optimizing database interactions, and contributing to end-to-end solution delivery. Adept at working in Agile environments and collaborating with cross-functional teams to deliver reliable, user-focused software.
        </p>
      </div>
    </header>
  )
}
