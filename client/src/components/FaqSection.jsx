import React, { useState, useRef } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Phone } from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function FaqSection({ onBookVisitClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIdx, setOpenIdx] = useState(0);
  const faqRef = useRef(null);
  const { progress } = useSectionScroll(faqRef);

  const faqs = [
    {
      q: "Where is Just Like Home Nursery located in Ajman?",
      a: "We are conveniently located at Villa No. 47, Al Rashidiya 2, Ajman. Our prime villa setting provides a tranquil, secure, and easily accessible location for families living across Ajman and neighboring communities."
    },
    {
      q: "What learning approach does the nursery follow?",
      a: "Our early-years education follows the British Early Years Foundation Stage (EYFS) framework, combining purposeful play, sensory exploration, creativity, and age-appropriate phonics and numeracy. We also incorporate daily Arabic language learning and cultural experiences."
    },
    {
      q: "What age groups do you accept?",
      a: "We warmly welcome little ones from 45 days old up to 4+ years of age. Children are placed into age-tailored environments: Early Explorers (Infant), Curious Learners (Toddler), Confident Preschoolers (Preschool), and School-Ready Learners."
    },
    {
      q: "Are full-day and half-day care options available?",
      a: "Yes. We offer flexible attendance plans including Morning Sessions (8:00 AM – 1:00 PM), Extended Care (until 3:00 PM), and Full-Day Care (7:30 AM – 5:30 PM). Our team will help you choose the arrangement that best accommodates your family's routine."
    },
    {
      q: "What safety, hygiene, and medical measures are in place?",
      a: "Safety is our core foundation. We feature comprehensive 24/7 CCTV surveillance throughout all rooms and outdoor areas, an in-house first-aid clinic with certified medical protocols, scheduled visiting doctor consultations, biometric visitor control, and hospital-grade sanitization procedures."
    },
    {
      q: "How can I arrange a nursery visit or tour?",
      a: "We warmly invite you to experience our nursery firsthand! You can book a visit directly using the 'Book a Visit' button on this website, call us at 050 200 5346, or send us a WhatsApp message. Our admissions director will be delighted to guide you through our classrooms."
    },
    {
      q: "Do you organize holiday and summer camps?",
      a: "Yes! We run exciting seasonal camp programs during winter, spring, and summer school holidays featuring themed arts & crafts, water play, music, storytelling, sensory science, and physical development activities."
    },
    {
      q: "How do educators communicate with parents about child progress?",
      a: "We believe in a close partnership with families. Parents receive ongoing updates regarding daily meals, naps, moods, and learning milestones, alongside dedicated parent-teacher meetings and prompt WhatsApp support."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section 
      id="faq" 
      ref={faqRef}
      className="section-padding bg-cream perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <HelpCircle size={14} /> COMMON QUESTIONS
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              Frequently Asked <span style={{ color: '#7b1127' }}>Questions</span>
            </h2>
            <p className="section-subtitle">
              Find answers to commonly asked questions about our nursery curriculum, timings, safety, and admissions.
            </p>

            {/* Search Box */}
            <div style={{
              position: 'relative',
              maxWidth: '500px',
              margin: '2rem auto 0'
            }}>
              <Search size={18} style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#0284c7'
              }} />
              <input
                type="text"
                placeholder="Search questions (e.g. CCTV, hours, ages, EYFS)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.25rem 0.9rem 3.25rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(2, 132, 199, 0.25)',
                  backgroundColor: '#ffffff',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxShadow: '0 4px 15px rgba(2, 132, 199, 0.06)'
                }}
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* FAQ Accordion List */}
        <RevealOnScroll animation="fade-up" delay={150}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              border: '1px solid rgba(123, 17, 39, 0.08)'
            }}>
              <p style={{ color: '#6b7280', fontSize: '1rem' }}>
                No matching questions found for "{searchTerm}". Have a specific inquiry?
              </p>
              <div style={{ marginTop: '1rem' }}>
                <button onClick={onBookVisitClick} className="btn-primary" style={{ fontSize: '0.88rem' }}>
                  Ask Our Team Directly
                </button>
              </div>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1.25rem',
                    border: isOpen ? '1.5px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.08)',
                    boxShadow: isOpen ? '0 10px 25px rgba(70, 7, 19, 0.06)' : '0 2px 6px rgba(0,0,0,0.02)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.35rem 1.75rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem'
                    }}
                  >
                    <span style={{
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      color: isOpen ? '#7b1127' : '#3d050f',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#e0f2fe' : '#fdfbf7',
                      color: isOpen ? '#0284c7' : '#6b7280',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.75rem 1.5rem',
                      color: '#4b5563',
                      fontSize: '0.96rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid #f9f5f0',
                      paddingTop: '1rem'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
        </RevealOnScroll>

        {/* Quick Contact Box */}
        <RevealOnScroll animation="fade-up" delay={200}>
        <div style={{
          backgroundColor: '#f8fafc',
          borderRadius: '1.5rem',
          padding: '2rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          border: '1.5px solid rgba(2, 132, 199, 0.2)',
          boxShadow: '0 8px 24px rgba(2, 132, 199, 0.05)'
        }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', color: '#460713', fontFamily: 'var(--font-heading)', marginBottom: '0.2rem' }}>
              Still have questions about your child's care?
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#6b7280' }}>
              We are always here to answer your questions and welcome you for a warm cup of tea and a tour.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="tel:0502005346"
              className="btn-secondary"
              style={{ fontSize: '0.86rem', padding: '0.65rem 1.25rem' }}
            >
              <Phone size={15} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20have%20a%20question%20about%20your%20nursery."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '0.86rem', padding: '0.65rem 1.25rem' }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
