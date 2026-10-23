import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Baby, Sparkles, BookOpen, GraduationCap, Clock, Sun, 
  ArrowRight, Calendar, Compass, Layers, CheckCircle2 
} from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Early Years Foundation',
    desc: 'A gentle introduction to nursery life, with caring routines, sensory experiences, communication-rich play, movement and opportunities to build secure relationships.',
    icon: Baby,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/eyfs-learning',
    image: '/media/eyfs/eyfs-4.jpg',
    imageAlt: 'Early Years Foundation sensory discovery at Just Like Home'
  },
  {
    title: 'Nursery Program',
    desc: 'Children build confidence through play, stories, music, creative activities, physical development and social interaction. Experiences are planned to encourage language, curiosity, cooperation and growing independence.',
    icon: Sparkles,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/nursery-activities',
    image: '/media/nursery/nursery-1.jpg',
    imageAlt: 'Nursery Program interactive play and motor development'
  },
  {
    title: 'Preschool Program',
    desc: 'A stimulating program that extends early literacy, numeracy, communication and problem-solving while continuing to protect the joy of learning through play.',
    icon: BookOpen,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/preschool-school-readiness',
    image: '/media/preschool/preschool-3.jpg',
    imageAlt: 'Preschool literacy and bilingual learning'
  },
  {
    title: 'School Readiness',
    desc: 'Children prepare for their next educational step through routines, listening, communication, independence, early academic foundations and the confidence to participate in a group environment.',
    icon: GraduationCap,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/preschool-school-readiness',
    image: '/media/school-readiness/school-readiness-4.jpg',
    imageAlt: 'School readiness classroom routines and pencil grip'
  },
  {
    title: 'Full-Day & Half-Day Care',
    desc: 'Flexible attendance options support different family schedules while maintaining a consistent, nurturing experience for each child. Confirm current timings and availability with the nursery team.',
    icon: Clock,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/daycare-ajman',
    image: '/media/daycare/daycare-3.jpg',
    imageAlt: 'Daycare comfort and resting sanctuary'
  },
  {
    title: 'Winter & Summer Camps',
    desc: 'Seasonal programs combine creativity, movement, exploration, social interaction and themed experiences in a safe and familiar nursery setting.',
    icon: Sun,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/camps',
    image: '/media/physical-play/physical-1.jpg',
    imageAlt: 'Seasonal camps outdoor exploration and games'
  }
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
  'Winter & Summer Camp Programs',
  'Educational Trips & Outings',
  'Regular Parent Communication'
];

const DEVELOPMENTAL_STAGES = [
  {
    stage: 'Early Explorers',
    desc: 'A caring beginning focused on comfort, secure relationships, sensory discovery and early communication.'
  },
  {
    stage: 'Curious Learners',
    desc: 'Playful opportunities to build language, coordination, social confidence and independence.'
  },
  {
    stage: 'Confident Preschoolers',
    desc: 'Broader experiences in literacy, numeracy, creativity, problem-solving and group participation.'
  },
  {
    stage: 'School-Ready Learners',
    desc: 'Focused preparation for school routines, communication, self-help skills and foundational learning.'
  }
];

