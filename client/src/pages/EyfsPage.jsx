import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  MessageCircle, Heart, Dumbbell, BookOpen, Calculator, 
  Globe2, Palette, Sparkles, Calendar, ArrowRight, Compass, CheckCircle2 
} from 'lucide-react';

const DEVELOPMENT_AREAS = [
  {
    title: 'Communication & Language',
    desc: 'Conversations, stories, rhymes and responsive interactions help children listen, understand and express themselves.',
    icon: MessageCircle
  },
  {
    title: 'Personal, Social & Emotional Development',
    desc: 'Warm relationships and group experiences help children develop confidence, emotional awareness, cooperation and a sense of belonging.',
    icon: Heart
  },
  {
    title: 'Physical Development',
    desc: 'Indoor and outdoor movement, fine-motor activities and everyday self-care strengthen coordination and independence.',
    icon: Dumbbell
  },
  {
    title: 'Literacy',
    desc: 'Stories, sounds, marks, letters and playful phonics experiences support early reading and writing foundations.',
    icon: BookOpen
  },
  {
    title: 'Mathematics',
    desc: 'Children explore counting, quantities, shapes, patterns, comparison and problem-solving in meaningful play.',
    icon: Calculator
  },
  {
    title: 'Understanding the World',
    desc: 'Hands-on exploration encourages children to observe, question and connect with people, places, nature and everyday life.',
    icon: Globe2
  },
  {
    title: 'Expressive Arts & Design',
    desc: 'Art, music, movement, role play and imaginative experiences give children ways to create and communicate ideas.',
    icon: Palette
  }
];

export default function EyfsPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "EYFS Nursery in Ajman | Learning Through Play";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover the EYFS-inspired, play-based learning approach at Just Like Home Nursery in Ajman, supporting communication, confidence, creativity and development.");
    }
  }, []);

  return (
    <div className="eyfs-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="EYFS & LEARNING APPROACH · EXPLAIN HOW LEARNING HAPPENS"
        badgeIcon={Sparkles}
        title="Learning Through Play, Discovery and Everyday Experiences"
        description={[
          "Young children learn by doing. They learn when they move, talk, listen, touch, imagine, repeat, experiment and share experiences with others.",
          "Our early-years approach uses purposeful play and age-appropriate experiences to support the whole child. Educators observe children's interests and development, then create opportunities that help them take their next step with confidence."
        ]}
        image="/images/hero-eyfs.jpg"
        imageAlt="Learning Through Play at Just Like Home Nursery"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Explore Our Activities"
        primaryLink="/nursery-activities"
        secondaryCtaText="Book a Nursery Visit"
        onPrimaryClick={undefined}
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to learn more about your EYFS play-based learning approach."
      />

      {/* 2. THE AREAS OF DEVELOPMENT WE SUPPORT */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
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
                AREAS OF GROWTH
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
                The Areas of Development We Support
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '26px'
            }}
          >
            {DEVELOPMENT_AREAS.map((area, index) => {
              const Icon = area.icon;
              return (
                <RevealOnScroll key={index} delay={index * 35}>
                  <div
                    style={{
                      background: '#FFFDF7',
                      borderRadius: '24px',
                      padding: '34px 28px',
                      border: '1.5px solid #ffede4',
                      boxShadow: '0 8px 24px rgba(114, 16, 36, 0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        backgroundColor: '#FFF1F2',
                        color: '#721024',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px'
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                        fontSize: '21px',
                        fontWeight: '850',
                        color: '#721024',
                        marginBottom: '12px'
                      }}
                    >
                      {area.title}
                    </h3>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {area.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MORE THAN A LESSON & OBSERVATION AND INDIVIDUAL SUPPORT */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
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
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
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
                  <Sparkles size={26} />
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
                  More Than a Lesson
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Learning is woven throughout the nursery day. Tidying can build responsibility. Sharing a story can strengthen language. Outdoor play can develop coordination. Preparing a simple activity can encourage patience and practical life skills. These everyday experiences help children connect learning with real life.
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
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
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
                  <Heart size={26} />
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
                  Observation and Individual Support
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Children develop at different rates. By observing their participation, interests and emerging abilities, educators can offer appropriate encouragement without turning childhood into pressure. Families are kept connected through regular communication about nursery experiences and progress.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <LuxuryClosingCta
        badge="LEARNING IN ACTION"
        title="Learning Through Play, Discovery and Everyday Experiences"
        subtitle="Our early-years approach uses purposeful play and age-appropriate experiences to support the whole child."
        primaryText="EXPLORE OUR ACTIVITIES"
        primaryLink="/nursery-activities"
        secondaryText="BOOK A NURSERY VISIT"
        secondaryLink="/contact"
        onPrimaryClick={undefined}
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
