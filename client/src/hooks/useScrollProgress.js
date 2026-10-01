import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that monitors global and local scroll metrics with high performance (requestAnimationFrame).
 * Provides:
 * - globalProgress: 0.0 to 1.0 (clamped document scroll fraction)
 * - scrollY: current window scroll in px
 * - scrollDirection: 'down' | 'up'
 * - velocity: lerped scroll velocity
 */
export function useGlobalScroll() {
  const [scrollState, setScrollState] = useState({
    globalProgress: 0,
    scrollY: 0,
    scrollDirection: 'down',
    velocity: 0
  });

  const lastScrollY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = window.requestAnimationFrame(() => {
          const currentY = window.scrollY || window.pageYOffset || 0;
          const vh = window.innerHeight || document.documentElement.clientHeight || 800;
          const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          ) - vh;

          const progress = docHeight > 0 ? Math.max(0, Math.min(1, currentY / docHeight)) : 0;
          const delta = currentY - lastScrollY.current;
          const dir = delta >= 0 ? 'down' : 'up';
          const vel = Math.min(50, Math.abs(delta));

          lastScrollY.current = currentY;

          setScrollState({
            globalProgress: progress,
            scrollY: currentY,
            scrollDirection: dir,
            velocity: vel
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial measure

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return scrollState;
}

/**
 * Custom hook to track normalized scroll progress (0.0 to 1.0) of a specific section container or element.
 * 0.0 = section top enters bottom 85% of screen
 * 0.5 = section is centered in viewport
 * 1.0 = section bottom exits top 15% of screen
 */
export function useSectionScroll(elementRef, offset = { start: 0.85, end: 0.15 }) {
  const [sectionData, setSectionData] = useState({
    progress: 0,
    isInView: false,
    distanceFromCenter: 0
  });

  const rafId = useRef(null);

  useEffect(() => {
    let ticking = false;

    const calculateProgress = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      
      const totalTravel = rect.height + vh * (offset.start - offset.end);
      const currentPos = vh * offset.start - rect.top;
      
      const rawProgress = totalTravel > 0 ? currentPos / totalTravel : 0;
      const progress = Math.max(0, Math.min(1, rawProgress));
      
      const isInView = rect.top < vh && rect.bottom > 0;
      const sectionCenter = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(vh / 2 - sectionCenter);

      setSectionData({
        progress,
        isInView,
        distanceFromCenter
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId.current = window.requestAnimationFrame(calculateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    calculateProgress(); // Run immediately

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [elementRef, offset.start, offset.end]);

  return sectionData;
}
