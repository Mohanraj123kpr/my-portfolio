export default function About() {
  return (
    <section className="fade-in px-4 py-16 text-center sm:py-20 lg:py-24">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
          Hi, I'm Mohanraj
        </h1>
        <p className="text-lg text-blue-400 mb-6 sm:text-xl lg:text-2xl sm:mb-8">
          Frontend Developer
        </p>
        <p className="text-sm text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed sm:text-base lg:text-lg sm:mb-12">
          I specialize in creating stunning, interactive user interfaces with modern JavaScript frameworks. 
          Passionate about pixel-perfect designs, smooth animations, and exceptional user experiences.
        </p>
        <div className="flex flex-col gap-3 max-w-sm mx-auto sm:flex-row sm:gap-4 sm:max-w-none sm:justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 sm:px-8 sm:py-4">
            View My Work
          </button>
          <button className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-1 sm:px-8 sm:py-4">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}