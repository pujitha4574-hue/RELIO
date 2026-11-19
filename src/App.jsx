import './App.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <span className="logo">Relio</span>
        <div>
          <button className="btn-light">Log in</button>
          <button className="btn-main">Get started</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Build your resume and portfolio in minutes</h1>
        <p>Enter your details once. Get a resume, a CV and a portfolio website.</p>
        <button className="btn-main">Create my profile</button>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Resume</h3>
          <p>Clean, ATS-friendly templates.</p>
        </div>
        <div className="feature">
          <h3>CV</h3>
          <p>Longer format for academic and professional use.</p>
        </div>
        <div className="feature">
          <h3>Portfolio</h3>
          <p>Your own website with a shareable link.</p>
        </div>
      </section>
    </div>
  )
}

export default App