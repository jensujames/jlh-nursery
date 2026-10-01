import React, { useState, useRef } from 'react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function GallerySection({ onBookVisitClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const galleryRef = useRef(null);
  const { progress } = useSectionScroll(galleryRef);

  const photos = [
    {
      id: 1,
      src: "/images/hero.jpg",
      category: "learning",
      title: "Purposeful Wooden Block Learning",
      desc: "Children developing spatial awareness and social communication with our warm educator."
    },
    {
      id: 2,
      src: "/images/classroom.jpg",
      category: "classrooms",
      title: "Scandinavian Inspired Classroom",
      desc: "Sunlit space with reading teepee, low bookshelves, and child-safe wooden puzzles."
    },
    {
      id: 3,
      src: "/images/outdoor.jpg",
      category: "outdoor",
      title: "Shaded Outdoor Play Garden",
      desc: "Safe UV canopies, wooden playhouse, sensory water station, and synthetic grass."
    },
    {
      id: 4,
      src: "/images/classroom.jpg",
      category: "learning",
      title: "Cozy Story Corner & Mini Library",
      desc: "Children enjoying imaginative picture books and rhythmic group reading sessions."
    },
    {
      id: 5,
      src: "/images/hero.jpg",
      category: "creative",
      title: "Sensory & Tactile Discovery",
      desc: "Young minds investigating varied textures and building coordination."
    },
    {
      id: 6,
      src: "/images/outdoor.jpg",
      category: "outdoor",
      title: "Active Movement & Fresh Air",
      desc: "Toddlers exploring balance and gross-motor skills in our shaded villa garden."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Nursery Spaces' },
    { id: 'classrooms', label: 'Classrooms & Reading' },
    { id: 'learning', label: 'Learning & Play' },
    { id: 'outdoor', label: 'Outdoor Garden' },
    { id: 'creative', label: 'Sensory & Creative' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section 
      id="gallery" 
      ref={galleryRef}
      className="section-padding bg-cream-subtle perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <Camera size={14} /> LIFE AT JUST LIKE HOME
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              A Glimpse Inside <br />
              <span style={{ color: '#7b1127' }}>Our Joyful Nursery</span>
            </h2>
            <p className="section-subtitle">
              Explore the authentic spaces, activities, and precious smiles that make Just Like Home Nursery a second home for children in Ajman.
            </p>

            {/* Category Filter Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              marginTop: '2rem'
            }}>
              {categories.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '0.6rem 1.3rem',
                      borderRadius: '9999px',
                      border: isSelected ? '2px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.1)',
                      backgroundColor: isSelected ? '#7b1127' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#460713',
                      fontSize: '0.86rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Photos Grid with ScrollCraft Multi-Tier Speed Parallax (Paradigm #09) */}
        <RevealOnScroll animation="fade-up" delay={150}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {filteredPhotos.map((photo, index) => {
            // Speed tiers: index % 3 gives divergent rates (-0.8x, +1.2x, +0.6x)
            const speedMultiplier = index % 3 === 0 ? 28 : (index % 3 === 1 ? -32 : 18);
            const parallaxY = (progress - 0.45) * speedMultiplier;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                style={{
                  position: 'relative',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  height: '320px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(70, 7, 19, 0.08)',
                  border: '4px solid #ffffff',
                  backgroundColor: '#f3ece6',
                  transform: `translate3d(0, ${parallaxY.toFixed(1)}px, 0)`,
                  transition: 'transform 0.15s ease-out, box-shadow 0.25s ease'
                }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Hover Overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(70, 7, 19, 0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.75rem',
                  color: '#ffffff',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#fef08a',
                  fontSize: '0.76rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem'
                }}>
                  <Eye size={14} /> Click to View High-Res
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '0.25rem'
                }}>
                  {photo.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#fce7eb', opacity: 0.9 }}>
                  {photo.desc}
                </p>
              </div>
            </div>
          );
        })}
        </div>
        </RevealOnScroll>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(28, 4, 11, 0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                style={{
                  maxHeight: '65vh',
                  maxWidth: '100%',
                  borderRadius: '1.25rem',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                  objectFit: 'contain'
                }}
              />
              <div style={{ color: '#ffffff', marginTop: '1.25rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  {filteredPhotos[selectedPhotoIndex].title}
                </h3>
                <p style={{ color: '#fce7eb', fontSize: '0.92rem', marginTop: '0.25rem', opacity: 0.9 }}>
                  {filteredPhotos[selectedPhotoIndex].desc}
                </p>
              </div>
            </div>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
