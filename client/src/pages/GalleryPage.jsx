import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Camera, Calendar, X, ChevronLeft, ChevronRight, 
  Sparkles, ArrowRight, Info 
} from 'lucide-react';

const FILTERS = [
  { id: 'all', label: 'All Photos' },
  { id: 'spaces', label: 'Our Spaces' },
  { id: 'learning', label: 'Learning & Play' },
  { id: 'arts', label: 'Arts & Creativity' },
  { id: 'outdoor', label: 'Outdoor Time' },
  { id: 'themes', label: 'Theme Days' },
  { id: 'camps', label: 'Camps & Celebrations' }
];

const GALLERY_IMAGES = [
  {
    src: '/images/hero.jpg',
    category: 'spaces',
    caption: 'Safe, bright and welcoming learning spaces at Just Like Home Nursery',
    alt: 'Classroom and learning space'
  },
  {
    src: '/images/classroom.jpg',
    category: 'spaces',
    caption: 'Classrooms designed for active participation, comfort and age-appropriate experiences',
    alt: 'Child-friendly classroom space'
  },
  {
    src: '/images/growing-minds-center.jpg',
    category: 'learning',
    caption: 'Learning in action: play, stories, exploration and conversation',
    alt: 'Children engaged in early learning'
  },
  {
    src: '/images/nurturing-hero.jpg',
    category: 'learning',
    caption: 'Comfortable quiet nooks and supportive care routines',
    alt: 'Nurturing learning environment'
  },
  {
    src: '/images/activity-little-artists.jpg',
    category: 'arts',
    caption: 'Arts & creativity: painting, drawing and hands-on expression',
    alt: 'Creative arts and craft activities'
  },
  {
    src: '/images/activity-mini-stem.jpg',
    category: 'learning',
    caption: 'Hands-on sensory investigation and early discovery',
    alt: 'Sensory discovery activities'
  },
  {
    src: '/images/activity-creative-play.jpg',
    category: 'learning',
    caption: 'Cooperative play and problem-solving through play',
    alt: 'Creative and constructive play'
  },
  {
    src: '/images/outdoor.jpg',
    category: 'outdoor',
    caption: 'Outdoor play area: fresh air, movement and coordination',
    alt: 'Outdoor play and movement area'
  },
  {
    src: '/images/hero-slider-bg.jpg',
    category: 'themes',
    caption: 'Theme days and special celebrations creating happy memories',
    alt: 'Theme day celebrations'
  },
  {
    src: '/images/slider-active-play.jpg',
    category: 'camps',
    caption: 'Camps and celebrations: creative seasonal projects and fun',
    alt: 'Seasonal camp activities'
  }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages = activeFilter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="gallery-page">
      {/* 1. HERO */}
      <section className="page-hero-section">
        <div className="hero-atmosphere">
          <div className="hero-sun-glow"></div>
        </div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="page-hero-content text-center max-w-4xl mx-auto">
              <span className="badge badge-primary mb-4 inline-flex items-center gap-2">
                <Camera size={14} /> Nursery Gallery · Ajman
              </span>
              <h1 className="hero-title text-3xl md:text-5xl font-black text-warm-navy mb-6 leading-tight">
                A Little Look Inside Our Nursery
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
                <p>
                  Discover the spaces, activities and moments that help Just Like Home Nursery feel warm, joyful and welcoming.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary shadow-lg shadow-orange-500/20">
                  <Calendar size={18} />
                  Book a Tour
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Visit Us in Person
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. GALLERY INTRO CAPTIONS & FILTER TABS */}
      <section className="section bg-white border-y border-stone-100">
        <div className="container">
          {/* Captions highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <RevealOnScroll>
              <div className="p-6 rounded-2xl bg-[#FFFDF7] border border-stone-200">
                <h3 className="font-bold text-lg text-warm-navy mb-2">Our Spaces</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Explore classrooms and activity areas created for safe, happy learning.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="p-6 rounded-2xl bg-[#FFFDF7] border border-stone-200">
                <h3 className="font-bold text-lg text-warm-navy mb-2">Learning in Action</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  See how play, stories, exploration and conversation turn everyday moments into learning.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="p-6 rounded-2xl bg-[#FFFDF7] border border-stone-200">
                <h3 className="font-bold text-lg text-warm-navy mb-2">Special Moments</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  From theme days to creative celebrations, shared experiences help build happy nursery memories.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#F15A29] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-stone-100 shadow-sm hover:shadow-md transition-all cursor-pointer aspect-4/3"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-white text-sm font-medium leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMAGE PUBLISHING NOTE */}
      <section className="section bg-[#FFFDF7]">
        <div className="container max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 text-center flex items-center justify-center gap-3 text-stone-600 text-sm leading-relaxed">
            <Info size={18} className="text-orange-500 shrink-0" />
            <p>
              <strong>Image Publishing Note:</strong> Use original nursery photography wherever possible. File names and alt text should describe the genuine activity or space without identifying individual children. Publish images of children only when valid consent has been obtained and documented.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].alt}
              className="max-h-[70vh] w-auto rounded-lg object-contain"
            />
            <p className="text-white text-center mt-4 text-sm font-medium">
              {filteredImages[selectedImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
