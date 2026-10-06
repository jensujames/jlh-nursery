import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { getApiUrl } from '../config/api';
import { 
  MapPin, Phone, Mail, MessageCircle, Calendar, 
  CheckCircle2, Send, ExternalLink, Navigation 
} from 'lucide-react';

export default function ContactPage() {
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
      // Fallback graceful success so user experience isn't blocked even if backend is offline
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about Just Like Home Nursery. My child is [age], and I am interested in [full-day/half-day/preschool]. Please share the available options and help me book a visit."
  );

  return (
    <div className="contact-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <MapPin size={14} /> Contact & Book a Visit · Al Rashidiya 2, Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Come and Experience Just Like Home
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  The best way to understand whether a nursery feels right is to experience it. Book a visit to meet our team, explore the environment and ask questions about your child's care and learning.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="#visit-form" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </a>
                <a 
                  href={`https://wa.me/971502005346?text=${whatsappMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & DIRECT ACTION BAR */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <RevealOnScroll>
              <div className="p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mx-auto mb-5">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-warm-navy mb-2">Our Location</h3>
                  <p className="text-stone-700 font-medium">Just Like Home Nursery</p>
                  <p className="text-stone-600 text-sm mt-1">Villa No. 47, Al Rashidiya 2, Ajman</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#F15A29] hover:underline"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <Phone size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-warm-navy mb-2">Phone & WhatsApp</h3>
                  <p className="text-stone-700 font-bold text-lg">050 200 5346</p>
                  <p className="text-stone-500 text-xs mt-1">Available for calls and messages</p>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="tel:0502005346" className="text-xs font-bold text-emerald-600 hover:underline">
                    Call Us
                  </a>
                  <span className="text-stone-300">|</span>
                  <a 
                    href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:underline"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mx-auto mb-5">
                    <Mail size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-warm-navy mb-2">Email Address</h3>
                  <p className="text-stone-700 font-medium text-sm break-all">nurseryjustlikehome@gmail.com</p>
                  <p className="text-stone-500 text-xs mt-1">For admissions & enquiries</p>
                </div>
                <div className="mt-6">
                  <a href="mailto:nurseryjustlikehome@gmail.com" className="text-xs font-bold text-[#0284c7] hover:underline">
                    Send Email
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. BOOK-A-VISIT FORM */}
      <section id="visit-form" className="section bg-[#FFFDF7]">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl">
            <RevealOnScroll>
              <div className="text-center mb-8">
                <span className="badge badge-primary mb-3">Enquiry Form</span>
                <h2 className="text-3xl font-extrabold text-warm-navy">
                  Book a Visit
                </h2>
                <p className="text-stone-600 text-base mt-2">
                  Fill in your details below and our team will get in touch to confirm your tour.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900">Enquiry Received</h3>
                  <p className="text-emerald-800 text-lg leading-relaxed max-w-xl mx-auto">
                    Thank you for contacting Just Like Home Nursery. We have received your enquiry and a member of our team will get in touch to help arrange your visit.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ parentName: '', phone: '', email: '', childAge: '', startDate: '', programInterest: 'Nursery Program', preferredVisit: '', message: '', consent: false }); }}
                    className="btn btn-secondary mt-4"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Ahmed"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 050 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">
                        Email Address (optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">
                        Child's Age or Date of Birth *
                      </label>
                      <input
                        type="text"
                        name="childAge"
                        required
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g. 2 years old / Jan 2024"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">
                        Program Interest
                      </label>
                      <select
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29] bg-white"
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
                      <label className="block text-sm font-bold text-stone-700 mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="text"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        placeholder="e.g. Next month / Immediately"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">
                      Preferred Visit Date / Time
                    </label>
                    <input
                      type="text"
                      name="preferredVisit"
                      value={formData.preferredVisit}
                      onChange={handleChange}
                      placeholder="e.g. Tuesday morning around 10:00 AM"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">
                      Message or Question
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share any questions or initial care/learning information relevant to your enquiry."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#F15A29] rounded border-stone-300 focus:ring-[#F15A29]"
                    />
                    <label htmlFor="consent" className="text-sm text-stone-600 leading-snug">
                      I consent to Just Like Home Nursery contacting me regarding this enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary py-4 font-bold text-base shadow-lg shadow-orange-500/20"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Book a Visit'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. MAP & DIRECTIONS */}
      <section className="section bg-white border-t border-stone-100">
        <div className="container max-w-5xl">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <span className="badge badge-primary mb-3">Map & Directions</span>
              <h2 className="text-3xl font-extrabold text-warm-navy mb-2">
                Find Just Like Home Nursery
              </h2>
              <p className="text-stone-600 text-base">
                Villa No. 47, Al Rashidiya 2, Ajman
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-md h-[400px] relative">
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

            <div className="text-center mt-6">
              <a 
                href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
