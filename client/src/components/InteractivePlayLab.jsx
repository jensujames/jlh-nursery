import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Music, 
  Heart, 
  Star, 
  Smile, 
  BookOpen, 
  Calendar,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function InteractivePlayLab({ onBookVisitClick }) {
  const [activeBlock, setActiveBlock] = useState(0);
  const [bouncingBlocks, setBouncingBlocks] = useState({});

  // Sound effects removed
  const playMusicalNote = () => {};
  const playPop = () => {};

  const blocks = [
    {
      letter: 'W',
      word: 'WARMTH',
      title: 'Motherly Kindness & Comfort',
      desc: 'Gentle morning welcomes, patient cuddles when emotions are tender, and a secure environment where children feel deeply loved.',
      color: '#7B1127',
      textColor: '#ffffff',
      tagColor: '#fce7eb',
      tagText: '#7B1127',
      freq: 261.63, // C4
      icon: Heart,
      highlight: '1:4 Nurturing Caregiver Ratio'
    },
    {
      letter: 'E',
      word: 'EXPLORE',
      title: 'Sensory Science & Messy Play',
      desc: 'Hands-on discovery tables with textured sand, water channels, finger paint ateliers, and natural wooden blocks.',
      color: '#0284c7',
      textColor: '#ffffff',
      tagColor: '#e0f2fe',
      tagText: '#0369a1',
      freq: 293.66, // D4
      icon: Sparkles,
      highlight: 'Daily Sensory Stations'
    },
    {
      letter: 'A',
      word: 'ARABIC',
      title: 'Arabic Language & Cultural Wonder',
      desc: 'Engaging daily Arabic songs, simple nursery vocabulary, Quranic moral stories, and celebration of UAE heritage traditions.',
      color: '#D4AF37',
      textColor: '#3d050f',
      tagColor: '#fef9c3',
      tagText: '#854d0e',
      freq: 329.63, // E4
      icon: BookOpen,
      highlight: 'Bilingual Immersion'
    },
    {
      letter: 'P',
      word: 'PLAY',
      title: 'Gross Motor & Shaded Garden Loops',
      desc: 'Climbing soft gym blocks, balance beams, tricycle loops, and energetic outdoor games under high UV-protective shades.',
      color: '#15803d',
      textColor: '#ffffff',
      tagColor: '#dcfce7',
      tagText: '#166534',
      freq: 392.00, // G4
      icon: Smile,
      highlight: 'Turfed Outdoor Area'
    },
    {
      letter: 'J',
      word: 'JOY',
      title: 'Music, Rhymes & Laughter',
      desc: 'Percussion instruments, nursery rhymes, dress-up dramatic play, and celebrations that nurture confident smiles.',
      color: '#c93254',
      textColor: '#ffffff',
      tagColor: '#ffe4e6',
      tagText: '#9f1239',
      freq: 440.00, // A4
      icon: Music,
      highlight: 'Creative Self-Expression'
    },
    {
      letter: 'H',
      word: 'HOME',
      title: 'Villa 47 Family Sanctuary',
      desc: 'Clean, safe villa premises in Al Rashidiya 2, monitored by CCTV, with peaceful resting sanctuaries and warm educators.',
      color: '#854d0e',
      textColor: '#ffffff',
      tagColor: '#fef3c7',
      tagText: '#92400e',
      freq: 523.25, // C5
      icon: Star,
      highlight: 'CCTV Monitored Villa'
    }
  ];

  const triggerBlockBounce = (index) => {
    setActiveBlock(index);
    playMusicalNote(blocks[index].freq, 0.4);
    setBouncingBlocks(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setBouncingBlocks(prev => ({ ...prev, [index]: false }));
    }, 600);
  };

  const tumbleAllBlocks = () => {
    playPop(480);
    blocks.forEach((_, i) => {
      setTimeout(() => {
        triggerBlockBounce(i);
      }, i * 120);
    });
  };

  const ActiveIcon = blocks[activeBlock].icon;

  return (
    <section 
      style={{
        backgroundColor: '#FFFDF7',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1.5px solid rgba(123, 17, 39, 0.08)',
        borderBottom: '1.5px solid rgba(123, 17, 39, 0.08)'
      }}
    >
      {/* Decorative ambient background glows */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.09) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123, 17, 39, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header with Controls */}
        <RevealOnScroll animation="fade-down">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.85rem' }}>
              <Sparkles size={14} fill="#7B1127" /> INTERACTIVE PLAY &amp; DISCOVERY LAB
            </span>
            <h2 className="section-title" style={{ color: '#3d050f', marginBottom: '1rem' }}>
              Touch, Play &amp; Listen to <br />
              <span style={{ color: '#7b1127' }}>Every Wonder of Childhood</span>
            </h2>
            <p className="section-subtitle">
              Tap any letter cube below to hear its musical chime and discover how purposeful play nurtures confident, happy children at Just Like Home Nursery.
            </p>

            {/* Interactive Control Pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#ffffff',
                border: '1.5px solid rgba(123, 17, 39, 0.15)',
                padding: '6px 16px',
                borderRadius: '9999px',
                boxShadow: '0 8px 24px rgba(70, 7, 19, 0.06)',
                marginTop: '1.25rem'
              }}
            >
              <button
                type="button"
                onClick={tumbleAllBlocks}
                className="btn-secondary"
                style={{ padding: '5px 14px', fontSize: '0.78rem', borderRadius: '20px' }}
              >
                <RotateCcw size={12} />
                <span>Tumble All Cubes</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* 6 Interactive 3D Cubes Grid */}
        <RevealOnScroll animation="zoom-in">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem'
            }}
          >
            {blocks.map((b, idx) => {
              const isActive = activeBlock === idx;
              const isBouncing = bouncingBlocks[idx];
              const IconComp = b.icon;

              return (
                <div
                  key={idx}
                  onClick={() => triggerBlockBounce(idx)}
                  className="animate-cube-squish"
                  style={{
                    backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                    border: isActive ? `2.5px solid ${b.color}` : '2px solid rgba(123, 17, 39, 0.1)',
                    borderRadius: '1.75rem',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isActive 
                      ? `0 16px 36px rgba(70, 7, 19, 0.14), inset 0 2px 6px rgba(255, 255, 255, 0.9)` 
                      : '0 6px 18px rgba(70, 7, 19, 0.05)',
                    transform: isBouncing 
                      ? 'scale(1.18) translateY(-14px) rotate(2deg)' 
                      : isActive 
                        ? 'translateY(-6px)' 
                        : 'translateY(0)',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    position: 'relative'
                  }}
                >
                  {/* Top 3D Letter Badge */}
                  <div 
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: b.color,
                      color: b.textColor,
                      margin: '0 auto 0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      fontWeight: '900',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.18), inset 0 -3px 0 rgba(0,0,0,0.2)'
                    }}
                  >
                    {b.letter}
                  </div>

                  <div style={{ fontSize: '0.86rem', fontWeight: '900', color: '#3d050f', letterSpacing: '0.04em' }}>
                    {b.word}
                  </div>

                  {/* Micro sound wave dot */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '6px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: b.color }} />
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: b.color, opacity: 0.6 }} />
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: b.color, opacity: 0.3 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Selected Interactive Learning Experience Card */}
        <RevealOnScroll animation="fade-up">
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '2.5rem',
              border: '2px solid rgba(123, 17, 39, 0.12)',
              padding: '2.5rem 3rem',
              boxShadow: '0 20px 50px rgba(70, 7, 19, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span 
                  style={{
                    backgroundColor: blocks[activeBlock].tagColor,
                    color: blocks[activeBlock].tagText,
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    padding: '4px 14px',
                    borderRadius: '16px',
                    letterSpacing: '0.04em'
                  }}
                >
                  CUBE [{blocks[activeBlock].letter}] • {blocks[activeBlock].word}
                </span>
                <span 
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#7b1127',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: '#15803d' }} /> {blocks[activeBlock].highlight}
                </span>
              </div>

              <h3 
                style={{
                  fontSize: '1.85rem',
                  color: '#3d050f',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '0.75rem'
                }}
              >
                {blocks[activeBlock].title}
              </h3>

              <p style={{ fontSize: '1.02rem', color: '#57524e', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                {blocks[activeBlock].desc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onBookVisitClick}
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
                >
                  <Calendar size={15} />
                  <span>Experience This in Person</span>
                </button>

                <button
                  type="button"
                  onClick={() => triggerBlockBounce(activeBlock)}
                  className="btn-secondary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
                >
                  <Music size={15} />
                  <span>Replay Tone</span>
                </button>
              </div>
            </div>

            {/* Visual Icon Badge Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '2.5rem',
                  backgroundColor: blocks[activeBlock].tagColor,
                  border: `3px solid ${blocks[activeBlock].color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
                  position: 'relative'
                }}
              >
                <ActiveIcon size={56} style={{ color: blocks[activeBlock].color }} />
                <span style={{ fontSize: '1rem', fontWeight: '900', color: blocks[activeBlock].color }}>
                  {blocks[activeBlock].word}
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
