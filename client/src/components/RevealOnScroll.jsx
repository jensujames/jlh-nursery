import React, { useEffect, useRef, useState } from 'react';

/**
 * RevealOnScroll
 * High-performance, butter-smooth IntersectionObserver component for entrance animations
 *
 * Supported animations:
 * - 'from-top' | 'top' | 'fade-down' (slides down smoothly from top)
 * - 'from-bottom' | 'bottom' | 'fade-up' (slides up smoothly from bottom)
 * - 'from-left' | 'left' (slides smoothly from left)
 * - 'from-right' | 'right' (slides smoothly from right)
 * - 'zoom-in' (smooth scale up from 0.92)
 * - 'zoom-out' (smooth scale down from 1.06)
 * - 'flip-up' (smooth 3D perspective tilt)
 *
 * Props:
 * - animation: string preset (default: 'from-bottom')
 * - delay: number in ms (default: 0)
 * - duration: number in ms (default: 800)
 * - distance: number in px for translation (default: 44)
 * - threshold: number 0..1 (default: 0.1)
 * - rootMargin: string (default: '0px 0px -30px 0px')
 * - once: boolean (default: true)
 * - className: string
 * - style: object
 * - as: Component / tag (default: 'div')
 */
export default function RevealOnScroll({
  children,
  animation = 'from-bottom',
  delay = 0,
  duration = 800,
  distance = 44,
  threshold = 0.1,
  rootMargin = '0px 0px -30px 0px',
  once = true,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    // Check if element is already inside viewport on mount
    const rect = currentEl.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, Math.max(delay, 30));
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentEl);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  // Compute transform states based on selected animation preset
  const getInitialTransform = () => {
    const dist = typeof distance === 'number' ? distance : 44;
    switch (animation) {
      case 'from-top':
      case 'top':
      case 'fade-down':
        return `translate3d(0, -${dist}px, 0)`;

      case 'from-bottom':
      case 'bottom':
      case 'fade-up':
        return `translate3d(0, ${dist}px, 0)`;

      case 'from-left':
      case 'left':
        return `translate3d(-${dist}px, 0, 0)`;

      case 'from-right':
      case 'right':
        return `translate3d(${dist}px, 0, 0)`;

      // Backward compatibility aliases
      case 'fade-left':
        return `translate3d(${dist}px, 0, 0)`;
      case 'fade-right':
        return `translate3d(-${dist}px, 0, 0)`;

      case 'zoom-in':
        return 'scale(0.92)';

      case 'zoom-out':
        return 'scale(1.06)';

      case 'flip-up':
        return `perspective(1000px) rotateX(14deg) translate3d(0, ${Math.round(dist * 0.75)}px, 0)`;

      default:
        return `translate3d(0, ${dist}px, 0)`;
    }
  };

  const getActiveTransform = () => {
    switch (animation) {
      case 'zoom-in':
      case 'zoom-out':
        return 'scale(1)';
      case 'flip-up':
        return 'perspective(1000px) rotateX(0deg) translate3d(0, 0, 0)';
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? getActiveTransform() : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style
  };

  return (
    <Component
      ref={elementRef}
      className={`reveal-wrapper ${isVisible ? 'is-revealed' : 'is-hidden'} ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
