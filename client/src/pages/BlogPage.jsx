import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  BookOpen, Calendar, ArrowRight, Sparkles, Compass, 
  HelpCircle, Heart, GraduationCap, Info 
} from 'lucide-react';

const ARTICLES = [
  {
    title: 'How to Choose the Right Nursery in Ajman',
    note: 'Links to About, Facilities, Programs and Contact.',
    links: [
      { label: 'About', url: '/about-us' },
      { label: 'Facilities', url: '/facilities' },
      { label: 'Programs', url: '/programs' },
      { label: 'Contact', url: '/contact' }
    ]
  },
  {
    title: 'How to Prepare Your Child for Their First Day at Nursery',
    note: 'Links to Admissions and About.',
    links: [
      { label: 'Admissions', url: '/admissions' },
      { label: 'About', url: '/about-us' }
    ]
  },
  {
    title: 'What Is EYFS and How Does It Support Early Learning?',
    note: 'Links to EYFS & Learning.',
    links: [
      { label: 'EYFS & Learning', url: '/eyfs-learning' }
    ]
  },
  {
    title: 'Nursery vs Preschool: What\'s the Difference?',
    note: 'Links to Programs and Preschool.',
    links: [
      { label: 'Programs', url: '/programs' }
    ]
  },
  {
    title: 'How Play-Based Learning Helps Young Children Develop',
    note: 'Links to EYFS and Activities.',
    links: [
      { label: 'EYFS', url: '/eyfs-learning' },
      { label: 'Activities', url: '/nursery-activities' }
    ]
  },
  {
    title: 'Simple Ways to Build Independence Before Starting School',
    note: 'Links to Preschool & School Readiness.',
    links: [
      { label: 'Programs', url: '/programs' }
    ]
  },
  {
    title: 'Why Sensory Play Matters in the Early Years',
    note: 'Links to Activities and Facilities.',
    links: [
      { label: 'Activities', url: '/nursery-activities' },
      { label: 'Facilities', url: '/facilities' }
    ]
  },
  {
    title: 'Questions to Ask When Visiting a Nursery',
    note: 'Links to Facilities, Admissions and Contact.',
    links: [
      { label: 'Facilities', url: '/facilities' },
      { label: 'Admissions', url: '/admissions' },
      { label: 'Contact', url: '/contact' }
    ]
  }
];

export default function BlogPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "Parent Resources & Early Years Advice | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Read practical early-years guidance for parents, including nursery readiness, play-based learning, preschool development and choosing a nursery in Ajman.");
    }
  }, []);

  return (
    <div className="blog-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="PARENT RESOURCES / BLOG · LONG-TERM ORGANIC VISIBILITY AND PARENT EDUCATION"
        badgeIcon={BookOpen}
        title="Helpful Ideas for Your Child's Early Years"
        description="The early years bring exciting milestones and plenty of questions. Our parent resources share practical ideas to help families understand learning, support growing independence and prepare children for nursery and school."
        image="/images/hero-blog.jpg"
        imageAlt="Parent Resources at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="About Our Nursery"
        secondaryLink="/about-us"
        whatsappText="Hello Just Like Home Nursery, I would like to enquire about your nursery."
      />

      {/* 2. RECOMMENDED LAUNCH ARTICLES */}
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
                PARENT GUIDES
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
                Recommended Launch Articles
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Practical, evidence-backed advice to guide each milestone of early childhood with confidence.
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
            {ARTICLES.map((article, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              const cardAccents = [
                { color: '#721024', gradient: 'linear-gradient(90deg, #721024, #F15A29)', icon: Compass },
                { color: '#e11d48', gradient: 'linear-gradient(90deg, #e11d48, #fb7185)', icon: Heart },
                { color: '#d97706', gradient: 'linear-gradient(90deg, #d97706, #f59e0b)', icon: Sparkles },
                { color: '#0284c7', gradient: 'linear-gradient(90deg, #0284c7, #38bdf8)', icon: GraduationCap },
                { color: '#059669', gradient: 'linear-gradient(90deg, #059669, #10b981)', icon: BookOpen },
                { color: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a855f7)', icon: HelpCircle },
                { color: '#0d9488', gradient: 'linear-gradient(90deg, #0d9488, #14b8a6)', icon: Sparkles },
                { color: '#ea580c', gradient: 'linear-gradient(90deg, #ea580c, #f97316)', icon: Info }
              ];
              const accent = cardAccents[index % cardAccents.length];
              const CardIcon = accent.icon;

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
                      justifyContent: 'space-between',
                      height: '100%',
                      boxSizing: 'border-box',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                      e.currentTarget.style.boxShadow = `0 24px 50px rgba(114, 16, 36, 0.12), 0 2px 12px rgba(255, 255, 255, 0.9) inset`;
                      e.currentTarget.style.borderColor = accent.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: accent.gradient }} />
                    
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '1.15rem',
                            backgroundColor: '#ffffff',
                            color: accent.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid rgba(114, 16, 36, 0.14)`,
                            boxShadow: '0 8px 18px rgba(114, 16, 36, 0.06)'
                          }}
                        >
                          <CardIcon size={26} />
                        </div>
                        <span
                          style={{
                            fontSize: '12.5px',
                            fontWeight: '850',
                            color: accent.color,
                            backgroundColor: '#ffffff',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            border: '1.5px solid rgba(114, 16, 36, 0.14)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                          }}
                        >
                          GUIDE {formattedIndex}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '20.5px',
                          fontWeight: '850',
                          color: '#721024',
                          marginBottom: '12px',
                          lineHeight: 1.35
                        }}
                      >
                        {article.title}
                      </h3>
                      <p style={{ fontSize: '14.5px', color: '#64748b', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                        {article.note}
                      </p>
                    </div>

                    <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(114, 16, 36, 0.08)' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {article.links.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            to={link.url}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '13px',
                              fontWeight: '750',
                              padding: '7px 16px',
                              borderRadius: '999px',
                              backgroundColor: '#ffffff',
                              border: '1.5px solid rgba(114, 16, 36, 0.16)',
                              color: '#721024',
                              textDecoration: 'none',
                              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#721024';
                              e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#ffffff';
                              e.currentTarget.style.color = '#721024';
                            }}
                          >
                            <span>{link.label}</span>
                            <ArrowRight size={12} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL DIRECTION */}
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
                <Info size={32} />
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
                Editorial Direction
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 36px' }}>
                Articles should answer real parent questions clearly and naturally. Avoid repetitive location keywords, generic AI-style introductions and unsupported claims. Each article should include one primary search topic, original insight from the nursery team, relevant internal links and a gentle invitation to book a visit.
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
        badge="PARENT RESOURCES"
        title="Helpful Ideas for Your Child's Early Years"
        subtitle="The early years bring exciting milestones and plenty of questions. Our parent resources share practical ideas to help families understand learning, support growing independence and prepare children for nursery and school."
        primaryText="BOOK A VISIT"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="ABOUT OUR NURSERY"
        secondaryLink="/about-us"
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
