import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import { Sparkles, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

export default function LuxuryPageHero({
  badge = "Just Like Home Nursery",
  badgeIcon: BadgeIcon = Sparkles,
  title,
  description,
  image = "/images/hero-about.jpg",
  imageAlt = "Just Like Home Nursery in Ajman",
  imageBadgeTitle = "Villa No. 47, Al Rashidiya 2",
  imageBadgeSubtitle = "Where Little Hearts Feel at Home",
  primaryCtaText = "Book a Visit",
  onPrimaryClick,
  primaryLink,
  secondaryCtaText = "Explore Programs",
  secondaryLink = "/programs",
  whatsappText
}) {
  const whatsappUrl = `https://wa.me/971502005346?text=${encodeURIComponent(
    whatsappText || "Hello Just Like Home Nursery, I would like to enquire about admissions."
  )}`;

  return (
    <div
      className="luxury-page-hero"
      style={{
        position: 'relative',
        minHeight: 'clamp(480px, 48vw, 580px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#eaf4fd',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        paddingTop: 'clamp(56px, 7vw, 84px)',
        paddingBottom: 'clamp(68px, 8vw, 96px)'
      }}
    >
      {/* 1. Left-Side Plain/Blurred Minimal Sky Veil for Text Readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'linear-gradient(to right, rgba(235, 245, 255, 0.97) 0%, rgba(235, 245, 255, 0.92) 36%, rgba(235, 245, 255, 0.45) 54%, transparent 72%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
        aria-hidden="true"
      />

      {/* 2. Playful Subtle Background Floating Elements (Rainbow & Soft Cloud Accent) */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          left: '8%',
          pointerEvents: 'none',
          opacity: 0.65,
          zIndex: 2
        }}
        aria-hidden="true"
      >
        <svg width="64" height="38" viewBox="0 0 64 38" fill="none">
          <path
            d="M50 32H14C7.37 32 2 26.63 2 20C2 13.9 6.55 8.87 12.44 8.12C14.7 3.32 19.64 0 25.4 0C32.4 0 38.25 4.9 39.7 11.53C41.13 10.55 42.88 10 44.75 10C49.86 10 54 14.14 54 19.25C54 19.8 53.95 20.34 53.85 20.86C59.5 21.6 64 26.4 64 32C64 32 64 32 64 32H50Z"
            fill="rgba(255, 255, 255, 0.85)"
          />
        </svg>
      </div>

      {/* 3. Main Hero Content Container */}
      <div
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 3
        }}
      >
        <div style={{ maxWidth: '620px' }}>
          <RevealOnScroll animation="from-left">
            <div>
              {/* Frosted Glass Pill Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '18px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: '#721024',
                    padding: '7px 18px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: '800',
                    border: '1.5px solid rgba(114, 16, 36, 0.15)',
                    boxShadow: '0 4px 14px rgba(114, 16, 36, 0.06)',
                    letterSpacing: '0.4px'
                  }}
                >
                  <BadgeIcon size={14} style={{ color: '#721024' }} />
                  <span>{badge}</span>
                </span>
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(32px, 4.5vw, 50px)',
                  fontWeight: '900',
                  lineHeight: 1.18,
                  letterSpacing: '-0.02em',
                  color: '#721024',
                  margin: '0 0 20px 0'
                }}
              >
                {title}
              </h1>

              {/* Exact Description (array or node or string) - Content Strictly Preserved */}
              <div
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.76,
                  color: '#475569',
                  marginBottom: '28px'
                }}
              >
                {Array.isArray(description) ? (
                  description.map((paragraph, idx) => (
                    <p key={idx} style={{ margin: idx === description.length - 1 ? 0 : '0 0 14px 0' }}>
                      {paragraph}
                    </p>
                  ))
                ) : typeof description === 'string' ? (
                  <p style={{ margin: 0 }}>{description}</p>
                ) : (
                  description
                )}
              </div>

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                {onPrimaryClick ? (
                  <button
                    type="button"
                    onClick={onPrimaryClick}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 28px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 22px rgba(114, 16, 36, 0.25)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(114, 16, 36, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 22px rgba(114, 16, 36, 0.25)';
                    }}
                  >
                    <Calendar size={17} />
                    <span>{primaryCtaText}</span>
                  </button>
                ) : primaryLink ? (
                  <Link
                    to={primaryLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 28px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      boxShadow: '0 8px 22px rgba(114, 16, 36, 0.25)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(114, 16, 36, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 22px rgba(114, 16, 36, 0.25)';
                    }}
                  >
                    <Calendar size={17} />
                    <span>{primaryCtaText}</span>
                  </Link>
                ) : null}

                {secondaryLink ? (
                  <Link
                    to={secondaryLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 26px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#721024',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      border: '1.5px solid #721024',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = '#fff1f2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }}
                  >
                    <span>{secondaryCtaText}</span>
                    <ArrowRight size={17} />
                  </Link>
                ) : null}

                {whatsappText && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 24px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#059669',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      border: '1.5px solid #059669',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = '#ecfdf5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }}
                  >
                    <MessageCircle size={17} />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 4. Subtle Floating Campus Badge on Bottom Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          right: '28px',
          padding: '10px 18px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 3
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: '#721024',
              letterSpacing: '0.6px'
            }}
          >
            {imageBadgeTitle}
          </p>
          <p
            style={{
              margin: '2px 0 0 0',
              fontSize: '13.5px',
              fontWeight: '800',
              color: '#1e293b'
            }}
          >
            {imageBadgeSubtitle}
          </p>
        </div>
        <span style={{ fontSize: '20px' }}>🏡</span>
      </div>

      {/* 5. Playful Bottom Scalloped Cloud Wave */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '24px',
          overflow: 'hidden',
          zIndex: 4,
          pointerEvents: 'none',
          lineHeight: 0
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>
    </div>
  );
}

