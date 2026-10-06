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
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
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
                  margin: 0
                }}
              >
                Recommended Launch Articles
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '26px'
            }}
          >
            {ARTICLES.map((article, index) => (
              <RevealOnScroll key={index} delay={index * 30}>
                <div
                  style={{
                    background: '#FFFDF7',
                    borderRadius: '24px',
                    padding: '34px 28px',
                    border: '1.5px solid #ffede4',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                        fontSize: '20px',
                        fontWeight: '850',
                        color: '#721024',
                        marginBottom: '14px',
                        lineHeight: 1.4
                      }}
                    >
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#64748b', fontStyle: 'italic', marginBottom: '20px' }}>
                      {article.note}
                    </p>
                  </div>

                  <div style={{ paddingTop: '18px', borderTop: '1px solid #f8e8e8' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {article.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.url}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '13px',
                            fontWeight: '700',
                            padding: '6px 14px',
                            borderRadius: '999px',
                            backgroundColor: '#ffffff',
                            border: '1.5px solid #ffede4',
                            color: '#721024',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s ease'
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
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL DIRECTION */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '30px',
                padding: 'clamp(36px, 5vw, 54px) clamp(24px, 4vw, 44px)',
                border: '1.5px solid #ffede4',
                boxShadow: '0 12px 36px rgba(114, 16, 36, 0.04)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '18px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <Info size={30} />
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
                Editorial Direction
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 32px' }}>
                Articles should answer real parent questions clearly and naturally. Avoid repetitive location keywords, generic AI-style introductions and unsupported claims. Each article should include one primary search topic, original insight from the nursery team, relevant internal links and a gentle invitation to book a visit.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 30px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)',
                    transition: 'transform 0.2s ease'
                  }}
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
