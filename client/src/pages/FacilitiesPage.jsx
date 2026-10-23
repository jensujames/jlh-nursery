import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Building2, Trees, Moon, Sparkles, BookOpen, Award, 
  Bath, Utensils, HeartPulse, Stethoscope, Lock, Video, 
  ShieldCheck, Calendar, ArrowRight, Phone, Compass 
} from 'lucide-react';

const FACILITIES = [
  {
    title: 'Safe & Welcoming Classrooms',
    desc: 'Child-friendly learning spaces designed for participation, comfort and age-appropriate experiences.',
    icon: Building2,
    color: '#721024',
    gradient: 'linear-gradient(90deg, #721024, #F15A29)',
    border: 'rgba(114, 16, 36, 0.22)',
    image: '/media/nursery/nursery-4.jpg',
    imageAlt: 'Sunlit safe classroom at Just Like Home Nursery'
  },
  {
    title: 'Indoor Play Area',
    desc: 'A dedicated space for movement, social play and engaging activities.',
    icon: Sparkles,
    color: '#d97706',
    gradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
    border: 'rgba(217, 119, 6, 0.22)',
    image: '/media/nursery/nursery-1.jpg',
    imageAlt: 'Indoor active play and wooden block station'
  },
  {
    title: 'Outdoor Play Area',
    desc: 'Opportunities for fresh air, physical development and active exploration.',
    icon: Trees,
    color: '#059669',
    gradient: 'linear-gradient(90deg, #059669, #10b981)',
    border: 'rgba(5, 150, 105, 0.22)',
    image: '/media/physical-play/physical-1.jpg',
    imageAlt: 'Safe shaded outdoor playground with climbing and slides'
  },
  {
    title: 'Baby Care & Quiet Room',
    desc: 'A calmer environment to support age-appropriate care, rest and comfort.',
    icon: Moon,
    color: '#8b5cf6',
    gradient: 'linear-gradient(90deg, #8b5cf6, #a855f7)',
    border: 'rgba(139, 92, 246, 0.22)',
    image: '/media/daycare/daycare-3.jpg',
    imageAlt: 'Sanitized cots and peaceful quiet sleeping room'
  },
  {
    title: 'Sensory & Exploration Spaces',
    desc: 'Hands-on areas where children can investigate materials and learn through their senses.',
    icon: Sparkles,
    color: '#0d9488',
    gradient: 'linear-gradient(90deg, #0d9488, #14b8a6)',
    border: 'rgba(139, 92, 246, 0.22)',
    image: '/media/eyfs/eyfs-2.jpg',
    imageAlt: 'Sensory water and texture exploration trays'
  },
  {
    title: 'Reading & Story Corner',
    desc: 'An inviting place to enjoy books, conversation, imagination and quiet moments.',
    icon: BookOpen,
    color: '#0284c7',
    gradient: 'linear-gradient(90deg, #0284c7, #38bdf8)',
    border: 'rgba(2, 132, 199, 0.22)',
    image: '/media/phonics-literacy/phonics-horizontal.jpg',
    imageAlt: 'Interactive picture book reading corner'
  },
  {
    title: 'Life-Skills Activity Areas',
    desc: 'Practical experiences that encourage independence, confidence and everyday responsibility.',
    icon: Award,
    color: '#ea580c',
    gradient: 'linear-gradient(90deg, #ea580c, #f97316)',
    border: 'rgba(234, 88, 12, 0.22)',
    image: '/media/life-skills/life-skills-2.jpg',
    imageAlt: 'Practical life skills and organizing personal belongings'
  },
  {
    title: 'Child-Friendly Washrooms',
    desc: 'Facilities designed to support safety, dignity and growing self-care skills.',
    icon: Bath,
    color: '#06b6d4',
    gradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
    border: 'rgba(6, 182, 212, 0.22)'
  },
  {
    title: 'Kitchen & Meal Preparation Area',
    desc: 'A designated area supporting nursery meal and snack routines, subject to current nursery provision.',
    icon: Utensils,
    color: '#d97706',
    gradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
    border: 'rgba(217, 119, 6, 0.22)'
  },
  {
    title: 'First-Aid / Clinic Facility',
    desc: 'A dedicated point for first-aid support and wellbeing needs.',
    icon: HeartPulse,
    color: '#e11d48',
    gradient: 'linear-gradient(90deg, #e11d48, #fb7185)',
    border: 'rgba(225, 29, 72, 0.22)'
  },
  {
    title: 'Doctor Visits',
    desc: 'Doctor visits are provided as part of the nursery\'s health-support practices; frequency and scope should be confirmed before publication.',
    icon: Stethoscope,
    color: '#2563eb',
    gradient: 'linear-gradient(90deg, #2563eb, #3b82f6)',
    border: 'rgba(37, 99, 235, 0.22)'
  },
  {
    title: 'Secure Reception',
    desc: 'A controlled welcome point for visitors, families and daily arrivals.',
    icon: Lock,
    color: '#475569',
    gradient: 'linear-gradient(90deg, #475569, #64748b)',
    border: 'rgba(71, 85, 105, 0.22)'
  },
  {
    title: 'Safe & Child-Friendly Environment',
    desc: 'Every corner is thoughtfully planned with rounded edges, non-toxic materials, and clean, welcoming surroundings.',
    icon: ShieldCheck,
    color: '#16a34a',
    gradient: 'linear-gradient(90deg, #16a34a, #22c55e)',
    border: 'rgba(22, 163, 74, 0.22)'
  },
  {
    title: 'CCTV Monitoring for Enhanced Safety',
    desc: 'Continuous CCTV monitoring supports heightened safety and peace of mind within nursery approved policies.',
    icon: Video,
    color: '#721024',
    gradient: 'linear-gradient(90deg, #721024, #F15A29)',
    border: 'rgba(114, 16, 36, 0.22)'
  }
];

