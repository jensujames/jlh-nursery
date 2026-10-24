import React, { useState, useRef } from 'react';
import { 
  Building2, 
  Gamepad2, 
  Trees, 
  Bed, 
  Sparkles, 
  BookOpen, 
  Utensils, 
  Bath, 
  HeartPulse, 
  Stethoscope, 
  ShieldCheck, 
  Camera, 
  Check, 
  Calendar
} from 'lucide-react';
import { useSectionScroll } from '../hooks/useScrollProgress';
import RevealOnScroll from './RevealOnScroll';

export default function FacilitiesSection({ onBookVisitClick }) {
  const [activeFacility, setActiveFacility] = useState(0);
  const facRef = useRef(null);
  const { progress } = useSectionScroll(facRef);

  const facilities = [
    {
      title: "Safe & Welcoming Classrooms",
      category: "Learning Spaces",
      icon: Building2,
      image: "/media/school-readiness/school-readiness-1.jpg",
      desc: "Sunlit, airy classrooms equipped with natural light, ergonomic child-sized wooden furniture, non-toxic educational toys, and rounded corner safety fittings.",
      specs: ["High-spec HEPA air purification", "Child-height wooden shelves", "Soft foam floor cushioning", "Regulated temperature control"]
    },
    {
      title: "Indoor Movement & Play Gym",
      category: "Recreation",
      icon: Gamepad2,
      image: "/media/nursery/nursery-1.jpg",
      desc: "A soft, padded indoor wonderland for tumbling, balance beams, sensory crawl tunnels, and energetic group movement games regardless of weather.",
      specs: ["Shock-absorbent high-density mats", "Soft foam climbing shapes", "Interactive sensory balance beams", "Fully sanitized every session"]
    },
    {
      title: "Outdoor Shaded Garden & Play Area",
      category: "Outdoor Exploration",
      icon: Trees,
      image: "/media/physical-play/physical-6.jpg",
      desc: "An expansive, securely walled villa garden equipped with premium UV sun-shading canopies, soft synthetic grass turf, a wooden playhouse, and a sensory splash station.",
      specs: ["UV protective shade canopies", "Wooden playhouse & mini slides", "Sensory water & sand tables", "Paved tricycle & scooter track"]
    },
    {
      title: "Baby Care & Peaceful Quiet Room",
      category: "Rest & Wellness",
      icon: Bed,
      image: "/media/daycare/daycare-3.jpg",
      desc: "A soothing sanctuary with gentle lullabies, white noise, blackout curtains, and dedicated individual sanitized wooden cribs for restorative afternoon naps.",
      specs: ["Individual wooden cots", "Soothing ambient lighting", "Continuous educator supervision", "Strict hygiene & linen sanitization"]
    },
    {
      title: "First-Aid Clinic & Doctor Visits",
      category: "Health & Safety",
      icon: HeartPulse,
      image: "/media/eyfs/eyfs-2.jpg",
      desc: "A fully equipped in-house first-aid clinic station with certified emergency medical care, continuous temperature checks, and scheduled visiting doctor consultations.",
      specs: ["Certified first-aid pediatric kit", "Visiting medical doctor checks", "Emergency action protocols", "Documented health records"]
    },
    {
      title: "24/7 CCTV & Secure Reception",
      category: "Security",
      icon: Camera,
      image: "/media/nursery/nursery-3.jpg",
      desc: "Single-point gated access with biometric/keycard verification, full-perimeter security, and comprehensive 24/7 high-definition CCTV coverage across all areas.",
      specs: ["24/7 High-Definition CCTV", "Gated villa security checkpoint", "Strict visitor identification log", "Only authorized parent pickups"]
    }
  ];

  const current = facilities[activeFacility];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="facilities" 
      ref={facRef}
      className="section-padding bg-cream-subtle perspective-1000" 
      style={{ position: 'relative' }}
    >
      <div className="container">
        
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} /> PURPOSE-BUILT FOR SAFETY & JOY
            </span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#3d050f' }}>
              A Safe, Inspiring Space <br />
              <span style={{
                background: 'linear-gradient(135deg, #721024 0%, #be123c 45%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Created for Little Learners
              </span>
            </h2>
            <p className="section-subtitle">
              Located in Villa No. 47, Al Rashidiya 2, our spacious facility is engineered from the ground up for spotless hygiene, active exploration, and complete safety.
            </p>
          </div>
        </RevealOnScroll>

        {/* Facilities Interactive Display */}
        <RevealOnScroll animation="fade-up" delay={150}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
          
          {/* Facility Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {facilities.map((fac, idx) => {
              const isSelected = activeFacility === idx;
              const FacIcon = fac.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFacility(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.15rem 1.5rem',
                    borderRadius: '1.25rem',
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    border: isSelected ? '1.5px solid #7b1127' : '1px solid rgba(123, 17, 39, 0.06)',
                    boxShadow: isSelected ? '0 10px 25px rgba(70, 7, 19, 0.08)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? '#7b1127' : '#fce7eb',
                    color: isSelected ? '#ffffff' : '#7b1127',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FacIcon size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: isSelected ? '#d4af37' : '#9ca3af',
                      letterSpacing: '0.04em'
                    }}>
                      {fac.category}
                    </div>
                    <div style={{
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: isSelected ? '#7b1127' : '#3d050f'
                    }}>
                      {fac.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Facility Card (ScrollCraft Paradigm #04: Depth Fly-Through & Paradigm #11: Aperture) */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(70, 7, 19, 0.12)',
            border: '1.5px solid rgba(123, 17, 39, 0.1)',
            transform: `perspective(900px) rotateY(${(0.45 - progress) * 6}deg) scale(${0.97 + Math.min(0.03, progress * 0.06)})`,
            transition: 'transform 0.2s ease-out'
          }}>
            <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
              <img 
                src={current.image} 
                alt={current.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: '#7b1127',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <ShieldCheck size={14} /> Villa No. 47, Al Rashidiya 2
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <h3 style={{
                fontSize: '1.65rem',
                color: '#3d050f',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {current.title}
              </h3>
              <p style={{
                fontSize: '0.98rem',
                color: '#4b5563',
                lineHeight: '1.65',
                marginBottom: '1.5rem'
              }}>
                {current.desc}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #f3ece6'
              }}>
                {current.specs.map((spec, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      color: '#15803d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#374151', fontWeight: '500' }}>
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

        {/* 14 Full Facilities Pill Grid */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          boxShadow: '0 8px 30px rgba(70, 7, 19, 0.04)',
          border: '1px solid rgba(123, 17, 39, 0.08)'
        }}>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: '#7b1127',
            letterSpacing: '0.06em',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Every Essential Childcare Amenity Under One Roof
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.85rem',
            justifyContent: 'center'
          }}>
            {[
              "Safe & Welcoming Classrooms",
              "Indoor Soft Play Area",
              "UV-Shaded Outdoor Garden",
              "Baby Care & Quiet Sleep Room",
              "Sensory & Exploration Spaces",
              "Story Corner & Mini Library",
              "Life Skills Practice Areas",
              "Child-Friendly Low Washrooms",
              "Hygienic Meal & Snack Prep Area",
              "In-House First-Aid Clinic",
              "Scheduled Doctor Visits",
              "Secure Monitored Reception",
              "Full 24/7 CCTV Coverage",
              "Sanitized Child Rest Equipment"
            ].map((facilityName, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: '#fdfbf7',
                  border: '1px solid rgba(123, 17, 39, 0.12)',
                  fontSize: '0.86rem',
                  fontWeight: '600',
                  color: '#3d050f'
                }}
              >
                <Check size={14} style={{ color: idx % 3 === 0 ? '#7b1127' : idx % 3 === 1 ? '#0284c7' : '#15803d' }} />
                <span>{facilityName}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
