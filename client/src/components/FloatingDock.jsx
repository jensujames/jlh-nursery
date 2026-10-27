import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  MessageCircle, 
  Phone, 
  Calendar, 
  ArrowUp,
  Home,
  GraduationCap,
  FileText,
  Menu
} from 'lucide-react';

export default function FloatingDock({ onBookVisitClick }) {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHome = location.pathname === '/';
  const isPrograms = location.pathname.startsWith('/programs');
  const isAdmissions = location.pathname.startsWith('/admissions');

  return (
    <>
      {/* =========================================================================
          DESKTOP FLOATING DOCK (Visible on Tablets & Desktops >= 769px)
         ========================================================================= */}
      <aside 
        className="desktop-floating-dock"
        aria-label="Quick Actions"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.75rem'
        }}
      >
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
            aria-label="Scroll back to top"
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
            href="tel:+971502005346"
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
      </aside>

      {/* =========================================================================
          NATIVE MOBILE APP BOTTOM NAVIGATION BAR (Visible on Mobile <= 768px)
         ========================================================================= */}
      <nav 
        className="mobile-app-bottom-bar"
        aria-label="Mobile App Navigation"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(114, 16, 36, 0.12)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
          display: 'none',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '6px 8px max(8px, env(safe-area-inset-bottom))'
        }}
      >
        {/* 1. Home Tab */}
        <Link 
          to="/"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
            color: isHome ? '#721024' : '#64748b',
            padding: '4px 6px',
            minWidth: '50px'
          }}
        >
          <Home size={20} strokeWidth={isHome ? 2.5 : 1.8} />
          <span style={{ fontSize: '0.68rem', fontWeight: isHome ? '800' : '600' }}>Home</span>
        </Link>

        {/* 2. Programs Tab */}
        <Link 
          to="/programs"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
            color: isPrograms ? '#721024' : '#64748b',
            padding: '4px 6px',
            minWidth: '50px'
          }}
        >
          <GraduationCap size={20} strokeWidth={isPrograms ? 2.5 : 1.8} />
          <span style={{ fontSize: '0.68rem', fontWeight: isPrograms ? '800' : '600' }}>Programs</span>
        </Link>

        {/* 3. Center Elevated Action: Book Appointment */}
        <button
          type="button"
          onClick={onBookVisitClick}
          aria-label="Book an Appointment"
          title="Book an Appointment"
          className="dock-book-center-btn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 4px',
            marginTop: '-18px'
          }}
        >
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #721024 0%, #941731 50%, #c9a84c 100%)',
            color: '#FAF5EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(114, 16, 36, 0.45), 0 0 0 3px #ffffff',
            position: 'relative'
          }}>
            <Calendar size={20} strokeWidth={2.4} />
            <span style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 6px #22c55e',
              border: '1.5px solid #721024'
            }} />
          </div>
          <span style={{
            fontSize: '0.66rem',
            fontWeight: '900',
            color: '#721024',
            marginTop: '3px'
          }}>
            Book
          </span>
        </button>

        {/* 4. WhatsApp Chat */}
        <a 
          href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20arrange%20a%20visit."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            textDecoration: 'none',
            color: '#16a34a',
            padding: '4px 6px',
            minWidth: '50px'
          }}
          title="Instant WhatsApp"
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#dcfce7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <MessageCircle size={16} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '0.68rem', fontWeight: '700' }}>Chat</span>
        </a>

        {/* 5. Hamburger Mobile Menu Drawer Toggle */}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('toggle-mobile-menu'))}
          aria-label="Toggle Mobile Menu"
          title="Menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: 'none',
            border: 'none',
            color: '#721024',
            padding: '4px 6px',
            minWidth: '50px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'rgba(114, 16, 36, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#721024'
          }}>
            <Menu size={16} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: '0.68rem', fontWeight: '700' }}>Menu</span>
        </button>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-floating-dock {
            display: none !important;
          }
          .mobile-app-bottom-bar {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-floating-dock {
            display: flex !important;
          }
          .mobile-app-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