export default function FacilitiesPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "Nursery Facilities & Safety in Ajman | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the safe classrooms, indoor and outdoor play areas, sensory spaces, quiet room, clinic support, secure reception and CCTV at our Ajman nursery.");
    }
  }, []);

  return (
    <div className="facilities-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="FACILITIES & SAFETY · ANSWER PARENT TRUST AND SAFETY QUESTIONS"
        badgeIcon={ShieldCheck}
        title="A Safe, Welcoming Space Created for Little Learners"
        description="Children feel more confident when their environment is comfortable, predictable and designed around their needs. Our nursery spaces support active play, focused discovery, social interaction, rest and everyday routines."
        image="/media/nursery/nursery-1.jpg"
        imageAlt="Facilities and Safety at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Arrange a Nursery Tour"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Contact Us"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to arrange a tour of your facilities in Al Rashidiya 2, Ajman."
      />

      {/* 2. THE 14 FACILITIES */}
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
                CAMPUS &amp; AMENITIES
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
                Fourteen Purpose-Built Spaces
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Every corner is thoughtfully planned with rounded edges, clean welcoming surroundings, and heightened security.
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
            {FACILITIES.map((facility, index) => {
              const Icon = facility.icon;
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 20}>
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
                      e.currentTarget.style.borderColor = facility.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: facility.gradient }} />
                    
                    {/* Authentic Facility Space Photo */}
                    {facility.image && (
                      <div
                        style={{
                          width: '100%',
                          height: '180px',
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          marginBottom: '20px',
                          position: 'relative',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                          backgroundColor: '#f1f5f9'
                        }}
                      >
                        <img
                          src={facility.image}
                          alt={facility.imageAlt || facility.title}
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
                            color: facility.color,
                            fontSize: '11px',
                            fontWeight: '800',
                            padding: '3px 10px',
                            borderRadius: '999px',
                            letterSpacing: '0.3px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                          }}
                        >
                          Villa 47 Space
                        </span>
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div
                        className="luxury-icon-box"
                        style={{
                          backgroundColor: `${facility.color}12`,
                          color: facility.color,
                          border: `1.5px solid ${facility.border}`,
                          boxShadow: `0 8px 18px ${facility.color}15`
                        }}
                      >
                        <Icon size={26} />
                      </div>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: '850',
                          color: facility.color,
                          backgroundColor: '#ffffff',
                          padding: '4px 12px',
                          borderRadius: '999px',
                          border: `1.5px solid ${facility.border}`,
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
                      {facility.title}
                    </h3>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {facility.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SAFETY IS A DAILY PRACTICE */}
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
                <ShieldCheck size={32} />
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
                Safety Is a Daily Practice
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '740px', margin: '0 auto 36px' }}>
                A safe environment depends on more than equipment. It also depends on careful supervision, clear routines, cleanliness, responsible access and communication with families. During your visit, our team will be happy to explain the current safety and wellbeing procedures that apply at the nursery.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 34px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#FAF5EB',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Calendar size={18} />
                  <span>ARRANGE A NURSERY TOUR</span>
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
                  <Phone size={18} />
                  <span>CONTACT US</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="FACILITIES & SAFETY"
        title="A Safe, Welcoming Space Created for Little Learners"
        subtitle="Children feel more confident when their environment is comfortable, predictable and designed around their needs."
        primaryText="ARRANGE A NURSERY TOUR"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="CONTACT US"
        secondaryLink="/contact"
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
