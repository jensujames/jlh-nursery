import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import AdmissionsCalculator from '../components/AdmissionsCalculator';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  FileText, CheckCircle2, Calendar, Phone, MessageCircle, 
  HelpCircle, Sparkles, ArrowRight, ShieldCheck, Clock, 
  Heart, Users, Check
} from 'lucide-react';

const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Schedule Your Guided Tour',
    badge: 'Step 1 of 4 &bull; Initial Contact',
    desc: 'Reach out via our website booking form, direct phone call, or WhatsApp. Select a morning visit time that fits your family routine to see our active classrooms.',
    action: 'Book a Campus Visit',
    image: '/images/hero.jpg',
    color: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    highlights: ['Flexible Morning Visit Slots', 'Meet the Nursery Principal', 'Personal Q&A on EYFS & Care']
  },
  {
    step: '02',
    title: 'Experience Villa 47 in Person',
    badge: 'Step 2 of 4 &bull; Campus Walkthrough',
    desc: 'Bring your little one for a gentle walk through our child-safe classrooms, quiet sleep cots, clinic, and shaded play turf. Observe our educators in action.',
    action: 'View Campus Zones',
    image: '/images/classroom.jpg',
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    highlights: ['Child-Friendly Welcome', 'Classroom Observation', 'Fee Schedule & Schedule Consultation']
  },
  {
    step: '03',
    title: 'Submit Enrollment Registration',
    badge: 'Step 3 of 4 &bull; Documentation',
    desc: 'Complete the student registration dossier and provide standard copies of IDs, birth certificate, and vaccination record to secure your child’s seat.',
    action: 'Review Document Checklist',
    image: '/images/growing-minds-center.jpg',
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    highlights: ['Simple 1-Page Registration Form', 'Digital Document Upload Available', 'Transparent Fee Structure']
  },
  {
    step: '04',
    title: 'Gentle Acclimatization & Day One',
    badge: 'Step 4 of 4 &bull; Welcome Home!',
    desc: 'We offer a gentle 3-day settling-in plan allowing parents to attend brief initial sessions so your child feels completely confident, safe, and happy.',
    action: 'Start Nursery Journey',
    image: '/images/nurturing-hero.jpg',
    color: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    highlights: ['Gradual 3-Day Settling Plan', 'Dedicated 1-on-1 Primary Caregiver', 'Daily Photos & Reassurance Updates']
  }
];

const REQUIRED_DOCS = [
  "Copy of Child's Passport & UAE Residence Visa",
  "Copy of Child's Emirates ID (Front & Back)",
  "Copy of Child's Birth Certificate",
  "Copy of Child's Official Immunization Record",
  "Copy of Both Parents' Emirates IDs & Passports",
  "4 Recent Passport-Sized Photographs of Child"
];

export default function AdmissionsPage({ onBookVisitClick }) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [checkedDocs, setCheckedDocs] = useState({});
  const curStep = ADMISSION_STEPS[activeStepIdx];

  const toggleDoc = (idx) => {
    setCheckedDocs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      <PageHeader
        badge="Enrolment 2026–2027"
        title="Bright Futures Start With Easy Enrolment"
        subtitle="Start your child's journey at Just Like Home Nursery. Explore our simple 4-step admissions pathway, check age eligibility, and schedule your guided tour."
        onBookVisitClick={onBookVisitClick}
        image="/images/hero.jpg"
        imageAlt="Welcoming reception and campus for new family admissions at Just Like Home Nursery"
        primaryCtaText="Register Now"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Admissions Journey",
          subject: "Step 1 of 4",
          status: "Fast & Easy",
          percentage: 80
        }}
        cardGreatJob={{
          title: "Tours Daily 🏫",
          subtitle: "Walk-ins Welcome"
        }}
        cardNextLesson={{
          label: "Next Step",
          subject: "Campus Tour",
          topic: "Meet the Teachers"
        }}
      />

      {/* SECTION 1: Interactive 4-Step Enrollment Roadmap */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">ENROLLMENT ROADMAP</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Your Seamless 4-Step Admissions Journey
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                We make joining our nursery family transparent, reassuring, and stress-free. Click each step to see what to expect.
              </p>
            </div>
          </RevealOnScroll>

          {/* Steps Tab Bar */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {ADMISSION_STEPS.map((s, sIdx) => {
              const isActive = sIdx === activeStepIdx;
              return (
                <button
                  key={s.step}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStepIdx(sIdx)}
                  style={isActive ? { background: s.color, borderColor: s.color } : {}}
                >
                  <span style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: isActive ? '#ffffff' : s.color,
                    color: isActive ? s.color : '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 900
                  }}>
                    {s.step}
                  </span>
                  <span>{s.title}</span>
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
            <div key={`${curStep.step}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curStep.bg,
                color: curStep.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <Clock size={15} />
                <span>{curStep.badge}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curStep.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curStep.desc}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.75rem' }}>
                {curStep.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: curStep.color, flexShrink: 0 }} />
                    <span>{h}</span>
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
                    background: curStep.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curStep.color}60`
                  }}
                >
                  <span>{curStep.action}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${curStep.step}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curStep.image}
                  alt={curStep.title}
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
                Step {curStep.step} of 4 🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Admissions Calculator */}
      <AdmissionsCalculator onBookVisitClick={onBookVisitClick} />

      {/* SECTION 2: Interactive Document Checklist */}
      <section className="section-padding bg-cream-subtle" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <RevealOnScroll animation="zoom-in">
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '2.5rem',
              padding: '3.5rem 3rem',
              border: '1.5px solid rgba(123, 17, 39, 0.1)',
              boxShadow: '0 15px 40px rgba(70, 7, 19, 0.05)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="badge-maroon">INTERACTIVE CHECKLIST</span>
                <h2 style={{ fontSize: '2.2rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginTop: '0.4rem', fontWeight: 800 }}>
                  Required Enrolment Documents
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#6b7280', marginTop: '0.35rem' }}>
                  Click to check off the documents you have prepared for our admissions coordinator.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                {REQUIRED_DOCS.map((doc, idx) => {
                  const isChecked = !!checkedDocs[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleDoc(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '1.1rem 1.35rem',
                        backgroundColor: isChecked ? '#f0fdf4' : '#fdfbf7',
                        borderRadius: '1.25rem',
                        border: isChecked ? '1.5px solid #22c55e' : '1.5px solid rgba(123, 17, 39, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isChecked ? '0 4px 12px rgba(34, 197, 94, 0.1)' : 'none'
                      }}
                    >
                      <div style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: isChecked ? '#22c55e' : '#e2e8f0',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s ease'
                      }}>
                        {isChecked ? <Check size={16} strokeWidth={3} /> : <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#94a3b8' }} />}
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: 650, color: isChecked ? '#15803d' : '#334155' }}>
                        {doc}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <button onClick={onBookVisitClick} className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '0.95rem' }}>
                  <Calendar size={18} />
                  <span>Schedule Registration Tour</span>
                </button>
                <a
                  href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20have%20questions%20regarding%20enrolment%20documents%20and%20seat%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '9999px' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Admissions Desk</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
