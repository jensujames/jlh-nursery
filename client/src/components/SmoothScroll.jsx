import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * SmoothScroll component using Lenis
 * Provides a buttery smooth, momentum-based scrolling experience across the entire site.
 */
export default function SmoothScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with tailored exponential ease-out for luxurious smooth gliding
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      infinite: false,
      prevent: (node) => {
        return Boolean(
          node?.hasAttribute?.('data-lenis-prevent') ||
          node?.closest?.('[data-lenis-prevent], .mobile-app-drawer, .mobile-app-drawer-body, [role="dialog"], .modal-overlay')
        );
      }
    });

    // Make available globally for modals, header actions, and anchor jumps
    window.lenis = lenis;

    // Connect into RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Watch for document.body overflow changes (e.g. modals, mobile drawers)
    const bodyObserver = new MutationObserver(() => {
      const isLocked = document.body.style.overflow === 'hidden' || document.documentElement.style.overflow === 'hidden';
      if (isLocked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });

    // Handle hash anchors smoothly
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href !== '#' && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -80, duration: 1.3 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      bodyObserver.disconnect();
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Handle route change: instantaneously reset to top without stutter
  useEffect(() => {
    if (window.lenis) {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            window.lenis?.scrollTo(el, { offset: -80, duration: 1.2 });
          }, 100);
          return;
        }
      }
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash]);

  return null;
}
