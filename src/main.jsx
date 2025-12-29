import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

function Root() {
  useEffect(() => {
    // Remove preload class after initial render to enable transitions
    document.body.classList.remove('preload');
  }, []);

  return (
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
