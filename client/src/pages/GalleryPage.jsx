import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Camera, Calendar, X, ChevronLeft, ChevronRight, 
  Sparkles, ArrowRight, Info, Compass 
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
    caption: 'Classrooms and activity areas created for safe, happy learning.',
    alt: 'Our Spaces - Classroom and activity area'
  },
  {
    src: '/images/classroom.jpg',
    category: 'spaces',
    caption: 'Safe, comfortable spaces designed for age-appropriate learning.',
    alt: 'Our Spaces - Learning area'
  },
  {
    src: '/images/growing-minds-center.jpg',
    category: 'learning',
    caption: 'See how play, stories, exploration and conversation turn everyday moments into learning.',
    alt: 'Learning in Action - Play and exploration'
  },
  {
    src: '/images/nurturing-hero.jpg',
    category: 'learning',
    caption: 'Quiet learning corners and supportive routines.',
    alt: 'Learning in Action - Focused discovery'
  },
  {
    src: '/images/activity-little-artists.jpg',
    category: 'arts',
    caption: 'Arts & creativity: Painting, collage and hands-on expression.',
    alt: 'Arts & Creativity - Painting and craft'
  },
  {
    src: '/images/activity-mini-stem.jpg',
    category: 'learning',
    caption: 'Hands-on sensory investigation and early discovery.',
    alt: 'Learning & Play - Sensory investigation'
  },
  {
    src: '/images/activity-creative-play.jpg',
    category: 'learning',
    caption: 'Cooperative play and early problem solving.',
    alt: 'Learning & Play - Cooperative activities'
  },
  {
    src: '/images/outdoor.jpg',
    category: 'outdoor',
    caption: 'Outdoor play area: Fresh air, physical development and active movement.',
    alt: 'Outdoor Time - Outdoor play area'
  },
  {
    src: '/images/hero-slider-bg.jpg',
    category: 'themes',
    caption: 'From theme days to creative celebrations, shared experiences help build happy nursery memories.',
    alt: 'Theme Days - Celebrations and special moments'
  },
  {
    src: '/images/slider-active-play.jpg',
    category: 'camps',
    caption: 'Camps & celebrations: Joyful seasonal exploration.',
    alt: 'Camps & Celebrations - Seasonal activity'
  }
];

export default function GalleryPage({ onBookVisitClick }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    document.title = "Just Like Home Nursery Gallery | Ajman";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore photos of the learning spaces, play areas, activities and special moments at Just Like Home Nursery in Ajman.");
    }
  }, []);

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
    <div className="gallery-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>
      
      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        badge="GALLERY · VISUAL TRUST AND NURSERY FAMILIARITY"
        badgeIcon={Camera}
        title="A Little Look Inside Our Nursery"
        description="Discover the spaces, activities and moments that help Just Like Home Nursery feel warm, joyful and welcoming."
        image="/images/hero-gallery.jpg"
        imageAlt="Gallery of Just Like Home Nursery in Ajman"
        imageBadgeTitle="Villa No. 47, Al Rashidiya 2"
        imageBadgeSubtitle="Where Little Hearts Feel at Home"
        primaryCtaText="Book a Tour"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Visit Us in Person"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I would like to book a tour of your nursery."
      />

      {/* 2. GALLERY INTRO CAPTIONS & PHOTO GRID */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* 3 Intro Captions */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            <RevealOnScroll>
              <div
                style={{
                  padding: '30px 26px',
                  borderRadius: '24px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(114, 16, 36, 0.02)',
                  height: '100%'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '20px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '10px'
                  }}
                >
                  Our Spaces
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  Explore classrooms and activity areas created for safe, happy learning.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={50}>
              <div
                style={{
                  padding: '30px 26px',
                  borderRadius: '24px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(114, 16, 36, 0.02)',
                  height: '100%'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '20px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '10px'
                  }}
                >
                  Learning in Action
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  See how play, stories, exploration and conversation turn everyday moments into learning.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div
                style={{
                  padding: '30px 26px',
                  borderRadius: '24px',
                  backgroundColor: '#FFFDF7',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(114, 16, 36, 0.02)',
                  height: '100%'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '20px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '10px'
                  }}
                >
                  Special Moments
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  From theme days to creative celebrations, shared experiences help build happy nursery memories.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Filter Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '40px'
            }}
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: isActive ? '1.5px solid #721024' : '1.5px solid #ffede4',
                    backgroundColor: isActive ? '#721024' : '#FFFDF7',
                    color: isActive ? '#ffffff' : '#475569',
                    boxShadow: isActive ? '0 4px 14px rgba(114, 16, 36, 0.2)' : 'none'
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Image Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  backgroundColor: '#f1f5f9',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.04)',
                  border: '3px solid #ffffff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(114, 16, 36, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(114, 16, 36, 0.04)';
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(114, 16, 36, 0.85) 0%, rgba(0,0,0,0) 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px',
                    color: '#ffffff'
                  }}
                >
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', lineHeight: 1.4 }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. IMAGE PUBLISHING NOTE */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                padding: '26px 30px',
                borderRadius: '24px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #ffede4',
                boxShadow: '0 6px 20px rgba(114, 16, 36, 0.03)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '14px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Info size={22} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '16px',
                    fontWeight: '850',
                    color: '#721024',
                    margin: '0 0 6px 0'
                  }}
                >
                  Image Publishing Note
                </h4>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  Use original nursery photography wherever possible. File names and alt text should describe the genuine activity or space without identifying individual children. Publish images of children only when valid consent has been obtained and documented.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="EXPERIENCE JUST LIKE HOME"
        title="A Little Look Inside Our Nursery"
        subtitle="Discover the spaces, activities and moments that help Just Like Home Nursery feel warm, joyful and welcoming."
        primaryText="BOOK A TOUR"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="VISIT US IN PERSON"
        secondaryLink="/contact"
        tagline="Where Little Hearts Feel at Home."
      />

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer'
            }}
            aria-label="Close"
          >
            <X size={26} />
          </button>
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '24px',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer'
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '24px',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer'
            }}
            aria-label="Next"
          >
            <ChevronRight size={26} />
          </button>
          <div style={{ maxWidth: '900px', maxHeight: '85vh', textAlign: 'center' }}>
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].alt}
              style={{
                maxHeight: '75vh',
                maxWidth: '100%',
                borderRadius: '16px',
                objectFit: 'contain'
              }}
            />
            <p style={{ color: '#ffffff', marginTop: '16px', fontSize: '15px', fontWeight: '500' }}>
              {filteredImages[selectedImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
