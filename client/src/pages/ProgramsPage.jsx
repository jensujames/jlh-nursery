import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProgramsSection from '../components/ProgramsSection';
import AdmissionsCalculator from '../components/AdmissionsCalculator';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Baby, Smile, GraduationCap, 
  Clock, CheckCircle2, Heart, Award, ShieldCheck, Sun, 
  BookOpen, Star, Calendar
} from 'lucide-react';

const AGE_PROGRAMS = [
  {
    id: 'infant-care',
    label: 'Infant Care',
    age: '45 Days – 12 Months',
    icon: Baby,
    theme: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    title: 'Infant Nurturing & Sensory Nest',
    headline: 'Gentle, 1-on-1 Motherly Attention in a Calm Environment',
    desc: 'Our infant sanctuary provides tranquil sleep pods, calibrated 22°C ambient climate, and dedicated motherly caregivers. We focus on sensory discovery, tummy time milestones, soothing lullabies, and individual feeding schedules.',
    image: '/images/nurturing-hero.jpg',
    ratio: '1:3 Caregiver Ratio',
    routine: [
      { time: '08:00 AM', event: 'Gentle Welcome & Health Check' },
      { time: '09:30 AM', event: 'Sensory Texture & Tactile Play' },
      { time: '11:00 AM', event: 'Quiet Rest in Sound-Damped Cribs' },
      { time: '01:30 PM', event: 'Tummy Time & Motor Milestones' }
    ],
    skills: ['Sensory Exploration', 'Visual & Auditory Tracking', 'Secure Emotional Bonding'],
    floatingCard: {
      title: 'Rest & Comfort',
      metric: '100% Calibrated',
      sub: 'Individual Sleep Pods'
    }
  },
  {
    id: 'toddler-play',
    label: 'Toddler Play',
    age: '1 – 2 Years',
    icon: Smile,
    theme: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    title: 'Toddler Discovery & First Words',
    headline: 'Active Physical Movement, Rhymes, and Social Curiosity',
    desc: 'Curious toddlers need space to explore safely. We guide their rapid language emergence with bilingual songs, fine-motor stacking toys, messy art discovery, and cushioned indoor/outdoor obstacle paths.',
    image: '/images/activity-creative-play.jpg',
    ratio: '1:4 Caregiver Ratio',
    routine: [
      { time: '08:30 AM', event: 'Circle Greeting & Action Songs' },
      { time: '10:00 AM', event: 'Messy Art & Washable Painting' },
      { time: '11:30 AM', event: 'UV-Shaded Outdoor Motor Play' },
      { time: '02:00 PM', event: 'Storybook Phonics & Vocabulary' }
    ],
    skills: ['First 200 Words & Speech', 'Balance & Bilateral Steps', 'Peer Social Empathy'],
    floatingCard: {
      title: 'Motor Movement',
      metric: '85 Min / Day',
      sub: 'Active Grass Turf'
    }
  },
  {
    id: 'early-learners',
    label: 'Early Learners',
    age: '2 – 3 Years',
    icon: Sparkles,
    theme: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    title: 'Early Explorers & STEM Curiosity',
    headline: 'Hands-on Math, Storytelling, and Creative Independence',
    desc: 'Children at this age love to ask "why?". We channel their natural inquisitiveness with Montessori practical life trays, preschool magnifying labs, color theory, counting beads, and collaborative problem-solving.',
    image: '/images/activity-mini-stem.jpg',
    ratio: '1:6 Educator Ratio',
    routine: [
      { time: '08:30 AM', event: 'Interactive Calendar & Phonics' },
      { time: '10:00 AM', event: 'Mini STEM Sorting & Water Lab' },
      { time: '11:45 AM', event: 'Healthy Shared Lunch & Manners' },
      { time: '02:30 PM', event: 'Roleplay & Imaginative Lab' }
    ],
    skills: ['Numbers 1–20 & Shapes', 'Pencil Control & Pre-Writing', 'Self-Help Independence'],
    floatingCard: {
      title: 'Early STEM Lab',
      metric: '12 Milestones',
      sub: 'Sensory Observation'
    }
  },
  {
    id: 'preschool-prep',
    label: 'Preschool & KG Prep',
    age: '3 – 4+ Years',
    icon: GraduationCap,
    theme: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    title: 'Preschool & Primary School Readiness',
    headline: 'Bilingual Confidence, Phonics Mastery, and Leadership',
    desc: 'Ensuring your child enters primary school at the top of their cohort. We combine Jolly Phonics reading foundations, bilingual Arabic/English conversation, numeracy problem solving, and confident peer presentations.',
    image: '/images/classroom.jpg',
    ratio: '1:8 Qualified Teacher Ratio',
    routine: [
      { time: '08:15 AM', event: 'Jolly Phonics Letter Sounds Lab' },
      { time: '09:45 AM', event: 'Early Numeracy & Math Stations' },
      { time: '11:15 AM', event: 'Bilingual Arabic Storytelling' },
      { time: '01:30 PM', event: 'Primary School Readiness Tasks' }
    ],
    skills: ['Reading 3-Letter Words', 'Pencil Grip & Writing Lines', 'Confident School Transition'],
    floatingCard: {
      title: 'School Readiness',
      metric: '100% Prepared',
      sub: 'Primary School Direct Entry'
    }
  }
];

