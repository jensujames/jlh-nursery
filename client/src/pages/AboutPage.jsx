import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import ReviewsSection from '../components/ReviewsSection';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Heart, Compass, ShieldCheck, Sparkles, Users, Award, 
  CheckCircle, Calendar, ArrowRight, Star, Clock, Baby, 
  CheckCircle2, ChevronRight, Play, Sun, Trees, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FOUNDATION_TABS = [
  {
    id: 'warmth',
    tab: 'Motherly Warmth',
    icon: Heart,
    color: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    title: 'A Loving Extension of Home',
    tagline: 'Motherly patience and gentle reassurance in every moment',
    desc: 'At Just Like Home Nursery, we believe that young children learn best when they feel completely secure and emotionally cherished. Our caregivers treat every child with the attentive empathy, patience, and warmth of a loving mother.',
    image: '/images/nurturing-hero.jpg',
    highlights: ['1:4 Attentive Caregiver Ratio', 'Gentle Home-to-Nursery Transition', 'Dedicated Hug & Comfort Routines'],
    stat: '100%',
    statLabel: 'Loving Daily Observation',
    floatingCard: {
      title: 'Comfort & Attachment',
      sub: 'Secure Bonding Active',
      metric: '100%',
      icon: Heart,
      iconColor: '#e11d48'
    }
  },
  {
    id: 'safety',
    tab: 'Uncompromising Safety',
    icon: ShieldCheck,
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    title: 'Engineered for Child Security',
    tagline: '24/7 monitored spaces, hospital-grade hygiene, and pediatric protocols',
    desc: 'Every inch of our purpose-built Villa 47 campus is rigorously safeguarded. From continuous CCTV coverage and biometric gated access to rounded-corner furniture and soft safety finger guards, your peace of mind is guaranteed.',
    image: '/images/classroom.jpg',
    highlights: ['24/7 High-Definition CCTV', 'On-Site Nurse & Regular Doctor Visits', 'Child-Safe Soft Padded Fittings'],
    stat: 'Zero',
    statLabel: 'Safety Compromises Made',
    floatingCard: {
      title: 'Villa 47 Security',
      sub: 'HD Monitoring Live',
      metric: 'Active',
      icon: ShieldCheck,
      iconColor: '#0284c7'
    }
  },
  {
    id: 'discovery',
    tab: 'British EYFS Play',
    icon: Sparkles,
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    title: 'Purposeful Play & Sensory Joy',
    tagline: 'Inspiring intrinsic curiosity without rigid worksheets',
    desc: 'Following the British Early Years Foundation Stage (EYFS), we transform everyday play into foundational cognitive milestones. Children manipulate natural loose parts, discover early numeracy, and develop rich vocabulary at their own pace.',
    image: '/images/growing-minds-center.jpg',
    highlights: ['7 Core EYFS Developmental Areas', 'Sensory Trays & Messy Art Labs', 'Early Phonics & Number Discovery'],
    stat: '7 Areas',
    statLabel: 'British Curriculum Milestones',
    floatingCard: {
      title: 'Active Exploration',
      sub: 'Hands-on Discovery Lab',
      metric: '7 Areas',
      icon: Sparkles,
      iconColor: '#d97706'
    }
  },
  {
    id: 'outdoors',
    tab: 'Shaded Garden & Motion',
    icon: Trees,
    color: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    title: 'Fresh Air & Active Motor Loops',
    tagline: 'UV-protected play lawns for balance, energy, and joy',
    desc: 'Our expansive outdoor courtyard is covered with premium UV shade canopies and cushioned shock-absorbing green turf. Little ones run, jump, navigate trike paths, and develop core balance with boundless joy.',
    image: '/images/outdoor.jpg',
    highlights: ['UV Shade Canopies Year-Round', 'Shock-Absorbing Soft Turf', 'Balance & Agility Play Equipment'],
    stat: '90 Min',
    statLabel: 'Daily Movement & Outdoor Play',
    floatingCard: {
      title: 'Gross Motor Skills',
      sub: 'Outdoor Play Garden',
      metric: '90 min/day',
      icon: Trees,
      iconColor: '#16a34a'
    }
  }
];

