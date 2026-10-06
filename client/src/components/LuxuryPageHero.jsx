import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import { Sparkles, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

export default function LuxuryPageHero({
  badge = "Just Like Home Nursery",
  badgeIcon: BadgeIcon = Sparkles,
  title,
  description,
  image = "/images/hero.jpg",
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
        backgroundColor: '#fffbf7',
        backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(114, 16, 36, 0.04) 0%, transparent 60%)',
        paddingTop: 'clamp(48px, 6vw, 72px)',
        paddingBottom: 'clamp(56px, 7vw, 84px)',
        overflow: 'hidden',
        borderBottomRightRadius: '70px',
        borderBottom: '1px solid rgba(201, 168, 76, 0.22)'
      }}
    >
      {/* Ambient Pastel Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '180px',
          height: '180px',
          background: '#bae6fd',
          borderRadius: '50%',
          opacity: 0.35,
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '25%',
          width: '160px',
          height: '160px',
          background: '#fecdd3',
          borderRadius: '50%',
          opacity: 0.3,
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '10%',
          width: '200px',
          height: '200px',
          background: '#fef08a',
          borderRadius: '50%',
          opacity: 0.3,
          filter: 'blur(35px)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Pill Badge, Title, Content, Dual CTAs */}
          <RevealOnScroll animation="from-left">
            <div>
              {/* Frosted Glass Pill Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '18px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: '#721024',
                    padding: '7px 18px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: '800',
                    border: '1px solid rgba(201, 168, 76, 0.35)',
                    boxShadow: '0 4px 14px rgba(114, 16, 36, 0.05)',
                    letterSpacing: '0.4px'
                  }}
                >
                  <BadgeIcon size={14} className="text-[#c9a84c]" />
                  <span>{badge}</span>
                </span>
              </div>

              {/* Display Heading */}
              <h1
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(30px, 4.4vw, 48px)',
                  fontWeight: '900',
                  lineHeight: 1.18,
                  letterSpacing: '-0.02em',
                  color: '#721024',
                  margin: '0 0 20px 0'
                }}
              >
                {title}
              </h1>

              {/* Exact Description (array or node or string) */}
              <div
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.78,
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
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
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
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
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

          {/* Right Column: Visual Photo Card with Floating Glass Badge */}
          <RevealOnScroll animation="from-right" delay={150}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 18px 45px rgba(114, 16, 36, 0.08)',
                  border: '4px solid #ffffff'
                }}
              >
                <img
                  src={image}
                  alt={imageAlt}
                  style={{
                    width: '100%',
                    height: 'clamp(320px, 38vw, 420px)',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/hero.jpg';
                  }}
                />
              </div>

              {/* Floating Glass Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '18px',
                  right: '18px',
                  padding: '14px 20px',
                  borderRadius: '18px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
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
                      fontSize: '14px',
                      fontWeight: '800',
                      color: '#1e293b'
                    }}
                  >
                    {imageBadgeSubtitle}
                  </p>
                </div>
                <span style={{ fontSize: '22px' }}>🏡</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
