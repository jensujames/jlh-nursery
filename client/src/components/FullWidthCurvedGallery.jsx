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
    category: 'Creative Arts & Crafts',
    title: 'Creative Play & Crafts',
    subtitle: 'Painting, drawing, collage and making give children freedom to express ideas',
    image: '/media/eyfs/eyfs-6.jpg',
    tag: 'Creative Play',
    tagColor: '#F15A29',
    age: 'Play & Create'
  },
  {
    id: 2,
    num: '# 02',
    category: 'Sensory & Exploration',
    title: 'Sensory Trays & Textures',
    subtitle: 'Hands-on play invites children to investigate textures, materials, and curiosity',
    image: '/media/preschool/preschool-3.jpg',
    tag: 'Sensory Care',
    tagColor: '#0284c7',
    age: 'Hands-on Discovery'
  },
  {
    id: 3,
    num: '# 03',
    category: 'Outdoor Play Area',
    title: 'Fresh-Air Adventure',
    subtitle: 'Safe physical movement and balance under UV-shaded canopies on green turf',
    image: '/media/daycare/daycare-4.jpg',
    tag: 'Outdoor Haven',
    tagColor: '#16a34a',
    age: 'Active Movement'
  },
  {
    id: 4,
    num: '# 04',
    category: 'Reading & Story Corner',
    title: 'Stories, Rhymes & Phonics',
    subtitle: 'Cozy language nooks with picture books, rhymes, vocabulary and imagination',
    image: '/media/school-readiness/school-readiness-1.jpg',
    tag: 'Early Literacy',
    tagColor: '#d97706',
    age: 'Storytime'
  },
  {
    id: 5,
    num: '# 05',
    category: 'Motherly Care & Warmth',
    title: 'Nurturing Little Hearts',
    subtitle: 'Kindness, patience, respect and motherly attention in a warm home-like atmosphere',
    image: '/media/nursery/nursery-5.jpg',
    tag: 'Happy Smiles',
    tagColor: '#e11d48',
    age: 'Motherly Care'
  },
  {
    id: 6,
    num: '# 06',
    category: 'Indoor Play Area',
    title: 'Indoor Movement & Play',
    subtitle: 'Dedicated space for movement, social play, group cooperation and joyful activities',
    image: '/media/nursery/nursery-1.jpg',
    tag: 'Indoor Play',
    tagColor: '#9333ea',
    age: 'Active Play'
  },
  {
    id: 7,
    num: '# 07',
    category: 'Early EYFS Learning',
    title: 'Early Numeracy & Phonics',
    subtitle: 'Counting, sorting, shapes, patterns and practical games supporting early learning',
    image: '/media/preschool/preschool-2.jpg',
    tag: 'EYFS Readiness',
    tagColor: '#0369a1',
    age: 'Learning Through Play'
  },
  {
    id: 8,
    num: '# 08',
    category: 'Safe Campus & Facilities',
    title: 'Safe Classrooms & CCTV',
    subtitle: 'Child-friendly spaces with controlled reception, rounded fittings and 24/7 CCTV',
    image: '/media/nursery/nursery-3.jpg',
    tag: 'Safe Campus',
    tagColor: '#059669',
    age: 'Villa 47 Ajman'
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
