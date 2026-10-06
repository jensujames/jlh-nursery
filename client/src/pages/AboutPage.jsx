import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Heart, Sparkles, ShieldCheck, Smile, Users, Compass, 
  ArrowRight, Phone, Calendar, CheckCircle2 
} from 'lucide-react';

const PROMISES = [
  'Providing a safe, clean, and welcoming environment.',
  'Treating every child with kindness, patience, respect, and understanding.',
  'Supporting each child\'s emotional, social, physical, communication, and intellectual development.',
  'Encouraging children to learn through play, creativity, exploration, and discovery.',
  'Building strong and respectful partnerships with parents and families.',
  'Recognising and celebrating every child\'s unique abilities, interests, and achievements.',
  'Helping children develop independence, confidence, good manners, and essential life skills.',
  'Creating a nurturing atmosphere that truly feels “Just Like Home.”'
];

const SERVICES_LIST = [
  'Early Years Education following the EYFS approach',
  'Full-Day & Half-Day Care Options',
  'Nursery & Preschool Programs',
  'School Readiness Program',
  'Age-appropriate learning activities',
  'Phonics, Literacy & Numeracy',
  'Arabic Language Learning',
  'Physical Development & Outdoor Play',
  'Creative Arts & Craft Activities',
  'Sensory & Exploration Activities',
  'Storytelling, Rhymes & Music',
  'Life Skills & Independence Activities',
  'Special Events, Theme Days & Celebrations',
  'Holiday & Summer Camp Programs',
  'Educational Trips & Outings',
  'Regular Parent Communication'
];

const FACILITIES_LIST = [
  'Safe and welcoming classrooms',
  'Indoor play area',
  'Outdoor play area',
  'Baby care/quiet room',
  'Sensory and exploration spaces',
  'Reading & story corner',
  'Life skills activity areas',
  'Child-friendly washrooms',
  'Kitchen & meal preparation area',
  'First-aid/clinic facility',
  'Doctor visits',
  'Secure reception area',
  'Safe and child-friendly environment',
  'CCTV monitoring for enhanced safety'
];

const VISION_MISSION_DATA = {
  vision: {
    id: 'vision',
    tabLabel: 'Our Vision',
    badge: 'OUR VISION',
    title: 'Our Vision',
    icon: Compass,
    accentColor: '#721024',
    badgeBg: '#FFF1F2',
    image: '/images/hero-about.jpg',
    imageAlt: 'Educators and children exploring together at Just Like Home Nursery',
    imageBadge: 'Villa No. 47, Al Rashidiya 2, Ajman',
    imageTag: 'Preparing Children For Life',
    statement: 'Preparing children for life with motherly care and attention.',
    footerTag: 'Motherly Care & Attention',
    footerIcon: Heart,
    points: [
      {
        title: 'Motherly Care & Warmth',
        desc: 'Every child receives tender, compassionate attention, ensuring they feel loved, secure and confident from day one.'
      },
      {
        title: 'Holistic Life Preparation',
        desc: 'Developing social skills, emotional independence, manners and communication skills that lay the foundation for lifelong success.'
      },
      {
        title: 'Safe & Stimulating Environment',
        desc: 'Purpose-built spaces and welcoming classrooms designed to let little hearts flourish at their own natural pace.'
      }
    ]
  },
  mission: {
    id: 'mission',
    tabLabel: 'Our Mission',
    badge: 'OUR MISSION',
    title: 'Our Mission',
    icon: Heart,
    accentColor: '#c9a84c',
    badgeBg: '#fef9e7',
    image: '/images/activity-creative-play.jpg',
    imageAlt: 'Happy children playing and building together at Just Like Home Nursery',
    imageBadge: 'Creativity, Play & Friendships',
    imageTag: 'Nurturing Little Hearts Daily',
    statement: "We don't just educate children we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime.",
    footerTag: 'Curiosity, Confidence & Happy Memories',
    footerIcon: Sparkles,
    points: [
      {
        title: 'Nurturing Little Hearts',
        desc: 'We prioritize happiness and emotional wellbeing, creating an encouraging haven where children love to learn and explore.'
      },
      {
        title: 'Inspiring Natural Curiosity',
        desc: 'Through hands-on sensory exploration, storytelling, and creative play, we ignite children’s innate desire to discover the world.'
      },
      {
        title: 'Cherished Childhood Memories',
        desc: 'Every day is filled with laughter, songs, friendships, and celebrations that create joyful memories to treasure forever.'
      }
    ]
  }
};

