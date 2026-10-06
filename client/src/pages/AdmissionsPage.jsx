import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
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
    a: 'Call or WhatsApp 050 200 5346 with your child\'s age and preferred start date.'
  }
];

export default function AdmissionsPage() {
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
    <div className="admissions-page" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F', minHeight: '100vh' }}>
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
                <FileText size={14} />
                ADMISSIONS · CLEAR ENQUIRY-TO-ENROLMENT PATHWAY
              </span>

              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: '#721024',
                lineHeight: 1.2,
                margin: '0 0 24px 0'
              }}>
                A Warm Welcome Starts Here
              </h1>

              <div style={{ fontSize: '17.5px', lineHeight: 1.8, color: '#475569', margin: '0 auto 36px', maxWidth: '780px' }}>
                <p style={{ margin: 0 }}>
                  Choosing a nursery is personal. We want families to have the opportunity to ask questions, understand the environment and decide whether Just Like Home Nursery is the right fit for their child.
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
                  <span>BOOK A VISIT</span>
                </Link>
                <Link
                  to="/contact"
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
                  <span>START AN ENQUIRY</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. YOUR ADMISSIONS JOURNEY */}
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
                STEP-BY-STEP PROCESS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#721024', margin: 0 }}>
                Your Admissions Journey
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {JOURNEY_STEPS.map((stepItem, index) => (
              <RevealOnScroll key={index} delay={index * 40}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '22px',
                  padding: '26px 28px',
                  borderRadius: '24px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    backgroundColor: '#fff1f2',
                    color: '#721024',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '900',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    {stepItem.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '850', color: '#1e293b', margin: '0 0 8px 0' }}>
                      {stepItem.title}
                    </h3>
                    <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INFORMATION TO SHARE IN YOUR ENQUIRY */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '48px 36px',
              border: '1.5px solid rgba(114, 16, 36, 0.12)',
              boxShadow: '0 10px 30px rgba(114, 16, 36, 0.04)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
                  ENQUIRY DETAILS
                </span>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: '900', color: '#721024', margin: 0 }}>
                  Information to Share in Your Enquiry
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px'
              }}>
                {ENQUIRY_INFO_POINTS.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '16px 18px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFDF7',
                    border: '1px solid #ffede4'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <CheckCircle2 size={15} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#334155', lineHeight: 1.5 }}>
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
      <section style={{ padding: '0 20px 80px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{
              background: '#fffbf5',
              borderRadius: '24px',
              padding: '38px 32px',
              border: '1.5px solid #fed7aa',
              textAlign: 'center'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '18px',
                backgroundColor: '#ffedd5',
                color: '#c2410c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <AlertCircle size={28} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '850', color: '#721024', marginBottom: '14px' }}>
                Documents &amp; Fees
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', margin: 0, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                The exact registration documents, fee schedule, payment terms, refund policy and required medical information must be supplied and approved by nursery management before they are published on this page.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED ADMISSIONS QUESTIONS */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
                FAQS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', color: '#721024', margin: 0 }}>
                Frequently Asked Admissions Questions
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {ADMISSION_FAQS.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 40}>
                <div 
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#FFFDF7',
                    border: '1.5px solid #ffede4',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <div style={{
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: '800',
                      color: '#1e293b',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <HelpCircle size={20} style={{ color: '#721024', flexShrink: 0 }} />
                      {faq.q}
                    </h3>
                    <div style={{ color: '#721024' }}>
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  {openFaq === index && (
                    <div style={{
                      padding: '0 24px 22px 56px',
                      fontSize: '15.5px',
                      lineHeight: 1.7,
                      color: '#475569'
                    }}>
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER: START AN ENQUIRY | BOOK A VISIT */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <RevealOnScroll>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1.25 }}>
              A Warm Welcome Starts Here
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, opacity: 0.95, margin: '0 auto 36px', maxWidth: '680px' }}>
              Choosing a nursery is personal. We want families to have the opportunity to ask questions, understand the environment and decide whether Just Like Home Nursery is the right fit for their child.
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
                <span>BOOK A VISIT</span>
              </Link>
              <Link
                to="/contact"
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
                <span>START AN ENQUIRY</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
