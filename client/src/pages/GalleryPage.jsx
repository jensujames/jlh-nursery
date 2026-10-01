import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Camera, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sun, 
  Clock, 
  MapPin
} from 'lucide-react';

export default function GalleryPage({ onBookVisitClick }) {
  // 1. Minimized Showcase Tab State
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);

  // 2. Photo Grid Category Filter & Lightbox State
  const [activePhotoCat, setActivePhotoCat] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  // Minimized, punchy campus showcase zones
  const showcaseZones = [
    {
      id: 'classrooms',
      badge: 'Sunlit Classrooms',
      title: 'Scandinavian Classrooms & Quiet Nooks',
      tagline: 'Warm natural timber, low bookshelves, and soft daylight.',
      description: 'Curated with Scandinavian beechwood, child-height shelves, and quiet reading teepees that foster calm, self-directed exploration.',
      benefits: [
        'Natural wood furniture with rounded edges',
        'Quiet teepees with multilingual storybooks',
        '24°C central AC with HEPA air purification'
      ],
      stats: [
        { label: 'Air Purity', value: 'HEPA Grade' },
        { label: 'Room Safety', value: '100% Padded' }
      ],
      image: '/images/classroom.jpg',
      imageAlt: 'Bright Scandinavian classroom with child-safe wooden furniture and reading teepee',
      floatingBadge1: { icon: '☀️', text: 'Natural Daylight' },
      floatingBadge2: { icon: '🛡️', text: 'CCTV Protected' },
      accentColor: '#0284c7',
      accentBg: '#e0f2fe'
    },
    {
      id: 'outdoor',
      badge: 'Outdoor Garden',
      title: 'UV-Protected Play Garden & Soft Turf',
      tagline: 'Cushioned lawn, water stations, and wooden climbing houses.',
      description: 'Full-coverage UV awnings and medical-grade soft turf allow safe running, balancing, and gross-motor play year-round in Ajman.',
      benefits: [
        'Full UV shade protection for safe play',
        'Shock-absorbing cushioned synthetic grass',
        'Sensory water tables and mini tricycle track'
      ],
      stats: [
        { label: 'UV Shield', value: '99% Sun Safe' },
        { label: 'Daily Outdoor', value: '60+ Mins' }
      ],
      image: '/images/outdoor.jpg',
      imageAlt: 'Lush shaded outdoor play garden with wooden playhouse and soft green turf in Ajman',
      floatingBadge1: { icon: '🌿', text: 'Soft Fall Turf' },
      floatingBadge2: { icon: '🏃', text: 'Active Play' },
      accentColor: '#16a34a',
      accentBg: '#dcfce7'
    },
    {
      id: 'creative',
      badge: 'Creative Studio',
      title: 'Messy Hands & Tactile Art Lab',
      tagline: 'Child-safe paints, organic clay, and sensory bins.',
      description: 'Children freely explore non-toxic finger paints, textured stampers, and scented sensory dough that build fine-motor coordination.',
      benefits: [
        '100% non-toxic washable gouache & clay',
        'Individual splash aprons & low washbasins',
        'Sensory bins with lentils, rice & botanicals'
      ],
      stats: [
        { label: 'Art Materials', value: 'Non-Toxic' },
        { label: 'Themes', value: 'Fresh Weekly' }
      ],
      image: '/images/activity-creative-play.jpg',
      imageAlt: 'Little hands joyfully painting with vibrant non-toxic watercolors at child-friendly easel',
      floatingBadge1: { icon: '🎨', text: 'Messy Play' },
      floatingBadge2: { icon: '✨', text: 'Sensory Art' },
      accentColor: '#f59e0b',
      accentBg: '#fef3c7'
    },
    {
      id: 'stem',
      badge: 'Mini STEM Lab',
      title: 'Wooden Gears & Discovery Ramps',
      tagline: 'Tactile problem-solving and foundational physics.',
      description: 'Hands-on exploration with wooden balance scales, magnetic tiles, and gear channels that awaken early scientific curiosity.',
      benefits: [
        'Wooden magnetic blocks & gear trains',
        'Child-safe magnifying stations & specimens',
        'Balance scales comparing weight & volume'
      ],
      stats: [
        { label: 'STEM Play', value: 'Daily Puzzles' },
        { label: 'Curriculum', value: 'EYFS Aligned' }
      ],
      image: '/images/activity-mini-stem.jpg',
      imageAlt: 'Young learners testing wooden gear arrangements and balance ramps with educator guidance',
      floatingBadge1: { icon: '🔬', text: 'Discovery Lab' },
      floatingBadge2: { icon: '💡', text: 'Young Thinkers' },
      accentColor: '#9333ea',
      accentBg: '#f3e8ff'
    }
  ];

  // Gallery Photos Grid
  const photos = [
    {
      id: 1,
      src: '/images/classroom.jpg',
      category: 'classrooms',
      title: 'Scandinavian Sunlit Classroom',
      location: 'Learning Wing, Villa 47',
      desc: 'Natural wood reading teepee, low bookshelves, and child-safe Montessori play stations.'
    },
    {
      id: 2,
      src: '/images/outdoor.jpg',
      category: 'outdoor',
      title: 'Shaded Villa Garden & Soft Turf',
      location: 'Private Villa Garden',
      desc: 'UV-safe fabric canopies, wooden playhouse, balance beams, and splash water stations.'
    },
    {
      id: 3,
      src: '/images/activity-creative-play.jpg',
      category: 'creative',
      title: 'Tactile Art & Finger Painting',
      location: 'Expressive Arts Studio',
      desc: 'Young artists experimenting with washable tempera and building hand-eye coordination.'
    },
    {
      id: 4,
      src: '/images/activity-mini-stem.jpg',
      category: 'stem',
      title: 'Early STEM Gears & Magnetism',
      location: 'Mini Discovery Lab',
      desc: 'Hands-on problem solving with wooden ramps, gear wheels, and tactile weight scales.'
    },
    {
      id: 5,
      src: '/images/hero.jpg',
      category: 'learning',
      title: 'Interactive Wooden Block Stacking',
      location: 'Toddler Activity Zone',
      desc: 'Fine-motor dexterity and cooperative social play facilitated by our caring educator.'
    },
    {
      id: 6,
      src: '/images/growing-minds-center.jpg',
      category: 'classrooms',
      title: 'Circle Time & Phonological Harmony',
      location: 'Early Literacy Hub',
      desc: 'Interactive morning greeting circle, rhythmic nursery rhymes, and bilingual storytelling.'
    },
    {
      id: 7,
      src: '/images/activity-little-artists.jpg',
      category: 'creative',
      title: 'Clay Sculpting & Fine Motor Craft',
      location: 'Artisans Table',
      desc: 'Developing delicate finger muscles and sensory relaxation through tactile organic clay.'
    },
    {
      id: 8,
      src: '/images/growing-minds-right.jpg',
      category: 'learning',
      title: 'Joyful Peer Collaboration',
      location: 'Montessori Activity Nook',
      desc: 'Fostering genuine empathy, sharing habits, and early conversational confidence.'
    },
    {
      id: 9,
      src: '/images/growing-minds-left.jpg',
      category: 'outdoor',
      title: 'Garden Fresh Air & Motor Play',
      location: 'Outdoor Balance Track',
      desc: 'Climbing, balancing, and gross-motor challenges in a fully childproofed garden enclosure.'
    }
  ];

  const photoCategories = [
    { id: 'all', label: 'All Photos', count: photos.length },
    { id: 'classrooms', label: 'Classrooms', count: photos.filter(p => p.category === 'classrooms').length },
    { id: 'outdoor', label: 'Outdoor Garden', count: photos.filter(p => p.category === 'outdoor').length },
    { id: 'creative', label: 'Creative & Art', count: photos.filter(p => p.category === 'creative').length },
    { id: 'stem', label: 'STEM & Logic', count: photos.filter(p => p.category === 'stem').length },
    { id: 'learning', label: 'Play & Learn', count: photos.filter(p => p.category === 'learning').length }
  ];

  const filteredPhotos = activePhotoCat === 'all'
    ? photos
    : photos.filter(p => p.category === activePhotoCat);

  // Daily Moments
  const dailyMoments = [
    {
      time: '08:00 AM',
      title: 'Morning Circle & Welcome',
      desc: 'Warm greetings, morning songs, and social connection.',
      icon: Sun,
      color: '#f59e0b'
    },
    {
      time: '09:30 AM',
      title: 'Sensory STEM Discovery',
      desc: 'Tactile blocks, gear wheels, and water play.',
      icon: Sparkles,
      color: '#0284c7'
    },
    {
      time: '11:00 AM',
      title: 'Shaded Garden Play',
      desc: 'Tricycle track and outdoor motor movement.',
      icon: Clock,
      color: '#16a34a'
    },
    {
      time: '01:30 PM',
      title: 'Story Nook & Quiet Rest',
      desc: 'Gentle bedtime stories and restful naptime.',
      icon: Clock,
      color: '#8b5cf6'
    }
  ];

  const currentZone = showcaseZones[activeZoneIndex];

  const handleNextPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div style={{ backgroundColor: '#fffcf8', minHeight: '100vh', overflow: 'hidden' }}>
      {/* 1. Page Header */}
      <PageHeader
        badge="Moments of Wonder & Joy"
        title="Golden Memories Start With Joyful Days"
        subtitle="Explore authentic photography of our classrooms, shaded play garden, creative arts studios, and daily milestones in Ajman."
        onBookVisitClick={onBookVisitClick}
        image="/images/growing-minds-left.jpg"
        imageAlt="Authentic moments of childhood learning, friendship and joy at Just Like Home Nursery"
        primaryCtaText="Explore Campus Gallery"
        secondaryCtaText="Book a Physical Tour"
        cardProgress={{
          label: "Campus Album",
          subject: "Villa 47 Life",
          status: "200+ Photos",
          percentage: 95
        }}
        cardGreatJob={{
          title: "Happy Smiles 📸",
          subtitle: "Villa 47 Moments"
        }}
        cardNextLesson={{
          label: "Interactive Tour",
          subject: "Classrooms & Garden",
          topic: "Sensory & Play Areas"
        }}
      />

      {/* 2. Streamlined Interactive Showcase (Minimized & Polished) */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #fffcf8 60%, #fbf5eb 100%)'
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <RevealOnScroll animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge-maroon" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                <Eye size={13} /> CAMPUS SPACES
              </span>
              <h2 className="section-title" style={{ marginTop: '0.4rem', marginBottom: '0.6rem', color: '#1e293b' }}>
                Tour Our Purpose-Built <span style={{ color: '#ea580c' }}>Learning Spaces</span>
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.96rem' }}>
                Select an environment below to see how each space nurtures safety, independence, and sensory play.
              </p>

              {/* High-Contrast Tab Selector Pills */}
              <div className="fac-tabs-bar" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                {showcaseZones.map((zone, idx) => {
                  const isActive = activeZoneIndex === idx;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZoneIndex(idx)}
                      className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                      style={{
                        padding: '0.55rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.86rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        border: isActive ? '1.5px solid transparent' : '1.5px solid #e2e8f0',
                        backgroundColor: isActive ? '#ea580c' : '#ffffff',
                        color: isActive ? '#ffffff' : '#475569',
                        boxShadow: isActive ? '0 6px 18px rgba(234, 88, 12, 0.3)' : '0 2px 6px rgba(0,0,0,0.02)'
                      }}
                      aria-label={`View ${zone.title}`}
                    >
                      <span>{zone.badge}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Compact Split Showcase Card */}
          <div 
            key={currentZone.id}
            className="fac-showcase-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '26px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 16px 36px rgba(234, 88, 12, 0.07), 0 2px 10px rgba(0,0,0,0.02)',
              border: '1.5px solid rgba(234, 88, 12, 0.12)',
              position: 'relative'
            }}
          >
            {/* Left Content Column */}
            <div style={{ animation: 'facContentSlide 0.4s ease-out forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: currentZone.accentBg,
                color: currentZone.accentColor,
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: '700',
                marginBottom: '0.75rem'
              }}>
                <Sparkles size={13} />
                <span>{currentZone.badge}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: '900',
                color: '#1e293b',
                lineHeight: 1.25,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em'
              }}>
                {currentZone.title}
              </h3>

              <p style={{
                fontSize: '0.94rem',
                color: '#ea580c',
                fontWeight: '600',
                marginBottom: '0.65rem'
              }}>
                {currentZone.tagline}
              </p>

              <p style={{
                fontSize: '0.92rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}>
                {currentZone.description}
              </p>

              {/* Compact Benefits List */}
              <div style={{ display: 'grid', gap: '0.55rem', marginBottom: '1.5rem' }}>
                {currentZone.benefits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      backgroundColor: currentZone.accentBg,
                      color: currentZone.accentColor,
                      padding: '0.2rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={15} />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: '#334155', fontWeight: '600' }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Compact Stats */}
              <div style={{
                display: 'inline-flex',
                gap: '1.5rem',
                padding: '0.85rem 1.25rem',
                backgroundColor: '#fffaf5',
                borderRadius: '16px',
                border: '1px solid rgba(234, 88, 12, 0.12)',
                marginBottom: '1.5rem'
              }}>
                {currentZone.stats.map((st, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ fontSize: '1rem', fontWeight: '900', color: currentZone.accentColor }}>
                      {st.value}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onBookVisitClick}
                  className="btn-clay-gold"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} />
                  <span>See This Space In Person</span>
                </button>
                <a
                  href={`https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20learn%20more%20about%20your%20${encodeURIComponent(currentZone.badge)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay-emerald"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div style={{ 
              position: 'relative', 
              animation: 'facImageSlide 0.45s ease-out forwards',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 16px 32px rgba(0,0,0,0.1), 0 0 0 8px rgba(255,255,255,0.9)',
                width: '100%',
                maxHeight: '380px',
                aspectRatio: '4/3'
              }}>
                <img
                  src={currentZone.image}
                  alt={currentZone.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating Top Badge */}
              <div 
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '999px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: '#1e293b'
                }}
              >
                <span>{currentZone.floatingBadge1.icon}</span>
                <span>{currentZone.floatingBadge1.text}</span>
              </div>

              {/* Floating Bottom Badge */}
              <div 
                className="animate-float-alt"
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '999px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: '#1e293b'
                }}
              >
                <span>{currentZone.floatingBadge2.icon}</span>
                <span>{currentZone.floatingBadge2.text}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Filterable Photo Gallery & Lightbox */}
      <section style={{
        position: 'relative',
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.4rem', display: 'inline-flex' }}>
              <Camera size={13} /> PHOTO ALBUM
            </span>
            <h2 className="section-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem', color: '#1e293b' }}>
              Authentic Moments & <span style={{ color: '#ea580c' }}>Daily Smiles</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.94rem' }}>
              Filter by category or click any photo to open the interactive fullscreen viewer.
            </p>

            {/* Filter Pills */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.55rem',
              marginTop: '1.5rem'
            }}>
              {photoCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActivePhotoCat(cat.id)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: activePhotoCat === cat.id ? '1.5px solid #ea580c' : '1px solid #e2e8f0',
                    backgroundColor: activePhotoCat === cat.id ? '#ea580c' : '#ffffff',
                    color: activePhotoCat === cat.id ? '#ffffff' : '#64748b',
                    boxShadow: activePhotoCat === cat.id ? '0 4px 14px rgba(234, 88, 12, 0.25)' : 'none'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    marginLeft: '0.35rem',
                    fontSize: '0.74rem',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '999px',
                    backgroundColor: activePhotoCat === cat.id ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                    color: activePhotoCat === cat.id ? '#ffffff' : '#94a3b8'
                  }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Photo Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(index)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Category Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    color: '#ea580c',
                    textTransform: 'uppercase'
                  }}>
                    {photo.category}
                  </div>
                </div>

                <div style={{ padding: '1.15rem 1.25rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.76rem',
                    color: '#94a3b8',
                    marginBottom: '0.3rem',
                    fontWeight: '600'
                  }}>
                    <MapPin size={12} style={{ color: '#ea580c' }} />
                    <span>{photo.location}</span>
                  </div>

                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '0.35rem'
                  }}>
                    {photo.title}
                  </h4>

                  <p style={{
                    fontSize: '0.86rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001
            }}
            aria-label="Close photo view"
          >
            <X size={22} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            style={{
              position: 'absolute',
              left: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            style={{
              position: 'absolute',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={26} />
          </button>

          {/* Modal Content Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <div style={{ maxHeight: '60vh', overflow: 'hidden', backgroundColor: '#0f172a' }}>
              <img
                src={filteredPhotos[activeLightboxIndex]?.src}
                alt={filteredPhotos[activeLightboxIndex]?.title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div style={{ padding: '1.25rem 1.75rem', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: '800',
                  color: '#ea580c',
                  backgroundColor: '#fff7ed',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  textTransform: 'uppercase'
                }}>
                  {filteredPhotos[activeLightboxIndex]?.category}
                </span>

                <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '700' }}>
                  Photo {activeLightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e293b', marginBottom: '0.35rem' }}>
                {filteredPhotos[activeLightboxIndex]?.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                {filteredPhotos[activeLightboxIndex]?.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Compact Daily Moments */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #fffcf8 100%)'
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.4rem', display: 'inline-flex' }}>
              <Clock size={13} /> DAILY RHYTHM
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '900', color: '#1e293b', margin: '0.2rem 0' }}>
              A Day in the Life at Just Like Home
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem'
          }}>
            {dailyMoments.map((moment, idx) => {
              const IconComp = moment.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    border: '1.5px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    backgroundColor: `${moment.color}15`,
                    color: moment.color,
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    marginBottom: '1rem'
                  }}>
                    <IconComp size={14} />
                    <span>{moment.time}</span>
                  </div>

                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '0.45rem'
                  }}>
                    {moment.title}
                  </h4>

                  <p style={{
                    fontSize: '0.86rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {moment.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section style={{
        position: 'relative',
        padding: '4rem 1.5rem',
        background: 'radial-gradient(ellipse at 50% 20%, #ffffff 0%, #fffcf8 60%, #fbf5eb 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <RevealOnScroll animation="zoom-in">
            <div className="clay-glass-banner-pastel" style={{ textAlign: 'center', padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <div className="clay-glow-orb clay-orb-1" />
              <div className="clay-glow-orb clay-orb-2" />
              <div className="clay-glow-orb clay-orb-3" />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
                  color: '#1e293b',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  lineHeight: '1.2',
                  marginBottom: '0.75rem'
                }}>
                  Pictures Capture Moments, A Visit Captures the Heart
                </h2>

                <p style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: '0 auto 1.75rem'
                }}>
                  Tour Villa 47 in Al Rashidiya 2, meet our caring educators, and feel the warmth in person.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={onBookVisitClick}
                    className="btn-clay-gold"
                    style={{ padding: '0.7rem 1.5rem' }}
                  >
                    <Calendar size={16} />
                    <span>Book Your Guided Campus Tour</span>
                  </button>
                  <a
                    href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20plan%20a%20guided%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-clay-emerald"
                    style={{ padding: '0.7rem 1.5rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Admissions</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
