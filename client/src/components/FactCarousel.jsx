import React, { useState } from 'react';
import { 
  Star, 
  Users, 
  Trophy, 
  Clock, 
  Heart,
  Armchair
} from 'lucide-react';
import './FactCarousel.css';

const FACTS = [
  {
    id: 1,
    icon: Armchair,
    number: '12+',
    label: 'Dedicated Learning Spaces',
    theme: 'blue',
    accentColor: '#0284c7',
    iconBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
    shadowColor: 'rgba(2, 132, 199, 0.22)',
    badgeBg: 'rgba(2, 132, 199, 0.08)'
  },
  {
    id: 2,
    icon: Users,
    number: '500+',
    label: 'Happy Little Graduates',
    theme: 'coral',
    accentColor: '#F15A29',
    iconBg: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
    shadowColor: 'rgba(241, 90, 41, 0.22)',
    badgeBg: 'rgba(241, 90, 41, 0.08)'
  },
  {
    id: 3,
    icon: Star,
    number: '10+',
    label: 'Years of Loving Care',
    theme: 'gold',
    accentColor: '#d97706',
    iconBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    shadowColor: 'rgba(217, 119, 6, 0.22)',
    badgeBg: 'rgba(217, 119, 6, 0.08)'
  },
  {
    id: 4,
    icon: Trophy,
    number: '100%',
    label: 'MOHAP & EYFS Approved',
    theme: 'green',
    accentColor: '#16a34a',
    iconBg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    shadowColor: 'rgba(22, 163, 74, 0.22)',
    badgeBg: 'rgba(22, 163, 74, 0.08)'
  },
  {
    id: 5,
    icon: Heart,
    number: '1 : 3',
    label: 'Infant-to-Caregiver Ratio',
    theme: 'rose',
    accentColor: '#e11d48',
    iconBg: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
    shadowColor: 'rgba(225, 29, 72, 0.22)',
    badgeBg: 'rgba(225, 29, 72, 0.08)'
  },
  {
    id: 6,
    icon: Clock,
    number: '7am – 6pm',
    label: 'Extended Daycare Support',
    theme: 'purple',
    accentColor: '#7c3aed',
    iconBg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    shadowColor: 'rgba(124, 58, 237, 0.22)',
    badgeBg: 'rgba(124, 58, 237, 0.08)'
  }
];

export default function FactCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate facts array for seamless continuous infinite marquee
  const continuousFacts = [...FACTS, ...FACTS];

  return (
    <section 
      className="fact-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Nursery key facts ticker"
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
                  '--shadow-color': item.shadowColor,
                  '--badge-bg': item.badgeBg
                }}
              >
                {/* 3D Tactile Clay Icon Squircle */}
                <div 
                  className="fact-icon-wrap"
                  style={{
                    background: item.iconBg,
                    boxShadow: `0 6px 16px ${item.shadowColor}, inset 0 2px 4px rgba(255, 255, 255, 0.95)`
                  }}
                >
                  <IconComponent 
                    size={24} 
                    strokeWidth={2.2} 
                    style={{ color: item.accentColor }}
                  />
                </div>
                
                {/* Horizontal Stat Text Info */}
                <div className="fact-text-block">
                  <div className="fact-number">
                    {item.number}
                  </div>
                  <div className="fact-label">
                    {item.label}
                  </div>
                </div>

                {/* Subtle Edge Ambient Shimmer */}
                <div className="fact-card-corner-glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
