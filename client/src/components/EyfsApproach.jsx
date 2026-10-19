import React, { useState, useRef } from 'react';
import { 
  MessageSquare, 
  HeartHandshake, 
  Activity, 
  BookOpen, 
  Calculator, 
  Globe, 
  Palette,
  CheckCircle,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function EyfsApproach() {
  const [activeArea, setActiveArea] = useState(0);
  const eyfsRef = useRef(null);
  const { progress } = useSectionScroll(eyfsRef);

  const eyfsAreas = [
    {
      title: "Communication & Language",
      tag: "Prime Area",
      icon: MessageSquare,
      color: "#7b1127",
      bgColor: "#fce7eb",
      summary: "Conversations, interactive stories, rhymes, and responsive listening.",
      description: "Young children develop their language fastest when spoken to with warmth, patience, and rich vocabulary. Our educators engage children in lively dialogues, rhymes, phonics songs, and Arabic vocabulary routines that build confident self-expression.",
      dailyActivities: [
        "Morning Circle interactive greeting time",
        "Puppet theater & storytelling sessions",
        "Bilingual English & Arabic vocabulary games",
        "Listening games & phonemic awareness drills"
      ]
    },
    {
      title: "Personal, Social & Emotional Development",
      tag: "Prime Area",
      icon: HeartHandshake,
      color: "#aa1e3d",
      bgColor: "#fff1f3",
      summary: "Emotional awareness, building friendships, sharing, and self-confidence.",
      description: "We help children navigate their feelings with kindness, recognize empathy in others, learn to take turns, resolve conflicts gently, and feel a deep sense of pride in their accomplishments.",
      dailyActivities: [
        "Feelings & emotions emotion-wheel check-in",
        "Cooperative building challenges in small groups",
        "Mindful quiet rest routines & deep breathing",
        "Praise & celebration of individual kindness"
      ]
    },
    {
      title: "Physical Development",
      tag: "Prime Area",
      icon: Activity,
      color: "#15803d",
      bgColor: "#dcfce7",
      summary: "Gross motor coordination, active outdoor games, and fine-motor control.",
      description: "Physical mastery is the bedrock of brain development and future handwriting. Children build balance, stamina, and spatial awareness across our shaded outdoor playground and indoor motor-skills gym.",
      dailyActivities: [
        "Obstacle courses, crawling tunnels & mini balance beams",
        "Tongs, tweezers & bead-threading for fine-motor control",
        "Water play, sand molding & outdoor tricycle rides",
        "Self-help dressing, handwashing & independence routines"
      ]
    },
    {
      title: "Literacy & Phonics",
      tag: "Specific Area",
      icon: BookOpen,
      color: "#0284c7",
      bgColor: "#e0f2fe",
      summary: "Letter sounds, phonemic joy, picture reading, and pre-writing mark making.",
      description: "We bring stories to life! Rather than tedious rote memorization, children interact with letters through sensory shaving foam, sand trays, rhythmic Jolly Phonics songs, and colorful picture books.",
      dailyActivities: [
        "Sensory finger-tracing of tactile sandpaper letters",
        "Library corner read-alouds with cozy floor cushions",
        "Alliteration sound-hunts around the classroom",
        "Pre-writing pencil grip & paintbrush mark-making"
      ]
    },
    {
      title: "Mathematics & Problem Solving",
      tag: "Specific Area",
      icon: Calculator,
      color: "#ca8a04",
      bgColor: "#fef9c3",
      summary: "Counting objects, sorting colors, shapes, patterns, and spatial reasoning.",
      description: "Math is an exciting real-world puzzle for little learners. Children discover counting by sharing snacks, measuring water cups, sorting colored blocks, and noticing geometric patterns in nature.",
      dailyActivities: [
        "Counting fruit slices and measuring ingredients",
        "Color-coded sorting & pattern sequencing with beads",
        "Shape scavenger hunts indoors and in the garden",
        "Early balance scales & weight comparisons"
      ]
    },
    {
      title: "Understanding the World",
      tag: "Specific Area",
      icon: Globe,
      color: "#0f766e",
      bgColor: "#ccfbf1",
      summary: "Hands-on exploration of nature, community, technology, and cultures.",
      description: "Children are natural scientists. We guide their curiosity about weather, plant growth in our nursery garden, local UAE traditions, and how everyday objects work through simple, safe hands-on experiments.",
      dailyActivities: [
        "Mini gardening: planting seeds and watching sprouts",
        "Magnifying glass inspections of leaves & shells",
        "UAE culture, heritage & national day festivities",
        "Sink or float water-density experiments"
      ]
    },
    {
      title: "Expressive Arts & Design",
      tag: "Specific Area",
      icon: Palette,
      color: "#7e22ce",
      bgColor: "#f3e8ff",
      summary: "Painting, sculpture, dramatic pretend play, music, and rhythmic movement.",
      description: "Imagination has no limits. Our art atelier and costume play corners provide children with the freedom to paint with fingers and brushes, construct models with recycled materials, and express themselves through song.",
      dailyActivities: [
        "Messy easel painting, watercolor & clay molding",
        "Role-play corner (doctor's clinic, grocery shop, home)",
        "Percussion instruments: drums, bells & maracas",
        "Creative dance, movement & action songs"
      ]
    }
  ];

  const current = eyfsAreas[activeArea];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="eyfs" 
      ref={eyfsRef}
      className="section-padding bg-cream-subtle perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="from-top">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} /> BRITISH EARLY YEARS FOUNDATION STAGE
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              Learning Through Play, <br />
              <span style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Discovery and Daily Wonder
              </span>
            </h2>
            <p className="section-subtitle">
              Our curriculum follows the globally respected British EYFS framework, nurturing children through 7 interconnected developmental areas tailored to their individual passions.
            </p>

            {/* ScrollCraft Paradigm #10: Spline Traversal Guide Beam */}
            <div style={{
              maxWidth: '480px',
              margin: '1.5rem auto 0',
              position: 'relative',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="100%" height="24" viewBox="0 0 400 24" style={{ overflow: 'visible' }}>
                <path 
                  d="M 10 12 C 100 2, 200 22, 390 12" 
                  fill="none" 
                  stroke="rgba(123, 17, 39, 0.15)" 
                  strokeWidth="2.5" 
                  strokeDasharray="4 4"
                />
                <circle 
                  cx={20 + progress * 360} 
                  cy={12 + Math.sin(progress * Math.PI * 2) * 6} 
                  r="6" 
                  fill="#d4af37" 
                  filter="drop-shadow(0 0 6px rgba(212, 175, 55, 0.8))"
                />
              </svg>
            </div>
          </div>
        </RevealOnScroll>

        {/* 7 EYFS Areas Grid / Interactive Selector (Enters from Bottom) */}
        <RevealOnScroll animation="from-bottom" delay={100}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
          transform: `perspective(1000px) rotateX(${Math.max(-5, (0.4 - progress) * 8)}deg)`,
          transition: 'transform 0.2s ease-out'
        }}>
          {eyfsAreas.map((area, index) => {
            const isSelected = activeArea === index;
            const AreaIcon = area.icon;
            return (
              <div
                key={index}
                onClick={() => setActiveArea(index)}
                style={{
                  padding: '1.25rem',
                  borderRadius: '1.25rem',
                  backgroundColor: isSelected ? '#ffffff' : '#fcfaf7',
                  border: isSelected ? `2px solid ${area.color}` : '1px solid rgba(123, 17, 39, 0.08)',
                  boxShadow: isSelected ? `0 10px 25px ${area.color}25` : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: area.bgColor,
                  color: area.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <AreaIcon size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    color: area.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {area.tag}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: isSelected ? area.color : '#1f2937',
                    lineHeight: '1.3'
                  }}>
                    {area.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </RevealOnScroll>

        {/* Focused Area Interactive Card */}
        <RevealOnScroll animation="from-bottom" delay={150}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            padding: '3rem',
            boxShadow: '0 20px 50px rgba(70, 7, 19, 0.06)',
            border: '1.5px solid rgba(123, 17, 39, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
          <div data-reveal="left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: current.bgColor,
                color: current.color,
                fontSize: '0.78rem',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                {current.tag}
              </span>
              <span style={{ color: '#9ca3af' }}>•</span>
              <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '600' }}>
                British EYFS Framework
              </span>
            </div>

            <h3 style={{
              fontSize: '2rem',
              color: '#3d050f',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              {current.title}
            </h3>

            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              {current.description}
            </p>

            <div style={{
              backgroundColor: '#fdfbf7',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              border: '1px solid rgba(123, 17, 39, 0.08)'
            }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: '#7b1127',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Lightbulb size={16} /> How We Teach This in Class
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {current.dailyActivities.map((act, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: current.color, flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.88rem', color: '#374151', lineHeight: '1.4' }}>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side (Enters from Right) */}
          <div 
            data-reveal="right"
            style={{
            position: 'relative',
            borderRadius: '1.75rem',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
            minHeight: '340px'
          }}>
            <img 
              src="/media/school-readiness/school-readiness-1.jpg" 
              alt={current.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(70, 7, 19, 0.6) 0%, transparent 60%)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              color: '#ffffff'
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.3rem'
              }}>
                Observation & Motherly Guidance
              </div>
              <p style={{ fontSize: '0.82rem', color: '#fce7eb', opacity: 0.9 }}>
                Teachers tailor each activity to match your child's pace, keeping learning stress-free and joyful.
              </p>
            </div>
          </div>
        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