export default function AboutPage({ onBookVisitClick }) {
  const [activeVmTab, setActiveVmTab] = useState('vision');

  useEffect(() => {
    document.title = "About Just Like Home Nursery | Early Years Nursery Ajman";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet Just Like Home Nursery in Ajman and discover our nurturing philosophy, motherly care, play-based approach and commitment to every child's development.");
    }
  }, []);

  return (
    <div className="about-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="About Us · Early Years Nursery in Ajman"
        badgeIcon={Heart}
        title="A Nursery Created Around the Way Children Feel, Learn and Grow"
        description={[
          "Just Like Home Nursery was created with a simple belief: children flourish when they feel safe, loved, respected and understood.",
          "Our name reflects the experience we want every child to have — the reassurance of a familiar, caring environment combined with thoughtful early-years learning that encourages curiosity, confidence and independence."
        ]}
        image="/images/hero-about.jpg"
        imageAlt="About Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Meet Us - Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Explore Our Programs"
        secondaryLink="/programs"
        whatsappText="Hello Just Like Home Nursery, I would like to learn more about your early-years nursery in Ajman."
      />

      {/* 2. OUR STORY - ARCHITECTURAL 3-COLUMN EDITORIAL DESIGN (Matching Reference) */}
      <section className="about-editorial-section">
        <div className="about-editorial-container">
          <div className="about-editorial-grid">
            
            {/* Column 1: Left Editorial Text & Link */}
            <div className="about-editorial-col-text">
              <RevealOnScroll animation="from-left">
                <div className="about-editorial-eyebrow-row">
                  <span className="about-editorial-eyebrow">ABOUT US</span>
                  <span className="about-editorial-dash" />
                </div>

                <h2 className="about-editorial-heading">
                  Our Story
                </h2>

                <p className="about-editorial-p">
                  The early years shape how children see themselves and the world around them. These years deserve more than supervision and lessons; they deserve patience, meaningful relationships and joyful opportunities to discover.
                </p>

                <p className="about-editorial-p">
                  At Just Like Home Nursery in Ajman, we bring care and learning together. Every part of the child's day — from play and conversation to meals, movement, stories and friendships — can become an opportunity to grow.
                </p>

                <div className="about-editorial-cta-wrap">
                  <Link 
                    to="/programs" 
                    className="about-editorial-cta-link"
                  >
                    <span>Our Story</span>
                    <ArrowRight size={16} className="about-editorial-arrow-icon" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Column 2: Architectural Portrait Nursery Photo */}
            <div className="about-editorial-col-image">
              <RevealOnScroll delay={100}>
                <div className="about-editorial-image-frame">
                  <img 
                    src="/images/nurturing-hero.jpg" 
                    alt="Caring educators and children at Just Like Home Nursery" 
                    className="about-editorial-img"
                  />
                  <div className="about-editorial-img-badge">
                    <span className="about-editorial-img-pin">Villa No. 47, Al Rashidiya 2, Ajman</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Column 3: Faint Numeral Watermark, Vertical Divider Track & Key Stats */}
            <div className="about-editorial-col-stats">
              <RevealOnScroll delay={180} animation="from-right">
                {/* Large Subtle Watermark Numeral */}
                <div className="about-editorial-watermark-num">
                  01
                </div>

                {/* Vertical Divider Track with Accent Dot */}
                <div className="about-editorial-stats-track">
                  <div className="about-editorial-track-dot" />

                  {/* Stat 1 */}
                  <div className="about-editorial-stat-item">
                    <div className="about-editorial-stat-value">10+</div>
                    <div className="about-editorial-stat-title">Years of Experience</div>
                  </div>

                  {/* Stat 2 */}
                  <div className="about-editorial-stat-item">
                    <div className="about-editorial-stat-value">500+</div>
                    <div className="about-editorial-stat-title">Happy Little Graduates</div>
                  </div>

                  {/* Stat 3 */}
                  <div className="about-editorial-stat-item">
                    <div className="about-editorial-stat-value">98%</div>
                    <div className="about-editorial-stat-title">Satisfaction Rate</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VISION & OUR MISSION - INTERACTIVE IMAGE LEFT & TABS RIGHT */}
      <section className="about-vm-section" id="vision-mission-section">
        <div className="about-vm-container">
          <RevealOnScroll>
            <div className="about-vm-header">
              <span className="about-vm-eyebrow-pill">
                <Sparkles size={14} /> PURPOSE &amp; VALUES
              </span>
              <h2 className="about-vm-heading">
                Our Vision &amp; Mission
              </h2>
              <p className="about-vm-subheading">
                Guiding every moment of care, learning and development at Just Like Home Nursery.
              </p>
            </div>
          </RevealOnScroll>

          {(() => {
            const currentData = VISION_MISSION_DATA[activeVmTab];
            const ActiveIcon = currentData.icon;
            const FooterIcon = currentData.footerIcon;

            return (
              <div className="about-vm-split-grid">
                
                {/* Left Side: Interactive Dynamic Image Showcase */}
                <div className="about-vm-image-col">
                  <RevealOnScroll animation="from-left">
                    <div className="about-vm-image-frame">
                      <img 
                        key={currentData.id}
                        src={currentData.image} 
                        alt={currentData.imageAlt} 
                        className="about-vm-img"
                      />
                      <div className="about-vm-image-overlay" />
                      
                      {/* Top Floating Badge */}
                      <div className="about-vm-image-top-badge">
                        <span className="about-vm-pulse-dot" />
                        <span>{currentData.imageTag}</span>
                      </div>

                      {/* Bottom Caption Card */}
                      <div className="about-vm-image-bottom-caption">
                        <div className="about-vm-caption-tag">
                          {currentData.imageBadge}
                        </div>
                        <p className="about-vm-caption-text">
                          {currentData.statement}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Right Side: Interactive Vision & Mission Tabs */}
                <div className="about-vm-tabs-col">
                  <RevealOnScroll delay={120} animation="from-right">
                    {/* Tab Switcher Control */}
                    <div className="about-vm-tab-switcher-wrap" role="tablist" aria-label="Vision and Mission tabs">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeVmTab === 'vision'}
                        className={`about-vm-tab-btn ${activeVmTab === 'vision' ? 'is-active' : ''}`}
                        onClick={() => setActiveVmTab('vision')}
                      >
                        <Compass size={17} />
                        <span>Our Vision</span>
                      </button>

                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeVmTab === 'mission'}
                        className={`about-vm-tab-btn ${activeVmTab === 'mission' ? 'is-active is-mission' : ''}`}
                        onClick={() => setActiveVmTab('mission')}
                      >
                        <Heart size={17} />
                        <span>Our Mission</span>
                      </button>
                    </div>

                    {/* Active Tab Content Card */}
                    <div className="about-vm-content-card" key={currentData.id}>
                      <div>
                        {/* Header Row: Icon + Badge */}
                        <div className="about-vm-card-header">
                          <div 
                            className="about-vm-icon-box"
                            style={{ 
                              color: currentData.accentColor,
                              border: `2px solid ${currentData.accentColor}33`
                            }}
                          >
                            <ActiveIcon size={26} />
                          </div>

                          <span 
                            className="about-vm-tag-pill"
                            style={{
                              backgroundColor: currentData.badgeBg,
                              color: currentData.accentColor
                            }}
                          >
                            {currentData.badge}
                          </span>
                        </div>

                        {/* Statement Box */}
                        <div 
                          className="about-vm-statement-box"
                          style={{ borderLeftColor: currentData.accentColor }}
                        >
                          <h3 
                            className="about-vm-statement-title"
                            style={{ color: currentData.accentColor }}
                          >
                            {currentData.title}
                          </h3>
                          <p className="about-vm-statement-desc">
                            {currentData.statement}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Tag */}
                      <div className="about-vm-footer-bar">
                        <div 
                          className="about-vm-footer-tag"
                          style={{ color: currentData.accentColor }}
                        >
                          <FooterIcon size={16} />
                          <span>{currentData.footerTag}</span>
                        </div>

                        <span style={{ fontSize: '12px', fontWeight: '750', color: '#94a3b8' }}>
                          Just Like Home Nursery
                        </span>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>

              </div>
            );
          })()}
        </div>
      </section>

      {/* 4. WHAT WE PROMISE FAMILIES */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9' 
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1.5px solid rgba(114, 16, 36, 0.16)',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(114, 16, 36, 0.06)'
                }}
              >
                COMMITMENT TO FAMILIES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0'
                }}
              >
                What We Promise Families
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                Our commitments guide how we structure each day, care for children and partner with parents.
              </p>
            </div>
          </RevealOnScroll>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '20px' 
            }}
          >
            {PROMISES.map((promise, index) => {
              const counter = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 40}>
                  <div
                    className="luxury-creative-card"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '24px 22px',
                      borderRadius: '1.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 8px 24px rgba(74, 14, 26, 0.04), 0 1px 4px rgba(0,0,0,0.02)',
                      height: '100%',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div
                      className="luxury-icon-box luxury-icon-burgundy"
                      style={{
                        width: '42px',
                        height: '42px',
                        flexShrink: 0,
                        fontSize: '13px',
                        fontWeight: '900',
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)'
                      }}
                    >
                      {counter}
                    </div>
                    <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.65, color: '#1e293b', fontWeight: '600' }}>
                      {promise}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EVERY CHILD IS UNIQUE & A PARTNERSHIP WITH PARENTS */}
      <section className="about-centerchild-section">
        <div className="about-centerchild-container">
          <div className="about-centerchild-layout">
            {/* Left Card: Every Child Is Unique */}
            <div className="about-centerchild-side about-centerchild-side--left">
              <RevealOnScroll animation="from-left">
                <div className="about-centerchild-card about-centerchild-card--unique">
                  <div className="about-centerchild-icon-box about-centerchild-icon-box--unique">
                    <Smile size={28} />
                  </div>
                  <h3 className="about-centerchild-title about-centerchild-title--unique">
                    Every Child Is Unique
                  </h3>
                  <p className="about-centerchild-text">
                    Children do not all learn, communicate or gain confidence in the same way. Our role is to observe, listen and create the right opportunities for each child to participate and progress. We celebrate small steps because those small steps often become the foundations of lifelong confidence.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Middle Aperture: Highlights the happily playing child in the background */}
            <div className="about-centerchild-aperture" aria-hidden="true">
              <span className="about-centerchild-badge">
                <Sparkles size={15} /> Joyful Early Learning
              </span>
            </div>

            {/* Right Card: A Partnership With Parents */}
            <div className="about-centerchild-side about-centerchild-side--right">
              <RevealOnScroll delay={120} animation="from-right">
                <div className="about-centerchild-card about-centerchild-card--parents">
                  <div className="about-centerchild-icon-box about-centerchild-icon-box--parents">
                    <Users size={28} />
                  </div>
                  <h3 className="about-centerchild-title about-centerchild-title--parents">
                    A Partnership With Parents
                  </h3>
                  <p className="about-centerchild-text">
                    Trust grows through communication. We value parents' knowledge of their children and aim to build a respectful partnership from the first enquiry onwards. Regular communication helps nursery and home work together around each child's routines, interests, development and wellbeing.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES & FACILITIES */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9' 
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1.5px solid rgba(114, 16, 36, 0.16)',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(114, 16, 36, 0.06)'
                }}
              >
                SERVICES &amp; FACILITIES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0'
                }}
              >
                Everything Your Child Needs to Flourish
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Thoughtfully equipped spaces and comprehensive care options created for happiness and peace of mind.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}
          >
            {/* Services Card */}
            <RevealOnScroll animation="from-left">
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div
                    className="luxury-icon-box luxury-icon-burgundy"
                    style={{
                      width: '54px',
                      height: '54px',
                      fontSize: '22px'
                    }}
                  >
                    🌟
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#721024',
                      margin: 0
                    }}
                  >
                    Our Services
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SERVICES_LIST.map((srv, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFDF9',
                        border: '1px solid #ffede4'
                      }}
                    >
                      <CheckCircle2 size={17} color="#721024" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', fontWeight: '650', color: '#334155', lineHeight: 1.5 }}>
                        {srv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Facilities Card */}
            <RevealOnScroll delay={100} animation="from-right">
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div
                    className="luxury-icon-box luxury-icon-emerald"
                    style={{
                      width: '54px',
                      height: '54px',
                      fontSize: '22px'
                    }}
                  >
                    🏠
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#059669',
                      margin: 0
                    }}
                  >
                    Our Facilities
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {FACILITIES_LIST.map((fac, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        backgroundColor: '#F0FDF4',
                        border: '1px solid #bbf7d0'
                      }}
                    >
                      <CheckCircle2 size={17} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', fontWeight: '650', color: '#334155', lineHeight: 1.5 }}>
                        {fac}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <LuxuryClosingCta
        badge="BOOK A VISIT"
        title="Meet Us & Experience Just Like Home"
        subtitle="We welcome families to tour our spaces, meet our educators and experience our warm, home-like environment in Al Rashidiya 2, Ajman."
        primaryText="Meet Us - Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="Explore Our Programs"
        secondaryLink="/programs"
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
