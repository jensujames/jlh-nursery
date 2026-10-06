import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  MessageCircle, Heart, Dumbbell, BookOpen, Calculator, 
  Globe2, Palette, Sparkles, Calendar, ArrowRight, CheckCircle2 
} from 'lucide-react';

const DEVELOPMENT_AREAS = [
  {
    title: 'Communication & Language',
    desc: 'Conversations, stories, rhymes and responsive interactions help children listen, understand and express themselves.',
    icon: MessageCircle,
    color: '#F15A29',
    bgColor: '#FFF5F0'
  },
  {
    title: 'Personal, Social & Emotional Development',
    desc: 'Warm relationships and group experiences help children develop confidence, emotional awareness, cooperation and a sense of belonging.',
    icon: Heart,
    color: '#e11d48',
    bgColor: '#FFF1F2'
  },
  {
    title: 'Physical Development',
    desc: 'Indoor and outdoor movement, fine-motor activities and everyday self-care strengthen coordination and independence.',
    icon: Dumbbell,
    color: '#0284c7',
    bgColor: '#F0F9FF'
  },
  {
    title: 'Literacy',
    desc: 'Stories, sounds, marks, letters and playful phonics experiences support early reading and writing foundations.',
    icon: BookOpen,
    color: '#16a34a',
    bgColor: '#F0FDF4'
  },
  {
    title: 'Mathematics',
    desc: 'Children explore counting, quantities, shapes, patterns, comparison and problem-solving in meaningful play.',
    icon: Calculator,
    color: '#d97706',
    bgColor: '#FFFBEB'
  },
  {
    title: 'Understanding the World',
    desc: 'Hands-on exploration encourages children to observe, question and connect with people, places, nature and everyday life.',
    icon: Globe2,
    color: '#0d9488',
    bgColor: '#F0FDFA'
  },
  {
    title: 'Expressive Arts & Design',
    desc: 'Art, music, movement, role play and imaginative experiences give children ways to create and communicate ideas.',
    icon: Palette,
    color: '#7c3aed',
    bgColor: '#F5F3FF'
  }
];

export default function EyfsPage() {
  return (
    <div className="eyfs-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <Sparkles size={14} /> EYFS & Learning Approach · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Learning Through Play, Discovery and Everyday Experiences
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Young children learn by doing. They learn when they move, talk, listen, touch, imagine, repeat, experiment and share experiences with others.
                </p>
                <p>
                  Our early-years approach uses purposeful play and age-appropriate experiences to support the whole child. Educators observe children's interests and development, then create opportunities that help them take their next step with confidence.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Nursery Visit
                </Link>
                <Link to="/nursery-activities" className="btn btn-secondary">
                  Explore Our Activities
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE AREAS OF DEVELOPMENT WE SUPPORT */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-accent mb-3">Holistic Development</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                The Areas of Development We Support
              </h2>
              <p className="text-stone-600 text-lg">
                Guided by the Early Years Foundation Stage framework, our learning moments support every dimension of a child's growth.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEVELOPMENT_AREAS.map((area, index) => {
              const Icon = area.icon;
              return (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="h-full p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: area.bgColor, color: area.color }}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-warm-navy mb-3">
                        {area.title}
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MORE THAN A LESSON & 4. OBSERVATION AND INDIVIDUAL SUPPORT */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mb-6">
                    <Sparkles size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">
                    More Than a Lesson
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Learning is woven throughout the nursery day. Tidying can build responsibility. Sharing a story can strengthen language. Outdoor play can develop coordination. Preparing a simple activity can encourage patience and practical life skills. These everyday experiences help children connect learning with real life.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-6">
                    <Heart size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-navy mb-4">
                    Observation and Individual Support
                  </h3>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                    Children develop at different rates. By observing their participation, interests and emerging abilities, educators can offer appropriate encouragement without turning childhood into pressure. Families are kept connected through regular communication about nursery experiences and progress.
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
              See How We Support Your Child's Growth
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Book a visit to tour our learning areas and talk with our educators about our play-based EYFS approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-stone-900 hover:bg-stone-100 font-bold px-8 py-3 rounded-full shadow-lg">
                <Calendar size={18} />
                Book a Nursery Visit
              </Link>
              <Link to="/nursery-activities" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full">
                Explore Our Activities
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
