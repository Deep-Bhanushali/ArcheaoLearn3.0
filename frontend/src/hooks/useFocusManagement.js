import { useEffect, useRef } from 'react';

export const useFocusManagement = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Remove focus from any element to prevent navbar focus
    if (document.activeElement) {
      document.activeElement.blur();
    }
    
    // Set focus to the container for accessibility
    if (containerRef.current) {
      containerRef.current.focus();
    }
    
    // Prevent the navbar from stealing focus
    const preventNavbarFocus = (e) => {
      if (e.target.closest('.navbar') || e.target.closest('header')) {
        e.preventDefault();
        if (containerRef.current) {
          containerRef.current.focus();
        }
      }
    };
    
    // Add event listener to prevent navbar focus
    document.addEventListener('focusin', preventNavbarFocus);
    
    return () => {
      document.removeEventListener('focusin', preventNavbarFocus);
    };
  }, []);

  return containerRef;
}; 