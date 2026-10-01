import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function PageHeader({ 
  badge = "Learning made joyful",
  title = "Big Ideas Start With Little Minds", 
  subtitle = "Fun, engaging lessons designed to help children learn, explore, and grow with confidence.", 
  onBookVisitClick,
  image = "/images/hero.jpg",
  imageAlt = "Learning and development at Just Like Home Nursery Ajman",
  primaryCtaText = "Explore Programs",
  secondaryCtaText = "See How It Works",
  cardProgress = {
    label: "Today's Progress",
    subject: "Math",
    status: "85% complete",
    percentage: 85
  },
  cardGreatJob = {
    title: "Great Job! 🎉",
    subtitle: "3 lessons completed"
  },
  cardNextLesson = {
    label: "Next Lesson",
    subject: "Science",
    topic: "The Solar System"
  },
  // Backward compatibility
  breadcrumbs,
  floatingTag,
  secondaryTag,
  cubes,
  highlights,
  bgImage
}) {
  const heroImage = image || bgImage || "/images/hero.jpg";

  // Parse title into multi-color words matching reference design
  const renderFormattedTitle = () => {
    if (typeof title !== 'string') return title;

    const words = title.trim().split(' ');
    if (words.length <= 2) {
      return (
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <span style={{ color: '#1e293b' }}>{words[0]} </span>
          <span style={{ color: '#f97316' }}>{words[1] || ''}</span>
          <SunburstRays />
        </span>
      );
    }

    // Split words: main leading words in deep navy, then last 2 highlighted in orange & sky blue
    const lastWord = words[words.length - 1];
    const secondLastWord = words[words.length - 2];
    const leadingWords = words.slice(0, words.length - 2).join(' ');

    return (
      <>
        <span>{leadingWords} </span>
        <span style={{ color: '#f97316' }}>{secondLastWord} </span>
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <span style={{ color: '#0284c7' }}>{lastWord}</span>
          <SunburstRays />
        </span>
      </>
    );
  };

  return (
    <div 
      className="jlh-hero-banner"
      style={{
        position: 'relative',
        backgroundColor: '#fffbf7',
        paddingTop: '3.75rem',
        paddingBottom: '4.75rem',
        overflow: 'hidden',
        borderBottomRightRadius: '70px',
        borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
        minHeight: '500px'
      }}
    >
      {/* 1. Right-Half Background Image — Focused prominently on the right half side */}
      <div 
        className="jlh-hero-right-bg"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '58%',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <img 
          src={heroImage}
          alt={imageAlt}
          loading="eager"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/hero.jpg';
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block'
          }}
        />

        {/* Seamless Soft Left-Edge Fade from right-half photo into left pastel background */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #fffbf7 0%, rgba(255, 251, 247, 0.90) 8%, rgba(255, 251, 247, 0.40) 24%, rgba(255, 251, 247, 0.05) 42%, transparent 58%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* 3. Subtle Ambient Pastel Glow Orbs — Light, soft & airy without color thickness */}
      {/* Top-Left Sky Blue Soft Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-25px',
          left: '-25px',
          width: '150px',
          height: '150px',
          background: '#bae6fd',
          borderRadius: '50% 60% 40% 70% / 60% 40% 70% 50%',
          opacity: 0.38,
          filter: 'blur(16px)',
          pointerEvents: 'none',
          zIndex: 2
        }}
        aria-hidden="true"
      />

      {/* Bottom-Left Mint Green Soft Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-35px',
          left: '-20px',
          width: '140px',
          height: '140px',
          background: '#bbf7d0',
          borderRadius: '60% 40% 70% 50% / 50% 70% 40% 60%',
          opacity: 0.38,
          filter: 'blur(16px)',
          pointerEvents: 'none',
          zIndex: 2
        }}
        aria-hidden="true"
      />

      {/* Bottom-Center Peach Soft Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '32%',
          width: '85px',
          height: '60px',
          background: '#fecdd3',
          borderRadius: '50%',
          transform: 'rotate(-25deg)',
          opacity: 0.35,
          filter: 'blur(14px)',
          pointerEvents: 'none',
          zIndex: 2
        }}
        aria-hidden="true"
      />

      {/* Center-Right Warm Yellow Soft Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '50px',
          right: '50%',
          width: '100px',
          height: '75px',
          background: '#fef08a',
          borderRadius: '50%',
          transform: 'rotate(20deg)',
          opacity: 0.35,
          filter: 'blur(14px)',
          pointerEvents: 'none',
          zIndex: 2
        }}
        aria-hidden="true"
      />

      {/* 4. Foreground Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* ================= LEFT COLUMN ================= */}
          <RevealOnScroll animation="from-left" duration={700}>
            <div>
              {/* Premium Frosted Glass Pill Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: '#721024',
                    padding: '6px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: '700',
                    border: '1px solid rgba(201, 168, 76, 0.38)',
                    boxShadow: '0 4px 14px rgba(114, 16, 36, 0.06)'
                  }}
                >
                  {/* Sun Icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" fill="#f59e0b" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                  {badge}
                </span>
              </div>

              {/* Bold Rounded Display Heading */}
              <h1 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1.14,
                  letterSpacing: '-0.02em',
                  color: '#1e293b',
                  marginBottom: '1.25rem'
                }}
              >
                {renderFormattedTitle()}
              </h1>

              {/* Subtitle Description */}
              <p 
                style={{
                  fontSize: 'clamp(1.02rem, 1.25vw, 1.15rem)',
                  color: '#475569',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  maxWidth: '490px'
                }}
              >
                {subtitle}
              </p>

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {/* Primary Button: Honey Gold Pill with Sheen */}
                <button
                  onClick={onBookVisitClick}
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#1e1b4b',
                    fontWeight: '800',
                    fontSize: '0.96rem',
                    padding: '0.88rem 1.85rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 24px rgba(217, 119, 6, 0.28)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(217, 119, 6, 0.38)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(217, 119, 6, 0.28)';
                  }}
                >
                  <span>{primaryCtaText}</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </button>

                {/* Secondary Button: Frosted Glass Pill with Circular Play Icon */}
                <a
                  href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20am%20interested%20in%20learning%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    color: '#1e293b',
                    fontWeight: '700',
                    fontSize: '0.94rem',
                    padding: '0.82rem 1.65rem',
                    borderRadius: '9999px',
                    border: '1.5px solid rgba(114, 16, 36, 0.14)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 14px rgba(114, 16, 36, 0.05)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.14)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)';
                  }}
                >
                  <span 
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#1e293b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <Play size={11} fill="#ffffff" style={{ marginLeft: '1px' }} />
                  </span>
                  <span>{secondaryCtaText}</span>
                </a>
              </div>

              {/* Social Proof Avatar Stack */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[
                    "/images/testimonial-mom.jpg",
                    "/images/testimonial-parent-mom.jpg",
                    "/images/testimonial-video-parent.jpg",
                    "/images/growing-minds-left.jpg"
                  ].map((src, i) => (
                    <img 
                      key={i}
                      src={src}
                      alt="Happy family"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/hero.jpg";
                      }}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        border: '2.5px solid #ffffff',
                        marginLeft: i === 0 ? '0' : '-10px',
                        objectFit: 'cover',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  ))}
                </div>

                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#334155' }}>
                    Trusted by 25,000+ happy families
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.84rem', fontWeight: '800', color: '#1e293b', marginTop: '2px' }}>
                    <span>4.9</span>
                    <span style={{ color: '#f59e0b', letterSpacing: '1px' }}>★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ================= RIGHT COLUMN: OPEN SCENE WITH FLOATING CARDS ================= */}
          <RevealOnScroll animation="from-right" duration={750} delay={100}>
            <div 
              style={{ 
                position: 'relative', 
                minHeight: '390px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              {/* Floating Card 1: Today's Progress (Top Left) */}
              <div 
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '0px',
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: '16px',
                  padding: '11px 16px',
                  boxShadow: '0 20px 40px -10px rgba(74, 14, 26, 0.10), 0 4px 12px rgba(0, 0, 0, 0.04)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  zIndex: 3,
                  minWidth: '180px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: '700', color: '#64748b', marginBottom: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
                  {cardProgress.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '6px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', fontSize: '11px', fontWeight: '900' }}>
                      ∑
                    </div>
                    <span style={{ fontSize: '0.84rem', fontWeight: '800', color: '#1e293b' }}>
                      {cardProgress.subject}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: '600' }}>
                    {cardProgress.status}
                  </span>
                </div>
                {/* Progress bar */}
                <div style={{ width: '100%', height: '5px', backgroundColor: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: `${cardProgress.percentage}%`, height: '100%', backgroundColor: '#0284c7', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* Floating Card 2: Great Job! (Top Right) */}
              <div 
                className="animate-float-alt"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: '16px',
                  padding: '11px 18px',
                  boxShadow: '0 20px 40px -10px rgba(74, 14, 26, 0.10), 0 4px 12px rgba(0, 0, 0, 0.04)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  zIndex: 3
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.2rem' }}>⭐</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1e293b' }}>
                      {cardGreatJob.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>
                      {cardGreatJob.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Next Lesson (Middle Right) */}
              <div 
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '160px',
                  right: '5px',
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: '16px',
                  padding: '12px 18px',
                  boxShadow: '0 20px 40px -10px rgba(74, 14, 26, 0.10), 0 4px 12px rgba(0, 0, 0, 0.04)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  zIndex: 3,
                  minWidth: '175px'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#64748b', marginBottom: '4px' }}>
                  {cardNextLesson.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '1.25rem' }}>🪐</span>
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: '800', color: '#1e293b' }}>
                        {cardNextLesson.subject}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>
                        {cardNextLesson.topic}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={14} style={{ color: '#0284c7' }} />
                </div>
              </div>

              {/* Playful Floating Rocket Doodle SVG */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '35px',
                  left: '15px',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
                aria-hidden="true"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  {/* Rocket Body */}
                  <path d="M24 6C17 11 15 22 17 29L31 29C33 22 31 11 24 6Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
                  {/* Rocket Window */}
                  <circle cx="24" cy="18" r="4" fill="#38bdf8" stroke="#1e293b" strokeWidth="2" />
                  {/* Left Fin */}
                  <path d="M16 26L10 32L17 31" fill="#f97316" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
                  {/* Right Fin */}
                  <path d="M32 26L38 32L31 31" fill="#f97316" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
                  {/* Flame */}
                  <path d="M21 31L24 39L27 31" fill="#facc15" stroke="#f97316" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Playful Gold Star Doodle SVG */}
              <div 
                style={{
                  position: 'absolute',
                  top: '115px',
                  left: '35px',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
                aria-hidden="true"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 5. Bottom-Right Organic Wave Scoop (Exact Match with Reference) */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-1px',
          right: '-1px',
          width: '130px',
          height: '65px',
          backgroundColor: '#ffffff',
          borderTopLeftRadius: '65px',
          pointerEvents: 'none',
          zIndex: 2
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// 3 Radiating Sunburst Rays on the highlighted word
function SunburstRays() {
  return (
    <svg 
      style={{
        position: 'absolute',
        top: '-12px',
        right: '-24px',
        width: '24px',
        height: '24px',
        pointerEvents: 'none'
      }} 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <path d="M3 20L1 22M12 7L12 2M21 20L23 22" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
