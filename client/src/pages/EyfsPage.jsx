import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import EyfsApproach from '../components/EyfsApproach';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Sparkles, CheckCircle2, BookOpen, Heart, Award, 
  MessageCircle, Dumbbell, Compass, Palette, Calculator, 
  Globe2, ArrowRight, Calendar, Star, Check
} from 'lucide-react';

const EYFS_AREAS = [
  {
    id: 'communication',
    title: 'Communication & Language',
    short: 'Speech & Listening',
    icon: MessageCircle,
    color: '#e11d48',
    bg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    desc: 'Rich language immersion through bilingual story rugs, rhyming finger games, and daily open conversation. Children express thoughts, listen attentively to peers, and build a massive vocabulary naturally.',
    image: '/images/growing-minds-center.jpg',
    milestones: ['Fluent Sentence Construction', 'Active Listening & Story Recall', 'Bilingual Arabic & English Familiarity'],
    badge: 'Language Milestone 🗣️'
  },
  {
    id: 'physical',
    title: 'Physical Development',
    short: 'Motor Skills & Health',
    icon: Dumbbell,
    color: '#0284c7',
    bg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    desc: 'Fine motor control with Montessori pincer tweezers, wooden bead threading, and playdough sculpting, paired with gross motor stamina on shaded grass turf balance beams and trike loops.',
    image: '/images/outdoor.jpg',
    milestones: ['Dynamic Bilateral Balance', 'Pencil Grip & Scissor Mastery', 'Spatial Coordination & Agility'],
    badge: 'Motor Agility 🏃'
  },
  {
    id: 'psed',
    title: 'Personal, Social & Emotional (PSED)',
    short: 'Empathy & Confidence',
    icon: Heart,
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    desc: 'Supporting emotional regulation, authentic self-confidence, empathetic sharing, and collaborative problem-solving. Children learn to name their feelings and negotiate conflicts with kindness.',
    image: '/images/nurturing-hero.jpg',
    milestones: ['Self-Regulation & Calming Habits', 'Proactive Turn-Taking & Sharing', 'Confidence in New Environments'],
    badge: 'Emotional Growth ❤️'
  },
  {
    id: 'literacy',
    title: 'Literacy & Jolly Phonics',
    short: 'Phonics & Reading',
    icon: BookOpen,
    color: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    desc: 'Sensory letter sound baskets, multi-sensory Jolly Phonics actions, tactile sand tracing, and captivating illustrations that spark a genuine lifelong love for books.',
    image: '/images/classroom.jpg',
    milestones: ['Letter Sound Recognition', 'CVC Word Blending (Cat, Sun)', 'Mark Making & Early Writing'],
    badge: 'Phonics Reader 📖'
  },
  {
    id: 'math',
    title: 'Mathematics & Spatial Sense',
    short: 'Numbers & Shapes',
    icon: Calculator,
    color: '#8b5cf6',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    desc: 'Concrete math through wooden counting blocks, balance scales, pattern beads, and measuring spoons. Math is never memorized abstractly; it is touched, compared, and understood.',
    image: '/images/activity-mini-stem.jpg',
    milestones: ['1-to-1 Quantity Correspondence', '2D & 3D Geometric Sorting', 'Pattern Recognition & Sequencing'],
    badge: 'Math Thinker 🔢'
  },
  {
    id: 'world',
    title: 'Understanding the World',
    short: 'Nature & Science',
    icon: Globe2,
    color: '#059669',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    desc: 'Investigating living plants in the nursery garden, shadow tracing under sunshine, early digital tools, and learning about diverse cultures, families, and communities.',
    image: '/images/hero.jpg',
    milestones: ['Botanical & Animal Life Cycles', 'Cause & Effect Physics Intuition', 'Cultural Respect & Curiosity'],
    badge: 'Little Scientist 🌍'
  },
  {
    id: 'arts',
    title: 'Expressive Arts & Design',
    short: 'Music & Creativity',
    icon: Palette,
    color: '#ec4899',
    bg: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
    desc: 'Musical rhythm shakers, open-ended washable easel painting, dramatic roleplay dress-up, and tactile collage craft where unique creative thinking is joyfully celebrated.',
    image: '/images/activity-little-artists.jpg',
    milestones: ['Rhythm & Musical Pitch Mimicry', 'Original Imaginative Artwork', 'Dramatic Expressive Roleplay'],
    badge: 'Creative Artist 🎨'
  }
];

