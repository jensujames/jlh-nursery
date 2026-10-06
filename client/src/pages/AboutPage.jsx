import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Heart, Sparkles, ShieldCheck, Smile, Users, Compass, 
  ArrowRight, Phone, Calendar, CheckCircle2 
} from 'lucide-react';

const PROMISES = [
  'Providing a safe, clean, and welcoming environment.',
  'Treating every child with kindness, patience, respect, and understanding.',
  'Supporting each child\'s emotional, social, physical, communication, and intellectual development.',
  'Encouraging children to learn through play, creativity, exploration, and discovery.',
  'Building strong and respectful partnerships with parents and families.',
  'Recognising and celebrating every child\'s unique abilities, interests, and achievements.',
  'Helping children develop independence, confidence, good manners, and essential life skills.',
  'Creating a nurturing atmosphere that truly feels “Just Like Home.”'
];

const SERVICES_LIST = [
  'Early Years Education following the EYFS approach',
  'Full-Day & Half-Day Care Options',
  'Nursery & Preschool Programs',
  'School Readiness Program',
  'Age-appropriate learning activities',
  'Phonics, Literacy & Numeracy',
  'Arabic Language Learning',
  'Physical Development & Outdoor Play',
  'Creative Arts & Craft Activities',
  'Sensory & Exploration Activities',
  'Storytelling, Rhymes & Music',
  'Life Skills & Independence Activities',
  'Special Events, Theme Days & Celebrations',
  'Holiday & Summer Camp Programs',
  'Educational Trips & Outings',
  'Regular Parent Communication'
];

const FACILITIES_LIST = [
  'Safe and welcoming classrooms',
  'Indoor play area',
  'Outdoor play area',
  'Baby care/quiet room',
  'Sensory and exploration spaces',
  'Reading & story corner',
  'Life skills activity areas',
  'Child-friendly washrooms',
  'Kitchen & meal preparation area',
  'First-aid/clinic facility',
  'Doctor visits',
  'Secure reception area',
  'Safe and child-friendly environment',
  'CCTV monitoring for enhanced safety'
];

