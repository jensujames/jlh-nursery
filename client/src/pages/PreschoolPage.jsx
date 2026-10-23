import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import { 
  GraduationCap, CheckCircle2, Smile, ArrowRight, 
  Calendar, MessageCircle, Sparkles, Compass 
} from 'lucide-react';

const DEVELOPMENTS = [
  'Listening and following familiar routines',
  'Expressing needs, ideas and feelings',
  'Early phonics, vocabulary and literacy foundations',
  'Counting, patterns, shapes and early problem-solving',
  'Taking turns, cooperating and participating in groups',
  'Fine-motor control for mark-making and early writing',
  'Self-help skills and growing responsibility',
  'Confidence when approaching new experiences'
];

export default function PreschoolPage() {
  useEffect(() => {
    document.title = "Preschool & School Readiness in Ajman | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Help your child prepare for school with confidence through preschool learning, phonics, numeracy, routines and independence at Just Like Home Nursery Ajman.");
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to ask about the Preschool and School Readiness program at Just Like Home Nursery."
  );

  return (
    <div className="preschool-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="PRESCHOOL & SCHOOL READINESS · HIGH-INTENT PRESCHOOL PAGE"
        badgeIcon={GraduationCap}
        title="Preparing Confident, Curious Children for Their Next Step"
        description={[
          "Starting school is a major milestone. School readiness is not only about knowing letters and numbers; it is also about confidence, communication, independence, listening, routines and the ability to learn alongside others.",
          "Our preschool and school-readiness experiences build these foundations through purposeful play and age-appropriate learning."
        ]}
        image="/media/school-readiness/school-readiness-4.jpg"
        imageAlt="Preschool and school readiness at Just Like Home Nursery"
        primaryCtaText="Book a Visit"
        primaryLink="/contact"
        secondaryCtaText="Ask About Preschool"
        secondaryLink="/programs"
        whatsappText="Hello, I would like to ask about the Preschool and School Readiness program at Just Like Home Nursery."
      />

      {/* 2. WHAT CHILDREN DEVELOP */}
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
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
                CORE CAPABILITIES
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
                What Children Develop
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Essential cognitive, social, emotional and physical foundations designed to prepare every child for a seamless transition into primary school.
              </p>
            </div>
          </RevealOnScroll>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}
          >
            {DEVELOPMENTS.map((item, index) => {
              const counter = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 35}>
                  <div 
                    className="luxury-creative-card"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '24px 22px',
                      borderRadius: '1.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 8px 24px rgba(74, 14, 26, 0.04), 0 1px 4px rgba(0,0,0,0.02)',
                      height: '100%',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div 
                      className="luxury-icon-box luxury-icon-burgundy"
                      style={{
                        width: '42px',
                        height: '42px',
                        flexShrink: 0,
                        fontSize: '13px',
                        fontWeight: '900',
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)'
                      }}
                    >
                      {counter}
                    </div>
                    <p style={{ margin: 0, fontSize: '15.5px', fontWeight: '650', color: '#1e293b', lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LEARNING WITHOUT LOSING THE JOY & A SMOOTH TRANSITION */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
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
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                
                {/* Authentic Preschool Play Photo */}
                <div
                  style={{
                    width: '100%',
                    height: '210px',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    marginBottom: '22px',
                    position: 'relative',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <img
                    src="/media/art-creativity/art-4.jpg"
                    alt="Creative learning without losing joy at Just Like Home"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: '#721024',
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      letterSpacing: '0.3px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    Preschool Creativity
                  </span>
                </div>

                <div 
                  className="luxury-icon-box luxury-icon-burgundy"
                  style={{
                    width: '52px',
                    height: '52px',
                    marginBottom: '18px'
                  }}
                >
                  <Smile size={26} />
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '24px', 
                    fontWeight: '850', 
                    color: '#721024', 
                    marginBottom: '16px' 
                  }}
                >
                  Learning Without Losing the Joy
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Children are more likely to become enthusiastic learners when they feel successful and engaged. We introduce foundational concepts through stories, games, creative work, conversation, movement and practical experiences rather than relying only on worksheets or repetition.
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
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0284c7, #38bdf8)' }} />
                
                {/* Authentic School Readiness Photo */}
                <div
                  style={{
                    width: '100%',
                    height: '210px',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    marginBottom: '22px',
                    position: 'relative',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <img
                    src="/media/early-numeracy/numeracy-2.jpg"
                    alt="School readiness transition routines at Just Like Home"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: '#0284c7',
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      letterSpacing: '0.3px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    School Readiness
                  </span>
                </div>

                <div 
                  className="luxury-icon-box luxury-icon-sky"
                  style={{
                    width: '52px',
                    height: '52px',
                    marginBottom: '18px'
                  }}
                >
                  <GraduationCap size={26} />
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '24px', 
                    fontWeight: '850', 
                    color: '#0284c7', 
                    marginBottom: '16px' 
                  }}
                >
                  A Smooth Transition
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Consistent routines and close parent communication help children understand what to expect and feel secure about change. Our goal is to help every child approach school as a capable learner who is ready to participate, ask questions and try.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA: ASK ABOUT PRESCHOOL | BOOK A VISIT */}
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
              ENROLL FOR PRESCHOOL
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
              Preparing Confident, Curious Children for Their Next Step
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#EFE4D6', opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Our preschool and school-readiness experiences build these foundations through purposeful play and age-appropriate learning.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
                  transition: 'all 0.25s ease'
                }}
              >
                <MessageCircle size={18} />
                <span>ASK ABOUT PRESCHOOL</span>
              </a>
              <Link
                to="/contact"
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
                <Calendar size={18} />
                <span>BOOK A VISIT</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
