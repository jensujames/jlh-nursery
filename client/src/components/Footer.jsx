import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  ArrowUp,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const GMB_URL = 'https://share.google/AbZVHOBinruNYkwDg';

export default function Footer({ onBookVisitClick, onAdminClick }) {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setIsSubmitting(true);
    fetch('https://formsubmit.co/ajax/nurseryjustlikehome@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: 'New Newsletter / Updates Subscriber (Website Footer)',
        _template: 'table',
        'Subscriber Email': emailInput,
        'Source': 'Footer Newsletter Signup'
      })
    })
      .then(() => {
        setIsSubscribed(true);
        setIsSubmitting(false);
        setEmailInput('');
        setTimeout(() => setIsSubscribed(false), 5000);
      })
      .catch(() => {
        setIsSubscribed(true);
        setIsSubmitting(false);
        setEmailInput('');
      });
  };

  return (
    <footer className="footer-3d-playful">
      {/* Shiny Royal Burgundy Top Accent Line */}
      <div className="royal-footer-top-border footer-shine-burgundy-line" aria-hidden="true" />
      
      {/* 1. LUXURY PRE-FOOTER QUICK-CONNECT ACCENT BAR */}
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
              href="tel:0502005346"
              className="footer-pre-action-btn footer-pre-btn-call"
              title="Call Us Direct"
            >
              <Phone size={13} />
              <span>(050) 200-5346</span>
            </a>
          </div>
        </div>
      </div>

      {/* Ambient Decorative Glow Circles */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '5%',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(114, 16, 36, 0.04) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '120px',
        right: '8%',
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)',
        filter: 'blur(45px)',
        pointerEvents: 'none'
      }} />

      {/* Main 4-Column Upper Content */}
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: 'clamp(3.5rem, 5.5vw, 5rem) 1.5rem clamp(5rem, 9vw, 7.5rem)',
        position: 'relative',
        zIndex: 5
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(2.5rem, 4vw, 3.5rem)',
          alignItems: 'start'
        }}>
          
          {/* Column 1: Playful Logo & Brand */}
          <div style={{ maxWidth: '320px' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.35rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '2.5px solid #721024',
                boxShadow: '0 8px 20px rgba(114, 16, 36, 0.18)',
                backgroundColor: '#ffffff',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
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
                  fontSize: '1.45rem',
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
              fontSize: '0.92rem',
              color: '#475569',
              lineHeight: 1.7,
              margin: '0 0 1.6rem 0',
              fontWeight: '550'
            }}>
              Where Little Hearts Feel at Home. We don't just educate children we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime.
            </p>

            {/* Jewel-Toned Tactile Social / Direct Action Buttons */}
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
                href="tel:0502005346" 
                className="footer-luxury-icon-btn footer-btn-phone"
                title="Direct Phone: 050 200 5346"
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

          {/* Column 2: Information */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '900',
              color: '#721024',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.01em'
            }}>
              Information
            </h4>
            
            {/* Signature Underline Bar with Royal Accent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.35rem' }}>
              <span style={{ width: '32px', height: '3.5px', background: 'linear-gradient(90deg, #721024, #F15A29)', borderRadius: '999px', display: 'inline-block' }} />
              <span style={{ width: '8px', height: '3.5px', backgroundColor: '#c9a84c', borderRadius: '999px', display: 'inline-block' }} />
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'About Us', path: '/about-us' },
                { name: 'Programs', path: '/programs' },
                { name: 'EYFS & Learning', path: '/eyfs-learning' },
                { name: 'Activities', path: '/nursery-activities' },
                { name: 'Facilities & Safety', path: '/facilities' },
                { name: 'Camps', path: '/camps' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Parent Resources', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path}
                    className="footer-luxury-nav-link"
                  >
                    <span className="footer-nav-bullet">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '900',
              color: '#721024',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.01em'
            }}>
              Contact Us
            </h4>

            {/* Signature Underline Bar with Royal Accent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.35rem' }}>
              <span style={{ width: '32px', height: '3.5px', background: 'linear-gradient(90deg, #721024, #F15A29)', borderRadius: '999px', display: 'inline-block' }} />
              <span style={{ width: '8px', height: '3.5px', backgroundColor: '#c9a84c', borderRadius: '999px', display: 'inline-block' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              
              {/* Address Card */}
              <div className="footer-contact-micro-card">
                <div className="footer-contact-icon-bubble" style={{ color: '#ea580c', background: '#fff7ed' }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.82rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Address
                  </div>
                  <div style={{ color: '#334155', fontWeight: '600', lineHeight: 1.45, marginTop: '2px' }}>
                    Villa No. 47, Al Rashidiya 2, Ajman, UAE
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="footer-contact-micro-card">
                <div className="footer-contact-icon-bubble" style={{ color: '#0284c7', background: '#f0f9ff' }}>
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.82rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Phone
                  </div>
                  <a 
                    href="tel:0502005346" 
                    style={{ color: '#0f172a', fontWeight: '850', textDecoration: 'none', fontSize: '0.95rem', display: 'inline-block', marginTop: '2px' }}
                  >
                    (050) 200-5346
                  </a>
                </div>
              </div>

              {/* Mail Us Card */}
              <div className="footer-contact-micro-card">
                <div className="footer-contact-icon-bubble" style={{ color: '#721024', background: '#fff1f2' }}>
                  <Mail size={16} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.82rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Mail Us
                  </div>
                  <a 
                    href="mailto:nurseryjustlikehome@gmail.com" 
                    style={{ color: '#0f172a', fontWeight: '750', textDecoration: 'none', wordBreak: 'break-all', fontSize: '0.86rem', display: 'inline-block', marginTop: '2px' }}
                  >
                    nurseryjustlikehome@gmail.com
                  </a>
                </div>
              </div>

              {/* Google Maps Link Card */}
              <div className="footer-contact-micro-card">
                <div className="footer-contact-icon-bubble" style={{ color: '#059669', background: '#ecfdf5' }}>
                  <ExternalLink size={16} />
                </div>
                <div>
                  <div style={{ color: '#721024', fontWeight: '850', fontSize: '0.82rem', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <a
                    href={GMB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: '#0f172a',
                      fontWeight: '800',
                      textDecoration: 'none',
                      marginTop: '2px'
                    }}
                  >
                    <span>Villa 47, Al Rashidiya 2, Ajman</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '900',
              color: '#721024',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.01em'
            }}>
              Newsletter Signup
            </h4>

            {/* Signature Underline Bar with Royal Accent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.35rem' }}>
              <span style={{ width: '32px', height: '3.5px', background: 'linear-gradient(90deg, #721024, #F15A29)', borderRadius: '999px', display: 'inline-block' }} />
              <span style={{ width: '8px', height: '3.5px', backgroundColor: '#c9a84c', borderRadius: '999px', display: 'inline-block' }} />
            </div>

            {/* Frosted Luxury Newsletter Card */}
            <div className="footer-newsletter-glass-card">
              <form onSubmit={handleNewsletterSubmit} style={{ marginBottom: '0.85rem' }}>
                <div className="footer-3d-input-wrap">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Your email address"
                    required
                    style={{
                      flex: 1,
                      border: 'none',
                      background: 'transparent',
                      outline: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '550',
                      color: '#0f172a',
                      padding: '10px 6px',
                      minWidth: 0
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="footer-3d-plane-btn"
                    title="Subscribe to updates"
                    aria-label="Subscribe to updates"
                  >
                    <Send size={16} style={{ transform: 'translateX(-1px)' }} />
                  </button>
                </div>
              </form>

              {isSubscribed ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  backgroundColor: '#ecfdf5',
                  color: '#065f46',
                  border: '1.5px solid #a7f3d0',
                  padding: '0.65rem 1rem',
                  borderRadius: '14px',
                  fontSize: '0.84rem',
                  fontWeight: '750'
                }}>
                  <CheckCircle2 size={17} color="#059669" />
                  <span>Thank you! We'll keep you updated.</span>
                </div>
              ) : (
                <p style={{
                  margin: 0,
                  fontSize: '0.84rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                  fontWeight: '550'
                }}>
                  Get the latest nursery updates, event invitations, and admissions offers for your little one.
                </p>
              )}

              {/* Quick Tour Booking Trigger */}
              <div style={{ marginTop: '1.35rem' }}>
                <button
                  type="button"
                  onClick={onBookVisitClick}
                  className="footer-book-tour-luxury-btn"
                >
                  <Sparkles size={15} className="text-[#c9a84c]" />
                  <span>Book Campus Tour</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          3D MEADOW FOREGROUND WITH 3D CHICK ON FENCE & 3D WAVING BUNNY WITH EGGS
          ========================================================================= */}
      <div style={{
        position: 'relative',
        width: '100%',
        marginTop: '-2rem',
        zIndex: 10
      }}>

        {/* 3D Yellow Chick on Rustic Wooden Fence (Bottom Left) */}
        <div 
          className="footer-3d-chick-box"
          style={{
            position: 'absolute',
            bottom: '36px',
            left: 'clamp(10px, 4vw, 45px)',
            width: 'clamp(140px, 16vw, 195px)',
            height: 'clamp(140px, 16vw, 195px)',
            zIndex: 20,
            pointerEvents: 'auto',
            cursor: 'pointer'
          }}
          title="Just Like Home Mascot Chick"
        >
          <img
            src="/images/footer-3d-chick.png"
            alt="Cute 3D Chick on Wooden Fence"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.2))'
            }}
          />
        </div>

        {/* 3D Cheerful Pink Bunny Waving with Easter Eggs (Bottom Right) */}
        <div 
          className="footer-3d-bunny-box"
          style={{
            position: 'absolute',
            bottom: '22px',
            right: 'clamp(10px, 4vw, 45px)',
            width: 'clamp(150px, 18vw, 220px)',
            height: 'clamp(150px, 18vw, 220px)',
            zIndex: 20,
            pointerEvents: 'auto',
            cursor: 'pointer'
          }}
          title="Just Like Home Waving Bunny"
        >
          <img
            src="/images/footer-3d-bunny.png"
            alt="Cute 3D Waving Bunny with Garden Eggs"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.2))'
            }}
          />
        </div>

        {/* Layer 1: Back Grass Silhouette (Darker Green) */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: 'clamp(60px, 8vw, 95px)',
            marginBottom: '-45px',
            transform: 'scaleY(1.05)'
          }}
        >
          <path
            d="M0 60 C80 35, 140 70, 220 40 C300 15, 380 50, 460 30 C540 10, 620 45, 700 25 C780 12, 860 48, 940 32 C1020 18, 1100 52, 1180 30 C1260 12, 1350 45, 1440 30 L1440 120 L0 120 Z"
            fill="#558b2f"
            opacity="0.85"
          />
        </svg>

        {/* Layer 2: Middle Grass Blades with 3D Depth & Flower Accents */}
        <svg
          viewBox="0 0 1440 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: 'clamp(70px, 9vw, 110px)',
            marginBottom: '-40px',
            animation: 'grassSway3D 4s ease-in-out infinite alternate'
          }}
        >
          {/* Detailed Grass Tufts Array */}
          <path
            d="M0 65 
               C30 50, 45 30, 60 55 C75 25, 95 60, 115 45 C135 20, 155 58, 175 40 C195 15, 215 50, 235 35
               C255 10, 275 48, 295 30 C315 15, 335 52, 355 38 C375 18, 395 55, 415 42 C435 20, 455 58, 475 35
               C495 12, 515 50, 535 32 C555 18, 575 52, 595 40 C615 15, 635 55, 655 36 C675 14, 695 50, 715 30
               C735 16, 755 52, 775 38 C795 20, 815 58, 835 35 C855 10, 875 48, 895 28 C915 14, 935 54, 955 38
               C975 18, 995 55, 1015 36 C1035 12, 1055 50, 1075 30 C1095 16, 1115 52, 1135 38 C1155 18, 1175 56, 1195 35
               C1215 12, 1235 50, 1255 30 C1275 15, 1295 52, 1315 38 C1335 20, 1355 55, 1375 35 C1395 12, 1415 48, 1440 32
               L1440 130 L0 130 Z"
            fill="#689f38"
          />

          {/* Dotted Blossoms on Grass Layer */}
          <circle cx="280" cy="55" r="4.5" fill="#f43f5e" />
          <circle cx="280" cy="55" r="2" fill="#fef08a" />
          <circle cx="340" cy="62" r="5" fill="#ffffff" />
          <circle cx="340" cy="62" r="2.2" fill="#f59e0b" />
          <circle cx="560" cy="58" r="4.5" fill="#fbbf24" />
          <circle cx="560" cy="58" r="2" fill="#ffffff" />
          <circle cx="680" cy="52" r="5" fill="#f43f5e" />
          <circle cx="680" cy="52" r="2" fill="#fef08a" />
          <circle cx="820" cy="56" r="5" fill="#ffffff" />
          <circle cx="820" cy="56" r="2" fill="#f59e0b" />
          <circle cx="980" cy="54" r="4.5" fill="#ec4899" />
          <circle cx="980" cy="54" r="2" fill="#fef08a" />
          <circle cx="1120" cy="60" r="5" fill="#fbbf24" />
          <circle cx="1120" cy="60" r="2" fill="#ffffff" />
        </svg>

        {/* Layer 3: Vibrant Front Grass Meadow Hill Base */}
        <div style={{
          position: 'relative',
          backgroundColor: '#7cb342',
          backgroundImage: 'linear-gradient(180deg, #7cb342 0%, #689f38 60%, #558b2f 100%)',
          padding: '2.5rem 1.5rem 1.8rem 1.5rem',
          boxShadow: 'inset 0 4px 8px rgba(255, 255, 255, 0.25)',
          zIndex: 15
        }}>
          
          {/* Subtle Top Highlights on Grass Hill */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
          }} />

          {/* Centered White Copyright & Bottom Actions */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            color: '#ffffff'
          }}>
            
            {/* Copyright Text */}
            <div style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.02em',
              textShadow: '0 1px 3px rgba(0,0,0,0.25)',
              color: 'rgba(255, 255, 255, 0.96)'
            }}>
              &copy; Copyright {new Date().getFullYear()} Just Like Home Nursery. All Rights Reserved.
            </div>

            {/* Right Quick Links & Smooth Scroll */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <a
                href={GMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                <span>Google Profile</span>
                <ExternalLink size={12} />
              </a>

              <button
                type="button"
                onClick={onAdminClick}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.85)',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  textDecoration: 'underline',
                  padding: 0
                }}
              >
                Staff Portal
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                title="Back to Top"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: '#ffffff',
                  color: '#2e7d32',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.4rem 1rem',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: '800',
                  boxShadow: '0 3px 0 #388e3c, 0 4px 10px rgba(0,0,0,0.18)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 0 #388e3c, 0 8px 16px rgba(0,0,0,0.22)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 0 #388e3c, 0 4px 10px rgba(0,0,0,0.18)';
                }}
              >
                <ArrowUp size={14} />
                <span>Top</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
