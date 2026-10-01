import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Clock, ShieldCheck, Heart, Utensils, Bed, 
  Users, Phone, MessageCircle, Calendar, 
  CheckCircle2, ArrowRight, Sparkles, Sun, Moon, 
  Smile, Shield, Award, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DAYCARE_PLANS = [
  {
    id: 'half-day',
    title: 'Half-Day Morning Care',
    hours: '08:00 AM – 01:00 PM',
    target: 'Toddlers & preschoolers beginning nursery socialization',
    theme: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    desc: 'The ideal introduction to early learning. Combines our full British EYFS morning curriculum, Circle Time phonics, messy sensory arts, and shaded outdoor garden playtime.',
    image: '/images/classroom.jpg',
    includes: [
      'Full British EYFS Core Curriculum',
      'Morning Circle & Jolly Phonics Songs',
      'Sensory Discovery & Messy Play Trays',
      'UV-Shaded Outdoor Garden Motor Play',
      'Healthy Morning Fruit Snack Supervision'
    ],
    floatingCard: {
      title: 'Morning Focus',
      sub: 'EYFS Curriculum & Play',
      metric: '08:00 – 13:00'
    }
  },
  {
    id: 'extended',
    title: 'Extended Afternoon Care',
    hours: '08:00 AM – 03:00 PM',
    target: 'Parents balancing modern work schedules in Ajman',
    theme: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    desc: 'Includes the entire morning learning program followed by warm nutritious lunch supervision, gentle storybook wind-down, and peaceful naps in our climate-calibrated quiet room.',
    image: '/images/nurturing-hero.jpg',
    includes: [
      'Complete Morning EYFS Learning Program',
      'Nutritious Warm Lunch Table Manners',
      'Restorative Quiet Nap in 22°C Sanctuary',
      'Individual Solid Beechwood Cribs / Cots',
      'Afternoon Storytime & Fine Motor Puzzles'
    ],
    floatingCard: {
      title: 'Nap & Rest',
      sub: '22°C Ambient Climate',
      metric: 'Calibrated 100%'
    }
  },
  {
    id: 'full-day',
    title: 'Comprehensive Full-Day Care',
    hours: '07:30 AM – 05:30 PM',
    target: 'Full peace of mind for working parents across Ajman & Sharjah',
    theme: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    desc: 'Complete reassurance from early drop-off at 7:30 AM to late afternoon pickup until 5:30 PM. Includes nutritious meals, peaceful naps, guided sensory labs, and late afternoon indoor/outdoor gym circuits.',
    image: '/images/outdoor.jpg',
    includes: [
      'Early Drop-off Available from 07:30 AM',
      'Complete Morning & Afternoon Learning',
      'Wholesome Lunch & Afternoon Snacks',
      'Individual Bedding Sanitized Daily',
      'Late Afternoon Free Play & Creative Labs',
      'Flexible Pickup Anytime Up to 05:30 PM'
    ],
    floatingCard: {
      title: 'Full Day Care',
      sub: 'Flexible Pickup to 5:30 PM',
      metric: '10 Hours Total'
    }
  }
];

const DAILY_RHYTHM = [
  { time: '07:30 – 08:30 AM', event: 'Early Drop-off & Gentle Free Play', icon: Sun, color: '#f59e0b' },
  { time: '08:30 – 10:00 AM', event: 'Circle Time, Jolly Phonics & Story Rug', icon: BookOpen, color: '#e11d48' },
  { time: '10:00 – 11:15 AM', event: 'Messy Arts, Sensory Trays & Mini STEM', icon: Sparkles, color: '#0284c7' },
  { time: '11:15 – 12:00 PM', event: 'UV-Protected Shaded Turf Play & Trikes', icon: Smile, color: '#16a34a' },
  { time: '12:00 – 01:00 PM', event: 'Healthy Shared Lunch & Handwashing', icon: Utensils, color: '#d97706' },
  { time: '01:00 – 02:45 PM', event: 'Restorative Nap in 22°C Sound-Damped Room', icon: Moon, color: '#8b5cf6' },
  { time: '02:45 – 04:00 PM', event: 'Afternoon Milk/Fruit Snack & Puzzles', icon: Heart, color: '#ec4899' },
  { time: '04:00 – 05:30 PM', event: 'Indoor Gym, Construction & Flexible Pickup', icon: Clock, color: '#059669' }
];

