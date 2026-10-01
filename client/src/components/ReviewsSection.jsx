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
  MessageCircle
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

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
    role: 'Parents of Zayed (2 yrs)',
    rating: 5,
    tag: 'Safe Campus & Clinic',
    text: 'Knowing there is an on-site pediatric nurse, registered doctor visits, and 24/7 CCTV surveillance in Villa 47 gave us unmatched reassurance. Truly exceptional care.'
  },
  {
    name: 'Aisha Mansoor',
    role: 'Mother of Noora (18 mos)',
    rating: 5,
    tag: 'Toddler Nest Care',
    text: 'The educators helped us through gentle potty training and morning transitions. Noora is so much more confident and speaks both English and Arabic with excitement.'
  },
  {
    name: 'Rahul & Priya Sharma',
    role: 'Parents of Vivaan (3.5 yrs)',
    rating: 5,
    tag: 'Preschool Readiness',
    text: 'Vivaan developed remarkable phonics awareness, numbers recognition, and empathy. The teachers truly treat each child like family.'
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
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
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

        {/* FEATURED SPOTLIGHT TESTIMONIAL (Left media from left, Right quote from right) */}
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
                    borderRadius: '22px',
                    padding: '1.75rem',
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
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 104, 55, 0.10)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={15} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
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
                      lineHeight: 1.6,
                      margin: 0,
                      fontStyle: 'italic'
                    }}>
                      "{rev.text}"
                    </p>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.98rem', color: '#0f172a' }}>
                      {rev.name}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      {rev.role}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

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