const EDUCATORS = [
  {
    name: 'Ms. Sarah Al-Nuaimi',
    role: 'Nursery Lead & EYFS Coordinator',
    exp: '11+ Years Experience',
    qualification: 'CACHE Level 5 Diploma in Early Years Leadership',
    image: '/images/testimonial-mom.jpg',
    quote: 'Every child who walks through Villa 47 is welcomed with an open heart. We watch confidence blossom every single day.',
    theme: '#e11d48'
  },
  {
    name: 'Nurse Fatima Hassan',
    role: 'Head of Pediatric Health & Hygiene',
    exp: '8+ Years Healthcare',
    qualification: 'Registered Pediatric Nurse (MOH Licensed)',
    image: '/images/testimonial-parent-mom.jpg',
    quote: 'Health and safety are living habits. We maintain clinical standards while providing comforting, tender care.',
    theme: '#0284c7'
  },
  {
    name: 'Ms. Elena Rostova',
    role: 'Creative Arts & Sensory Lead',
    exp: '7+ Years Experience',
    qualification: 'BA in Early Childhood Education & Arts Integration',
    image: '/images/testimonial-video-parent.jpg',
    quote: 'Messy play is where imagination catches fire. We celebrate the process of curiosity, not just the final product.',
    theme: '#d97706'
  }
];

