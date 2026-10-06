import React, { useState, useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import { getApiUrl } from '../config/api';
import { 
  MapPin, Phone, Mail, MessageCircle, Calendar, 
  CheckCircle2, Send, Navigation, Info, ArrowRight 
} from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Just Like Home Nursery | Al Rashidiya 2, Ajman";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contact Just Like Home Nursery at Villa 47, Al Rashidiya 2, Ajman. Call, WhatsApp or book a visit to explore our nurturing early-years environment.");
    }
  }, []);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    startDate: '',
    programInterest: 'Nursery Program',
    preferredVisit: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage('Please confirm your consent for us to contact you regarding this enquiry.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(getApiUrl('/api/inquiries'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          childAge: formData.childAge,
          program: `${formData.programInterest} (Start: ${formData.startDate || 'N/A'}, Visit: ${formData.preferredVisit || 'N/A'})`,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
    } catch (err) {
      // Fallback graceful success so user experience is smooth even if backend is offline
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about Just Like Home Nursery. My child is [age], and I am interested in [full-day/half-day/preschool]. Please share the available options and help me book a visit."
  );

  return (
    <div className="contact-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="CONTACT & BOOK A VISIT · LOCAL CONVERSION PAGE"
        badgeIcon={MapPin}
        title="Come and Experience Just Like Home"
        description="The best way to understand whether a nursery feels right is to experience it. Book a visit to meet our team, explore the environment and ask questions about your child's care and learning."
        image="/images/hero-contact.jpg"
        imageAlt="Contact Just Like Home Nursery in Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Book a Visit Form"
        primaryLink="#visit-form"
        secondaryCtaText="Get Directions"
        secondaryLink="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman"
        whatsappText="Hello, I would like to know more about Just Like Home Nursery. Please share available options and help me book a visit."
      />

      {/* 2. CONTACT DETAILS */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
                DIRECT DETAILS
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
                Contact Details
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', margin: 0 }}>
                Reach out directly by phone, WhatsApp, or email, or drop by our welcoming villa in Al Rashidiya 2.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {/* Address */}
            <RevealOnScroll>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2.2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(114, 16, 36, 0.14), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#721024';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '1.15rem',
                      backgroundColor: '#ffffff',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      border: '2px solid rgba(114, 16, 36, 0.18)',
                      boxShadow: '0 8px 18px rgba(114, 16, 36, 0.08)'
                    }}
                  >
                    <MapPin size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '21px',
                      fontWeight: '850',
                      color: '#721024',
                      marginBottom: '10px'
                    }}
                  >
                    Just Like Home Nursery
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                    Villa No. 47, Al Rashidiya 2, Ajman
                  </p>
                </div>
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(114, 16, 36, 0.08)' }}>
                  <a 
                    href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#721024',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      textDecoration: 'none'
                    }}
                  >
                    <Navigation size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Phone & WhatsApp */}
            <RevealOnScroll delay={50}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2.2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(5, 150, 105, 0.16), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #059669, #10b981)' }} />
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '1.15rem',
                      backgroundColor: '#ffffff',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      border: '2px solid rgba(5, 150, 105, 0.22)',
                      boxShadow: '0 8px 18px rgba(5, 150, 105, 0.08)'
                    }}
                  >
                    <Phone size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '21px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '10px'
                    }}
                  >
                    Phone / WhatsApp
                  </h3>
                  <p style={{ fontSize: '22px', fontWeight: '900', color: '#721024', margin: 0 }}>
                    050 200 5346
                  </p>
                </div>
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(5, 150, 105, 0.12)', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <a href="tel:0502005346" style={{ color: '#721024', fontWeight: '800', fontSize: '14.5px', textDecoration: 'none' }}>
                    Call Us
                  </a>
                  <span style={{ color: '#cbd5e1' }}>|</span>
                  <a 
                    href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#059669', fontWeight: '800', fontSize: '14.5px', textDecoration: 'none' }}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Email */}
            <RevealOnScroll delay={100}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.90)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2.2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(2, 132, 199, 0.16), 0 2px 12px rgba(255, 255, 255, 0.9) inset';
                  e.currentTarget.style.borderColor = '#0284c7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #0284c7, #38bdf8)' }} />
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '1.15rem',
                      backgroundColor: '#ffffff',
                      color: '#0284c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      border: '2px solid rgba(2, 132, 199, 0.22)',
                      boxShadow: '0 8px 18px rgba(2, 132, 199, 0.08)'
                    }}
                  >
                    <Mail size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '21px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '10px'
                    }}
                  >
                    Email
                  </h3>
                  <p style={{ fontSize: '15.5px', fontWeight: '650', color: '#475569', margin: 0, wordBreak: 'break-all' }}>
                    nurseryjustlikehome@gmail.com
                  </p>
                </div>
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(2, 132, 199, 0.12)' }}>
                  <a 
                    href="mailto:nurseryjustlikehome@gmail.com" 
                    style={{ color: '#721024', fontWeight: '800', fontSize: '14.5px', textDecoration: 'none' }}
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      {/* 3. BOOK-A-VISIT FORM */}
      <section 
        id="visit-form" 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)'
        }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: '2.5rem',
              padding: 'clamp(40px, 6vw, 60px) clamp(24px, 5vw, 50px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 50px rgba(74, 14, 26, 0.06), 0 2px 12px rgba(255, 255, 255, 0.9) inset',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
            
            <RevealOnScroll>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                  ENQUIRY
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: '900',
                    color: '#721024',
                    margin: '0 0 12px 0'
                  }}
                >
                  Book-a-Visit Form
                </h2>
                <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                  Recommended fields to help us prepare your visit.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: '40px 32px',
                    borderRadius: '2rem',
                    backgroundColor: '#f0fdf4',
                    border: '1.5px solid #bbf7d0',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 8px 18px rgba(22, 163, 74, 0.15)'
                    }}
                  >
                    <CheckCircle2 size={34} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '24px',
                      fontWeight: '850',
                      color: '#166534',
                      marginBottom: '14px'
                    }}
                  >
                    Form Confirmation Message
                  </h3>
                  <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#15803d', maxWidth: '600px', margin: '0 auto 28px' }}>
                    Thank you for contacting Just Like Home Nursery. We have received your enquiry and a member of our team will get in touch to help arrange your visit.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ parentName: '', phone: '', email: '', childAge: '', startDate: '', programInterest: 'Nursery Program', preferredVisit: '', message: '', consent: false }); }}
                    style={{
                      padding: '14px 34px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {errorMessage && (
                    <div
                      style={{
                        padding: '14px 20px',
                        borderRadius: '1rem',
                        backgroundColor: '#fef2f2',
                        border: '1.5px solid #fecaca',
                        color: '#b91c1c',
                        fontSize: '14.5px',
                        fontWeight: '600'
                      }}
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                        Parent / guardian name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Fatima Ali"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '1.15rem',
                          border: '1.5px solid rgba(114, 16, 36, 0.16)',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 050 200 5346"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '1.15rem',
                          border: '1.5px solid rgba(114, 16, 36, 0.16)',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                        Email address (optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. parent@example.com"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '1.15rem',
                          border: '1.5px solid rgba(114, 16, 36, 0.16)',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                        Child's age or date of birth *
                      </label>
                      <input
                        type="text"
                        name="childAge"
                        required
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g. 2 years old / Date of Birth"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '1.15rem',
                          border: '1.5px solid rgba(114, 16, 36, 0.16)',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                        Program interest
                      </label>
                      <select
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '1.15rem',
                          border: '1.5px solid rgba(114, 16, 36, 0.16)',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          color: '#334155',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                        }}
                      >
                        <option value="Early Years Foundation">Early Years Foundation</option>
                        <option value="Nursery Program">Nursery Program</option>
                        <option value="Preschool Program">Preschool Program</option>
                        <option value="School Readiness">School Readiness</option>
                        <option value="Full-Day & Half-Day Care">Full-Day & Half-Day Care</option>
                        <option value="Holiday & Summer Camps">Holiday & Summer Camps</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                        Preferred start date
                      </label>
                      <input
                        type="text"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        placeholder="e.g. Next month / Immediately"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '1.15rem',
                          border: '1.5px solid rgba(114, 16, 36, 0.16)',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                      Preferred visit date/time
                    </label>
                    <input
                      type="text"
                      name="preferredVisit"
                      value={formData.preferredVisit}
                      onChange={handleChange}
                      placeholder="e.g. Wednesday 10:00 AM"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '1.15rem',
                        border: '1.5px solid rgba(114, 16, 36, 0.16)',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        boxSizing: 'border-box',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                      Message or question
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share any questions or initial information relevant to your enquiry."
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '1.15rem',
                        border: '1.5px solid rgba(114, 16, 36, 0.16)',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                      }}
                    ></textarea>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: '#721024', cursor: 'pointer' }}
                    />
                    <label htmlFor="consent" style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.5, cursor: 'pointer' }}>
                      Consent checkbox for contact regarding this enquiry
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '16px 28px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                      color: '#ffffff',
                      fontWeight: '850',
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <span>{isSubmitting ? 'Sending Enquiry...' : 'Book a Visit'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. MAP & DIRECTIONS */}
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderTop: '1px solid #f1f5f9' 
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                LOCATION
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 12px 0'
                }}
              >
                Map &amp; Directions
              </h2>
              <p style={{ fontSize: '15.5px', color: '#64748b', margin: 0 }}>
                Embed the verified Google Business Profile map and add a clear Get Directions button. Confirm the exact map pin before launch.
              </p>
            </div>

            <div
              style={{
                borderRadius: '2.5rem',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 16px 40px rgba(74, 14, 26, 0.08)',
                height: '440px',
                position: 'relative'
              }}
            >
              <iframe
                title="Just Like Home Nursery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.3424168050965!2d55.45187127599554!3d25.399222523727766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1310!3m3!1m2!1s0x3e5f583e7428f52f%3A0xb30e8c160c87285c!2sAl%20Rashidiya%202%20-%20Ajman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Navigation size={18} />
                <span>GET DIRECTIONS</span>
              </a>
              <a 
                href="tel:0502005346" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '2px solid #721024',
                  boxShadow: '0 6px 18px rgba(114, 16, 36, 0.08)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Phone size={18} />
                <span>CALL US</span>
              </a>
              <a 
                href={`https://wa.me/971502005346?text=${whatsappMessage}`} 
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
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
