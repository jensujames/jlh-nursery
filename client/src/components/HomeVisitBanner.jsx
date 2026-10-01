import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Phone,
  ShieldCheck,
  Heart
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function HomeVisitBanner({ onBookVisitClick }) {
  return (
    <section 
      id="contact" 
      style={{
        position: 'relative',
        padding: '5rem 1rem 6rem 1rem',
        backgroundColor: '#fdfbf4',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <RevealOnScroll animation="fade-up">
          <div 
            style={{
              position: 'relative',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, #721024 0%, #4a0e1a 45%, #2e0d12 100%)',
              color: '#ffffff',
              padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
              boxShadow: '0 25px 60px rgba(74, 14, 26, 0.28)',
              border: '2px solid rgba(201, 168, 76, 0.35)',
              overflow: 'hidden'
            }}
          >
            {/* Colorful ambient orbs inside banner */}
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201, 168, 76, 0.28) 0%, transparent 70%)',
              filter: 'blur(45px)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-25%',
              left: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 107, 0.22) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 3, maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
              {/* Badges */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(201, 168, 76, 0.2)',
                border: '1px solid rgba(201, 168, 76, 0.45)',
                color: '#e8c96a',
                padding: '0.4rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '0.04em',
                marginBottom: '1.25rem',
                backdropFilter: 'blur(8px)'
              }}>
                <Sparkles size={14} color="#e8c96a" /> EXPERIENCE THE WARMTH IN PERSON
              </div>

              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 1.18,
                marginBottom: '1.25rem'
              }}>
                Book a Private Morning Tour at{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #e8c96a 0%, #ffffff 50%, #f0b8c4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Villa 47
                </span>
              </h2>

              <p style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: '#fdfbf4',
                opacity: 0.92,
                lineHeight: 1.65,
                maxWidth: '680px',
                margin: '0 auto 2.25rem auto'
              }}>
                Walk through our sunlit classrooms, meet our dedicated educators, and watch how quickly your child feels right at home. Tours are gentle, friendly, and non-obligatory.
              </p>

              {/* Location & Time Pills */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <MapPin size={15} color="#e8c96a" />
                  <span>Villa 47, Al Rashidiya 2, Ajman</span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <Clock size={15} color="#e8c96a" />
                  <span>Open Mon – Fri: 7:00 AM – 6:00 PM</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                {/* Book Tour Modal Trigger */}
                <button
                  onClick={onBookVisitClick}
                  style={{
                    backgroundColor: '#c9a84c',
                    color: '#2e0d12',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '0.9rem 2rem',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 8px 24px rgba(201, 168, 76, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e8c96a';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#c9a84c';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Calendar size={18} />
                  <span>Book a Free Morning Tour</span>
                </button>

                {/* WhatsApp Chat */}
                <a
                  href="https://wa.me/971509088263?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20inquire%20about%20admissions%20and%20booking%20a%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '999px',
                    padding: '0.9rem 1.8rem',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 8px 20px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#20ba5a';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#25D366';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Dedicated Contact Page Link */}
                <Link
                  to="/contact"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '999px',
                    padding: '0.9rem 1.6rem',
                    fontSize: '0.92rem',
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  }}
                >
                  <span>Map & Contact Page</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
