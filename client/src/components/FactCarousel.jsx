import React, { useState } from 'react';
import { 
  Sparkles,
  Clock,
  Heart,
  Trophy
} from 'lucide-react';
import './FactCarousel.css';

// ONLY the 4 previous core nursery offerings
const FACTS = [
  {
    id: 'eyfs',
    icon: Sparkles,
    name: 'EYFS Approach',
    theme: 'blue',
    accentColor: '#0284c7',
    iconBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
    shadowColor: 'rgba(2, 132, 199, 0.18)'
  },
  {
    id: 'care',
    icon: Clock,
    name: 'Full–Day & Half–Day Care',
    theme: 'coral',
    accentColor: '#F15A29',
    iconBg: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
    shadowColor: 'rgba(241, 90, 41, 0.18)'
  },
  {
    id: 'preschool',
    icon: Heart,
    name: 'Preschool',
    theme: 'rose',
    accentColor: '#e11d48',
    iconBg: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
    shadowColor: 'rgba(225, 29, 72, 0.18)'
  },
  {
    id: 'readiness',
    icon: Trophy,
    name: 'School Readiness',
    theme: 'green',
    accentColor: '#059669',
    iconBg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    shadowColor: 'rgba(5, 150, 105, 0.18)'
  }
];

export default function FactCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Seamless continuous infinite marquee repeating the 4 points
  const continuousFacts = [...FACTS, ...FACTS, ...FACTS, ...FACTS];

  return (
    <section 
      className="fact-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Nursery key offerings ticker"
    >
      {/* Warm Ambient Floating Glows */}
      <div className="fact-ambient-glow fact-glow-1" />
      <div className="fact-ambient-glow fact-glow-2" />
      <div className="fact-ambient-glow fact-glow-3" />

      {/* Full-Width Continuous Marquee Container */}
      <div className="fact-carousel-fullwidth-wrapper">
        <div className={`fact-carousel-continuous-track ${isPaused ? 'is-paused' : ''}`}>
          {continuousFacts.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={`${item.id}-${index}`} 
                className={`fact-horizontal-card theme-${item.theme}`}
                style={{
                  '--accent-color': item.accentColor,
                  '--icon-bg': item.iconBg,
                  '--shadow-color': item.shadowColor
                }}
              >
                {/* 3D Tactile Mini Icon Squircle/Circle */}
                <div 
                  className="fact-icon-wrap"
                  style={{
                    background: item.iconBg,
                    boxShadow: `0 2px 6px ${item.shadowColor}, inset 0 1px 2px rgba(255, 255, 255, 0.95)`
                  }}
                >
                  <IconComponent 
                    size={15} 
                    strokeWidth={2.2} 
                    style={{ color: item.accentColor }}
                  />
                </div>
                
                {/* Very Minimal Main Heading - Reduced Thickness & No Subheading */}
                <div className="fact-number">
                  <span 
                    className="fact-item-dot" 
                    style={{ backgroundColor: item.accentColor }} 
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
