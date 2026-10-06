import React, { useState, useRef } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Smile, 
  Sparkles, 
  Users, 
  Compass, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function AboutSection({ onBookVisitClick }) {
  const [activePromiseIndex, setActivePromiseIndex] = useState(0);
  const aboutRef = useRef(null);
  const { progress } = useSectionScroll(aboutRef);

  // Paradigm #29 Reading Pen progress (starts when section enters 25%, fully draws by 65%)
  const penProgress = Math.min(100, Math.max(0, (progress - 0.2) * 220));

  const promises = [
    {
      title: "Safe, Clean & Welcoming Environment",
      desc: "Providing a spotless, hygienic, child-proofed space where children feel completely secure to explore and thrive.",
      icon: ShieldCheck,
      color: "#7b1127"
    },
    {
      title: "Kindness, Patience & Caring Respect",
      desc: "Treating every single child with boundless patience, unconditional warmth, dignity, and deep emotional understanding.",
      icon: Heart,
      color: "#aa1e3d"
    },
    {
      title: "Whole-Child Development",
      desc: "Nurturing emotional balance, social friendships, physical coordination, language mastery, and intellectual curiosity.",
      icon: Sparkles,
      color: "#d4af37"
    },
    {
      title: "Play-Based Discovery & Joy",
      desc: "Encouraging children to learn naturally through joyful play, sensory stimulation, hands-on creativity, and discovery.",
      icon: Smile,
      color: "#0284c7"
    },
    {
      title: "Strong Partnerships with Parents",
      desc: "Transparent, respectful, and ongoing daily communication so nursery and home work in seamless harmony.",
      icon: Users,
      color: "#15803d"
    },
    {
      title: "Celebrating Every Unique Little Heart",
      desc: "Recognizing that every child blossoms at their own pace, celebrating individual passions, interests, and milestones.",
      icon: Star,
      color: "#ca8a04"
    },
    {
      title: "Confidence, Manners & Practical Life Skills",
      desc: "Equipping young learners with independence, courteous manners, self-regulation, and essential everyday life skills.",
      icon: Compass,
      color: "#6b0c20"
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="section-padding bg-cream-subtle perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Section Header */}
        <RevealOnScroll animation="from-top">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <Heart size={14} fill="#7b1127" /> OUR PHILOSOPHY & STORY
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              A Nursery Created Around the Way <br />
              <span style={{
                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 45%, #ca8a04 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Children Feel, Learn and Grow
              </span>
            </h2>
            <p className="section-subtitle">
              Just Like Home Nursery was founded on a simple, timeless belief: young children flourish best when they feel deeply loved, respected, safe, and truly understood.
            </p>
          </div>
        </RevealOnScroll>

        {/* Vision & Mission Double Feature Box with ScrollCraft 3D Origami Fold */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          
          {/* Vision Card (Enters from Left) */}
          <RevealOnScroll animation="from-left" delay={100}>
            <div 
              className="origami-fold-top"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)',
                border: '2px solid rgba(2, 132, 199, 0.25)',
                borderRadius: '1.75rem',
                padding: '2.5rem',
                boxShadow: '0 12px 35px rgba(2, 132, 199, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                transform: `perspective(800px) rotateX(${Math.max(-8, (0.4 - progress) * 14)}deg) translateY(${Math.max(0, (0.3 - progress) * 20)}px)`,
                transition: 'transform 0.25s ease-out',
                height: '100%'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '1rem',
                backgroundColor: '#e0f2fe',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(2, 132, 199, 0.25)'
              }}>
                <Compass size={28} />
              </div>

              <div style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#0284c7',
                marginBottom: '0.5rem'
              }}>
                Our Guiding Vision
              </div>

              <h3 style={{
                fontSize: '1.45rem',
                lineHeight: '1.35',
                color: '#3d050f',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Preparing children for life with loving care and attention.
              </h3>

              <p style={{ color: '#57524e', fontSize: '0.98rem', lineHeight: '1.7' }}>
                We envision every child stepping forward into their formative school years not only equipped with academic readiness, but with emotional resilience, empathy, polite manners, and unshakeable self-worth.
              </p>
            </div>
          </RevealOnScroll>

          {/* Mission Card (Enters from Right) */}
          <RevealOnScroll animation="from-right" delay={180}>
            <div 
              className="origami-fold-bottom"
              style={{
                background: 'linear-gradient(145deg, #5c0a1a 0%, #3d040e 100%)',
                borderRadius: '1.75rem',
                padding: '2.5rem',
                boxShadow: '0 18px 45px rgba(70, 7, 19, 0.25)',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                transform: `perspective(800px) rotateX(${Math.min(8, -(0.4 - progress) * 14)}deg) translateY(${Math.max(0, (0.3 - progress) * 20)}px)`,
                transition: 'transform 0.25s ease-out',
                height: '100%'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '1rem',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                color: '#86efac',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(134, 239, 172, 0.4)'
              }}>
                <Heart size={28} fill="#86efac" />
              </div>

            <div style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#86efac',
              marginBottom: '0.5rem'
            }}>
              Our Daily Mission
            </div>

            {/* Reading Pen Highlight Applied to Mission Quote */}
            <h3 style={{
              fontSize: '1.45rem',
              lineHeight: '1.45',
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              “We don't just educate children —{' '}
              <span 
                className="reading-pen-highlight" 
                style={{ 
                  '--pen-progress': `${penProgress}%`,
                  color: penProgress > 40 ? '#1f2937' : '#ffffff',
                  fontWeight: '700',
                  transition: 'color 0.2s ease'
                }}
              >
                we nurture little hearts, build confidence, encourage curiosity,
              </span>{' '}
              and create happy memories that last a lifetime.”
            </h3>

            <p style={{ color: '#fce7eb', fontSize: '0.98rem', lineHeight: '1.7', opacity: 0.9 }}>
              Childhood's earliest years are filled with precious milestones. We protect the joy of childhood while gently steering each little one toward curiosity, independence, and creativity.
            </p>
          </div>
          </RevealOnScroll>

        </div>

        {/* Our 7 Core Promises to Families - Interactive Tabs/Accordion */}
        <RevealOnScroll animation="from-bottom" delay={150}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            padding: '3rem',
            boxShadow: '0 15px 40px rgba(70, 7, 19, 0.06)',
            border: '1px solid rgba(123, 17, 39, 0.1)'
          }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #f3ece6'
          }}>
            <div>
              <span className="badge-gold">TRUST & COMMITMENT</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '0.4rem', color: '#3d050f' }}>
                Our 7 Promises to Every Parent & Child
              </h3>
            </div>
            <button
              onClick={onBookVisitClick}
              className="btn-secondary"
              style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}
            >
              <span>Experience It in Person</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {promises.map((promise, index) => {
              const IconComp = promise.icon;
              return (
                <div
                  key={index}
                  style={{
                    padding: '1.5rem',
                    borderRadius: '1.25rem',
                    backgroundColor: activePromiseIndex === index ? '#fff1f3' : '#fcfaf7',
                    border: activePromiseIndex === index ? '1.5px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.07)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={() => setActivePromiseIndex(index)}
                  onMouseEnter={() => setActivePromiseIndex(index)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: activePromiseIndex === index ? '#7b1127' : '#ffffff',
                      color: activePromiseIndex === index ? '#ffffff' : '#7b1127',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                      flexShrink: 0
                    }}>
                      <IconComp size={20} />
                    </div>
                    <div style={{
                      fontWeight: '700',
                      fontSize: '1rem',
                      color: '#3d050f',
                      lineHeight: 1.3
                    }}>
                      {promise.title}
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#6b7280',
                    lineHeight: '1.6',
                    paddingLeft: '0.2rem'
                  }}>
                    {promise.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      </div>
    </section>
  );
}
