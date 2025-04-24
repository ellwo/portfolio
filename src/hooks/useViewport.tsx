
import { useState, useEffect, useRef } from 'react';

export const useViewport = () => {
  const [viewport, setViewport] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalViewports = 3; // Header, Experience, Projects
  const scrollingRef = useRef<boolean>(false);
  const lastScrollTime = useRef<number>(0);
  const scrollCooldown = 1000; // Cooldown in ms to prevent rapid scrolling

  // Function to smoothly transition to a viewport
  const smoothScrollToViewport = (targetViewport: number) => {
    if (isTransitioning || scrollingRef.current) return;

    const currentTime = Date.now();
    if (currentTime - lastScrollTime.current < scrollCooldown) return;

    lastScrollTime.current = currentTime;
    scrollingRef.current = true;
    setIsTransitioning(true);

    setViewport(targetViewport);

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      scrollingRef.current = false;
      setIsTransitioning(false);
    }, 1000); // Match this with the transition duration in CSS
  };

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Don't process if we're in the middle of a transition
      if (isTransitioning || scrollingRef.current) return;

      if (e.deltaY > 0 && viewport < totalViewports - 1) {
        // Scrolling down
        smoothScrollToViewport(Math.min(viewport + 1, totalViewports - 1));
      } else if (e.deltaY < 0 && viewport > 0) {
        // Scrolling up
        smoothScrollToViewport(Math.max(viewport - 1, 0));
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning || scrollingRef.current) return;
      
      if (e.key === 'ArrowDown' && viewport < totalViewports - 1) {
        smoothScrollToViewport(Math.min(viewport + 1, totalViewports - 1));
      } else if (e.key === 'ArrowUp' && viewport > 0) {
        smoothScrollToViewport(Math.max(viewport - 1, 0));
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewport, isTransitioning, totalViewports]);

  return { 
    viewport, 
    setViewport: smoothScrollToViewport, 
    height, 
    totalViewports,
    isTransitioning
  };
};
