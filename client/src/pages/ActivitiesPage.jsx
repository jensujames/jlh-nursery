import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ActivitiesShowcase from '../components/ActivitiesShowcase';
import InteractivePlayLab from '../components/InteractivePlayLab';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Camera, ArrowRight, Calendar, Palette, 
  BookOpen, Music, FlaskConical, Globe2, Trees, 
  CheckCircle2, Star, Smile, Award
} from 'lucide-react';

const ACTIVITY_DOMAINS = [
  {
    id: 'little-artists',
    name: 'Little Artists & Messy Play',
    icon: Palette,
    color: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    tag: 'Artistic Self-Expression',
    heading: 'Where Colors Spark Pure Imagination',
    desc: 'Children dip their fingers into vibrant, non-toxic washable paints, mold eco-clay sculptures, and paint on Montessori wooden easels. We emphasize the joyful journey of creative self-expression over rigid uniformity.',
    image: '/images/activity-little-artists.jpg',
    materials: ['Washable Plant-Based Paints', 'Montessori Wooden Easels', 'Natural Clay & Texture Tools'],
    outcomes: ['Fine Motor Precision', 'Color Theory & Spatial Awareness', 'Emotional Catharsis & Pride'],
    floatingBadge: 'Little Artist 🎨'
  },
  {
    id: 'mini-stem',
    name: 'Mini STEM & Inquiry Lab',
    icon: FlaskConical,
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    tag: 'Sensory Science & Math',
    heading: 'Curiosity Sparked by Hands-On Discovery',
    desc: 'Miniature microscopes, magnetic balance scales, water flow tubes, and nature specimen sorting. Children test hypotheses, learn early cause-and-effect, and discover the wonder of physics and biology.',
    image: '/images/activity-mini-stem.jpg',
    materials: ['Preschool Safe Microscopes', 'Sensory Water Flow Tables', 'Nature Botany Trays'],
    outcomes: ['Early Hypothesis Testing', 'Counting & Weight Sorting', 'Observation Vocabulary'],
    floatingBadge: 'Curious Mind 🔬'
  },
  {
    id: 'creative-play',
    name: 'Creative Play & Robotics',
    icon: Sparkles,
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    tag: 'Cooperative Engineering',
    heading: 'Building Teamwork, Structures & Friendships',
    desc: 'Magnetic tiles, giant wooden foam blocks, sensory marble runs, and cooperative pretend play corners. Children negotiate roles, solve architectural balance problems, and build lifelong friendships.',
    image: '/images/activity-creative-play.jpg',
    materials: ['Sensory Magnetic Tiles', 'Giant Architect Blocks', 'Pretend Doctor & Grocery Sets'],
    outcomes: ['Spatial Geometry Intuition', 'Peer Negotiation & Sharing', 'Resilience & Problem Solving'],
    floatingBadge: 'Team Builder 🏗️'
  },
  {
    id: 'phonics-arabic',
    name: 'Phonics & Arabic Immersion',
    icon: BookOpen,
    color: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    tag: 'Bilingual Literacy & Rhyme',
    heading: 'Cultivating Love for Stories & Languages',
    desc: 'Interactive Jolly Phonics sound baskets, big picture book story rugs, rhythmic finger puppets, and natural Arabic conversational songs that honor local cultural heritage in a gentle, joyful manner.',
    image: '/images/classroom.jpg',
    materials: ['Jolly Phonics Sensory Sound Boxes', 'Illustrated Big Books', 'Bilingual Audio Rhyme Rug'],
    outcomes: ['Letter-Sound Blending', 'Fluent Vocabulary Growth', 'Cultural Pride & Identity'],
    floatingBadge: 'Phonics Star 🔤'
  }
];

const WEEKDAY_THEMES = [
  { day: 'Monday', title: 'Sensory Splash & Colors', desc: 'Tactile water experiments, texture boards, and finger-paint discovery.' },
  { day: 'Tuesday', title: 'Mini STEM & Nature Sorting', desc: 'Leaves, stones, magnifying glasses, and magnetic counting tiles.' },
  { day: 'Wednesday', title: 'Jolly Phonics & Puppet Theater', desc: 'Sound-matching games, dramatic roleplay, and story circles.' },
  { day: 'Thursday', title: 'Little Chefs & Healthy Baking', desc: 'Fruit cutting with toddler safety knives, dough kneading, and food art.' },
  { day: 'Friday', title: 'Outdoor Adventure & Obstacle Turf', desc: 'Parachute games, trike obstacle courses, and water splash laughter.' }
];

