import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Heart, 
  X, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import './FullWidthCurvedGallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    num: '# 01',
    category: 'Creative Play & Arts',
    title: 'Tactile Wooden Blocks',
    subtitle: 'Fine motor development with wooden tactile shapes & creative building',
    image: '/images/hero.jpg',
    tag: 'Creative Play',
    tagColor: '#F15A29',
    age: '18m – 4y'
  },
  {
    id: 2,
    num: '# 02',
    category: 'Montessori Discovery',
    title: 'Sensory Trays & Textures',
    subtitle: 'Natural tactile materials fostering curiosity, coordination and focus',
    image: '/images/nurturing-hero.jpg',
    tag: 'Sensory Care',
    tagColor: '#0284c7',
    age: '45d – 2.5y'
  },
  {
    id: 3,
    num: '# 03',
    category: 'Shaded Garden Fun',
    title: 'Fresh-Air Adventure',
    subtitle: 'Safe gross-motor outdoor play under 100% UV shaded canopies',
    image: '/images/outdoor.jpg',
    tag: 'Outdoor Haven',
    tagColor: '#16a34a',
    age: 'All Ages'
  },
  {
    id: 4,
    num: '# 04',
    category: 'Sunlit Storytime',
    title: 'Reading Teepee & Phonics',
    subtitle: 'Cozy language nests with picture books, rhyming, and confidence building',
    image: '/images/classroom.jpg',
    tag: 'Early Literacy',
    tagColor: '#d97706',
    age: '2y – 4.5y'
  },
  {
    id: 5,
    num: '# 05',
    category: 'Loving Care & Warmth',
    title: 'Motherly Attention',
    subtitle: '1:4 attentive educator ratio cheering every baby step and daily smile',
    image: '/images/testimonial-mom.jpg',
    tag: 'Happy Smiles',
    tagColor: '#e11d48',
    age: 'All Ages'
  },
  {
    id: 6,
    num: '# 06',
    category: 'Little Picasso Crafts',
    title: 'Vibrant Color Discovery',
    subtitle: 'Washable finger painting, eco-clay sculpting, and seasonal crafts',
    image: '/images/bg-hero-activities.jpg',
    tag: 'Arts & Crafts',
    tagColor: '#9333ea',
    age: '2y – 4y'
  },
  {
    id: 7,
    num: '# 07',
    category: 'Early EYFS Learning',
    title: 'Pattern & Counting Play',
    subtitle: 'British curriculum early numeracy games and interactive problem-solving',
    image: '/images/bg-hero-programs.jpg',
    tag: 'EYFS Readiness',
    tagColor: '#0369a1',
    age: '3y – 5y'
  },
  {
    id: 8,
    num: '# 08',
    category: 'Villa 47 Play Haven',
    title: 'Indoor Soft Play Gym',
    subtitle: 'Climate-controlled safe gross-motor zones with cushioned mats',
    image: '/images/bg-hero-villa.jpg',
    tag: 'Safe Campus',
    tagColor: '#059669',
    age: 'All Ages'
  }
];

