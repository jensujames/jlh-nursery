import React, { useState } from 'react';
import { BookOpen, Sparkles, Clock, ArrowRight, X, Heart, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function ParentResources({ onBookVisitClick }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: "choose-nursery",
      title: "How to Choose the Right Nursery in Ajman",
      readTime: "4 min read",
      category: "Parent Guide",
      excerpt: "Key factors to consider when touring early childhood centers: safety certifications, child-to-educator ratios, and genuine warmth.",
      content: `
Selecting your child's first nursery in Ajman is one of the most heartwarming yet important decisions your family will make. When visiting nurseries, keep these critical benchmarks in mind:

1. **Motherly Warmth & Educator Connection**: Watch how teachers speak and get down to eye-level with children. Are interactions respectful, patient, and warm? A genuine smile from an educator speaks volumes.
2. **Safety & Cleanliness Standards**: Look for biometric or guarded gates, round-the-clock CCTV cameras in classrooms, dedicated first-aid clinics, and daily sanitization routines.
3. **Curriculum & Play-Based Learning**: A British EYFS-aligned curriculum ensures your child develops essential social, emotional, and cognitive milestones through joyful inquiry rather than rigid pressure.
4. **Transparent Parent Partnerships**: The best nurseries keep you connected with daily milestone reports, transparent WhatsApp communication, and regular teacher catch-ups.
      `
    },
    {
      id: "settling-in",
      title: "Preparing Your Child for Their First Day at Nursery",
      readTime: "3 min read",
      category: "Settling-In Tips",
      excerpt: "Practical step-by-step guidance to ensure separation anxiety fades into joyful morning drop-offs.",
      content: `
Transitioning into nursery life is a brand new adventure for your toddler. Here are practical strategies our experienced team recommends:

1. **Talk Positively About Nursery**: In the weeks leading up, talk about all the exciting new friends, coloring paints, and garden toys waiting for them.
2. **Visit Together Beforehand**: Book a tour at Just Like Home Nursery so your child explores the classroom with you by their side first.
3. **Create a Consistent Goodbye Ritual**: A special double-hug, high-five, and a cheerful "I will see you after afternoon snack!" establishes confidence and predictable security.
4. **Trust the Caregivers**: Our motherly educators are experienced in comforting little hearts during the first few days with soothing cuddles and sensory distractions.
      `
    },
    {
      id: "eyfs-explained",
      title: "What Is EYFS & Why Does It Matter for Early Brain Growth?",
      readTime: "5 min read",
      category: "Curriculum Insight",
      excerpt: "How the British Early Years Foundation Stage nurtures curiosity, resilience, and early phonics without stress.",
      content: `
The British Early Years Foundation Stage (EYFS) is internationally renowned for good reason: it recognizes that the human brain develops more between ages 0 to 5 than at any other period in life.

1. **The 3 Prime Areas**: Communication & Language, Personal & Emotional Development, and Physical Coordination form the non-negotiable bedrock of future academic success.
2. **The 4 Specific Areas**: Literacy (Phonics), Mathematics (Problem Solving), Understanding the World, and Expressive Arts build creative competency.
3. **Play as Work**: When toddlers stack blocks or pour water into cups, they are conducting advanced experiments in gravity, volume, and balance!
      `
    },
    {
      id: "nursery-vs-preschool",
      title: "Nursery vs Preschool: What's the Difference?",
      readTime: "4 min read",
      category: "Milestones",
      excerpt: "Understanding the developmental shift from sensory toddler care to structured preschool and school readiness.",
      content: `
Many parents wonder whether their child is ready for nursery or preschool. Here is a clear breakdown:

- **Nursery (1.5 - 3 Years)**: Centers primarily on language expansion, social sharing, emotional self-regulation, sensory discoveries, and potty training routines.
- **Preschool (3 - 4+ Years)**: Introduces structured group circle time, pre-phonics letter sounds, foundational numeracy, Arabic immersion, and primary school readiness routines.
      `
    },
    {
      id: "sensory-play",
      title: "Why Sensory Play Is Crucial in Early Childhood",
      readTime: "3 min read",
      category: "Child Development",
      excerpt: "How tactile materials like kinetic sand, finger paints, and water tables wire neural pathways in the brain.",
      content: `
Sensory play includes any activity that stimulates your young child's senses: touch, smell, taste, movement, balance, sight, and hearing.

1. **Builds Nerve Connections**: Sensory stimulation creates pathways in the brain's neural architecture, enhancing complex task completion.
2. **Promotes Language Development**: Handling different textures (slimy, coarse, smooth, fluffy) naturally broadens descriptive vocabulary.
3. **Calming Effect**: Agitated or anxious toddlers find rhythmic water pouring and clay kneading deeply soothing.
      `
    },
    {
      id: "building-independence",
      title: "Simple Ways to Build Toddler Independence at Home",
      readTime: "4 min read",
      category: "Life Skills",
      excerpt: "Fostering everyday life skills, self-help dressing, and polite manners before starting big school.",
      content: `
Children love feeling capable and autonomous! Encouraging simple life skills builds remarkable self-esteem:

1. **Provide Child-Height Access**: Low coat hooks, reachable toy baskets, and bathroom step stools empower children to do things for themselves.
2. **Practice Putting On Shoes**: Choose velcro shoes and let them practice sliding their feet in patiently.
3. **Encourage Tidying Up Together**: Turn pack-up time into a fun clean-up song!
      `
    }
  ];

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Parent Guide':
      case 'Milestones':
        return { color: '#0284c7', bg: '#e0f2fe', border: 'rgba(2, 132, 199, 0.2)' };
      case 'Settling-In Tips':
      case 'Child Development':
        return { color: '#15803d', bg: '#dcfce7', border: 'rgba(21, 128, 61, 0.2)' };
      default:
        return { color: '#7b1127', bg: '#fce7eb', border: 'rgba(123, 17, 39, 0.2)' };
    }
  };

  return (
    <section id="resources" className="section-padding bg-cream" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="from-top">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <BookOpen size={14} /> PARENT RESOURCES & ARTICLES
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              Helpful Ideas for Your <br />
              <span style={{ color: '#7b1127' }}>Child's Early Years</span>
            </h2>
            <p className="section-subtitle">
              Insights, developmental advice, and practical nursery guidance compiled by our experienced early-years educators in Ajman.
            </p>
          </div>
        </RevealOnScroll>

        {/* Articles Grid (Staggered Left, Bottom, Right Entrances) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {articles.map((art, idx) => {
            const catStyle = getCategoryStyles(art.category);
            const cardDir = idx % 3 === 0 ? 'from-left' : idx % 3 === 1 ? 'from-bottom' : 'from-right';
            return (
            <RevealOnScroll key={art.id} animation={cardDir} delay={Math.min(idx * 75, 250)}>
            <div
              onClick={() => setSelectedArticle(art)}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1.75rem',
                padding: '2.25rem',
                border: '1.5px solid rgba(123, 17, 39, 0.08)',
                boxShadow: '0 8px 24px rgba(70, 7, 19, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(70, 7, 19, 0.1)';
                e.currentTarget.style.borderColor = catStyle.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(70, 7, 19, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(123, 17, 39, 0.08)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: catStyle.color,
                    backgroundColor: catStyle.bg,
                    border: `1px solid ${catStyle.border}`,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.04em'
                  }}>
                    {art.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#9ca3af', fontSize: '0.78rem' }}>
                    <Clock size={13} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#3d050f',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: '1.3'
                }}>
                  {art.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#57524e',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem'
                }}>
                  {art.excerpt}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#7b1127',
                fontWeight: '700',
                fontSize: '0.88rem'
              }}>
                <span>Read Full Guide</span>
                <ArrowRight size={16} />
              </div>
            </div>
            </RevealOnScroll>
            );
          })}
        </div>

        {/* Reading Article Modal */}
        {selectedArticle && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(28, 4, 11, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '2rem',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '3rem 2.5rem',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              border: '2px solid rgba(123, 17, 39, 0.15)'
            }}>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: '#fce7eb',
                  color: '#7b1127',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: getCategoryStyles(selectedArticle.category).color,
                  backgroundColor: getCategoryStyles(selectedArticle.category).bg,
                  border: `1px solid ${getCategoryStyles(selectedArticle.category).border}`,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  letterSpacing: '0.04em'
                }}>
                  {selectedArticle.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{selectedArticle.readTime}</span>
              </div>

              <h2 style={{
                fontSize: '1.85rem',
                color: '#3d050f',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-heading)',
                lineHeight: '1.25'
              }}>
                {selectedArticle.title}
              </h2>

              <div style={{
                color: '#374151',
                fontSize: '1rem',
                lineHeight: '1.8',
                whiteSpace: 'pre-line',
                marginBottom: '2.5rem'
              }}>
                {selectedArticle.content}
              </div>

              <div style={{
                backgroundColor: '#fdfbf7',
                padding: '1.5rem',
                borderRadius: '1.25rem',
                border: '1px solid rgba(123, 17, 39, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: '#3d050f', fontSize: '0.95rem' }}>
                    Have questions about your child?
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                    Our educators are always here to help your family.
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onBookVisitClick();
                  }}
                  className="btn-primary"
                  style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}
                >
                  <span>Book a Nursery Tour</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
