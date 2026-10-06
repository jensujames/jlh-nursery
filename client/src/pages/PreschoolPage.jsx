import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  GraduationCap, CheckCircle2, Smile, ArrowRight, 
  Calendar, MessageCircle, Sparkles, Compass 
} from 'lucide-react';

const DEVELOPMENTS = [
  'Listening and following familiar routines',
  'Expressing needs, ideas and feelings',
  'Early phonics, vocabulary and literacy foundations',
  'Counting, patterns, shapes and early problem-solving',
  'Taking turns, cooperating and participating in groups',
  'Fine-motor control for mark-making and early writing',
  'Self-help skills and growing responsibility',
  'Confidence when approaching new experiences'
];

export default function PreschoolPage() {
  useEffect(() => {
    document.title = "Preschool & School Readiness in Ajman | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Help your child prepare for school with confidence through preschool learning, phonics, numeracy, routines and independence at Just Like Home Nursery Ajman.");
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to ask about the Preschool and School Readiness program at Just Like Home Nursery."
  );

  return (
    <div className="preschool-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
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
                <GraduationCap size={14} />
                PRESCHOOL &amp; SCHOOL READINESS · HIGH-INTENT PRESCHOOL PAGE
              </span>

              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.2,
                margin: '0 0 24px 0'
              }}>
                Preparing Confident, Curious Children for Their Next Step
              </h1>

              <div style={{ fontSize: '17.5px', lineHeight: 1.8, color: '#475569', margin: '0 auto 36px', maxWidth: '800px' }}>
                <p style={{ marginBottom: '16px' }}>
                  Starting school is a major milestone. School readiness is not only about knowing letters and numbers; it is also about confidence, communication, independence, listening, routines and the ability to learn alongside others.
                </p>
                <p style={{ margin: 0 }}>
                  Our preschool and school-readiness experiences build these foundations through purposeful play and age-appropriate learning.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer"
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
                  <MessageCircle size={18} />
                  <span>ASK ABOUT PRESCHOOL</span>
                </a>
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
                  <Calendar size={18} />
                  <span>BOOK A VISIT</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. WHAT CHILDREN DEVELOP */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
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
                CORE CAPABILITIES
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#721024', margin: 0 }}>
                What Children Develop
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px'
          }}>
            {DEVELOPMENTS.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 30}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '20px 22px',
                  borderRadius: '18px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#fff1f2',
                    color: '#721024',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <p style={{ margin: 0, fontSize: '15.5px', fontWeight: '700', color: '#1e293b', lineHeight: 1.5 }}>
                    {item}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEARNING WITHOUT LOSING THE JOY & A SMOOTH TRANSITION */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            <RevealOnScroll>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '38px 32px',
                border: '1.5px solid rgba(114, 16, 36, 0.1)',
                boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Smile size={26} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '850', color: '#721024', marginBottom: '16px' }}>
                  Learning Without Losing the Joy
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Children are more likely to become enthusiastic learners when they feel successful and engaged. We introduce foundational concepts through stories, games, creative work, conversation, movement and practical experiences rather than relying only on worksheets or repetition.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '38px 32px',
                border: '1.5px solid rgba(114, 16, 36, 0.1)',
                boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <GraduationCap size={26} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '850', color: '#721024', marginBottom: '16px' }}>
                  A Smooth Transition
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Consistent routines and close parent communication help children understand what to expect and feel secure about change. Our goal is to help every child approach school as a capable learner who is ready to participate, ask questions and try.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA: ASK ABOUT PRESCHOOL | BOOK A VISIT */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1.25 }}>
              Preparing Confident, Curious Children for Their Next Step
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Our preschool and school-readiness experiences build these foundations through purposeful play and age-appropriate learning.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
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
                <MessageCircle size={18} />
                <span>ASK ABOUT PRESCHOOL</span>
              </a>
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
                <Calendar size={18} />
                <span>BOOK A VISIT</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
