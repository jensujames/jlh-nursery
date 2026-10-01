import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Clock, 
  Globe2, 
  ArrowRight, 
  Sparkles,
  Award,
  Users,
  CheckCircle2,
  ThumbsUp
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import StickyParallaxSection from './StickyParallaxSection';

export default function HomeCorePillars() {
  const [likedPillars, setLikedPillars] = useState({});

  const toggleLike = (idx) => {
    setLikedPillars(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const pillars = [
    {
      icon: Heart,
      title: 'Motherly Warmth & 1:4 Ratio',
      subtitle: 'Nurturing Little Hearts',
      desc: 'Our gentle educators hold every child through morning tears, cheer every baby step, and know each child like family.',
      stat: '1:4',
      statLabel: 'Low Carer Ratio',
      color: '#e11d48',
      bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 241, 242, 0.92) 100%)',
      border: 'rgba(225, 29, 72, 0.28)',
      glow: 'rgba(225, 29, 72, 0.22)',
      badgeBg: '#ffe4e6',
      badgeColor: '#9f1239'
    },
    {
      icon: ShieldCheck,
      title: 'Ultra-Safe Villa 47 Campus',
      subtitle: 'Pure Peace of Mind',
      desc: 'Secured gated access, comprehensive CCTV coverage, HEPA air filtration, child-height furnishings, and an on-site licensed nurse.',
      stat: '100%',
      statLabel: 'CCTV & Clinic',
      color: '#059669',
      bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.92) 100%)',
      border: 'rgba(5, 150, 105, 0.28)',
      glow: 'rgba(5, 150, 105, 0.22)',
      badgeBg: '#dcfce7',
      badgeColor: '#14532d'
    },
    {
      icon: Clock,
      title: '7:00 AM – 6:00 PM Daycare',
      subtitle: 'For Working Families',
      desc: 'Flexible drop-off and pickup routines tailored for working parents across Ajman and Sharjah, with warm meals and restful nap pods.',
      stat: '11 Hrs',
      statLabel: 'Flexible Timings',
      color: '#0284c7',
      bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.92) 100%)',
      border: 'rgba(2, 132, 199, 0.28)',
      glow: 'rgba(2, 132, 199, 0.22)',
      badgeBg: '#e0f2fe',
      badgeColor: '#075985'
    },
    {
      icon: Globe2,
      title: 'Trilingual Language Growth',
      subtitle: 'English, Arabic & French',
      desc: 'Daily interactive stories, phonics games, Arabic cultural songs, and French rhymes encouraging natural cognitive dexterity.',
      stat: '3',
      statLabel: 'Early Languages',
      color: '#d97706',
      bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 252, 232, 0.92) 100%)',
      border: 'rgba(217, 119, 6, 0.28)',
      glow: 'rgba(217, 119, 6, 0.22)',
      badgeBg: '#fef3c7',
      badgeColor: '#78350f'
    }
  ];

  const botanicalFloatingElements = [
    {
      top: '10%',
      left: '4%',
      size: '60px',
      speed: 0.32,
      rotateDelta: 45,
      opacity: 0.7,
      content: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 4px 12px rgba(5, 150, 105, 0.25))' }}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      )
    },
    {
      top: '18%',
      right: '6%',
      size: '50px',
      speed: -0.25,
      rotateDelta: -30,
      opacity: 0.75,
      content: <Sparkles size={38} color="#d97706" style={{ filter: 'drop-shadow(0 4px 12px rgba(217, 119, 6, 0.3))' }} />
    },
    {
      top: '58%',
      right: '5%',
      size: '52px',
      speed: 0.38,
      rotateDelta: 25,
      opacity: 0.75,
      content: <Heart size={34} color="#e11d48" fill="#e11d48" style={{ filter: 'drop-shadow(0 4px 12px rgba(225, 29, 72, 0.25))' }} />
    },
    {
      top: '72%',
      left: '5%',
      size: '48px',
      speed: -0.35,
      rotateDelta: -20,
      opacity: 0.7,
      content: (
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.35)'
        }} />
      )
    }
  ];

  return (
    <StickyParallaxSection 
      id="about" 
      bgImage="/images/bg-botanical.jpg"
      bgColor="#f7faf7"
      overlayGradient="linear-gradient(180deg, rgba(247, 250, 247, 0.88) 0%, rgba(255, 255, 255, 0.82) 50%, rgba(247, 250, 247, 0.90) 100%)"
      floatingElements={botanicalFloatingElements}
      style={{
        padding: '6rem 1rem 6.5rem 1rem'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <RevealOnScroll animation="from-top">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ffffff',
              color: '#92400e',
              border: '2px solid rgba(217, 119, 6, 0.28)',
              borderRadius: '999px',
              padding: '0.45rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 14px rgba(217, 119, 6, 0.10)'
            }}>
              <Heart size={15} color="#d97706" fill="#d97706" /> WHY FAMILIES CHOOSE JUST LIKE HOME
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: '#0f172a',
              lineHeight: 1.18,
              marginBottom: '1rem'
            }}>
              More Than a Nursery —{' '}
              <span style={{
                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 45%, #ca8a04 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                A True Second Home
              </span>
            </h2>

            <p style={{
              fontSize: '1.08rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0
            }}>
              We blend motherly compassion with British early years excellence to nurture confident, happy, and well-rounded children.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Pillars Grid with Directional Entrances (Left, Bottom, Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.85rem',
          marginBottom: '3.5rem'
        }}>
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isLiked = !!likedPillars[idx];
            const pillarAnim = idx === 0 ? 'from-left' : idx === 3 ? 'from-right' : 'from-bottom';
            const pillarDelay = idx === 0 ? 50 : idx === 1 ? 120 : idx === 2 ? 190 : 260;
            return (
              <RevealOnScroll key={pillar.title} animation={pillarAnim} delay={pillarDelay}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.78)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderRadius: '2rem',
                    padding: '2.25rem 1.85rem 2rem 1.85rem',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                    e.currentTarget.style.boxShadow = `0 24px 50px ${pillar.glow}, 0 2px 12px rgba(255, 255, 255, 0.9) inset`;
                    e.currentTarget.style.borderColor = pillar.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                  }}
                >
                  <div>
                    {/* Icon, Stat & Like Button */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.4rem'
                    }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '1.15rem',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pillar.color,
                        border: `2px solid ${pillar.border}`,
                        boxShadow: `0 8px 18px ${pillar.glow}`
                      }}>
                        <IconComponent size={28} strokeWidth={2.3} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.3rem',
                            fontWeight: '900',
                            color: pillar.color,
                            lineHeight: 1
                          }}>
                            {pillar.stat}
                          </div>
                          <div style={{
                            fontSize: '0.72rem',
                            fontWeight: '800',
                            color: '#78716c',
                            textTransform: 'uppercase'
                          }}>
                            {pillar.statLabel}
                          </div>
                        </div>

                        {/* Interactive Heart Button */}
                        <button
                          onClick={() => toggleLike(idx)}
                          title="Love this feature"
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '50%',
                            border: isLiked ? `1.5px solid ${pillar.color}` : '1.5px solid rgba(0,0,0,0.08)',
                            backgroundColor: isLiked ? pillar.badgeBg : '#ffffff',
                            color: isLiked ? pillar.color : '#a8a29e',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            padding: 0
                          }}
                        >
                          <Heart size={16} fill={isLiked ? pillar.color : 'none'} />
                        </button>
                      </div>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.32rem',
                      fontWeight: '900',
                      color: '#0f172a',
                      marginBottom: '0.45rem',
                      lineHeight: 1.25
                    }}>
                      {pillar.title}
                    </h3>

                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      color: pillar.color,
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {pillar.subtitle}
                    </div>

                    <p style={{
                      fontSize: '0.94rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      margin: 0
                    }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Interactive Navigation Link Banner */}
        <RevealOnScroll animation="fade-up" delay={150}>
          <div 
            className="core-pillars-banner-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              padding: '1.4rem 2.25rem',
              border: '2px solid rgba(21, 128, 61, 0.2)',
              boxShadow: '0 12px 30px rgba(21, 128, 61, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem'
            }}
          >
            <div className="core-pillars-banner-content" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#15803d'
              }}>
                <Sparkles size={22} />
              </span>
              <div>
                <div style={{ fontWeight: '900', color: '#0f172a', fontSize: '1.05rem' }}>
                  Want to learn more about our philosophy and meet the educators?
                </div>
                <div style={{ fontSize: '0.88rem', color: '#57534e' }}>
                  Discover our founding story, teacher qualifications, and 7 core parent promises.
                </div>
              </div>
            </div>

            <Link
              to="/about-us"
              className="core-pillars-banner-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.75rem 1.6rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '800',
                fontSize: '0.9rem',
                boxShadow: '0 6px 18px rgba(21, 128, 61, 0.3)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Meet Our Team &amp; Values</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </StickyParallaxSection>
  );
}
