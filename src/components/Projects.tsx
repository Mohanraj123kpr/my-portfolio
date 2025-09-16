export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with React, TypeScript, and Redux for inventory management",
      tech: ["React", "TypeScript", "Redux"]
    },
    {
      title: "Social Media App",
      description: "Responsive social platform built with Vue.js, Pinia state management, and CSS animations",
      tech: ["Vue.js", "Pinia", "CSS3"]
    },
    {
      title: "Portfolio Website",
      description: "Interactive portfolio with Angular, smooth animations, and mobile-first design",
      tech: ["Angular", "SCSS", "JavaScript"]
    },
    {
      title: "Task Management UI",
      description: "Clean, intuitive interface with drag-and-drop functionality and real-time updates",
      tech: ["React", "HTML5", "CSS Grid"]
    },
    {
      title: "Landing Page Collection",
      description: "Multiple responsive landing pages with modern CSS techniques and performance optimization",
      tech: ["HTML", "SCSS", "JavaScript"]
    },
    {
      title: "Component Library",
      description: "Reusable UI components built with TypeScript, documented with Storybook",
      tech: ["TypeScript", "React", "Storybook"]
    }
  ];

  return (
    <section className="fade-in px-4 py-12 min-h-screen sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:text-3xl lg:text-4xl sm:mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 fade-in sm:p-6 lg:p-8"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-lg font-semibold mb-3 text-blue-400 sm:text-xl lg:text-2xl sm:mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed sm:text-base sm:mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30 sm:px-3 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}