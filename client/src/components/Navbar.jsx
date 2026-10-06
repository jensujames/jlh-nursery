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
  ChevronDown,
  ChevronRight,
  Home,
  Heart,
  GraduationCap,
  BookOpen,
  Building2,
  Calculator,
  Image,
  BookText,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ onBookVisitClick, onAdminClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setLearningDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home, color: '#F15A29', bg: '#fff0eb' },
    { name: 'About Us', path: '/about-us', icon: Heart, color: '#e11d48', bg: '#ffe4e6' },
    { name: 'Programs', path: '/programs', icon: GraduationCap, color: '#ff6b6b', bg: '#ffe3e3' },
    { name: 'EYFS & Learning', path: '/eyfs-learning', icon: BookOpen, color: '#0284c7', bg: '#e0f2fe' },
    { name: 'Activities', path: '/nursery-activities', icon: Sparkles, color: '#16a34a', bg: '#f0fdf4' },
    { name: 'Facilities & Safety', path: '/facilities', icon: Building2, color: '#059669', bg: '#dcfce7' },
    { name: 'Camps', path: '/camps', icon: Clock, color: '#d97706', bg: '#fef3c7' },
    { name: 'Admissions', path: '/admissions', icon: Calculator, color: '#d97706', bg: '#fef3c7' },
    { name: 'Gallery', path: '/gallery', icon: Image, color: '#8b5cf6', bg: '#ede9fe' },
    { name: 'Parent Resources', path: '/blog', icon: BookText, color: '#ec4899', bg: '#fce7f3' },
    { name: 'Contact', path: '/contact', icon: MapPin, color: '#721024', bg: '#fdf0f2' },
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled 
          ? 'rgba(255, 246, 239, 0.96)' 
          : 'linear-gradient(180deg, rgba(255, 238, 226, 0.94) 0%, rgba(255, 224, 204, 0.85) 100%)',
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
          padding: '0.55rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.65rem'
        }}>
          {/* Logo & Brand Identity */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            flexShrink: 0
          }}>
            <div 
              className="navbar-brand-logo-wrap"
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 0 16px rgba(201, 168, 76, 0.4), 0 4px 14px rgba(114, 16, 36, 0.25)',
                border: '2px solid #c9a84c',
                backgroundColor: '#fff7f2',
                flexShrink: 0,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <img 
                src="/logo.jpg" 
                alt="Just Like Home Nursery Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.05rem, 2.8vw, 1.35rem)',
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
                fontSize: '0.68rem',
                fontWeight: '800',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#15803d',
                  boxShadow: '0 0 6px #15803d',
                  display: 'inline-block'
                }} />
                <span>NURSERY</span>
                <span style={{ color: '#0284c7', fontSize: '8px' }}>●</span>
                <span style={{ color: '#721024', fontWeight: '800' }}>VILLA 47, AJMAN</span>
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
                  style={({ isActive }) => ({
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: isActive ? '#ffffff' : '#3d050f',
                    textDecoration: 'none',
                    padding: '0.36rem 0.52rem',
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

          {/* Action CTAs: Desktop vs Mobile App Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Desktop WhatsApp Pill */}
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
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            {/* Desktop Book a Visit Button */}
            <button
              onClick={onBookVisitClick}
              id="header-book-visit-btn"
              className="desktop-book-btn"
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
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <Calendar size={15} />
              <span>Book a Visit</span>
            </button>

            {/* Mobile Quick Action Pill (Compact Tour CTA) */}
            <button
              onClick={onBookVisitClick}
              className="mobile-quick-tour-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #F15A29 0%, #d44015 100%)',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.78rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(241, 90, 41, 0.35)',
                whiteSpace: 'nowrap'
              }}
            >
              <Calendar size={13} />
              <span>Tour</span>
            </button>

            {/* Mobile App Menu Hamburger / Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(prev => !prev);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: mobileMenuOpen ? '#721024' : 'rgba(255, 255, 255, 0.88)',
                border: '1.5px solid rgba(114, 16, 36, 0.25)',
                borderRadius: '12px',
                color: mobileMenuOpen ? '#ffffff' : '#721024',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                zIndex: 1001,
                pointerEvents: 'auto'
              }}
              className="mobile-hamburger"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
            </button>
          </div>
        </div>
      </header>

      {/* NATIVE MOBILE APP NAVIGATION CANVAS / FULL-SCREEN SHEET (OUTSIDE HEADER) */}
      {mobileMenuOpen && (
        <div 
          className="mobile-app-drawer"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#fffdf9',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Top Bar with Brand & Close Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgba(114, 16, 36, 0.1)',
            background: 'rgba(255, 255, 255, 0.96)',
            position: 'sticky',
            top: 0,
            zIndex: 20
          }}>
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
            >
              <img 
                src="/logo.jpg" 
                alt="Just Like Home Nursery Logo" 
                style={{ width: '34px', height: '34px', objectFit: 'contain', borderRadius: '50%' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '0.92rem', color: '#721024', lineHeight: 1.1 }}>
                  Just Like Home
                </div>
                <div style={{ fontSize: '0.68rem', color: '#8a6b72', fontWeight: '700' }}>
                  Nursery Ajman
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                backgroundColor: '#fce7eb',
                color: '#721024',
                border: '1.5px solid rgba(114, 16, 36, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={2.4} />
            </button>
          </div>

          {/* Scrollable App Nav Content */}
          <div style={{ padding: '1rem 1rem 2rem' }}>
              {/* App Status & Direct Contact Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.65rem',
                marginBottom: '1.25rem'
              }}>
                <a
                  href="tel:0502005346"
                  style={{
                    backgroundColor: '#f0f9ff',
                    border: '1.5px solid #bae6fd',
                    borderRadius: '16px',
                    padding: '0.75rem 0.85rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    boxShadow: '0 2px 8px rgba(2, 132, 199, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: '#e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7'
                    }}>
                      <Phone size={15} />
                    </div>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#15803d'
                    }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#0369a1' }}>Direct Call</div>
                    <div style={{ fontSize: '0.7rem', color: '#0284c7', fontWeight: '600' }}>050 200 5346</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20learn%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f0fdf4',
                    border: '1.5px solid #bbf7d0',
                    borderRadius: '16px',
                    padding: '0.75rem 0.85rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    boxShadow: '0 2px 8px rgba(22, 163, 74, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#16a34a'
                    }}>
                      <MessageCircle size={15} />
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#16a34a' }}>Active</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#166534' }}>WhatsApp</div>
                    <div style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: '600' }}>Instant Reply</div>
                  </div>
                </a>
              </div>

              {/* Grouped App Navigation List */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid rgba(114, 16, 36, 0.12)',
                boxShadow: '0 4px 18px rgba(114, 16, 36, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const isPrograms = link.name === 'Programs';
                  const isLearning = link.name === 'Learning';
                  const isAccordionOpen = isPrograms ? mobileProgramsOpen : isLearning ? mobileLearningOpen : false;

                  return (
                    <div 
                      key={link.name} 
                      style={{ 
                        borderBottom: idx !== navLinks.length - 1 ? '1px solid #f5ede8' : 'none' 
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <NavLink
                          to={link.path}
                          onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                          style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.85rem',
                            padding: '0.8rem 1rem',
                            flex: 1,
                            textDecoration: 'none',
                            color: isActive ? '#721024' : '#2d1f22',
                            fontWeight: isActive ? '900' : '750',
                            fontSize: '0.94rem'
                          })}
                        >
                          <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            backgroundColor: link.bg,
                            color: link.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <Icon size={18} />
                          </div>
                          <span>{link.name}</span>
                        </NavLink>

                        {/* Accordion toggle button if item has sub-links */}
                        {link.hasDropdown ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (isPrograms) setMobileProgramsOpen(!mobileProgramsOpen);
                              if (isLearning) setMobileLearningOpen(!mobileLearningOpen);
                            }}
                            style={{
                              padding: '0.8rem 1rem',
                              background: 'none',
                              border: 'none',
                              color: '#94a3b8',
                              cursor: 'pointer'
                            }}
                            aria-label={`Toggle ${link.name} options`}
                          >
                            <ChevronDown 
                              size={18} 
                              style={{ 
                                transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.25s ease' 
                              }} 
                            />
                          </button>
                        ) : (
                          <div style={{ paddingRight: '1rem', color: '#cbd5e1' }}>
                            <ChevronRight size={16} />
                          </div>
                        )}
                      </div>

                      {/* Expandable Sub-items for Programs & Learning */}
                      {link.hasDropdown && isAccordionOpen && (
                        <div style={{
                          backgroundColor: '#faf6f3',
                          padding: '0.5rem 1rem 0.75rem 3.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                          borderTop: '1px dashed #eeded6'
                        }}>
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              style={{
                                fontSize: '0.84rem',
                                color: '#4a0e1a',
                                fontWeight: '700',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                padding: '0.3rem 0'
                              }}
                            >
                              <span style={{ color: link.color }}>•</span>
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sticky Mobile App Sheet Bottom Actions */}
            <div style={{
              padding: '1rem',
              backgroundColor: '#ffffff',
              borderTop: '1px solid rgba(114, 16, 36, 0.12)',
              boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              paddingBottom: 'max(1.2rem, env(safe-area-inset-bottom))'
            }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookVisitClick();
                }}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #721024 0%, #941731 50%, #c9a84c 100%)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.35)'
                }}
              >
                <Calendar size={18} />
                <span>Book a Guided Tour</span>
              </button>

              <div style={{
                textAlign: 'center',
                fontSize: '0.72rem',
                color: '#8a6b72',
                fontWeight: '700'
              }}>
                Villa No. 47, Al Rashidiya 2, Ajman • Licensed UAE Nursery
              </div>
            </div>
          </div>
        )}

      <style>{`
        .navbar-brand-logo-wrap {
          width: 44px;
          height: 44px;
        }
        @media (max-width: 768px) {
          .navbar-brand-logo-wrap {
            width: 38px;
            height: 38px;
          }
          .desktop-book-btn {
            display: none !important;
          }
          .mobile-quick-tour-btn {
            display: inline-flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-book-btn {
            display: inline-flex !important;
          }
          .mobile-quick-tour-btn {
            display: none !important;
          }
        }
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
