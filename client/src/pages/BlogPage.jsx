import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
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

export default function BlogPage() {
  useEffect(() => {
    document.title = "Parent Resources & Early Years Advice | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Read practical early-years guidance for parents, including nursery readiness, play-based learning, preschool development and choosing a nursery in Ajman.");
    }
  }, []);

  return (
    <div className="blog-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
      {/* 1. HERO & INTRODUCTION */}
      <section className="page-hero-section" style={{ padding: '80px 20px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                marginBottom: '20px'
              }}>
                <BookOpen size={14} />
                PARENT RESOURCES / BLOG · LONG-TERM ORGANIC VISIBILITY AND PARENT EDUCATION
              </span>

              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.2,
                margin: '0 0 24px 0'
              }}>
                Helpful Ideas for Your Child's Early Years
              </h1>

              <div style={{ fontSize: '17.5px', lineHeight: 1.8, color: '#475569', margin: '0 auto 36px', maxWidth: '780px' }}>
                <p style={{ margin: 0 }}>
                  The early years bring exciting milestones and plenty of questions. Our parent resources share practical ideas to help families understand learning, support growing independence and prepare children for nursery and school.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    backgroundColor: '#721024',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Calendar size={18} />
                  <span>BOOK A VISIT</span>
                </Link>
                <Link
                  to="/about-us"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#721024',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '1.5px solid #721024',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>ABOUT OUR NURSERY</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. RECOMMENDED LAUNCH ARTICLES */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                marginBottom: '14px'
              }}>
                PARENT GUIDES
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#721024', margin: 0 }}>
                Recommended Launch Articles
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {ARTICLES.map((article, index) => (
              <RevealOnScroll key={index} delay={index * 35}>
                <div style={{
                  background: '#FFFDF7',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '850', color: '#1e293b', marginBottom: '14px', lineHeight: 1.4 }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#64748b', fontStyle: 'italic', marginBottom: '20px' }}>
                      {article.note}
                    </p>
                  </div>

                  <div style={{ paddingTop: '18px', borderTop: '1px solid #f1f5f9' }}>
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
                            border: '1px solid #fed7aa',
                            color: '#721024',
                            textDecoration: 'none'
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
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '48px 36px',
              border: '1.5px solid rgba(114, 16, 36, 0.12)',
              boxShadow: '0 10px 30px rgba(114, 16, 36, 0.04)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '20px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Info size={30} />
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '900', color: '#721024', marginBottom: '18px' }}>
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
                    backgroundColor: '#721024',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)',
                    transition: 'all 0.25s ease'
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
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1.25 }}>
              Helpful Ideas for Your Child's Early Years
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              The early years bring exciting milestones and plenty of questions. Our parent resources share practical ideas to help families understand learning, support growing independence and prepare children for nursery and school.
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
                  fontSize: '15.5px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Calendar size={18} />
                <span>BOOK A VISIT</span>
              </Link>
              <Link
                to="/about-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '15.5px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>ABOUT OUR NURSERY</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