export default function ProgramsPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "Nursery Programs in Ajman | Just Like Home Nursery";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore early years, nursery, preschool, school readiness and flexible full-day and half-day care programs at Just Like Home Nursery in Ajman.");
    }
  }, []);

  return (
    <div className="programs-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="OUR PROGRAMS · PROGRAM OVERVIEW AND PATHWAY SELECTION"
        badgeIcon={Compass}
        title="The Right Support for Every Little Step"
        description={[
          "Children's needs change quickly during the early years. Our programs are designed to provide the right balance of nurturing care, purposeful play, social experience and age-appropriate learning at each stage.",
          "Exact class placement is guided by your child's age, developmental needs, readiness and available nursery groups. Our team will help you choose the most suitable pathway during your visit."
        ]}
        image="/media/nursery/nursery-2.jpg"
        imageAlt="Programs at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Find the Right Program"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to enquire about your nursery programs."
      />

      {/* 2. THE SIX CORE PROGRAMS */}
      <section 
        id="programs-grid" 
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
                OUR CORE OFFERINGS
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
                The Six Core Programs
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Every program balances motherly care, purposeful play, social experience and age-appropriate learning at each developmental milestone.
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
            {PROGRAMS.map((prog, index) => {
              const Icon = prog.icon;
              return (
                <RevealOnScroll key={index} delay={index * 50}>
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
                      justifyContent: 'space-between',
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
                    <div>
                      {/* Authentic Program Photo */}
                      {prog.image && (
                        <div
                          style={{
                            width: '100%',
                            height: '190px',
                            borderRadius: '1.25rem',
                            overflow: 'hidden',
                            marginBottom: '20px',
                            position: 'relative',
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                            backgroundColor: '#f1f5f9'
                          }}
                        >
                          <img
                            src={prog.image}
                            alt={prog.imageAlt || prog.title}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block'
                            }}
                          />
                          <div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)',
                              pointerEvents: 'none'
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
                            JLH Certified Program
                          </span>
                        </div>
                      )}

                      <div className="luxury-icon-box luxury-icon-burgundy" style={{ marginBottom: '18px' }}>
                        <Icon size={26} />
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '22px',
                          fontWeight: '850',
                          color: '#721024',
                          marginBottom: '14px'
                        }}
                      >
                        {prog.title}
                      </h3>
                      <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                        {prog.desc}
                      </p>
                    </div>

                    <div style={{ paddingTop: '22px', marginTop: '22px', borderTop: '1px solid #f8e8e8' }}>
                      <Link 
                        to={prog.link} 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: '800',
                          fontSize: '14px',
                          color: '#721024',
                          textDecoration: 'none',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          backgroundColor: '#fff1f2',
                          border: '1px solid rgba(114, 16, 36, 0.12)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>Enquire About Pathway</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. AGE GROUPS (BY DEVELOPMENTAL STAGE) */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
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
                <Layers size={14} />
                DEVELOPMENTAL PATHWAY
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
                Age Groups
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#64748b', margin: 0 }}>
                The website should display age groups only after the nursery confirms its licensed age range and official class names. Until then, present the parent journey by developmental stage:
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {DEVELOPMENTAL_STAGES.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.90)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderRadius: '2rem',
                    padding: '2.25rem 1.85rem',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(114, 16, 36, 0.12), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                    e.currentTarget.style.borderColor = '#721024';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #c9a84c)' }} />
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      color: '#721024',
                      backgroundColor: '#fff1f2',
                      padding: '5px 14px',
                      borderRadius: '999px',
                      marginBottom: '16px',
                      alignSelf: 'flex-start',
                      border: '1px solid rgba(114, 16, 36, 0.12)'
                    }}
                  >
                    Stage 0{index + 1}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '20px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '12px'
                    }}
                  >
                    {item.stage}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALL 16 COMPREHENSIVE SERVICES */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderTop: '1px solid #f1f5f9' 
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
                🌟 COMPREHENSIVE PROVISIONS
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
                Our Complete Suite of Nursery Services
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Every program and daily activity is supported by full-service care, dedicated educators, and modern nursery amenities.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px'
            }}
          >
            {SERVICES_LIST.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 25}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '1.25rem',
                    padding: '20px 22px',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 6px 20px rgba(74, 14, 26, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(114, 16, 36, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 14, 26, 0.03)';
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
                      border: '1px solid rgba(114, 16, 36, 0.12)'
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: '750', color: '#1e293b', lineHeight: 1.45 }}>
                    {service}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <LuxuryClosingCta
        badge="FIND THE RIGHT PROGRAM"
        title="The Right Support for Every Little Step"
        subtitle="Exact class placement is guided by your child's age, developmental needs, readiness and available nursery groups. Our team will help you choose the most suitable pathway during your visit."
        primaryText="BOOK A VISIT"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="FIND THE RIGHT PROGRAM"
        secondaryLink="/contact"
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
