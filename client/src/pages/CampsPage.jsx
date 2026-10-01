import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Sun, Sparkles, Palette, Music, Waves, ShieldCheck, 
  Calendar, MessageCircle, CheckCircle2, ArrowRight, 
  Clock, Snowflake, Flower2, Utensils, Award, Star
} from 'lucide-react';

const SEASONS = [
  {
    id: 'summer',
    name: 'Summer Splash Camp',
    dates: 'July & August',
    icon: Waves,
    theme: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    title: 'Beat the Heat with Shaded Water Fun & Science',
    desc: 'Our high-energy summer camp combines safe UV-shaded water play, boat races, frozen sensory ice excavations, and air-conditioned indoor gymnastics and pottery labs in Villa 47.',
    image: '/images/outdoor.jpg',
    highlights: ['Shaded Water Splash Play Twice Weekly', 'Frozen Sensory Ice & Slime Labs', 'Indoor Air-Conditioned Soft Gym Loops'],
    badge: 'Summer Splash 🏖️'
  },
  {
    id: 'winter',
    name: 'Winter Wonder Camp',
    dates: 'December & January',
    icon: Snowflake,
    theme: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    title: 'Outdoor Garden Expeditions & Sports Days',
    desc: 'Taking full advantage of the gorgeous UAE winter weather with obstacle races on green turf lawns, mini gardening, puppet theater, hot cocoa and baking mornings, and camp dance carnivals.',
    image: '/images/activity-creative-play.jpg',
    highlights: ['Turf Lawn Sports & Obstacle Courses', 'Baking & Toddler Culinary Discovery', 'Dramatic Theater & Costume Carnivals'],
    badge: 'Winter Adventure ❄️'
  },
  {
    id: 'spring',
    name: 'Spring Discovery Camp',
    dates: 'March & April',
    icon: Flower2,
    theme: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    title: 'Botanical Nature Labs, Butterflies & Color Art',
    desc: 'Spring brings botany seed planting, caterpillar-to-butterfly observation, giant easel finger painting, recycled robot engineering, and musical percussion circles.',
    image: '/images/activity-little-artists.jpg',
    highlights: ['Living Garden Botany & Seed Planting', 'Giant Canvas Acrylic & Clay Workshops', 'Percussion Instruments & Rhythm Jam'],
    badge: 'Spring Bloom 🌸'
  }
];

const CAMP_THEMES = [
  { title: "Mini Scientists & Nature", desc: "Volcano bubbles, seed planting, solar rainbows, and mini magnifying glass garden explorations.", icon: Sparkles, color: '#0284c7' },
  { title: "Creative Art Atelier", desc: "Giant canvas finger painting, clay pottery, papier-mâché, and colorful recycled sculpture building.", icon: Palette, color: '#e11d48' },
  { title: "Splash & Water Wonders", desc: "Safe, shaded splash pads, boat races, sponge games, and sensory water density experiments.", icon: Waves, color: '#0ea5e9' },
  { title: "Little Chefs & Baking Fun", desc: "Healthy fruit skewer making, safe cookie decorating, dough kneading, and food group discovery.", icon: Utensils, color: '#d97706' },
  { title: "Safari & Animal Kingdom", desc: "Costume dress-up day, animal sound rhythms, puppet theater safari, and jungle obstacle courses.", icon: Sun, color: '#ca8a04' },
  { title: "Music, Rhythm & Dance", desc: "Percussion instrument band, action choreographies, cultural folk rhythms, and musical statues.", icon: Music, color: '#ec4899' }
];

