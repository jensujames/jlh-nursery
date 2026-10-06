import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';
import { getApiUrl } from '../config/api';

const GMB_URL = 'https://share.google/AbZVHOBinruNYkwDg';
const GOOGLE_MAPS_EMBED = 'https://maps.google.com/maps?q=Just+Like+Home+Nursery+Al+Rashidiya+2+Ajman&t=&z=16&ie=UTF8&iwloc=&output=embed';

export default function ContactSection({ onBookVisitClick }) {
  const contactRef = useRef(null);
  const { progress } = useSectionScroll(contactRef);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Direct email delivery to receiver
      fetch('https://formsubmit.co/ajax/nurseryjustlikehome@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Website Inquiry (${formData.subject || 'General'}): ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Name': formData.name,
          'Phone': formData.phone,
          'Email': formData.email || 'Not provided',
          'Subject': formData.subject || 'General Inquiry',
          'Message': formData.message
        })
      }).catch((e) => console.warn('Email dispatch notice:', e));

      // 2. Also record in backend API
      const response = await fetch(getApiUrl('/api/enquiries'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json().catch(() => ({ success: true }));

      if (data.success !== false) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setSubmitted(true);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="section-padding bg-cream-subtle perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <MapPin size={14} /> GET IN TOUCH
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              Come and Experience <br />
              <span style={{ color: '#7b1127' }}>Just Like Home</span>
            </h2>
            <p className="section-subtitle">
              The best way to understand whether a nursery feels right is to experience it in person. Book a visit to meet our educators, explore the environment, and feel the warmth.
            </p>
          </div>
        </RevealOnScroll>

        {/* Contact Info + Form Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          
          {/* Left Column: Contact Cards & Details (ScrollCraft Paradigm #47: Split-Gate Slide L) */}
          <RevealOnScroll animation="fade-left" delay={150}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.25rem',
            transform: `translate3d(${Math.max(-25, Math.min(25, (0.45 - progress) * 35))}px, 0, 0)`,
            transition: 'transform 0.2s ease-out'
          }}>
            
            {/* Address Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(123, 17, 39, 0.08)',
              boxShadow: '0 8px 24px rgba(70, 7, 19, 0.04)',
              display: 'flex',
              gap: '1.25rem'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#fce7eb',
                color: '#7b1127',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#7b1127', letterSpacing: '0.04em' }}>
                  Our Location
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginTop: '0.2rem' }}>
                  Villa No. 47, Al Rashidiya 2
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  Ajman, United Arab Emirates
                </p>
                <div style={{ marginTop: '0.85rem' }}>
                  <a
                    href={GMB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#7b1127',
                      fontWeight: '700',
                      fontSize: '0.86rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(123, 17, 39, 0.08)',
              boxShadow: '0 8px 24px rgba(70, 7, 19, 0.04)',
              display: 'flex',
              gap: '1.25rem'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#15803d', letterSpacing: '0.04em' }}>
                  Call & WhatsApp
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#3d050f', fontFamily: 'var(--font-heading)', marginTop: '0.2rem' }}>
                  050 200 5346
                </h4>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
                  <a
                    href="tel:0502005346"
                    className="btn-primary"
                    style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
                  >
                    <Phone size={13} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20learn%20more."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Hours Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid rgba(123, 17, 39, 0.08)',
              boxShadow: '0 8px 24px rgba(70, 7, 19, 0.04)',
              display: 'flex',
              gap: '1.25rem'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#e0f2fe',
                color: '#0369a1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: '#0369a1', letterSpacing: '0.04em' }}>
                  Email Enquiries
                </div>
                <a
                  href="mailto:nurseryjustlikehome@gmail.com"
                  style={{
                    fontSize: '1.05rem',
                    color: '#3d050f',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'block',
                    marginTop: '0.2rem'
                  }}
                >
                  nurseryjustlikehome@gmail.com
                </a>
                <div style={{ marginTop: '0.75rem', fontSize: '0.84rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} />
                  <span>Mon – Fri: 7:30 AM – 5:30 PM | Sat: By Appt</span>
                </div>
              </div>
            </div>

          </div>
          </RevealOnScroll>

          {/* Right Column: Interactive Direct Message Form (ScrollCraft Paradigm #47: Split-Gate Slide R) */}
          <RevealOnScroll animation="fade-right" delay={200}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            padding: '2.5rem',
            border: '1.5px solid rgba(123, 17, 39, 0.12)',
            boxShadow: '0 24px 60px rgba(70, 7, 19, 0.10)',
            transform: `translate3d(${Math.max(-25, Math.min(25, -(0.45 - progress) * 35))}px, 0, 0)`,
            transition: 'transform 0.2s ease-out'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge-gold">DIRECT MESSAGE</span>
              <h3 style={{ fontSize: '1.65rem', marginTop: '0.4rem', color: '#3d050f' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '0.25rem' }}>
                Prefer online messaging? Fill out this quick form and our admissions team will respond promptly.
              </p>
            </div>

            {submitted ? (
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1.5px solid #86efac',
                borderRadius: '1.25rem',
                padding: '2rem',
                textAlign: 'center',
                color: '#166534'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#bbf7d0',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  Message Received!
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Thank you for reaching out to Just Like Home Nursery. A member of our family advisory team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.4rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {errorMessage && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '0.75rem',
                    color: '#991b1b',
                    fontSize: '0.85rem'
                  }}>
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Parent / Guardian Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: '#fdfbf7'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 050 200 5346"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #d1d5db',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: '#fdfbf7'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Optional"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #d1d5db',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: '#fdfbf7'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                    Subject / Program Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: '#fdfbf7'
                    }}
                  >
                    <option value="General Inquiry">General Nursery Inquiry</option>
                    <option value="Early Explorers (Infant)">Early Explorers (45d - 1.5y)</option>
                    <option value="Curious Learners (Toddler)">Curious Learners (1.5 - 3y)</option>
                    <option value="Confident Preschoolers">Confident Preschoolers (3 - 4y)</option>
                    <option value="School Readiness">School Readiness Program</option>
                    <option value="Full-Day & Half-Day Care">Full-Day & Half-Day Options</option>
                    <option value="Holiday Camps">Holiday & Summer Camps</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                    Your Message or Questions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your child's age, your preferred timing, or questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: '#fdfbf7',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '0.9rem',
                      fontSize: '0.95rem'
                    }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onBookVisitClick}
                    className="btn-secondary"
                    style={{
                      padding: '0.9rem 1.25rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    <Calendar size={16} />
                    <span>Book a Tour</span>
                  </button>
                </div>
              </form>
            )}
          </div>
          </RevealOnScroll>

        </div>

        {/* Embedded Interactive Map Frame */}
        <RevealOnScroll animation="fade-up" delay={250}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '2rem',
          padding: '1.25rem',
          border: '1.5px solid rgba(123, 17, 39, 0.1)',
          boxShadow: '0 15px 40px rgba(70, 7, 19, 0.06)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 1.25rem 1.25rem',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: '#3d050f', fontFamily: 'var(--font-heading)' }}>
                Find Just Like Home Nursery in Al Rashidiya 2, Ajman
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                Villa No. 47, peaceful and secure residential setting with convenient curbside parking
              </p>
            </div>
            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}
            >
              <MapPin size={14} />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          <div style={{
            width: '100%',
            height: '380px',
            borderRadius: '1.25rem',
            overflow: 'hidden'
          }}>
            <iframe
              title="Just Like Home Nursery Location on Google Maps"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
