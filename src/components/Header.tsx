interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-3 sm:px-6 sm:py-4">
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:text-xl">
          Portfolio
        </h1>
        <nav className="flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`px-2 py-1.5 rounded-full font-medium transition-all duration-300 text-xs sm:px-4 sm:py-2 sm:text-sm ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}