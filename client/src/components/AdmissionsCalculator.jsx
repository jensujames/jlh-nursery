import React, { useState, useRef } from 'react';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function AdmissionsCalculator({ onBookVisitClick }) {
  const [selectedAge, setSelectedAge] = useState('toddler');
  const [selectedTiming, setSelectedTiming] = useState('half');
  const admRef = useRef(null);
  const { progress } = useSectionScroll(admRef);

  const ageData = {
    infant: {
      name: "Early Explorers (45 Days – 1.5 Years)",
      ratio: "1:3 / 1:4 (Dedicated Motherly Care)",
      focus: "Sensory discovery, baby massage, gentle routines & secure bonding",
      meals: "Sanitized milk station, baby purees, quiet room sleeping cots"
    },
    toddler: {
      name: "Curious Learners (1.5 – 3 Years)",
      ratio: "1:5 (Guided Play & Social Skills)",
      focus: "Language explosion, gross motor games, toilet training & Arabic words",
      meals: "Nutritious morning & afternoon snack routines, table manners"
    },
    preschool: {
      name: "Confident Preschoolers (3 – 4 Years)",
      ratio: "1:8 (British EYFS Classroom)",
      focus: "Jolly Phonics, early math, Arabic immersion & creative arts atelier",
      meals: "Healthy eating habits, independent snack time, water hydration"
    },
    readiness: {
      name: "School-Ready Learners (4 – 5 Years)",
      ratio: "1:8 (Primary Preparation)",
      focus: "Mark making, pencil grip, independence, listening & school routines",
      meals: "Social lunchtime conversation, packing lunchbox independently"
    }
  };

  const timingData = {
    half: {
      label: "Half-Day Morning Program",
      hours: "08:00 AM – 01:00 PM",
      desc: "Perfect introduction to early social learning, morning circle, sensory exploration, and outdoor play."
    },
    extended: {
      label: "Extended Afternoon Care",
      hours: "08:00 AM – 03:00 PM",
      desc: "Includes full morning academic curriculum, nutritious lunch, quiet nap time, and gentle afternoon crafts."
    },
    full: {
      label: "Full-Day Comprehensive Care",
      hours: "07:30 AM – 05:30 PM",
      desc: "Complete peace of mind for working parents. Early drop-off, full curriculum, rest time, afternoon snacks & enrichment."
    }
  };

  const currentAge = ageData[selectedAge];
  const currentTiming = timingData[selectedTiming];

  const steps = [
    { num: "01", title: "Submit Enquiry", desc: "Share your child's age and preferred schedule via our quick online form or WhatsApp." },
    { num: "02", title: "Consultation Call", desc: "Our admissions advisor will discuss your child's needs, developmental stage, and program availability." },
    { num: "03", title: "Personal Nursery Tour", desc: "Visit Villa 47, Al Rashidiya 2, explore our safe classrooms, meet the loving teachers, and ask any questions." },
    { num: "04", title: "Simple Enrolment", desc: "Complete registration documents, health check records, and select your preferred start date." },
    { num: "05", title: "Gentle Settling-In", desc: "Gradual step-by-step introduction plan ensuring your little one feels secure, happy, and right at home." }
  ];

  return (
    <section 
      id="admissions" 
      ref={admRef}
      className="section-padding bg-cream perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <FileText size={14} /> ADMISSIONS & ENROLMENT
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              A Warm Welcome <br />
              <span style={{ color: '#7b1127' }}>Starts Right Here</span>
            </h2>
            <p className="section-subtitle">
              Choosing the right nursery is an important family milestone. We make the admissions journey transparent, supportive, and stress-free.
            </p>
          </div>
        </RevealOnScroll>

        {/* 5-Step Admissions Journey */}
        <RevealOnScroll animation="fade-up" delay={150}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4.5rem'
        }}>
          {steps.map((st, idx) => {
            const stepThreshold = 0.15 + (idx * 0.1);
            const isStepActive = progress >= stepThreshold;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  padding: '2rem 1.5rem',
                  border: isStepActive ? '2px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.08)',
                  boxShadow: isStepActive ? '0 12px 30px rgba(123, 17, 39, 0.12)' : '0 8px 20px rgba(70, 7, 19, 0.04)',
                  position: 'relative',
                  transform: isStepActive ? 'translateY(-4px)' : 'translateY(0px)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: isStepActive ? '#7b1127' : '#d4af37',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  transition: 'color 0.3s ease'
                }}>
                  {st.num}
                </div>
                <h3 style={{
                  fontSize: '1.15rem',
                  color: isStepActive ? '#7b1127' : '#3d050f',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)',
                  transition: 'color 0.3s ease'
                }}>
                  {st.title}
                </h3>
                <p style={{
                  fontSize: '0.86rem',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>
        </RevealOnScroll>

        {/* Interactive Timing & Program Schedule Matcher */}
        <RevealOnScroll animation="zoom-in" delay={200}>
        <div 
          className="adm-calculator-container"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1.5px solid rgba(123, 17, 39, 0.12)',
            boxShadow: '0 20px 50px rgba(70, 7, 19, 0.08)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-gold">INTERACTIVE ADMISSIONS PLANNER</span>
            <h3 style={{ fontSize: '1.85rem', marginTop: '0.4rem', color: '#3d050f' }}>
              Find the Perfect Care Schedule for Your Child
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#6b7280', marginTop: '0.35rem' }}>
              Select your child's age group and desired attendance hours to see customized classroom details.
            </p>
          </div>

          <div 
            className="adm-calculator-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Left Controls: Age & Timing Options */}
            <div>
              {/* Step 1: Select Age */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#7b1127',
                  letterSpacing: '0.06em',
                  marginBottom: '0.85rem'
                }}>
                  1. Child's Age Group
                </label>
                <div 
                  className="adm-age-buttons-grid"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}
                >
                  {[
                    { id: 'infant', label: 'Infant (45d - 1.5y)' },
                    { id: 'toddler', label: 'Toddler (1.5 - 3y)' },
                    { id: 'preschool', label: 'Preschool (3 - 4y)' },
                    { id: 'readiness', label: 'School Ready (4 - 5y)' }
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAge(a.id)}
                      style={{
                        padding: '0.85rem',
                        borderRadius: '1rem',
                        border: selectedAge === a.id ? '2px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.12)',
                        backgroundColor: selectedAge === a.id ? '#fce7eb' : '#fdfbf7',
                        color: selectedAge === a.id ? '#7b1127' : '#3d050f',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Schedule */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#7b1127',
                  letterSpacing: '0.06em',
                  marginBottom: '0.85rem'
                }}>
                  2. Daily Attendance Hours
                </label>
                <div 
                  className="adm-timing-buttons-list"
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
                >
                  {[
                    { id: 'half', title: 'Half-Day (8:00 AM - 1:00 PM)', sub: 'Standard EYFS Curriculum' },
                    { id: 'extended', title: 'Extended Care (8:00 AM - 3:00 PM)', sub: 'Curriculum + Lunch + Rest' },
                    { id: 'full', title: 'Full-Day Care (7:30 AM - 5:30 PM)', sub: 'Early Drop-off & Full Daycare' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTiming(t.id)}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: '1rem',
                        border: selectedTiming === t.id ? '2px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.12)',
                        backgroundColor: selectedTiming === t.id ? '#fce7eb' : '#fdfbf7',
                        color: selectedTiming === t.id ? '#7b1127' : '#3d050f',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontWeight: '700', fontSize: '0.92rem' }}>{t.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.2rem' }}>{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output: Program Match Overview */}
            {/* Right Output: Program Match Overview - Colorful Claymorphism & Glassmorphism */}
            <div 
              className="clay-glass-banner-pastel adm-calc-output-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem 2.25rem'
              }}
            >
              {/* Floating Ambient Glow Bubbles */}
              <div className="clay-glow-orb clay-orb-1" />
              <div className="clay-glow-orb clay-orb-2" />
              <div className="clay-glow-orb clay-orb-3" />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  border: '1.5px solid rgba(2, 132, 199, 0.3)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '999px',
                  color: '#0284c7',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.1)'
                }}>
                  <Sparkles size={15} style={{ color: '#0284c7' }} />
                  <span>Recommended Placement</span>
                </div>

                <h4 style={{
                  fontSize: '1.75rem',
                  color: '#1e293b',
                  fontWeight: '900',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.2'
                }}>
                  {currentAge.name}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.25rem' }}>
                  {/* Hours Chip */}
                  <div className="clay-glass-chip">
                    <Clock size={19} style={{ color: '#0284c7', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours &amp; Duration</div>
                      <div style={{ fontWeight: '850', fontSize: '1.02rem', color: '#0f172a', marginTop: '0.15rem' }}>{currentTiming.hours}</div>
                    </div>
                  </div>

                  {/* Ratio Chip */}
                  <div className="clay-glass-chip">
                    <Users size={19} style={{ color: '#16a34a', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Educator-to-Child Ratio</div>
                      <div style={{ fontWeight: '850', fontSize: '1.02rem', color: '#0f172a', marginTop: '0.15rem' }}>{currentAge.ratio}</div>
                    </div>
                  </div>

                  {/* Curriculum Focus Chip */}
                  <div className="clay-glass-chip">
                    <Heart size={19} style={{ color: '#ea580c', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Curriculum Focus</div>
                      <div style={{ fontSize: '0.92rem', color: '#334155', lineHeight: '1.45', marginTop: '0.2rem', fontWeight: '600' }}>{currentAge.focus}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <button
                  onClick={onBookVisitClick}
                  className="btn-clay-gold"
                  style={{
                    width: '100%',
                    padding: '1.05rem 1.5rem',
                    fontSize: '1.02rem'
                  }}
                >
                  <Calendar size={18} />
                  <span>Book Visit for This Schedule</span>
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748b', marginTop: '0.85rem', fontWeight: '600' }}>
                  No upfront obligation • Meet teachers &amp; tour our facilities
                </div>
              </div>
            </div>

          </div>
        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
