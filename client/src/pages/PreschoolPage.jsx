import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  GraduationCap, CheckCircle2, Sparkles, BookOpen, 
  Calculator, Users, ArrowRight, ShieldCheck, Calendar, 
  Smile, Star, Award, Clock, Heart, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const READINESS_DOMAINS = [
  {
    id: 'phonics',
    title: 'Phonics & Early Literacy',
    icon: BookOpen,
    color: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    desc: 'Children learn letter sounds through multi-sensory Jolly Phonics actions, finger-tracing sand letters, and blending consonants into words. They cultivate a genuine love for reading and narrative structure.',
    image: '/images/classroom.jpg',
    milestones: ['Recognizing All 42 Basic Letter Sounds', 'Blending CVC Words (e.g. Cat, Sun, Pen)', 'Holding Books & Predicting Story Events'],
    badge: 'Phonics Ready 🔤'
  },
  {
    id: 'numeracy',
    title: 'Concrete Numeracy & Logic',
    icon: Calculator,
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    desc: 'Using wooden counters, balance scales, and geometric shape blocks to understand quantities, spatial geometry, measuring, patterns, and everyday problem-solving.',
    image: '/images/activity-mini-stem.jpg',
    milestones: ['Counting Real Objects to 20+', 'Pattern Sequencing & Symmetry', 'Comparing Weights, Lengths & Capacities'],
    badge: 'Numeracy Ace 🔢'
  },
  {
    id: 'fine-motor',
    title: 'Pencil Grip & Dexterity',
    icon: Sparkles,
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    desc: 'Developing finger muscle strength through Montessori tweezers, therapy clay, and controlled mark-making. Children effortlessly adopt the dynamic tripod pencil grip without strain.',
    image: '/images/activity-little-artists.jpg',
    milestones: ['Dynamic Tripod Pencil Grip', 'Controlled Scissor Cutting on Lines', 'Tracing Shapes, Pre-Writing Waves & Letters'],
    badge: 'Fine Motor Pro ✏️'
  },
  {
    id: 'independence',
    title: 'Social Poise & Self-Care',
    icon: Heart,
    color: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    desc: 'Confident self-reliance in managing personal belongings, fastening coats, unzipping backpacks, washing hands thoroughly, and speaking clearly with educators and peers.',
    image: '/images/growing-minds-center.jpg',
    milestones: ['Independent Self-Care & Dressing', 'Expressing Personal Needs Clearly', 'Collaborative Group Work & Turn-Taking'],
    badge: 'Confident Leader 🌟'
  }
];

const READINESS_SKILLS = [
  { title: "Listening & Classroom Routines", desc: "Following multi-step directions, sitting comfortably during group circle, and respecting classroom transitions." },
  { title: "Confident Self-Expression", desc: "Expressing ideas, thoughts, and personal needs politely and clearly in front of peers and educators." },
  { title: "Jolly Phonics & Pre-Literacy", desc: "Recognizing letter sounds, rhyming patterns, holding books correctly, and identifying environmental print." },
  { title: "Early Math & Logical Thinking", desc: "Counting real objects up to 20, recognizing patterns, measuring, and classifying geometric shapes." },
  { title: "Fine-Motor Pencil Grip", desc: "Building finger strength through playdough, tongs, and mark-making to master dynamic tripod pencil grip." },
  { title: "Social Poise & Cooperation", desc: "Taking turns happily, sharing equipment, negotiating compromises, and showing empathy for classmates." },
  { title: "Independence & Self-Care", desc: "Fastening coats, managing velcro shoes, washing hands thoroughly, and packing personal lunchboxes." },
  { title: "Resilient Problem-Solving", desc: "Trying again when a puzzle is tricky, asking thoughtful questions, and embracing new challenges with a smile." }
];

