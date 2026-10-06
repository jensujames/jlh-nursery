import React, { useEffect } from 'react';
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

export default function AboutPage({ onBookVisitClick }) {
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

      {/* 2. OUR STORY */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(36px, 5vw, 56px)',
              alignItems: 'center'
            }}
          >
            <div>
              <RevealOnScroll>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 40px rgba(114, 16, 36, 0.08)',
                    border: '4px solid #ffffff'
                  }}
                >
                  <img 
                    src="/images/nurturing-hero.jpg" 
                    alt="Caring educators and children at Just Like Home Nursery" 
                    style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(114, 16, 36, 0.75) 0%, transparent 60%)'
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: '#ffffff' }}>
                    <p style={{ margin: 0, fontSize: '11.5px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#fef08a' }}>
                      Villa No. 47, Al Rashidiya 2, Ajman
                    </p>
                    <p style={{ margin: '4px 0 0 0', fontSize: '19px', fontWeight: '800' }}>
                      Where Little Hearts Feel at Home
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <RevealOnScroll delay={100}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    backgroundColor: '#fff1f2',
                    color: '#721024',
                    fontSize: '13px',
                    fontWeight: '800',
                    border: '1px solid rgba(114, 16, 36, 0.12)',
                    width: 'fit-content'
                  }}
                >
                  <Sparkles size={14} /> Our Background
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: '900',
                    color: '#721024',
                    margin: '8px 0 16px 0',
                    lineHeight: 1.2
                  }}
                >
                  Our Story
                </h2>
                <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', marginBottom: '16px' }}>
                  The early years shape how children see themselves and the world around them. These years deserve more than supervision and lessons; they deserve patience, meaningful relationships and joyful opportunities to discover.
                </p>
                <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', margin: 0 }}>
                  At Just Like Home Nursery in Ajman, we bring care and learning together. Every part of the child's day — from play and conversation to meals, movement, stories and friendships — can become an opportunity to grow.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & OUR MISSION */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
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
                PURPOSE &amp; VALUES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: 0
                }}
              >
                Our Vision &amp; Mission
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {/* Vision Card */}
            <RevealOnScroll delay={100}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '28px',
                  padding: '38px 32px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 8px 30px rgba(114, 16, 36, 0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #c9a84c)' }} />
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Compass size={28} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#721024',
                      marginBottom: '14px'
                    }}
                  >
                    Our Vision
                  </h3>
                  <p style={{ fontSize: '17.5px', lineHeight: 1.7, color: '#1e293b', fontWeight: '600', margin: 0 }}>
                    Preparing children for life with motherly care and attention.
                  </p>
                </div>
                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: '750',
                    color: '#721024'
                  }}
                >
                  <Heart size={16} className="fill-current text-[#721024]" />
                  <span>Motherly Care &amp; Attention</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Mission Card */}
            <RevealOnScroll delay={200}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '28px',
                  padding: '38px 32px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 8px 30px rgba(114, 16, 36, 0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #c9a84c, #721024)' }} />
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#fef9e7',
                      color: '#c9a84c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Heart size={28} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '14px'
                    }}
                  >
                    Our Vision &amp; Mission
                  </h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#334155', fontWeight: '600', margin: 0 }}>
                    We don't just educate children we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime.
                  </p>
                </div>
                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: '750',
                    color: '#c9a84c'
                  }}
                >
                  <Sparkles size={16} />
                  <span>Curiosity, Confidence &amp; Happy Memories</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE PROMISE FAMILIES */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
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
                COMMITMENT TO FAMILIES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {PROMISES.map((promise, index) => (
              <RevealOnScroll key={index} delay={index * 35}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px 24px',
                    borderRadius: '20px',
                    backgroundColor: '#FFFDF7',
                    border: '1.5px solid #ffede4',
                    boxShadow: '0 4px 14px rgba(114, 16, 36, 0.02)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#1e293b', fontWeight: '600' }}>
                    {promise}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVERY CHILD IS UNIQUE & A PARTNERSHIP WITH PARENTS */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}
          >
            <RevealOnScroll>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '28px',
                  padding: '38px 32px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 8px 30px rgba(114, 16, 36, 0.03)',
                  height: '100%'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    backgroundColor: '#fff1f2',
                    color: '#721024',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Smile size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '24px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '16px'
                  }}
                >
                  Every Child Is Unique
                </h3>
                <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', margin: 0 }}>
                  Children do not all learn, communicate or gain confidence in the same way. Our role is to observe, listen and create the right opportunities for each child to participate and progress. We celebrate small steps because those small steps often become the foundations of lifelong confidence.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '28px',
                  padding: '38px 32px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 8px 30px rgba(114, 16, 36, 0.03)',
                  height: '100%'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Users size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '24px',
                    fontWeight: '850',
                    color: '#1e293b',
                    marginBottom: '16px'
                  }}
                >
                  A Partnership With Parents
                </h3>
                <p style={{ fontSize: '16.5px', lineHeight: 1.78, color: '#475569', margin: 0 }}>
                  Trust grows through communication. We value parents' knowledge of their children and aim to build a respectful partnership from the first enquiry onwards. Regular communication helps nursery and home work together around each child's routines, interests, development and wellbeing.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES & FACILITIES */}
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
                SERVICES &amp; FACILITIES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: 0
                }}
              >
                Everything Your Child Needs to Flourish
              </h2>
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
            <RevealOnScroll>
              <div
                style={{
                  background: '#FFFDF7',
                  borderRadius: '28px',
                  padding: '38px 32px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 8px 30px rgba(114, 16, 36, 0.03)',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '26px' }}>🌟</span>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  {SERVICES_LIST.map((srv, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px' }}>
                      <CheckCircle2 size={16} color="#721024" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', fontWeight: '650', color: '#334155', lineHeight: 1.5 }}>
                        {srv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Facilities Card */}
            <RevealOnScroll delay={100}>
              <div
                style={{
                  background: '#FFFDF7',
                  borderRadius: '28px',
                  padding: '38px 32px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 8px 30px rgba(114, 16, 36, 0.03)',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '26px' }}>🏠</span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#721024',
                      margin: 0
                    }}
                  >
                    Our Facilities
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  {FACILITIES_LIST.map((fac, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px' }}>
                      <CheckCircle2 size={16} color="#721024" style={{ marginTop: '3px', flexShrink: 0 }} />
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
