import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Sun, Sparkles, Palette, Trees, Music, Calendar, 
  Users, Award, MessageCircle, ArrowRight, CheckCircle2 
} from 'lucide-react';

const CAMP_INCLUSIONS = [
  {
    title: 'Arts, crafts and creative projects',
    icon: Palette
  },
  {
    title: 'Indoor and outdoor movement',
    icon: Trees
  },
  {
    title: 'Sensory and discovery activities',
    icon: Sparkles
  },
  {
    title: 'Stories, music and rhymes',
    icon: Music
  },
  {
    title: 'Theme days and celebrations',
    icon: Calendar
  },
  {
    title: 'Teamwork and social play',
    icon: Users
  },
  {
    title: 'Practical life and independence activities',
    icon: Award
  }
];

export default function CampsPage({ onBookVisitClick }) {
  useEffect(() => {
    document.title = "Holiday & Summer Camp in Ajman | Just Like Home Nursery";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover fun, nurturing holiday and summer camp experiences in Ajman with creative activities, movement, exploration, stories and social play.");
    }
  }, []);

  const campWhatsapp = "Hello, I would like to ask about the upcoming holiday and summer camps at Just Like Home Nursery.";

  return (
    <div className="camps-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="HOLIDAY & SUMMER CAMPS · SEASONAL ENROLMENT"
        badgeIcon={Sun}
        title="Happy Holidays Filled With Play, Creativity and Discovery"
        description={[
          "School holidays can be a wonderful time for children to try something new, make friends and stay engaged in a safe, familiar environment.",
          "Our seasonal camp programs bring together creative projects, stories, music, movement, sensory experiences, themed activities and age-appropriate learning."
        ]}
        image="/images/hero.jpg"
        imageAlt="Holiday and Summer Camps at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Ask About the Next Camp"
        primaryLink="/contact"
        secondaryCtaText="Contact Us"
        secondaryLink="/contact"
        whatsappText={campWhatsapp}
      />

      {/* 2. WHAT CAMP DAYS MAY INCLUDE */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
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
                ACTIVITIES &amp; EXPERIENCES
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
                What Camp Days May Include
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}
          >
            {CAMP_INCLUSIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={index} delay={index * 30}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '24px 26px',
                      borderRadius: '22px',
                      backgroundColor: '#FFFDF7',
                      border: '1.5px solid #ffede4',
                      boxShadow: '0 4px 16px rgba(114, 16, 36, 0.02)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
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
                        flexShrink: 0
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1e293b',
                        lineHeight: 1.45
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CURRENT CAMP INFORMATION */}
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
                <Calendar size={30} />
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
                Current Camp Information
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 32px' }}>
                Camp themes, dates, age eligibility, timings, inclusions and fees may change each season. Contact the nursery for the latest program and availability.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
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
                    gap: '8px',
                    padding: '14px 30px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#059669',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '1.5px solid #059669',
                    transition: 'transform 0.2s ease'
                  }}
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
