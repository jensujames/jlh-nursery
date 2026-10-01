import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sparkles, ArrowRight, Eye, Heart, Compass } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function HomeMomentsPreview() {
  const [likes, setLikes] = useState({ 1: 42, 2: 38, 3: 56, 4: 49 });
  const [userLiked, setUserLiked] = useState({});

  const handleLike = (id, e) => {
    e.stopPropagation();
    setUserLiked(prev => {
      const isCurrentlyLiked = !!prev[id];
      setLikes(l => ({
        ...l,
        [id]: isCurrentlyLiked ? l[id] - 1 : l[id] + 1
      }));
      return { ...prev, [id]: !isCurrentlyLiked };
    });
  };

  const moments = [
    {
      id: 1,
      image: '/images/hero.jpg',
      title: 'Purposeful Play & Blocks',
      caption: 'Fine motor development with wooden tactile shapes',
      tag: 'Creative Play',
      badgeColor: '#ff6b6b',
      tilt: '-1.5deg',
      pinColor: '#ff6b6b'
    },
    {
      id: 2,
      image: '/images/classroom.jpg',
      title: 'Sunlit Reading Teepee',
      caption: 'Quiet story time and phonics picture book discovery',
      tag: 'Cozy Library',
      badgeColor: '#0284c7',
      tilt: '1.8deg',
      pinColor: '#0284c7'
    },
    {
      id: 3,
      image: '/images/outdoor.jpg',
      title: 'Shaded Villa Garden',
      caption: 'Fresh-air gross motor fun under safe UV canopies',
      tag: 'Outdoor Adventure',
      badgeColor: '#059669',
      tilt: '-1.2deg',
      pinColor: '#059669'
    },
    {
      id: 4,
      image: '/images/hero.jpg',
      title: 'Sensory Investigation',
      caption: 'Hands-on discovery fostering early curiosity',
      tag: 'EYFS Sensory',
      badgeColor: '#d97706',
      tilt: '1.5deg',
      pinColor: '#d97706'
    }
  ];

  return (
    <section 
      id="gallery" 
      style={{
        position: 'relative',
        padding: '6rem 1rem 6.5rem 1rem',
        background: 'radial-gradient(ellipse at top, #faf7ef 0%, #ffffff 60%, #faf5ea 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Whimsical Pinterest Doodle Circles */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '2%',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '8%',
        right: '2%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ffffff',
              color: '#7e22ce',
              border: '2px solid rgba(147, 51, 234, 0.25)',
              borderRadius: '999px',
              padding: '0.45rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 14px rgba(147, 51, 234, 0.10)'
            }}>
              <Camera size={15} color="#7e22ce" /> CAMPUS MOMENTS &amp; DAILY SMILES
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: '#2e0d12',
              lineHeight: 1.18,
              marginBottom: '1rem'
            }}>
              A Glimpse into Our{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7e22ce 0%, #a855f7 50%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Joyful Days
              </span>
            </h2>

            <p style={{
              fontSize: '1.08rem',
              color: '#5a3d44',
              lineHeight: 1.65,
              margin: 0
            }}>
              Every day at Villa 47 brings genuine giggles, hands-on sensory exploration, friendship circles, and proud milestones.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4-Photo Pinterest/Polaroid Modern Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {moments.map((item, idx) => {
            const isLiked = !!userLiked[item.id];
            return (
              <RevealOnScroll key={item.id} animation="fade-up" delay={idx * 80}>
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '1.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.78)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    padding: '0.85rem 0.85rem 1.25rem 0.85rem',
                    boxShadow: '0 14px 34px rgba(74, 14, 26, 0.08), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    transform: `rotate(${item.tilt})`,
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) rotate(0deg) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 24px 50px rgba(74, 14, 26, 0.16), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                    e.currentTarget.style.borderColor = item.badgeColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${item.tilt}) scale(1)`;
                    e.currentTarget.style.boxShadow = '0 14px 34px rgba(74, 14, 26, 0.08), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                  }}
                >
                  {/* Decorative Washi Tape / Pin Top Sticker */}
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '65px',
                    height: '20px',
                    backgroundColor: 'rgba(254, 240, 138, 0.85)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.10)',
                    zIndex: 5,
                    border: '1px dashed rgba(202, 138, 4, 0.35)',
                    borderRadius: '2px'
                  }} />

                  {/* Photo Container */}
                  <div style={{
                    position: 'relative',
                    borderRadius: '1.15rem',
                    overflow: 'hidden',
                    aspectRatio: '4 / 3',
                    marginBottom: '1rem',
                    backgroundColor: '#f5f5f4'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                    />

                    {/* Tag Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      zIndex: 3
                    }}>
                      <span style={{
                        backgroundColor: item.badgeColor,
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: '800',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '999px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.22)',
                        letterSpacing: '0.03em'
                      }}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Like Button on Photo */}
                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      title="Cheer this moment"
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        zIndex: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(6px)',
                        border: 'none',
                        borderRadius: '999px',
                        padding: '0.35rem 0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                        transition: 'all 0.2s ease',
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        color: isLiked ? '#e11d48' : '#4b5563'
                      }}
                    >
                      <Heart size={14} fill={isLiked ? '#e11d48' : 'none'} color={isLiked ? '#e11d48' : '#6b7280'} />
                      <span>{likes[item.id]}</span>
                    </button>
                  </div>

                  {/* Caption */}
                  <div style={{ padding: '0 0.4rem' }}>
                    <h4 style={{
                      color: '#2e0d12',
                      fontSize: '1.15rem',
                      fontWeight: '800',
                      margin: '0 0 0.3rem 0',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.84rem',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Gallery Portal CTA Card */}
        <RevealOnScroll animation="fade-up" delay={150}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.78)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '2rem',
            padding: '1.8rem 2.5rem',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 16px 36px rgba(74, 14, 26, 0.06), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '1.15rem',
                backgroundColor: '#fffbeb',
                border: '2px solid rgba(201, 168, 76, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a84c',
                boxShadow: '0 6px 14px rgba(201, 168, 76, 0.18)'
              }}>
                <Sparkles size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', fontWeight: '900', color: '#2e0d12' }}>
                  Want to explore all 50+ photos of classrooms, splash pad &amp; garden?
                </h4>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#5a3d44' }}>
                  Visit our dedicated visual gallery sorted by outdoor play, learning suites, and nursery milestones.
                </p>
              </div>
            </div>

            <Link
              to="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.8rem 1.8rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #721024 0%, #5e1020 100%)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '800',
                fontSize: '0.92rem',
                boxShadow: '0 6px 18px rgba(114, 16, 36, 0.30)',
                transition: 'all 0.2s ease'
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
              <span>View Full Photo Gallery</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
