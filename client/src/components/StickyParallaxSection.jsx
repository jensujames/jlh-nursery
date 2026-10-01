import React, { useRef, useEffect, useState } from 'react';

/**
 * StickyParallaxSection
 * Provides a sticky background canvas with multi-layered parallax floating elements
 * and smooth depth scrolling for home page sections.
 */
export default function StickyParallaxSection({
  id,
  bgImage,
  bgColor = '#ffffff',
  overlayGradient = 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.75) 100%)',
  floatingElements = [],
  children,
  className = '',
  style = {}
}) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalDistance = rect.height + windowHeight;
          const currentDistance = windowHeight - rect.top;
          
          // Progress from 0 (entering from bottom) to 1 (leaving at top)
          const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute parallax offsets
  const bgTranslateY = (scrollProgress - 0.5) * 80;
  const bgScale = 1.04 + Math.sin(scrollProgress * Math.PI) * 0.03;

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`sticky-parallax-stage ${className}`}
      style={{
        position: 'relative',
        backgroundColor: bgColor,
        overflow: 'hidden',
        ...style
      }}
    >
      {/* 1. STICKY BACKGROUND LAYER */}
      {bgImage && (
        <div 
          className="sticky-parallax-bg"
          aria-hidden="true"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            marginBottom: '-100vh',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          {/* Parallax Background Image */}
          <div 
            style={{
              position: 'absolute',
              top: '-15%',
              left: 0,
              width: '100%',
              height: '130%',
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: `translate3d(0, ${bgTranslateY}px, 0) scale(${bgScale})`,
              willChange: 'transform',
              transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)'
            }}
          />

          {/* Atmospheric Overlay Gradient */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: overlayGradient,
              backdropFilter: 'blur(1.5px)',
              WebkitBackdropFilter: 'blur(1.5px)'
            }}
          />

          {/* 2. MULTI-LAYERED FLOATING PARALLAX ACCENTS */}
          {floatingElements.map((el, i) => {
            const speed = el.speed || 0.2;
            const elementOffset = (scrollProgress - 0.5) * speed * 250;
            const elementRotation = (scrollProgress - 0.5) * (el.rotateDelta || 25);

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: el.top,
                  left: el.left,
                  right: el.right,
                  bottom: el.bottom,
                  width: el.size || '60px',
                  height: el.size || '60px',
                  opacity: el.opacity ?? 0.75,
                  transform: `translate3d(0, ${elementOffset}px, 0) rotate(${elementRotation}deg)`,
                  willChange: 'transform',
                  transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1)',
                  pointerEvents: 'none',
                  zIndex: el.zIndex || 1
                }}
              >
                {el.content}
              </div>
            );
          })}
        </div>
      )}

      {/* 3. FOREGROUND CONTENT LAYER */}
      <div 
        className="sticky-parallax-content"
        style={{
          position: 'relative',
          zIndex: 2
        }}
      >
        {children}
      </div>
    </section>
  );
}
