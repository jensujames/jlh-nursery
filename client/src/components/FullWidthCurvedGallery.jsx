import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  X,
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './FullWidthCurvedGallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    num: '# 01',
    category: 'Creative Arts & Crafts',
    title: 'Creative Play & Crafts',
    subtitle: 'Painting, drawing, collage and making give children freedom to express ideas',
    image: '/media/art-creativity/art-1.jpg',
    tag: 'Creative Play',
    tagColor: '#F15A29',
    age: 'Play & Create',
    imgPos: 'center 50%'
  },
  {
    id: 2,
    num: '# 02',
    category: 'Sensory & Exploration',
    title: 'Sensory Trays & Textures',
    subtitle: 'Hands-on play invites children to investigate textures, materials, and curiosity',
    image: '/media/eyfs/eyfs-7.jpg',
    tag: 'Sensory Care',
    tagColor: '#0284c7',
    age: 'Hands-on Discovery',
    imgPos: 'center 85%'
  },
  {
    id: 3,
    num: '# 03',
    category: 'Outdoor Play Area',
    title: 'Fresh-Air Adventure',
    subtitle: 'Safe physical movement and balance under UV-shaded canopies on green turf',
    image: '/media/physical-play/physical-6.jpg',
    tag: 'Outdoor Haven',
    tagColor: '#16a34a',
    age: 'Active Movement',
    imgPos: 'center 55%'
  },
  {
    id: 4,
    num: '# 04',
    category: 'Reading & Story Corner',
    title: 'Stories, Rhymes & Phonics',
    subtitle: 'Cozy language nooks with picture books, rhymes, vocabulary and imagination',
    image: '/media/music-stories/music-horizontal.jpg',
    tag: 'Early Literacy',
    tagColor: '#d97706',
    age: 'Storytime',
    imgPos: 'center 50%'
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
    age: 'Motherly Care',
    imgPos: 'center 45%'
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
    age: 'Active Play',
    imgPos: 'center 65%'
  },
  {
    id: 7,
    num: '# 07',
    category: 'Early EYFS Learning',
    title: 'Early Numeracy & Math Writing',
    subtitle: 'Counting, sorting, shapes, patterns and early number writing',
    image: '/media/preschool/preschool-2.jpg',
    tag: 'Early Math',
    tagColor: '#0369a1',
    age: 'Learning Through Play',
    imgPos: 'center 40%'
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
    age: 'Villa 47 Ajman',
    imgPos: 'center 65%'
  }
];

