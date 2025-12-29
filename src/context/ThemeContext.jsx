import { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// ThemeProvider component
export function ThemeProvider({ children }) {
  // Initialize theme state with localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // First, check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // If no saved preference, detect system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme to document root via data attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
