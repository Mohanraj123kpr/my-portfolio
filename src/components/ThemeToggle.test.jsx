import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '../context/ThemeContext';

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render the theme toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });

  it('should have proper accessibility label', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-label')).toMatch(/Switch to (dark|light) mode/);
  });

  it('should toggle theme when clicked', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    const initialIcon = button.textContent;
    
    fireEvent.click(button);
    
    const newIcon = button.textContent;
    expect(newIcon).not.toBe(initialIcon);
  });

  it('should display moon icon in light mode', () => {
    localStorage.setItem('theme', 'light');
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('🌙');
  });

  it('should display sun icon in dark mode', () => {
    localStorage.setItem('theme', 'dark');
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('☀️');
  });
});
