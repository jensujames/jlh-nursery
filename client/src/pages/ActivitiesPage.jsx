import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  BookOpen, Calculator, Globe2, Palette, Sparkles, 
  Music, Trees, Award, Calendar, Bus, ArrowRight, Camera, Compass 
} from 'lucide-react';

const ACTIVITIES = [
  {
    title: 'Phonics & Literacy',
    desc: 'Sounds, songs, stories, conversation and mark-making help develop listening, vocabulary and early literacy.',
    icon: BookOpen
  },
  {
    title: 'Early Numeracy',
    desc: 'Counting, sorting, matching, shapes, patterns and practical games make mathematical ideas easier to understand.',
    icon: Calculator
  },
  {
    title: 'Arabic Language Learning',
    desc: 'Age-appropriate Arabic experiences introduce children to language through engaging activities and familiar repetition.',
    icon: Globe2
  },
  {
    title: 'Creative Arts & Crafts',
    desc: 'Painting, drawing, collage and making give children freedom to express ideas while developing fine-motor skills.',
    icon: Palette
  },
  {
    title: 'Sensory & Exploration',
    desc: 'Hands-on play invites children to investigate textures, materials, movement, cause and effect.',
    icon: Sparkles
  },
  {
    title: 'Stories, Rhymes & Music',
    desc: 'Books, songs and rhythm strengthen memory, listening, language and joyful participation.',
    icon: Music
  },
  {
    title: 'Physical & Outdoor Play',
    desc: 'Movement supports coordination, strength, balance, confidence and healthy habits.',
    icon: Trees
  },
  {
    title: 'Life Skills & Independence',
    desc: 'Practical routines encourage responsibility, self-help skills, good manners and confidence.',
    icon: Award
  },
  {
    title: 'Theme Days & Celebrations',
    desc: 'Special experiences bring learning to life and create happy shared memories.',
    icon: Calendar
  },
  {
    title: 'Educational Trips & Outings',
    desc: 'Where offered, carefully planned outings extend children\'s understanding beyond the classroom.',
    icon: Bus
  }
];

export default function ActivitiesPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "Nursery Activities in Ajman | Play, Create & Explore";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore phonics, numeracy, Arabic, sensory play, art, music, stories, outdoor activities and life skills at Just Like Home Nursery in Ajman.");
    }
  }, []);

  return (
    <div className="activities-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="ACTIVITIES · SHOW THE RICHNESS OF THE NURSERY EXPERIENCE"
        badgeIcon={Sparkles}
        title="Every Day Brings a New Way to Discover"
        description="Children learn best when experiences feel meaningful, active and enjoyable. Our nursery activities encourage curiosity, communication, imagination, movement and growing independence."
        image="/images/activity-creative-play.jpg"
        imageAlt="Activities at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="View Our Gallery"
        primaryLink="/gallery"
        secondaryCtaText="Book a Visit"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to learn more about nursery activities."
      />

      {/* 2. THE 10 ACTIVITIES */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '26px'
            }}
          >
            {ACTIVITIES.map((act, index) => {
              const Icon = act.icon;
              return (
                <RevealOnScroll key={index} delay={index * 30}>
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
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                        fontSize: '21px',
                        fontWeight: '850',
                        color: '#721024',
                        marginBottom: '12px'
                      }}
                    >
                      {act.title}
                    </h2>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {act.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SEE LEARNING IN ACTION */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '30px',
                padding: 'clamp(36px, 5vw, 54px) clamp(24px, 4vw, 44px)',
                border: '1.5px solid #ffede4',
                boxShadow: '0 12px 36px rgba(114, 16, 36, 0.04)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '18px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <Camera size={30} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 38px)',
                  fontWeight: '900',
                  color: '#721024',
                  marginBottom: '18px'
                }}
              >
                See Learning in Action
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 32px' }}>
                Visit our gallery for a closer look at nursery activities, spaces and special moments. Images should always be current, authentic and used with appropriate parent or guardian consent.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/gallery"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 30px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Camera size={18} />
                  <span>VIEW OUR GALLERY</span>
                </Link>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 30px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#721024',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '1.5px solid #721024',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Calendar size={18} />
                  <span>BOOK A VISIT</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="NURSERY ACTIVITIES"
        title="Every Day Brings a New Way to Discover"
        subtitle="Children learn best when experiences feel meaningful, active and enjoyable. Our nursery activities encourage curiosity, communication, imagination, movement and growing independence."
        primaryText="VIEW OUR GALLERY"
        primaryLink="/gallery"
        secondaryText="BOOK A VISIT"
        secondaryLink="/contact"
        onPrimaryClick={undefined}
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
