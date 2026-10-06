import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  BookOpen, Calendar, ArrowRight, Sparkles, Compass, 
  HelpCircle, Heart, GraduationCap, Info 
} from 'lucide-react';

const ARTICLES = [
  {
    title: 'How to Choose the Right Nursery in Ajman',
    desc: 'Key factors to consider when choosing an early years nursery, from care philosophy and safety to daily routines.',
    links: [
      { label: 'About Us', url: '/about-us' },
      { label: 'Facilities', url: '/facilities' },
      { label: 'Programs', url: '/programs' },
      { label: 'Contact', url: '/contact' }
    ]
  },
  {
    title: 'How to Prepare Your Child for Their First Day at Nursery',
    desc: 'Gentle, practical settling-in strategies that help young children transition comfortably from home to nursery.',
    links: [
      { label: 'Admissions', url: '/admissions' },
      { label: 'About Us', url: '/about-us' }
    ]
  },
  {
    title: 'What Is EYFS and How Does It Support Early Learning?',
    desc: 'An overview of the Early Years Foundation Stage framework and how it guides play-based learning.',
    links: [
      { label: 'EYFS & Learning', url: '/eyfs-learning' }
    ]
  },
  {
    title: 'Nursery vs Preschool: What\'s the Difference?',
    desc: 'Understanding the distinctions in developmental stages, routines and focus areas between nursery and preschool.',
    links: [
      { label: 'Programs', url: '/programs' },
      { label: 'Preschool', url: '/preschool-school-readiness' }
    ]
  },
  {
    title: 'How Play-Based Learning Helps Young Children Develop',
    desc: 'Why active play, hands-on discovery and conversation form the foundation for lasting cognitive and social skills.',
    links: [
      { label: 'EYFS & Learning', url: '/eyfs-learning' },
      { label: 'Activities', url: '/nursery-activities' }
    ]
  },
  {
    title: 'Simple Ways to Build Independence Before Starting School',
    desc: 'Everyday self-help habits, communication opportunities and routines that build school readiness.',
    links: [
      { label: 'Preschool & School Readiness', url: '/preschool-school-readiness' }
    ]
  },
  {
    title: 'Why Sensory Play Matters in the Early Years',
    desc: 'How investigating materials, textures and hands-on environments supports early brain development and motor skills.',
    links: [
      { label: 'Activities', url: '/nursery-activities' },
      { label: 'Facilities', url: '/facilities' }
    ]
  },
  {
    title: 'Questions to Ask When Visiting a Nursery',
    desc: 'A parent guide to assessing safety, communication, educator interaction and environment during a campus visit.',
    links: [
      { label: 'Facilities', url: '/facilities' },
      { label: 'Admissions', url: '/admissions' },
      { label: 'Contact', url: '/contact' }
    ]
  }
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <BookOpen size={14} /> Parent Resources / Blog · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Helpful Ideas for Your Child's Early Years
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  The early years bring exciting milestones and plenty of questions. Our parent resources share practical ideas to help families understand learning, support growing independence and prepare children for nursery and school.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
                <Link to="/about-us" className="btn btn-secondary">
                  About Our Philosophy
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. RECOMMENDED LAUNCH ARTICLES */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-accent mb-3">Parent Guidance</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                Recommended Launch Articles
              </h2>
              <p className="text-stone-600 text-lg">
                Practical insights and guidance written to support your child's growth and development.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ARTICLES.map((article, index) => (
              <RevealOnScroll key={index} delay={index * 40}>
                <div className="h-full p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-warm-navy mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 text-base leading-relaxed mb-6">
                      {article.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-200/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Related Sections</p>
                    <div className="flex flex-wrap gap-2">
                      {article.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.url}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-stone-200 text-[#F15A29] hover:bg-orange-50 transition-colors"
                        >
                          {link.label}
                          <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL DIRECTION */}
      <section className="section bg-[#FFFDF7]">
        <div className="container max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
            <RevealOnScroll>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mx-auto mb-4">
                <Info size={24} />
              </div>
              <h3 className="text-2xl font-bold text-warm-navy mb-3">
                Editorial Direction
              </h3>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                Articles should answer real parent questions clearly and naturally. Avoid repetitive location keywords, generic AI-style introductions and unsupported claims. Each article should include one primary search topic, original insight from the nursery team, relevant internal links and a gentle invitation to book a visit.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
