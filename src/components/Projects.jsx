import { projectsData } from '../data/projects';
import LazyImage from './LazyImage';
import './Projects.css';

function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl, githubUrl } = project;

  return (
    <article className="project-card">
      <div className="project-image-container">
        <LazyImage src={image} alt={`${title} project screenshot`} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech" role="list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge" role="listitem">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links" role="group" aria-label="Project links">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View live demo of ${title} (opens in new tab)`}
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View source code for ${title} on GitHub (opens in new tab)`}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">Projects</h2>
      <div className="projects-grid" role="list" aria-label="Portfolio projects">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
