import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  BookOpen, Calculator, Globe2, Palette, Sparkles, 
  Music, Trees, Award, Calendar, Bus, ArrowRight, Camera 
} from 'lucide-react';

const ACTIVITIES = [
  {
    title: 'Phonics & Literacy',
    desc: 'Sounds, songs, stories, conversation and mark-making help develop listening, vocabulary and early literacy.',
    icon: BookOpen,
    color: '#F15A29',
    bgColor: '#FFF5F0'
  },
  {
    title: 'Early Numeracy',
    desc: 'Counting, sorting, matching, shapes, patterns and practical games make mathematical ideas easier to understand.',
    icon: Calculator,
    color: '#0284c7',
    bgColor: '#F0F9FF'
  },
  {
    title: 'Arabic Language Learning',
    desc: 'Age-appropriate Arabic experiences introduce children to language through engaging activities and familiar repetition.',
    icon: Globe2,
    color: '#16a34a',
    bgColor: '#F0FDF4'
  },
  {
    title: 'Creative Arts & Crafts',
    desc: 'Painting, drawing, collage and making give children freedom to express ideas while developing fine-motor skills.',
    icon: Palette,
    color: '#e11d48',
    bgColor: '#FFF1F2'
  },
  {
    title: 'Sensory & Exploration',
    desc: 'Hands-on play invites children to investigate textures, materials, movement, cause and effect.',
    icon: Sparkles,
    color: '#d97706',
    bgColor: '#FFFBEB'
  },
  {
    title: 'Stories, Rhymes & Music',
    desc: 'Books, songs and rhythm strengthen memory, listening, language and joyful participation.',
    icon: Music,
    color: '#7c3aed',
    bgColor: '#F5F3FF'
  },
  {
    title: 'Physical & Outdoor Play',
    desc: 'Movement supports coordination, strength, balance, confidence and healthy habits.',
    icon: Trees,
    color: '#059669',
    bgColor: '#ECFDF5'
  },
  {
    title: 'Life Skills & Independence',
    desc: 'Practical routines encourage responsibility, self-help skills, good manners and confidence.',
    icon: Award,
    color: '#ea580c',
    bgColor: '#FFF7ED'
  },
  {
    title: 'Theme Days & Celebrations',
    desc: 'Special experiences bring learning to life and create happy shared memories.',
    icon: Calendar,
    color: '#db2777',
    bgColor: '#FDF2F8'
  },
  {
    title: 'Educational Trips & Outings',
    desc: 'Where offered, carefully planned outings extend children\'s understanding beyond the classroom.',
    icon: Bus,
    color: '#2563eb',
    bgColor: '#EFF6FF'
  }
];

export default function ActivitiesPage() {
  return (
    <div className="activities-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <Sparkles size={14} /> Nursery Activities · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                Every Day Brings a New Way to Discover
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Children learn best when experiences feel meaningful, active and enjoyable. Our nursery activities encourage curiosity, communication, imagination, movement and growing independence.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  <Camera size={18} />
                  View Our Gallery
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. THE 10 ACTIVITIES */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="badge badge-accent mb-3">Enriching Experiences</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-warm-navy mb-4">
                Our Daily & Weekly Activities
              </h2>
              <p className="text-stone-600 text-lg">
                Engaging opportunities planned to inspire curious minds and active little bodies.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act, index) => {
              const Icon = act.icon;
              return (
                <RevealOnScroll key={index} delay={index * 40}>
                  <div className="h-full p-8 rounded-3xl bg-[#FFFDF7] border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: act.bgColor, color: act.color }}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-warm-navy mb-3">
                        {act.title}
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SEE LEARNING IN ACTION & PUBLISHING NOTE */}
      <section className="section bg-[#FFFDF7]">
        <div className="container">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm text-center">
            <RevealOnScroll>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F15A29] flex items-center justify-center mx-auto mb-6">
                <Camera size={28} />
              </div>
              <h2 className="text-3xl font-extrabold text-warm-navy mb-4">
                See Learning in Action
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                Visit our gallery for a closer look at nursery activities, spaces and special moments. Images should always be current, authentic and used with appropriate parent or guardian consent.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/gallery" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Camera size={18} />
                  View Our Gallery
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <Calendar size={18} />
                  Book a Visit
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
