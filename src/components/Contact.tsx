export default function Contact() {
  return (
    <section className="fade-in px-4 py-12 min-h-screen sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:text-3xl lg:text-4xl sm:mb-12">
          Get In Touch
        </h2>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg text-blue-400 mb-2 flex items-center gap-2 sm:text-xl sm:mb-3">
                📧 Email
              </h3>
              <p className="text-sm text-white/80 sm:text-base">john.doe@example.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg text-blue-400 mb-2 flex items-center gap-2 sm:text-xl sm:mb-3">
                💼 LinkedIn
              </h3>
              <p className="text-sm text-white/80 sm:text-base">linkedin.com/in/johndoe</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg text-blue-400 mb-2 flex items-center gap-2 sm:text-xl sm:mb-3">
                🐙 GitHub
              </h3>
              <p className="text-sm text-white/80 sm:text-base">github.com/johndoe</p>
            </div>
          </div>
          <form className="space-y-4 sm:space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base sm:px-6 sm:py-4"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base sm:px-6 sm:py-4"
            />
            <textarea 
              placeholder="Your Message" 
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm sm:text-base sm:px-6 sm:py-4 sm:rows-6"
            />
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 sm:px-8 sm:py-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}