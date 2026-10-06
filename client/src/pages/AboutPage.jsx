import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Heart, Sparkles, ShieldCheck, Smile, Users, Compass, 
  ArrowRight, Phone, Calendar, CheckCircle2 
} from 'lucide-react';

const PROMISES = [
  'Providing a safe, clean, and welcoming environment.',
  'Treating every child with kindness, patience, respect, and understanding.',
  'Supporting each child\'s emotional, social, physical, communication, and intellectual development.',
  'Encouraging children to learn through play, creativity, exploration, and discovery.',
  'Building strong and respectful partnerships with parents and families.',
  'Recognising and celebrating every child\'s unique abilities, interests, and achievements.',
  'Helping children develop independence, confidence, good manners, and essential life skills.',
  'Creating a nurturing atmosphere that truly feels “Just Like Home.”'
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-accent mb-4 inline-flex items-center gap-2">
                <Heart size={14} className="fill-current text-rose-500" />
                About Us · Early Years Nursery in Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                A Nursery Created Around the Way Children Feel, Learn and Grow
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Just Like Home Nursery was created with a simple belief: children flourish when they feel safe, loved, respected and understood.
                </p>
                <p>
                  Our name reflects the experience we want every child to have &mdash; the reassurance of a familiar, caring environment combined with thoughtful early-years learning that encourages curiosity, confidence and independence.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
                <Link to="/programs" className="btn btn-secondary">
                  Explore Our Programs
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <RevealOnScroll>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/images/nurturing-hero.jpg" 
                    alt="Caring educators and children at Just Like Home Nursery" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-sm font-bold tracking-wider uppercase opacity-90">Villa No. 47, Al Rashidiya 2, Ajman</p>
                    <p className="text-xl font-bold">Where Little Hearts Feel at Home</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <RevealOnScroll delay={100}>
                <span className="badge badge-accent inline-flex items-center gap-2">
                  <Sparkles size={14} /> Our Background
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mt-2 mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                  <p>
                    The early years shape how children see themselves and the world around them. These years deserve more than supervision and lessons; they deserve patience, meaningful relationships and joyful opportunities to discover.
                  </p>
                  <p>
                    At Just Like Home Nursery in Ajman, we bring care and learning together. Every part of the child's day &mdash; from play and conversation to meals, movement, stories and friendships &mdash; can become an opportunity to grow.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="badge badge-primary mb-3">Guiding Purpose</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy">
                Our Vision & Mission
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealOnScroll delay={100}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#F15A29]"></div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mb-6">
                    <Compass size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">Our Vision</h3>
                  <p className="text-stone-700 text-lg leading-relaxed">
                    Preparing children for life with motherly care and attention.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-sm font-semibold text-[#F15A29]">
                  <Heart size={16} /> Motherly Care & Attention
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#72C5E8]"></div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-6">
                    <Heart size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">Our Mission</h3>
                  <p className="text-stone-700 text-lg leading-relaxed">
                    We do not simply educate children. We nurture little hearts, build confidence, encourage curiosity and create happy memories that last a lifetime.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-sm font-semibold text-[#0284c7]">
                  <Sparkles size={16} /> Confidence, Curiosity & Memories
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE PROMISE FAMILIES */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge badge-accent mb-3">Commitment to Parents</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                What We Promise Families
              </h2>
              <p className="text-stone-600 text-lg">
                Our commitments guide how we structure each day, care for children and partner with parents.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto space-y-4">
            {PROMISES.map((promise, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF7] border border-stone-200/60 hover:border-orange-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-stone-800 text-lg font-medium leading-relaxed">
                    {promise}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVERY CHILD IS UNIQUE & 6. PARTNERSHIP WITH PARENTS */}
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
                    Every Child Is Unique
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Children do not all learn, communicate or gain confidence in the same way. Our role is to observe, listen and create the right opportunities for each child to participate and progress. We celebrate small steps because those small steps often become the foundations of lifelong confidence.
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
                    A Partnership With Parents
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Trust grows through communication. We value parents' knowledge of their children and aim to build a respectful partnership from the first enquiry onwards. Regular communication helps nursery and home work together around each child's routines, interests, development and wellbeing.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-16 bg-gradient-to-r from-[#F15A29] to-[#C62828] text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Meet Us & See Our Nursery First-Hand
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              We welcome families to tour our spaces, meet our educators and experience our warm, home-like environment in Al Rashidiya 2, Ajman.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-stone-900 hover:bg-stone-100 font-bold px-8 py-3 rounded-full shadow-lg">
                <Calendar size={18} />
                Meet Us - Book a Visit
              </Link>
              <Link to="/programs" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full">
                Explore Our Programs
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
