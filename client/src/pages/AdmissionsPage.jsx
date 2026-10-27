import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  FileText, Calendar, Phone, MessageCircle, HelpCircle, 
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp, AlertCircle 
} from 'lucide-react';

const JOURNEY_STEPS = [
  {
    step: '1',
    title: 'Send an Enquiry',
    desc: 'Contact us by phone, WhatsApp or the website form and share your child\'s age and preferred attendance option.'
  },
  {
    step: '2',
    title: 'Speak With Our Team',
    desc: 'We will discuss your needs, current availability and the most suitable program pathway.'
  },
  {
    step: '3',
    title: 'Book a Nursery Visit',
    desc: 'Meet the team, explore the environment and ask questions about the daily routine, learning and care.'
  },
  {
    step: '4',
    title: 'Complete Registration',
    desc: 'If you choose to proceed, our team will explain the required forms, documents, fees and next steps.'
  },
  {
    step: '5',
    title: 'Prepare for the First Day',
    desc: 'We will guide you on settling-in expectations and anything your child should bring.'
  }
];

const ENQUIRY_INFO_POINTS = [
  'Parent or guardian name',
  'Child\'s name and age/date of birth',
  'Preferred start date',
  'Full-day or half-day interest',
  'Preferred contact number',
  'Any initial care, health or learning information relevant to the enquiry'
];

const ADMISSION_FAQS = [
  {
    q: 'What ages do you accept?',
    a: 'Please contact our team for the nursery\'s current licensed age range and available groups.'
  },
  {
    q: 'Do you offer full-day and half-day options?',
    a: 'Yes. Availability and timings may vary, so our team will confirm the current options during your enquiry.'
  },
  {
    q: 'Can I visit before registering?',
    a: 'Yes. We encourage parents to book a visit, meet the team and experience the environment before making a decision.'
  },
  {
    q: 'How do I check availability?',
    a: 'Call or WhatsApp +971 50 200 5346 with your child\'s age and preferred start date.'
  }
];

export default function AdmissionsPage({ onBookVisitClick }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Nursery Admissions in Ajman | Book a Visit";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Start your child's journey at Just Like Home Nursery in Ajman. Ask about availability, book a nursery tour and receive guidance through the admissions process.");
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="admissions-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="ADMISSIONS · CLEAR ENQUIRY-TO-ENROLMENT PATHWAY"
        badgeIcon={FileText}
        title="A Warm Welcome Starts Here"
        description="Choosing a nursery is personal. We want families to have the opportunity to ask questions, understand the environment and decide whether Just Like Home Nursery is the right fit for their child."
        image="/media/school-readiness/school-readiness-4.jpg"
        imageAlt="Admissions at Just Like Home Nursery Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Book a Visit"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Start an Enquiry"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to enquire about admissions for my child."
      />

      {/* 2. YOUR ADMISSIONS JOURNEY */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
                STEP-BY-STEP PROCESS
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
                Your Admissions Journey
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                A straightforward, supportive pathway designed to help you make the best decision for your family.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {JOURNEY_STEPS.map((stepItem, index) => {
              const formattedStep = String(index + 1).padStart(2, '0');
              return (
                <RevealOnScroll key={index} delay={index * 35}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.90)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      borderRadius: '2rem',
                      padding: '2rem 2.2rem',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px) scale(1.008)';
                      e.currentTarget.style.boxShadow = '0 24px 50px rgba(114, 16, 36, 0.12), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                      e.currentTarget.style.borderColor = '#721024';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                    <div className="luxury-icon-box luxury-icon-burgundy" style={{ fontWeight: '900', fontSize: '20px' }}>
                      {formattedStep}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '20px',
                          fontWeight: '850',
                          color: '#721024',
                          margin: '0 0 8px 0',
                          lineHeight: 1.3
                        }}
                      >
                        {stepItem.title}
                      </h3>
                      <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INFORMATION TO SHARE IN YOUR ENQUIRY */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)'
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '2.5rem',
                padding: 'clamp(38px, 5vw, 56px) clamp(24px, 4vw, 48px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 16px 44px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
              
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
                  ENQUIRY DETAILS
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(26px, 3.5vw, 38px)',
                    fontWeight: '900',
                    color: '#721024',
                    margin: 0
                  }}
                >
                  Information to Share in Your Enquiry
                </h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px'
                }}
              >
                {ENQUIRY_INFO_POINTS.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '18px 20px',
                      borderRadius: '1.25rem',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid rgba(114, 16, 36, 0.08)',
                      boxShadow: '0 4px 14px rgba(74, 14, 26, 0.02)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#721024';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
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
                        flexShrink: 0,
                        marginTop: '1px'
                      }}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: '650', color: '#334155', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. DOCUMENTS & FEES */}
      <section style={{ padding: '0 20px clamp(48px, 6vw, 72px)', backgroundColor: '#FFFDF9' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: '2.5rem',
                padding: '40px 36px',
                border: '1.5px solid rgba(245, 158, 11, 0.3)',
                boxShadow: '0 16px 40px rgba(217, 119, 6, 0.06)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #d97706, #f59e0b)' }} />
              
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '1.15rem',
                  backgroundColor: '#fffbeb',
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '2px solid rgba(217, 119, 6, 0.22)',
                  boxShadow: '0 8px 18px rgba(217, 119, 6, 0.1)'
                }}
              >
                <AlertCircle size={28} />
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
                Documents &amp; Fees
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0, maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
                The exact registration documents, fee schedule, payment terms, refund policy and required medical information must be supplied and approved by nursery management before they are published on this page.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED ADMISSIONS QUESTIONS */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderTop: '1px solid #f1f5f9' 
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
                FAQS
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
                Frequently Asked Admissions Questions
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ADMISSION_FAQS.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 35}>
                <div 
                  style={{
                    borderRadius: '1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: openFaq === index ? '1.5px solid #721024' : '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 10px 30px rgba(74, 14, 26, 0.04)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <div
                    style={{
                      padding: '24px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '17.5px',
                        fontWeight: '850',
                        color: openFaq === index ? '#721024' : '#1e293b',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          backgroundColor: openFaq === index ? '#fff1f2' : '#f8fafc',
                          color: '#721024',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <HelpCircle size={18} />
                      </div>
                      {faq.q}
                    </h3>
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
                        flexShrink: 0
                      }}
                    >
                      {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                  {openFaq === index && (
                    <div
                      style={{
                        padding: '0 28px 24px 78px',
                        fontSize: '15.5px',
                        lineHeight: 1.7,
                        color: '#475569'
                      }}
                    >
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="NURSERY ADMISSIONS"
        title="A Warm Welcome Starts Here"
        subtitle="Choosing a nursery is personal. We want families to have the opportunity to ask questions, understand the environment and decide whether Just Like Home Nursery is the right fit for their child."
        primaryText="BOOK A VISIT"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="START AN ENQUIRY"
        secondaryLink="/contact"
        tagline="Where Little Hearts Feel at Home."
      />
    </div>
  );
}
