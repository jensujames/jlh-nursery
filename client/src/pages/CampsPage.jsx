import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
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

export default function CampsPage() {
  useEffect(() => {
    document.title = "Holiday & Summer Camp in Ajman | Just Like Home Nursery";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover fun, nurturing holiday and summer camp experiences in Ajman with creative activities, movement, exploration, stories and social play.");
    }
  }, []);

  return (
    <div className="camps-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
      {/* 1. HERO & INTRODUCTION */}
      <section className="page-hero-section" style={{ padding: '80px 20px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                marginBottom: '20px'
              }}>
                <Sun size={14} />
                HOLIDAY &amp; SUMMER CAMPS · SEASONAL ENROLMENT
              </span>

              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.2,
                margin: '0 0 24px 0'
              }}>
                Happy Holidays Filled With Play, Creativity and Discovery
              </h1>

              <div style={{ fontSize: '17px', lineHeight: 1.8, color: '#475569', margin: '0 auto 36px' }}>
                <p style={{ marginBottom: '16px' }}>
                  School holidays can be a wonderful time for children to try something new, make friends and stay engaged in a safe, familiar environment.
                </p>
                <p style={{ margin: 0 }}>
                  Our seasonal camp programs bring together creative projects, stories, music, movement, sensory experiences, themed activities and age-appropriate learning.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    backgroundColor: '#721024',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Calendar size={18} />
                  <span>ASK ABOUT THE NEXT CAMP</span>
                </Link>
                <a 
                  href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20holiday%20and%20summer%20camps%20at%20Just%20Like%20Home%20Nursery." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#721024',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '1.5px solid #721024',
                    transition: 'all 0.25s ease'
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

      {/* 2. WHAT CAMP DAYS MAY INCLUDE */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                marginBottom: '14px'
              }}>
                ACTIVITIES &amp; EXPERIENCES
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#721024', margin: 0 }}>
                What Camp Days May Include
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px'
          }}>
            {CAMP_INCLUSIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={index} delay={index * 35}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '22px 24px',
                    borderRadius: '20px',
                    backgroundColor: '#FFFDF7',
                    border: '1.5px solid #ffede4',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s ease'
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={22} />
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1e293b',
                      lineHeight: 1.45
                    }}>
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
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '48px 36px',
              border: '1.5px solid rgba(114, 16, 36, 0.12)',
              boxShadow: '0 10px 30px rgba(114, 16, 36, 0.04)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '20px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Calendar size={30} />
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '900', color: '#721024', marginBottom: '18px' }}>
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
                    backgroundColor: '#721024',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Calendar size={18} />
                  <span>ASK ABOUT THE NEXT CAMP</span>
                </Link>
                <a 
                  href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20holiday%20and%20summer%20camps%20at%20Just%20Like%20Home%20Nursery." 
                  target="_blank" 
                  rel="noopener noreferrer"
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
                    transition: 'all 0.25s ease'
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
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1.25 }}>
              Happy Holidays Filled With Play, Creativity and Discovery
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              School holidays can be a wonderful time for children to try something new, make friends and stay engaged in a safe, familiar environment.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontWeight: '800',
                  fontSize: '15.5px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Calendar size={18} />
                <span>ASK ABOUT THE NEXT CAMP</span>
              </Link>
              <a 
                href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20holiday%20and%20summer%20camps%20at%20Just%20Like%20Home%20Nursery." 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '15.5px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.25s ease'
                }}
              >
                <MessageCircle size={18} />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
