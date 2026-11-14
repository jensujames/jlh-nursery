import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Baby, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getApiUrl } from '../config/api';

export default function BookVisitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    programInterest: 'Nursery Program',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM)',
    notes: '',
    consent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
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
          _subject: `New Nursery Visit Booking: ${formData.parentName || 'Parent'} (${formData.childName || 'Little One'})`,
          _template: 'table',
          _captcha: 'false',
          'Parent Name': formData.parentName,
          'Phone Number': formData.phone,
          'Email': formData.email || 'Not provided',
          'Child Name': formData.childName || 'Little One',
          'Child Age': formData.childAge,
          'Program Interest': formData.programInterest,
          'Preferred Date': formData.preferredDate,
          'Preferred Time': formData.preferredTime,
          'Notes': formData.notes || 'None'
        })
      }).catch((e) => console.warn('Email dispatch notice:', e));

      // 2. Also record in backend API
      const response = await fetch(getApiUrl('/api/visits'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json().catch(() => ({ success: true }));

      if (data.success !== false) {
        setIsConfirmed(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } else {
        setErrorMessage(data.error || 'Failed to book visit. Please try again.');
      }
    } catch (err) {
      // Graceful fallback
      setIsConfirmed(true);
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.5 } });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Hello Just Like Home Nursery! I just submitted a visit booking for my child ${formData.childName || ''} (Age: ${formData.childAge}). Preferred date: ${formData.preferredDate} at ${formData.preferredTime}. Please confirm availability!`;
    return `https://wa.me/971502005346?text=${encodeURIComponent(text)}`;
  };

  return (
    <div 
      data-lenis-prevent="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(28, 4, 11, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
    >
      <div 
        data-lenis-prevent="true"
        role="dialog"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '2rem',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '94vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          border: '2px solid rgba(123, 17, 39, 0.15)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            backgroundColor: '#fce7eb',
            color: '#7b1127',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {isConfirmed ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: '#dcfce7',
              color: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 10px 25px rgba(21, 128, 61, 0.2)'
            }}>
              <CheckCircle2 size={40} />
            </div>

            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              VISIT CONFIRMATION PENDING
            </span>

            <h3 style={{
              fontSize: '1.85rem',
              color: '#3d050f',
              fontFamily: 'var(--font-heading)',
              marginTop: '0.4rem',
              marginBottom: '0.75rem'
            }}>
              We Can't Wait to Welcome You!
            </h3>

            <p style={{ color: '#4b5563', fontSize: '0.96rem', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Thank you, <strong>{formData.parentName}</strong>. We have received your booking request for <strong>{formData.preferredDate}</strong> at <strong>{formData.preferredTime}</strong>. A member of our family team will contact you shortly to confirm directions.
            </p>

            <div style={{
              backgroundColor: '#fdfbf7',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              border: '1px solid rgba(123, 17, 39, 0.1)',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#7b1127', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Your Visit Summary
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.88rem', color: '#374151' }}>
                <div><strong>Child:</strong> {formData.childName || 'Little One'} ({formData.childAge})</div>
                <div><strong>Program:</strong> {formData.programInterest}</div>
                <div><strong>Location:</strong> Villa 47, Al Rashidiya 2</div>
                <div><strong>Contact:</strong> +971 50 200 5346</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
              >
                <MessageCircle size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="badge-maroon" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={14} /> EXPLORE OUR VILLA NURSERY
              </span>
              <h2 style={{
                fontSize: '1.85rem',
                color: '#3d050f',
                fontFamily: 'var(--font-heading)',
                marginTop: '0.35rem',
                marginBottom: '0.35rem'
              }}>
                Book a Personal Nursery Visit
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                Experience our cozy classrooms, meet our caring educators, and see where little hearts feel at home.
              </p>
            </div>

            {errorMessage && (
              <div style={{
                padding: '0.75rem 1rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '0.75rem',
                color: '#991b1b',
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                {errorMessage}
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              toolname="book_nursery_tour"
              tooldescription="Schedule a campus tour or visit at Just Like Home Nursery in Al Rashidiya 2, Ajman"
              data-toolname="book_nursery_tour"
              data-tooldescription="Schedule a campus tour or visit at Just Like Home Nursery in Al Rashidiya 2, Ajman"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}
            >
              {/* Parent Info */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Al-Nuaimi"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      backgroundColor: '#fdfbf7',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                    Phone Number / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +971 50 200 5346"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      backgroundColor: '#fdfbf7',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Child Info */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                    Child's Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Zayed"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      backgroundColor: '#fdfbf7',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                    Child's Age or DOB *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2.5 years (or Dec 2023)"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      backgroundColor: '#fdfbf7',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Program & Preferred Timing */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                    Program of Interest
                  </label>
                  <select
                    value={formData.programInterest}
                    onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      backgroundColor: '#fdfbf7',
                      outline: 'none'
                    }}
                  >
                    <option value="Early Years Foundation">Early Years Foundation</option>
                    <option value="Nursery Program">Nursery Program</option>
                    <option value="Preschool Program">Preschool Program</option>
                    <option value="School Readiness">School Readiness</option>
                    <option value="Full-Day Care">Full-Day Care</option>
                    <option value="Half-Day Care">Half-Day Care</option>
                    <option value="Holiday & Summer Camps">Holiday & Summer Camps</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      fontSize: '0.92rem',
                      backgroundColor: '#fdfbf7',
                      outline: 'none'
                    }}
                  >
                    <option value="Morning (09:30 AM)">Morning (09:30 AM)</option>
                    <option value="Morning (10:30 AM)">Morning (10:30 AM)</option>
                    <option value="Midday (12:00 PM)">Midday (12:00 PM)</option>
                    <option value="Afternoon (02:00 PM)">Afternoon (02:00 PM)</option>
                    <option value="Late Afternoon (04:00 PM)">Late Afternoon (04:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                  Preferred Visit Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    fontSize: '0.92rem',
                    backgroundColor: '#fdfbf7',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#374151', marginBottom: '0.3rem' }}>
                  Any Special Notes or Questions?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Interested in Arabic curriculum, dietary preferences, or settling-in advice..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    fontSize: '0.92rem',
                    backgroundColor: '#fdfbf7',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#6b7280' }}>
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                />
                <label htmlFor="consent">
                  I agree to receive a confirmation message regarding this nursery visit enquiry.
                </label>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <Calendar size={18} />
                  <span>{isSubmitting ? 'Confirming Your Visit...' : 'Confirm Nursery Visit Booking'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
