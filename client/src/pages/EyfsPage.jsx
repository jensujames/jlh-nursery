import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  MessageCircle, Heart, Dumbbell, BookOpen, Calculator, 
  Globe2, Palette, Sparkles, Calendar, ArrowRight, Compass, CheckCircle2 
} from 'lucide-react';

const DEVELOPMENT_AREAS = [
  {
    title: 'Communication & Language',
    desc: 'Conversations, stories, rhymes and responsive interactions help children listen, understand and express themselves.',
    icon: MessageCircle
  },
  {
    title: 'Personal, Social & Emotional Development',
    desc: 'Warm relationships and group experiences help children develop confidence, emotional awareness, cooperation and a sense of belonging.',
    icon: Heart
  },
  {
    title: 'Physical Development',
    desc: 'Indoor and outdoor movement, fine-motor activities and everyday self-care strengthen coordination and independence.',
    icon: Dumbbell
  },
  {
    title: 'Literacy',
    desc: 'Stories, sounds, marks, letters and playful phonics experiences support early reading and writing foundations.',
    icon: BookOpen
  },
  {
    title: 'Mathematics',
    desc: 'Children explore counting, quantities, shapes, patterns, comparison and problem-solving in meaningful play.',
    icon: Calculator
  },
  {
    title: 'Understanding the World',
    desc: 'Hands-on exploration encourages children to observe, question and connect with people, places, nature and everyday life.',
    icon: Globe2
  },
  {
    title: 'Expressive Arts & Design',
    desc: 'Art, music, movement, role play and imaginative experiences give children ways to create and communicate ideas.',
    icon: Palette
  }
];

export default function EyfsPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "EYFS Nursery in Ajman | Learning Through Play";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover the EYFS-inspired, play-based learning approach at Just Like Home Nursery in Ajman, supporting communication, confidence, creativity and development.");
    }
  }, []);

  return (
    <div className="eyfs-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="EYFS & LEARNING APPROACH · EXPLAIN HOW LEARNING HAPPENS"
        badgeIcon={Sparkles}
        title="Learning Through Play, Discovery and Everyday Experiences"
        description={[
          "Young children learn by doing. They learn when they move, talk, listen, touch, imagine, repeat, experiment and share experiences with others.",
          "Our early-years approach uses purposeful play and age-appropriate experiences to support the whole child. Educators observe children's interests and development, then create opportunities that help them take their next step with confidence."
        ]}
        image="/images/hero-eyfs.jpg"
        imageAlt="Learning Through Play at Just Like Home Nursery"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Explore Our Activities"
        primaryLink="/nursery-activities"
        secondaryCtaText="Book a Nursery Visit"
        onPrimaryClick={undefined}
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to learn more about your EYFS play-based learning approach."
      />

      {/* 2. THE AREAS OF DEVELOPMENT WE SUPPORT */}
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
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
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
                AREAS OF GROWTH
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
                The Areas of Development We Support
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Following British EYFS standards, we nurture holistic cognitive, emotional, social, and physical milestones through joyful, play-based inquiry.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '26px'
            }}
          >
            {DEVELOPMENT_AREAS.map((area, index) => {
              const Icon = area.icon;
              return (
                <RevealOnScroll key={index} delay={index * 40}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.90)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      borderRadius: '2rem',
                      padding: '2.5rem 2rem',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      height: '100%',
                      boxSizing: 'border-box',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      overflow: 'hidden'
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
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                    <div className="luxury-icon-box luxury-icon-burgundy" style={{ marginBottom: '20px' }}>
                      <Icon size={26} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                        fontSize: '21px',
                        fontWeight: '850',
                        color: '#721024',
                        marginBottom: '12px'
                      }}
                    >
                      {area.title}
                    </h3>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {area.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MORE THAN A LESSON & OBSERVATION AND INDIVIDUAL SUPPORT */}
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
                  position: 'relative',
                  overflow: 'hidden',
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
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
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
                  <Sparkles size={26} />
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
                  More Than a Lesson
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Learning is woven throughout the nursery day. Tidying can build responsibility. Sharing a story can strengthen language. Outdoor play can develop coordination. Preparing a simple activity can encourage patience and practical life skills. These everyday experiences help children connect learning with real life.
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
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(225, 29, 72, 0.16), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#e11d48';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #e11d48, #fb7185)' }} />
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '1.15rem',
                    backgroundColor: '#ffffff',
                    color: '#e11d48',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '2px solid rgba(225, 29, 72, 0.22)',
                    boxShadow: '0 8px 18px rgba(225, 29, 72, 0.12)'
                  }}
                >
                  <Heart size={26} />
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
                  Observation and Individual Support
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Children develop at different rates. By observing their participation, interests and emerging abilities, educators can offer appropriate encouragement without turning childhood into pressure. Families are kept connected through regular communication about nursery experiences and progress.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <LuxuryClosingCta
        badge="LEARNING IN ACTION"
        title="Learning Through Play, Discovery and Everyday Experiences"
        subtitle="Our early-years approach uses purposeful play and age-appropriate experiences to support the whole child."
        primaryText="EXPLORE OUR ACTIVITIES"
        primaryLink="/nursery-activities"
        secondaryText="BOOK A NURSERY VISIT"
        secondaryLink="/contact"
        onPrimaryClick={undefined}
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
