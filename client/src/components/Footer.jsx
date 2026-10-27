import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp,
  MessageCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const GMB_URL = 'https://share.google/AbZVHOBinruNYkwDg';

export default function Footer({ onBookVisitClick, onAdminClick }) {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-3d-playful">
      {/* Shiny Royal Burgundy Top Accent Line */}
      <div className="royal-footer-top-border footer-shine-burgundy-line" aria-hidden="true" />
      
      {/* 1. QUICK-CONNECT ACCENT BAR */}
      <div className="footer-pre-connect-bar">
        <div className="footer-pre-connect-container">
          <div className="footer-pre-badge-group">
            <span className="footer-pre-pulse-dot" />
            <span className="footer-pre-location-text">
              <MapPin size={13} className="text-[#c9a84c]" />
              Villa No. 47, Al Rashidiya 2, Ajman, UAE
            </span>
          </div>

          <div className="footer-pre-status-pill">
            <Sparkles size={13} className="text-[#c9a84c]" />
            <span>Admissions Open 2026–2027 • Nurturing Little Hearts</span>
          </div>

          <div className="footer-pre-actions-group">
            <a
              href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery%2C%20I%20would%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="footer-pre-action-btn footer-pre-btn-wa"
              title="Quick WhatsApp Admissions"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="tel:+971502005346"
              className="footer-pre-action-btn footer-pre-btn-call"
              title="Call Us Direct: +971 50 200 5346"
            >
              <Phone size={13} />
              <span>+971 50 200 5346</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Column Clean Upper Content */}
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2.8rem 1.5rem 2.2rem',
        position: 'relative',
        zIndex: 5
      }}>
        <div className="footer-main-grid">
          
          {/* Column 1: Playful Logo & Brand */}
          <div style={{ maxWidth: '340px' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2.5px solid #721024',
                boxShadow: '0 6px 16px rgba(114, 16, 36, 0.16)',
                backgroundColor: '#ffffff',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/logo.jpg" 
                  alt="Just Like Home Nursery" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}>
                  <span style={{ color: '#ef4444' }}>J</span>
                  <span style={{ color: '#f59e0b' }}>u</span>
                  <span style={{ color: '#10b981' }}>s</span>
                  <span style={{ color: '#3b82f6' }}>t</span>
                  <span style={{ color: '#6366f1', marginLeft: '4px' }}>L</span>
                  <span style={{ color: '#ec4899' }}>i</span>
                  <span style={{ color: '#10b981' }}>k</span>
                  <span style={{ color: '#f97316' }}>e</span>
                  <span style={{ color: '#059669', marginLeft: '5px' }}>H</span>
                  <span style={{ color: '#e11d48' }}>o</span>
                  <span style={{ color: '#0284c7' }}>m</span>
                  <span style={{ color: '#ea580c' }}>e</span>
                </div>
                <div style={{
                  fontSize: '0.68rem',
                  fontWeight: '850',
                  letterSpacing: '0.14em',
                  color: '#721024',
                  textTransform: 'uppercase',
                  marginTop: '4px'
                }}>
                  NURSERY • AJMAN
                </div>
              </div>
            </Link>

            <p style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: '0 0 1.4rem 0',
              fontWeight: '550'
            }}>
              Where Little Hearts Feel at Home. Providing gentle motherly care, British EYFS curriculum, and playful early development in Al Rashidiya 2, Ajman.
            </p>

            {/* Tactile Direct Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {/* WhatsApp */}
              <a 
                href="https://wa.me/971502005346" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-luxury-icon-btn footer-btn-wa"
                title="WhatsApp Admissions: +971 50 200 5346"
              >
                <MessageCircle size={18} />
              </a>

              {/* Google Maps Profile */}
              <a 
                href={GMB_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-luxury-icon-btn footer-btn-map"
                title="Google Maps Location: Villa 47, Al Rashidiya 2"
              >
                <MapPin size={18} />
              </a>

              {/* Phone Direct */}
              <a 
                href="tel:+971502005346" 
                className="footer-luxury-icon-btn footer-btn-phone"
                title="Direct Phone: +971 50 200 5346"
              >
                <Phone size={17} />
              </a>

              {/* Email Direct */}
              <a 
                href="mailto:nurseryjustlikehome@gmail.com" 
                className="footer-luxury-icon-btn footer-btn-mail"
                title="Email Us: nurseryjustlikehome@gmail.com"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Programs (Dedicated & Separate) */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: '900',
              color: '#721024',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              margin: '0 0 0.4rem 0',
              letterSpacing: '-0.01em'
            }}>
              Our Programs
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.15rem' }}>
              <span style={{ width: '28px', height: '3px', background: 'linear-gradient(90deg, #721024, #F15A29)', borderRadius: '999px', display: 'inline-block' }} />
              <span style={{ width: '7px', height: '3px', backgroundColor: '#c9a84c', borderRadius: '999px', display: 'inline-block' }} />
            </div>

            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.65rem' 
            }}>
              {[
                { name: 'All Programs Overview', path: '/programs' },
                { name: 'British EYFS Framework', path: '/eyfs-learning' },
                { name: 'Preschool & School Readiness', path: '/preschool-school-readiness' },
                { name: 'Daycare & Full-Day Care', path: '/daycare-ajman' },
                { name: 'Holiday & Summer Camps', path: '/camps' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path}
                    className="footer-luxury-nav-link"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <span className="footer-nav-bullet">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Activities & Campus Life (Dedicated & Separate) */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: '900',
              color: '#721024',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              margin: '0 0 0.4rem 0',
              letterSpacing: '-0.01em'
            }}>
              Activities & Life
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.15rem' }}>
              <span style={{ width: '28px', height: '3px', background: 'linear-gradient(90deg, #721024, #F15A29)', borderRadius: '999px', display: 'inline-block' }} />
              <span style={{ width: '7px', height: '3px', backgroundColor: '#c9a84c', borderRadius: '999px', display: 'inline-block' }} />
            </div>

            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.65rem' 
            }}>
              {[
                { name: 'Nursery Activities & Labs', path: '/nursery-activities' },
                { name: 'Safe Facilities & CCTV', path: '/facilities' },
                { name: 'Campus Photo Gallery', path: '/gallery' },
                { name: 'About Our Ethos & Team', path: '/about-us' },
                { name: 'Admissions & Enrolment', path: '/admissions' },
                { name: 'Contact & Location', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path}
                    className="footer-luxury-nav-link"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <span className="footer-nav-bullet">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Visit */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: '900',
              color: '#721024',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              margin: '0 0 0.4rem 0',
              letterSpacing: '-0.01em'
            }}>
              Contact & Visit
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.15rem' }}>
              <span style={{ width: '28px', height: '3px', background: 'linear-gradient(90deg, #721024, #F15A29)', borderRadius: '999px', display: 'inline-block' }} />
              <span style={{ width: '7px', height: '3px', backgroundColor: '#c9a84c', borderRadius: '999px', display: 'inline-block' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              {/* Address */}
              <div className="footer-contact-micro-card" style={{ padding: '0.55rem 0.85rem' }}>
                <div className="footer-contact-icon-bubble" style={{ color: '#ea580c', background: '#fff7ed', width: '32px', height: '32px' }}>
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.76rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Address
                  </div>
                  <div style={{ color: '#334155', fontWeight: '600', lineHeight: 1.4, fontSize: '0.85rem', marginTop: '1px' }}>
                    Villa No. 47, Al Rashidiya 2, Ajman
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="footer-contact-micro-card" style={{ padding: '0.55rem 0.85rem' }}>
                <div className="footer-contact-icon-bubble" style={{ color: '#0284c7', background: '#f0f9ff', width: '32px', height: '32px' }}>
                  <Phone size={15} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.76rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Phone
                  </div>
                  <a 
                    href="tel:+971502005346" 
                    style={{ color: '#0f172a', fontWeight: '800', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-block', marginTop: '1px' }}
                  >
                    +971 50 200 5346
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="footer-contact-micro-card" style={{ padding: '0.55rem 0.85rem' }}>
                <div className="footer-contact-icon-bubble" style={{ color: '#721024', background: '#fff1f2', width: '32px', height: '32px' }}>
                  <Mail size={15} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.76rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Email
                  </div>
                  <a 
                    href="mailto:nurseryjustlikehome@gmail.com" 
                    style={{ color: '#0f172a', fontWeight: '750', textDecoration: 'none', wordBreak: 'break-all', fontSize: '0.84rem', display: 'inline-block', marginTop: '1px' }}
                  >
                    nurseryjustlikehome@gmail.com
                  </a>
                </div>
              </div>

              {/* Book Campus Tour Trigger */}
              <div style={{ marginTop: '0.35rem' }}>
                <button
                  type="button"
                  onClick={onBookVisitClick}
                  className="footer-book-tour-luxury-btn"
                  style={{ width: '100%', padding: '0.7rem 1.15rem' }}
                >
                  <Sparkles size={15} className="text-[#c9a84c]" />
                  <span>Book Campus Tour</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Clean Streamlined Meadow Base Divider & Copyright Bar */}
      <div style={{
        position: 'relative',
        width: '100%',
        zIndex: 10
      }}>
        {/* Sleek Meadow Contour Transition */}
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '24px',
            marginBottom: '-1px'
          }}
        >
          <path
            d="M0 25 C240 5, 480 35, 720 18 C960 2, 1200 32, 1440 15 L1440 40 L0 40 Z"
            fill="#558b2f"
          />
        </svg>

        {/* Clean Compact Green Base Bar */}
        <div style={{
          backgroundColor: '#558b2f',
          backgroundImage: 'linear-gradient(180deg, #558b2f 0%, #3f6820 100%)',
          padding: '1.1rem 1.5rem',
          boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.85rem',
            color: '#ffffff'
          }}>
            {/* Copyright Text */}
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.015em',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              &copy; {new Date().getFullYear()} Just Like Home Nursery. All Rights Reserved to{' '}
              <a 
                href="https://innovasonics.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  fontWeight: '800',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                innovasonics.com
              </a>.
            </div>

            {/* Quick Links & Back to Top */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
              <a
                href={GMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Google Profile</span>
                <ExternalLink size={12} />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                title="Back to Top"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backgroundColor: '#ffffff',
                  color: '#2e7d32',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.35rem 0.85rem',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ArrowUp size={13} />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