export default function CampsPage({ onBookVisitClick }) {
  const [activeSeasonIdx, setActiveSeasonIdx] = useState(0);
  const curSeason = SEASONS[activeSeasonIdx];
  const SeasonIcon = curSeason.icon;

  return (
    <div>
      <PageHeader
        badge="Seasonal Holiday Camps"
        title="Unforgettable Adventures Start With Camp Days"
        subtitle="Unforgettable holiday adventures packed with creative arts, splash play, sensory science, and happy friendships in a safe, air-conditioned villa setting."
        onBookVisitClick={onBookVisitClick}
        image="/images/outdoor.jpg"
        imageAlt="Children enjoying outdoor shaded camp games, sports and activities at Just Like Home Nursery"
        primaryCtaText="Book a Camp Spot"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Summer Quest",
          subject: "Splash Day",
          status: "Fun Activated",
          percentage: 90
        }}
        cardGreatJob={{
          title: "Camp Stars 🏖️",
          subtitle: "Weekly Themed Joy"
        }}
        cardNextLesson={{
          label: "Next Adventure",
          subject: "Little Chefs",
          topic: "Fruit Pizza Making"
        }}
      />

      {/* SECTION 1: Interactive Seasonal Camp Navigator */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">HOLIDAY ADVENTURES</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Seasonal Camp Programs at Villa 47
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Select a camp season below to preview the exciting themes, outdoor water activities, and flexible enrollment options available.
              </p>
            </div>
          </RevealOnScroll>

          {/* Season Tabs */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {SEASONS.map((season, sIdx) => {
              const TabIcon = season.icon;
              const isActive = sIdx === activeSeasonIdx;
              return (
                <button
                  key={season.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveSeasonIdx(sIdx)}
                  style={isActive ? { background: season.theme, borderColor: season.theme } : {}}
                >
                  <TabIcon size={16} style={{ color: isActive ? '#ffffff' : season.theme }} />
                  <span>{season.name} ({season.dates})</span>
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
            <div key={`${curSeason.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curSeason.bg,
                color: curSeason.theme,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <SeasonIcon size={15} />
                <span>{curSeason.dates} &bull; Ages 1.5 to 6 Years</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curSeason.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curSeason.desc}
              </p>

              {/* Highlights Chips */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.75rem' }}>
                {curSeason.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: curSeason.theme, flexShrink: 0 }} />
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
                    background: curSeason.theme,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curSeason.theme}60`
                  }}
                >
                  <span>Reserve a Spot for {curSeason.name}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${curSeason.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curSeason.image}
                  alt={curSeason.name}
                  style={{ width: '100%', height: '410px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Badge */}
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
                {curSeason.badge}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 6 Camp Weekly Themes */}
      <section className="section-padding bg-cream" style={{ position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
              <span className="badge-maroon">EXCITING TOPICS</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#3d050f',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Weekly Camp Themes Packed with Fun
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Every week of camp explores a distinct imaginative world with specialized experiments, art projects, and outdoor games.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            {CAMP_THEMES.map((theme, idx) => {
              const ThemeIcon = theme.icon;
              return (
                <RevealOnScroll key={idx} animation="from-bottom" delay={idx * 60}>
                  <div style={{
                    background: '#ffffff',
                    borderRadius: '1.5rem',
                    padding: '1.75rem',
                    border: '1.5px solid rgba(123, 17, 39, 0.08)',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '12px',
                          background: `${theme.color}15`,
                          color: theme.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <ThemeIcon size={20} />
                        </div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>
                          {theme.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                        {theme.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* WhatsApp & Tour CTA */}
          <RevealOnScroll animation="zoom-in">
            <div className="clay-glass-banner-pastel" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <div className="clay-glow-orb clay-orb-1" />
              <div className="clay-glow-orb clay-orb-2" />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  border: '1.5px solid rgba(241, 90, 41, 0.3)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '999px',
                  color: '#ea580c',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  <Sparkles size={14} style={{ color: '#f59e0b' }} />
                  <span>Limited Spots Available</span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  color: '#1e293b',
                  lineHeight: '1.25'
                }}>
                  Book an Unforgettable Camp Experience for Your Child
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.55', marginTop: '0.5rem' }}>
                  Weekly registration, sibling discounts, and flexible half-day or full-day schedules available.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onBookVisitClick} className="btn-clay-gold">
                  <Calendar size={18} />
                  <span>Reserve Camp Spot</span>
                </button>
                <a
                  href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20inquire%20about%20your%20upcoming%20Holiday%20Camp%20dates%20and%20fees."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '9999px' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
