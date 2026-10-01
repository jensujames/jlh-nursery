import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Castle, 
  Palette, 
  SunMedium, 
  Calculator, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Clock,
  Heart,
  Layers,
  Check
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import StickyParallaxSection from './StickyParallaxSection';

export default function HomeQuickExplore() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [likes, setLikes] = useState({
    programs: 45,
    eyfs: 62,
    facilities: 39,
    activities: 58,
    camps: 44,
    admissions: 51
  });
  const [userLiked, setUserLiked] = useState({});

  const handleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setUserLiked(prev => {
      const isLiked = !!prev[id];
      setLikes(l => ({ ...l, [id]: isLiked ? l[id] - 1 : l[id] + 1 }));
      return { ...prev, [id]: !isLiked };
    });
  };

  const pathways = [
    {
      id: 'programs',
      category: 'programs',
      title: 'Academic Programs',
      age: '45 Days – 4 Years',
      desc: 'Nurturing infant nests, curious toddler pods, and school-readiness preschool curriculum with loving 1:4 attention.',
      tags: ['Infant Care', 'Toddler Nest', 'Preschool Prep'],
      path: '/programs',
      theme: {
        accent: '#ff6b6b',
        secondary: '#ff8e53',
        bgGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 240, 0.95) 100%)',
        badgeBg: '#ffe3e3',
        badgeText: '#c92a2a',
        buttonBg: 'linear-gradient(135deg, #ff6b6b 0%, #fa5252 100%)',
        border: 'rgba(255, 107, 107, 0.35)',
        glow: 'rgba(255, 107, 107, 0.25)'
      },
      icon: GraduationCap
    },
    {
      id: 'eyfs',
      category: 'learning',
      title: 'British EYFS Framework',
      age: 'UK Standard',
      desc: 'Joyful child-led discovery and sensory investigations mapped across all 7 early developmental milestones.',
      tags: ['7 Core Areas', 'Early Phonics', 'Sensory Play'],
      path: '/eyfs-learning',
      theme: {
        accent: '#0284c7',
        secondary: '#38bdf8',
        bgGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)',
        badgeBg: '#e0f2fe',
        badgeText: '#0369a1',
        buttonBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        border: 'rgba(2, 132, 199, 0.35)',
        glow: 'rgba(2, 132, 199, 0.25)'
      },
      icon: BookOpen
    },
    {
      id: 'facilities',
      category: 'campus',
      title: 'Villa 47 Campus & Suites',
      age: 'Al Rashidiya 2',
      desc: 'Sunlit detached villa with shaded outdoor play, splash water station, indoor soft gym, and on-site clinic.',
      tags: ['CCTV Monitored', 'Shaded Garden', 'Sensory Room'],
      path: '/facilities',
      theme: {
        accent: '#059669',
        secondary: '#34d399',
        bgGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.95) 100%)',
        badgeBg: '#dcfce7',
        badgeText: '#047857',
        buttonBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        border: 'rgba(5, 150, 105, 0.35)',
        glow: 'rgba(5, 150, 105, 0.25)'
      },
      icon: Castle
    },
    {
      id: 'activities',
      category: 'learning',
      title: 'Daily Activities & Rhythm',
      age: 'Hands-On Joy',
      desc: 'Messy art, junior cooking workshops, music & movement, early STEM discovery, and bilingual storytelling every day.',
      tags: ['Messy Play', 'Junior Chefs', 'Music & STEM'],
      path: '/nursery-activities',
      theme: {
        accent: '#d97706',
        secondary: '#fbbf24',
        bgGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 252, 232, 0.95) 100%)',
        badgeBg: '#fef3c7',
        badgeText: '#b45309',
        buttonBg: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
        border: 'rgba(217, 119, 6, 0.35)',
        glow: 'rgba(217, 119, 6, 0.25)'
      },
      icon: Palette
    },
    {
      id: 'camps',
      category: 'programs',
      title: 'Holiday Camps & Care',
      age: 'Extended 7am – 6pm',
      desc: 'Exciting winter, spring & summer theme adventures plus extended daycare flexibility for working parents.',
      tags: ['Seasonal Camps', 'Flexible Hours', 'Healthy Meals'],
      path: '/camps',
      theme: {
        accent: '#7c3aed',
        secondary: '#a78bfa',
        bgGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 245, 255, 0.95) 100%)',
        badgeBg: '#ede9fe',
        badgeText: '#6d28d9',
        buttonBg: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        border: 'rgba(124, 58, 237, 0.35)',
        glow: 'rgba(124, 58, 237, 0.25)'
      },
      icon: SunMedium
    },
    {
      id: 'admissions',
      category: 'campus',
      title: 'Admissions & Tuition',
      age: 'Term Fees & Steps',
      desc: 'Transparent tuition rates, simple 3-step enrollment, sibling discounts, and hassle-free registration guidance.',
      tags: ['Transparent Fees', '3-Step Register', 'Tour Booking'],
      path: '/admissions',
      theme: {
        accent: '#721024',
        secondary: '#c9a84c',
        bgGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 242, 242, 0.95) 100%)',
        badgeBg: '#ffe4e6',
        badgeText: '#881337',
        buttonBg: 'linear-gradient(135deg, #721024 0%, #5e1020 100%)',
        border: 'rgba(114, 16, 36, 0.35)',
        glow: 'rgba(114, 16, 36, 0.25)'
      },
      icon: Calculator
    }
  ];

  const categories = [
    { id: 'all', label: 'All Pathways (6)' },
    { id: 'programs', label: 'Ages & Camps' },
    { id: 'learning', label: 'EYFS & Activities' },
    { id: 'campus', label: 'Villa 47 & Admissions' }
  ];

  const filteredPathways = activeCategory === 'all' 
    ? pathways 
    : pathways.filter(p => p.category === activeCategory);

  const doodlesFloatingElements = [
    {
      top: '12%',
      right: '6%',
      size: '54px',
      speed: 0.35,
      rotateDelta: 20,
      opacity: 0.75,
      content: <Sparkles size={40} color="#ff6b6b" style={{ filter: 'drop-shadow(0 4px 10px rgba(255, 107, 107, 0.3))' }} />
    },
    {
      top: '28%',
      left: '4%',
      size: '60px',
      speed: -0.25,
      rotateDelta: -18,
      opacity: 0.7,
      content: <GraduationCap size={44} color="#0284c7" style={{ filter: 'drop-shadow(0 4px 12px rgba(2, 132, 199, 0.25))' }} />
    },
    {
      top: '65%',
      right: '5%',
      size: '55px',
      speed: 0.3,
      rotateDelta: 28,
      opacity: 0.7,
      content: <Palette size={38} color="#a855f7" style={{ filter: 'drop-shadow(0 4px 12px rgba(168, 85, 247, 0.25))' }} />
    },
    {
      top: '78%',
      left: '5%',
      size: '50px',
      speed: -0.28,
      rotateDelta: -25,
      opacity: 0.7,
      content: <SunMedium size={40} color="#eab308" style={{ filter: 'drop-shadow(0 4px 12px rgba(234, 179, 8, 0.3))' }} />
    }
  ];

  return (
    <StickyParallaxSection 
      id="programs" 
      bgImage="/images/bg-doodles.jpg"
      bgColor="#fffdfa"
      overlayGradient="linear-gradient(180deg, rgba(255, 253, 250, 0.90) 0%, rgba(255, 250, 245, 0.88) 50%, rgba(255, 255, 255, 0.92) 100%)"
      floatingElements={doodlesFloatingElements}
      style={{
        padding: '6rem 1rem 6.5rem 1rem'
      }}
    >
      {/* Decorative ambient color spots */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <RevealOnScroll animation="from-top">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ffffff',
              color: '#be123c',
              border: '2px solid rgba(225, 29, 72, 0.25)',
              borderRadius: '999px',
              padding: '0.45rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 14px rgba(225, 29, 72, 0.10)'
            }}>
              <Sparkles size={15} color="#e11d48" /> EXPLORE JUST LIKE HOME NURSERY
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: '#0f172a',
              lineHeight: 1.18,
              marginBottom: '1rem'
            }}>
              Everything Your Little One Needs,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #f59e0b 50%, #0284c7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Under One Loving Roof
              </span>
            </h2>

            <p style={{
              fontSize: '1.08rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0
            }}>
              Select any pathway below to discover our specialized programs, British curriculum, villa campus, and admissions details.
            </p>
          </div>
        </RevealOnScroll>

        {/* Pinterest / Dribbble-Style Interactive Category Pills */}
        <RevealOnScroll animation="from-top" delay={100}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}>
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    border: isSelected ? '2px solid #721024' : '1.5px solid rgba(114, 16, 36, 0.15)',
                    backgroundColor: isSelected ? '#721024' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#4a0e1a',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    boxShadow: isSelected 
                      ? '0 6px 18px rgba(114, 16, 36, 0.25)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#c9a84c';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.15)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSelected && <Check size={14} />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* 6 Colorful Gateway Cards (Alternating Left, Bottom, Right Smooth Entrances) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredPathways.map((item, idx) => {
            const IconComponent = item.icon;
            const tilts = ['-0.8deg', '0.9deg', '-0.6deg', '0.8deg', '-0.9deg', '0.7deg'];
            const cardTilt = tilts[idx % tilts.length];
            const direction = idx % 3 === 0 ? 'from-left' : idx % 3 === 1 ? 'from-bottom' : 'from-right';

            return (
              <RevealOnScroll key={item.id} animation={direction} delay={Math.min(idx * 75, 250)}>
                <div 
                  className="interactive-path-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '2rem',
                    padding: '2.25rem 2rem 2rem 2rem',
                    border: '1.5px solid rgba(226, 232, 240, 0.95)',
                    boxShadow: '0 16px 36px rgba(15, 23, 42, 0.05), 0 2px 8px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'visible',
                    transform: `rotate(${cardTilt})`,
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.01) rotate(0deg)';
                    e.currentTarget.style.boxShadow = `0 24px 50px ${item.theme.glow}, 0 2px 12px rgba(255, 255, 255, 0.9) inset`;
                    e.currentTarget.style.borderColor = item.theme.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateY(0) scale(1) rotate(${cardTilt})`;
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(15, 23, 42, 0.05), 0 2px 8px rgba(0, 0, 0, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.95)';
                  }}
                >
                  {/* Whimsical Washi Tape Strip at Top Center */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-1deg)',
                    width: '68px',
                    height: '20px',
                    backgroundColor: 'rgba(254, 240, 138, 0.85)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                    zIndex: 10,
                    borderRadius: '2px',
                    backdropFilter: 'blur(2px)'
                  }} />

                  {/* Decorative Color Bar at Top */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '1.5rem',
                    right: '1.5rem',
                    height: '4px',
                    borderRadius: '0 0 4px 4px',
                    background: `linear-gradient(90deg, ${item.theme.accent}, ${item.theme.secondary})`
                  }} />

                  <div>
                    {/* Top Row: Glowing Orb Icon + Age Badge & Heart Like Counter */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.35rem',
                      marginTop: '0.35rem'
                    }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '1.15rem',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${item.theme.border}`,
                        boxShadow: `0 10px 24px ${item.theme.glow}`,
                        color: item.theme.accent,
                        transition: 'transform 0.3s ease'
                      }}>
                        <IconComponent size={28} strokeWidth={2.3} />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span style={{
                          backgroundColor: item.theme.badgeBg,
                          color: item.theme.badgeText,
                          fontSize: '0.78rem',
                          fontWeight: '800',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          letterSpacing: '0.02em',
                          display: 'inline-block',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                        }}>
                          {item.age}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => handleLike(item.id, e)}
                          title="Like this pathway"
                          style={{
                            border: userLiked[item.id] ? '1.5px solid #f43f5e' : '1.5px solid #e2e8f0',
                            backgroundColor: userLiked[item.id] ? '#fff1f2' : '#ffffff',
                            color: userLiked[item.id] ? '#e11d48' : '#94a3b8',
                            borderRadius: '999px',
                            padding: '0.32rem 0.65rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            fontSize: '0.78rem',
                            fontWeight: '800',
                            cursor: 'pointer',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxShadow: userLiked[item.id] ? '0 4px 12px rgba(244, 63, 94, 0.2)' : '0 2px 6px rgba(0,0,0,0.04)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <Heart 
                            size={13} 
                            fill={userLiked[item.id] ? '#e11d48' : 'none'} 
                            color={userLiked[item.id] ? '#e11d48' : '#94a3b8'} 
                          />
                          <span>{likes[item.id]}</span>
                        </button>
                      </div>
                    </div>

                    {/* Category Uppercase Subtitle */}
                    <div style={{
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: item.theme.accent,
                      marginBottom: '0.35rem'
                    }}>
                      {item.category === 'programs' ? 'NURTURING LEARNING' : item.category === 'learning' ? 'EARLY YEARS EXCELLENCE' : 'VILLA 47 CAMPUS'}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.42rem',
                      fontWeight: '900',
                      color: '#0f172a',
                      marginBottom: '0.65rem',
                      lineHeight: 1.25
                    }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.94rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      marginBottom: '1.4rem'
                    }}>
                      {item.desc}
                    </p>

                    {/* Pill Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '1.85rem'
                    }}>
                      {item.tags.map(tag => (
                        <span 
                          key={tag}
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: '700',
                            backgroundColor: '#ffffff',
                            color: '#4a0e1a',
                            padding: '0.25rem 0.7rem',
                            borderRadius: '8px',
                            border: `1px solid ${item.theme.border}`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <Link
                    to={item.path}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '0.8rem 1.25rem',
                      borderRadius: '1rem',
                      background: item.theme.buttonBg,
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: '800',
                      fontSize: '0.92rem',
                      boxShadow: `0 6px 16px ${item.theme.glow}`,
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
                    <span>Discover Details</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </StickyParallaxSection>
  );
}
