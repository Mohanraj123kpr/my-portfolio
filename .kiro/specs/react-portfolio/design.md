# Design Document: React Portfolio

## Overview

The React Portfolio is a modern, single-page application (SPA) built with React.js that showcases professional work, skills, and experience. The application uses a component-based architecture with React hooks for state management, CSS modules or styled-components for styling, and implements responsive design principles to ensure optimal viewing across all devices.

The portfolio follows a vertical scrolling layout with smooth navigation between sections. It includes theme switching capabilities (light/dark mode), optimized performance through lazy loading and code splitting, and maintains accessibility standards throughout.

## Architecture

### Technology Stack

- **Framework**: React 18+ with functional components and hooks
- **Build Tool**: Vite or Create React App
- **Styling**: CSS Modules or Styled Components (with CSS-in-JS)
- **State Management**: React Context API for theme management
- **Routing**: React Router (optional, for future multi-page expansion)
- **Form Handling**: React Hook Form or native form handling
- **Animations**: Framer Motion or CSS animations
- **Icons**: React Icons library
- **Deployment**: Vercel, Netlify, or GitHub Pages

### Application Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.module.css
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   ├── SkillCard.jsx
│   │   └── Skills.module.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Projects.module.css
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   └── Contact.module.css
│   └── ThemeToggle/
│       ├── ThemeToggle.jsx
│       └── ThemeToggle.module.css
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   ├── useTheme.js
│   └── useScrollSpy.js
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── personalInfo.js
├── assets/
│   └── images/
├── styles/
│   ├── global.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

## Components and Interfaces

### 1. App Component

The root component that orchestrates the entire application.

**Responsibilities:**
- Wraps the application with ThemeProvider
- Renders all major sections in order
- Manages scroll behavior

**Interface:**
```javascript
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
```

### 2. ThemeContext and ThemeProvider

Manages global theme state (light/dark mode).

