import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FacilitiesSection from '../components/FacilitiesSection';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ShieldCheck, HeartPulse, Stethoscope, Camera, Lock, 
  CheckCircle2, Calendar, Sparkles, Sun, Trees, Moon, 
  Video, Activity, ArrowRight, Shield, Award, Footprints, Wind
} from 'lucide-react';

const CAMPUS_ZONES = [
  {
    id: 'cctv-classrooms',
    name: 'Smart Classrooms & CCTV',
    icon: Video,
    color: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    tag: '24/7 High-Definition Surveillance',
    title: 'Monitored Learning Suites with Zero Blind Spots',
    desc: 'Every classroom is equipped with wide-angle high-definition CCTV feeds monitored continuously by security management. Child-height sensory washbasins, rounded corner fittings, and natural sunlight create an uplifting, safe haven.',
    image: '/images/classroom.jpg',
    features: ['12 HD Live CCTV Zones', 'Controlled Biometric Entry', 'Finger-Pinch Door Dampers'],
    metricLabel: 'Safety Audit Score',
    metricVal: '100% Certified',
    floatingBadge: '24/7 Monitored 🛡️'
  },
  {
    id: 'outdoor-turf',
    name: 'Shaded Garden & Active Turf',
    icon: Trees,
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    tag: 'UV-Protected Gross Motor Lawn',
    title: 'Fresh Air, Green Play Turf & Joyful Motion',
    desc: 'A protected outdoor lawn featuring high-grade UV shade canopies that block 98% of harmful rays. Soft shock-absorbing turf, toddler trike tracks, and sensory balance equipment allow active gross motor movement throughout the cooler morning hours.',
    image: '/images/outdoor.jpg',
    features: ['98% UV Blocking Canopy', 'Padded Shock-Absorbing Turf', 'Agility & Trike Circuits'],
    metricLabel: 'Daily Fresh Air Movement',
    metricVal: '90 Min / Day',
    floatingBadge: 'UV Protected ☀️'
  },
  {
    id: 'baby-sanctuary',
    name: 'Infant Sleep & Quiet Climate',
    icon: Moon,
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    tag: '22°C Calibrated Acoustic Suite',
    title: 'Quiet Sleep Pods & Restful Care',
    desc: 'An acoustically dampened rest sanctuary maintained at an optimal 22°C temperature. Individual solid beechwood cribs, hospital-grade air purifiers, and soft white-noise lullabies create an undisturbed, restful nap routine for infants and toddlers.',
    image: '/images/nurturing-hero.jpg',
    features: ['22°C Climate Precision', 'Acoustic Soundproofing', 'HEPA-13 Air Filtration'],
    metricLabel: 'Rest Environment',
    metricVal: '100% Calibrated',
    floatingBadge: 'Quiet Rest 🌙'
  },
  {
    id: 'medical-wing',
    name: 'First-Aid Clinic & Visits',
    icon: HeartPulse,
    color: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    tag: 'Licensed Pediatric Support',
    title: 'On-Site Registered Nurse & Regular Doctor Audits',
    desc: 'Equipped with sterile first-aid equipment, pediatric digital monitors, and dedicated wellness isolation bays. Our full-time licensed nurse performs morning temperature checks and administers certified emergency protocols.',
    image: '/images/hero.jpg',
    features: ['MOH Licensed Nurse On-Site', 'Pediatric Doctor Visits', 'Sterile First-Aid Suite'],
    metricLabel: 'Healthcare Compliance',
    metricVal: 'MOH Verified',
    floatingBadge: 'MOH Licensed 🩺'
  }
];

const SAFETY_PROTOCOLS = [
  { 
    icon: Video, 
    color: '#e11d48',
    title: "24/7 Monitored CCTV", 
    desc: "High-definition camera surveillance across all classrooms, activity corridors, and outdoor playgrounds." 
  },
  { 
    icon: HeartPulse, 
    color: '#16a34a',
    title: "In-House First-Aid Clinic", 
    desc: "Dedicated clinic facility stocked with pediatric emergency provisions and daily vitals tracking." 
  },
  { 
    icon: Stethoscope, 
    color: '#0284c7',
    title: "Visiting Doctor Consultations", 
    desc: "Regular pediatric health visits supporting child physical wellness and developmental milestones." 
  },
  { 
    icon: Lock, 
    color: '#d97706',
    title: "Single-Entry Gated Access", 
    desc: "Secure perimeter villa gates with mandatory visitor registration and verified parent pickup protocols." 
  },
  { 
    icon: Wind, 
    color: '#8b5cf6',
    title: "Hospital-Grade Air & Hygiene", 
    desc: "Continuous daily sanitization of toys, cribs, high-touch surfaces, and soft play floor equipment." 
  },
  { 
    icon: ShieldCheck, 
    color: '#059669',
    title: "Child-Proofed Architecture", 
    desc: "Rounded-edge furniture, soft finger-pinch door guards, electrical outlet caps, and cushioned flooring." 
  }
];

