import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Languages, 
  Palette, 
  Search, 
  Music, 
  Sun, 
  Compass,
  Clock,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function ActivitiesShowcase({ onBookVisitClick }) {
  const [activeTab, setActiveTab] = useState('activities'); // 'activities' or 'routine'
  const actRef = useRef(null);
  const { progress } = useSectionScroll(actRef);

  const activities = [
    {
      title: "Phonics & Early Literacy",
      desc: "Letter sounds, phonemic games, sand tray tracing, and joyful storytelling that foster lifelong reading passion.",
      icon: BookOpen,
      color: "#0284c7",
      bg: "#e0f2fe"
    },
    {
      title: "Arabic Language Immersion",
      desc: "Daily conversational Arabic through cheerful songs, cultural stories, and practical everyday vocabulary.",
      icon: Languages,
      color: "#15803d",
      bg: "#dcfce7"
    },
    {
      title: "Early Numeracy & Logic",
      desc: "Counting real objects, measuring water cups, recognizing geometric shapes, and solving colorful sorting puzzles.",
      icon: Calculator,
      color: "#d4af37",
      bg: "#fef9c3"
    },
    {
      title: "Creative Arts & Crafts",
      desc: "Finger painting, natural clay sculpting, collage making, and free-form easel expression for boundless imagination.",
      icon: Palette,
      color: "#aa1e3d",
      bg: "#fff1f3"
    },
    {
      title: "Sensory & Exploration Lab",
      desc: "Investigating water density, kinetic sand, textured fabrics, scents, and colors to stimulate neural development.",
      icon: Search,
      color: "#0284c7",
      bg: "#e0f2fe"
    },
    {
      title: "Stories, Rhymes & Music",
      desc: "Sing-along circle time, rhythm percussion instruments, puppet role-play, and expressive poetry.",
      icon: Music,
      color: "#7e22ce",
      bg: "#f3e8ff"
    },
    {
      title: "Physical & Outdoor Play",
      desc: "Safe shaded playground, tricycle track, balance beams, and group games for stamina and motor agility.",
      icon: Sun,
      color: "#16a34a",
      bg: "#dcfce7"
    },
    {
      title: "Life Skills & Independence",
      desc: "Polite table manners, washing hands, tying shoelaces, organizing personal items, and packing activity bags.",
      icon: Compass,
      color: "#460713",
      bg: "#f5f3f0"
    }
  ];

  const dailySchedule = [
    { time: "07:30 - 08:30 AM", title: "Early Arrival & Calm Exploration", desc: "Warm welcome by educators, gentle table toys, and calming social greetings." },
    { time: "08:30 - 09:15 AM", title: "Morning Circle & Jolly Phonics", desc: "Interactive greetings, calendar & weather talk, song of the day, and phonics sounds." },
    { time: "09:15 - 10:15 AM", title: "Sensory Play & Arabic Language", desc: "Hands-on discovery tables, messy play, and interactive bilingual Arabic stories." },
    { time: "10:15 - 10:45 AM", title: "Nutritious Snack & Table Etiquette", desc: "Healthy fruit and snack time, practicing polite sharing and hand hygiene." },
    { time: "10:45 - 11:45 AM", title: "Outdoor Play & Physical Agility", desc: "Shaded garden play, obstacle running, tricycle tracks, and fresh air movement." },
    { time: "11:45 - 12:30 PM", title: "Creative Atelier & Expressive Arts", desc: "Painting, craft projects, music percussion, and construction challenges." },
    { time: "12:30 - 01:00 PM", title: "Story Corner & Half-Day Dismissal", desc: "Peaceful story reading, reflection on achievements, and warm goodbyes for morning students." },
    { time: "01:00 - 03:00 PM", title: "Warm Lunch & Quiet Sleep Time", desc: "Comfortable rest in our sanitized quiet room, supervised by attentive caregivers." },
    { time: "03:00 - 05:30 PM", title: "Afternoon Enrichment & Free Play", desc: "Light tea snack, puzzle games, guided story theater, and extended care pickup." }
  ];

  return (
    <section 
      id="activities" 
      ref={actRef}
      className="section-padding bg-cream" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} /> EVERYDAY EXPERIENCES
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              Little Hands. <span style={{ color: '#7b1127' }}>Big Discoveries.</span>
            </h2>
            <p className="section-subtitle">
              We believe children learn best by doing. Every moment of their nursery day is packed with sensory wonder, friendly laughter, and creative exploration.
            </p>

            {/* Toggle Tab Buttons */}
            <div style={{
              display: 'inline-flex',
              backgroundColor: '#ffffff',
              padding: '0.35rem',
              borderRadius: '9999px',
              border: '1px solid rgba(123, 17, 39, 0.15)',
              boxShadow: '0 4px 15px rgba(70, 7, 19, 0.05)',
              marginTop: '2rem'
            }}>
              <button
                onClick={() => setActiveTab('activities')}
                style={{
                  padding: '0.65rem 1.75rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: activeTab === 'activities' ? '#7b1127' : 'transparent',
                  color: activeTab === 'activities' ? '#ffffff' : '#460713',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Enriching Activities
              </button>
              <button
                onClick={() => setActiveTab('routine')}
                style={{
                  padding: '0.65rem 1.75rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: activeTab === 'routine' ? '#7b1127' : 'transparent',
                  color: activeTab === 'routine' ? '#ffffff' : '#460713',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                A Day in the Life (Schedule)
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Tab 1: Activities Grid */}
        {activeTab === 'activities' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {activities.map((act, idx) => {
              const IconComp = act.icon;
              // Paradigm #07: Bi-directional Counter-scrolling shear
              const offset = idx % 2 === 0 ? (progress - 0.45) * 18 : -(progress - 0.45) * 18;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    border: '1px solid rgba(123, 17, 39, 0.08)',
                    boxShadow: '0 8px 24px rgba(70, 7, 19, 0.04)',
                    transform: `translate3d(0, ${offset}px, 0)`,
                    transition: 'transform 0.2s ease-out, box-shadow 0.25s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(70, 7, 19, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(70, 7, 19, 0.04)';
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: act.bg,
                    color: act.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComp size={26} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    color: '#3d050f',
                    marginBottom: '0.65rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {act.title}
                  </h3>
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#57524e',
                    lineHeight: '1.65'
                  }}>
                    {act.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Daily Schedule Timeline */}
        {activeTab === 'routine' && (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1.5px solid rgba(123, 17, 39, 0.1)',
            boxShadow: '0 15px 45px rgba(70, 7, 19, 0.06)',
            maxWidth: '900px',
            margin: '0 auto 3.5rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge-gold">PREDICTABLE & NURTURING</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', color: '#3d050f' }}>
                Our Gentle Daily Rhythm
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6b7280', marginTop: '0.35rem' }}>
                Young children feel happiest when their days have clear, predictable structure infused with warmth and fun.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {dailySchedule.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    backgroundColor: idx % 2 === 0 ? '#fdfbf7' : '#ffffff',
                    border: '1px solid rgba(123, 17, 39, 0.06)',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    minWidth: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#7b1127',
                    fontWeight: '700',
                    fontSize: '0.85rem'
                  }}>
                    <Clock size={16} style={{ color: '#d4af37' }} />
                    <span>{item.time}</span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '700', fontSize: '1rem', color: '#3d050f', marginBottom: '0.2rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: '1.5' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Callout with Colorful Claymorphic Glass */}
        <div className="clay-glass-banner-pastel" style={{
          marginTop: '3.5rem',
          padding: '2.8rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div className="clay-glow-orb clay-orb-1" style={{ top: '-40px', left: '10%' }} />
          <div className="clay-glow-orb clay-orb-2" style={{ bottom: '-50px', right: '15%' }} />
          <div className="clay-glow-orb clay-orb-3" style={{ top: '20%', right: '35%' }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.92)',
              border: '1.5px solid rgba(241, 90, 41, 0.3)',
              color: '#ea580c',
              padding: '0.35rem 0.95rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.8rem',
              boxShadow: '0 4px 12px rgba(241, 90, 41, 0.08)'
            }}>
              <CheckCircle2 size={16} style={{ color: '#16a34a' }} />
              <span>Certified Motherly Care &amp; EYFS</span>
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#1e293b', fontFamily: 'var(--font-heading)', fontWeight: '900', lineHeight: 1.25, margin: 0, letterSpacing: '-0.02em' }}>
              Would you like to experience our activities firsthand?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.96rem', marginTop: '0.5rem', marginBottom: 0, lineHeight: 1.6, fontWeight: '500' }}>
              Schedule a guided visit with our academic team at Villa 47, Al Rashidiya 2, Ajman.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <button
              onClick={onBookVisitClick}
              className="btn-clay-gold"
              style={{
                padding: '1.05rem 2.2rem',
                fontSize: '1rem'
              }}
            >
              <Calendar size={18} />
              <span>Book a Nursery Tour</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
