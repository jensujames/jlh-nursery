import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingDock({ onBookVisitClick }) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 90,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.75rem'
    }}>
      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            color: '#721024',
            border: '1.5px solid rgba(114, 16, 36, 0.15)',
            boxShadow: '0 4px 15px rgba(114, 16, 36, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          title="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating CTA Pill */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(12px)',
        padding: '0.5rem 0.65rem 0.5rem 1rem',
        borderRadius: '9999px',
        boxShadow: '0 12px 35px rgba(114, 16, 36, 0.14)',
        border: '1.5px solid rgba(114, 16, 36, 0.14)'
      }}>
        <button
          onClick={onBookVisitClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'none',
            border: 'none',
            color: '#721024',
            fontWeight: '900',
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          <Calendar size={16} />
          <span>Book Tour</span>
        </button>

        {/* Sky Blue Phone CTA */}
        <a
          href="tel:0502005346"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#e0f2fe',
            color: '#0284c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            border: '1px solid #bae6fd'
          }}
          title="Call Nursery"
        >
          <Phone size={17} />
        </a>

        {/* Botanical Green WhatsApp CTA */}
        <a
          href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20arrange%20a%20visit."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#16a34a',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(22, 163, 74, 0.35)',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          title="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </div>
  );
}
