import { skillsData } from '../data/skills';
import './Skills.css';

function SkillCard({ skill }) {
  const IconComponent = skill.icon;
  
  return (
    <div className="skill-card" role="listitem">
      <span className="skill-icon" aria-hidden="true">
        <IconComponent />
      </span>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="skills-container">
        <h2 id="skills-heading" className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category) => (
            <article key={category.name} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skill-items" role="list" aria-label={`${category.name} skills`}>
                {category.items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
