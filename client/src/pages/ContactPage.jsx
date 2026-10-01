import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import confetti from 'canvas-confetti';
import { getApiUrl } from '../config/api';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Navigation,
  Car,
  ChevronDown,
  Info
} from 'lucide-react';

export default function ContactPage({ onBookVisitClick }) {
  // 1. Minimized Visit Modes Showcase
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  // 2. Interactive Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Schedule a Tour',
    childAge: 'Toddler (1 - 2 Years)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 3. Pre-Visit FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Streamlined, punchy visit modes (Minimized for clean UX)
  const visitModes = [
    {
      id: 'tour',
      badge: 'In-Person Campus Tour',
      title: 'Tour Villa 47 In Person',
      tagline: 'See our sunlit classrooms, meet caring educators, and let your child explore.',
      description: 'Join a private 25-minute walkthrough of our learning zones, shaded garden, and medical clinic with our Nursery Director.',
      highlights: [
        'Private 1-on-1 walkthrough with leadership',
        'Observe active EYFS play & shaded garden',
        'Children are warmly invited to join & play'
      ],
      stats: [
        { label: 'Tour Time', value: '25 Mins' },
        { label: 'Booking', value: '100% Free' }
      ],
      image: '/images/hero.jpg',
      imageAlt: 'Educator welcoming mother and child at Just Like Home Nursery Villa 47 Ajman',
      floatingBadge1: { icon: '📍', text: 'Villa 47, Al Rashidiya 2' },
      floatingBadge2: { icon: '✨', text: 'Guided Walkthrough' },
      accentColor: '#ea580c',
      accentBg: '#fff7ed'
    },
    {
      id: 'whatsapp',
      badge: 'WhatsApp Admissions',
      title: 'Instant WhatsApp Desk',
      tagline: 'Get term fees, registration forms, and quick answers in minutes.',
      description: 'Message our admissions coordinator directly to receive fee schedules, class availability, and instant answers on WhatsApp.',
      highlights: [
        'Quick replies under 5 minutes on weekdays',
        'Receive PDF fee guides & daily schedules',
        'Fast questions about meals & potty training'
      ],
      stats: [
        { label: 'Avg Reply', value: '< 5 Mins' },
        { label: 'Hotline', value: '050 200 5346' }
      ],
      image: '/images/growing-minds-center.jpg',
      imageAlt: 'Nursery admissions desk coordinator responding to parent inquiries in Ajman',
      floatingBadge1: { icon: '💬', text: 'Fast WhatsApp Help' },
      floatingBadge2: { icon: '⚡', text: 'Brochure on Demand' },
      accentColor: '#16a34a',
      accentBg: '#dcfce7'
    },
    {
      id: 'location',
      badge: 'Prime Villa Location',
      title: 'Easy Access & Shaded Parking',
      tagline: 'Quiet residential setting in Al Rashidiya 2 with dedicated parent parking.',
      description: 'Conveniently located off Sheikh Rashid Bin Humaid Street, minutes from Safeer Mall with private shaded parking for hassle-free drop-offs.',
      highlights: [
        'Dedicated shaded parking right outside gate',
        'Smooth circular drop-off for safe arrival',
        'Close to Safeer Mall & Rashidiya Ladies Park'
      ],
      stats: [
        { label: 'From Safeer Mall', value: '4 Mins' },
        { label: 'Drop-off', value: 'Shaded Bays' }
      ],
      image: '/images/outdoor.jpg',
      imageAlt: 'Exterior and private shaded outdoor grounds of Villa 47 in Al Rashidiya 2 Ajman',
      floatingBadge1: { icon: '🚗', text: 'Free Parking' },
      floatingBadge2: { icon: '🛡️', text: 'Guarded Gate' },
      accentColor: '#0284c7',
      accentBg: '#e0f2fe'
    }
  ];

  const currentMode = visitModes[activeTabIdx];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(getApiUrl('/api/enquiries'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Schedule a Tour',
          childAge: 'Toddler (1 - 2 Years)',
          message: ''
        });
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setErrorMessage('Could not connect to server. Please call or WhatsApp us directly at 050 200 5346.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const landmarks = [
    { name: 'Safeer Mall Ajman', dist: '4 mins drive', note: 'Via Sheikh Rashid Bin Humaid St' },
    { name: 'Rashidiya Ladies Park', dist: '3 mins drive', note: 'Direct neighborhood route' },
    { name: 'Ajman Corniche', dist: '8 mins drive', note: 'Via Corniche Road' },
    { name: 'Al Nuaimiya 1 & 2', dist: '6 mins drive', note: 'Via Sheikh Khalifa Highway' }
  ];

  const faqs = [
    {
      q: 'Do I need to schedule my visit in advance or can I walk in?',
      a: 'While walk-in parents are always welcomed, booking a slot ensures our Nursery Director can dedicate full, uninterrupted time to answer your family’s questions.'
    },
    {
      q: 'Can I bring my child along for the campus tour?',
      a: 'Yes, definitely! Seeing your child naturally explore the toys, reading teepees, and garden turf is the best way to determine their comfort.'
    },
    {
      q: 'What are your daily nursery operating hours?',
      a: 'Our core morning learning program runs 7:30 AM to 2:00 PM (Mon–Fri). Extended full-day care is available until 5:30 PM with wholesome snacks and naptime.'
    },
    {
      q: 'Are campus visits or registration consultations free?',
      a: 'Campus visits, educator meet-and-greets, and developmental advice are 100% complimentary with zero pressure or obligation.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#fffcf8', minHeight: '100vh', overflow: 'hidden' }}>
      {/* 1. Page Header */}
      <PageHeader
        badge="Villa 47, Al Rashidiya 2, Ajman"
        title="Warm Connections Start With Hello"
        subtitle="Visit our nursery, meet our educators, and explore our learning environments in Al Rashidiya 2, Ajman."
        onBookVisitClick={onBookVisitClick}
        image="/images/hero.jpg"
        imageAlt="Villa 47 Al Rashidiya 2 Just Like Home Nursery welcoming reception and campus in Ajman"
        primaryCtaText="Book Guided Tour"
        secondaryCtaText="WhatsApp Us Direct"
        cardProgress={{
          label: "Visit Hours",
          subject: "Mon – Fri",
          status: "7:30 AM – 5:30 PM",
          percentage: 100
        }}
        cardGreatJob={{
          title: "Welcome! 📍",
          subtitle: "Villa 47, Ajman"
        }}
        cardNextLesson={{
          label: "Direct Line",
          subject: "WhatsApp",
          topic: "050 200 5346"
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
                <MapPin size={13} /> CONNECT & EXPLORE
              </span>
              <h2 className="section-title" style={{ marginTop: '0.4rem', marginBottom: '0.6rem', color: '#1e293b' }}>
                How Would You Like to <span style={{ color: '#ea580c' }}>Connect?</span>
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.96rem' }}>
                Choose a visit option below to explore our nursery in person or reach our admissions team instantly.
              </p>

              {/* Tab Selector Pills with High-Contrast Active State */}
              <div className="fac-tabs-bar" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                {visitModes.map((mode, idx) => {
                  const isActive = activeTabIdx === idx;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveTabIdx(idx)}
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
                      aria-label={`View ${mode.title}`}
                    >
                      <span>{mode.badge}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Compact Split Showcase Card */}
          <div 
            key={currentMode.id}
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
                backgroundColor: currentMode.accentBg,
                color: currentMode.accentColor,
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: '700',
                marginBottom: '0.75rem'
              }}>
                <Sparkles size={13} />
                <span>{currentMode.badge}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: '900',
                color: '#1e293b',
                lineHeight: 1.25,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em'
              }}>
                {currentMode.title}
              </h3>

              <p style={{
                fontSize: '0.94rem',
                color: '#ea580c',
                fontWeight: '600',
                marginBottom: '0.65rem'
              }}>
                {currentMode.tagline}
              </p>

              <p style={{
                fontSize: '0.92rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}>
                {currentMode.description}
              </p>

              {/* Highlights List */}
              <div style={{ display: 'grid', gap: '0.55rem', marginBottom: '1.5rem' }}>
                {currentMode.highlights.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      backgroundColor: currentMode.accentBg,
                      color: currentMode.accentColor,
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
                      {item}
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
                {currentMode.stats.map((st, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ fontSize: '1rem', fontWeight: '900', color: currentMode.accentColor }}>
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
                  <span>Book Guided Visit</span>
                </button>
                <a
                  href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay-emerald"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
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
                  src={currentMode.image}
                  alt={currentMode.imageAlt}
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
                <span>{currentMode.floatingBadge1.icon}</span>
                <span>{currentMode.floatingBadge1.text}</span>
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
                <span>{currentMode.floatingBadge2.icon}</span>
                <span>{currentMode.floatingBadge2.text}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Integrated Form & Interactive Google Map Hub */}
      <section style={{
        position: 'relative',
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
              <Mail size={13} /> ENQUIRY & LOCATION
            </span>
            <h2 className="section-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem', color: '#1e293b' }}>
              Send an Enquiry or <span style={{ color: '#ea580c' }}>Find Us on Map</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '620px', margin: '0 auto', fontSize: '0.94rem' }}>
              We typically reply within 2 hours during nursery hours. Use the map for real-time navigation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            {/* Left: Streamlined Enquiry Form */}
            <RevealOnScroll animation="fade-left">
              <div style={{
                backgroundColor: '#fffdfb',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                borderRadius: '24px',
                border: '1.5px solid rgba(234, 88, 12, 0.15)',
                boxShadow: '0 12px 32px rgba(0,0,0,0.03)'
              }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: '#ea580c',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    Direct Admissions Form
                  </span>
                  <h3 style={{
                    fontSize: '1.45rem',
                    color: '#1e293b',
                    fontWeight: '900',
                    marginTop: '0.2rem',
                    marginBottom: '0.3rem'
                  }}>
                    How Can We Help Your Family?
                  </h3>
                </div>

                {submitted ? (
                  <div style={{
                    backgroundColor: '#f0fdf4',
                    border: '1.5px solid #86efac',
                    borderRadius: '18px',
                    padding: '1.75rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.75rem'
                    }}>
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', color: '#15803d', fontWeight: '800', marginBottom: '0.35rem' }}>
                      Enquiry Received With Joy!
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#166534', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      Thank you! Our admissions coordinator will contact you promptly via phone or WhatsApp.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-clay-gold"
                      style={{ padding: '0.55rem 1.25rem', fontSize: '0.84rem' }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                    {errorMessage && (
                      <div style={{
                        backgroundColor: '#fef2f2',
                        border: '1px solid #fecaca',
                        color: '#b91c1c',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        fontSize: '0.84rem'
                      }}>
                        {errorMessage}
                      </div>
                    )}

                    {/* Inquiry Reason Pills */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.35rem' }}>
                        Inquiry Topic
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {['Schedule a Tour', 'Admissions 2026/27', 'Daycare', 'Holiday Camp'].map((sub) => (
                          <button
                            type="button"
                            key={sub}
                            onClick={() => setFormData({ ...formData, subject: sub })}
                            style={{
                              padding: '0.3rem 0.75rem',
                              borderRadius: '999px',
                              fontSize: '0.78rem',
                              fontWeight: '700',
                              border: formData.subject === sub ? '1.5px solid #ea580c' : '1px solid #cbd5e1',
                              backgroundColor: formData.subject === sub ? '#ea580c' : '#ffffff',
                              color: formData.subject === sub ? '#ffffff' : '#64748b',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>
                        Parent's Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Fatima Al-Zahra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '12px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.9rem',
                          backgroundColor: '#ffffff',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Phone & Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 050 200 5346"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '12px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            backgroundColor: '#ffffff',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '12px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            backgroundColor: '#ffffff',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Child Age */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>
                        Child's Age Group
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '12px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.9rem',
                          backgroundColor: '#ffffff',
                          outline: 'none'
                        }}
                      >
                        <option value="Infant (45 Days - 1 Year)">Infant Care (45 Days - 1 Year)</option>
                        <option value="Toddler (1 - 2 Years)">Toddler Discovery (1 - 2 Years)</option>
                        <option value="Early Learner (2 - 3 Years)">Early Learners (2 - 3 Years)</option>
                        <option value="Preschooler (3 - 4+ Years)">Preschool & School Prep (3 - 4+ Years)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>
                        Message or Preferred Visit Date
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us what matters most for your child..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '12px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.9rem',
                          backgroundColor: '#ffffff',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-clay-gold"
                      style={{
                        padding: '0.75rem',
                        fontSize: '0.92rem',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '0.25rem'
                      }}
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry & Book Tour'}</span>
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>

            {/* Right: Interactive Google Map + Fast Channel Badges */}
            <RevealOnScroll animation="fade-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Embedded Google Map */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.04)',
                  position: 'relative'
                }}>
                  <div style={{
                    padding: '0.9rem 1.25rem',
                    backgroundColor: '#fffdfb',
                    borderBottom: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: '#ea580c' }} />
                      <strong style={{ fontSize: '0.88rem', color: '#1e293b' }}>
                        Villa 47, Al Rashidiya 2, Ajman
                      </strong>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        color: '#ea580c',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Open in Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  <iframe
                    title="Just Like Home Nursery Location Map"
                    src="https://maps.google.com/maps?q=Villa%2047,%20Al%20Rashidiya%202,%20Ajman&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Direct Contact Cards Stack (One by One) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                  
                  {/* Card 1: DIRECT LINE */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '1.4rem 1.6rem',
                    borderRadius: '22px',
                    border: '1.5px solid #eef2f6',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'all 0.25s ease'
                  }}>
                    {/* Top: Icon + DIRECT LINE + Phone Number */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        backgroundColor: '#ecfdf5',
                        color: '#059669',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Phone size={22} strokeWidth={2.2} />
                      </div>
                      <div>
                        <div style={{ 
                          fontSize: '0.76rem', 
                          fontWeight: '800', 
                          color: '#059669', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.04em' 
                        }}>
                          DIRECT LINE
                        </div>
                        <div style={{ 
                          fontSize: '1.35rem', 
                          fontWeight: '900', 
                          color: '#0f172a', 
                          lineHeight: 1.2,
                          marginTop: '2px' 
                        }}>
                          050 200 5346
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Call & WhatsApp Buttons with Rich Glowing Shadows */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <a
                        href="tel:0502005346"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                          color: '#ffffff',
                          padding: '0.62rem 1.55rem',
                          borderRadius: '999px',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          textDecoration: 'none',
                          boxShadow: '0 8px 20px rgba(234, 88, 12, 0.42)',
                          transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.52)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(234, 88, 12, 0.42)';
                        }}
                      >
                        <Phone size={15} />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20have%20an%20admissions%20question."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: '#ffffff',
                          padding: '0.62rem 1.55rem',
                          borderRadius: '999px',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          textDecoration: 'none',
                          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.42)',
                          transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 24px rgba(16, 185, 129, 0.52)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.42)';
                        }}
                      >
                        <MessageCircle size={15} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Card 2: TIMINGS */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '1.4rem 1.6rem',
                    borderRadius: '22px',
                    border: '1.5px solid #eef2f6',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    transition: 'all 0.25s ease'
                  }}>
                    {/* Top: Icon + TIMINGS + Schedule */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        backgroundColor: '#e0f2fe',
                        color: '#0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Clock size={22} strokeWidth={2.2} />
                      </div>
                      <div>
                        <div style={{ 
                          fontSize: '0.76rem', 
                          fontWeight: '800', 
                          color: '#0284c7', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.04em' 
                        }}>
                          TIMINGS
                        </div>
                        <div style={{ 
                          fontSize: '1.35rem', 
                          fontWeight: '900', 
                          color: '#0f172a', 
                          lineHeight: 1.2,
                          marginTop: '2px' 
                        }}>
                          Mon – Fri: 7:30 – 17:30
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Details breakdown */}
                    <div style={{ 
                      fontSize: '0.92rem', 
                      color: '#64748b', 
                      lineHeight: 1.65,
                      fontWeight: '500'
                    }}>
                      <div>Morning core: 7:30 AM – 2:00 PM</div>
                      <div>Extended care: 2:00 PM – 5:30 PM</div>
                    </div>
                  </div>

                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 4. Streamlined Nearby Landmarks */}
      <section style={{
        position: 'relative',
        padding: '3rem 1.5rem',
        backgroundColor: '#fffaf5',
        borderTop: '1px solid rgba(234, 88, 12, 0.1)',
        borderBottom: '1px solid rgba(234, 88, 12, 0.1)'
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.35rem', display: 'inline-flex' }}>
              <Navigation size={13} /> NEARBY
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#1e293b', margin: '0.2rem 0' }}>
              Minutes Away in <span style={{ color: '#ea580c' }}>Ajman</span>
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>
            {landmarks.map((landmark, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1rem 1.25rem',
                  borderRadius: '16px',
                  border: '1.5px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#fff7ed',
                  color: '#ea580c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Car size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#1e293b', margin: 0 }}>
                    {landmark.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ea580c' }}>
                    {landmark.dist}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Pre-Visit FAQ Accordion (Clean & Compact) */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.4rem', display: 'inline-flex' }}>
              <Info size={13} /> GUIDELINES
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '900', color: '#1e293b', margin: '0.2rem 0' }}>
              Frequently Asked Questions Before Visiting
            </h3>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fffdfb',
                    borderRadius: '16px',
                    border: '1.5px solid',
                    borderColor: isOpen ? 'rgba(234, 88, 12, 0.4)' : '#e2e8f0',
                    transition: 'all 0.2s ease',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.94rem',
                      fontWeight: '800',
                      color: isOpen ? '#ea580c' : '#1e293b',
                      gap: '0.75rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        color: isOpen ? '#ea580c' : '#94a3b8'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.25rem 1rem 1.25rem',
                      fontSize: '0.88rem',
                      color: '#64748b',
                      lineHeight: 1.6
                    }}>
                      {faq.a}
                    </div>
                  )}
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
                  Ready to Step Inside Villa 47?
                </h2>

                <p style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: '0 auto 1.75rem'
                }}>
                  We look forward to welcoming you and your little one to our nursery family in Al Rashidiya 2, Ajman.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={onBookVisitClick}
                    className="btn-clay-gold"
                    style={{ padding: '0.7rem 1.5rem' }}
                  >
                    <Calendar size={16} />
                    <span>Book Your Guided Visit</span>
                  </button>
                  <a
                    href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20plan%20a%20visit."
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
