import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Sparkles, 
  X, 
  Play, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  Calendar,
  MessageCircle,
  ExternalLink,
  MapPin,
  Check
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const GMB_URL = 'https://share.google/AbZVHOBinruNYkwDg';

const GoogleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const TESTIMONIAL_SLIDES = [
  {
    id: 1,
    image: '/images/testimonial-video-parent.jpg',
    videoLabel: 'Watch Fatima’s Journey',
    quote: 'The warm motherly care and attentive teachers at Just Like Home made our son feel instantly safe and loved. After having tears on day one, he now runs through the villa doors with the biggest smile. The daily portfolio updates give our family complete peace of mind.',
    name: 'Fatima Al-Shamsi',
    role: 'Mother of Hamdan (3 yrs) • Villa 47 Settled Family',
    badge: '1:4 Ratio & Settling In'
  },
  {
    id: 2,
    image: '/images/testimonial-parent-mom.jpg',
    videoLabel: 'Watch Sarah’s Experience',
    quote: 'Finding a nursery that matches the warmth of home while rigorously implementing the British EYFS curriculum seemed impossible until we toured Just Like Home. The shaded outdoor garden and sensory classrooms are wonderful, and the staff treat my daughter as their own.',
    name: 'Sarah Jenkins',
    role: 'Mother of Chloe (2.5 yrs) • British Expat Family',
    badge: 'British EYFS & Outdoor Garden'
  }
];

const COMMUNITY_REVIEWS = [
  {
    name: 'Dr. Tariq & Laila Al-Nuaimi',
    role: 'Parents of Zayed (2 yrs) • Villa 47 Settled Family',
    badge: 'Verified Google Review',
    tag: 'Safe Campus & Clinic',
    text: 'Knowing there is an on-site pediatric nurse, registered doctor visits, and 24/7 CCTV surveillance in Villa 47 gave us unmatched reassurance. Truly exceptional care and loving teachers.',
    initials: 'TL',
    bg: '#ecfdf5',
    color: '#065f46'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Mother of Chloe (2.5 yrs) • British Expat Family',
    badge: 'Verified Google Review',
    tag: 'British EYFS & Garden',
    text: 'Finding a nursery that matches the warmth of home while rigorously implementing the British EYFS curriculum seemed impossible until we toured Just Like Home. The shaded outdoor garden and sensory rooms are wonderful.',
    initials: 'SJ',
    bg: '#eff6ff',
    color: '#1e40af'
  },
  {
    name: 'Aisha Mansoor',
    role: 'Mother of Noora (18 mos) • Toddler Nest Family',
    badge: 'Verified Google Review',
    tag: 'Toddler Nest Care',
    text: 'The educators helped us through gentle morning transitions and potty training. Noora is so much more confident and speaks both English and Arabic with excitement every single day.',
    initials: 'AM',
    bg: '#fdf2f8',
    color: '#9d174d'
  }
];

