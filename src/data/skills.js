import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiWebpack,
  SiVite
} from 'react-icons/si';

export const skillsData = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis }
    ]
  },
  {
    name: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "VS Code", icon: FaCode },
      { name: "Figma", icon: FaFigma },
      { name: "Docker", icon: FaDocker },
      { name: "Webpack", icon: SiWebpack },
      { name: "Vite", icon: SiVite }
    ]
  }
];
