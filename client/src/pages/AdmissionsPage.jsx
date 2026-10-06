import React, { useState } from 'react';
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
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="admissions-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <FileText size={14} /> Nursery Admissions · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                A Warm Welcome Starts Here
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Choosing a nursery is personal. We want families to have the opportunity to ask questions, understand the environment and decide whether Just Like Home Nursery is the right fit for their child.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Start an Enquiry
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. YOUR ADMISSIONS JOURNEY */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-accent mb-3">Simple Steps</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                Your Admissions Journey
              </h2>
              <p className="text-stone-600 text-lg">
                We make joining our nursery family transparent, smooth and personal.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto space-y-4">
            {JOURNEY_STEPS.map((stepItem, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 shadow-sm hover:border-orange-300 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center font-black text-xl shrink-0">
                    {stepItem.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warm-navy mb-2">
                      {stepItem.step}. {stepItem.title}
                    </h3>
                    <p className="text-stone-600 text-base md:text-lg leading-relaxed">
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
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-6 space-y-4">
              <RevealOnScroll>
                <span className="badge badge-primary mb-2">Helpful Checklist</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy">
                  Information to Share in Your Enquiry
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed">
                  When getting in touch, sharing these details helps us provide clear information on availability and class groupings:
                </p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll delay={100}>
                <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
                  {ENQUIRY_INFO_POINTS.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-stone-700 font-medium text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTS & FEES */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-amber-50/60 border border-amber-200/80 text-center">
            <RevealOnScroll>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-warm-navy mb-3">
                Documents & Fees
              </h3>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                The exact registration documents, fee schedule, payment terms, refund policy and required medical information must be supplied and approved by nursery management before they are published on this page.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                  <Phone size={16} /> Contact Team for Current Details
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED ADMISSIONS QUESTIONS */}
      <section className="section bg-[#FFFDF7]">
        <div className="container max-w-4xl">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="badge badge-accent mb-3">Parent FAQs</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy">
                Frequently Asked Admissions Questions
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {ADMISSION_FAQS.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <div 
                  className="rounded-2xl bg-white border border-stone-200 shadow-sm overflow-hidden transition-all cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h3 className="font-bold text-lg text-warm-navy flex items-center gap-3">
                      <HelpCircle size={20} className="text-[#F15A29] shrink-0" />
                      {faq.q}
                    </h3>
                    <div className="text-stone-400">
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-0 text-stone-600 text-base leading-relaxed border-t border-stone-100 mt-2">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F15A29] to-[#C62828] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Begin Your Child's Journey Today
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              We look forward to meeting your family and showing you around our warm, home-like environment in Ajman.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-stone-900 hover:bg-stone-100 font-bold px-8 py-3 rounded-full shadow-lg">
                <Calendar size={18} />
                Book a Visit
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full">
                Start an Enquiry
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
