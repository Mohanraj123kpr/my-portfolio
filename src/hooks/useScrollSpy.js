import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks which section is currently visible in the viewport
 * using Intersection Observer API
 * 
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @param {Object} options - Intersection Observer options
 * @returns {string} - The ID of the currently active section
 */
function useScrollSpy(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
      ...options
    };

    const observers = new Map();
    const visibleSections = new Set();

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // Update active section to the first visible section in order
      if (visibleSections.size > 0) {
        for (const sectionId of sectionIds) {
          if (visibleSections.has(sectionId)) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, defaultOptions);

    // Observe all sections
    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        observers.set(sectionId, element);
      }
    });

    // Cleanup
    return () => {
      observers.forEach(element => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
}

export default useScrollSpy;
