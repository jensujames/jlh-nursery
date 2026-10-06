import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Baby, Sparkles, BookOpen, GraduationCap, Clock, Sun, 
  ArrowRight, Calendar, Compass, Heart, CheckCircle2 
} from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Early Years Foundation',
    desc: 'A gentle introduction to nursery life, with caring routines, sensory experiences, communication-rich play, movement and opportunities to build secure relationships.',
    icon: Baby,
    color: '#F15A29',
    bgColor: '#FFF5F0',
    link: '/eyfs-learning',
    linkText: 'Explore EYFS Approach'
  },
  {
    title: 'Nursery Program',
    desc: 'Children build confidence through play, stories, music, creative activities, physical development and social interaction. Experiences are planned to encourage language, curiosity, cooperation and growing independence.',
    icon: Sparkles,
    color: '#0284c7',
    bgColor: '#F0F9FF',
    link: '/nursery-activities',
    linkText: 'View Nursery Activities'
  },
  {
    title: 'Preschool Program',
    desc: 'A stimulating program that extends early literacy, numeracy, communication and problem-solving while continuing to protect the joy of learning through play.',
    icon: BookOpen,
    color: '#16a34a',
    bgColor: '#F0FDF4',
    link: '/preschool-school-readiness',
    linkText: 'Explore Preschool'
  },
  {
    title: 'School Readiness',
    desc: 'Children prepare for their next educational step through routines, listening, communication, independence, early academic foundations and the confidence to participate in a group environment.',
    icon: GraduationCap,
    color: '#7c3aed',
    bgColor: '#F5F3FF',
    link: '/preschool-school-readiness',
    linkText: 'Learn About School Readiness'
  },
  {
    title: 'Full-Day & Half-Day Care',
    desc: 'Flexible attendance options support different family schedules while maintaining a consistent, nurturing experience for each child. Confirm current timings and availability with the nursery team.',
    icon: Clock,
    color: '#d97706',
    bgColor: '#FFFBEB',
    link: '/daycare-ajman',
    linkText: 'Check Care Schedules'
  },
  {
    title: 'Holiday & Summer Camps',
    desc: 'Seasonal programs combine creativity, movement, exploration, social interaction and themed experiences in a safe and familiar nursery setting.',
    icon: Sun,
    color: '#e11d48',
    bgColor: '#FFF1F2',
    link: '/camps',
    linkText: 'Discover Seasonal Camps'
  }
];

const DEVELOPMENTAL_STAGES = [
  {
    stage: 'Early Explorers',
    desc: 'A caring beginning focused on comfort, secure relationships, sensory discovery and early communication.',
    step: 'Stage 1'
  },
  {
    stage: 'Curious Learners',
    desc: 'Playful opportunities to build language, coordination, social confidence and independence.',
    step: 'Stage 2'
  },
  {
    stage: 'Confident Preschoolers',
    desc: 'Broader experiences in literacy, numeracy, creativity, problem-solving and group participation.',
    step: 'Stage 3'
  },
  {
    stage: 'School-Ready Learners',
    desc: 'Focused preparation for school routines, communication, self-help skills and foundational learning.',
    step: 'Stage 4'
  }
];

export default function ProgramsPage() {
  return (
    <div className="programs-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <Compass size={14} /> Nursery Programs in Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                The Right Support for Every Little Step
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Children's needs change quickly during the early years. Our programs are designed to provide the right balance of nurturing care, purposeful play, social experience and age-appropriate learning at each stage.
                </p>
                <p className="text-base md:text-lg text-stone-500">
                  Exact class placement is guided by your child's age, developmental needs, readiness and available nursery groups. Our team will help you choose the most suitable pathway during your visit.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
                <a href="#developmental-pathways" className="btn btn-secondary">
                  View Developmental Pathways
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE SIX CORE PROGRAMS */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-accent mb-3">Our Core Offerings</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                Early Years Learning & Care Programs
              </h2>
              <p className="text-stone-600 text-lg">
                Thoughtfully crafted to foster discovery, connection and confidence.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, index) => {
              const Icon = prog.icon;
              return (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="h-full p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: prog.bgColor, color: prog.color }}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-warm-navy mb-3">
                        {prog.title}
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed mb-6">
                        {prog.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/60">
                      <Link 
                        to={prog.link} 
                        className="inline-flex items-center gap-2 font-bold text-sm text-[#F15A29] hover:underline"
                      >
                        {prog.linkText}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENTAL STAGES */}
      <section id="developmental-pathways" className="section bg-[#FFFDF7]">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-primary mb-3">Parent Journey by Stage</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                Developmental Pathways
              </h2>
              <p className="text-stone-600 text-lg">
                Children progress through natural developmental stages. Here is how our parent journey aligns with your child's emerging milestones:
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {DEVELOPMENTAL_STAGES.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 80}>
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F15A29]"></div>
                  <div>
                    <span className="text-xs font-black tracking-wider uppercase text-[#F15A29] bg-orange-50 px-3 py-1 rounded-full inline-block mb-4">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-warm-navy mb-3">
                      {item.stage}
                    </h3>
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F15A29] to-[#C62828] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Find the Right Program for Your Child
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our team will guide you on age eligibility, attendance schedules and the most suitable developmental group for your child.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-stone-900 hover:bg-stone-100 font-bold px-8 py-3 rounded-full shadow-lg">
                <Calendar size={18} />
                Book a Visit
              </Link>
              <a 
                href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Just%20Like%20Home%20Nursery%20programs." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full"
              >
                WhatsApp Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