export default function EyfsPage({ onBookVisitClick }) {
  const [activeAreaIdx, setActiveAreaIdx] = useState(0);
  const curArea = EYFS_AREAS[activeAreaIdx];
  const AreaIcon = curArea.icon;

  return (
    <div>
      <PageHeader
        badge="British EYFS Framework"
        title="Curious Minds Start With Playful Learning"
        subtitle="Discover how purposeful play, creativity, and thoughtful educator observation support each child's intellectual, emotional, and social development."
        onBookVisitClick={onBookVisitClick}
        image="/images/growing-minds-center.jpg"
        imageAlt="Child engaging in sensory fine motor exploration at Just Like Home Nursery"
        primaryCtaText="Explore EYFS"
        secondaryCtaText="See How It Works"
        cardProgress={{
          label: "Prime Areas",
          subject: "Phonics",
          status: "90% complete",
          percentage: 90
        }}
        cardGreatJob={{
          title: "British EYFS ⭐",
          subtitle: "7 Core Milestones"
        }}
        cardNextLesson={{
          label: "Next Activity",
          subject: "Sensory",
          topic: "Discovery Lab"
        }}
      />

      {/* SECTION 1: Interactive 7 Areas of EYFS Learning */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <RevealOnScroll animation="from-top">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
              <span className="badge-gold">7 PILLARS OF BRITISH EYFS</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                color: '#1e293b',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}>
                Interactive EYFS Learning Wheel
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.65 }}>
                Click each of the 7 developmental areas to see how our curriculum weaves learning through play, daily teacher observations, and personalized milestones.
              </p>
            </div>
          </RevealOnScroll>

          {/* EYFS Tabs Bar */}
          <div className="fac-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            {EYFS_AREAS.map((area, aIdx) => {
              const TabIcon = area.icon;
              const isActive = aIdx === activeAreaIdx;
              return (
                <button
                  key={area.id}
                  type="button"
                  className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveAreaIdx(aIdx)}
                  style={isActive ? { background: area.color, borderColor: area.color } : {}}
                >
                  <TabIcon size={16} style={{ color: isActive ? '#ffffff' : area.color }} />
                  <span>{area.short}</span>
                </button>
              );
            })}
          </div>

          {/* Split Showcase Container */}
          <div 
            className="fac-showcase-container"
            style={{
              padding: '2.5rem 3rem 3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Left Content Column */}
            <div key={`${curArea.id}-content`} style={{ animation: 'facContentSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: curArea.bg,
                color: curArea.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}>
                <AreaIcon size={15} />
                <span>British EYFS Core Area &bull; Villa 47</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {curArea.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {curArea.desc}
              </p>

              {/* Milestones List */}
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '14px 18px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Target Developmental Milestones
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {curArea.milestones.map((m, mIdx) => (
                    <div key={mIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                      <CheckCircle2 size={15} style={{ color: curArea.color, flexShrink: 0 }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onBookVisitClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    background: curArea.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 20px -4px ${curArea.color}60`
                  }}
                >
                  <span>See How We Teach This</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div key={`${curArea.id}-image`} style={{ position: 'relative', animation: 'facImageSlide 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.18)',
                border: '5px solid #ffffff'
              }}>
                <img
                  src={curArea.image}
                  alt={curArea.title}
                  style={{ width: '100%', height: '410px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Badge */}
              <div
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '-18px',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  padding: '10px 18px',
                  boxShadow: '0 18px 36px -8px rgba(0, 0, 0, 0.16)',
                  border: '2px solid rgba(255, 255, 255, 0.95)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#0f172a'
                }}
              >
                {curArea.badge}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main EYFS Component */}
      <EyfsApproach />

      {/* In-depth Methodology Content */}
      <section className="section-padding bg-cream" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <RevealOnScroll animation="zoom-in">
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '2.5rem',
              padding: '3.5rem 3rem',
              border: '1.5px solid rgba(123, 17, 39, 0.1)',
              boxShadow: '0 15px 40px rgba(70, 7, 19, 0.05)'
            }}>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>MORE THAN JUST A LESSON</span>
              <h2 style={{
                fontSize: '2.2rem',
                color: '#3d050f',
                fontFamily: 'var(--font-heading)',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
                fontWeight: 800
              }}>
                Why Play Is the Most Serious Work of Childhood
              </h2>

              <p style={{ fontSize: '1.02rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At Just Like Home Nursery, learning is seamlessly woven into every single hour of the day. Tidying up blocks after free play builds organizational responsibility and spatial categorizing. Sharing a picture book builds vocabulary, phonemic awareness, and listening empathy. Outdoor climbing develops bilateral balance and muscular endurance.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
                margin: '2rem 0'
              }}>
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#fdfbf7',
                  borderRadius: '1.25rem',
                  border: '1.5px solid rgba(123, 17, 39, 0.08)'
                }}>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#7b1127', marginBottom: '0.4rem' }}>
                    No Rigid Worksheets
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    We prioritize sensory trays, tactile letters, and real-world experiments that ignite intrinsic love for learning.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#fdfbf7',
                  borderRadius: '1.25rem',
                  border: '1.5px solid rgba(123, 17, 39, 0.08)'
                }}>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#7b1127', marginBottom: '0.4rem' }}>
                    Child-Paced Progress
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    Educators observe each child's emerging milestones and provide tailored individual scaffolding without pressure.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#fdfbf7',
                  borderRadius: '1.25rem',
                  border: '1.5px solid rgba(123, 17, 39, 0.08)'
                }}>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#7b1127', marginBottom: '0.4rem' }}>
                    Daily Observation Logs
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                    Teachers document real learning moments with photographs and feedback shared transparently with parents.
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <button onClick={onBookVisitClick} className="btn-clay-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} />
                  <span>Book an EYFS Consultation &amp; Tour</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
