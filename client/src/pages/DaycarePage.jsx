import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import { 
  Clock, Sun, Moon, Heart, MessageCircle, Calendar, 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';

export default function DaycarePage() {
  useEffect(() => {
    document.title = "Full-Day & Half-Day Daycare in Ajman | Just Like Home";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore nurturing full-day and half-day nursery care in Ajman, combining safe routines, play-based learning, rest and parent communication.");
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to check availability for full-day and half-day care options at Just Like Home Nursery."
  );

  return (
    <div className="daycare-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="FULL-DAY & HALF-DAY CARE · FLEXIBLE CARE SEARCH INTENT"
        badgeIcon={Clock}
        title="Flexible Care With a Consistent Sense of Belonging"
        description="Families have different schedules, but every child needs consistency, reassurance and meaningful experiences throughout the day. Our full-day and half-day options are designed to provide a caring routine while supporting learning, play, rest and social development."
        image="/images/hero-about.jpg"
        imageAlt="Full-day and half-day daycare at Just Like Home Nursery"
        primaryCtaText="Check Availability"
        primaryLink="/contact"
        secondaryCtaText="Explore Programs"
        secondaryLink="/programs"
        whatsappText="Hello, I would like to check availability for full-day and half-day care options at Just Like Home Nursery."
      />

      {/* 2. THREE CORE SECTIONS: A BALANCED NURSERY DAY / CARE THAT SUPPORTS DEVELOPMENT / KEEPING PARENTS CONNECTED */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            <RevealOnScroll>
              <div style={{
                background: '#FFFDF7',
                borderRadius: '24px',
                padding: '36px 30px',
                border: '1.5px solid #ffede4',
                boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Sun size={26} />
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#1e293b', marginBottom: '14px' }}>
                  A Balanced Nursery Day
                </h2>
                <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Depending on the child's program and attendance hours, the day may include welcome routines, child-led play, guided activities, stories and music, physical movement, outdoor experiences, meals or snacks, quiet time and preparation for home.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={50}>
              <div style={{
                background: '#FFFDF7',
                borderRadius: '24px',
                padding: '36px 30px',
                border: '1.5px solid #ffede4',
                boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Heart size={26} />
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#1e293b', marginBottom: '14px' }}>
                  Care That Supports Development
                </h2>
                <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  Care routines are not separate from learning. Conversations during meals, tidying after play, choosing an activity and managing personal belongings all help children build communication, responsibility and independence.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div style={{
                background: '#FFFDF7',
                borderRadius: '24px',
                padding: '36px 30px',
                border: '1.5px solid #ffede4',
                boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <MessageCircle size={26} />
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#1e293b', marginBottom: '14px' }}>
                  Keeping Parents Connected
                </h2>
                <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                  We understand that trust matters when children spend part of their day away from home. Regular parent communication helps families remain informed and gives educators useful insight into routines, preferences and changes that may affect the child.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. CHOOSE THE RIGHT OPTION */}
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
                <Clock size={30} />
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '900', color: '#721024', marginBottom: '18px' }}>
                Choose the Right Option
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#475569', maxWidth: '720px', margin: '0 auto 32px' }}>
                Contact our team to confirm current operating hours, available attendance options, age eligibility and fees. We will help you identify an arrangement that suits your child and family.
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
                  <span>CHECK AVAILABILITY</span>
                </Link>
                <a 
                  href={`https://wa.me/971502005346?text=${whatsappMessage}`}
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

      {/* 4. CLOSING CTA BANNER: CHECK AVAILABILITY | WHATSAPP US */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1.25 }}>
              Flexible Care With a Consistent Sense of Belonging
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Our full-day and half-day options are designed to provide a caring routine while supporting learning, play, rest and social development.
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
                <span>CHECK AVAILABILITY</span>
              </Link>
              <a 
                href={`https://wa.me/971502005346?text=${whatsappMessage}`}
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
