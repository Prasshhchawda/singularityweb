import { useEffect, useState } from 'react'
import './App.css'
import singularityMark from './assets/singularity-mark.png'

function App() {
  const [query, setQuery] = useState('')

  const submit = (event) => {
    event.preventDefault()
    window.location.assign('/clothing-brand#download')
  }

  if (window.location.pathname === '/clothing-brand') {
    return <ClothingBrandPage />
  }

  return (
    <main className="singularity">
      <div className="brand-bar" />

      <header className="site-header">
        <div className="header-left">
          <a className="logo" href="#" aria-label="Singularity home">
            <img src={singularityMark} alt="" />
          </a>
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

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-content">
          <p className="about-eyebrow">About Singularity</p>
          <h2 id="about-title">AI-Powered Operations. Lower Costs.</h2>
          <p>
            Our platform brings together 7 AI agents to streamline product
            management, projects, operations, logistics, inventory, and more.
            Built for businesses looking to reduce operational costs, automate
            manual work, and improve efficiency without adding unnecessary
            overhead.
          </p>
          <p>
            With a free initial trial, you can experience the platform firsthand
            and discover how smarter operations can help your business save
            costs and scale efficiently.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-content">
          <p className="about-eyebrow">Get in touch</p>
          <h2 id="contact-title">Contact</h2>
          <p className="contact-intro">
            For business inquiries, partnerships, or platform-related questions,
            reach out through any of the channels below.
          </p>
          <ul className="contact-list">
            <li>
              <span>Brand Instagram</span>
              <a href="https://instagram.com/singularity_app" target="_blank" rel="noreferrer">
                @singularity_app
              </a>
            </li>
            <li>
              <span>Personal Instagram</span>
              <a href="https://instagram.com/praharsh.chawda" target="_blank" rel="noreferrer">
                @praharsh.chawda
              </a>
            </li>
            <li>
              <span>X (Twitter)</span>
              <a href="https://x.com/praharsh_chawda" target="_blank" rel="noreferrer">
                @praharsh_chawda
              </a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:praharshchhawda@gmail.com">praharshchhawda@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>

    </main>
  )
}

function ClothingBrandPage() {
  useEffect(() => {
    if (window.location.hash === '#download') {
      document.getElementById('download')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [])

  return (
    <main className="singularity clothing-page">
      <div className="brand-bar" />
      <header className="clothing-page-header">
        <a className="clothing-back-link" href="/" aria-label="Back to home">
          <span aria-hidden="true">←</span>
          <span>Back to home</span>
        </a>
        <a className="logo" href="/" aria-label="Singularity home">
          <img src={singularityMark} alt="" />
        </a>
      </header>
      <section className="clothing-page-content" aria-labelledby="clothing-title">
        <p className="about-eyebrow">7 AI agents (compatible with all niches)</p>
        <h1 id="clothing-title">Meet your AI team</h1>
        <p>
          Get started with the Singularity Windows installer (.exe) and bring
          your personal AI agents to your computer.
        </p>
        <div id="download" className="download">
          <button type="button" disabled aria-label="Windows installer download link not configured">
            ↓
          </button>
          <span>Windows installer (.exe) — download link coming soon</span>
        </div>
      </section>
    </main>
  )
}

export default App
