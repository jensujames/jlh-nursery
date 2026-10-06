import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeMascotHero from '../components/ThreeMascotHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ReviewsSection from '../components/ReviewsSection';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Heart, Sparkles, BookOpen, Sun, Compass, ShieldCheck, 
  Baby, Smile, Users, MapPin, Phone, Mail, ArrowRight, 
  MessageCircle, Calendar, CheckCircle2, Award, Clock,
  Camera, Navigation, ChevronRight 
} from 'lucide-react';

export default function HomePage({ onBookVisitClick }) {
  const [likedPrograms, setLikedPrograms] = useState({});

  const toggleProgramLike = (idx) => {
    setLikedPrograms(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // 1. Programs from document (CONTENT STRICTLY PRESERVED)
  const PROGRAMS = [
    {
      title: 'Early Years Education',
      desc: 'Play-based experiences supporting communication, social, emotional, physical and cognitive development.',
      subtitle: 'NURTURING LITTLE HEARTS',
      stat: '1:4',
      statLabel: 'LOW CARER RATIO',
      icon: Heart,
      color: '#e11d48',
      border: 'rgba(225, 29, 72, 0.28)',
      glow: 'rgba(225, 29, 72, 0.22)',
      badgeBg: '#ffe4e6',
      badgeColor: '#9f1239'
    },
    {
      title: 'Nursery & Preschool',
      desc: 'A stimulating environment that encourages curiosity, friendships, creativity and a positive relationship with learning.',
      subtitle: 'PURE PEACE OF MIND',
      stat: '100%',
      statLabel: 'CCTV & CLINIC',
      icon: ShieldCheck,
      color: '#059669',
      border: 'rgba(5, 150, 105, 0.28)',
      glow: 'rgba(5, 150, 105, 0.22)',
      badgeBg: '#dcfce7',
      badgeColor: '#14532d'
    },
    {
      title: 'School Readiness',
      desc: 'Building the confidence, routines and foundational skills children need for their next step into school.',
      subtitle: 'CONFIDENCE & ROUTINES',
      stat: 'EYFS',
      statLabel: 'BRITISH STANDARDS',
      icon: Award,
      color: '#0284c7',
      border: 'rgba(2, 132, 199, 0.28)',
      glow: 'rgba(2, 132, 199, 0.22)',
      badgeBg: '#e0f2fe',
      badgeColor: '#075985'
    },
    {
      title: 'Full-Day & Half-Day Care',
      desc: 'Flexible care options designed around the needs of young children and their families.',
      subtitle: 'FOR WORKING FAMILIES',
      stat: '11 Hrs',
      statLabel: 'FLEXIBLE TIMINGS',
      icon: Clock,
      color: '#d97706',
      border: 'rgba(217, 119, 6, 0.28)',
      glow: 'rgba(217, 119, 6, 0.22)',
      badgeBg: '#fef3c7',
      badgeColor: '#78350f'
    }
  ];

  // 2. Activities from document (CONTENT STRICTLY PRESERVED - NO EXTRA CONTENT)
  const ACTIVITIES = [
    {
      title: 'Phonics & Literacy',
      desc: 'Sounds, songs, stories, conversation and mark-making help develop listening, vocabulary and early literacy.',
      image: '/images/hero-preschool.jpg',
      tag: 'Phonics & Reading',
      icon: BookOpen,
      color: '#721024',
      bg: '#FFF1F2',
      border: '#fecdd3'
    },
    {
      title: 'Early Numeracy',
      desc: 'Counting, sorting, matching, shapes, patterns and practical games make mathematical ideas easier to understand.',
      image: '/images/activity-mini-stem.jpg',
      tag: 'Numbers & Logic',
      icon: Sparkles,
      color: '#0284c7',
      bg: '#F0F9FF',
      border: '#bae6fd'
    },
    {
      title: 'Arabic Learning',
      desc: 'Age-appropriate Arabic experiences introduce children to language through engaging activities and familiar repetition.',
      image: '/images/growing-minds-center.jpg',
      tag: 'Arabic Language',
      icon: Compass,
      color: '#16a34a',
      bg: '#F0FDF4',
      border: '#bbf7d0'
    },
    {
      title: 'Arts & Creativity',
      desc: 'Painting, drawing, collage and making give children freedom to express ideas while developing fine-motor skills.',
      image: '/images/activity-little-artists.jpg',
      tag: 'Art & Expression',
      icon: Smile,
      color: '#d97706',
      bg: '#FFFBEB',
      border: '#fde68a'
    },
    {
      title: 'Music, Rhymes & Stories',
      desc: 'Books, songs and rhythm strengthen memory, listening, language and joyful participation.',
      image: '/images/hero-about.jpg',
      tag: 'Music & Stories',
      icon: Heart,
      color: '#e11d48',
      bg: '#FFF1F2',
      border: '#fecdd3'
    },
    {
      title: 'Sensory Exploration',
      desc: 'Hands-on play invites children to investigate textures, materials, movement, cause and effect.',
      image: '/images/activity-creative-play.jpg',
      tag: 'Sensory Lab',
      icon: Baby,
      color: '#0d9488',
      bg: '#F0FDFA',
      border: '#99f6e4'
    },
    {
      title: 'Physical & Outdoor Play',
      desc: 'Movement supports coordination, strength, balance, confidence and healthy habits.',
      image: '/images/outdoor.jpg',
      tag: 'Outdoor Movement',
      icon: Sun,
      color: '#ea580c',
      bg: '#FFF7ED',
      border: '#fed7aa'
    },
    {
      title: 'Life Skills & Independence',
      desc: 'Practical routines encourage responsibility, self-help skills, good manners and confidence.',
      image: '/images/hero-programs.jpg',
      tag: 'Life Skills',
      icon: ShieldCheck,
      color: '#721024',
      bg: '#FFF1F2',
      border: '#fecdd3'
    }
  ];

  // 3. Facilities from document
  const FACILITIES = [
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

  // 4. Why Parents Choose Pillars from document (CONTENT STRICTLY UNCHANGED)
  const PILLARS = [
    {
      title: 'Nurturing Care',
      desc: 'Kindness, patience and understanding are at the heart of every interaction.',
      color: '#ef4444',
      bg: '#fef2f2',
      category: 'NURTURING LEARNING',
      badge: 'Motherly Care',
      likes: 45,
      tags: ['Motherly Care', 'Gentle Patience', 'Loving Attention'],
      icon: Heart
    },
    {
      title: 'Learning Through Play',
      desc: 'Children explore concepts naturally through purposeful, hands-on experiences.',
      color: '#0284c7',
      bg: '#f0f9ff',
      category: 'EARLY YEARS EXCELLENCE',
      badge: 'UK Standard',
      likes: 62,
      tags: ['Purposeful Play', 'Hands-On Discovery', 'Natural Learning'],
      icon: Sparkles
    },
    {
      title: 'Individual Attention',
      desc: 'We recognise each child\'s interests, abilities and developmental journey.',
      color: '#059669',
      bg: '#ecfdf5',
      category: 'VILLA 47 CAMPUS',
      badge: 'Al Rashidiya 2',
      likes: 39,
      tags: ['Unique Interests', 'Personal Pacing', 'Dedicated Milestones'],
      icon: Smile
    },
    {
      title: 'Whole-Child Development',
      desc: 'We support social, emotional, physical, communication and intellectual growth.',
      color: '#f59e0b',
      bg: '#fffbeb',
      category: 'HOLISTIC GROWTH',
      badge: 'Ages 45d–4y',
      likes: 51,
      tags: ['Emotional & Social', 'Communication', 'Motor & Cognitive'],
      icon: Baby
    },
    {
      title: 'Building Confidence',
      desc: 'We encourage independence, good manners and essential everyday life skills.',
      color: '#721024',
      bg: '#fff1f2',
      category: 'CHARACTER & SKILLS',
      badge: 'Life Readiness',
      likes: 58,
      tags: ['Independence', 'Good Manners', 'Essential Life Skills'],
      icon: Award
    },
    {
      title: 'Parent Partnership',
      desc: 'We build respectful relationships with families and keep parents connected.',
      color: '#0d9488',
      bg: '#f0fdf4',
      category: 'TRUSTED COMMUNITY',
      badge: 'Daily Updates',
      likes: 48,
      tags: ['Open Daily Updates', 'Respectful Trust', 'Family Community'],
      icon: Users
    }
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about Just Like Home Nursery. My child is [age], and I am interested in [full-day/half-day/preschool]. Please share the available options and help me book a visit."
  );

  return (
    <div className="home-page-exact" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22' }}>
      
      {/* 1. Flagship 3D Mascot Hero Stage */}
      <ThreeMascotHero onBookVisitClick={onBookVisitClick} />


      {/* 3. Early Years Programs for Every Little Step */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8', 
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderTop: '1px solid #f1f5f9', 
          borderBottom: '1px solid #f1f5f9',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Soft decorative background elements from reference */}
        <div 
          style={{
            position: 'absolute',
            top: '45%',
            left: '2%',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)',
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)',
            pointerEvents: 'none'
          }} 
        />
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            right: '2.5%',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 12px rgba(225, 29, 72, 0.25))'
          }}
        >
          <Heart size={32} color="#e11d48" fill="#e11d48" style={{ opacity: 0.8 }} />
        </div>

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
                OUR PROGRAMS
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
                Early Years Programs for Every Little Step
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569' }}>
                Every stage of early childhood brings new opportunities to learn and grow. Our programs support children's changing developmental needs while making learning engaging, enjoyable and meaningful.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.85rem',
              marginBottom: '40px'
            }}
          >
            {PROGRAMS.map((prog, idx) => {
              const IconComponent = prog.icon;
              const isLiked = !!likedPrograms[idx];
              const pillarAnim = idx === 0 ? 'from-left' : idx === 3 ? 'from-right' : 'from-bottom';
              const pillarDelay = idx === 0 ? 50 : idx === 1 ? 120 : idx === 2 ? 190 : 260;
              return (
                <RevealOnScroll key={prog.title} animation={pillarAnim} delay={pillarDelay}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.88)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      borderRadius: '2rem',
                      padding: '2.25rem 1.85rem 2rem 1.85rem',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                      e.currentTarget.style.boxShadow = `0 24px 50px ${prog.glow}, 0 2px 12px rgba(255, 255, 255, 0.9) inset`;
                      e.currentTarget.style.borderColor = prog.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <div>
                      {/* Icon, Stat & Like Button */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '1.4rem'
                        }}
                      >
                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '1.15rem',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: prog.color,
                            border: `2px solid ${prog.border}`,
                            boxShadow: `0 8px 18px ${prog.glow}`
                          }}
                        >
                          <IconComponent size={28} strokeWidth={2.3} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <div style={{ textAlign: 'right' }}>
                            <div
                              style={{
                                fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                                fontSize: '1.3rem',
                                fontWeight: '900',
                                color: prog.color,
                                lineHeight: 1
                              }}
                            >
                              {prog.stat}
                            </div>
                            <div
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: '800',
                                color: '#78716c',
                                textTransform: 'uppercase'
                              }}
                            >
                              {prog.statLabel}
                            </div>
                          </div>

                          {/* Interactive Heart Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleProgramLike(idx);
                            }}
                            title="Love this feature"
                            style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '50%',
                              border: isLiked ? `1.5px solid ${prog.color}` : '1.5px solid rgba(0,0,0,0.08)',
                              backgroundColor: isLiked ? prog.badgeBg : '#ffffff',
                              color: isLiked ? prog.color : '#a8a29e',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s ease',
                              padding: 0
                            }}
                          >
                            <Heart size={16} fill={isLiked ? prog.color : 'none'} />
                          </button>
                        </div>
                      </div>

                      {/* Title - STRICTLY UNCHANGED FROM DOCUMENT */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '1.32rem',
                          fontWeight: '900',
                          color: '#0f172a',
                          marginBottom: '0.45rem',
                          lineHeight: 1.25
                        }}
                      >
                        {prog.title}
                      </h3>

                      {/* Subtitle Kicker */}
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: '800',
                          color: prog.color,
                          marginBottom: '1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {prog.subtitle}
                      </div>

                      {/* Description - STRICTLY UNCHANGED FROM DOCUMENT */}
                      <p
                        style={{
                          fontSize: '0.94rem',
                          color: '#475569',
                          lineHeight: 1.65,
                          margin: 0
                        }}
                      >
                        {prog.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/programs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 34px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
              }}
            >
              <span>Explore Our Programs</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Little Hands. Big Discoveries. (Activities) */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
                }}
              >
                ACTIVITIES &amp; DISCOVERY
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
                Little Hands. Big Discoveries.
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569' }}>
                We believe young children learn best by doing. Our learning experiences encourage children to explore, experiment, communicate, imagine and solve problems through activities designed around their age and stage of development.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '24px',
              marginBottom: '44px'
            }}
          >
            {ACTIVITIES.map((act, idx) => {
              const Icon = act.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 30}>
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '24px',
                      padding: '16px',
                      border: `1.5px solid ${act.border}`,
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 32px rgba(15, 23, 42, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.04)';
                    }}
                  >
                    <div>
                      {/* Top Image with Floating Tag Badge */}
                      <div
                        style={{
                          position: 'relative',
                          borderRadius: '18px',
                          overflow: 'hidden',
                          height: '190px',
                          marginBottom: '16px',
                          backgroundColor: act.bg
                        }}
                      >
                        <img
                          src={act.image}
                          alt={act.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            backgroundColor: 'rgba(255, 255, 255, 0.94)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            color: act.color,
                            fontSize: '11.5px',
                            fontWeight: '800',
                            letterSpacing: '0.3px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                          }}
                        >
                          <Icon size={13} />
                          <span>{act.tag}</span>
                        </div>
                      </div>

                      {/* Exact Title from Document */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '19px',
                          fontWeight: '850',
                          color: '#1e293b',
                          marginBottom: '8px',
                          lineHeight: 1.3
                        }}
                      >
                        {act.title}
                      </h3>

                      {/* Exact Description from Document - Strictly Preserved */}
                      <p
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.62,
                          color: '#475569',
                          margin: '0 0 16px 0'
                        }}
                      >
                        {act.desc}
                      </p>
                    </div>

                    {/* Bottom Action Link */}
                    <Link
                      to="/nursery-activities"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px dashed #e2e8f0',
                        color: act.color,
                        textDecoration: 'none',
                        fontSize: '13.5px',
                        fontWeight: '800',
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <span>Explore Activities</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/nursery-activities"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 30px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                color: '#721024',
                fontWeight: '800',
                fontSize: '14.5px',
                textDecoration: 'none',
                border: '1.5px solid #721024',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              <span>View All Nursery Activities</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Philosophy Spotlight ("We Don't Just Educate Children. We Nurture Little Hearts.") */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <RevealOnScroll>
          <div className="philosophy-showcase-grid">
            
            {/* Left Column: Heading Top Left + Image Bottom Left */}
            <div className="philosophy-col-left">
              <div>
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
                    marginBottom: '16px'
                  }}
                >
                  <Heart size={13} className="fill-current" />
                  OUR CARE PHILOSOPHY
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(26px, 3.2vw, 36px)',
                    fontWeight: '900',
                    color: '#721024',
                    margin: '0 0 14px 0',
                    lineHeight: 1.22
                  }}
                >
                  We Don't Just Educate Children. We Nurture Little Hearts.
                </h2>
                <p style={{ fontSize: '15.5px', lineHeight: 1.72, color: '#475569', margin: 0 }}>
                  We don't just educate children we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime. At Just Like Home Nursery, every child deserves to feel safe, valued, respected and encouraged.
                </p>
              </div>

              {/* Bottom Left Image */}
              <div className="philosophy-card-img-wrap">
                <img
                  src="/images/activity-mini-stem.jpg"
                  alt="Happy kids exploring sensory learning activities"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Center Column: Tall Portrait of Radiant Happy Child */}
            <div className="philosophy-col-center">
              <div className="philosophy-center-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85"
                  alt="Radiant smiling child discovering books and learning toys"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Image Top Right + Content Bottom Right */}
            <div className="philosophy-col-right">
              {/* Top Right Image */}
              <div className="philosophy-card-img-wrap">
                <img
                  src="/images/activity-creative-play.jpg"
                  alt="Children happily playing and crafting together"
                  loading="lazy"
                />
              </div>

              {/* Bottom Right Content */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(24px, 2.8vw, 32px)',
                    fontWeight: '900',
                    color: '#1e293b',
                    margin: '0 0 14px 0',
                    lineHeight: 1.25
                  }}
                >
                  Where Little Hearts Feel at Home
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.72, color: '#475569', marginBottom: '22px' }}>
                  We create a joyful space filled with colorful classrooms, exciting activities, and caring guidance — a place where kids can imagine, discover, grow, and build lasting friendships with confidence.
                </p>
                <button
                  type="button"
                  onClick={onBookVisitClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 28px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #ff6a42 0%, #F15A29 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '14.5px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(241, 90, 41, 0.28)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <span>Book a Visit</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* 6. Designed for Happy Learning & Safe Exploration (Facilities) */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', maxWidth: '1240px', margin: '0 auto' }}>
        <RevealOnScroll>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                border: '1px solid rgba(114, 16, 36, 0.12)',
                marginBottom: '14px'
              }}
            >
              FACILITIES &amp; SAFETY
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
              Designed for Happy Learning &amp; Safe Exploration
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569' }}>
              From active play to quiet story time, our nursery provides dedicated spaces for the different experiences that make up a child's day.
            </p>
          </div>
        </RevealOnScroll>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '40px'
          }}
        >
          {FACILITIES.map((fac, idx) => (
            <RevealOnScroll key={idx} delay={idx * 20}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(114, 16, 36, 0.02)'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#fff1f2',
                    color: '#721024',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <span style={{ fontSize: '15px', fontWeight: '750', color: '#1e293b' }}>
                  {fac}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/facilities"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 30px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '14.5px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
            }}
          >
            <span>Explore Our Nursery</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>


      {/* 8. Why Parents Choose Just Like Home */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
                }}
              >
                PARENT TRUST &amp; VALUES
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
                Why Parents Choose Just Like Home
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '32px 26px'
            }}
          >
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 35}>
                  <div
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      borderRadius: '24px',
                      padding: '28px 24px 22px',
                      border: '1.5px solid #edf2f7',
                      borderTop: `4px solid ${pillar.color}`,
                      boxShadow: '0 10px 28px rgba(15, 23, 42, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 18px 36px rgba(15, 23, 42, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 23, 42, 0.06)';
                    }}
                  >
                    {/* Playful Top Sticky Tape Tab */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '56px',
                        height: '13px',
                        backgroundColor: '#fef08a',
                        borderRadius: '3px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                        zIndex: 2,
                        border: '1px solid rgba(234, 179, 8, 0.4)'
                      }}
                    />

                    {/* Header Row: Icon + Badge + Heart Likes */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '18px'
                      }}
                    >
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '16px',
                          backgroundColor: pillar.bg,
                          border: `1.5px solid ${pillar.color}25`,
                          color: pillar.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 4px 12px ${pillar.color}15`
                        }}
                      >
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            backgroundColor: pillar.bg,
                            color: pillar.color,
                            fontSize: '12px',
                            fontWeight: '800',
                            letterSpacing: '0.2px',
                            border: `1px solid ${pillar.color}30`
                          }}
                        >
                          {pillar.badge}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            backgroundColor: '#ffffff',
                            color: '#64748b',
                            fontSize: '12px',
                            fontWeight: '700',
                            border: '1px solid #e2e8f0'
                          }}
                        >
                          <Heart size={12} style={{ color: '#94a3b8' }} />
                          {pillar.likes}
                        </span>
                      </div>
                    </div>

                    {/* Category Kicker */}
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        letterSpacing: '0.8px',
                        color: pillar.color,
                        textTransform: 'uppercase',
                        marginBottom: '6px'
                      }}
                    >
                      {pillar.category}
                    </div>

                    {/* Exact Title from Document */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                        fontSize: '21px',
                        fontWeight: '900',
                        color: '#1e293b',
                        margin: '0 0 10px 0',
                        lineHeight: 1.3
                      }}
                    >
                      {pillar.title}
                    </h3>

                    {/* Exact Description from Document - Unchanged */}
                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.68,
                        color: '#475569',
                        margin: '0 0 18px 0',
                        flexGrow: 1
                      }}
                    >
                      {pillar.desc}
                    </p>

                    {/* Feature Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '7px',
                        marginBottom: '20px'
                      }}
                    >
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#475569',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            padding: '4px 10px'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Discover Details Action Button */}
                    <button
                      onClick={onBookVisitClick}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 18px',
                        borderRadius: '14px',
                        backgroundColor: pillar.color,
                        color: '#ffffff',
                        border: 'none',
                        fontWeight: '800',
                        fontSize: '14px',
                        cursor: 'pointer',
                        boxShadow: `0 6px 16px ${pillar.color}35`,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 10px 22px ${pillar.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = `0 6px 16px ${pillar.color}35`;
                      }}
                    >
                      <span>Discover Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Growing Together With Families (Full-Width Panoramic Family Banner) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(420px, 42vw, 520px)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ecf7ee',
          backgroundImage: 'radial-gradient(ellipse at 12% 25%, rgba(131, 196, 65, 0.18) 0%, transparent 50%), linear-gradient(135deg, #dcf2e1 0%, #ebf7ee 38%, #f4fbf5 68%, #ffffff 100%)',
          overflow: 'hidden',
          padding: 'clamp(60px, 7vw, 84px) 20px',
          margin: 'clamp(36px, 5vw, 64px) 0'
        }}
      >
        {/* Right-Side Focused Image with Smooth Leftward Fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '58%',
            zIndex: 1,
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <img
            src="/images/testimonial-parent-mom.jpg"
            alt="Growing together with nursery families"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 14%, black 46%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 14%, black 46%)'
            }}
          />
          {/* Soft Botanical Green Tone Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to right, rgba(220, 242, 225, 0.95) 0%, rgba(235, 247, 238, 0.45) 25%, rgba(22, 163, 74, 0.05) 60%, transparent 100%)',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Soft Botanical Leaf Accents on Corners (from reference) */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '120px',
            height: '120px',
            opacity: 0.45,
            pointerEvents: 'none',
            zIndex: 2
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M10,80 Q40,10 90,20 Q60,70 10,80 Z" fill="#16a34a" />
            <path d="M20,90 Q60,30 100,50 Q70,95 20,90 Z" fill="#22c55e" opacity="0.7" />
          </svg>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '140px',
            height: '140px',
            opacity: 0.35,
            pointerEvents: 'none',
            zIndex: 2
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M90,20 Q60,90 10,80 Q40,30 90,20 Z" fill="#16a34a" />
          </svg>
        </div>

        {/* Content Container - Placed on the Left Plain/Blurred Space */}
        <div
          style={{
            maxWidth: '1240px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 3
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <RevealOnScroll animation="from-left">
              <div>
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
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    border: '1.5px solid rgba(114, 16, 36, 0.15)',
                    marginBottom: '18px',
                    boxShadow: '0 4px 12px rgba(114, 16, 36, 0.05)'
                  }}
                >
                  <Users size={14} />
                  FAMILY PARTNERSHIP
                </span>

                <h2
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(30px, 4.2vw, 44px)',
                    fontWeight: '900',
                    color: '#721024',
                    lineHeight: 1.18,
                    margin: '0 0 18px 0'
                  }}
                >
                  Growing Together With Families
                </h2>

                <p
                  style={{
                    fontSize: '16.5px',
                    lineHeight: 1.76,
                    color: '#475569',
                    margin: '0 0 28px 0'
                  }}
                >
                  Parents know their children better than anyone. That is why we believe early education works best as a partnership. We value open communication and work with families to understand each child's needs, progress, interests and achievements. When nursery and home work together, children have the confidence to thrive.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    onClick={onBookVisitClick}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 28px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 22px rgba(114, 16, 36, 0.25)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(114, 16, 36, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 22px rgba(114, 16, 36, 0.25)';
                    }}
                  >
                    <span>Book a Visit</span>
                    <ArrowRight size={16} />
                  </button>

                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 26px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#721024',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      border: '1.5px solid #721024',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = '#fff1f2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }}
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Parent Love & Social Proof Spotlight (Reviews) */}
      <ReviewsSection />

      {/* 10. Visit Just Like Home Nursery in Ajman (Location & Contact) */}
      <section style={{ padding: '0 20px clamp(48px, 6vw, 80px)', maxWidth: '1240px', margin: '0 auto' }}>
        <RevealOnScroll>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '32px',
              padding: 'clamp(32px, 5vw, 56px)',
              border: '1.5px solid #ffede4',
              boxShadow: '0 12px 40px rgba(114, 16, 36, 0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '16px'
                }}
              >
                LOCATION &amp; CONTACT
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(26px, 3.8vw, 38px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0',
                  lineHeight: 1.25
                }}
              >
                Visit Just Like Home Nursery in Ajman
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', marginBottom: '28px' }}>
                Conveniently located in Al Rashidiya 2, Ajman, Just Like Home Nursery provides families with a nurturing environment where children can learn, play, make friends and grow with confidence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fff1f2', color: '#721024', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#1e293b' }}>Just Like Home Nursery</p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Villa No. 47, Al Rashidiya 2, Ajman</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#1e293b' }}>Phone / WhatsApp</p>
                    <a href="tel:0502005346" style={{ margin: 0, fontSize: '14px', color: '#059669', textDecoration: 'none', fontWeight: '750' }}>050 200 5346</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#1e293b' }}>Email</p>
                    <a href="mailto:nurseryjustlikehome@gmail.com" style={{ margin: 0, fontSize: '14px', color: '#0284c7', textDecoration: 'none', fontWeight: '600' }}>nurseryjustlikehome@gmail.com</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
                  }}
                >
                  <Navigation size={17} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#059669',
                    fontWeight: '800',
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    border: '1.5px solid #059669'
                  }}
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(114, 16, 36, 0.05)',
                border: '2px solid #ffede4',
                height: '360px'
              }}
            >
              <iframe
                title="Just Like Home Nursery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.3424168050965!2d55.45187127599554!3d25.399222523727766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1310!3m3!1m2!1s0x3e5f583e7428f52f%3A0xb30e8c160c87285c!2sAl%20Rashidiya%202%20-%20Ajman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 11. Come See Why It Feels Just Like Home (Closing CTA) */}
      <LuxuryClosingCta
        badge="BOOK A VISIT"
        title="Come See Why It Feels Just Like Home"
        subtitle="Choosing your child's nursery is an important decision - and sometimes the best way to know is simply to experience it. Meet our team, explore our nursery and discover the warm learning environment waiting for your little one."
        primaryText="Book Your Nursery Visit"
        onPrimaryClick={onBookVisitClick}
        secondaryText="Chat on WhatsApp"
        whatsappMessage={whatsappMessage}
        tagline="Where Little Hearts Feel at Home."
      />

    </div>
  );
}
