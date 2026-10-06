import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';
import { Calendar, MessageCircle, ArrowRight, Heart } from 'lucide-react';

export default function LuxuryClosingCta({
  badge = "VISIT JUST LIKE HOME",
  title = "Come See Why It Feels Just Like Home",
  subtitle = "Choosing your child's nursery is an important decision - and sometimes the best way to know is simply to experience it. Meet our team, explore our nursery and discover the warm learning environment waiting for your little one.",
  primaryText = "Book a Visit",
  onPrimaryClick,
  primaryLink,
  secondaryText = "Chat on WhatsApp",
  secondaryLink,
  whatsappMessage = "Hello Just Like Home Nursery, I would like to book a visit.",
  tagline = "Where Little Hearts Feel at Home."
}) {
  const whatsappUrl = `https://wa.me/971502005346?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      className="luxury-closing-cta-section"
      style={{
        padding: 'clamp(64px, 8vw, 96px) 20px',
        backgroundColor: '#FFFDF7'
      }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <RevealOnScroll>
          <div
            style={{
              position: 'relative',
              borderRadius: '32px',
              padding: 'clamp(44px, 6vw, 68px) clamp(24px, 5vw, 56px)',
              background: 'linear-gradient(135deg, #721024 0%, #8b1a2f 50%, #5e1020 100%)',
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(114, 16, 36, 0.28)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {/* Ambient Gold Glow Orbs in background */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                background: 'rgba(201, 168, 76, 0.25)',
                borderRadius: '50%',
                filter: 'blur(35px)',
                pointerEvents: 'none'
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-40px',
                left: '-40px',
                width: '160px',
                height: '160px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '50%',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
              aria-hidden="true"
            />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
              {/* Badge Pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '6px 18px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontSize: '12.5px',
                    fontWeight: '800',
                    letterSpacing: '0.6px',
                    border: '1px solid rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <Heart size={13} className="fill-current text-[#e8c96a]" />
                  <span>{badge}</span>
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4.4vw, 42px)',
                  fontWeight: '900',
                  lineHeight: 1.22,
                  letterSpacing: '-0.01em',
                  color: '#ffffff',
                  margin: '0 0 18px 0'
                }}
              >
                {title}
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 'clamp(15.5px, 1.8vw, 17px)',
                  lineHeight: 1.75,
                  color: 'rgba(255, 255, 255, 0.92)',
                  maxWidth: '720px',
                  margin: '0 auto 34px'
                }}
              >
                {subtitle}
              </p>

              {/* Action Buttons Row */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginBottom: '26px'
                }}
              >
                {onPrimaryClick ? (
                  <button
                    type="button"
                    onClick={onPrimaryClick}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 32px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#721024',
                      fontWeight: '800',
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.18)';
                    }}
                  >
                    <Calendar size={17} />
                    <span>{primaryText}</span>
                  </button>
                ) : primaryLink ? (
                  <Link
                    to={primaryLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 32px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#721024',
                      fontWeight: '800',
                      fontSize: '15px',
                      textDecoration: 'none',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.18)';
                    }}
                  >
                    <Calendar size={17} />
                    <span>{primaryText}</span>
                  </Link>
                ) : null}

                {secondaryLink ? (
                  <Link
                    to={secondaryLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 30px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '15px',
                      textDecoration: 'none',
                      border: '1.5px solid rgba(255, 255, 255, 0.45)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                    }}
                  >
                    <span>{secondaryText}</span>
                    <ArrowRight size={17} />
                  </Link>
                ) : (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 30px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.16)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '15px',
                      textDecoration: 'none',
                      border: '1.5px solid rgba(255, 255, 255, 0.45)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                    }}
                  >
                    <MessageCircle size={17} />
                    <span>{secondaryText}</span>
                  </a>
                )}
              </div>

              {/* Tagline */}
              {tagline && (
                <p
                  style={{
                    fontSize: '14.5px',
                    fontWeight: '800',
                    color: 'rgba(255, 255, 255, 0.88)',
                    letterSpacing: '0.4px',
                    margin: 0
                  }}
                >
                  “{tagline.replace(/^“|”$/g, '')}”
                </p>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
