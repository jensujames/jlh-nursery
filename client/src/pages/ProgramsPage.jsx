import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Baby, Sparkles, BookOpen, GraduationCap, Clock, Sun, 
  ArrowRight, Calendar, Compass, Layers, CheckCircle2 
} from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Early Years Foundation',
    desc: 'A gentle introduction to nursery life, with caring routines, sensory experiences, communication-rich play, movement and opportunities to build secure relationships.',
    icon: Baby,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/eyfs-learning'
  },
  {
    title: 'Nursery Program',
    desc: 'Children build confidence through play, stories, music, creative activities, physical development and social interaction. Experiences are planned to encourage language, curiosity, cooperation and growing independence.',
    icon: Sparkles,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/nursery-activities'
  },
  {
    title: 'Preschool Program',
    desc: 'A stimulating program that extends early literacy, numeracy, communication and problem-solving while continuing to protect the joy of learning through play.',
    icon: BookOpen,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/preschool-school-readiness'
  },
  {
    title: 'School Readiness',
    desc: 'Children prepare for their next educational step through routines, listening, communication, independence, early academic foundations and the confidence to participate in a group environment.',
    icon: GraduationCap,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/preschool-school-readiness'
  },
  {
    title: 'Full-Day & Half-Day Care',
    desc: 'Flexible attendance options support different family schedules while maintaining a consistent, nurturing experience for each child. Confirm current timings and availability with the nursery team.',
    icon: Clock,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/daycare-ajman'
  },
  {
    title: 'Holiday & Summer Camps',
    desc: 'Seasonal programs combine creativity, movement, exploration, social interaction and themed experiences in a safe and familiar nursery setting.',
    icon: Sun,
    color: '#721024',
    bgColor: '#FFF1F2',
    link: '/camps'
  }
];

const DEVELOPMENTAL_STAGES = [
  {
    stage: 'Early Explorers',
    desc: 'A caring beginning focused on comfort, secure relationships, sensory discovery and early communication.'
  },
  {
    stage: 'Curious Learners',
    desc: 'Playful opportunities to build language, coordination, social confidence and independence.'
  },
  {
    stage: 'Confident Preschoolers',
    desc: 'Broader experiences in literacy, numeracy, creativity, problem-solving and group participation.'
  },
  {
    stage: 'School-Ready Learners',
    desc: 'Focused preparation for school routines, communication, self-help skills and foundational learning.'
  }
];

export default function ProgramsPage() {
  useEffect(() => {
    document.title = "Nursery Programs in Ajman | Just Like Home Nursery";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore early years, nursery, preschool, school readiness and flexible full-day and half-day care programs at Just Like Home Nursery in Ajman.");
    }
  }, []);

  return (
    <div className="programs-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
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
                <Compass size={14} />
                OUR PROGRAMS · PROGRAM OVERVIEW AND PATHWAY SELECTION
              </span>
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.2,
                margin: '0 0 24px 0'
              }}>
                The Right Support for Every Little Step
              </h1>
              <div style={{ fontSize: '17px', lineHeight: 1.8, color: '#475569', margin: '0 auto 36px' }}>
                <p style={{ marginBottom: '16px' }}>
                  Children's needs change quickly during the early years. Our programs are designed to provide the right balance of nurturing care, purposeful play, social experience and age-appropriate learning at each stage.
                </p>
                <p style={{ fontSize: '16px', color: '#64748b', margin: 0 }}>
                  Exact class placement is guided by your child's age, developmental needs, readiness and available nursery groups. Our team will help you choose the most suitable pathway during your visit.
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
                <a
                  href="#programs-grid"
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
                  <span>FIND THE RIGHT PROGRAM</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE SIX CORE PROGRAMS */}
      <section id="programs-grid" style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {PROGRAMS.map((prog, index) => {
              const Icon = prog.icon;
              return (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div style={{
                    background: '#FFFDF7',
                    borderRadius: '24px',
                    padding: '34px 28px',
                    border: '1.5px solid #ffede4',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}>
                    <div>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        backgroundColor: prog.bgColor,
                        color: prog.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '22px'
                      }}>
                        <Icon size={28} />
                      </div>
                      <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#1e293b', marginBottom: '14px' }}>
                        {prog.title}
                      </h2>
                      <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                        {prog.desc}
                      </p>
                    </div>

                    <div style={{ paddingTop: '22px', marginTop: '22px', borderTop: '1px solid #f1f5f9' }}>
                      <Link 
                        to="/contact" 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: '800',
                          fontSize: '14px',
                          color: '#721024',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Enquire About Pathway</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. AGE GROUPS (BY DEVELOPMENTAL STAGE) */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                marginBottom: '14px'
              }}>
                <Layers size={14} />
                DEVELOPMENTAL PATHWAY
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#721024', margin: '0 0 16px 0' }}>
                Age Groups
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#64748b', margin: 0 }}>
                The website should display age groups only after the nursery confirms its licensed age range and official class names. Until then, present the parent journey by developmental stage:
              </p>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px'
          }}>
            {DEVELOPMENTAL_STAGES.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 60}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 26px',
                  border: '1.5px solid rgba(114, 16, 36, 0.1)',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: '#721024' }} />
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    color: '#721024',
                    backgroundColor: '#fff1f2',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    marginBottom: '16px',
                    alignSelf: 'flex-start'
                  }}>
                    Stage {index + 1}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: '850', color: '#1e293b', marginBottom: '12px' }}>
                    {item.stage}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA: FIND THE RIGHT PROGRAM | BOOK A VISIT */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1.25 }}>
              The Right Support for Every Little Step
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Exact class placement is guided by your child's age, developmental needs, readiness and available nursery groups. Our team will help you choose the most suitable pathway during your visit.
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
                <span>FIND THE RIGHT PROGRAM</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