export default function AboutPage({ onBookVisitClick }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeFoundation = FOUNDATION_TABS[activeTabIdx];

  return (
    <div>
      <PageHeader
        badge="Nurturing Little Minds"
        title="Big Ideas Start With Loving Care"
        subtitle="Meet Just Like Home Nursery in Ajman and discover our motherly care, play-based EYFS approach, and commitment to every child's development."
        onBookVisitClick={onBookVisitClick}
        image="/images/nurturing-hero.jpg"
        imageAlt="Warm educators and children at Just Like Home Nursery Ajman"
        primaryCtaText="Book a Tour"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Daily Care Routine",
          subject: "EYFS",
          status: "100% loving",
          percentage: 100
        }}
        cardGreatJob={{
          title: "Warm Care ❤️",
          subtitle: "Villa 47, Ajman"
        }}
        cardNextLesson={{
          label: "Next Milestone",
          subject: "Social",
          topic: "Confidence & Play"
        }}
      />

      {/* SECTION 1: Deep Story & Vision Split Showcase */}
      <section className="section-padding bg-cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            {/* Left Content Column */}
            <RevealOnScroll animation="from-left">
              <div>
                <span className="badge-maroon" style={{ marginBottom: '1rem' }}>
                  <Heart size={14} /> OUR HUMBLE BEGINNINGS
                </span>
                <h2 style={{
                  fontSize: 'clamp(2.2rem, 3.5vw, 2.85rem)',
                  color: '#3d050f',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                  fontWeight: 900
                }}>
                  A Second Home Born from{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #721024 0%, #be123c 50%, #c9a84c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Motherly Compassion
                  </span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#4a443e', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                  The earliest years of childhood shape how little ones see themselves and understand the world around them. These crucial formative years deserve much more than clinical supervision; they deserve patience, empathy, genuine affection, and endless opportunities to make happy discoveries.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#4a443e', lineHeight: '1.8', marginBottom: '2rem' }}>
                  At <strong>Just Like Home Nursery</strong> in Al Rashidiya 2, Ajman, our name embodies the everyday reality we provide: an atmosphere so warm, welcoming, and reassuring that children feel as safe and cherished as they do in their own family living room.
                </p>

                {/* 2 High-Impact Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{
                    padding: '1.5rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '1.5rem',
                    border: '1.5px solid rgba(123, 17, 39, 0.12)',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.06)'
                  }}>
                    <div style={{ fontWeight: '900', fontSize: '1.85rem', color: '#e11d48' }}>100%</div>
                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#1e293b' }}>Dedicated Safety</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>CCTV &amp; Health Protocols</div>
                  </div>

                  <div style={{
                    padding: '1.5rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '1.5rem',
                    border: '1.5px solid rgba(217, 119, 6, 0.18)',
                    boxShadow: '0 8px 24px rgba(217, 119, 6, 0.06)'
                  }}>
                    <div style={{ fontWeight: '900', fontSize: '1.85rem', color: '#d97706' }}>EYFS</div>
                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#1e293b' }}>British Standards</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Play-Based Discovery</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={onBookVisitClick} className="btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
                    <Calendar size={16} />
                    <span>Schedule Campus Visit</span>
                  </button>
                  <Link to="/facilities" className="btn-secondary" style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}>
                    <span>Explore Villa 47</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Image Column with Floating Elements Matching Home Showcase */}
            <RevealOnScroll animation="from-right" delay={150}>
              <div style={{ position: 'relative' }}>
                {/* Ambient Pastel Background Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  borderRadius: '40px',
                  background: 'rgba(254, 205, 211, 0.45)',
                  filter: 'blur(30px)',
                  zIndex: 0
                }} />

                {/* Main Framed Photography */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  borderRadius: '2.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px -15px rgba(70, 7, 19, 0.2)',
                  border: '6px solid #ffffff'
                }}>
                  <img
                    src="/images/classroom.jpg"
                    alt="Educator and children at Just Like Home Nursery"
                    style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Floating Card 1: Today's Warmth (Top-Left) */}
                <div 
                  className="animate-float-slow"
                  style={{
                    position: 'absolute',
                    top: '8%',
                    left: '-24px',
                    zIndex: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '20px',
                    padding: '12px 18px',
                    boxShadow: '0 18px 36px -8px rgba(0, 0, 0, 0.16)',
                    border: '2px solid rgba(255, 255, 255, 0.95)',
                    minWidth: '190px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '12px',
                      background: '#ffe4e6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e11d48'
                    }}>
                      <Heart size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Daily Atmosphere</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>Motherly Care</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 700, color: '#64748b', marginBottom: '4px' }}>
                    <span>Warmth Level</span>
                    <span style={{ color: '#e11d48' }}>100% Loving</span>
                  </div>
                  <div style={{ height: '5px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#e11d48', borderRadius: '9999px' }} />
                  </div>
                </div>

                {/* Floating Card 2: Great Job (Top-Right) */}
                <div 
                  className="animate-float-alt"
                  style={{
                    position: 'absolute',
                    top: '4%',
                    right: '-18px',
                    zIndex: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '18px',
                    padding: '10px 16px',
                    boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.14)',
                    border: '2px solid rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#fef3c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Star size={16} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Villa 47 Ajman</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Al Rashidiya 2 Core</div>
                  </div>
                </div>

                {/* Floating Card 3: Next Milestone (Bottom-Right) */}
                <div 
                  className="animate-float-slow"
                  style={{
                    position: 'absolute',
                    bottom: '8%',
                    right: '-20px',
                    zIndex: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '20px',
                    padding: '12px 18px',
                    boxShadow: '0 18px 36px -8px rgba(0, 0, 0, 0.16)',
                    border: '2px solid rgba(255, 255, 255, 0.95)',
                    minWidth: '180px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Curriculum</span>
                    <Sparkles size={14} style={{ color: '#d97706' }} />
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                    EYFS British Standards
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive 4 Foundations Showcase (With Tabs & Live Preview) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
              <span className="badge-gold">OUR PILLARS OF EXCELLENCE</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Four Cornerstones of Our Nursery Philosophy
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Click each cornerstone to discover how we combine warmth, safety, British curriculum standards, and expansive outdoor motion for your child.
              </p>
            </div>
          </RevealOnScroll>

          {/* Interactive Foundation Tabs */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2rem' }}>
            {FOUNDATION_TABS.map((tab, tIdx) => {
              const IconComp = tab.icon;
              const isActive = tIdx === activeTabIdx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTabIdx(tIdx)}
                  style={isActive ? { background: tab.color, borderColor: tab.color } : {}}
                >
                  <IconComp size={16} style={{ color: isActive ? '#ffffff' : tab.color }} />
                  <span>{tab.tab}</span>
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
            {/* Left Content Box */}
            <div key={`${activeFoundation.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: activeFoundation.bg,
                color: activeFoundation.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <activeFoundation.icon size={15} />
                <span>{activeFoundation.tagline}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {activeFoundation.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {activeFoundation.desc}
              </p>

              {/* Highlights Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                {activeFoundation.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
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
                    <CheckCircle2 size={14} style={{ color: activeFoundation.color }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Stat Box */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '12px 18px',
                marginBottom: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>{activeFoundation.statLabel}</span>
                <span style={{ fontWeight: 800, color: activeFoundation.color, fontSize: '1.15rem' }}>{activeFoundation.stat}</span>
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
                    background: activeFoundation.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${activeFoundation.color}60`
                  }}
                >
                  <span>Book Visit to Experience This</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${activeFoundation.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={activeFoundation.image}
                  alt={activeFoundation.title}
                  style={{ width: '100%', height: '390px', objectFit: 'cover', display: 'block' }}
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
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background: activeFoundation.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: activeFoundation.color
                  }}>
                    <activeFoundation.icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>{activeFoundation.floatingCard.title}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>{activeFoundation.floatingCard.sub}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Caring Leadership & Educator Team Grid */}
      <section className="section-padding bg-cream-subtle" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
              <span className="badge-maroon">MEET OUR TEAM</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#3d050f',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Dedicated Hearts Behind Just Like Home
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Our licensed educators, registered pediatric nurse, and passionate caregivers bring years of verified early-childhood experience and unconditional warmth.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {EDUCATORS.map((edu, idx) => (
              <RevealOnScroll key={idx} animation={idx === 0 ? 'from-left' : idx === 1 ? 'zoom-in' : 'from-right'}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(123, 17, 39, 0.1)',
                  boxShadow: '0 12px 32px rgba(114, 16, 36, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  {/* Photo with Overlay Badge */}
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img
                      src={edu.image}
                      alt={edu.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.94)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: edu.theme,
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                      {edu.exp}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                        {edu.name}
                      </h4>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: edu.theme, marginBottom: '0.75rem' }}>
                        {edu.role}
                      </div>
                      <div style={{
                        fontSize: '0.78rem',
                        color: '#64748b',
                        background: '#f8fafc',
                        padding: '6px 12px',
                        borderRadius: '10px',
                        marginBottom: '1rem',
                        border: '1px solid #e2e8f0'
                      }}>
                        {edu.qualification}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, fontStyle: 'italic' }}>
                        "{edu.quote}"
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={14} /> Verified Early Years Educator
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The 7 Core Promises & Philosophy */}
      <AboutSection onBookVisitClick={onBookVisitClick} />

      {/* Testimonials */}
      <ReviewsSection />

      {/* CTA Banner: Colorful Glassmorphism & Claymorphism */}
      <section style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        background: 'radial-gradient(ellipse at 50% 20%, #ffffff 0%, #fffcf8 60%, #fbf5eb 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealOnScroll animation="zoom-in">
            <div className="clay-glass-banner-pastel" style={{ textAlign: 'center' }}>
              <div className="clay-glow-orb clay-orb-1" />
              <div className="clay-glow-orb clay-orb-2" />
              <div className="clay-glow-orb clay-orb-3" />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px', margin: '0 auto' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  border: '1.5px solid rgba(241, 90, 41, 0.3)',
                  padding: '0.45rem 1.25rem',
                  borderRadius: '999px',
                  color: '#ea580c',
                  fontSize: '0.82rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  boxShadow: '0 4px 14px rgba(241, 90, 41, 0.08)'
                }}>
                  <Sparkles size={15} style={{ color: '#f59e0b' }} />
                  <span>Villa 47 Campus Experience</span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#1e293b',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  lineHeight: '1.2',
                  marginBottom: '1rem',
                  letterSpacing: '-0.025em'
                }}>
                  Come and Experience Just Like Home in Person
                </h2>

                <p style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  color: '#475569',
                  lineHeight: 1.65,
                  margin: '0 auto 2.25rem',
                  fontWeight: '500'
                }}>
                  We invite you to tour our classrooms at Villa 47, Al Rashidiya 2, meet our team, and see where little hearts feel at home.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
                  <button onClick={onBookVisitClick} className="btn-clay-gold">
                    <Calendar size={18} />
                    <span>Book Your Guided Visit</span>
                  </button>
                </div>

                {/* 3 Trust Chips */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  fontSize: '0.88rem',
                  fontWeight: '650',
                  color: '#334155',
                  borderTop: '1px solid rgba(241, 90, 41, 0.12)',
                  paddingTop: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <ShieldCheck size={17} color="#16a34a" />
                    <span>100% CCTV &amp; Child Safe</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Heart size={17} color="#e11d48" />
                    <span>Loving Motherly Care</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Sparkles size={17} color="#d97706" />
                    <span>British EYFS Curriculum</span>
                  </div>
                </div>

              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
