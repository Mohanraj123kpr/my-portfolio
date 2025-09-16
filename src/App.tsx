import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'skills': return <Skills />
      case 'contact': return <Contact />
      default: return <About />
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white transition-all duration-700 overflow-x-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="pt-16 sm:pt-20">
        <div className="slide-in" key={activeSection}>
          {renderSection()}
        </div>
      </main>
    </div>
  )
}

export default App
