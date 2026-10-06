import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  BookOpen, Calculator, Globe2, Palette, Sparkles, 
  Music, Trees, Award, Calendar, Bus, ArrowRight, Camera, Compass 
} from 'lucide-react';

const ACTIVITIES = [
  {
    title: 'Phonics & Literacy',
    desc: 'Sounds, songs, stories, conversation and mark-making help develop listening, vocabulary and early literacy.',
    icon: BookOpen,
    color: '#0284c7',
    gradient: 'linear-gradient(90deg, #0284c7, #38bdf8)',
    border: 'rgba(2, 132, 199, 0.22)'
  },
  {
    title: 'Early Numeracy',
    desc: 'Counting, sorting, matching, shapes, patterns and practical games make mathematical ideas easier to understand.',
    icon: Calculator,
    color: '#d97706',
    gradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
    border: 'rgba(217, 119, 6, 0.22)'
  },
  {
    title: 'Arabic Language Learning',
    desc: 'Age-appropriate Arabic experiences introduce children to language through engaging activities and familiar repetition.',
    icon: Globe2,
    color: '#16a34a',
    gradient: 'linear-gradient(90deg, #16a34a, #22c55e)',
    border: 'rgba(22, 163, 74, 0.22)'
  },
  {
    title: 'Creative Arts & Crafts',
    desc: 'Painting, drawing, collage and making give children freedom to express ideas while developing fine-motor skills.',
    icon: Palette,
    color: '#e11d48',
    gradient: 'linear-gradient(90deg, #e11d48, #fb7185)',
    border: 'rgba(225, 29, 72, 0.22)'
  },
  {
    title: 'Sensory & Exploration',
    desc: 'Hands-on play invites children to investigate textures, materials, movement, cause and effect.',
    icon: Sparkles,
    color: '#0d9488',
    gradient: 'linear-gradient(90deg, #0d9488, #14b8a6)',
    border: 'rgba(13, 148, 136, 0.22)'
  },
  {
    title: 'Stories, Rhymes & Music',
    desc: 'Books, songs and rhythm strengthen memory, listening, language and joyful participation.',
    icon: Music,
    color: '#721024',
    gradient: 'linear-gradient(90deg, #721024, #F15A29)',
    border: 'rgba(114, 16, 36, 0.22)'
  },
  {
    title: 'Physical & Outdoor Play',
    desc: 'Movement supports coordination, strength, balance, confidence and healthy habits.',
    icon: Trees,
    color: '#ea580c',
    gradient: 'linear-gradient(90deg, #ea580c, #f97316)',
    border: 'rgba(234, 88, 12, 0.22)'
  },
  {
    title: 'Life Skills & Independence',
    desc: 'Practical routines encourage responsibility, self-help skills, good manners and confidence.',
    icon: Award,
    color: '#8b5cf6',
    gradient: 'linear-gradient(90deg, #8b5cf6, #a855f7)',
    border: 'rgba(139, 92, 246, 0.22)'
  },
  {
    title: 'Theme Days & Celebrations',
    desc: 'Special experiences bring learning to life and create happy shared memories.',
    icon: Calendar,
    color: '#ec4899',
    gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)',
    border: 'rgba(236, 72, 153, 0.22)'
  },
  {
    title: 'Educational Trips & Outings',
    desc: 'Where offered, carefully planned outings extend children\'s understanding beyond the classroom.',
    icon: Bus,
    color: '#0891b2',
    gradient: 'linear-gradient(90deg, #0891b2, #06b6d4)',
    border: 'rgba(8, 145, 178, 0.22)'
  }
];

export default function ActivitiesPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "Nursery Activities in Ajman | Play, Create & Explore";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore phonics, numeracy, Arabic, sensory play, art, music, stories, outdoor activities and life skills at Just Like Home Nursery in Ajman.");
    }
  }, []);

  return (
    <div className="activities-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="ACTIVITIES · SHOW THE RICHNESS OF THE NURSERY EXPERIENCE"
        badgeIcon={Sparkles}
        title="Every Day Brings a New Way to Discover"
        description="Children learn best when experiences feel meaningful, active and enjoyable. Our nursery activities encourage curiosity, communication, imagination, movement and growing independence."
        image="/images/hero-activities.jpg"
        imageAlt="Activities at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="View Our Gallery"
        primaryLink="/gallery"
        secondaryCtaText="Book a Visit"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to learn more about nursery activities."
      />

      {/* 2. THE 10 ACTIVITIES */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
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
                ENRICHING EXPERIENCES
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
                Ten Pathways of Joyful Exploration
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Every activity is intentionally guided to stimulate curious minds, fine-motor dexterity, and social empathy.
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
            {ACTIVITIES.map((act, index) => {
              const Icon = act.icon;
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 25}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.90)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      borderRadius: '2rem',
                      padding: '2.4rem 2rem',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      height: '100%',
                      boxSizing: 'border-box',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                      e.currentTarget.style.boxShadow = `0 24px 50px rgba(114, 16, 36, 0.12), 0 2px 12px rgba(255, 255, 255, 0.9) inset`;
                      e.currentTarget.style.borderColor = act.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: act.gradient }} />
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '1.15rem',
                          backgroundColor: '#ffffff',
                          color: act.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `2px solid ${act.border}`,
                          boxShadow: '0 8px 18px rgba(114, 16, 36, 0.06)'
                        }}
                      >
                        <Icon size={26} />
                      </div>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: '850',
                          color: act.color,
                          backgroundColor: '#ffffff',
                          padding: '4px 12px',
                          borderRadius: '999px',
                          border: `1.5px solid ${act.border}`,
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                        }}
                      >
                        {formattedIndex}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                        fontSize: '21px',
                        fontWeight: '850',
                        color: '#721024',
                        marginBottom: '12px',
                        lineHeight: 1.3
                      }}
                    >
                      {act.title}
                    </h3>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {act.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SEE LEARNING IN ACTION */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '2.5rem',
                padding: 'clamp(40px, 6vw, 60px) clamp(24px, 5vw, 50px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 20px 50px rgba(114, 16, 36, 0.06), 0 2px 12px rgba(255, 255, 255, 0.9) inset',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
              
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '1.25rem',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  border: '2px solid rgba(114, 16, 36, 0.18)',
                  boxShadow: '0 10px 22px rgba(114, 16, 36, 0.08)'
                }}
              >
                <Camera size={32} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '900',
                  color: '#721024',
                  marginBottom: '18px'
                }}
              >
                See Learning in Action
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 36px' }}>
                Visit our gallery for a closer look at nursery activities, spaces and special moments. Images should always be current, authentic and used with appropriate parent or guardian consent.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/gallery"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 34px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Camera size={18} />
                  <span>VIEW OUR GALLERY</span>
                </Link>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 34px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#721024',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '2px solid #721024',
                    boxShadow: '0 6px 18px rgba(114, 16, 36, 0.08)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Calendar size={18} />
                  <span>BOOK A VISIT</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="NURSERY ACTIVITIES"
        title="Every Day Brings a New Way to Discover"
        subtitle="Children learn best when experiences feel meaningful, active and enjoyable. Our nursery activities encourage curiosity, communication, imagination, movement and growing independence."
        primaryText="VIEW OUR GALLERY"
        primaryLink="/gallery"
        secondaryText="BOOK A VISIT"
        secondaryLink="/contact"
        onPrimaryClick={undefined}
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
