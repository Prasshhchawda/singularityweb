import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [showSecond, setShowSecond] = useState(false)
  const secondRef = useRef(null)

  useEffect(() => {
    if (showSecond) {
      secondRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [showSecond])

  const submit = (event) => {
    event.preventDefault()
    setShowSecond(query.trim().toLowerCase().includes('clothing brand'))
  }

  const backToSingularity = () => {
    setShowSecond(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="singularity">
      <div className="brand-bar" />

      <header className="site-header">
        <div className="header-left">
          <a className="logo" href="#" aria-label="Singularity home">logo</a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
        <button className="profile-button" type="button" aria-label="Profile">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
          </svg>
        </button>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <h1>Singularity</h1>
        <form className="search-form" onSubmit={submit}>
          <span className="search-menu" aria-hidden="true">☰</span>
          <input
            aria-label="Search your niche business"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="search your niche bussines"
          />
          <button className="search-submit" type="submit" aria-label="Search">
            ⌕
          </button>
        </form>
      </section>

      {showSecond && (
        <section ref={secondRef} className="result-section">
          <div className="result-card">
            <button
              type="button"
              onClick={backToSingularity}
              aria-label="Back to Singularity"
              className="back-button"
            >
              ←
            </button>
            <h2>Clothing<br />brand</h2>
            <p>download your persnal ai agent that ives in your computer</p>
            <div className="download">
              <a href="#" aria-label="Download">↓</a>
              <span>from here</span>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
