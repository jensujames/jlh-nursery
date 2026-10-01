import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Menu, 
  X, 
  Sparkles, 
  MapPin, 
  Lock,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ onBookVisitClick, onAdminClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setLearningDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { 
      name: 'Programs', 
      path: '/programs',
      hasDropdown: true,
      dropdownState: programsDropdownOpen,
      setDropdownState: setProgramsDropdownOpen,
      subItems: [
        { name: 'All Programs Overview', path: '/programs' },
        { name: 'Preschool & School Readiness', path: '/preschool-school-readiness' },
        { name: 'Full-Day & Half-Day Care', path: '/daycare-ajman' },
        { name: 'Holiday & Summer Camps', path: '/camps' }
      ]
    },
    { 
      name: 'Learning', 
      path: '/eyfs-learning',
      hasDropdown: true,
      dropdownState: learningDropdownOpen,
      setDropdownState: setLearningDropdownOpen,
      subItems: [
        { name: 'British EYFS Framework', path: '/eyfs-learning' },
        { name: 'Daily Activities & Schedule', path: '/nursery-activities' }
      ]
    },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled 
          ? 'rgba(255, 246, 239, 0.95)' 
          : 'linear-gradient(180deg, rgba(255, 238, 226, 0.92) 0%, rgba(255, 224, 204, 0.75) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(114, 16, 36, 0.14)' : '1px solid rgba(201, 168, 76, 0.35)',
        boxShadow: isScrolled ? '0 10px 30px rgba(114, 16, 36, 0.08)' : '0 4px 20px rgba(241, 90, 41, 0.06)',
      }}>
        {/* Creative Ambient Gradient Ribbon Accent */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(2, 132, 199, 0.5) 25%, rgba(201, 168, 76, 0.75) 50%, rgba(21, 128, 61, 0.5) 75%, transparent 100%)',
          opacity: isScrolled ? 0.95 : 0.7,
          transition: 'opacity 0.3s ease'
        }} />

        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0.6rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}>
          {/* Logo & Brand Identity */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
            flexShrink: 0
          }}>
            <div 
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 0 16px rgba(201, 168, 76, 0.4), 0 4px 14px rgba(114, 16, 36, 0.25)',
                border: '2.5px solid #c9a84c',
                backgroundColor: '#fff7f2',
                flexShrink: 0,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06) rotate(3deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
            >
              <img 
                src="/logo.jpg" 
                alt="Just Like Home Nursery Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.38rem',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <span>Just Like Home</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                fontWeight: '800',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#15803d',
                  boxShadow: '0 0 6px #15803d',
                  display: 'inline-block'
                }} />
                <span>NURSERY • AJMAN</span>
                <span style={{ color: '#0284c7', fontSize: '9px' }}>●</span>
                <span style={{ color: '#721024', fontSize: '0.68rem', fontWeight: '800' }}>VILLA 47</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Floating Island */}
          <nav 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.2rem',
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '0.25rem 0.45rem',
              borderRadius: '9999px',
              border: '1.5px solid rgba(201, 168, 76, 0.35)',
              boxShadow: '0 4px 18px rgba(114, 16, 36, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
              transition: 'all 0.3s ease'
            }} 
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => link.setDropdownState(true)}
                    onMouseLeave={() => link.setDropdownState(false)}
                  >
                    <NavLink
                      to={link.path}
                      style={({ isActive }) => ({
                        fontSize: '0.82rem',
                        fontWeight: '800',
                        color: isActive ? '#ffffff' : '#3d050f',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        padding: '0.4rem 0.65rem',
                        borderRadius: '9999px',
                        background: isActive ? 'linear-gradient(135deg, #721024 0%, #8f152f 100%)' : 'transparent',
                        border: isActive ? '1px solid rgba(201, 168, 76, 0.5)' : '1px solid transparent',
                        boxShadow: isActive ? '0 4px 12px rgba(114, 16, 36, 0.25)' : 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease'
                      })}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={13} style={{ opacity: 0.75 }} />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {link.dropdownState && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'rgba(255, 248, 242, 0.98)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: '0 18px 40px rgba(114, 16, 36, 0.16), 0 4px 12px rgba(201, 168, 76, 0.12)',
                        borderRadius: '1.25rem',
                        padding: '0.55rem',
                        minWidth: '240px',
                        border: '1.5px solid rgba(201, 168, 76, 0.35)',
                        zIndex: 60,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                      }}>
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            style={{
                              padding: '0.65rem 1rem',
                              borderRadius: '0.75rem',
                              fontSize: '0.84rem',
                              fontWeight: '700',
                              color: '#3d050f',
                              textDecoration: 'none',
                              whiteSpace: 'nowrap',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#fdf2e9';
                              e.currentTarget.style.color = '#721024';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#3d050f';
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  style={({ isActive }) => ({
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: isActive ? '#ffffff' : '#3d050f',
                    textDecoration: 'none',
                    padding: '0.4rem 0.65rem',
                    borderRadius: '9999px',
                    background: isActive ? 'linear-gradient(135deg, #721024 0%, #8f152f 100%)' : 'transparent',
                    border: isActive ? '1px solid rgba(201, 168, 76, 0.5)' : '1px solid transparent',
                    boxShadow: isActive ? '0 4px 12px rgba(114, 16, 36, 0.25)' : 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  })}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs: WhatsApp & Book a Visit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <a
              href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-cta-wa"
              style={{
                padding: '0.5rem 0.95rem',
                fontSize: '0.82rem',
                fontWeight: '800',
                display: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                alignItems: 'center',
                gap: '0.35rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(21, 128, 61, 0.12)',
                color: '#15803d',
                border: '1.5px solid rgba(21, 128, 61, 0.35)',
                textDecoration: 'none',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#15803d';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(21, 128, 61, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(21, 128, 61, 0.12)';
                e.currentTarget.style.color = '#15803d';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookVisitClick}
              id="header-book-visit-btn"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.84rem',
                fontWeight: '900',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                cursor: 'pointer',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #721024 0%, #941731 50%, #c9a84c 100%)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 4px 16px rgba(114, 16, 36, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(114, 16, 36, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(114, 16, 36, 0.3)';
              }}
            >
              <Calendar size={15} />
              <span>Book a Visit</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1.5px solid rgba(114, 16, 36, 0.25)',
                borderRadius: '10px',
                padding: '0.5rem',
                color: '#721024',
                cursor: 'pointer'
              }}
              className="mobile-hamburger"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'rgba(255, 248, 242, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(114, 16, 36, 0.15)',
            padding: '1.25rem',
            boxShadow: '0 20px 40px rgba(114, 16, 36, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    fontSize: '1rem',
                    fontWeight: '800',
                    color: isActive ? '#721024' : '#2d1f22',
                    textDecoration: 'none',
                    padding: '0.45rem 0',
                    display: 'block',
                    borderBottom: '1px solid #f8dce1'
                  })}
                >
                  {link.name}
                </NavLink>

                {link.hasDropdown && (
                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem' }}>
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.88rem',
                          color: '#6b7280',
                          textDecoration: 'none',
                          padding: '0.25rem 0'
                        }}
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
              <a
                href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookVisitClick();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={18} />
                <span>Book a Guided Tour</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        @media (min-width: 1260px) {
          .desktop-cta-wa {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
