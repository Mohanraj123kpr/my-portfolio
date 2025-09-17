import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  
  const navItems = [
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/about')
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:text-xl">
          Portfolio
        </Link>
        <nav className="flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`px-2 py-1.5 rounded-full font-medium transition-all duration-300 text-xs sm:px-4 sm:py-2 sm:text-sm ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}