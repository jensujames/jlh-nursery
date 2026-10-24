import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Camera, Calendar, X, ChevronLeft, ChevronRight, 
  Sparkles, ArrowRight, Info, Compass, Building2, Heart 
} from 'lucide-react';

const FILTERS = [
  { id: 'all', label: 'All Photos (82)' },
  { id: 'eyfs', label: 'Early Years Foundation' },
  { id: 'nursery', label: 'Nursery Program' },
  { id: 'preschool', label: 'Preschool' },
  { id: 'school-readiness', label: 'School Readiness' },
  { id: 'arabic', label: 'Arabic Immersion' },
  { id: 'art-creativity', label: 'Art & Creativity' },
  { id: 'early-numeracy', label: 'Early Numeracy & Math' },
  { id: 'phonics-literacy', label: 'Phonics & Literacy' },
  { id: 'physical-play', label: 'Physical & Outdoor Play' },
  { id: 'life-skills', label: 'Life Skills & Independence' },
  { id: 'music-stories', label: 'Music & Stories' },
  { id: 'daycare', label: 'Daycare & Care' },
  { id: 'send', label: 'SEND Support' }
];

const GALLERY_IMAGES = [
  // 1. Early Years Foundation (10)
  { src: '/media/eyfs/eyfs-1.jpg', category: 'eyfs', caption: 'Early Years sensory exploration and joyful discovery.', alt: 'Early Years Foundation discovery' },
  { src: '/media/eyfs/eyfs-2.jpg', category: 'eyfs', caption: 'Engaged small group activities fostering communication.', alt: 'Early Years collaborative activity' },
  { src: '/media/eyfs/eyfs-3.jpg', category: 'eyfs', caption: 'Creative tactile learning in a bright, child-friendly environment.', alt: 'Tactile learning' },
  { src: '/media/eyfs/eyfs-4.jpg', category: 'eyfs', caption: 'Fine-motor dexterity and hand-eye coordination games.', alt: 'Fine motor activities' },
  { src: '/media/eyfs/eyfs-5.jpg', category: 'eyfs', caption: 'Storytime and interactive listening circle.', alt: 'Story circle time' },
  { src: '/media/eyfs/eyfs-6.jpg', category: 'eyfs', caption: 'Creative mark-making and early artistic expression.', alt: 'Creative mark making' },
  { src: '/media/eyfs/eyfs-7.jpg', category: 'eyfs', caption: 'Sensory water and texture exploration trays.', alt: 'Sensory exploration' },
  { src: '/media/eyfs/eyfs-8.jpg', category: 'eyfs', caption: 'Curious minds discovering patterns and colors.', alt: 'Colors and patterns discovery' },
  { src: '/media/eyfs/eyfs-9.jpg', category: 'eyfs', caption: 'Gentle educator guidance and supportive routines.', alt: 'Educator guidance' },
  { src: '/media/eyfs/eyfs-10.jpg', category: 'eyfs', caption: 'Joyful celebrations and daily learning milestones.', alt: 'Daily learning moments' },

  // 2. Nursery Program (9)
  { src: '/media/nursery/nursery-1.jpg', category: 'nursery', caption: 'Nursery program interactive play and motor development.', alt: 'Nursery program active play' },
  { src: '/media/nursery/nursery-2.jpg', category: 'nursery', caption: 'Purposeful wooden blocks and spatial construction.', alt: 'Wooden block construction' },
  { src: '/media/nursery/nursery-3.jpg', category: 'nursery', caption: 'Safe indoor classrooms with natural light and safety fittings.', alt: 'Sunlit nursery classroom' },
  { src: '/media/nursery/nursery-4.jpg', category: 'nursery', caption: 'Social interaction and cooperative peer friendships.', alt: 'Social peer play' },
  { src: '/media/nursery/nursery-5.jpg', category: 'nursery', caption: 'Loving, motherly care and one-on-one attention.', alt: 'Motherly educator care' },
  { src: '/media/nursery/nursery-6.jpg', category: 'nursery', caption: 'Music, rhythm instruments, and joyful song circles.', alt: 'Music and rhythm circle' },
  { src: '/media/nursery/nursery-7.jpg', category: 'nursery', caption: 'Imaginative role-play and dress-up exploration.', alt: 'Imaginative role play' },
  { src: '/media/nursery/nursery-8.jpg', category: 'nursery', caption: 'Concentration and cognitive problem-solving games.', alt: 'Cognitive problem solving' },
  { src: '/media/nursery/nursery-9.jpg', category: 'nursery', caption: 'Outdoor garden exploration and energetic play.', alt: 'Outdoor garden movement' },

  // 3. Preschool Program (6)
  { src: '/media/preschool/preschool-1.jpg', category: 'preschool', caption: 'Preschool literacy and phonics sound recognition.', alt: 'Preschool phonics and literacy' },
  { src: '/media/preschool/preschool-2.jpg', category: 'preschool', caption: 'Early numeracy counting and mathematical sorting.', alt: 'Early numeracy counting' },
  { src: '/media/preschool/preschool-3.jpg', category: 'preschool', caption: 'Pre-writing and number tracing foundational practice.', alt: 'Preschool number tracing' },
  { src: '/media/preschool/preschool-4.jpg', category: 'preschool', caption: 'Bilingual Arabic & English immersion activities.', alt: 'Arabic immersion learning' },
  { src: '/media/preschool/preschool-5.jpg', category: 'preschool', caption: 'Science discovery and simple hands-on experiments.', alt: 'Preschool science discovery' },
  { src: '/media/preschool/preschool-6.jpg', category: 'preschool', caption: 'Group collaboration and table manners routines.', alt: 'Table routines and manners' },

  // 4. School Readiness (8)
  { src: '/media/school-readiness/school-readiness-1.jpg', category: 'school-readiness', caption: 'Primary school transition: Pre-writing pencil grip practice.', alt: 'Pre-writing skills' },
  { src: '/media/school-readiness/school-readiness-2.jpg', category: 'school-readiness', caption: 'Structured listening routines and following instructions.', alt: 'Listening routines' },
  { src: '/media/school-readiness/school-readiness-3.jpg', category: 'school-readiness', caption: 'Numeracy challenges: Shapes, geometry, and measurements.', alt: 'Numeracy challenges' },
  { src: '/media/school-readiness/school-readiness-4.jpg', category: 'school-readiness', caption: 'Independent self-care: Organizing books and belongings.', alt: 'Independent self care' },
  { src: '/media/school-readiness/school-readiness-5.jpg', category: 'school-readiness', caption: 'Confidence building through classroom presentations.', alt: 'Confidence building' },
  { src: '/media/school-readiness/school-readiness-6.jpg', category: 'school-readiness', caption: 'Gross motor agility on our shaded playground.', alt: 'Playground agility' },
  { src: '/media/school-readiness/school-readiness-7.jpg', category: 'school-readiness', caption: 'Inquiry-based question time and conversational skills.', alt: 'Conversational skills' },
  { src: '/media/school-readiness/school-readiness-8.jpg', category: 'school-readiness', caption: 'Proud school-ready learners celebrating progress.', alt: 'School ready learners' },

  // 5. Arabic Immersion (6)
  { src: '/media/arabic/arabic-1.jpg', category: 'arabic', caption: 'Arabic alphabet and phonics letter recognition with sensory flashcards.', alt: 'Arabic letter recognition flashcards' },
  { src: '/media/arabic/arabic-2.jpg', category: 'arabic', caption: 'Hands-on Arabic vocabulary building through playful object associations.', alt: 'Hands-on Arabic vocabulary building' },
  { src: '/media/arabic/arabic-3.jpg', category: 'arabic', caption: 'Bilingual conversational storytelling circles in Arabic and English.', alt: 'Bilingual conversational storytelling' },
  { src: '/media/arabic/arabic-4.jpg', category: 'arabic', caption: 'Early Arabic mark-making and letter formation practice.', alt: 'Early Arabic mark making' },
  { src: '/media/arabic/arabic-5.jpg', category: 'arabic', caption: 'Interactive Arabic learning games encouraging peer communication.', alt: 'Interactive Arabic learning games' },
  { src: '/media/arabic/arabic-6.jpg', category: 'arabic', caption: 'Cultural heritage celebrations and joyful Arabic rhymes.', alt: 'Cultural heritage celebrations and Arabic rhymes' },

  // 6. Art & Creativity (8)
  { src: '/media/art-creativity/art-1.jpg', category: 'art-creativity', caption: 'Vibrant easel painting and expressive color mixing in the atelier.', alt: 'Easel painting in art atelier' },
  { src: '/media/art-creativity/art-2.jpg', category: 'art-creativity', caption: 'Collage and multimedia craft projects encouraging imaginative vision.', alt: 'Collage and multimedia crafts' },
  { src: '/media/art-creativity/art-3.jpg', category: 'art-creativity', caption: 'Tactile finger painting and sensory texture discovery.', alt: 'Tactile finger painting' },
  { src: '/media/art-creativity/art-4.jpg', category: 'art-creativity', caption: 'Little artists exploring clay modeling, shapes, and sculpting.', alt: 'Clay modeling and sculpting' },
  { src: '/media/art-creativity/art-5.jpg', category: 'art-creativity', caption: 'Fine-motor brush strokes and collaborative mural painting.', alt: 'Collaborative mural painting' },
  { src: '/media/art-creativity/art-6.jpg', category: 'art-creativity', caption: 'Handmade seasonal crafts and creative holiday keepsakes.', alt: 'Handmade seasonal crafts' },
  { src: '/media/art-creativity/art-7.jpg', category: 'art-creativity', caption: 'Exploring nature-inspired prints and leaf rubbings.', alt: 'Nature inspired art prints' },
  { src: '/media/art-creativity/art-8.jpg', category: 'art-creativity', caption: 'Proud young creators showcasing their completed gallery masterpieces.', alt: 'Showcasing completed art masterpieces' },

  // 7. Early Numeracy & Math (10)
  { src: '/media/early-numeracy/numeracy-1.jpg', category: 'early-numeracy', caption: 'Hands-on counting pegs and early quantitative matching.', alt: 'Hands-on counting pegs' },
  { src: '/media/early-numeracy/numeracy-2.jpg', category: 'early-numeracy', caption: 'Geometric 2D and 3D shape sorting with colorful solid blocks.', alt: 'Geometric shape sorting' },
  { src: '/media/early-numeracy/numeracy-3.jpg', category: 'early-numeracy', caption: 'Pattern sequencing and color correlation puzzles.', alt: 'Pattern sequencing and sorting' },
  { src: '/media/early-numeracy/numeracy-4.jpg', category: 'early-numeracy', caption: 'Exploring weight, balance, and spatial measurement scales.', alt: 'Weight and balance scales' },
  { src: '/media/early-numeracy/numeracy-5.jpg', category: 'early-numeracy', caption: 'Interactive number line challenges and numerical sequencing.', alt: 'Interactive number line challenges' },
  { src: '/media/early-numeracy/numeracy-6.jpg', category: 'early-numeracy', caption: 'Tactile abacus bead counting and basic addition concepts.', alt: 'Tactile abacus bead counting' },
  { src: '/media/early-numeracy/numeracy-7.jpg', category: 'early-numeracy', caption: 'Comparing sizes, lengths, and dimensional problem-solving.', alt: 'Comparing sizes and lengths' },
  { src: '/media/early-numeracy/numeracy-8.jpg', category: 'early-numeracy', caption: 'Math games connecting numbers with everyday real-world objects.', alt: 'Everyday math connections' },
  { src: '/media/early-numeracy/numeracy-9.jpg', category: 'early-numeracy', caption: 'Peer collaboration on large-format counting puzzles.', alt: 'Collaborative counting puzzles' },
  { src: '/media/early-numeracy/numeracy-10.jpg', category: 'early-numeracy', caption: 'Joyful celebration of early mathematical discovery milestones.', alt: 'Math milestone celebrations' },

  // 8. Phonics & Literacy (6)
  { src: '/media/phonics-literacy/phonics-1.jpg', category: 'phonics-literacy', caption: 'Letter sound blending and synthetic phonics flashcard games.', alt: 'Synthetic phonics flashcard games' },
  { src: '/media/phonics-literacy/phonics-2.jpg', category: 'phonics-literacy', caption: 'Pre-writing mark making: Sand tracing and tactile alphabet letters.', alt: 'Sand tracing tactile letters' },
  { src: '/media/phonics-literacy/phonics-3.jpg', category: 'phonics-literacy', caption: 'Interactive picture book reading and story character discussions.', alt: 'Picture book reading' },
  { src: '/media/phonics-literacy/phonics-4.jpg', category: 'phonics-literacy', caption: 'Rhyme recognition and phonological awareness listening circles.', alt: 'Rhyme recognition circles' },
  { src: '/media/phonics-literacy/phonics-5.jpg', category: 'phonics-literacy', caption: 'Matching uppercase and lowercase alphabet puzzles with peers.', alt: 'Alphabet uppercase lowercase matching' },
  { src: '/media/phonics-literacy/phonics-6.jpg', category: 'phonics-literacy', caption: 'Early emergent reading confidence with guided educator support.', alt: 'Guided emergent reading' },

  // 9. Physical & Outdoor Play (8)
  { src: '/media/physical-play/physical-6.jpg', category: 'physical-play', caption: 'Exciting spiral slide and playground adventures under full UV sun canopies.', alt: 'Outdoor playground slide under UV shade' },
  { src: '/media/physical-play/physical-8.jpg', category: 'physical-play', caption: 'High-spirits playhouse exploration and active outdoor friendship moments.', alt: 'Outdoor playhouse climbing and laughter' },
  { src: '/media/physical-play/physical-7.jpg', category: 'physical-play', caption: 'Gentle garden swings and laughter by our bright rainbow garden fence.', alt: 'Garden swings and colorful rainbow fence' },
  { src: '/media/physical-play/physical-5.jpg', category: 'physical-play', caption: 'Joyful outdoor morning gathering and friendly peer train on our shaded turf.', alt: 'Children gathered on shaded outdoor play garden' },
  { src: '/media/physical-play/physical-1.jpg', category: 'physical-play', caption: 'Gross motor coordination on our safe, shaded outdoor playground.', alt: 'Outdoor shaded playground play' },
  { src: '/media/physical-play/physical-2.jpg', category: 'physical-play', caption: 'Balance beam steps and body spatial awareness obstacle courses.', alt: 'Balance beam obstacle course' },
  { src: '/media/physical-play/physical-3.jpg', category: 'physical-play', caption: 'Tricycle riding and gentle navigation on the garden track.', alt: 'Tricycle riding track' },
  { src: '/media/physical-play/physical-4.jpg', category: 'physical-play', caption: 'Active slide play, climbing frames, and joyful outdoor laughter.', alt: 'Climbing frames and slides' },

  // 10. Life Skills & Independence (4)
  { src: '/media/life-skills/life-skills-1.jpg', category: 'life-skills', caption: 'Developing self-help independence: Organizing personal nursery bags and shoes.', alt: 'Organizing personal bags and shoes' },
  { src: '/media/life-skills/life-skills-2.jpg', category: 'life-skills', caption: 'Hygienic hand-washing routines and healthy daily habits.', alt: 'Hand washing and healthy hygiene routines' },
  { src: '/media/life-skills/life-skills-3.jpg', category: 'life-skills', caption: 'Table manners, respectful peer sharing, and tidy-up time cooperation.', alt: 'Table manners and tidy up cooperation' },
  { src: '/media/life-skills/life-skills-4.jpg', category: 'life-skills', caption: 'Practicing coat zipping, shoe buckles, and motor autonomy.', alt: 'Coat zipping and fine motor autonomy' },

  // 11. Music, Rhymes & Stories (1)
  { src: '/media/music-stories/music-1.jpg', category: 'music-stories', caption: 'Music circle time: Rhythm sticks, percussion instruments, and joyful singing.', alt: 'Music circle and percussion instruments' },

  // 12. Daycare & Rest (4)
  { src: '/media/daycare/daycare-1.jpg', category: 'daycare', caption: 'Flexible full-day care in a warm home-away-from-home environment.', alt: 'Full day care comfort' },
  { src: '/media/daycare/daycare-2.jpg', category: 'daycare', caption: 'Nutritious snack time and gentle social habits.', alt: 'Nutritious snack time' },
  { src: '/media/daycare/daycare-3.jpg', category: 'daycare', caption: 'Quiet room resting sanctuary with individual sanitized cots.', alt: 'Quiet room rest' },
  { src: '/media/daycare/daycare-4.jpg', category: 'daycare', caption: 'Afternoon enrichment, outdoor play, and peaceful pickup.', alt: 'Afternoon play' },

  // 13. SEND Support (2)
  { src: '/media/send/send-1.jpg', category: 'send', caption: 'Individualized SEND learning support with dedicated attention.', alt: 'SEND individualized learning' },
  { src: '/media/send/send-2.jpg', category: 'send', caption: 'Inclusive sensory development celebrating every child’s milestone.', alt: 'Inclusive developmental support' }
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
        image="/media/nursery/nursery-1.jpg"
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
      <section 
        style={{ 
          padding: 'clamp(64px, 7vw, 90px) 20px', 
          backgroundColor: '#f8faf8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          {/* 3 Intro Captions */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '26px',
              marginBottom: '48px'
            }}
          >
            <RevealOnScroll>
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.2rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                <div
                  className="luxury-icon-box luxury-icon-burgundy"
                  style={{
                    width: '58px',
                    height: '58px',
                    marginBottom: '18px'
                  }}
                >
                  <Building2 size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '21px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '10px'
                  }}
                >
                  Our Spaces
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                  Explore classrooms and activity areas created for safe, happy learning.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={50}>
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.2rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #d97706, #f59e0b)' }} />
                <div
                  className="luxury-icon-box luxury-icon-gold"
                  style={{
                    width: '58px',
                    height: '58px',
                    marginBottom: '18px'
                  }}
                >
                  <Sparkles size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '21px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '10px'
                  }}
                >
                  Learning in Action
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
                  See how play, stories, exploration and conversation turn everyday moments into learning.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '2rem',
                  padding: '2.2rem 2rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #e11d48, #fb7185)' }} />
                <div
                  className="luxury-icon-box luxury-icon-coral"
                  style={{
                    width: '58px',
                    height: '58px',
                    marginBottom: '18px'
                  }}
                >
                  <Heart size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '21px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '10px'
                  }}
                >
                  Special Moments
                </h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
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
              gap: '12px',
              marginBottom: '44px'
            }}
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  style={{
                    padding: '11px 24px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: isActive ? '1.5px solid #721024' : '1.5px solid rgba(114, 16, 36, 0.14)',
                    backgroundColor: isActive ? '#721024' : '#ffffff',
                    color: isActive ? '#FAF5EB' : '#475569',
                    boxShadow: isActive ? '0 6px 20px rgba(114, 16, 36, 0.25)' : '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#721024';
                      e.currentTarget.style.color = '#721024';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.14)';
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
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
              gap: '26px'
            }}
          >
            {filteredImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  backgroundColor: '#f1f5f9',
                  boxShadow: '0 10px 30px rgba(74, 14, 26, 0.06)',
                  border: '3px solid #ffffff',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.015)';
                  e.currentTarget.style.boxShadow = '0 24px 50px rgba(114, 16, 36, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 14, 26, 0.06)';
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(114, 16, 36, 0.88) 0%, rgba(114, 16, 36, 0.2) 45%, transparent 70%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                    color: '#ffffff'
                  }}
                >
                  <p style={{ margin: 0, fontSize: '14.5px', fontWeight: '700', lineHeight: 1.45, textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. IMAGE PUBLISHING NOTE */}
      <section 
        style={{ 
          padding: 'clamp(48px, 6vw, 72px) 20px', 
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              className="luxury-creative-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '22px',
                padding: '28px 34px',
                borderRadius: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 12px 34px rgba(74, 14, 26, 0.04), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
              
              <div
                className="luxury-icon-box luxury-icon-burgundy"
                style={{
                  width: '54px',
                  height: '54px',
                  flexShrink: 0
                }}
              >
                <Info size={24} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '18px',
                    fontWeight: '850',
                    color: '#721024',
                    margin: '0 0 8px 0'
                  }}
                >
                  Image Publishing Note
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
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