export default function DaycarePage({ onBookVisitClick }) {
  const [activePlanIdx, setActivePlanIdx] = useState(0);
  const curPlan = DAYCARE_PLANS[activePlanIdx];

  return (
    <div>
      <PageHeader
        badge="Home Away From Home"
        title="Peace of Mind With Nurturing Daycare"
        subtitle="Designed around the busy schedules of modern families, providing a nurturing home-from-home routine, healthy meals, and restful sleep."
        onBookVisitClick={onBookVisitClick}
        image="/images/nurturing-hero.jpg"
        imageAlt="Full-day and half-day caring educator with toddler during storytime in Ajman"
        primaryCtaText="Book a Visit"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Daily Routine",
          subject: "Nap & Meals",
          status: "100% gentle",
          percentage: 100
        }}
        cardGreatJob={{
          title: "Restful Naps 🌙",
          subtitle: "22°C Climate Safe"
        }}
        cardNextLesson={{
          label: "Full Day Care",
          subject: "Flexible",
          topic: "7:30 AM to 5:30 PM"
        }}
      />

      {/* SECTION 1: Interactive Daycare Plans Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">FLEXIBLE ENROLLMENT OPTIONS</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Choose the Right Daycare Schedule for Your Family
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Whether you need morning learning or complete full-day coverage with wholesome meals and supervised naps, we adapt to your routine.
              </p>
            </div>
          </RevealOnScroll>

          {/* Plan Tabs */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {DAYCARE_PLANS.map((plan, pIdx) => {
              const isActive = pIdx === activePlanIdx;
              return (
                <button
                  key={plan.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActivePlanIdx(pIdx)}
                  style={isActive ? { background: plan.theme, borderColor: plan.theme } : {}}
                >
                  <Clock size={16} style={{ color: isActive ? '#ffffff' : plan.theme }} />
                  <span>{plan.title} ({plan.hours})</span>
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
            <div key={`${curPlan.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curPlan.bg,
                color: curPlan.theme,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <Clock size={15} />
                <span>{curPlan.hours} &bull; {curPlan.target}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curPlan.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curPlan.desc}
              </p>

              {/* Includes Checklist */}
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  What Is Included in This Schedule:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {curPlan.includes.map((inc, iIdx) => (
                    <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                      <CheckCircle2 size={16} style={{ color: curPlan.theme, flexShrink: 0 }} />
                      <span>{inc}</span>
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
                    background: curPlan.theme,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curPlan.theme}60`
                  }}
                >
                  <span>Inquire About {curPlan.title}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${curPlan.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curPlan.image}
                  alt={curPlan.title}
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
                  padding: '12px 18px',
                  boxShadow: '0 18px 36px -8px rgba(0, 0, 0, 0.16)',
                  border: '2px solid rgba(255, 255, 255, 0.95)',
                  minWidth: '190px'
                }}
              >
                <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>{curPlan.floatingCard.title}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>{curPlan.floatingCard.sub}</div>
                <div style={{ fontSize: '0.72rem', color: curPlan.theme, fontWeight: 700, marginTop: '2px' }}>{curPlan.floatingCard.metric}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Daily Rhythm Schedule Strip */}
      <section className="section-padding bg-cream" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
              <span className="badge-maroon">DAYCARE TIMELINE</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#3d050f',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                The Daily Rhythm of Care at Villa 47
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Consistency, calm transitions, and joyful engagement create a seamless daily routine where children feel secure and parents feel at ease.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}>
            {DAILY_RHYTHM.map((slot, idx) => {
              const SlotIcon = slot.icon;
              return (
                <RevealOnScroll key={idx} animation="from-bottom" delay={idx * 50}>
                  <div style={{
                    background: '#ffffff',
                    borderRadius: '1.5rem',
                    padding: '1.5rem',
                    border: '1.5px solid rgba(123, 17, 39, 0.08)',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.04)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '10px',
                          background: `${slot.color}15`,
                          color: slot.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <SlotIcon size={18} />
                        </div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: slot.color }}>
                          {slot.time}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5, margin: 0 }}>
                        {slot.event}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Tour CTA */}
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
                  <span>Daycare Placement Inquiries</span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  color: '#1e293b',
                  lineHeight: '1.25'
                }}>
                  Experience our warm daycare in person at Villa 47
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.55', marginTop: '0.5rem' }}>
                  Tour our quiet sleep sanctuaries, meet our nurturing caregivers, and discuss a flexible enrollment package.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <button onClick={onBookVisitClick} className="btn-clay-gold">
                  <Calendar size={18} />
                  <span>Book Guided Daycare Tour</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
