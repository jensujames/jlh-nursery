import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ArrowUp,
  MessageCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onBookVisitClick, onAdminClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-minimal-premium" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #fffcf8 0%, #fff7ed 45%, #faeee0 100%)',
      color: '#475569',
      overflow: 'hidden',
      borderTop: '1.5px solid rgba(234, 88, 12, 0.16)',
      fontFamily: 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)'
    }}>
      {/* Soft Ambient Pastel Glows in Theme Colors */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        right: '10%',
        width: '420px',
        height: '240px',
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '5%',
        width: '380px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3.75rem 1.5rem 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Top Minimal Banner: Refined Pastel CTA Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '1.75rem 2.25rem',
          border: '1.5px solid rgba(234, 88, 12, 0.14)',
          boxShadow: '0 10px 30px rgba(234, 88, 12, 0.05), 0 2px 8px rgba(0,0,0,0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3.25rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#fff7ed',
              color: '#c2410c',
              border: '1px solid #fed7aa',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.55rem'
            }}>
              <Sparkles size={13} color="#ea580c" />
              <span>Admissions Open • 45 Days to 4 Years</span>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
              fontWeight: '900',
              color: '#0f172a',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.25
            }}>
              Begin Your Child’s Journey at <span style={{ color: '#ea580c' }}>Villa 47</span>
            </h3>
            <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem', color: '#64748b' }}>
              Schedule a personalized tour with our Nursery Director in Al Rashidiya 2, Ajman.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={onBookVisitClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '999px',
                padding: '0.7rem 1.6rem',
                fontSize: '0.9rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 8px 22px rgba(234, 88, 12, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(234, 88, 12, 0.35)';
              }}
            >
              <Calendar size={15} />
              <span>Book Guided Tour</span>
            </button>

            <a
              href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20enquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#f0fdf4',
                color: '#15803d',
                border: '1.5px solid #bbf7d0',
                padding: '0.7rem 1.45rem',
                borderRadius: '999px',
                fontSize: '0.9rem',
                fontWeight: '800',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(22, 163, 74, 0.12)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dcfce7';
                e.currentTarget.style.borderColor = '#86efac';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f0fdf4';
                e.currentTarget.style.borderColor = '#bbf7d0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Minimal Pastel Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Column 1: Identity & Accreditation */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.15rem', textDecoration: 'none' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #ea580c',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 14px rgba(234, 88, 12, 0.2)',
                flexShrink: 0
              }}>
                <img 
                  src="/logo.jpg" 
                  alt="Just Like Home Nursery Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div>
                <div style={{
                  fontSize: '1.18rem',
                  fontWeight: '900',
                  color: '#0f172a',
                  letterSpacing: '0.02em',
                  lineHeight: 1.15
                }}>
                  JUST LIKE HOME
                </div>
                <div style={{
                  fontSize: '0.68rem',
                  color: '#ea580c',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  NURSERY • AJMAN
                </div>
              </div>
            </Link>

            <p style={{
              fontSize: '0.88rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '1.25rem'
            }}>
              Where little hearts discover the world with warmth, safety, and joy. British EYFS framework with the tender care of home in Villa 47, Ajman.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ffffff',
              padding: '0.4rem 0.85rem',
              borderRadius: '999px',
              color: '#16a34a',
              fontSize: '0.78rem',
              fontWeight: '700',
              border: '1.5px solid #dcfce7',
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.08)'
            }}>
              <ShieldCheck size={14} />
              <span>MOE &amp; MOHAP Compliant • CCTV</span>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 style={{
              fontSize: '0.82rem',
              color: '#0f172a',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#ea580c' }} />
              Programs
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Infant Sanctuary (45d – 1y)', path: '/programs' },
                { name: 'Toddler Discovery (1y – 2y)', path: '/programs' },
                { name: 'Preschool & Early Years (2y – 4y)', path: '/preschool' },
                { name: 'British EYFS Framework', path: '/eyfs-learning' },
                { name: 'Full-Day Daycare & Care', path: '/daycare' },
                { name: 'Holiday & Summer Camps', path: '/camps' }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ea580c';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Admissions & Campus */}
          <div>
            <h4 style={{
              fontSize: '0.82rem',
              color: '#0f172a',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#c9a84c' }} />
              Admissions &amp; Campus
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'About Our Philosophy', path: '/about-us' },
                { name: 'Admissions & Tuition Guide', path: '/admissions' },
                { name: 'Villa 47 Facilities Tour', path: '/facilities' },
                { name: 'Daily Rhythm & Activities', path: '/nursery-activities' },
                { name: 'Campus Photo Gallery', path: '/gallery' },
                { name: 'Parent Resources & Blog', path: '/resources' }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ea580c';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Villa 47 Contact & Hours */}
          <div>
            <h4 style={{
              fontSize: '0.82rem',
              color: '#0f172a',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#16a34a' }} />
              Sanctuary &amp; Hours
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#475569' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#fff7ed',
                  color: '#ea580c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={15} />
                </div>
                <span>Villa 47, Al Rashidiya 2, Ajman, UAE</span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#f0fdf4',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={15} />
                </div>
                <a href="tel:0502005346" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: '800' }}>
                  050 200 5346
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#e0f2fe',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={15} />
                </div>
                <a href="mailto:nurseryjustlikehome@gmail.com" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.84rem' }}>
                  nurseryjustlikehome@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={15} />
                </div>
                <div>
                  <div style={{ color: '#0f172a', fontWeight: '800' }}>Mon – Fri: 7:30 AM – 5:30 PM</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Morning Core: 7:30 AM – 2:00 PM</div>
                </div>
              </div>

              {/* Minimalist Social Channels in Pastel Rings */}
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.35rem' }}>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/971502005346"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp Admissions"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    color: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    border: '1.5px solid #dcfce7',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#16a34a';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(22, 163, 74, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#16a34a';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }}
                >
                  <MessageCircle size={17} />
                </a>

                {/* Google Maps */}
                <a
                  href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Google Maps Location"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    color: '#ea580c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    border: '1.5px solid #fed7aa',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ea580c';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(234, 88, 12, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#ea580c';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }}
                >
                  <MapPin size={17} />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    color: '#c9a84c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    border: '1.5px solid #fef08a',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c9a84c';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(201, 168, 76, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#c9a84c';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Minimal Copyright & Legal Bar */}
        <div style={{
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(234, 88, 12, 0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Just Like Home Nursery. All rights reserved. Registered Early Childhood Center in Ajman, UAE.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button
              onClick={onAdminClick}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '0.78rem',
                textDecoration: 'underline',
                padding: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ea580c'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Staff Portal
            </button>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: '#ffffff',
                color: '#334155',
                border: '1.5px solid #e2e8f0',
                borderRadius: '999px',
                padding: '0.4rem 0.95rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: '700',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ea580c';
                e.currentTarget.style.borderColor = '#ea580c';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#334155';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowUp size={13} />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
