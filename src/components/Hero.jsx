import { personalInfo } from '../data/personalInfo';
import './Hero.css';

function Hero() {
  const { name, title, tagline } = personalInfo;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-name">{name}</h1>
        <p className="hero-title" role="doc-subtitle">{title}</p>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-cta" role="group" aria-label="Call to action buttons">
          <button 
            className="cta-primary"
            onClick={() => scrollToSection('projects')}
            aria-label="View my work - scroll to projects section"
          >
            View My Work
          </button>
          <button 
            className="cta-secondary"
            onClick={() => scrollToSection('contact')}
            aria-label="Get in touch - scroll to contact section"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
