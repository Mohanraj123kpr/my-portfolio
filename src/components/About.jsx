import { personalInfo } from '../data/personalInfo';
import LazyImage from './LazyImage';
import './About.css';

function About() {
  const { bio, image, highlights } = personalInfo;

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-container">
        <h2 id="about-heading" className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-wrapper">
            <LazyImage 
              src={image} 
              alt={`${personalInfo.name} - ${personalInfo.title}`}
              className="about-image" 
            />
          </div>
          <div className="about-text">
            <p className="about-bio">{bio}</p>
            <ul className="highlights" aria-label="Professional highlights">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
