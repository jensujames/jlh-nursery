import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import { 
  Clock, Sun, Moon, Heart, MessageCircle, Calendar, 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';

export default function DaycarePage() {
  useEffect(() => {
    document.title = "Full-Day & Half-Day Daycare in Ajman | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore nurturing full-day and half-day nursery care in Ajman, combining safe routines, play-based learning, rest and parent communication.");
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to check availability for full-day and half-day care options at Just Like Home Nursery."
  );

  return (
    <div className="daycare-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="FULL-DAY & HALF-DAY CARE · FLEXIBLE CARE SEARCH INTENT"
        badgeIcon={Clock}
        title="Flexible Care With a Consistent Sense of Belonging"
        description="Families have different schedules, but every child needs consistency, reassurance and meaningful experiences throughout the day. Our full-day and half-day options are designed to provide a caring routine while supporting learning, play, rest and social development."
        image="/images/hero-daycare.jpg"
        imageAlt="Full-day and half-day daycare at Just Like Home Nursery"
        primaryCtaText="Check Availability"
        primaryLink="/contact"
        secondaryCtaText="Explore Programs"
        secondaryLink="/programs"
        whatsappText="Hello, I would like to check availability for full-day and half-day care options at Just Like Home Nursery."
      />

      {/* 2. THREE CORE SECTIONS */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderTop: '1px solid #f1f5f9', 
          borderBottom: '1px solid #f1f5f9',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1.5px solid rgba(114, 16, 36, 0.16)',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(114, 16, 36, 0.06)'
                }}
              >
                SCHEDULES &amp; ROUTINES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0'
                }}
              >
                Care That Nurtures the Whole Day
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Structured flexibility designed to meet the real schedules of working families while keeping childhood joyful and unhurried.
              </p>
            </div>
          </RevealOnScroll>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            <RevealOnScroll animation="from-left">
              <div 
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #d97706, #f59e0b)' }} />
                <div 
                  className="luxury-icon-box luxury-icon-gold"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginBottom: '20px'
                  }}
                >
                  <Sun size={28} />
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '22px', 
                    fontWeight: '850', 
                    color: '#1e293b', 
                    marginBottom: '14px' 
                  }}
                >
                  A Balanced Nursery Day
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Depending on the child's program and attendance hours, the day may include welcome routines, child-led play, guided activities, stories and music, physical movement, outdoor experiences, meals or snacks, quiet time and preparation for home.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={50} animation="from-bottom">
              <div 
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #e11d48, #f43f5e)' }} />
                <div 
                  className="luxury-icon-box luxury-icon-coral"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginBottom: '20px'
                  }}
                >
                  <Heart size={28} />
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '22px', 
                    fontWeight: '850', 
                    color: '#1e293b', 
                    marginBottom: '14px' 
                  }}
                >
                  Care That Supports Development
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Care routines are not separate from learning. Conversations during meals, tidying after play, choosing an activity and managing personal belongings all help children build communication, responsibility and independence.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100} animation="from-right">
              <div 
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0284c7, #38bdf8)' }} />
                <div 
                  className="luxury-icon-box luxury-icon-sky"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginBottom: '20px'
                  }}
                >
                  <MessageCircle size={28} />
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '22px', 
                    fontWeight: '850', 
                    color: '#1e293b', 
                    marginBottom: '14px' 
                  }}
                >
                  Keeping Parents Connected
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  We understand that trust matters when children spend part of their day away from home. Regular parent communication helps families remain informed and gives educators useful insight into routines, preferences and changes that may affect the child.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. CHOOSE THE RIGHT OPTION */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div 
              className="luxury-creative-card"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '2.5rem',
                padding: 'clamp(36px, 5vw, 54px) clamp(24px, 4vw, 44px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 16px 45px rgba(74, 14, 26, 0.06), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                textAlign: 'center'
              }}
            >
              <div 
                className="luxury-icon-box luxury-icon-burgundy"
                style={{
                  width: '68px',
                  height: '68px',
                  margin: '0 auto 24px'
                }}
              >
                <Clock size={32} />
              </div>
              <h2 
                style={{ 
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 38px)', 
                  fontWeight: '900', 
                  color: '#721024', 
                  marginBottom: '18px' 
                }}
              >
                Choose the Right Option
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 32px' }}>
                Contact our team to confirm current operating hours, available attendance options, age eligibility and fees. We will help you identify an arrangement that suits your child and family.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 32px',
                    borderRadius: '999px',
                    backgroundColor: '#721024',
                    color: '#FAF5EB',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.25)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Calendar size={18} />
                  <span>CHECK AVAILABILITY</span>
                </Link>
                <a 
                  href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer"
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
                    border: '1.5px solid rgba(114, 16, 36, 0.3)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <section 
        style={{
          padding: 'clamp(64px, 7vw, 90px) 20px',
          background: 'linear-gradient(135deg, #721024 0%, #8f152f 50%, #590d1c 100%)',
          color: '#FAF5EB',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(10px)',
                color: '#fef08a',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                marginBottom: '18px'
              }}
            >
              DAYCARE IN AJMAN
            </span>
            <h2 
              style={{ 
                fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                fontSize: 'clamp(28px, 4.5vw, 42px)', 
                fontWeight: '900', 
                color: '#FAF5EB',
                margin: '0 0 20px 0', 
                lineHeight: 1.25 
              }}
            >
              Flexible Care With a Consistent Sense of Belonging
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#EFE4D6', opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Our full-day and half-day options are designed to provide a caring routine while supporting learning, play, rest and social development.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Calendar size={18} />
                <span>CHECK AVAILABILITY</span>
              </Link>
              <a 
                href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(10px)',
                  color: '#FAF5EB',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  transition: 'all 0.25s ease'
                }}
              >
                <MessageCircle size={18} />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
