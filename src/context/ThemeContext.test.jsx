import { describe, it, expect, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import * as fc from 'fast-check';
import { ThemeProvider } from './ThemeContext.jsx';
import { useTheme } from '../hooks/useTheme.js';

/**
 * Feature: react-portfolio, Property 2: Theme persistence
 * 
 * For any theme toggle action, the selected theme should be stored in 
 * localStorage and persist across browser sessions.
 * 
 * Validates: Requirements 8.4
 */
describe('Property 2: Theme persistence', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Clear any data-theme attribute
    document.documentElement.removeAttribute('data-theme');
  });

  it('should persist theme to localStorage after any sequence of toggles', () => {
    // Property-based test with minimum 100 iterations
    fc.assert(
      fc.property(
        // Generate a random sequence of toggle actions (1 to 20 toggles)
        // We need at least 1 toggle to test persistence
        fc.array(fc.constant('toggle'), { minLength: 1, maxLength: 20 }),
        (toggleSequence) => {
          // Clear localStorage for this iteration
          localStorage.clear();
          document.body.innerHTML = '';
          
          // Render the ThemeProvider with a test component
          const TestComponent = () => {
            const { theme, toggleTheme } = useTheme();
            return (
              <div>
                <span data-testid="theme">{theme}</span>
                <button onClick={toggleTheme} data-testid="toggle">
                  Toggle
                </button>
              </div>
            );
          };

          const { getByTestId, unmount } = render(
            <ThemeProvider>
              <TestComponent />
            </ThemeProvider>
          );

          // Determine expected theme after all toggles
          // Start with 'light' (default when no system preference)
          let expectedTheme = 'light';
          
          // Apply each toggle
          toggleSequence.forEach(() => {
            act(() => {
              getByTestId('toggle').click();
            });
            expectedTheme = expectedTheme === 'light' ? 'dark' : 'light';
          });

          // Get the actual theme from the component
          const actualTheme = getByTestId('theme').textContent;

          // Verify the theme matches expected
          expect(actualTheme).toBe(expectedTheme);

          // Verify theme is stored in localStorage
          const storedTheme = localStorage.getItem('theme');
          expect(storedTheme).toBe(expectedTheme);

          // Simulate a new session by unmounting and remounting
          unmount();
          document.body.innerHTML = '';

          // Re-render with the same localStorage (simulating persistence)
          const { getByTestId: getByTestId2, unmount: unmount2 } = render(
            <ThemeProvider>
              <TestComponent />
            </ThemeProvider>
          );

          // Verify the theme persisted across "sessions"
          const persistedTheme = getByTestId2('theme').textContent;
          expect(persistedTheme).toBe(expectedTheme);
          
          // Cleanup
          unmount2();
          document.body.innerHTML = '';
        }
      ),
      { numRuns: 100 } // Minimum 100 iterations as specified
    );
  });

  it('should persist theme correctly when toggling from light to dark', () => {
    // Additional specific test case
    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <div>
          <span data-testid="theme">{theme}</span>
          <button onClick={toggleTheme} data-testid="toggle">
            Toggle
          </button>
        </div>
      );
    };

    const { getByTestId, unmount } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Initial theme should be 'light'
    expect(getByTestId('theme').textContent).toBe('light');

    // Toggle to dark
    act(() => {
      getByTestId('toggle').click();
    });

    // Verify theme changed to dark
    expect(getByTestId('theme').textContent).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    // Unmount and remount to simulate new session
    unmount();

    const { getByTestId: getByTestId2 } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Verify theme persisted
    expect(getByTestId2('theme').textContent).toBe('dark');
  });

  it('should persist theme correctly when toggling from dark to light', () => {
    // Set initial theme to dark
    localStorage.setItem('theme', 'dark');

    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <div>
          <span data-testid="theme">{theme}</span>
          <button onClick={toggleTheme} data-testid="toggle">
            Toggle
          </button>
        </div>
      );
    };

    const { getByTestId, unmount } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Initial theme should be 'dark' (from localStorage)
    expect(getByTestId('theme').textContent).toBe('dark');

    // Toggle to light
    act(() => {
      getByTestId('toggle').click();
    });

    // Verify theme changed to light
    expect(getByTestId('theme').textContent).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');

    // Unmount and remount to simulate new session
    unmount();

    const { getByTestId: getByTestId2 } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Verify theme persisted
    expect(getByTestId2('theme').textContent).toBe('light');
  });
});
