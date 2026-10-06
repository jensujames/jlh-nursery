import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Clock, Sun, Heart, Users, MessageCircle, Calendar, 
  ArrowRight, CheckCircle2, Sparkles 
} from 'lucide-react';

export default function DaycarePage() {
  return (
    <div className="daycare-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <Clock size={14} /> Full-Day & Half-Day Daycare · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Flexible Care With a Consistent Sense of Belonging
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Families have different schedules, but every child needs consistency, reassurance and meaningful experiences throughout the day. Our full-day and half-day options are designed to provide a caring routine while supporting learning, play, rest and social development.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Check Availability
                </Link>
                <a 
                  href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20full-day%20and%20half-day%20care%20availability%20at%20Just%20Like%20Home%20Nursery." 
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

      {/* 2. A BALANCED NURSERY DAY */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5">
              <RevealOnScroll>
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="/images/classroom.jpg" 
                    alt="Classroom routine at Just Like Home Nursery" 
                    className="w-full h-[360px] object-cover"
                  />
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <RevealOnScroll delay={100}>
                <span className="badge badge-accent inline-flex items-center gap-2">
                  <Sun size={14} /> Daily Routine
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mt-2 mb-4">
                  A Balanced Nursery Day
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed">
                  Depending on the child's program and attendance hours, the day may include welcome routines, child-led play, guided activities, stories and music, physical movement, outdoor experiences, meals or snacks, quiet time and preparation for home.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARE SUPPORTS DEVELOPMENT & 4. KEEPING PARENTS CONNECTED */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mb-6">
                    <Heart size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">
                    Care That Supports Development
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Care routines are not separate from learning. Conversations during meals, tidying after play, choosing an activity and managing personal belongings all help children build communication, responsibility and independence.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-6">
                    <Users size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">
                    Keeping Parents Connected
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    We understand that trust matters when children spend part of their day away from home. Regular parent communication helps families remain informed and gives educators useful insight into routines, preferences and changes that may affect the child.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. CHOOSE THE RIGHT OPTION & CTA */}
      <section className="section bg-white border-t border-stone-100">
        <div className="container text-center max-w-3xl mx-auto">
          <RevealOnScroll>
            <span className="badge badge-primary mb-3">Enquiry Guidance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
              Choose the Right Option
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-8">
              Contact our team to confirm current operating hours, available attendance options, age eligibility and fees. We will help you identify an arrangement that suits your child and family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                <Calendar size={18} />
                Check Availability
              </Link>
              <a 
                href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20full-day%20and%20half-day%20care%20availability%20at%20Just%20Like%20Home%20Nursery." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
