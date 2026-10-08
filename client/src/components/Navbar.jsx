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
  Sun
} from 'lucide-react';

export default function Navbar({ onBookVisitClick, onAdminClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState({
    about: false,
    programs: false,
    activities: false
  });
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
    setOpenDropdown(null);
  }, [location.pathname]);

  // Global event listeners for external triggers (e.g. bottom bar dock) and keyboard escape
  useEffect(() => {
    const handleToggle = () => setMobileMenuOpen(prev => !prev);
    const handleOpen = () => setMobileMenuOpen(true);
    const handleClose = () => setMobileMenuOpen(false);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('toggle-mobile-menu', handleToggle);
    window.addEventListener('open-mobile-menu', handleOpen);
    window.addEventListener('close-mobile-menu', handleClose);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('toggle-mobile-menu', handleToggle);
      window.removeEventListener('open-mobile-menu', handleOpen);
      window.removeEventListener('close-mobile-menu', handleClose);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMobileAccordion = (key) => {
    setMobileAccordion(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Detailed Menu Breakdown (Matching Exact Spec)
  const menuConfig = [
    {
      id: 'home',
      name: 'Home',
      path: '/',
      hasDropdown: false,
      icon: Home,
      color: '#F15A29',
      bg: '#fff0eb'
    },
    {
      id: 'about',
      name: 'About Us',
      path: '/about-us',
      hasDropdown: true,
      icon: Heart,
      color: '#e11d48',
      bg: '#ffe4e6',
      subItems: [
        { 
          name: 'About Us', 
          badge: 'Overview', 
          path: '/about-us', 
          icon: Heart, 
          desc: 'Our ethos, leadership & nursery philosophy' 
        },
        { 
          name: 'Photo Gallery', 
          badge: null, 
          path: '/gallery', 
          icon: Image, 
          desc: 'Sunlit classrooms & learning spaces in Ajman' 
        }
      ]
    },
    {
      id: 'programs',
      name: 'Programs',
      path: '/programs',
      hasDropdown: true,
      icon: GraduationCap,
      color: '#ff6b6b',
      bg: '#ffe3e3',
      subItems: [
        { 
          name: 'All Programs', 
          badge: 'Overview', 
          path: '/programs', 
          icon: GraduationCap, 
          desc: 'Core early years offerings & comprehensive care' 
        },
        { 
          name: 'EYFS & Learning Approach', 
          badge: null, 
          path: '/eyfs-learning', 
          icon: BookOpen, 
          desc: 'British EYFS framework & developmental milestones' 
        },
        { 
          name: 'Preschool & School Readiness', 
          badge: null, 
          path: '/preschool-school-readiness', 
          icon: Sparkles, 
          desc: 'Confidence, early literacy & routines for big school' 
        },
        { 
          name: 'Full-Day & Half-Day Care', 
          badge: null, 
          path: '/daycare-ajman', 
          icon: Clock, 
          desc: 'Flexible care tailored around family schedules' 
        },
        { 
          name: 'Holiday & Summer Camps', 
          badge: null, 
          path: '/camps', 
          icon: Sun, 
          desc: 'Exciting seasonal learning & creative adventure' 
        }
      ]
    },
    {
      id: 'activities',
      name: 'Activities & Facilities',
      path: '/nursery-activities',
      hasDropdown: true,
      icon: Sparkles,
      color: '#16a34a',
      bg: '#f0fdf4',
      subItems: [
        { 
          name: 'Nursery Activities', 
          badge: null, 
          path: '/nursery-activities', 
          icon: Sparkles, 
          desc: 'Messy play, sensory discovery & daily wonder' 
        },
        { 
          name: 'Facilities & Safety', 
          badge: null, 
          path: '/facilities', 
          icon: Building2, 
          desc: 'Child-safe campus at Villa 47, Al Rashidiya 2' 
        }
      ]
    },
    {
      id: 'admissions',
      name: 'Admissions',
      path: '/admissions',
      hasDropdown: false,
      icon: Calculator,
      color: '#d97706',
      bg: '#fef3c7'
    },
    {
      id: 'blog',
      name: 'Blog',
      subLabel: 'Parent Resources',
      path: '/blog',
      hasDropdown: false,
      icon: BookText,
      color: '#ec4899',
      bg: '#fce7f3'
    },
    {
      id: 'contact',
      name: 'Contact',
      path: '/contact',
      hasDropdown: false,
      icon: MapPin,
      color: '#721024',
      bg: '#fdf0f2'
    }
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

          {/* Desktop Navigation Floating Island with Dropdowns */}
          <nav 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.78)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '0.28rem 0.5rem',
              borderRadius: '9999px',
              border: '1.5px solid rgba(201, 168, 76, 0.35)',
              boxShadow: '0 4px 18px rgba(114, 16, 36, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
              transition: 'all 0.3s ease'
            }} 
            className="desktop-nav"
          >
            {menuConfig.map((item) => {
              if (item.hasDropdown) {
                const isItemActive = location.pathname.startsWith(item.path) || 
                  item.subItems?.some(s => location.pathname === s.path || location.pathname === `${s.path}/`);
                const isOpen = openDropdown === item.id;

                return (
                  <div 
                    key={item.id} 
                    className="nav-dropdown-wrapper"
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setOpenDropdown(item.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavLink
                      to={item.path}
                      style={{
                        fontSize: '0.84rem',
                        fontWeight: '800',
                        color: isItemActive ? '#FAF5EB' : '#3d050f',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.42rem 0.72rem',
                        borderRadius: '9999px',
                        background: isItemActive ? 'linear-gradient(135deg, #721024 0%, #8f152f 100%)' : 'transparent',
                        border: isItemActive ? '1px solid rgba(201, 168, 76, 0.5)' : '1px solid transparent',
                        boxShadow: isItemActive ? '0 4px 12px rgba(114, 16, 36, 0.25)' : 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={13} 
                        style={{ 
                          opacity: 0.75,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease'
                        }} 
                      />
                    </NavLink>

                    {/* Desktop Dropdown Card */}
                    {isOpen && (
                      <div 
                        className="nav-desktop-dropdown-card"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '0.45rem',
                          zIndex: 100
                        }}
                      >
                        <div style={{
                          backgroundColor: 'rgba(255, 253, 249, 0.98)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          boxShadow: '0 20px 45px rgba(114, 16, 36, 0.16), 0 4px 16px rgba(201, 168, 76, 0.14)',
                          borderRadius: '1.25rem',
                          padding: '0.55rem',
                          minWidth: item.id === 'programs' ? '310px' : '260px',
                          border: '1.5px solid rgba(201, 168, 76, 0.35)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                          animation: 'navDropdownFadeIn 0.22s ease-out'
                        }}>
                          {item.subItems.map((sub) => {
                            const SubIcon = sub.icon;
                            const isSubActive = location.pathname === sub.path || location.pathname === `${sub.path}/`;

                            return (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setOpenDropdown(null)}
                                style={{
                                  padding: '0.65rem 0.85rem',
                                  borderRadius: '0.85rem',
                                  textDecoration: 'none',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.7rem',
                                  backgroundColor: isSubActive ? '#fdf2e9' : 'transparent',
                                  transition: 'all 0.18s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#fdf2e9';
                                }}
                                onMouseLeave={(e) => {
                                  if (!isSubActive) e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                              >
                                <div style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '9px',
                                  backgroundColor: item.bg,
                                  color: item.color,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
                                }}>
                                  <SubIcon size={16} />
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.45rem'
                                  }}>
                                    <span style={{
                                      fontSize: '0.86rem',
                                      fontWeight: '800',
                                      color: isSubActive ? '#721024' : '#2d1f22',
                                      whiteSpace: 'nowrap'
                                    }}>
                                      {sub.name}
                                    </span>
                                    {sub.badge && (
                                      <span style={{
                                        fontSize: '0.62rem',
                                        fontWeight: '800',
                                        color: '#721024',
                                        backgroundColor: '#fce7eb',
                                        padding: '1px 6px',
                                        borderRadius: '999px',
                                        letterSpacing: '0.4px',
                                        textTransform: 'uppercase'
                                      }}>
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div style={{
                                    fontSize: '0.72rem',
                                    color: '#64748b',
                                    lineHeight: 1.25,
                                    marginTop: '2px',
                                    fontWeight: '500'
                                  }}>
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  style={({ isActive }) => ({
                    fontSize: '0.84rem',
                    fontWeight: '800',
                    color: isActive ? '#FAF5EB' : '#3d050f',
                    textDecoration: 'none',
                    padding: '0.42rem 0.68rem',
                    borderRadius: '9999px',
                    background: isActive ? 'linear-gradient(135deg, #721024 0%, #8f152f 100%)' : 'transparent',
                    border: isActive ? '1px solid rgba(201, 168, 76, 0.5)' : '1px solid transparent',
                    boxShadow: isActive ? '0 4px 12px rgba(114, 16, 36, 0.25)' : 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem'
                  })}
                >
                  <span>{item.name}</span>
                  {item.subLabel && (
                    <span className="desktop-nav-sub-chip" style={{
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      opacity: 0.85
                    }}>
                      (Resources)
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs: Desktop vs Mobile App Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Secondary Action: WhatsApp Us Pill */}
            <a
              href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-cta-wa"
              style={{
                padding: '0.52rem 0.95rem',
                fontSize: '0.82rem',
                fontWeight: '800',
                display: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                alignItems: 'center',
                gap: '0.4rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(21, 128, 61, 0.12)',
                color: '#15803d',
                border: '1.5px solid rgba(21, 128, 61, 0.35)',
                textDecoration: 'none',
                transition: 'all 0.25s ease'
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>

            {/* Primary Action Button: BOOK A VISIT */}
            <button
              onClick={onBookVisitClick}
              id="header-book-visit-btn"
              className="desktop-book-btn"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.82rem',
                fontWeight: '900',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                cursor: 'pointer',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #721024 0%, #941731 50%, #c9a84c 100%)',
                color: '#FAF5EB',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 4px 16px rgba(114, 16, 36, 0.3)',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <Calendar size={15} />
              <span>BOOK A VISIT</span>
            </button>

            {/* Mobile Book Appointment Icon Button (Mobile View) */}
            <button
              type="button"
              onClick={onBookVisitClick}
              id="header-mobile-book-visit-btn"
              className="mobile-book-appointment-btn"
              aria-label="Book an Appointment"
              title="Book an Appointment"
            >
              <Calendar size={18} strokeWidth={2.3} />
              <span className="mobile-book-badge-dot" />
            </button>

            {/* Mobile App Menu Hamburger / Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(prev => !prev);
              }}
              className={`mobile-hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              title={mobileMenuOpen ? "Close Menu" : "Menu"}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
            </button>
          </div>
        </div>
      </header>

      {/* NATIVE MOBILE APP NAVIGATION CANVAS / FULL-SCREEN SHEET (OUTSIDE HEADER) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(25, 4, 8, 0.58)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              zIndex: 999998,
              animation: 'mobileBackdropFadeIn 0.25s ease'
            }}
            aria-hidden="true"
          />

          <div 
            className="mobile-app-drawer"
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            data-lenis-prevent-wheel="true"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '420px',
              height: '100%',
              maxHeight: '100dvh',
              backgroundColor: '#fffdf9',
              zIndex: 999999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.25)',
              animation: 'mobileDrawerSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top Bar with Brand & Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1rem',
              borderBottom: '1px solid rgba(114, 16, 36, 0.12)',
              background: 'rgba(255, 255, 255, 0.98)',
              flexShrink: 0,
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
                  style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '50%', border: '1.5px solid #c9a84c' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '0.96rem', color: '#721024', lineHeight: 1.15 }}>
                    Just Like Home
                  </div>
                  <div style={{ fontSize: '0.66rem', color: '#c9a84c', fontWeight: '800', letterSpacing: '0.04em' }}>
                    NURSERY • VILLA 47, AJMAN
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

            {/* Scrollable Nav Content */}
            <div 
              className="mobile-app-drawer-body"
              data-lenis-prevent="true"
              data-lenis-prevent-touch="true"
              data-lenis-prevent-wheel="true"
              style={{ 
                padding: '1rem', 
                flex: '1 1 0%', 
                minHeight: 0,
                overflowY: 'auto', 
                WebkitOverflowScrolling: 'touch', 
                overscrollBehaviorY: 'contain',
                touchAction: 'pan-y',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem' 
              }}
            >
              {/* Quick Action: Book Appointment Banner Card */}
              <div style={{
                background: 'linear-gradient(135deg, #721024 0%, #941731 55%, #c9a84c 100%)',
                borderRadius: '18px',
                padding: '1rem 1.15rem',
                color: '#FAF5EB',
                boxShadow: '0 8px 24px rgba(114, 16, 36, 0.22)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FAF5EB'
                    }}>
                      <Calendar size={18} strokeWidth={2.4} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: '900', lineHeight: 1.15 }}>Book an Appointment</div>
                      <div style={{ fontSize: '0.68rem', color: '#ffeaad', fontWeight: '700' }}>Schedule a Campus Tour</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: '800',
                    backgroundColor: '#15803d',
                    color: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px'
                  }}>
                    Available
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookVisitClick();
                  }}
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: '#FAF5EB',
                    color: '#721024',
                    border: 'none',
                    fontWeight: '900',
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <Calendar size={15} />
                  <span>Book Campus Tour Now</span>
                </button>
              </div>

              {/* Direct Contact Action Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.65rem'
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
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#166534' }}>WhatsApp Us</div>
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
                {menuConfig.map((item, idx) => {
                  const Icon = item.icon;
                  const isAccordionOpen = !!mobileAccordion[item.id];

                  return (
                    <div 
                      key={item.id} 
                      style={{ 
                        borderBottom: idx !== menuConfig.length - 1 ? '1px solid #f5ede8' : 'none' 
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {item.hasDropdown ? (
                          <div
                            onClick={() => toggleMobileAccordion(item.id)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                              padding: '0.85rem 1rem',
                              cursor: 'pointer',
                              userSelect: 'none'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                              <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                backgroundColor: item.bg,
                                color: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <Icon size={18} />
                              </div>
                              <div>
                                <div style={{
                                  fontWeight: isAccordionOpen ? '900' : '750',
                                  color: isAccordionOpen ? '#721024' : '#2d1f22',
                                  fontSize: '0.94rem'
                                }}>
                                  {item.name}
                                </div>
                              </div>
                            </div>

                            <div style={{
                              color: isAccordionOpen ? '#721024' : '#94a3b8',
                              display: 'flex',
                              alignItems: 'center',
                              transition: 'transform 0.25s ease',
                              transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                              <ChevronDown size={18} />
                            </div>
                          </div>
                        ) : (
                          <NavLink
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            style={({ isActive }) => ({
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                              padding: '0.85rem 1rem',
                              textDecoration: 'none',
                              color: isActive ? '#721024' : '#2d1f22',
                              fontWeight: isActive ? '900' : '750',
                              fontSize: '0.94rem'
                            })}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                              <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                backgroundColor: item.bg,
                                color: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <Icon size={18} />
                              </div>
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span>{item.name}</span>
                                  {item.subLabel && (
                                    <span style={{ fontSize: '0.72rem', color: '#8a6b72', fontWeight: '600' }}>
                                      ({item.subLabel})
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div style={{ color: '#cbd5e1' }}>
                              <ChevronRight size={16} />
                            </div>
                          </NavLink>
                        )}
                      </div>

                      {/* Expandable Sub-items */}
                      {item.hasDropdown && isAccordionOpen && (
                        <div style={{
                          backgroundColor: '#faf6f3',
                          padding: '0.5rem 1rem 0.75rem 3.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                          borderTop: '1px dashed #eeded6'
                        }}>
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              style={{
                                fontSize: '0.86rem',
                                color: '#4a0e1a',
                                fontWeight: '750',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.4rem 0'
                              }}
                            >
                              <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                                <span style={{ color: item.color, fontSize: '1.1rem' }}>•</span>
                                <span>{sub.name}</span>
                              </span>
                              {sub.badge && (
                                <span style={{
                                  fontSize: '0.62rem',
                                  color: '#721024',
                                  backgroundColor: '#fce7eb',
                                  padding: '1px 6px',
                                  borderRadius: '999px',
                                  textTransform: 'uppercase',
                                  fontWeight: '800'
                                }}>
                                  {sub.badge}
                                </span>
                              )}
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
              flexShrink: 0,
              zIndex: 20,
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
                  color: '#FAF5EB',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: '900',
                  letterSpacing: '0.5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.35)'
                }}
              >
                <Calendar size={18} />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                color: '#8a6b72',
                fontWeight: '700'
              }}>
                <span>Villa 47, Al Rashidiya 2, Ajman</span>
                {onAdminClick && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onAdminClick();
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#c9a84c',
                      fontWeight: '800',
                      cursor: 'pointer',
                      fontSize: '0.72rem',
                      textDecoration: 'underline'
                    }}
                  >
                    Admin Portal
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        .navbar-brand-logo-wrap {
          width: 44px;
          height: 44px;
        }
        @keyframes navDropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes mobileBackdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes mobileDrawerSlideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes bookPulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.7;
          }
        }
        .mobile-book-appointment-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #721024 0%, #941731 50%, #c9a84c 100%);
          color: #FAF5EB;
          border: 1.5px solid rgba(201, 168, 76, 0.45);
          box-shadow: 0 4px 14px rgba(114, 16, 36, 0.28), 0 0 10px rgba(201, 168, 76, 0.2);
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .mobile-book-appointment-btn:active {
          transform: scale(0.92);
        }
        .mobile-book-badge-dot {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          border: 1.5px solid #721024;
          animation: bookPulseDot 2s infinite ease-in-out;
        }
        .mobile-hamburger-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.92);
          border: 1.5px solid rgba(114, 16, 36, 0.25);
          border-radius: 12px;
          color: #721024;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(114, 16, 36, 0.08);
          position: relative;
          flex-shrink: 0;
        }
        .mobile-hamburger-btn:active {
          transform: scale(0.92);
        }
        .mobile-hamburger-btn.is-active {
          background: #721024;
          color: #FAF5EB;
          border-color: #c9a84c;
        }
        .mobile-app-drawer {
          display: flex !important;
          flex-direction: column !important;
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          max-width: 420px !important;
          height: 100% !important;
          height: 100dvh !important;
          max-height: 100dvh !important;
          z-index: 999999 !important;
          background-color: #fffdf9 !important;
          overflow: hidden !important;
          touch-action: pan-y !important;
          overscroll-behavior-y: contain !important;
        }
        .mobile-app-drawer-body {
          flex: 1 1 0% !important;
          min-height: 0 !important;
          overflow-y: auto !important;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior-y: contain !important;
          touch-action: pan-y !important;
        }
        .mobile-app-drawer-body::-webkit-scrollbar {
          width: 5px;
        }
        .mobile-app-drawer-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .mobile-app-drawer-body::-webkit-scrollbar-thumb {
          background: rgba(114, 16, 36, 0.2);
          border-radius: 999px;
        }
        @media (max-width: 768px) {
          .navbar-brand-logo-wrap {
            width: 38px;
            height: 38px;
          }
          .desktop-book-btn {
            display: none !important;
          }
          .mobile-book-appointment-btn {
            display: inline-flex !important;
          }
          .mobile-hamburger-btn {
            display: inline-flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-book-btn {
            display: inline-flex !important;
          }
          .mobile-book-appointment-btn {
            display: none !important;
          }
        }
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        @media (min-width: 1180px) {
          .desktop-cta-wa {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
