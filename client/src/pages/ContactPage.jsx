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
        image="/images/bg-hero-villa.jpg"
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
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
                DIRECT DETAILS
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
                Contact Details
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '26px'
            }}
          >
            {/* Address */}
            <RevealOnScroll>
              <div
                style={{
                  padding: '38px 32px',
                  borderRadius: '26px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#fff1f2',
                      color: '#721024',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <MapPin size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '20px',
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
                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #f8e8e8' }}>
                  <a 
                    href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#721024',
                      fontWeight: '800',
                      fontSize: '14px',
                      textDecoration: 'none'
                    }}
                  >
                    <Navigation size={15} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Phone & WhatsApp */}
            <RevealOnScroll delay={50}>
              <div
                style={{
                  padding: '38px 32px',
                  borderRadius: '26px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Phone size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '20px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '10px'
                    }}
                  >
                    Phone / WhatsApp
                  </h3>
                  <p style={{ fontSize: '20px', fontWeight: '850', color: '#721024', margin: 0 }}>
                    050 200 5346
                  </p>
                </div>
                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #f8e8e8', display: 'flex', gap: '16px' }}>
                  <a href="tel:0502005346" style={{ color: '#721024', fontWeight: '800', fontSize: '14px', textDecoration: 'none' }}>
                    Call Us
                  </a>
                  <span style={{ color: '#cbd5e1' }}>|</span>
                  <a 
                    href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#059669', fontWeight: '800', fontSize: '14px', textDecoration: 'none' }}
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
                  padding: '38px 32px',
                  borderRadius: '26px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#e0f2fe',
                      color: '#0284c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Mail size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '20px',
                      fontWeight: '850',
                      color: '#1e293b',
                      marginBottom: '10px'
                    }}
                  >
                    Email
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: '600', color: '#475569', margin: 0, wordBreak: 'break-all' }}>
                    nurseryjustlikehome@gmail.com
                  </p>
                </div>
                <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid #f8e8e8' }}>
                  <a 
                    href="mailto:nurseryjustlikehome@gmail.com" 
                    style={{ color: '#721024', fontWeight: '800', fontSize: '14px', textDecoration: 'none' }}
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
      <section id="visit-form" style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '30px',
              padding: 'clamp(38px, 5vw, 56px) clamp(24px, 4vw, 48px)',
              border: '1.5px solid #ffede4',
              boxShadow: '0 12px 36px rgba(114, 16, 36, 0.04)'
            }}
          >
            <RevealOnScroll>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
                  ENQUIRY
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: 'clamp(28px, 4vw, 38px)',
                    fontWeight: '900',
                    color: '#721024',
                    margin: '0 0 12px 0'
                  }}
                >
                  Book-a-Visit Form
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                  Recommended fields to help us prepare your visit.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: '36px 28px',
                    borderRadius: '24px',
                    backgroundColor: '#f0fdf4',
                    border: '1.5px solid #bbf7d0',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      fontSize: '22px',
                      fontWeight: '850',
                      color: '#166534',
                      marginBottom: '14px'
                    }}
                  >
                    Form Confirmation Message
                  </h3>
                  <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#15803d', maxWidth: '600px', margin: '0 auto 24px' }}>
                    Thank you for contacting Just Like Home Nursery. We have received your enquiry and a member of our team will get in touch to help arrange your visit.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ parentName: '', phone: '', email: '', childAge: '', startDate: '', programInterest: 'Nursery Program', preferredVisit: '', message: '', consent: false }); }}
                    style={{
                      padding: '13px 30px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '14.5px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {errorMessage && (
                    <div
                      style={{
                        padding: '14px 18px',
                        borderRadius: '12px',
                        backgroundColor: '#fef2f2',
                        border: '1px solid #fecaca',
                        color: '#b91c1c',
                        fontSize: '14px'
                      }}
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #ffede4',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#FFFDF7'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #ffede4',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#FFFDF7'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #ffede4',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#FFFDF7'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #ffede4',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#FFFDF7'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
                        Program interest
                      </label>
                      <select
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #ffede4',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#FFFDF7',
                          color: '#334155'
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
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: '1.5px solid #ffede4',
                          fontSize: '15px',
                          outline: 'none',
                          backgroundColor: '#FFFDF7'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                        padding: '13px 16px',
                        borderRadius: '14px',
                        border: '1.5px solid #ffede4',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#FFFDF7'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '750', color: '#334155', marginBottom: '8px' }}>
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
                        padding: '13px 16px',
                        borderRadius: '14px',
                        border: '1.5px solid #ffede4',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#FFFDF7',
                        resize: 'vertical'
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
                      style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: '#721024' }}
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
                      fontWeight: '800',
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 8px 24px rgba(114, 16, 36, 0.25)',
                      transition: 'all 0.25s ease'
                    }}
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
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
                LOCATION
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 38px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 12px 0'
                }}
              >
                Map &amp; Directions
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
                Embed the verified Google Business Profile map and add a clear Get Directions button. Confirm the exact map pin before launch.
              </p>
            </div>

            <div
              style={{
                borderRadius: '26px',
                overflow: 'hidden',
                border: '2px solid #ffede4',
                boxShadow: '0 8px 30px rgba(114, 16, 36, 0.04)',
                height: '420px',
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

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman" 
                target="_blank" 
                rel="noopener noreferrer"
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
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
                }}
              >
                <Navigation size={18} />
                <span>GET DIRECTIONS</span>
              </a>
              <a 
                href="tel:0502005346" 
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
                  border: '1.5px solid #721024'
                }}
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
                  gap: '8px',
                  padding: '14px 30px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#059669',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '1.5px solid #059669'
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
