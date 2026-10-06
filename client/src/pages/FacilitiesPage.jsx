import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Building2, Trees, Moon, Sparkles, BookOpen, Award, 
  Bath, Utensils, HeartPulse, Stethoscope, Lock, Video, 
  ShieldCheck, Calendar, ArrowRight, Phone 
} from 'lucide-react';

const FACILITIES = [
  {
    title: 'Safe & Welcoming Classrooms',
    desc: 'Child-friendly learning spaces designed for participation, comfort and age-appropriate experiences.',
    icon: Building2
  },
  {
    title: 'Indoor Play Area',
    desc: 'A dedicated space for movement, social play and engaging activities.',
    icon: Sparkles
  },
  {
    title: 'Outdoor Play Area',
    desc: 'Opportunities for fresh air, physical development and active exploration.',
    icon: Trees
  },
  {
    title: 'Baby Care & Quiet Room',
    desc: 'A calmer environment to support age-appropriate care, rest and comfort.',
    icon: Moon
  },
  {
    title: 'Sensory & Exploration Spaces',
    desc: 'Hands-on areas where children can investigate materials and learn through their senses.',
    icon: Sparkles
  },
  {
    title: 'Reading & Story Corner',
    desc: 'An inviting place to enjoy books, conversation, imagination and quiet moments.',
    icon: BookOpen
  },
  {
    title: 'Life-Skills Activity Areas',
    desc: 'Practical experiences that encourage independence, confidence and everyday responsibility.',
    icon: Award
  },
  {
    title: 'Child-Friendly Washrooms',
    desc: 'Facilities designed to support safety, dignity and growing self-care skills.',
    icon: Bath
  },
  {
    title: 'Kitchen & Meal Preparation Area',
    desc: 'A designated area supporting nursery meal and snack routines, subject to current nursery provision.',
    icon: Utensils
  },
  {
    title: 'First-Aid / Clinic Facility',
    desc: 'A dedicated point for first-aid support and wellbeing needs.',
    icon: HeartPulse
  },
  {
    title: 'Doctor Visits',
    desc: 'Doctor visits are provided as part of the nursery\'s health-support practices; frequency and scope should be confirmed before publication.',
    icon: Stethoscope
  },
  {
    title: 'Secure Reception',
    desc: 'A controlled welcome point for visitors, families and daily arrivals.',
    icon: Lock
  },
  {
    title: 'CCTV Monitoring',
    desc: 'Monitoring supports enhanced safety within the nursery\'s approved policies and procedures.',
    icon: Video
  }
];

export default function FacilitiesPage() {
  return (
    <div className="facilities-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <ShieldCheck size={14} /> Facilities & Safety · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                A Safe, Welcoming Space Created for Little Learners
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Children feel more confident when their environment is comfortable, predictable and designed around their needs. Our nursery spaces support active play, focused discovery, social interaction, rest and everyday routines.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Arrange a Nursery Tour
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE 13 FACILITIES */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-accent mb-3">Purpose-Built Environments</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                Our Campus Spaces & Amenities
              </h2>
              <p className="text-stone-600 text-lg">
                Designed to nurture wellbeing, spark curiosity and protect safety at every step.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <RevealOnScroll key={index} delay={index * 30}>
                  <div className="h-full p-6 md:p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mb-5">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-warm-navy mb-3">
                        {facility.title}
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        {facility.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SAFETY IS A DAILY PRACTICE */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
            <RevealOnScroll>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-3xl font-extrabold text-warm-navy mb-4">
                Safety Is a Daily Practice
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                A safe environment depends on more than equipment. It also depends on careful supervision, clear routines, cleanliness, responsible access and communication with families. During your visit, our team will be happy to explain the current safety and wellbeing procedures that apply at the nursery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Arrange a Nursery Tour
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
