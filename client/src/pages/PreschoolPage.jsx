import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  GraduationCap, CheckCircle2, Sparkles, BookOpen, 
  Smile, ArrowRight, Calendar, Heart, Compass 
} from 'lucide-react';

const DEVELOPMENTS = [
  'Listening and following familiar routines',
  'Expressing needs, ideas and feelings',
  'Early phonics, vocabulary and literacy foundations',
  'Counting, patterns, shapes and early problem-solving',
  'Taking turns, cooperating and participating in groups',
  'Fine-motor control for mark-making and early writing',
  'Self-help skills and growing responsibility',
  'Confidence when approaching new experiences'
];

export default function PreschoolPage() {
  return (
    <div className="preschool-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <GraduationCap size={14} /> Preschool & School Readiness · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Preparing Confident, Curious Children for Their Next Step
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Starting school is a major milestone. School readiness is not only about knowing letters and numbers; it is also about confidence, communication, independence, listening, routines and the ability to learn alongside others.
                </p>
                <p>
                  Our preschool and school-readiness experiences build these foundations through purposeful play and age-appropriate learning.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
                <a 
                  href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20the%20Preschool%20and%20School%20Readiness%20program." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Ask About Preschool
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. WHAT CHILDREN DEVELOP */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge badge-accent mb-3">Key Milestones</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                What Children Develop
              </h2>
              <p className="text-stone-600 text-lg">
                Essential social, academic and independence capabilities nurtured daily in preschool.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {DEVELOPMENTS.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 40}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF7] border border-stone-200/80 hover:border-orange-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-[#F15A29] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-stone-800 text-base md:text-lg font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEARNING WITHOUT LOSING THE JOY & 4. A SMOOTH TRANSITION */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                    <Smile size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">
                    Learning Without Losing the Joy
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Children are more likely to become enthusiastic learners when they feel successful and engaged. We introduce foundational concepts through stories, games, creative work, conversation, movement and practical experiences rather than relying only on worksheets or repetition.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-6">
                    <GraduationCap size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">
                    A Smooth Transition
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Consistent routines and close parent communication help children understand what to expect and feel secure about change. Our goal is to help every child approach school as a capable learner who is ready to participate, ask questions and try.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F15A29] to-[#C62828] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Prepare Your Child for School Success
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Visit our preschool classrooms, discuss your child's age eligibility and experience our welcoming learning environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-stone-900 hover:bg-stone-100 font-bold px-8 py-3 rounded-full shadow-lg">
                <Calendar size={18} />
                Book a Visit
              </Link>
              <a 
                href="https://wa.me/971502005346?text=Hello,%20I%20would%20like%20to%20ask%20about%20Preschool%20and%20School%20Readiness." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full"
              >
                Ask About Preschool
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
