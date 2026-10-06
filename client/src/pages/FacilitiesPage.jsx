import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Building2, Trees, Moon, Sparkles, BookOpen, Award, 
  Bath, Utensils, HeartPulse, Stethoscope, Lock, Video, 
  ShieldCheck, Calendar, ArrowRight, Phone, Compass 
} from 'lucide-react';

const FACILITIES = [
  {
    title: 'Safe & Welcoming Classrooms',
    desc: 'Child-friendly learning spaces designed for participation, comfort and age-appropriate experiences.',
    icon: Building2
  },
  {
    title: 'Indoor Play Area',
    desc: 'A dedicated space for movement, social play and engaging activities.',
    icon: Sparkles
  },
  {
    title: 'Outdoor Play Area',
    desc: 'Opportunities for fresh air, physical development and active exploration.',
    icon: Trees
  },
  {
    title: 'Baby Care & Quiet Room',
    desc: 'A calmer environment to support age-appropriate care, rest and comfort.',
    icon: Moon
  },
  {
    title: 'Sensory & Exploration Spaces',
    desc: 'Hands-on areas where children can investigate materials and learn through their senses.',
    icon: Sparkles
  },
  {
    title: 'Reading & Story Corner',
    desc: 'An inviting place to enjoy books, conversation, imagination and quiet moments.',
    icon: BookOpen
  },
  {
    title: 'Life-Skills Activity Areas',
    desc: 'Practical experiences that encourage independence, confidence and everyday responsibility.',
    icon: Award
  },
  {
    title: 'Child-Friendly Washrooms',
    desc: 'Facilities designed to support safety, dignity and growing self-care skills.',
    icon: Bath
  },
  {
    title: 'Kitchen & Meal Preparation Area',
    desc: 'A designated area supporting nursery meal and snack routines, subject to current nursery provision.',
    icon: Utensils
  },
  {
    title: 'First-Aid / Clinic Facility',
    desc: 'A dedicated point for first-aid support and wellbeing needs.',
    icon: HeartPulse
  },
  {
    title: 'Doctor Visits',
    desc: 'Doctor visits are provided as part of the nursery\'s health-support practices; frequency and scope should be confirmed before publication.',
    icon: Stethoscope
  },
  {
    title: 'Secure Reception',
    desc: 'A controlled welcome point for visitors, families and daily arrivals.',
    icon: Lock
  },
  {
    title: 'Safe & Child-Friendly Environment',
    desc: 'Every corner is thoughtfully planned with rounded edges, non-toxic materials, and clean, welcoming surroundings.',
    icon: ShieldCheck
  },
  {
    title: 'CCTV Monitoring for Enhanced Safety',
    desc: 'Continuous CCTV monitoring supports heightened safety and peace of mind within nursery approved policies.',
    icon: Video
  }
];

export default function FacilitiesPage() {
  useEffect(() => {
    document.title = "Nursery Facilities & Safety in Ajman | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the safe classrooms, indoor and outdoor play areas, sensory spaces, quiet room, clinic support, secure reception and CCTV at our Ajman nursery.");
    }
  }, []);

  return (
    <div className="facilities-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
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
                <ShieldCheck size={14} />
                FACILITIES &amp; SAFETY · ANSWER PARENT TRUST AND SAFETY QUESTIONS
              </span>

              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.2,
                margin: '0 0 24px 0'
              }}>
                A Safe, Welcoming Space Created for Little Learners
              </h1>

              <div style={{ fontSize: '17.5px', lineHeight: 1.8, color: '#475569', margin: '0 auto 36px', maxWidth: '800px' }}>
                <p style={{ margin: 0 }}>
                  Children feel more confident when their environment is comfortable, predictable and designed around their needs. Our nursery spaces support active play, focused discovery, social interaction, rest and everyday routines.
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
                  <span>ARRANGE A NURSERY TOUR</span>
                </Link>
                <Link
                  to="/contact"
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
                  <Phone size={18} />
                  <span>CONTACT US</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE 13 FACILITIES */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {FACILITIES.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <RevealOnScroll key={index} delay={index * 30}>
                  <div style={{
                    background: '#FFFDF7',
                    borderRadius: '24px',
                    padding: '32px 28px',
                    border: '1.5px solid #ffede4',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    height: '100%',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}>
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      backgroundColor: '#FFF1F2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <Icon size={26} />
                    </div>
                    <h2 style={{ fontSize: '21px', fontWeight: '850', color: '#1e293b', marginBottom: '12px' }}>
                      {facility.title}
                    </h2>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {facility.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SAFETY IS A DAILY PRACTICE */}
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
                <ShieldCheck size={30} />
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '900', color: '#721024', marginBottom: '18px' }}>
                Safety Is a Daily Practice
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '740px', margin: '0 auto 32px' }}>
                A safe environment depends on more than equipment. It also depends on careful supervision, clear routines, cleanliness, responsible access and communication with families. During your visit, our team will be happy to explain the current safety and wellbeing procedures that apply at the nursery.
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
                  <span>ARRANGE A NURSERY TOUR</span>
                </Link>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 30px',
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
                  <Phone size={18} />
                  <span>CONTACT US</span>
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
              A Safe, Welcoming Space Created for Little Learners
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Children feel more confident when their environment is comfortable, predictable and designed around their needs.
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
                <span>ARRANGE A NURSERY TOUR</span>
              </Link>
              <Link
                to="/contact"
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
                <Phone size={18} />
                <span>CONTACT US</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
