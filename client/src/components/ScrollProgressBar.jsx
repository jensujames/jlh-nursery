import React from 'react';
import { useGlobalScroll } from '../hooks/useScrollProgress';

/**
 * Global Scroll Progress Ribbon
 * Fixed at the very top of the browser window.
 * Continuously renders a smooth regal maroon to champagne gold gradient ribbon.
 */
export default function ScrollProgressBar() {
  const { globalProgress } = useGlobalScroll();

  return (
    <div 
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3.5px',
        zIndex: 9999,
        pointerEvents: 'none',
        backgroundColor: 'rgba(123, 17, 39, 0.08)'
      }}
    >
      <div 
        style={{
          height: '100%',
          width: `${(globalProgress * 100).toFixed(2)}%`,
          background: 'linear-gradient(90deg, #721024 0%, #0284c7 35%, #15803d 70%, #c9a84c 100%)',
          boxShadow: '0 0 10px rgba(2, 132, 199, 0.4), 0 0 6px rgba(21, 128, 61, 0.4)',
          transition: 'width 0.08s cubic-bezier(0.1, 0.9, 0.2, 1)'
        }}
      />
    </div>
  );
}
