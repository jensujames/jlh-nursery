import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import useSEO from '../hooks/useSEO';
import { 
  Sun, Sparkles, Palette, Trees, Music, Calendar, 
  Users, Award, MessageCircle, ArrowRight, CheckCircle2,
  Waves, Smile
} from 'lucide-react';

const CAMP_INCLUSIONS = [
  {
    title: 'Arts, crafts and creative projects',
    icon: Palette,
    color: '#d97706',
    gradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
    border: 'rgba(217, 119, 6, 0.22)'
  },
  {
    title: 'Indoor and outdoor movement',
    icon: Trees,
    color: '#059669',
    gradient: 'linear-gradient(90deg, #059669, #10b981)',
    border: 'rgba(5, 150, 105, 0.22)'
  },
  {
    title: 'Sensory and discovery activities',
    icon: Sparkles,
    color: '#0d9488',
    gradient: 'linear-gradient(90deg, #0d9488, #14b8a6)',
    border: 'rgba(13, 148, 136, 0.22)'
  },
  {
    title: 'Stories, music and rhymes',
    icon: Music,
    color: '#e11d48',
    gradient: 'linear-gradient(90deg, #e11d48, #fb7185)',
    border: 'rgba(225, 29, 72, 0.22)'
  },
  {
    title: 'Theme days and celebrations',
    icon: Calendar,
    color: '#721024',
    gradient: 'linear-gradient(90deg, #721024, #F15A29)',
    border: 'rgba(114, 16, 36, 0.22)'
  },
  {
    title: 'Teamwork and social play',
    icon: Users,
    color: '#0284c7',
    gradient: 'linear-gradient(90deg, #0284c7, #38bdf8)',
    border: 'rgba(2, 132, 199, 0.22)'
  },
  {
    title: 'Practical life and independence activities',
    icon: Award,
    color: '#8b5cf6',
    gradient: 'linear-gradient(90deg, #8b5cf6, #a855f7)',
    border: 'rgba(139, 92, 246, 0.22)'
  },
  {
    title: 'Water play and splash exploration',
    icon: Waves,
    color: '#0891b2',
    gradient: 'linear-gradient(90deg, #0891b2, #06b6d4)',
    border: 'rgba(8, 145, 178, 0.22)'
  },
  {
    title: 'Role play and drama adventures',
    icon: Smile,
    color: '#ec4899',
    gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)',
    border: 'rgba(236, 72, 153, 0.22)'
  }
];

export default function CampsPage({ onBookVisitClick }) {
  useSEO({
    title: "Holiday & Summer Camp for Kids in Ajman | Just Like Home Nursery",
    description: "Discover fun, nurturing holiday and summer camp experiences in Ajman with creative activities, movement, exploration, stories and social play.",
    path: "/summer-camp-ajman",
    breadcrumbs: [{ name: "Holiday & Summer Camps", path: "/summer-camp-ajman" }]
  });

  const campWhatsapp = "Hello, I would like to ask about the upcoming holiday and summer camps at Just Like Home Nursery.";

  return (
    <div className="camps-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        title="Happy Holidays Filled With Play, Creativity and Discovery"
        description={[
          "School holidays can be a wonderful time for children to try something new, make friends and stay engaged in a safe, familiar environment.",
          "Our seasonal camp programs bring together creative projects, stories, music, movement, sensory experiences, themed activities and age-appropriate learning."
        ]}
        image="/media/physical-play/physical-8.jpg"
        imageAlt="Holiday and Summer Camps outdoor play at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Ask About the Next Camp"
        primaryLink="/contact"
        secondaryCtaText="Contact Us"
        secondaryLink="/contact"
        whatsappText={campWhatsapp}
      />

      {/* 2. WHAT CAMP DAYS MAY INCLUDE */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
                ACTIVITIES &amp; EXPERIENCES
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
                What Camp Days May Include
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Every holiday session is designed to blend energetic movement, social connection, and curiosity.
              </p>
            </div>
          </RevealOnScroll>

          <div
            className="camp-inclusions-grid"
          >
            {CAMP_INCLUSIONS.map((item, index) => {
              const Icon = item.icon;
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 30}>
                  <div
                    className="luxury-creative-card"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      borderRadius: '2rem',
                      padding: '2rem 1.85rem',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      height: '100%',
                      boxSizing: 'border-box',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: item.gradient }} />
                    <div
                      className="luxury-icon-box"
                      style={{
                        width: '58px',
                        height: '58px',
                        backgroundColor: '#ffffff',
                        color: item.color,
                        border: `2px solid ${item.border}`,
                        boxShadow: `0 8px 18px rgba(114, 16, 36, 0.06)`,
                        flexShrink: 0
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span 
                        style={{ 
                          fontSize: '11.5px', 
                          fontWeight: '800', 
                          letterSpacing: '1px', 
                          color: item.color,
                          display: 'block',
                          marginBottom: '4px'
                        }}
                      >
                        EXPERIENCE {formattedIndex}
                      </span>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '16.5px',
                          fontWeight: '800',
                          color: '#1e293b',
                          lineHeight: 1.4
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CURRENT CAMP INFORMATION */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              className="luxury-creative-card"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '2.5rem',
                padding: 'clamp(40px, 6vw, 60px) clamp(24px, 5vw, 50px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 20px 50px rgba(114, 16, 36, 0.06), 0 2px 12px rgba(255, 255, 255, 0.9) inset',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
              
              <div
                className="luxury-icon-box luxury-icon-burgundy"
                style={{
                  width: '68px',
                  height: '68px',
                  margin: '0 auto 24px'
                }}
              >
                <Calendar size={32} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '900',
                  color: '#721024',
                  marginBottom: '18px'
                }}
              >
                Current Camp Information
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 36px' }}>
                Camp themes, dates, age eligibility, timings, inclusions and fees may change each season. Contact the nursery for the latest program and availability.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 34px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#FAF5EB',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Calendar size={18} />
                  <span>ASK ABOUT THE NEXT CAMP</span>
                </Link>
                <a 
                  href={`https://wa.me/971502005346?text=${encodeURIComponent(campWhatsapp)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 34px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#059669',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '2px solid #059669',
                    boxShadow: '0 6px 18px rgba(5, 150, 105, 0.12)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <MessageCircle size={18} />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="SEASONAL CAMPS"
        title="Happy Holidays Filled With Play, Creativity and Discovery"
        subtitle="School holidays can be a wonderful time for children to try something new, make friends and stay engaged in a safe, familiar environment."
        primaryText="ASK ABOUT THE NEXT CAMP"
        primaryLink="/contact"
        secondaryText="WHATSAPP US"
        whatsappMessage={campWhatsapp}
        onPrimaryClick={undefined}
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