export default function AboutPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "About Just Like Home Nursery | Early Years Nursery Ajman";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet Just Like Home Nursery in Ajman and discover our nurturing philosophy, motherly care, play-based approach and commitment to every child's development.");
    }
  }, []);

  return (
    <div className="about-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="About Us · Early Years Nursery in Ajman"
        badgeIcon={Heart}
        title="A Nursery Created Around the Way Children Feel, Learn and Grow"
        description={[
          "Just Like Home Nursery was created with a simple belief: children flourish when they feel safe, loved, respected and understood.",
          "Our name reflects the experience we want every child to have — the reassurance of a familiar, caring environment combined with thoughtful early-years learning that encourages curiosity, confidence and independence."
        ]}
        image="/images/hero-about.jpg"
        imageAlt="About Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Meet Us - Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Explore Our Programs"
        secondaryLink="/programs"
        whatsappText="Hello Just Like Home Nursery, I would like to learn more about your early-years nursery in Ajman."
      />

      {/* 2. OUR STORY */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(36px, 5vw, 56px)',
              alignItems: 'center'
            }}
          >
            <div>
              <RevealOnScroll>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    boxShadow: '0 20px 48px rgba(114, 16, 36, 0.12), 0 2px 10px rgba(255, 255, 255, 0.8) inset',
                    border: '3px solid rgba(255, 255, 255, 0.95)'
                  }}
                >
                  <img 
                    src="/images/nurturing-hero.jpg" 
                    alt="Caring educators and children at Just Like Home Nursery" 
                    style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(114, 16, 36, 0.82) 0%, rgba(114, 16, 36, 0.2) 50%, transparent 75%)'
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px', color: '#ffffff' }}>
                    <span 
                      style={{ 
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.22)',
                        backdropFilter: 'blur(10px)',
                        fontSize: '11px', 
                        fontWeight: '800', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.8px', 
                        color: '#fef08a',
                        marginBottom: '8px'
                      }}
                    >
                      Villa No. 47, Al Rashidiya 2, Ajman
                    </span>
                    <p style={{ margin: 0, fontSize: '21px', fontWeight: '900', fontFamily: 'var(--font-heading, "Outfit", sans-serif)' }}>
                      Where Little Hearts Feel at Home
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <RevealOnScroll delay={100}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderRadius: '2rem',
                    padding: 'clamp(28px, 4vw, 40px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '6px 18px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#721024',
                      fontSize: '13px',
                      fontWeight: '800',
                      letterSpacing: '0.5px',
                      border: '1.5px solid rgba(114, 16, 36, 0.16)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 12px rgba(114, 16, 36, 0.06)'
                    }}
                  >
                    <Sparkles size={14} /> OUR BACKGROUND
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: 'clamp(28px, 4vw, 40px)',
                      fontWeight: '900',
                      color: '#721024',
                      margin: '0 0 16px 0',
                      lineHeight: 1.25
                    }}
                  >
                    Our Story
                  </h2>
                  <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', marginBottom: '16px' }}>
                    The early years shape how children see themselves and the world around them. These years deserve more than supervision and lessons; they deserve patience, meaningful relationships and joyful opportunities to discover.
                  </p>
                  <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', margin: 0 }}>
                    At Just Like Home Nursery in Ajman, we bring care and learning together. Every part of the child's day — from play and conversation to meals, movement, stories and friendships — can become an opportunity to grow.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & OUR MISSION */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 48px' }}>
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
                PURPOSE &amp; VALUES
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
                Our Vision &amp; Mission
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Guiding every moment of care, learning and development at Just Like Home Nursery.
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
            {/* Vision Card */}
            <RevealOnScroll delay={100} animation="from-left">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(114, 16, 36, 0.16), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#721024';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '1.15rem',
                        backgroundColor: '#ffffff',
                        color: '#721024',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(114, 16, 36, 0.2)',
                        boxShadow: '0 8px 18px rgba(114, 16, 36, 0.12)'
                      }}
                    >
                      <Compass size={28} />
                    </div>
                    <span 
                      style={{ 
                        fontSize: '11.5px', 
                        fontWeight: '800', 
                        letterSpacing: '0.6px', 
                        textTransform: 'uppercase', 
                        padding: '5px 12px', 
                        borderRadius: '999px', 
                        backgroundColor: '#FFF1F2', 
                        color: '#721024' 
                      }}
                    >
                      OUR VISION
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#721024',
                      marginBottom: '14px'
                    }}
                  >
                    Our Vision
                  </h3>
                  <p style={{ fontSize: '17.5px', lineHeight: 1.7, color: '#1e293b', fontWeight: '600', margin: 0 }}>
                    Preparing children for life with motherly care and attention.
                  </p>
                </div>
                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '18px',
                    borderTop: '1px solid #f8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: '750',
                    color: '#721024'
                  }}
                >
                  <Heart size={16} className="fill-current text-[#721024]" />
                  <span>Motherly Care &amp; Attention</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Mission Card */}
            <RevealOnScroll delay={200} animation="from-right">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(201, 168, 76, 0.22), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#c9a84c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #c9a84c, #721024)' }} />
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '1.15rem',
                        backgroundColor: '#ffffff',
                        color: '#c9a84c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(201, 168, 76, 0.25)',
                        boxShadow: '0 8px 18px rgba(201, 168, 76, 0.14)'
                      }}
                    >
                      <Heart size={28} />
                    </div>
                    <span 
                      style={{ 
                        fontSize: '11.5px', 
                        fontWeight: '800', 
                        letterSpacing: '0.6px', 
                        textTransform: 'uppercase', 
                        padding: '5px 12px', 
                        borderRadius: '999px', 
                        backgroundColor: '#fef9e7', 
                        color: '#c9a84c' 
                      }}
                    >
                      OUR MISSION
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '14px'
                    }}
                  >
                    Our Vision &amp; Mission
                  </h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#334155', fontWeight: '600', margin: 0 }}>
                    We don't just educate children we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime.
                  </p>
                </div>
                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '18px',
                    borderTop: '1px solid #f8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: '750',
                    color: '#c9a84c'
                  }}
                >
                  <Sparkles size={16} />
                  <span>Curiosity, Confidence &amp; Happy Memories</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE PROMISE FAMILIES */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9' 
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
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
                COMMITMENT TO FAMILIES
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
                What We Promise Families
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                Our commitments guide how we structure each day, care for children and partner with parents.
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
            {PROMISES.map((promise, index) => {
              const counter = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 40}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '24px 22px',
                      borderRadius: '1.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.90)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 8px 24px rgba(74, 14, 26, 0.04), 0 1px 4px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      height: '100%',
                      boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(114, 16, 36, 0.10)';
                      e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(74, 14, 26, 0.04), 0 1px 4px rgba(0,0,0,0.02)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '12px',
                        backgroundColor: '#fff1f2',
                        color: '#721024',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(114, 16, 36, 0.15)',
                        fontSize: '12px',
                        fontWeight: '900',
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)'
                      }}
                    >
                      {counter}
                    </div>
                    <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.65, color: '#1e293b', fontWeight: '600' }}>
                      {promise}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EVERY CHILD IS UNIQUE & A PARTNERSHIP WITH PARENTS */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 15% 15%, rgba(5, 150, 105, 0.03) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}
          >
            <RevealOnScroll animation="from-left">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(114, 16, 36, 0.14), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#721024';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '1.15rem',
                    backgroundColor: '#ffffff',
                    color: '#721024',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '2px solid rgba(114, 16, 36, 0.18)',
                    boxShadow: '0 8px 18px rgba(114, 16, 36, 0.08)'
                  }}
                >
                  <Smile size={28} />
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
                  Every Child Is Unique
                </h3>
                <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', margin: 0 }}>
                  Children do not all learn, communicate or gain confidence in the same way. Our role is to observe, listen and create the right opportunities for each child to participate and progress. We celebrate small steps because those small steps often become the foundations of lifelong confidence.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100} animation="from-right">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(2, 132, 199, 0.16), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#0284c7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '1.15rem',
                    backgroundColor: '#ffffff',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '2px solid rgba(2, 132, 199, 0.22)',
                    boxShadow: '0 8px 18px rgba(2, 132, 199, 0.12)'
                  }}
                >
                  <Users size={28} />
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
                  A Partnership With Parents
                </h3>
                <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', margin: 0 }}>
                  Trust grows through communication. We value parents' knowledge of their children and aim to build a respectful partnership from the first enquiry onwards. Regular communication helps nursery and home work together around each child's routines, interests, development and wellbeing.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES & FACILITIES */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9' 
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
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
                SERVICES &amp; FACILITIES
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
                Everything Your Child Needs to Flourish
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Thoughtfully equipped spaces and comprehensive care options created for happiness and peace of mind.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}
          >
            {/* Services Card */}
            <RevealOnScroll animation="from-left">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(114, 16, 36, 0.10)';
                  e.currentTarget.style.borderColor = '#721024';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px'
                    }}
                  >
                    🌟
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#721024',
                      margin: 0
                    }}
                  >
                    Our Services
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SERVICES_LIST.map((srv, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFDF9',
                        border: '1px solid #ffede4'
                      }}
                    >
                      <CheckCircle2 size={17} color="#721024" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', fontWeight: '650', color: '#334155', lineHeight: 1.5 }}>
                        {srv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Facilities Card */}
            <RevealOnScroll delay={100} animation="from-right">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(5, 150, 105, 0.12)';
                  e.currentTarget.style.borderColor = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#dcfce7',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px'
                    }}
                  >
                    🏠
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#059669',
                      margin: 0
                    }}
                  >
                    Our Facilities
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {FACILITIES_LIST.map((fac, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        backgroundColor: '#F0FDF4',
                        border: '1px solid #bbf7d0'
                      }}
                    >
                      <CheckCircle2 size={17} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', fontWeight: '650', color: '#334155', lineHeight: 1.5 }}>
                        {fac}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <LuxuryClosingCta
        badge="BOOK A VISIT"
        title="Meet Us & Experience Just Like Home"
        subtitle="We welcome families to tour our spaces, meet our educators and experience our warm, home-like environment in Al Rashidiya 2, Ajman."
        primaryText="Meet Us - Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="Explore Our Programs"
        secondaryLink="/programs"
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