export default function FacilitiesPage({ onBookVisitClick }) {
  const [activeZoneIdx, setActiveZoneIdx] = useState(0);
  const curZone = CAMPUS_ZONES[activeZoneIdx];
  const ZoneIcon = curZone.icon;

  return (
    <div>
      <PageHeader
        badge="Safety & Child Wellness"
        title="Safe Spaces Start With Villa 47"
        subtitle="Explore our safe classrooms, indoor soft play, shaded outdoor garden, baby quiet room, clinic, doctor visits, and 24/7 CCTV surveillance."
        onBookVisitClick={onBookVisitClick}
        image="/images/outdoor.jpg"
        imageAlt="Modern child-safe nursery campus with CCTV, indoor soft play and shaded gardens in Ajman"
        primaryCtaText="Tour Campus"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Campus Safety",
          subject: "CCTV 24/7",
          status: "Fully Monitored",
          percentage: 100
        }}
        cardGreatJob={{
          title: "Child Safe 🛡️",
          subtitle: "Dedicated Clinic"
        }}
        cardNextLesson={{
          label: "Outdoor Area",
          subject: "Play Turf",
          topic: "Shaded Green Garden"
        }}
      />

      {/* SECTION 1: Interactive Villa 47 Zone Navigator */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">VILLA 47 CAMPUS SPECIFICATIONS</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Interactive Campus Zone Navigator
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Click each zone to preview safety fittings, climate controls, and purpose-built facilities engineered for your child.
              </p>
            </div>
          </RevealOnScroll>

          {/* Zone Tabs */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {CAMPUS_ZONES.map((zone, zIdx) => {
              const IconComp = zone.icon;
              const isActive = zIdx === activeZoneIdx;
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveZoneIdx(zIdx)}
                  style={isActive ? { background: zone.color, borderColor: zone.color } : {}}
                >
                  <IconComp size={16} style={{ color: isActive ? '#ffffff' : zone.color }} />
                  <span>{zone.name}</span>
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
            <div key={`${curZone.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curZone.bg,
                color: curZone.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <ZoneIcon size={15} />
                <span>{curZone.tag}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curZone.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curZone.desc}
              </p>

              {/* Feature Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                {curZone.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
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
                    <CheckCircle2 size={14} style={{ color: curZone.color }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Metric Progress Bar */}
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '14px 18px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.84rem' }}>
                  <span style={{ fontWeight: 600, color: '#475569' }}>{curZone.metricLabel}</span>
                  <span style={{ fontWeight: 800, color: curZone.color }}>{curZone.metricVal}</span>
                </div>
                <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: curZone.color, borderRadius: '9999px' }} />
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
                    background: curZone.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curZone.color}60`
                  }}
                >
                  <span>Book Guided Campus Tour</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div key={`${curZone.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curZone.image}
                  alt={curZone.name}
                  style={{ width: '100%', height: '410px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Card */}
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
                {curZone.floatingBadge}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities Interactive Grid Component */}
      <FacilitiesSection onBookVisitClick={onBookVisitClick} />

      {/* SECTION 2: Zero Compromise Safety Protocols Grid */}
      <section className="section-padding bg-cream" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="zoom-in">
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '2.5rem',
              padding: '3.5rem 3rem',
              border: '1.5px solid rgba(123, 17, 39, 0.1)',
              boxShadow: '0 15px 40px rgba(70, 7, 19, 0.05)',
              marginBottom: '3rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span className="badge-maroon">ZERO COMPROMISE POLICY</span>
                <h2 style={{ fontSize: '2.2rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginTop: '0.4rem', fontWeight: 800 }}>
                  Safety Is a Living Daily Habit
                </h2>
                <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '700px', margin: '0.5rem auto 0', lineHeight: 1.6 }}>
                  A truly safe nursery relies on meticulous educator training, hospital-grade daily hygiene protocols, and comforting emotional reassurance.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '1.75rem'
              }}>
                {SAFETY_PROTOCOLS.map((sp, idx) => {
                  const ProtoIcon = sp.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        padding: '1.75rem',
                        borderRadius: '1.5rem',
                        backgroundColor: '#fdfbf7',
                        border: '1.5px solid rgba(123, 17, 39, 0.08)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          backgroundColor: `${sp.color}15`,
                          color: sp.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <ProtoIcon size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', color: '#1e293b', fontWeight: '800', margin: 0 }}>
                          {sp.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
                        {sp.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Tour CTA: Colorful Glassmorphism & Claymorphism */}
          <RevealOnScroll animation="fade-up" delay={150}>
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
                  marginBottom: '0.75rem',
                  boxShadow: '0 4px 12px rgba(241, 90, 41, 0.08)'
                }}>
                  <Sparkles size={14} style={{ color: '#f59e0b' }} />
                  <span>Villa 47 Guided Walkthrough</span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  color: '#1e293b',
                  lineHeight: '1.25',
                  letterSpacing: '-0.02em'
                }}>
                  Tour our villa nursery at Villa 47, Al Rashidiya 2
                </h3>
                <p style={{
                  color: '#475569',
                  fontSize: '1rem',
                  lineHeight: '1.55',
                  marginTop: '0.5rem',
                  fontWeight: '500'
                }}>
                  Meet our certified health staff and explore all our purpose-built child facilities in person.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <button
                  onClick={onBookVisitClick}
                  className="btn-clay-gold"
                >
                  <Calendar size={18} />
                  <span>Arrange a Guided Tour</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </div>
  );
}