export default function FullWidthCurvedGallery({ onBookVisitClick }) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [selectedItem, setSelectedItem] = useState(null);
  const [likedMap, setLikedMap] = useState({});

  // Touch & Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);
  const ribbonRef = useRef(null);

  const totalItems = GALLERY_ITEMS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Continuous Auto Carousel timer
  useEffect(() => {
    if (selectedItem) return;
    const timer = setInterval(() => {
      if (!isDragging.current) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedItem, nextSlide]);

  // Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    dragDistance.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDistance.current < -50) {
      nextSlide();
    } else if (dragDistance.current > 50) {
      prevSlide();
    }
    dragDistance.current = 0;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    dragDistance.current = e.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDistance.current < -40) {
      nextSlide();
    } else if (dragDistance.current > 40) {
      prevSlide();
    }
    dragDistance.current = 0;
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      className="curved-gallery-section" 
      id="section-gallery-curved"
    >
      {/* Background Ambience */}
      <div className="curved-gallery-bg-glow glow-left" />
      <div className="curved-gallery-bg-glow glow-right" />

      {/* Single Line Multicolor Heading */}
      <div className="curved-gallery-single-line-header">
        <h2 className="curved-gallery-single-heading">
          <span className="heading-navy">Curious What </span>
          <span className="heading-blue">Daily </span>
          <span className="heading-pink">Joy </span>
          <span className="heading-orange">Looks </span>
          <span className="heading-gold">Like?</span>
        </h2>
      </div>

      {/* 3D Curved Perspective Stage (Full Viewport Width) */}
      <div 
        className="curved-gallery-stage"
        ref={ribbonRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="curved-gallery-perspective-track">
          {GALLERY_ITEMS.map((item, idx) => {
            // Calculate distance from active index in cyclic array
            let offset = idx - currentIndex;
            if (offset > totalItems / 2) offset -= totalItems;
            if (offset < -totalItems / 2) offset += totalItems;

            // Compute 3D cylinder curve transforms
            // Left cards rotate outward, center is flat, right cards rotate inward
            const rotateY = offset * -8.5; // degrees
            const translateZ = -Math.abs(offset) * 32; // px depth
            const translateY = Math.abs(offset) * 4; // subtle dip on wings
            const scale = Math.max(0.85, 1 - Math.abs(offset) * 0.05);
            const zIndex = 20 - Math.abs(offset);
            const opacity = Math.abs(offset) > 3 ? 0.35 : 1;

            return (
              <div
                key={item.id}
                className={`curved-gallery-card-wrap ${offset === 0 ? 'is-active' : ''}`}
                style={{
                  transform: `translateX(${offset * 105}%) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity
                }}
                onClick={() => {
                  if (offset === 0) {
                    setSelectedItem(item);
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
              >
                {/* 3D Card Body */}
                <div className="curved-gallery-card">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="curved-gallery-img"
                    loading="lazy"
                  />

                  {/* Glassmorphic Overlay on Hover */}
                  <div className="curved-card-overlay">
                    <span 
                      className="curved-card-tag"
                      style={{ background: item.tagColor }}
                    >
                      {item.tag}
                    </span>

                    <button 
                      className={`curved-card-heart ${likedMap[item.id] ? 'liked' : ''}`}
                      type="button"
                      onClick={(e) => toggleLike(item.id, e)}
                      title="Like moment"
                    >
                      <Heart size={16} fill={likedMap[item.id] ? '#e11d48' : 'none'} />
                    </button>

                    <div className="curved-card-hover-info">
                      <div className="curved-card-zoom-badge">
                        <Eye size={14} />
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Numbered Category Label (Matching Reference #01, #02, etc.) */}
                <div className="curved-gallery-label-group">
                  <span className="curved-label-num">{item.num}</span>
                  <span className="curved-label-text">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Side Navigation Arrows */}
        <button 
          className="curved-nav-btn nav-prev"
          type="button"
          onClick={prevSlide}
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} />
        </button>

        <button 
          className="curved-nav-btn nav-next"
          type="button"
          onClick={nextSlide}
          aria-label="Next photo"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="curved-gallery-dots">
        {GALLERY_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className={`curved-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${item.num}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="curved-lightbox-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="curved-lightbox-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="curved-lightbox-close"
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="curved-lightbox-media">
              <img src={selectedItem.image} alt={selectedItem.title} />
              <span className="lightbox-tag" style={{ background: selectedItem.tagColor }}>
                {selectedItem.tag}
              </span>
            </div>

            <div className="curved-lightbox-content">
              <div className="lightbox-meta">
                <span className="lightbox-num">{selectedItem.num}</span>
                <span className="lightbox-cat">{selectedItem.category}</span>
                <span className="lightbox-age">• Ages {selectedItem.age}</span>
              </div>

              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.subtitle}</p>

              <div className="lightbox-highlights">
                <div className="lightbox-pill">
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>Licensed British EYFS</span>
                </div>
                <div className="lightbox-pill">
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>Daily Photo Updates</span>
                </div>
              </div>

              <div className="lightbox-actions">
                {onBookVisitClick && (
                  <button 
                    className="lightbox-book-btn"
                    type="button"
                    onClick={() => {
                      setSelectedItem(null);
                      onBookVisitClick();
                    }}
                  >
                    <Calendar size={15} />
                    <span>Book Campus Tour</span>
                  </button>
                )}
                <Link 
                  to="/gallery" 
                  className="lightbox-gallery-link"
                  onClick={() => setSelectedItem(null)}
                >
                  <span>View All 24+ Campus Photos</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
