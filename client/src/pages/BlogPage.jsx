import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Brain
} from 'lucide-react';

export default function BlogPage({ onBookVisitClick }) {
  // 1. Minimized Featured Guide Tab State
  const [activeGuideIdx, setActiveGuideIdx] = useState(0);

  // 2. Articles Category Filter State & Modal Reader State
  const [activeCat, setActiveCat] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Minimized Featured Guides (Concise & Punchy)
  const featuredGuides = [
    {
      id: 'settling-in',
      badge: 'Settling-In Guide',
      title: 'Tear-Free Mornings: Gentle Settling',
      tagline: 'Practical routines that transform separation anxiety into confidence.',
      description: 'Proven strategies from our educators—from predictable goodbye rituals to transitional comfort tokens—that establish emotional trust in the first weeks.',
      tips: [
        'Practice a cheerful 30-second goodbye ritual',
        'Never slip away unannounced; predictability builds trust',
        'Comfort items & educator cuddles ease early drop-offs'
      ],
      readTime: '4 min read',
      author: 'Ms. Sarah Al-Nuaimi',
      image: '/images/hero.jpg',
      imageAlt: 'Educator comforting toddler with a warm smile during morning arrival',
      floatingBadge1: { icon: '❤️', text: 'Gentle Care' },
      floatingBadge2: { icon: '⏱️', text: '4 Min Read' },
      accentColor: '#ea580c',
      accentBg: '#fff7ed'
    },
    {
      id: 'eyfs-play',
      badge: 'British EYFS Play',
      title: 'How Play Wires Early Brain Connections',
      tagline: 'Block building, sensory water pouring, and outdoor movement.',
      description: 'Between ages 0 and 5, human brain synapses form faster than ever. Stacking blocks and sensory water trays wire mathematical, spatial, and social resilience.',
      tips: [
        'Sensory bins build pincer grip for future pencil control',
        'Block building fosters early spatial logic & sharing',
        'Shaded garden circuits stimulate balance & coordination'
      ],
      readTime: '5 min read',
      author: 'Ms. Elena Rostova',
      image: '/images/activity-mini-stem.jpg',
      imageAlt: 'Toddlers experimenting with wooden gear toys and tactile balance ramps',
      floatingBadge1: { icon: '🧠', text: 'Brain Growth' },
      floatingBadge2: { icon: '✨', text: 'EYFS Spec' },
      accentColor: '#0284c7',
      accentBg: '#e0f2fe'
    },
    {
      id: 'independence',
      badge: 'Life Skills',
      title: 'Fostering "I Can Do It!" Toddler Autonomy',
      tagline: 'Empowering children with self-help dressing and proud habits.',
      description: 'Setting up low-height hooks, reachable toy cubbies, and celebrating small efforts fosters exceptional self-esteem before big school begins.',
      tips: [
        'Velcro shoes and simple "toes first" practice',
        'Child-safe water cups for independent pouring',
        'Fun clean-up songs to make tidying collaborative'
      ],
      readTime: '3 min read',
      author: 'Nurse Fatima Hassan',
      image: '/images/growing-minds-center.jpg',
      imageAlt: 'Young child independently organizing wooden blocks on low classroom shelf',
      floatingBadge1: { icon: '⭐', text: 'Independence' },
      floatingBadge2: { icon: '🌱', text: 'Self-Esteem' },
      accentColor: '#16a34a',
      accentBg: '#dcfce7'
    },
    {
      id: 'choosing-nursery',
      badge: 'Nursery Checklist',
      title: 'How to Choose the Right Nursery in Ajman',
      tagline: 'Key benchmarks: warmth, ratios, safety, and curriculum.',
      description: 'When touring nurseries in Ajman, observe eye-level teacher interactions, ask about DHA/MOH nurse presence, and check shaded outdoor grounds.',
      tips: [
        'Observe educator eye-level connection and genuine warmth',
        'Verify MOE licensing, clinic nurse & 24/7 CCTV coverage',
        'Check child-to-staff ratios and UV-shaded garden play'
      ],
      readTime: '4 min read',
      author: 'Advisory Team',
      image: '/images/outdoor.jpg',
      imageAlt: 'Parent observing outdoor garden play at Just Like Home Nursery Villa 47',
      floatingBadge1: { icon: '🛡️', text: 'Safety First' },
      floatingBadge2: { icon: '📋', text: 'Checklist' },
      accentColor: '#9333ea',
      accentBg: '#f3e8ff'
    }
  ];

  // Articles Library
  const articles = [
    {
      id: 'settling-in-depth',
      category: 'settling-in',
      categoryLabel: 'Settling-In',
      title: 'Preparing Your Child for Their First Day at Nursery',
      readTime: '4 min read',
      author: 'Ms. Sarah Al-Nuaimi',
      summary: 'Practical step-by-step guidance to ensure separation anxiety fades into joyful morning drop-offs.',
      content: `
Transitioning into nursery life is a brand-new adventure for your toddler. Here are practical strategies our experienced team recommends:

### 1. Talk Positively About Nursery
In the weeks leading up, talk about all the exciting new friends, coloring paints, and garden toys waiting for them. Read joyful storybooks about going to nursery.

### 2. Visit Together Beforehand
Book a tour at Just Like Home Nursery so your child explores the classroom with you by their side first. Let them touch the blocks and see their teacher's friendly face.

### 3. Create a Consistent Goodbye Ritual
A special double-hug, high-five, and a cheerful "I will see you after afternoon snack!" establishes confidence and predictable security. Never slip away without saying goodbye.

### 4. Trust the Caregivers
Our motherly educators are experienced in comforting little hearts during the first few days with soothing cuddles and sensory distractions. Within a short time, hesitation turns into proud smiles!
      `
    },
    {
      id: 'sensory-play-speech',
      category: 'development',
      categoryLabel: 'Child Development',
      title: 'Why Sensory Play Accelerates Early Speech & Vocabulary',
      readTime: '4 min read',
      author: 'Ms. Elena Rostova',
      summary: 'How touching textures like kinetic sand and water beads builds neurological pathways for language.',
      content: `
Sensory play includes any activity that stimulates your young child's senses: touch, smell, taste, movement, balance, sight, and hearing.

### 1. Builds Crucial Nerve Connections
Sensory stimulation creates rich pathways in the brain's neural architecture, enhancing complex problem-solving and memory retention.

### 2. Promotes Spontaneous Language Development
Handling different textures (slimy, coarse, smooth, fluffy, chilly) naturally prompts descriptive vocabulary: "Look, the water is cool and slippery!"

### 3. Deep Calming & Emotion Regulation
Agitated or overstimulated toddlers find rhythmic water pouring and clay kneading deeply soothing, helping them self-regulate after high-energy periods.
      `
    },
    {
      id: 'potty-training-success',
      category: 'routines',
      categoryLabel: 'Routines & Habit',
      title: 'Gentle Potty Training: Home & Nursery in Sync',
      readTime: '5 min read',
      author: 'Nurse Fatima Hassan',
      summary: 'How our educators and parents collaborate seamlessly to celebrate bathroom independence with zero stress.',
      content: `
Potty training is not a race—it is a developmental readiness milestone that flourishes with patience, positive reinforcement, and consistent routines.

### 1. Identifying True Readiness Cues
Look for signs like staying dry for 2 hours, showing curiosity when you use the restroom, or expressing discomfort with a wet diaper.

### 2. Consistency Across Both Settings
When you begin training at home, notify our team immediately. We follow your exact bathroom intervals and use the same encouraging words your child hears at home.

### 3. Child-Sized Sanitation & Hygiene
Our nursery bathrooms feature child-height toilets, low sinks with automatic faucets, and non-slip stepping stools to make self-care fun and achievable.
      `
    },
    {
      id: 'bilingual-brains',
      category: 'eyfs',
      categoryLabel: 'EYFS & Learning',
      title: 'Nurturing Bilingual Fluency: English & Arabic',
      readTime: '3 min read',
      author: 'Admissions Team',
      summary: 'How gentle daily linguistic immersion enriches executive function and cultural appreciation.',
      content: `
Children under age 5 possess a remarkable neuroplasticity that allows them to acquire multiple languages without formal grammatical stress.

### 1. Daily Musical & Rhythmic Immersion
Through morning circle songs, rhythmic Arabic nursery rhymes, and dual-language picture books, children absorb phonemes naturally.

### 2. Enhanced Cognitive Flexibility
Research shows bilingual children develop superior attentional control, problem-solving ability, and empathetic social understanding.

### 3. Preserving Cultural Roots in the UAE
At Just Like Home Nursery, we celebrate UAE cultural heritage with native Arabic speaking educators alongside native English immersion.
      `
    },
    {
      id: 'sleep-routines',
      category: 'routines',
      categoryLabel: 'Routines & Habit',
      title: 'Establishing Restful Sleep Habits for Toddlers',
      readTime: '4 min read',
      author: 'Nurse Fatima Hassan',
      summary: 'Wind-down bedtime routines, dim ambient lighting, and naptime rhythm secrets from our nursery quiet room.',
      content: `
Quality sleep is foundational for emotional resilience, physical growth, and immune vitality in early childhood.

### 1. The Power of a 20-Minute Wind-Down
A predictable sequence—warm bath, pyjamas, dim lights, and two soothing storybooks—signals the brain to release melatonin naturally.

### 2. Synchronized Nursery Naps
Our quiet sleep room is temperature-regulated at 24°C with gentle white noise and individual sanitized cribs, ensuring your child naps peacefully without overtired meltdowns.
      `
    },
    {
      id: 'nutrition-habits',
      category: 'development',
      categoryLabel: 'Child Development',
      title: 'Raising Adventurous Eaters: Overcoming Picky Habits',
      readTime: '4 min read',
      author: 'Advisory Team',
      summary: 'Playful mealtime strategies, colorful fruit platters, and positive peer modeling in nursery dining.',
      content: `
Picky eating is a normal developmental phase as toddlers assert control. Here is how we turn mealtimes into joyful culinary adventures:

### 1. The Magic of Peer Modeling
When a child sees their friends cheerfully munching crunchy cucumber slices or sweet melon cubes, curiosity naturally overcomes hesitation!

### 2. Color-Coded Fruit & Snack Bento
Presenting small portions of colorful fruits and finger-food vegetables gives little hands autonomy without overwhelming their plate.
      `
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles', count: articles.length },
    { id: 'settling-in', label: 'Settling-In', count: articles.filter(a => a.category === 'settling-in').length },
    { id: 'eyfs', label: 'EYFS & Learning', count: articles.filter(a => a.category === 'eyfs').length },
    { id: 'development', label: 'Child Growth', count: articles.filter(a => a.category === 'development').length },
    { id: 'routines', label: 'Routines', count: articles.filter(a => a.category === 'routines').length }
  ];

  const filteredArticles = activeCat === 'all'
    ? articles
    : articles.filter(a => a.category === activeCat);

  const currentGuide = featuredGuides[activeGuideIdx];

  return (
    <div style={{ backgroundColor: '#fffcf8', minHeight: '100vh', overflow: 'hidden' }}>
      {/* 1. Page Header */}
      <PageHeader
        badge="Parent Knowledge Hub"
        title="Confident Parenting Starts With Practical Advice"
        subtitle="Practical guidance written by experienced educators: nursery readiness, play-based learning, and tips for Ajman families."
        onBookVisitClick={onBookVisitClick}
        image="/images/activity-creative-play.jpg"
        imageAlt="Parent and educator discussing early childhood development and reading routines"
        primaryCtaText="Explore Parent Guides"
        secondaryCtaText="Book Campus Visit"
        cardProgress={{
          label: "Parent Guides",
          subject: "Readiness Hub",
          status: "6 Articles",
          percentage: 90
        }}
        cardGreatJob={{
          title: "Expert Tips 💡",
          subtitle: "Separation Anxiety"
        }}
        cardNextLesson={{
          label: "Featured Guide",
          subject: "Settling-In",
          topic: "Tear-Free Mornings"
        }}
      />

      {/* 2. Streamlined Interactive Showcase (Minimized & Polished) */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #fffcf8 60%, #fbf5eb 100%)'
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <RevealOnScroll animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge-maroon" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                <Brain size={13} /> PARENT ADVICE
              </span>
              <h2 className="section-title" style={{ marginTop: '0.4rem', marginBottom: '0.6rem', color: '#1e293b' }}>
                Practical Wisdom for <span style={{ color: '#ea580c' }}>Every Childhood Stage</span>
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.96rem' }}>
                Select a topic below to read educator-tested strategies designed to make daily parenting calmer and more joyful.
              </p>

              {/* High-Contrast Tab Selector Pills */}
              <div className="fac-tabs-bar" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                {featuredGuides.map((guide, idx) => {
                  const isActive = activeGuideIdx === idx;
                  return (
                    <button
                      key={guide.id}
                      onClick={() => setActiveGuideIdx(idx)}
                      className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                      style={{
                        padding: '0.55rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.86rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        border: isActive ? '1.5px solid transparent' : '1.5px solid #e2e8f0',
                        backgroundColor: isActive ? '#ea580c' : '#ffffff',
                        color: isActive ? '#ffffff' : '#475569',
                        boxShadow: isActive ? '0 6px 18px rgba(234, 88, 12, 0.3)' : '0 2px 6px rgba(0,0,0,0.02)'
                      }}
                      aria-label={`View ${guide.title}`}
                    >
                      <span>{guide.badge}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Compact Split Showcase Card */}
          <div 
            key={currentGuide.id}
            className="fac-showcase-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: '26px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 16px 36px rgba(234, 88, 12, 0.07), 0 2px 10px rgba(0,0,0,0.02)',
              border: '1.5px solid rgba(234, 88, 12, 0.12)',
              position: 'relative'
            }}
          >
            {/* Left Content Column */}
            <div style={{ animation: 'facContentSlide 0.4s ease-out forwards' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: currentGuide.accentBg,
                color: currentGuide.accentColor,
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: '700',
                marginBottom: '0.75rem'
              }}>
                <Sparkles size={13} />
                <span>{currentGuide.badge}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: '900',
                color: '#1e293b',
                lineHeight: 1.25,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em'
              }}>
                {currentGuide.title}
              </h3>

              <p style={{
                fontSize: '0.94rem',
                color: '#ea580c',
                fontWeight: '600',
                marginBottom: '0.65rem'
              }}>
                {currentGuide.tagline}
              </p>

              <p style={{
                fontSize: '0.92rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}>
                {currentGuide.description}
              </p>

              {/* Compact Tips List */}
              <div style={{ display: 'grid', gap: '0.55rem', marginBottom: '1.5rem' }}>
                {currentGuide.tips.map((tip, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      backgroundColor: currentGuide.accentBg,
                      color: currentGuide.accentColor,
                      padding: '0.2rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={15} />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: '#334155', fontWeight: '600' }}>
                      {tip}
                    </span>
                  </div>
                ))}
              </div>

              {/* Author & Read Time Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.65rem 1.15rem',
                backgroundColor: '#fffaf5',
                borderRadius: '14px',
                border: '1px solid rgba(234, 88, 12, 0.12)',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                color: '#64748b',
                fontWeight: '600'
              }}>
                <span>✍️ {currentGuide.author}</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: currentGuide.accentColor, fontWeight: '700' }}>
                  <Clock size={13} /> {currentGuide.readTime}
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    const matched = articles.find(a => a.id.includes(currentGuide.id)) || articles[0];
                    setSelectedArticle(matched);
                  }}
                  className="btn-clay-gold"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <BookOpen size={15} />
                  <span>Read Full Article</span>
                </button>
                <button
                  onClick={onBookVisitClick}
                  className="btn-clay-emerald"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} />
                  <span>Meet Our Authors</span>
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div style={{ 
              position: 'relative', 
              animation: 'facImageSlide 0.45s ease-out forwards',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 16px 32px rgba(0,0,0,0.1), 0 0 0 8px rgba(255,255,255,0.9)',
                width: '100%',
                maxHeight: '380px',
                aspectRatio: '4/3'
              }}>
                <img
                  src={currentGuide.image}
                  alt={currentGuide.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating Top Badge */}
              <div 
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '999px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: '#1e293b'
                }}
              >
                <span>{currentGuide.floatingBadge1.icon}</span>
                <span>{currentGuide.floatingBadge1.text}</span>
              </div>

              {/* Floating Bottom Badge */}
              <div 
                className="animate-float-alt"
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '999px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: '#1e293b'
                }}
              >
                <span>{currentGuide.floatingBadge2.icon}</span>
                <span>{currentGuide.floatingBadge2.text}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Filterable Articles Library */}
      <section style={{
        position: 'relative',
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.4rem', display: 'inline-flex' }}>
              <BookOpen size={13} /> ARTICLES LIBRARY
            </span>
            <h2 className="section-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem', color: '#1e293b' }}>
              Browse All Guides & <span style={{ color: '#ea580c' }}>Parenting Tips</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.94rem' }}>
              Click any article to read the full guide with actionable takeaways.
            </p>

            {/* Filter Pills */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.55rem',
              marginTop: '1.5rem'
            }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: activeCat === cat.id ? '1.5px solid #ea580c' : '1px solid #e2e8f0',
                    backgroundColor: activeCat === cat.id ? '#ea580c' : '#ffffff',
                    color: activeCat === cat.id ? '#ffffff' : '#64748b',
                    boxShadow: activeCat === cat.id ? '0 4px 14px rgba(234, 88, 12, 0.25)' : 'none'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    marginLeft: '0.35rem',
                    fontSize: '0.74rem',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '999px',
                    backgroundColor: activeCat === cat.id ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                    color: activeCat === cat.id ? '#ffffff' : '#94a3b8'
                  }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1.5px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      color: '#ea580c',
                      backgroundColor: '#fff7ed',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase'
                    }}>
                      {article.categoryLabel}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.76rem',
                      color: '#94a3b8',
                      fontWeight: '600'
                    }}>
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    lineHeight: 1.35,
                    marginBottom: '0.5rem'
                  }}>
                    {article.title}
                  </h4>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem'
                  }}>
                    {article.summary}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                    By {article.author}
                  </span>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    color: '#ea580c'
                  }}>
                    <span>Read</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Article Reading Modal */}
      {selectedArticle && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                backgroundColor: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b'
              }}
              aria-label="Close article"
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{
                fontSize: '0.74rem',
                fontWeight: '800',
                color: '#ea580c',
                backgroundColor: '#fff7ed',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                textTransform: 'uppercase'
              }}>
                {selectedArticle.categoryLabel}
              </span>

              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                color: '#1e293b',
                fontWeight: '900',
                lineHeight: 1.25,
                marginTop: '0.75rem',
                marginBottom: '0.5rem'
              }}>
                {selectedArticle.title}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', fontSize: '0.8rem', fontWeight: '600' }}>
                <span>✍️ {selectedArticle.author}</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={13} /> {selectedArticle.readTime}
                </span>
              </div>
            </div>

            <div style={{
              fontSize: '0.94rem',
              color: '#475569',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              paddingTop: '0.75rem',
              borderTop: '1px solid #f1f5f9'
            }}>
              {selectedArticle.content}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              backgroundColor: '#fffaf5',
              borderRadius: '16px',
              border: '1px solid rgba(234, 88, 12, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#1e293b', margin: '0 0 0.2rem' }}>
                  Have Questions for Our Educators?
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
                  Book a walkthrough at Villa 47 to meet our warm team.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onBookVisitClick();
                }}
                className="btn-clay-gold"
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.84rem' }}
              >
                <Calendar size={14} />
                <span>Book Campus Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Bottom CTA Banner */}
      <section style={{
        position: 'relative',
        padding: '4rem 1.5rem',
        background: 'radial-gradient(ellipse at 50% 20%, #ffffff 0%, #fffcf8 60%, #fbf5eb 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <RevealOnScroll animation="zoom-in">
            <div className="clay-glass-banner-pastel" style={{ textAlign: 'center', padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <div className="clay-glow-orb clay-orb-1" />
              <div className="clay-glow-orb clay-orb-2" />
              <div className="clay-glow-orb clay-orb-3" />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
                  color: '#1e293b',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '900',
                  lineHeight: '1.2',
                  marginBottom: '0.75rem'
                }}>
                  Every Question Deserves a Gentle, Caring Answer
                </h2>

                <p style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  margin: '0 auto 1.75rem'
                }}>
                  Our educators are always here to chat about routines, separation comfort, and milestones over coffee at Villa 47.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={onBookVisitClick}
                    className="btn-clay-gold"
                    style={{ padding: '0.7rem 1.5rem' }}
                  >
                    <Calendar size={16} />
                    <span>Book Your Guided Visit</span>
                  </button>
                  <a
                    href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery,%20I%20would%20like%20to%20speak%20with%20an%20educator."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-clay-emerald"
                    style={{ padding: '0.7rem 1.5rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Educators</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