export default function ProgramsPage({ onBookVisitClick }) {
  const [activeProgIdx, setActiveProgIdx] = useState(0);
  const curProg = AGE_PROGRAMS[activeProgIdx];
  const IconComponent = curProg.icon;

  return (
    <div>
      <PageHeader
        badge="Learning made joyful"
        title="Big Ideas Start With Early Learning"
        subtitle="Explore infant care, nursery groups, preschool learning, school readiness, and flexible full-day options designed for every developmental milestone."
        onBookVisitClick={onBookVisitClick}
        image="/images/classroom.jpg"
        imageAlt="Interactive early years nursery and preschool learning in Ajman"
        primaryCtaText="Explore Programs"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Today's Progress",
          subject: "Math",
          status: "85% complete",
          percentage: 85
        }}
        cardGreatJob={{
          title: "Great Job! 🎉",
          subtitle: "3 lessons completed"
        }}
        cardNextLesson={{
          label: "Next Lesson",
          subject: "Science",
          topic: "The Solar System"
        }}
      />

      {/* SECTION 1: Interactive Age Pathway Explorer */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">FIND YOUR CHILD'S STAGE</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Developmental Pathways for Every Age
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Select your child's age group below to preview our daily routine, teacher-to-child ratios, and key learning milestones.
              </p>
            </div>
          </RevealOnScroll>

          {/* Program Tabs Bar */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {AGE_PROGRAMS.map((prog, pIdx) => {
              const TabIcon = prog.icon;
              const isActive = pIdx === activeProgIdx;
              return (
                <button
                  key={prog.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveProgIdx(pIdx)}
                  style={isActive ? { background: prog.theme, borderColor: prog.theme } : {}}
                >
                  <TabIcon size={16} style={{ color: isActive ? '#ffffff' : prog.theme }} />
                  <span>{prog.label} ({prog.age})</span>
                </button>
              );
            })}
          </div>

          {/* Split Interactive Showcase Container */}
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
            <div key={`${curProg.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curProg.bg,
                color: curProg.theme,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <IconComponent size={15} />
                <span>{curProg.age} &bull; {curProg.ratio}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '0.5rem'
              }}>
                {curProg.title}
              </h3>

              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: curProg.theme, marginBottom: '1rem' }}>
                {curProg.headline}
              </div>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curProg.desc}
              </p>

              {/* Sample Daily Routine Preview */}
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '18px',
                padding: '16px 20px',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  Sample Daily Rhythm
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {curProg.routine.map((r, rIdx) => (
                    <div key={rIdx} style={{ fontSize: '0.82rem', color: '#475569' }}>
                      <strong style={{ color: curProg.theme }}>{r.time}:</strong> {r.event}
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skill Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
                {curProg.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#334155',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
                    }}
                  >
                    <CheckCircle2 size={14} style={{ color: curProg.theme }} />
                    <span>{s}</span>
                  </div>
                ))}
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
                    background: curProg.theme,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curProg.theme}60`
                  }}
                >
                  <span>Enroll in {curProg.label}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div key={`${curProg.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curProg.image}
                  alt={curProg.title}
                  style={{ width: '100%', height: '410px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Card */}
              <div
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-20px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  padding: '12px 18px',
                  boxShadow: '0 18px 36px -8px rgba(0, 0, 0, 0.16)',
                  border: '2px solid rgba(255, 255, 255, 0.95)',
                  minWidth: '200px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: curProg.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: curProg.theme
                  }}>
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>{curProg.floatingCard.title}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>{curProg.floatingCard.metric}</div>
                    <div style={{ fontSize: '0.72rem', color: curProg.theme, fontWeight: 700 }}>{curProg.floatingCard.sub}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Grid Overview */}
      <ProgramsSection onBookVisitClick={onBookVisitClick} />

      {/* SECTION 2: Specialized Pathways with Cards */}
      <section className="section-padding bg-cream-subtle" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="badge-gold">SPECIALIZED PATHWAYS</span>
              <h2 className="section-title" style={{ marginTop: '0.4rem', color: '#3d050f' }}>
                Tailored Schedules for Every Family Requirement
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Card 1 */}
            <RevealOnScroll animation="from-left" delay={100}>
              <div 
                className="specialized-pathway-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.75rem',
                  padding: '2.5rem',
                  border: '1.5px solid rgba(2, 132, 199, 0.2)',
                  boxShadow: '0 10px 30px rgba(2, 132, 199, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <GraduationCap size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>
                    Preschool &amp; School Readiness
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    Preparing 3 to 4+ year olds for formal primary school through phonics, numeracy, pencil grip, independence, and self-confidence.
                  </p>
                </div>

                <Link
                  to="/preschool-school-readiness"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#0284c7',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>Explore Preschool Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll animation="from-bottom" delay={180}>
              <div 
                className="specialized-pathway-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.75rem',
                  padding: '2.5rem',
                  border: '1.5px solid rgba(21, 128, 61, 0.2)',
                  boxShadow: '0 10px 30px rgba(21, 128, 61, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#dcfce7',
                    color: '#15803d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Clock size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>
                    Full-Day &amp; Half-Day Care
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    Flexible hours tailored for working parents: early drop-off from 7:30 AM, wholesome snack times, quiet rest cots, and late afternoon enrichment.
                  </p>
                </div>

                <Link
                  to="/daycare-ajman"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#15803d',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>Explore Daycare Options</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>

            {/* Card 3 */}
            <RevealOnScroll animation="from-right" delay={260}>
              <div 
                className="specialized-pathway-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.75rem',
                  padding: '2.5rem',
                  border: '1.5px solid rgba(217, 119, 6, 0.2)',
                  boxShadow: '0 10px 30px rgba(217, 119, 6, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#fef3c7',
                    color: '#ca8a04',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Sparkles size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>
                    Holiday &amp; Summer Camps
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    Seasonal adventure camps during winter, spring, and summer breaks featuring water splash days, themed costume crafts, and drama.
                  </p>
                </div>

                <Link
                  to="/camps"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#ca8a04',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>View Camp Programs</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Interactive Timing & Placement Calculator */}
      <AdmissionsCalculator onBookVisitClick={onBookVisitClick} />
    </div>
  );
}