export default function FullWidthCurvedGallery({ onBookVisitClick }) {
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [likedMap, setLikedMap] = useState({});
  const [isDraggingState, setIsDraggingState] = useState(false);

  // Touch & Drag state
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragStartScroll = useRef(0);
  const dragDistance = useRef(0);

  const totalItems = GALLERY_ITEMS.length;

  // Calculate exact scroll bounds (stops Card 8 flush at right edge, never leaves empty center space)
  const updateBounds = useCallback(() => {
    if (!stageRef.current || !trackRef.current) return;
    const stageWidth = stageRef.current.clientWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const max = Math.max(0, trackWidth - stageWidth);
    setMaxScroll(max);
    setScrollX(prev => Math.min(prev, max));
  }, []);

  useEffect(() => {
    updateBounds();
    const handleResize = () => updateBounds();
    window.addEventListener('resize', handleResize);

    let ro;
    if (typeof ResizeObserver !== 'undefined' && stageRef.current && trackRef.current) {
      ro = new ResizeObserver(() => {
        updateBounds();
      });
      ro.observe(stageRef.current);
      ro.observe(trackRef.current);
    }

    const timer = setTimeout(updateBounds, 300);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (ro) ro.disconnect();
      clearTimeout(timer);
    };
  }, [updateBounds]);

  const getStep = useCallback(() => {
    if (!trackRef.current) return 280;
    const firstCard = trackRef.current.querySelector('.curved-gallery-card-wrap');
    if (firstCard) {
      return firstCard.offsetWidth + 20; // card width + gap
    }
    return 280;
  }, []);

  // Strict bounded navigation: Stops at the end flush, does not loop infinitely
  const nextSlide = useCallback(() => {
    const step = getStep();
    setScrollX(prev => {
      const next = prev + step;
      if (next >= maxScroll - step * 0.35) {
        return maxScroll;
      }
      return Math.min(next, maxScroll);
    });
  }, [getStep, maxScroll]);

  const prevSlide = useCallback(() => {
    const step = getStep();
    setScrollX(prev => {
      const prevVal = prev - step;
      if (prevVal <= step * 0.35) {
        return 0;
      }
      return Math.max(prevVal, 0);
    });
  }, [getStep]);

  // Update active index for indicator dots
  useEffect(() => {
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    if (scrollX >= maxScroll - 15) {
      setActiveIndex(totalItems - 1);
      return;
    }
    const step = getStep();
    if (step > 0) {
      const idx = Math.min(Math.round(scrollX / step), totalItems - 1);
      setActiveIndex(idx);
    }
  }, [scrollX, maxScroll, getStep, totalItems]);

  const scrollToSlide = (idx) => {
    if (idx >= totalItems - 1) {
      setScrollX(maxScroll);
    } else if (idx <= 0) {
      setScrollX(0);
    } else {
      const step = getStep();
      const target = Math.min(Math.max(0, idx * step), maxScroll);
      setScrollX(target);
    }
  };

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    setIsDraggingState(true);
    startX.current = e.clientX;
    dragStartScroll.current = scrollX;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.clientX;
    dragDistance.current = diff;
    const newScroll = Math.min(Math.max(0, dragStartScroll.current + diff), maxScroll);
    setScrollX(newScroll);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsDraggingState(false);
    const step = getStep();
    if (Math.abs(dragDistance.current) > 35) {
      const snapped = Math.round(scrollX / step) * step;
      setScrollX(Math.min(Math.max(0, snapped), maxScroll));
    }
    dragDistance.current = 0;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    isDragging.current = true;
    setIsDraggingState(true);
    startX.current = e.touches[0].clientX;
    dragStartScroll.current = scrollX;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.touches[0].clientX;
    dragDistance.current = diff;
    const newScroll = Math.min(Math.max(0, dragStartScroll.current + diff), maxScroll);
    setScrollX(newScroll);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsDraggingState(false);
    const step = getStep();
    if (Math.abs(dragDistance.current) > 30) {
      const snapped = Math.round(scrollX / step) * step;
      setScrollX(Math.min(Math.max(0, snapped), maxScroll));
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

      {/* Bounded Horizontal Stage (Stops flush at ends, never leaves empty center space) */}
      <div
        className={`curved-gallery-stage ${isDraggingState ? 'is-dragging' : ''}`}
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="curved-gallery-perspective-track"
          ref={trackRef}
          style={{
            transform: `translate3d(-${scrollX}px, 0, 0)`,
            transition: isDraggingState ? 'none' : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {GALLERY_ITEMS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                className={`curved-gallery-card-wrap ${isActive ? 'is-active' : ''}`}
                onClick={() => setSelectedItem(item)}
              >
                {/* 3D Card Body */}
                <div className="curved-gallery-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="curved-gallery-img"
                    loading="lazy"
                    style={{ objectPosition: item.imgPos || 'center' }}
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

        {/* Floating Side Navigation Arrows with Boundary Disabling */}
        <button
          className={`curved-nav-btn nav-prev ${scrollX <= 5 ? 'is-disabled' : ''}`}
          type="button"
          onClick={prevSlide}
          disabled={scrollX <= 5}
          style={{
            opacity: scrollX <= 5 ? 0.25 : 1,
            pointerEvents: scrollX <= 5 ? 'none' : 'auto',
            cursor: scrollX <= 5 ? 'not-allowed' : 'pointer'
          }}
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className={`curved-nav-btn nav-next ${scrollX >= maxScroll - 5 ? 'is-disabled' : ''}`}
          type="button"
          onClick={nextSlide}
          disabled={scrollX >= maxScroll - 5}
          style={{
            opacity: scrollX >= maxScroll - 5 ? 0.25 : 1,
            pointerEvents: scrollX >= maxScroll - 5 ? 'none' : 'auto',
            cursor: scrollX >= maxScroll - 5 ? 'not-allowed' : 'pointer'
          }}
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
            className={`curved-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToSlide(idx)}
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
