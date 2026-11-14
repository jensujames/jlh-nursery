import React, { useState, useRef } from 'react';
import {
  Baby,
  Smile,
  Sparkles,
  GraduationCap,
  Clock,
  Sun,
  Check,
  Calendar,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function ProgramsSection({ onBookVisitClick }) {
  const [selectedProgram, setSelectedProgram] = useState(0);
  const progRef = useRef(null);
  const { progress } = useSectionScroll(progRef);

  const programs = [
    {
      id: "early-explorers",
      title: "Early Explorers",
      age: "45 Days to 1.5 Years",
      stage: "Infant & Young Toddler",
      icon: Baby,
      badgeColor: "#aa1e3d",
      summary: "A gentle, loving beginning focused on emotional comfort, safe sensory discovery, and responsive one-on-one care.",
      description: "Our Early Explorers room is crafted as a peaceful sanctuary where infants and young toddlers feel comforted and secure. With dedicated baby care spaces and soothing quiet zones, our trained caregivers follow your child's personal feeding and sleeping rhythm while encouraging sensory milestones.",
      highlights: [
        "1:3 / 1:4 Loving educator ratio",
        "Dedicated quiet sleeping room & sanitized cribs",
        "Sensory texture mats & natural tactile toys",
        "Daily communication diary & milestone tracking"
      ],
      timing: "Half-Day: 8:00 AM – 1:00 PM | Full-Day: Till 5:30 PM"
    },
    {
      id: "curious-learners",
      title: "Curious Learners",
      age: "1.5 to 3 Years",
      stage: "Nursery Toddlers",
      icon: Smile,
      badgeColor: "#7b1127",
      summary: "Playful opportunities to build expressive language, physical coordination, social confidence, and emerging independence.",
      description: "Toddlers are eager explorers! In our Curious Learners program, children actively engage in guided exploratory play, rhythmic songs, story time, and tactile sensory experiences that nurture early friendships and speech development.",
      highlights: [
        "Language enrichment & interactive storytelling",
        "Gentle, respectful toilet training support",
        "Fine & gross motor obstacle play",
        "Arabic & English vocabulary immersion"
      ],
      timing: "Half-Day: 8:00 AM – 1:00 PM | Extended: Till 3:00 PM"
    },
    {
      id: "confident-preschoolers",
      title: "Confident Preschoolers",
      age: "3 to 4 Years",
      stage: "Preschool Program",
      icon: Sparkles,
      badgeColor: "#d4af37",
      summary: "Broader experiences in phonics, early numeracy, creative art, problem-solving, and active group participation.",
      description: "Preschoolers are ready to ask 'why?' and discover the answers through creative experiments and structured play. We introduce British EYFS foundations through fun role-play, interactive math games, and artistic self-expression.",
      highlights: [
        "Jolly Phonics sounds & early letter recognition",
        "Counting, sorting, patterning & spatial reasoning",
        "Daily Arabic language sessions & cultural stories",
        "Social cooperation & conflict resolution skills"
      ],
      timing: "Morning: 8:00 AM – 1:00 PM | Full-Day Available"
    },
    {
      id: "school-ready",
      title: "School-Ready Learners",
      age: "4 to 5 Years",
      stage: "School Readiness",
      icon: GraduationCap,
      badgeColor: "#0284c7",
      summary: "Focused preparation for primary school routines, early literacy, numeracy, and independent confidence.",
      description: "Transitioning to big school is an exciting leap. We prepare children by cultivating self-confidence, listening focus, pencil grip, independence with their belongings, and enthusiasm for learning in a school environment.",
      highlights: [
        "Pre-writing pencil grip & fine motor precision",
        "Follow multi-step directions with confidence",
        "Independent shoe tying, bag packing & self-care",
        "Mock classroom sessions for seamless transition"
      ],
      timing: "8:00 AM – 1:30 PM (Extended Care Available)"
    },
    {
      id: "daycare",
      title: "Full-Day & Half-Day Care",
      age: "Flexible Care for All Ages",
      stage: "Extended Daycare",
      icon: Clock,
      badgeColor: "#15803d",
      summary: "Flexible schedules built to provide working parents with complete peace of mind and consistency for their child.",
      description: "Whether you need morning learning or full-day care until late afternoon, our extended daycare ensures your child continues to enjoy enriching activities, nutritious snack routines, afternoon rest, and caring supervision.",
      highlights: [
        "Early drop-off starting at 7:30 AM",
        "Nutritious snack routines & clean meal spaces",
        "Supervised quiet rest & nap time routines",
        "Afternoon arts, music & outdoor free play"
      ],
      timing: "7:30 AM – 5:30 PM (Flexible packages available)"
    },
    {
      id: "camps",
      title: "Holiday & Summer Camps",
      age: "2 to 6 Years",
      stage: "Seasonal Fun",
      icon: Sun,
      badgeColor: "#ca8a04",
      summary: "Action-packed holiday and summer camp adventures featuring themed crafts, splash days, music, and exciting trips.",
      description: "School holidays in Ajman become unforgettable adventures at Just Like Home Nursery! We host winter, spring, and summer camps packed with joyful physical games, science experiments, costume theme days, and sensory art.",
      highlights: [
        "Creative weekly themes (Space, Safari, Ocean, Mini Chefs)",
        "Water play & safe shaded outdoor fun",
        "Music, theater, storytelling & dance workshops",
        "Sibling discounts & weekly flexible bookings"
      ],
      timing: "Seasonal: 8:30 AM – 2:00 PM (Extended hours upon request)"
    }
  ];

  const current = programs[selectedProgram];
  const Icon = current.icon;

  return (
    <section
      id="programs"
      ref={progRef}
      className="section-padding bg-cream perspective-1000"
      style={{ position: 'relative' }}
    >
      <div className="container">

        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} /> NURSERY PATHWAYS
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              The Right Support for <br />
              <span style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Every Little Step
              </span>
            </h2>
            <p className="section-subtitle">
              Our programs provide the perfect harmony of loving care, purposeful play, social development, and age-tailored British EYFS learning.
            </p>
          </div>
        </RevealOnScroll>

        {/* Program Selection Pills */}
        <div
          className="programs-pills-bar"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '0.75rem',
            paddingBottom: '1rem',
            marginBottom: '2.5rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {programs.map((prog, index) => {
            const isSelected = selectedProgram === index;
            const ProgIcon = prog.icon;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedProgram(index)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  border: isSelected ? '2px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.12)',
                  backgroundColor: isSelected ? '#7b1127' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#460713',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 8px 20px rgba(123, 17, 39, 0.25)' : '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <ProgIcon size={16} />
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Program Showcase Card (ScrollCraft Paradigm #01: 3D Depth Compaction) */}
        <RevealOnScroll animation="zoom-in" delay={150}>
          <div
            className="programs-showcase-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '2rem',
              border: '1.5px solid rgba(123, 17, 39, 0.12)',
              boxShadow: '0 24px 60px rgba(70, 7, 19, 0.10)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              transform: `perspective(1000px) rotateX(${(0.45 - progress) * 5}deg) scale(${0.97 + Math.min(0.03, progress * 0.05)})`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            {/* Left Column: Details */}
            <div className="programs-card-details" style={{ padding: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: current.badgeColor === '#0284c7' ? '#e0f2fe' : current.badgeColor === '#15803d' ? '#dcfce7' : '#fce7eb',
                  color: current.badgeColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: current.badgeColor,
                    letterSpacing: '0.06em'
                  }}>
                    {current.stage}
                  </span>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#6b7280' }}>
                    Target Age: {current.age}
                  </div>
                </div>
              </div>

              <h3 style={{
                fontSize: '1.85rem',
                color: '#3d050f',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {current.title}
              </h3>

              <p style={{
                fontSize: '1.02rem',
                color: '#4a443e',
                lineHeight: '1.7',
                marginBottom: '1.75rem'
              }}>
                {current.description}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#7b1127',
                  letterSpacing: '0.06em',
                  marginBottom: '0.85rem'
                }}>
                  Program Highlights & Inclusions
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {current.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: current.badgeColor === '#0284c7' ? '#e0f2fe' : current.badgeColor === '#15803d' ? '#dcfce7' : '#fce7eb',
                        color: current.badgeColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.92rem', color: '#374151', fontWeight: '500' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#fdfbf7',
                borderRadius: '1rem',
                border: '1px solid rgba(123, 17, 39, 0.08)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Clock size={20} style={{ color: '#d4af37', flexShrink: 0 }} />
                <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                  <strong style={{ color: '#3d050f' }}>Timings:</strong> {current.timing}
                </div>
              </div>

              <div className="programs-actions-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onBookVisitClick}
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
                >
                  <Calendar size={18} />
                  <span>Book Visit for This Program</span>
                </button>

                <a
                  href={`https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(current.title)}%20program.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div
              className="programs-card-image-wrap"
              style={{
                position: 'relative',
                minHeight: '380px',
                backgroundColor: '#460713',
                overflow: 'hidden'
              }}
            >
              <img
                src={selectedProgram === 0 ? "/media/nursery/nursery-1.jpg" : selectedProgram % 2 === 0 ? "/media/school-readiness/school-readiness-1.jpg" : "/media/daycare/daycare-1.jpg"}
                alt={current.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.95
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(70, 7, 19, 0.75) 0%, rgba(70, 7, 19, 0.1) 60%)'
              }} />

              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                color: '#ffffff'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(212, 175, 55, 0.3)',
                  backdropFilter: 'blur(8px)',
                  color: '#fef08a',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  border: '1px solid rgba(212, 175, 55, 0.5)'
                }}>
                  ✨ British EYFS Standards
                </div>
                <h4 style={{
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {current.title} at Just Like Home
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#fce7eb', opacity: 0.9 }}>
                  Encouraging young minds through purposeful exploration and warm motherly guidance.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
