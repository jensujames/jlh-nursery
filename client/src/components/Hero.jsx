import React, { useRef } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Award, 
  Clock, 
  MapPin, 
  Star,
  Users,
  Compass
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function Hero({ onBookVisitClick }) {
  const heroRef = useRef(null);
  const { progress } = useSectionScroll(heroRef);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
        background: 'radial-gradient(ellipse at top right, rgba(212, 175, 55, 0.12) 0%, rgba(253, 251, 247, 0) 60%), radial-gradient(ellipse at bottom left, rgba(123, 17, 39, 0.08) 0%, rgba(253, 251, 247, 0) 65%), #fdfbf7',
      }}
    >
      {/* Ambient decorative glow circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-8%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123, 17, 39, 0.12) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(45px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Compelling Copy & Conversion CTAs */}
          <div>
            {/* Tagline Pre-heading Pill */}
            <div className="animate-entrance-down" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge-maroon" style={{
                fontSize: '0.82rem',
                padding: '0.45rem 1rem',
                boxShadow: '0 2px 8px rgba(123, 17, 39, 0.08)',
                letterSpacing: '0.06em'
              }}>
                <Sparkles size={14} style={{ color: '#7b1127' }} />
                NURTURING • LEARNING • GROWING
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="hero-title animate-entrance-up delay-150" 
              style={{
                color: '#3d050f',
                marginBottom: '1.25rem',
                fontWeight: '800',
                lineHeight: '1.14'
              }}
            >
              Where Little Hearts <br />
              <span style={{
                background: 'linear-gradient(135deg, #7b1127 0%, #aa1e3d 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Feel at Home.
              </span>
            </h1>

            {/* Vision & Mission Grounded Subtitle */}
            <p 
              className="animate-entrance-up delay-200"
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: '#4a443e',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              At <strong>Just Like Home Nursery</strong> in Ajman, we don't just educate children — we nurture little hearts, build lifelong confidence, encourage natural curiosity, and create joyous memories that last a lifetime.
            </p>

            {/* High-Impact Conversion Buttons */}
            <div 
              className="animate-entrance-up delay-300"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem',
                alignItems: 'center'
              }}
            >
              <button
                onClick={onBookVisitClick}
                className="btn-primary"
                style={{
                  padding: '1rem 2.2rem',
                  fontSize: '1.02rem',
                  cursor: 'pointer'
                }}
              >
                <Calendar size={18} />
                <span>Book a Guided Visit</span>
              </button>

              <a
                href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20know%20more%20about%20your%20nursery%20and%20preschool%20programs%20in%20Ajman."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.02rem'
                }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div 
              className="animate-entrance-up delay-400"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(123, 17, 39, 0.12)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#fce7eb',
                  color: '#7b1127',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#3d050f' }}>EYFS British</div>
                  <div style={{ fontSize: '0.75rem', color: '#78716c' }}>Early Years Framework</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#fef3c7',
                  color: '#b45309',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#3d050f' }}>100% Safe</div>
                  <div style={{ fontSize: '0.75rem', color: '#78716c' }}>CCTV & Doctor Visits</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#e0f2fe',
                  color: '#0369a1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Heart size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#3d050f' }}>Motherly Care</div>
                  <div style={{ fontSize: '0.75rem', color: '#78716c' }}>Kind & Patient Team</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Masterpiece with Overlaid Floating Badges */}
          <div 
            className="perspective-1000"
            style={{ 
              position: 'relative',
              transform: `translateY(${progress * -15}px)`
            }}
          >
            {/* Main Visual Frame with ScrollCraft 3D perspective tilt */}
            <div style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(70, 7, 19, 0.25)',
              border: '6px solid #ffffff',
              backgroundColor: '#ffffff',
              transform: `rotateX(${(progress - 0.2) * 5}deg) rotateY(${-(progress - 0.2) * 4}deg) scale(${1 - progress * 0.04})`,
              transition: 'transform 0.15s ease-out'
            }}>
              <img 
                src="/images/hero.jpg" 
                alt="Happy children learning with teacher at Just Like Home Nursery Ajman" 
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                  transform: `scale(${1 + progress * 0.08})`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(70, 7, 19, 0.35) 0%, transparent 40%)'
              }} />

              {/* Bottom In-Image Badge */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#7b1127',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}>
                    <Heart size={20} fill="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#3d050f' }}>
                      Motherly Warmth & Trust
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#6b7280' }}>
                      Villa 47, Al Rashidiya 2, Ajman
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: '#eab308',
                  fontWeight: '700',
                  fontSize: '0.85rem'
                }}>
                  <Star size={16} fill="#eab308" />
                  <span style={{ color: '#1f2937' }}>4.9/5</span>
                </div>
              </div>
            </div>

            {/* Floating Floating Badge 1 - Top Left (ScrollCraft Multi-Tier Parallax Layer: Speed -0.6x) */}
            <div className="animate-float" style={{
              position: 'absolute',
              top: '-1.25rem',
              left: '-1.25rem',
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              padding: '0.85rem 1.25rem',
              boxShadow: '0 15px 35px rgba(70, 7, 19, 0.15)',
              border: '2px solid #fce7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              zIndex: 20,
              transform: `translate3d(0, ${progress * -35}px, 0)`,
              transition: 'transform 0.15s ease-out'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#7b1127',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#7b1127' }}>
                  Play-Based EYFS
                </div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                  Hands-on Exploration
                </div>
              </div>
            </div>

            {/* Floating Badge 2 - Bottom Right (ScrollCraft Multi-Tier Parallax Layer: Speed +0.8x) */}
            <div className="animate-float-delayed" style={{
              position: 'absolute',
              bottom: '4.5rem',
              right: '-1.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              padding: '0.85rem 1.25rem',
              boxShadow: '0 15px 35px rgba(212, 175, 55, 0.25)',
              border: '2px solid #fef3c7',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              zIndex: 20,
              transform: `translate3d(0, ${progress * 45}px, 0)`,
              transition: 'transform 0.15s ease-out'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#d4af37',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#854d0e' }}>
                  Full & Half Day
                </div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                  Flexible Timings
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Live Nursery Metric Counters */}
        <RevealOnScroll animation="fade-up" delay={150}>
          <div style={{
            marginTop: '4rem',
            backgroundColor: '#ffffff',
            borderRadius: '1.5rem',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(70, 7, 19, 0.05)',
            border: '1px solid rgba(123, 17, 39, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#7b1127',
                lineHeight: 1
              }}>
                100%
              </div>
              <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#3d050f', marginTop: '0.4rem' }}>
                Safety & CCTV Record
              </div>
              <div style={{ fontSize: '0.78rem', color: '#78716c' }}>Continuous monitored care</div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#d4af37',
                lineHeight: 1
              }}>
                1:4 / 1:8
              </div>
              <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#3d050f', marginTop: '0.4rem' }}>
                Individual Attention
              </div>
              <div style={{ fontSize: '0.78rem', color: '#78716c' }}>Low educator-to-child ratios</div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#7b1127',
                lineHeight: 1
              }}>
                12+
              </div>
              <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#3d050f', marginTop: '0.4rem' }}>
                Developmental Zones
              </div>
              <div style={{ fontSize: '0.78rem', color: '#78716c' }}>Sensory, outdoor, reading & clinic</div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#d4af37',
                lineHeight: 1
              }}>
                500+
              </div>
              <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#3d050f', marginTop: '0.4rem' }}>
                Happy Little Hearts
              </div>
              <div style={{ fontSize: '0.78rem', color: '#78716c' }}>Cherished nursery memories</div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