**Interface:**
```javascript
// ThemeContext.jsx
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference
    return localStorage.getItem('theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 3. Navbar Component

Provides navigation between sections with active section highlighting.

**Props:** None (uses scroll position internally)

**State:**
- `activeSection`: string - currently active section
- `isMobileMenuOpen`: boolean - mobile menu state

**Interface:**
```javascript
function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMobileMenuOpen(false);
  };

  // Use Intersection Observer to track active section
  useEffect(() => {
    // Implementation for scroll spy
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {sections.map(section => (
          <li key={section}>
            <a 
              onClick={() => handleNavClick(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}
```

### 4. Hero Component

Landing section with introduction and call-to-action.

**Props:** None (uses data from personalInfo.js)

**Interface:**
```javascript
function Hero() {
  const { name, title, tagline } = personalInfo;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-cta">
          <button onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
          <button onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
```

### 5. About Component

Displays biographical information and professional photo.

**Props:** None (uses data from personalInfo.js)

**Interface:**
```javascript
function About() {
  const { bio, image, highlights } = personalInfo;

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img src={image} alt="Profile" className="about-image" />
        <div className="about-text">
          <p>{bio}</p>
          <ul className="highlights">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

### 6. Skills Component

Displays technical skills organized by category.

**Props:** None (uses data from skills.js)

**Interface:**
```javascript
function Skills() {
  const skillCategories = skillsData;

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.name} className="skill-category">
            <h3>{category.name}</h3>
            <div className="skill-items">
              {category.items.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}
```

### 7. Projects Component

Showcases portfolio projects in a responsive grid.

**Props:** None (uses data from projects.js)

**Interface:**
```javascript
function Projects() {
  const projects = projectsData;

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl, githubUrl } = project;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {technologies.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
```

### 8. Contact Component

Provides contact form and social links.

**Props:** None

**State:**
- `formData`: object - form field values
- `errors`: object - validation errors
- `isSubmitting`: boolean - submission state

**Interface:**
```javascript
function Contact() {
  const { email, socialLinks } = personalInfo;

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>Feel free to reach out for opportunities or just to say hello!</p>
          <a href={`mailto:${email}`} className="email-link">{email}</a>
          <div className="social-links">
            {socialLinks.map(link => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    // Handle form submission (e.g., send to API or email service)
    // For now, just log and reset
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### 9. ThemeToggle Component

Button to switch between light and dark themes.

**Props:** None (uses ThemeContext)

**Interface:**
```javascript
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

## Data Models

### Personal Information

```javascript
// data/personalInfo.js
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "Building beautiful and functional web experiences",
  bio: "Passionate developer with X years of experience...",
  image: "/assets/profile.jpg",
  email: "your.email@example.com",
  highlights: [
    "X+ years of development experience",
    "Specialized in React and Node.js",
    "Open source contributor"
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/username", icon: <GitHubIcon /> },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: <LinkedInIcon /> },
    { platform: "Twitter", url: "https://twitter.com/username", icon: <TwitterIcon /> }
  ]
};
```

### Skills Data

```javascript
// data/skills.js
export const skillsData = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: <ReactIcon /> },
      { name: "JavaScript", icon: <JSIcon /> },
      { name: "HTML/CSS", icon: <HTMLIcon /> },
      { name: "TypeScript", icon: <TSIcon /> }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: <NodeIcon /> },
      { name: "Express", icon: <ExpressIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> }
    ]
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: <GitIcon /> },
      { name: "VS Code", icon: <VSCodeIcon /> },
      { name: "Figma", icon: <FigmaIcon /> }
    ]
  }
];
```

### Projects Data

```javascript
// data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of the project and its purpose",
    image: "/assets/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/username/project"
  },
  // More projects...
];
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation scroll behavior

*For any* navigation link click, scrolling to the target section should result in that section being visible in the viewport and the navigation link being marked as active.

**Validates: Requirements 1.2, 1.3**

### Property 2: Theme persistence

*For any* theme toggle action, the selected theme should be stored in localStorage and persist across browser sessions.

**Validates: Requirements 8.4**

### Property 3: Form validation consistency

*For any* contact form submission with invalid data (empty fields or malformed email), the form should display appropriate error messages and prevent submission.

**Validates: Requirements 6.4**

### Property 4: Responsive layout adaptation

*For any* viewport width, all components should render without horizontal overflow and maintain proper spacing and readability.

**Validates: Requirements 7.1, 7.2, 7.3**

### Property 5: Theme application completeness

*For any* theme change, all components should reflect the new theme colors and styles without requiring a page refresh.

**Validates: Requirements 8.3**

### Property 6: Keyboard navigation support

*For any* interactive element (buttons, links, form inputs), keyboard navigation (Tab, Enter, Space) should allow full interaction without requiring a mouse.

**Validates: Requirements 10.4**

### Property 7: Image lazy loading

*For any* image below the initial viewport, the image should not load until the user scrolls near it, reducing initial page load time.

**Validates: Requirements 9.3**

### Property 8: Mobile menu toggle

*For any* mobile viewport, clicking the hamburger menu should toggle the navigation menu visibility, and clicking a nav link should close the menu.

**Validates: Requirements 1.5**

### Property 9: Project card hover interaction

*For any* project card, hovering (or touching on mobile) should provide visual feedback indicating interactivity.

**Validates: Requirements 5.5**

### Property 10: System theme detection

*For any* first-time visitor without a stored theme preference, the application should default to the user's system theme preference (light or dark).

**Validates: Requirements 8.5**

## Error Handling

### Form Validation Errors

- Display inline error messages for invalid form fields
- Prevent form submission when validation fails
- Clear errors when user corrects the input
- Provide clear, actionable error messages

### Image Loading Errors

- Provide fallback images or placeholders for failed image loads
- Use alt text for accessibility when images fail to load

### Theme Loading Errors

- Default to light theme if localStorage access fails
- Gracefully handle missing theme preferences

### Navigation Errors

- Handle cases where section IDs don't exist
- Prevent navigation errors from breaking the application

## Testing Strategy

### Unit Tests

Unit tests will verify specific examples, edge cases, and error conditions for individual components and functions.

**Focus areas:**
- Form validation logic with specific invalid inputs
- Theme toggle functionality
- Data transformation functions
- Component rendering with specific props

**Example unit tests:**
- Contact form rejects empty name field
- Contact form rejects invalid email format "notanemail"
- Theme toggle switches from light to dark
- Navigation highlights correct section for specific scroll position

### Property-Based Tests

Property-based tests will verify universal properties across all inputs using a testing library like `fast-check` for JavaScript.

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with: **Feature: react-portfolio, Property {number}: {property_text}**

**Property test implementations:**

1. **Navigation scroll behavior** - Generate random section IDs and verify scroll and active state
2. **Theme persistence** - Generate random theme toggle sequences and verify localStorage consistency
3. **Form validation consistency** - Generate random invalid form data and verify error display
4. **Responsive layout adaptation** - Generate random viewport widths and verify no overflow
5. **Theme application completeness** - Generate random theme switches and verify all components update
6. **Keyboard navigation support** - Generate random keyboard event sequences and verify interaction
7. **Image lazy loading** - Generate random scroll positions and verify image loading behavior
8. **Mobile menu toggle** - Generate random menu toggle sequences and verify state consistency
9. **Project card hover interaction** - Generate random hover events and verify visual feedback
10. **System theme detection** - Generate random system preferences and verify initial theme

### Integration Tests

- Test complete user flows (navigation → view project → contact)
- Test theme switching across all components
- Test form submission end-to-end
- Test responsive behavior across breakpoints

### Testing Tools

- **Unit Testing**: Jest + React Testing Library
- **Property-Based Testing**: fast-check
- **E2E Testing**: Cypress or Playwright (optional)
- **Accessibility Testing**: jest-axe or axe-core

## Performance Considerations

1. **Code Splitting**: Split code by route or component for faster initial load
2. **Image Optimization**: Use WebP format with fallbacks, compress images
3. **Lazy Loading**: Implement lazy loading for images and components below the fold
4. **Memoization**: Use React.memo for expensive components
5. **Bundle Size**: Monitor and minimize bundle size using webpack-bundle-analyzer
6. **CSS Optimization**: Use CSS modules to avoid global style conflicts and reduce CSS size

## Accessibility Considerations

1. **Semantic HTML**: Use proper heading hierarchy, nav, section, article tags
2. **ARIA Labels**: Add aria-labels to icon buttons and interactive elements
3. **Color Contrast**: Ensure WCAG AA compliance (4.5:1 for normal text)
4. **Keyboard Navigation**: All interactive elements accessible via keyboard
5. **Focus Indicators**: Visible focus states for keyboard navigation
6. **Alt Text**: Descriptive alt text for all images
7. **Form Labels**: Proper labels and error associations for form inputs
