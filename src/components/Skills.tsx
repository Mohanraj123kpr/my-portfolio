export default function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS/SCSS", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "📘" },
    { name: "React", icon: "⚛️" },
    { name: "Angular", icon: "🅰️" },
    { name: "Vue.js", icon: "💚" },
    { name: "Redux", icon: "🔄" },
    { name: "Pinia", icon: "🍍" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Git", icon: "📝" },
    { name: "Jenkins", icon: "⚙️" }
  ];

  return (
    <section className="fade-in px-4 py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:text-3xl lg:text-4xl sm:mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 fade-in group text-center sm:p-6"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                <h3 className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 sm:text-sm">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}