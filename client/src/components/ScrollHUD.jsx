import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Compass, List, X, Sparkles } from 'lucide-react';
import { useGlobalScroll } from '../hooks/useScrollProgress';

const SECTIONS = [
  { id: 'hero', num: '01', title: 'Welcome & Hero', anchor: '#hero' },
  { id: 'about', num: '02', title: 'Philosophy & Vision', anchor: '#about' },
  { id: 'programs', num: '03', title: 'Academic Programs', anchor: '#programs' },
  { id: 'eyfs', num: '04', title: 'British EYFS Framework', anchor: '#eyfs' },
  { id: 'activities', num: '05', title: 'Daily Rhythm & Activities', anchor: '#activities' },
  { id: 'facilities', num: '06', title: 'Villa 47 Campus Suites', anchor: '#facilities' },
  { id: 'admissions', num: '07', title: 'Fee Calculator & Steps', anchor: '#admissions' },
  { id: 'gallery', num: '08', title: 'Campus Visual Gallery', anchor: '#gallery' },
  { id: 'reviews', num: '09', title: 'Parent Testimonials', anchor: '#reviews' },
  { id: 'faq', num: '10', title: 'Frequently Asked Questions', anchor: '#faq' },
  { id: 'contact', num: '11', title: 'Location & Book Tour', anchor: '#contact' },
];

export default function ScrollHUD() {
  const { scrollY, globalProgress } = useGlobalScroll();
  const [activeId, setActiveId] = useState('hero');
  const [trayOpen, setTrayOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScrollDetect = () => {
      const vh = window.innerHeight || 800;
      const viewportCenter = vh / 2;
      let closestId = 'hero';
      let minDistance = Infinity;

      SECTIONS.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const dist = Math.abs(viewportCenter - elementCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestId = sec.id;
          }
        }
      });

      setActiveId(closestId);
    };

    window.addEventListener('scroll', handleScrollDetect, { passive: true });
    handleScrollDetect();

    return () => window.removeEventListener('scroll', handleScrollDetect);
  }, []);

  const availableSections = SECTIONS.filter(sec => typeof document !== 'undefined' && !!document.getElementById(sec.id));
  const activeSectionsList = availableSections.length > 0 ? availableSections : SECTIONS;

  const currentIndex = activeSectionsList.findIndex(s => s.id === activeId);
  const currentSection = (currentIndex >= 0 ? activeSectionsList[currentIndex] : activeSectionsList[0]) || SECTIONS[0];

  const jumpTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTrayOpen(false);
    }
  };

  const step = (direction) => {
    const validIdx = currentIndex >= 0 ? currentIndex : 0;
    const nextIdx = Math.max(0, Math.min(activeSectionsList.length - 1, validIdx + direction));
    jumpTo(activeSectionsList[nextIdx].id);
  };

  // Only show after user starts scrolling down a bit (past 120px)
  if (scrollY < 120 && !trayOpen) {
    return null;
  }

  return (
    <>
      {/* Floating HUD Controller */}
      <aside 
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          zIndex: 900,
          fontFamily: 'var(--font-body)',
        }}
        aria-label="Section Navigation HUD"
      >
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '1.25rem',
          border: '1.5px solid rgba(123, 17, 39, 0.15)',
          padding: '0.5rem 0.85rem',
          boxShadow: '0 16px 36px rgba(70, 7, 19, 0.14), 0 2px 6px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Active Status Pulse */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            paddingRight: '0.65rem',
            borderRight: '1px solid rgba(123, 17, 39, 0.12)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#15803d',
              boxShadow: '0 0 8px rgba(21, 128, 61, 0.8)',
              display: 'inline-block',
              animation: 'pulseSubtle 2s infinite'
            }} />
            <span style={{
              fontSize: '0.7rem',
              fontWeight: '800',
              fontFamily: 'monospace',
              color: '#7b1127',
              letterSpacing: '0.05em'
            }}>
              #{currentSection.num}
            </span>
          </div>

          {/* Section Name & Progress */}
          <div 
            onClick={() => setTrayOpen(true)}
            style={{
              cursor: 'pointer',
              maxWidth: '180px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
            title="Click to open section index"
          >
            <div style={{ fontSize: '0.65rem', color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Active Section
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#3d050f', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>{currentSection.title}</span>
            </div>
          </div>

          {/* Navigation Steppers (Previous / Next) */}
          <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
            <button
              onClick={() => step(-1)}
              disabled={currentIndex <= 0}
              title="Previous section"
              style={{
                background: currentIndex <= 0 ? '#f3f4f6' : '#fff1f3',
                color: currentIndex <= 0 ? '#9ca3af' : '#7b1127',
                border: '1px solid rgba(123, 17, 39, 0.1)',
                borderRadius: '8px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: currentIndex <= 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronUp size={16} />
            </button>

            <button
              onClick={() => step(1)}
              disabled={currentIndex >= SECTIONS.length - 1}
              title="Next section"
              style={{
                background: currentIndex >= SECTIONS.length - 1 ? '#f3f4f6' : '#fff1f3',
                color: currentIndex >= SECTIONS.length - 1 ? '#9ca3af' : '#7b1127',
                border: '1px solid rgba(123, 17, 39, 0.1)',
                borderRadius: '8px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: currentIndex >= SECTIONS.length - 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronDown size={16} />
            </button>

            <button
              onClick={() => setTrayOpen(!trayOpen)}
              title="View all 11 sections"
              style={{
                background: '#e0f2fe',
                color: '#0369a1',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                borderRadius: '8px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '0.2rem'
              }}
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* Index Tray Drawer (Modal-style index) */}
      {trayOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(70, 7, 19, 0.45)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setTrayOpen(false); }}
        >
          <div style={{
            width: '100%',
            maxWidth: '380px',
            backgroundColor: '#ffffff',
            borderRadius: '1.75rem',
            border: '2px solid rgba(123, 17, 39, 0.15)',
            boxShadow: '0 25px 60px rgba(70, 7, 19, 0.25)',
            padding: '1.5rem',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(123, 17, 39, 0.1)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#7b1127'
                }} />
                <h4 style={{
                  margin: 0,
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: '#3d050f',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Section Highway
                </h4>
              </div>
              <button
                onClick={() => setTrayOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#78716c',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Section Item Links */}
            <div style={{
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              paddingRight: '0.25rem'
            }}>
              {activeSectionsList.map((sec, idx) => {
                const isActive = sec.id === activeId;
                return (
                  <button
                    key={sec.id}
                    onClick={() => jumpTo(sec.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '0.85rem',
                      border: isActive ? '1.5px solid #7b1127' : '1px solid transparent',
                      backgroundColor: isActive ? '#fff1f3' : '#fdfbf7',
                      color: isActive ? '#7b1127' : '#4a443e',
                      fontWeight: isActive ? '700' : '500',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '0.78rem',
                        fontWeight: '800',
                        color: isActive ? '#7b1127' : '#9ca3af'
                      }}>
                        #{sec.num}
                      </span>
                      <span>{sec.title}</span>
                    </div>
                    {isActive && (
                      <span style={{
                        fontSize: '0.65rem',
                        backgroundColor: '#7b1127',
                        color: '#ffffff',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        fontWeight: '700'
                      }}>
                        Viewing
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div style={{
              paddingTop: '1rem',
              marginTop: '0.75rem',
              borderTop: '1px solid rgba(123, 17, 39, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: '#78716c'
            }}>
              <span>Scroll Progress: {Math.round(globalProgress * 100)}%</span>
              <span style={{ color: '#7b1127', fontWeight: '700' }}>Villa 47 Al Rashidiya 2</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
