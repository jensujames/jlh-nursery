import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Sun, Sparkles, Palette, Trees, Music, Calendar, 
  Users, Award, MessageCircle, ArrowRight, CheckCircle2 
} from 'lucide-react';

const CAMP_INCLUSIONS = [
  {
    title: 'Arts, crafts and creative projects',
    icon: Palette
  },
  {
    title: 'Indoor and outdoor movement',
    icon: Trees
  },
  {
    title: 'Sensory and discovery activities',
    icon: Sparkles
  },
  {
    title: 'Stories, music and rhymes',
    icon: Music
  },
  {
    title: 'Theme days and celebrations',
    icon: Calendar
  },
  {
    title: 'Teamwork and social play',
    icon: Users
  },
  {
    title: 'Practical life and independence activities',
    icon: Award
  }
];

export default function CampsPage() {
  return (
    <div className="camps-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <Sun size={14} /> Holiday & Summer Camps · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Happy Holidays Filled With Play, Creativity and Discovery
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  School holidays can be a wonderful time for children to try something new, make friends and stay engaged in a safe, familiar environment.
                </p>
                <p>
                  Our seasonal camp programs bring together creative projects, stories, music, movement, sensory experiences, themed activities and age-appropriate learning.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Ask About the Next Camp
                </Link>
                <a 
                  href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20holiday%20and%20summer%20camps%20at%20Just%20Like%20Home%20Nursery." 
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

      {/* 2. WHAT CAMP DAYS MAY INCLUDE */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge badge-accent mb-3">Enriching Camp Experiences</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                What Camp Days May Include
              </h2>
              <p className="text-stone-600 text-lg">
                Engaging and joyful seasonal activities for happy, active little learners.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {CAMP_INCLUSIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={index} delay={index * 40}>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFDF7] border border-stone-200/80 hover:border-orange-300 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F15A29] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <p className="text-stone-800 text-base md:text-lg font-medium">
                      {item.title}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CURRENT CAMP INFORMATION & CTA */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
            <RevealOnScroll>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mx-auto mb-6">
                <Calendar size={28} />
              </div>
              <h2 className="text-3xl font-extrabold text-warm-navy mb-4">
                Current Camp Information
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Camp themes, dates, age eligibility, timings, inclusions and fees may change each season. Contact the nursery for the latest program and availability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Ask About the Next Camp
                </Link>
                <a 
                  href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20the%20upcoming%20holiday%20and%20summer%20camps%20at%20Just%20Like%20Home%20Nursery." 
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
        </div>
      </section>
    </div>
  );
}