export default function PreschoolPage({ onBookVisitClick }) {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const curDomain = READINESS_DOMAINS[activeDomainIdx];
  const DomainIcon = curDomain.icon;

  return (
    <div>
      <PageHeader
        badge="Ages 3 to 5 Years"
        title="Big Steps Start With School Readiness"
        subtitle="Empowering confident, curious learners with foundational literacy, early mathematics, routines, and independent life skills for primary school."
        onBookVisitClick={onBookVisitClick}
        image="/images/classroom.jpg"
        imageAlt="Preschool school readiness, alphabet blocks, phonics and numeracy learning"
        primaryCtaText="Enrol for Preschool"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "School Prep",
          subject: "Numeracy",
          status: "85% complete",
          percentage: 85
        }}
        cardGreatJob={{
          title: "Reading Stars 📚",
          subtitle: "Jolly Phonics Level 1"
        }}
        cardNextLesson={{
          label: "Next Lesson",
          subject: "Literacy",
          topic: "Pencil Grip & Letters"
        }}
      />

      {/* SECTION 1: Interactive School Readiness Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">KG &amp; PRIMARY READINESS</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Four Pillars of Primary School Readiness
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Click each pillar to see how our preschool classroom transforms natural curiosity into the foundational academic and social confidence required for big school.
              </p>
            </div>
          </RevealOnScroll>

          {/* Readiness Tabs Bar */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {READINESS_DOMAINS.map((domain, dIdx) => {
              const IconComp = domain.icon;
              const isActive = dIdx === activeDomainIdx;
              return (
                <button
                  key={domain.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveDomainIdx(dIdx)}
                  style={isActive ? { background: domain.color, borderColor: domain.color } : {}}
                >
                  <IconComp size={16} style={{ color: isActive ? '#ffffff' : domain.color }} />
                  <span>{domain.title}</span>
                </button>
              );
            })}
          </div>

          {/* Split Showcase Container */}
          <div 
            className="fac-showcase-container"
            style={{
              padding: '2.5rem 3rem 3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Left Content Column */}
            <div key={`${curDomain.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curDomain.bg,
                color: curDomain.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <DomainIcon size={15} />
                <span>KG1 &bull; KG2 Preparation Focus</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curDomain.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curDomain.desc}
              </p>

              {/* Milestones Checklist */}
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '14px 18px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Target School Readiness Competencies
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {curDomain.milestones.map((m, mIdx) => (
                    <div key={mIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                      <CheckCircle2 size={15} style={{ color: curDomain.color, flexShrink: 0 }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onBookVisitClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    background: curDomain.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curDomain.color}60`
                  }}
                >
                  <span>Schedule Preschool Readiness Assessment</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${curDomain.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curDomain.image}
                  alt={curDomain.title}
                  style={{ width: '100%', height: '410px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Badge */}
              <div
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '-18px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  padding: '10px 18px',
                  boxShadow: '0 18px 36px -8px rgba(0, 0, 0, 0.16)',
                  border: '2px solid rgba(255, 255, 255, 0.95)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#0f172a'
                }}
              >
                {curDomain.badge}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 8 Core Readiness Skills Grid */}
      <section className="section-padding bg-cream" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
              <span className="badge-maroon">EVALUATION CHECKLIST</span>
              <h2 style={{ fontSize: '2.2rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginTop: '0.4rem', fontWeight: 800 }}>
                8 Core Competencies Every Child Develops
              </h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.65 }}>
                Our experienced preschool educators track each child's individual progress across these eight essential life and learning skills.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {READINESS_SKILLS.map((skill, idx) => (
              <RevealOnScroll key={idx} animation="from-bottom" delay={idx * 60}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  border: '1.5px solid rgba(123, 17, 39, 0.08)',
                  boxShadow: '0 8px 24px rgba(114, 16, 36, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#e0f2fe',
                        color: '#0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Check size={16} />
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                        {skill.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* CTA Banner */}
          <RevealOnScroll animation="zoom-in">
            <div className="clay-glass-banner-pastel" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <div className="clay-glow-orb clay-orb-1" />
              <div className="clay-glow-orb clay-orb-2" />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  border: '1.5px solid rgba(241, 90, 41, 0.3)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '999px',
                  color: '#ea580c',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  <Sparkles size={14} style={{ color: '#f59e0b' }} />
                  <span>Preschool Enrollment Open</span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  color: '#1e293b',
                  lineHeight: '1.25'
                }}>
                  Ready to give your child the best start for school?
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.55', marginTop: '0.5rem' }}>
                  Tour our preschool suites at Villa 47, meet our EYFS coordinators, and secure a spot for the upcoming term.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <button onClick={onBookVisitClick} className="btn-clay-gold">
                  <Calendar size={18} />
                  <span>Book Guided Preschool Visit</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