export default function ReviewsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Auto carousel rotation
  useEffect(() => {
    if (isVideoModalOpen) return;
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % TESTIMONIAL_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isVideoModalOpen]);

  const currentSlide = TESTIMONIAL_SLIDES[activeIdx];

  return (
    <section 
      id="reviews"
      className="testimonial-spotlight-section"
    >
      <div className="testimonial-spotlight-container">
        
        {/* Section Header */}
        <RevealOnScroll animation="from-top">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2rem, 4vw, 3rem) auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ffffff',
              color: '#006837',
              border: '2px solid rgba(0, 104, 55, 0.22)',
              borderRadius: '999px',
              padding: '0.45rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 14px rgba(0, 104, 55, 0.10)'
            }}>
              <Sparkles size={15} color="#006837" /> PARENT STORIES &amp; EXPERIENCES
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#0f172a',
              lineHeight: 1.18,
              marginBottom: '1rem'
            }}>
              Loved by Parents,{' '}
              <span style={{
                color: '#006837',
                display: 'inline-block'
              }}>
                Adored by Children
              </span>
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0
            }}>
              Real reflections and heartfelt reviews from families across Ajman &amp; Sharjah who call Just Like Home their child's second home.
            </p>
          </div>
        </RevealOnScroll>

        {/* Live Google Reviews Trust Card */}
        <RevealOnScroll animation="from-bottom" delay={60}>
          <div style={{
            maxWidth: '780px',
            margin: '0 auto clamp(2.25rem, 4.5vw, 3.25rem) auto',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '1.35rem 2rem',
            border: '1.5px solid rgba(0, 104, 55, 0.16)',
            boxShadow: '0 12px 32px rgba(0, 104, 55, 0.08), 0 2px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                flexShrink: 0
              }}>
                <GoogleIcon size={30} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    5.0
                  </span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={17} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    color: '#15803d',
                    backgroundColor: '#dcfce7',
                    padding: '3px 9px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    Verified Google Reviews
                  </span>
                </div>
                <p style={{ margin: '0.3rem 0 0', fontSize: '0.86rem', color: '#64748b', fontWeight: '500' }}>
                  Just Like Home Nursery • Villa 47, Al Rashidiya 2, Ajman
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href={GMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: '#006837',
                  color: '#ffffff',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: '800',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 104, 55, 0.25)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 104, 55, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 104, 55, 0.25)';
                }}
              >
                <span>Review Us on Google</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={GMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: '#f8fafc',
                  color: '#334155',
                  border: '1.5px solid #cbd5e1',
                  padding: '0.65rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                  e.currentTarget.style.borderColor = '#94a3b8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MapPin size={14} color="#ea580c" />
                <span>Google Maps Profile</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* FEATURED SPOTLIGHT TESTIMONIAL (Same Template: Left media from left, Right quote from right) */}
        <div className="testimonial-spotlight-wrap">
          
          {/* Left Media Box */}
          <RevealOnScroll animation="from-left" delay={120} style={{ flex: 1, minWidth: '300px' }}>
            <div className="testimonial-media-box">
              <img 
                src={currentSlide.image} 
                alt={currentSlide.name}
                className="testimonial-media-img"
              />
              
              {/* Glassmorphic Play Button */}
              <button 
                type="button"
                className="testimonial-play-btn"
                onClick={() => setIsVideoModalOpen(true)}
                title={currentSlide.videoLabel}
                aria-label={currentSlide.videoLabel}
              >
                <div className="testimonial-play-icon" />
              </button>
            </div>
          </RevealOnScroll>

          {/* Right Overlapping Green Quote Card */}
          <RevealOnScroll animation="from-right" delay={180} style={{ flex: 1, minWidth: '320px' }}>
            <div className="testimonial-card-green">
              <span className="testimonial-quote-icon" aria-hidden="true">
                “
              </span>

              <p className="testimonial-quote-text">
                {currentSlide.quote}
              </p>

              <div>
                <h4 className="testimonial-author-name">
                  {currentSlide.name}
                </h4>
                <p className="testimonial-author-role">
                  {currentSlide.role}
                </p>
              </div>
            </div>
          </RevealOnScroll>

        </div>

        {/* Pagination Dots Row */}
        <RevealOnScroll animation="from-bottom" delay={220}>
          <div className="testimonial-dots-row">
            {TESTIMONIAL_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`testimonial-dot ${idx === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                aria-label={`View testimonial by ${slide.name}`}
              />
            ))}
          </div>
        </RevealOnScroll>

        {/* Community Reviews Grid Below Spotlight (Directional Left, Bottom, Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: 'clamp(3rem, 6vw, 4.5rem)'
        }}>
          {COMMUNITY_REVIEWS.map((rev, i) => {
            const cardAnim = i === 0 ? 'from-left' : i === 2 ? 'from-right' : 'from-bottom';
            const cardDelay = 100 + i * 100;
            return (
              <RevealOnScroll key={i} animation={cardAnim} delay={cardDelay}>
                <div 
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '1.85rem',
                    border: '1.5px solid rgba(0, 104, 55, 0.12)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 104, 55, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div>
                    {/* Header: Google Icon + Rating + Tag */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <GoogleIcon size={16} />
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
                          ))}
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: '700',
                        color: '#006837',
                        backgroundColor: 'rgba(0, 104, 55, 0.08)',
                        padding: '3px 9px',
                        borderRadius: '8px'
                      }}>
                        {rev.tag}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '0.94rem',
                      color: '#334155',
                      lineHeight: 1.65,
                      margin: 0,
                      fontStyle: 'italic'
                    }}>
                      "{rev.text}"
                    </p>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1.1rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: rev.bg,
                        color: rev.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        flexShrink: 0
                      }}>
                        {rev.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: '800', fontSize: '0.94rem', color: '#0f172a', lineHeight: 1.2 }}>
                          {rev.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                          {rev.role}
                        </div>
                      </div>
                    </div>

                    <a 
                      href={GMB_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View review on Google"
                      style={{
                        color: '#006837',
                        textDecoration: 'none',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                        opacity: 0.85
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
                    >
                      <span>Google</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA Banner for Google Reviews */}
        <RevealOnScroll animation="from-bottom" delay={260}>
          <div style={{
            marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: 'clamp(1.2rem, 3.5vw, 1.75rem) clamp(1.1rem, 3.5vw, 2.25rem)',
            border: '1.5px solid rgba(0, 104, 55, 0.12)',
            boxShadow: '0 8px 28px rgba(0, 104, 55, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            textAlign: 'left',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', flexWrap: 'wrap', minWidth: 0 }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <GoogleIcon size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#0f172a' }}>
                  Are you a Just Like Home Parent?
                </h4>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.88rem', color: '#64748b' }}>
                  Your feedback helps other families across Ajman &amp; Sharjah discover our loving community.
                </p>
              </div>
            </div>

            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#006837',
                color: '#ffffff',
                padding: '0.75rem 1.6rem',
                borderRadius: '999px',
                fontSize: '0.88rem',
                fontWeight: '800',
                textDecoration: 'none',
                boxShadow: '0 6px 18px rgba(0, 104, 55, 0.28)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 104, 55, 0.38)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 104, 55, 0.28)';
              }}
            >
              <Star size={15} fill="#f59e0b" color="#f59e0b" />
              <span>Leave a Review on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </RevealOnScroll>

      </div>

      {/* Video Preview Modal */}
      {isVideoModalOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.82)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              backgroundColor: '#006837',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              color: '#ffffff',
              padding: '2.5rem'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.18)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>
              🎥 PARENT VIDEO SPOTLIGHT
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
              {currentSlide.name}
            </h3>
            <p style={{ color: 'rgba(209, 250, 229, 0.95)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {currentSlide.role}
            </p>

            <div style={{ borderRadius: '18px', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
              <img 
                src={currentSlide.image} 
                alt={currentSlide.name}
                style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.6, fontStyle: 'italic', color: '#ffffff', margin: 0 }}>
              "{currentSlide.quote}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
