import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Smile, 
  Users, 
  Quote, 
  Award, 
  Compass, 
  MapPin, 
  Phone,
  BookOpen,
  Home as HomeIcon,
  Star
} from 'lucide-react';

export default function FounderPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "A Message from the Founder | Just Like Home Nursery Ajman";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content", 
        "Read the personal message from Mary Ann, Founder of Just Like Home Nursery in Ajman. Discover her heartfelt vision for early childhood care, EYFS learning and creating a warm second home."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello Mary Ann & Team, I read the Founder's message on your website and would love to learn more about Just Like Home Nursery in Ajman."
  );

  const visionPillars = [
    {
      icon: Heart,
      title: "Safe, Caring & Stimulating Haven",
      desc: "Laying the vital foundation of childhood with tender care, emotional security, and joy so that every little heart feels loved and confident.",
      badge: "Emotional Wellbeing",
      color: "#e11d48",
      bg: "#fff1f2"
    },
    {
      icon: BookOpen,
      title: "EYFS Holistic British Learning",
      desc: "Embracing a child-centred approach where play, exploration, and creative discovery unlock every child’s unique strengths and abilities.",
      badge: "Curriculum Excellence",
      color: "#059669",
      bg: "#ecfdf5"
    },
    {
      icon: Smile,
      title: "Beyond Classroom Education",
      desc: "Building character, fostering kindness, encouraging independence, and developing a profound sense of belonging that lasts a lifetime.",
      badge: "Character & Independence",
      color: "#d97706",
      bg: "#fffbeb"
    },
    {
      icon: Users,
      title: "A True Second Home for Families",
      desc: "Working hand in hand with parents in an authentic partnership, creating treasured childhood memories and lifelong friendships.",
      badge: "Family Partnership",
      color: "#0284c7",
      bg: "#f0f9ff"
    }
  ];

  return (
    <div className="founder-page-wrapper" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22' }}>
      
      {/* 1. LUXURY FOUNDER HERO BANNER */}
      <section 
        className="founder-hero-section"
        style={{
          position: 'relative',
          padding: 'clamp(56px, 8vw, 92px) 20px clamp(48px, 6vw, 72px)',
          background: 'linear-gradient(135deg, #fff9f6 0%, #fff4ed 50%, #fdf2eb 100%)',
          borderBottom: '1px solid rgba(114, 16, 36, 0.08)',
          overflow: 'hidden'
        }}
      >
        {/* Soft Decorative Ambient Circles */}
        <div 
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-40px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(241, 90, 41, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} 
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '5%',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(114, 16, 36, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} 
        />

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center' 
            }}
          >
            {/* Left Content */}
            <div>
              <RevealOnScroll animation="from-left">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '999px', backgroundColor: '#fff1f2', border: '1px solid rgba(114, 16, 36, 0.15)', color: '#721024', fontSize: '12.5px', fontWeight: '800', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: '18px' }}>
                  <Sparkles size={14} color="#e11d48" />
                  <span>FOUNDER'S VISION &amp; LEADERSHIP</span>
                </div>

                <h1 
                  style={{ 
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(32px, 5vw, 52px)',
                    fontWeight: '900',
                    color: '#721024',
                    lineHeight: 1.15,
                    margin: '0 0 18px 0',
                    letterSpacing: '-0.02em'
                  }}
                >
                  A Message from the Founder
                </h1>

                <p 
                  style={{ 
                    fontSize: 'clamp(17px, 2vw, 20px)', 
                    color: '#475569', 
                    lineHeight: 1.6, 
                    fontWeight: '550',
                    margin: '0 0 28px 0',
                    maxWidth: '620px'
                  }}
                >
                  “A second home where children feel secure, friendships blossom, families feel welcomed, and beautiful childhood memories are made every day.”
                </p>

                {/* Founder Identity Card in Hero */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px', 
                    padding: '16px 20px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)',
                    border: '1.5px solid rgba(114, 16, 36, 0.12)',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.06)',
                    maxWidth: '440px',
                    marginBottom: '32px'
                  }}
                >
                  <div 
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      flexShrink: 0,
                      border: '2px solid #721024',
                      boxShadow: '0 4px 12px rgba(114, 16, 36, 0.15)'
                    }}
                  >
                    <img 
                      src="/media/founder.jpg" 
                      alt="Mary Ann Founder" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
                    />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading, "Outfit", sans-serif)', fontSize: '20px', fontWeight: '900', color: '#721024' }}>
                      Mary Ann
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '750', color: '#9f1239', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      Founder &amp; Visionary
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <MapPin size={12} color="#c9a84c" /> Just Like Home Nursery · Ajman
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => onBookVisitClick && onBookVisitClick()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '14px 28px',
                      borderRadius: '999px',
                      backgroundColor: '#721024',
                      color: '#ffffff',
                      fontSize: '15px',
                      fontWeight: '800',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(114, 16, 36, 0.28)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Calendar size={16} />
                    <span>Book a Nursery Visit</span>
                  </button>

                  <a
                    href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '14px 26px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#15803d',
                      fontSize: '15px',
                      fontWeight: '750',
                      border: '1.5px solid #22c55e',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(34, 197, 94, 0.12)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Hero Image Card with Interactive Dual-Photo Switcher */}
            <div>
              <RevealOnScroll animation="from-right" delay={150}>
                <div 
                  style={{
                    position: 'relative',
                    maxWidth: '460px',
                    margin: '0 auto'
                  }}
                >
                  <div 
                    style={{
                      position: 'relative',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                      padding: '12px',
                      boxShadow: '0 24px 60px -15px rgba(114, 16, 36, 0.2), 0 0 0 1px rgba(114, 16, 36, 0.08)'
                    }}
                  >
                    <div 
                      style={{
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        backgroundColor: '#f8fafc',
                        aspectRatio: '4 / 5'
                      }}
                    >
                      <img 
                        src="/media/founder.jpg" 
                        alt="Mary Ann - Founder, Just Like Home Nursery"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '30px 18px 14px',
                          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)',
                          color: '#ffffff'
                        }}
                      >
                        <div style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.8px', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '2px' }}>
                          JUST LIKE HOME NURSERY · AJMAN
                        </div>
                        <div style={{ fontFamily: 'var(--font-heading, "Outfit", sans-serif)', fontSize: '20px', fontWeight: '900' }}>
                          Mary Ann
                        </div>
                        <div style={{ fontSize: '13px', opacity: 0.9 }}>
                          Founder &amp; Early Years Visionary
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: '-16px',
                      backgroundColor: '#ffffff',
                      padding: '10px 16px',
                      borderRadius: '16px',
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
                      border: '1.5px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      zIndex: 3
                    }}
                  >
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '850', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                        EYFS Standard
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b' }}>
                        British Curriculum
                      </div>
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDER'S OFFICIAL MESSAGE (EDITORIAL LETTER FORMAT) */}
      <section 
        className="founder-letter-section"
        style={{
          padding: 'clamp(64px, 7vw, 100px) 20px',
          backgroundColor: '#FFFDF7',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          <RevealOnScroll>
            {/* Parchment Editorial Container */}
            <div 
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                borderRadius: '32px',
                padding: 'clamp(32px, 5vw, 68px) clamp(24px, 5vw, 56px)',
                border: '1.5px solid rgba(114, 16, 36, 0.12)',
                boxShadow: '0 20px 50px rgba(114, 16, 36, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)'
              }}
            >
              {/* Decorative Header Stamp */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '2px solid #f8fafc',
                  paddingBottom: '24px',
                  marginBottom: '32px',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px'
                    }}
                  >
                    <Quote size={22} color="#721024" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '850', color: '#9f1239', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
                      Founder's Address
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading, "Outfit", sans-serif)', fontSize: '20px', fontWeight: '900', color: '#721024' }}>
                      Just Like Home Nursery
                    </div>
                  </div>
                </div>

                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    backgroundColor: '#fef3c7',
                    color: '#92400e',
                    fontSize: '12px',
                    fontWeight: '800'
                  }}
                >
                  <Star size={13} color="#d97706" />
                  <span>Nurturing Little Hearts &amp; Curious Minds</span>
                </div>
              </div>

              {/* Salutation */}
              <div 
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(20px, 2.4vw, 25px)',
                  fontWeight: '850',
                  color: '#721024',
                  marginBottom: '28px',
                  letterSpacing: '-0.01em'
                }}
              >
                Dear Parents, Children, and Friends,
              </div>

              {/* Opening Featured Quote */}
              <div 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 241, 242, 0.85) 0%, rgba(254, 243, 199, 0.55) 100%)',
                  borderLeft: '5px solid #721024',
                  borderRadius: '0 20px 20px 0',
                  padding: '24px 28px',
                  marginBottom: '32px',
                  boxShadow: '0 4px 16px rgba(114, 16, 36, 0.04)'
                }}
              >
                <p 
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(17px, 2vw, 20px)',
                    lineHeight: 1.7,
                    fontWeight: '650',
                    color: '#721024',
                    margin: 0,
                    fontStyle: 'italic'
                  }}
                >
                  “It gives me immense joy to welcome you to Just Like Home Nursery, a place where little hearts feel loved, young minds are nurtured, and every child is encouraged to shine in their own unique way.”
                </p>
              </div>

              {/* Body Paragraphs */}
              <div 
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 17.5px)',
                  lineHeight: 1.85,
                  color: '#334155',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px'
                }}
              >
                <p style={{ margin: 0 }}>
                  I have always believed that the early years of childhood lay the foundation for a lifetime of learning, confidence, and happiness. At Just Like Home Nursery, our mission is to provide a safe, caring, and stimulating environment where children can explore their interests, discover their abilities, and develop a genuine love for learning.
                </p>

                <p style={{ margin: 0 }}>
                  Following the principles of the Early Years Foundation Stage (EYFS), we embrace a holistic approach to early childhood education, nurturing every aspect of a child’s development through play, creativity, exploration, and meaningful experiences. We recognise that every child is unique, with individual strengths, interests, and needs, and we are committed to helping each one reach their full potential.
                </p>

                <p style={{ margin: 0 }}>
                  As a nursery, we believe that education goes beyond the classroom. It is about building confidence, encouraging kindness, developing independence, and creating a strong sense of belonging. Our dedicated team works hand in hand with families to ensure that every child feels valued, supported, and inspired throughout their early learning journey.
                </p>

                <p style={{ margin: 0 }}>
                  My vision for Just Like Home Nursery is to create more than just a learning environment. I want it to be a second home where children feel secure, friendships blossom, families feel welcomed, and beautiful childhood memories are made every day.
                </p>

                <p 
                  style={{ 
                    margin: 0, 
                    fontWeight: '700', 
                    color: '#1e293b',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    backgroundColor: '#fffdfa',
                    border: '1px solid #fee2e2'
                  }}
                >
                  Thank you for placing your trust in us and allowing us to be part of your child’s precious early years. Together, let us nurture curious minds, happy hearts, and a brighter future for every child.
                </p>
              </div>

              {/* Sign-off Signature Block */}
              <div 
                style={{
                  marginTop: '44px',
                  paddingTop: '32px',
                  borderTop: '2px dashed rgba(114, 16, 36, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '24px'
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', color: '#64748b', fontWeight: '600', marginBottom: '6px' }}>
                    With warm regards,
                  </div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '32px',
                      fontWeight: '900',
                      color: '#721024',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15
                    }}
                  >
                    Mary Ann
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#9f1239', marginTop: '4px' }}>
                    Founder
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '600', marginTop: '2px' }}>
                    Just Like Home Nursery – Ajman
                  </div>
                </div>

                {/* Founder Badge Seal */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    borderRadius: '20px',
                    backgroundColor: '#fff7ed',
                    border: '1.5px solid #fed7aa'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ea580c', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Heart size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '850', color: '#c2410c', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      Founder Commitment
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '750', color: '#1e293b' }}>
                      Where Little Hearts Feel at Home
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* 3. CORE PILLARS OF MARY ANN'S VISION */}
      <section 
        style={{
          padding: 'clamp(64px, 7vw, 92px) 20px',
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontSize: '12.5px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1.5px solid rgba(114, 16, 36, 0.14)',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(114, 16, 36, 0.05)'
                }}
              >
                <Sparkles size={13} color="#e11d48" />
                FOUNDATIONAL PILLARS
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
                The Vision Behind Just Like Home
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                Every corner, routine, and interaction in our nursery is guided by Mary Ann's founding principles.
              </p>
            </div>
          </RevealOnScroll>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {visionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 50}>
                  <div
                    className="luxury-creative-card"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '24px',
                      padding: '30px 26px',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 10px 30px rgba(114, 16, 36, 0.05)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div 
                          style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '16px',
                            backgroundColor: pillar.bg,
                            color: pillar.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `1.5px solid ${pillar.color}25`
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <span 
                          style={{
                            fontSize: '11.5px',
                            fontWeight: '800',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            backgroundColor: pillar.bg,
                            color: pillar.color,
                            textTransform: 'uppercase',
                            letterSpacing: '0.4px'
                          }}
                        >
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '20px',
                          fontWeight: '850',
                          color: '#721024',
                          margin: '0 0 12px 0',
                          lineHeight: 1.3
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                        {pillar.desc}
                      </p>
                    </div>

                    <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '8px', color: pillar.color, fontSize: '13px', fontWeight: '750' }}>
                      <CheckCircle2 size={15} />
                      <span>Founding Principle</span>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. FOUNDER PHOTO GALLERY SPOTLIGHT */}
      <section 
        style={{
          padding: 'clamp(64px, 7vw, 92px) 20px',
          backgroundColor: '#FFFDF7'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px' }}>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '12.5px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
                }}
              >
                <Sparkles size={13} color="#e11d48" />
                COMMITTED LEADERSHIP
              </span>
              <h2 
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 14px 0'
                }}
              >
                Dedicated to Every Child's Journey
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                Every single child in our nursery is known, cherished, and supported on their unique path.
              </p>
            </div>
          </RevealOnScroll>

          {/* Side-by-side Leadership & Campus Showcase */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              maxWidth: '880px',
              margin: '0 auto'
            }}
          >
            {/* Card 1: Founder Mary Ann */}
            <RevealOnScroll delay={50}>
              <div 
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(114, 16, 36, 0.1)',
                  boxShadow: '0 14px 36px rgba(114, 16, 36, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', position: 'relative', backgroundColor: '#f8fafc' }}>
                  <img 
                    src="/media/founder.jpg" 
                    alt="Mary Ann - Founder, Just Like Home Nursery" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '800',
                      color: '#721024',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  >
                    Founder &amp; Leadership
                  </div>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-heading, "Outfit", sans-serif)', fontSize: '19px', fontWeight: '850', color: '#721024', marginBottom: '4px' }}>
                    Mary Ann
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>
                    Founder · Dedicated to nurturing little hearts
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2: Nurturing Campus */}
            <RevealOnScroll delay={150}>
              <div 
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(114, 16, 36, 0.1)',
                  boxShadow: '0 14px 36px rgba(114, 16, 36, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', position: 'relative', backgroundColor: '#f8fafc' }}>
                  <img 
                    src="/media/nursery/nursery-5.jpg" 
                    alt="Just Like Home Nursery Campus" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '800',
                      color: '#059669',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  >
                    Villa 47 · Al Rashidiya 2
                  </div>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-heading, "Outfit", sans-serif)', fontSize: '19px', fontWeight: '850', color: '#721024', marginBottom: '4px' }}>
                    A True Second Home
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>
                    Where every child is cherished, supported, and inspired
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <LuxuryClosingCta
        badge="EXPERIENCE THE DIFFERENCE"
        title="Meet Mary Ann & Our Warm Team"
        subtitle="We invite parents to visit Just Like Home Nursery in Al Rashidiya 2, Ajman, tour our sunlit classrooms, and feel the love and care we put into every child’s day."
        primaryText="Book a Nursery Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="Explore Our Programs"
        secondaryLink="/programs"
        whatsappMessage="Hello Mary Ann & Just Like Home Nursery, I would love to book a visit for my child."
        tagline="Where Little Hearts Feel at Home."
      />

    </div>
  );
}