export default function ActivitiesPage({ onBookVisitClick }) {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const curDomain = ACTIVITY_DOMAINS[activeDomainIdx];
  const DomainIcon = curDomain.icon;

  return (
    <div>
      <PageHeader
        badge="Creativity & Wonder"
        title="Big Smiles Start With Creative Play"
        subtitle="Explore phonics, literacy, early numeracy, Arabic immersion, sensory science, messy arts, music, storytelling, and outdoor play."
        onBookVisitClick={onBookVisitClick}
        image="/images/activity-little-artists.jpg"
        imageAlt="Joyful children collaborating with creative arts, crafts and sensory materials"
        primaryCtaText="View Activities"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Weekly Themes",
          subject: "Messy Art",
          status: "Creative Fun",
          percentage: 95
        }}
        cardGreatJob={{
          title: "Little Artists 🎨",
          subtitle: "Finger Painting Day"
        }}
        cardNextLesson={{
          label: "Next Session",
          subject: "Music",
          topic: "Rhythm & Songs"
        }}
      />

      {/* SECTION 1: Interactive Activity Domain Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">ENRICHMENT CORE</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Interactive Activity Domains
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Click through each domain below to see the materials, pedagogical goals, and hands-on excitement our children experience daily.
              </p>
            </div>
          </RevealOnScroll>

          {/* Activity Tabs */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {ACTIVITY_DOMAINS.map((domain, dIdx) => {
              const IconComp = domain.icon;
              const isActive = dIdx === activeDomainIdx;
              return (
                <button
                  key={domain.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveDomainIdx(dIdx)}
                  style={isActive ? { background: domain.color, borderColor: domain.color } : {}}
                >
                  <IconComp size={16} style={{ color: isActive ? '#ffffff' : domain.color }} />
                  <span>{domain.name}</span>
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
            <div key={`${curDomain.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curDomain.bg,
                color: curDomain.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <DomainIcon size={15} />
                <span>{curDomain.tag}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curDomain.heading}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curDomain.desc}
              </p>

              {/* Material Tools Used */}
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '14px 18px',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Child-Safe Materials &amp; Fittings
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {curDomain.materials.map((m, mIdx) => (
                    <span key={mIdx} style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', background: '#ffffff', border: '1px solid #cbd5e1', padding: '3px 10px', borderRadius: '6px' }}>
                      &bull; {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
                {curDomain.outcomes.map((o, oIdx) => (
                  <div
                    key={oIdx}
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
                    <CheckCircle2 size={14} style={{ color: curDomain.color }} />
                    <span>{o}</span>
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
                    background: curDomain.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curDomain.color}60`
                  }}
                >
                  <span>Experience This Lab</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${curDomain.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curDomain.image}
                  alt={curDomain.name}
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
                {curDomain.floatingBadge}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Weekly Rhythm Schedule Strip */}
      <section className="section-padding bg-cream-subtle" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
              <span className="badge-maroon">DAILY EXCITEMENT</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#3d050f',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                A Week Full of Discovery at Villa 47
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Every weekday brings an engaging focus to keep young minds energized, confident, and constantly learning.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}>
            {WEEKDAY_THEMES.map((item, idx) => (
              <RevealOnScroll key={idx} animation="from-bottom" delay={idx * 80}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '1.5rem',
                  padding: '1.75rem 1.5rem',
                  border: '1.5px solid rgba(123, 17, 39, 0.1)',
                  boxShadow: '0 8px 24px rgba(114, 16, 36, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}>
                  <div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(241, 90, 41, 0.1)',
                      color: '#ea580c',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      marginBottom: '0.85rem'
                    }}>
                      {item.day}
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Main Activities & Daily Schedule Component */}
      <ActivitiesShowcase onBookVisitClick={onBookVisitClick} />

      {/* Interactive Play & Discovery Lab */}
      <InteractivePlayLab onBookVisitClick={onBookVisitClick} />

      {/* Gallery Teaser Link */}
      <section style={{ backgroundColor: '#ffffff', padding: '4.5rem 0', borderTop: '1px solid rgba(123, 17, 39, 0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <RevealOnScroll animation="fade-up">
            <div>
              <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
                <Camera size={14} /> SEE LEARNING IN ACTION
              </span>
              <h2 style={{ fontSize: '2rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                Would You Like to See Real Nursery Moments?
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Visit our photo gallery for a visual look inside our classrooms, sensory exploration labs, and shaded outdoor garden.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/gallery" className="btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
                  <span>View Nursery Photo Gallery</span>
                  <ArrowRight size={16} />
                </Link>
                <button onClick={onBookVisitClick} className="btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
                  <Calendar size={16} />
                  <span>Book an In-Person Tour</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
