import React from 'react';
import { Link } from 'react-router-dom';
import ThreeMascotHero from '../components/ThreeMascotHero';
import FullWidthCurvedGallery from '../components/FullWidthCurvedGallery';
import HomeQuickExplore from '../components/HomeQuickExplore';
import HomeNurturingSection from '../components/HomeNurturingSection';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Heart, Sparkles, BookOpen, Sun, Compass, ShieldCheck, 
  Baby, Smile, Users, MapPin, Phone, Mail, ArrowRight, 
  MessageCircle, Calendar, CheckCircle2, Award, Clock
} from 'lucide-react';

export default function HomePage({ onBookVisitClick }) {
  const ABOUT_POINTS = [
    'Providing a safe, clean, and welcoming environment.',
    'Treating every child with kindness, patience, respect, and understanding.',
    'Supporting each child\'s emotional, social, physical, communication, and intellectual development.',
    'Encouraging children to learn through play, creativity, exploration, and discovery.',
    'Building strong and respectful partnerships with parents and families.',
    'Recognising and celebrating every child\'s unique abilities, interests, and achievements.',
    'Helping children develop independence, confidence, good manners, and essential life skills.',
    'Creating a nurturing atmosphere that truly feels “Just Like Home.”'
  ];

  const SERVICES = [
    { title: 'Early Years Education (EYFS)', icon: Sparkles, color: '#F15A29' },
    { title: 'Full-Day & Half-Day Care', icon: Clock, color: '#0284c7' },
    { title: 'Nursery & Preschool Programs', icon: Baby, color: '#16a34a' },
    { title: 'School Readiness Program', icon: Award, color: '#7c3aed' },
    { title: 'Age-Appropriate Learning', icon: BookOpen, color: '#d97706' },
    { title: 'Phonics, Literacy & Numeracy', icon: Sparkles, color: '#e11d48' },
    { title: 'Arabic Language Learning', icon: Compass, color: '#059669' },
    { title: 'Physical & Outdoor Play', icon: Sun, color: '#F15A29' },
    { title: 'Creative Arts & Crafts', icon: Smile, color: '#0284c7' },
    { title: 'Sensory & Exploration', icon: Baby, color: '#16a34a' },
    { title: 'Storytelling, Rhymes & Music', icon: Heart, color: '#7c3aed' },
    { title: 'Life Skills & Independence', icon: ShieldCheck, color: '#d97706' },
    { title: 'Special Events & Theme Days', icon: Calendar, color: '#e11d48' },
    { title: 'Holiday & Summer Camps', icon: Sun, color: '#059669' },
    { title: 'Educational Trips & Outings', icon: Compass, color: '#F15A29' },
    { title: 'Regular Parent Communication', icon: Users, color: '#0284c7' }
  ];

  const FACILITIES = [
    'Safe and welcoming classrooms',
    'Indoor play area',
    'Outdoor play area',
    'Baby care/quiet room',
    'Sensory and exploration spaces',
    'Reading & story corner',
    'Life skills activity areas',
    'Child-friendly washrooms',
    'Kitchen & meal preparation area',
    'First-aid/clinic facility',
    'Doctor visits',
    'Secure reception area',
    'Safe and child-friendly environment',
    'CCTV monitoring for enhanced safety'
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about Just Like Home Nursery. My child is [age], and I am interested in [full-day/half-day/preschool]. Please share the available options and help me book a visit."
  );

  return (
    <div className="home-page-complete" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F' }}>
      
      {/* 1. Flagship 3D Mascot Hero Stage */}
      <ThreeMascotHero onBookVisitClick={onBookVisitClick} />

      {/* 2. About Just Like Home & Vision/Mission */}
      <section style={{ padding: '80px 20px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: 'clamp(32px, 5vw, 64px)',
          boxShadow: '0 12px 40px rgba(114, 16, 36, 0.05)',
          border: '1.5px solid rgba(114, 16, 36, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#fff1f2',
              color: '#721024',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              <Heart size={14} className="fill-current" />
              ABOUT JUST LIKE HOME
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '900',
              lineHeight: 1.2,
              color: '#721024',
              margin: '0 0 20px 0'
            }}>
              Where Little Hearts Feel at Home
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', marginBottom: '16px' }}>
              We don't just educate children &mdash; we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime.
            </p>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', marginBottom: '28px' }}>
              Our approach combines early-years learning with the care, patience and personal attention of a nurturing home environment. Children are encouraged to discover the world through play, creativity, movement and hands-on experiences.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/about-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  backgroundColor: '#721024',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '14.5px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
                }}
              >
                <span>Read Our Story</span>
                <ArrowRight size={17} />
              </Link>
              <button
                type="button"
                onClick={onBookVisitClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontWeight: '800',
                  fontSize: '14.5px',
                  border: '1.5px solid #721024',
                  cursor: 'pointer'
                }}
              >
                <Calendar size={17} />
                <span>Book a Visit</span>
              </button>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
              border: '4px solid #ffffff'
            }}>
              <img
                src="/images/nurturing-hero.jpg"
                alt="Where Little Hearts Feel at Home"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              padding: '16px 20px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '11.5px', fontWeight: '800', textTransform: 'uppercase', color: '#721024', letterSpacing: '0.5px' }}>
                  Villa No. 47, Al Rashidiya 2
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '14.5px', fontWeight: '800', color: '#1e293b' }}>
                  Ajman, United Arab Emirates
                </p>
              </div>
              <span style={{ fontSize: '20px' }}>🏡</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company About Us - 8 Commitments */}
      <section style={{ padding: '40px 20px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '999px',
            backgroundColor: '#fff7ed',
            color: '#F15A29',
            fontSize: '13px',
            fontWeight: '800',
            marginBottom: '14px'
          }}>
            OUR PROMISES TO FAMILIES
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
            Nurturing Little Hearts With Love &amp; Care
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569' }}>
            These principles guide how we structure each day, care for children and partner with parents:
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {ABOUT_POINTS.map((pt, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '22px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                border: '1.5px solid #f1f5f9'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <CheckCircle2 size={18} />
              </div>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#1e293b', fontWeight: '600' }}>
                {pt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Vibrant Colorful Gateway Cards to Dedicated Pages */}
      <HomeQuickExplore />

      {/* 5. 3D Curved Perspective Photo Gallery on Home */}
      <FullWidthCurvedGallery onBookVisitClick={onBookVisitClick} />

      {/* 6. Asymmetric 3-Column Visual Showcase (Growing Minds) */}
      <HomeNurturingSection onBookVisitClick={onBookVisitClick} />

      {/* 7. Comprehensive Services & Facilities */}
      <section style={{ padding: '80px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Services Grid */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#e0f2fe',
              color: '#0284c7',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '14px'
            }}>
              🌟 OUR SERVICES
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
              Enriching Learning &amp; Care Services
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569' }}>
              Planned to nurture confidence, communication, independence and creativity.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '72px'
          }}>
            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFDF7',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    border: '1.5px solid #ffede4'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <Icon size={20} color={srv.color} />
                  </div>
                  <span style={{ fontWeight: '750', fontSize: '15px', color: '#1e293b' }}>
                    {srv.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Facilities Grid */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#fee2e2',
              color: '#721024',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '14px'
            }}>
              🏠 OUR FACILITIES
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
              Safe, Purpose-Built Campus Spaces
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569' }}>
              Villa No. 47 in Al Rashidiya 2 is designed with total safety, comfort and discovery in mind.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px'
          }}>
            {FACILITIES.map((fac, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFDF7',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#721024',
                  flexShrink: 0
                }} />
                <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#334155' }}>
                  {fac}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Location & Contact Banner */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
          borderRadius: '32px',
          padding: 'clamp(40px, 6vw, 64px)',
          color: '#ffffff',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(114, 16, 36, 0.25)'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255,255,255,0.18)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '16px'
            }}>
              COME AND VISIT US
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Visit Just Like Home Nursery
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, opacity: 0.92, marginBottom: '28px' }}>
              The best way to know whether a nursery feels right is to experience it. Book a tour to meet our team, explore the classrooms and ask any questions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={20} className="text-amber-300 shrink-0" />
                <span style={{ fontSize: '15px', fontWeight: '600' }}>Villa No. 47, Al Rashidiya 2, Ajman</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} className="text-amber-300 shrink-0" />
                <span style={{ fontSize: '15px', fontWeight: '600' }}>Phone / WhatsApp: 050 200 5346</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} className="text-amber-300 shrink-0" />
                <span style={{ fontSize: '15px', fontWeight: '600' }}>Email: nurseryjustlikehome@gmail.com</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onBookVisitClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  backgroundColor: '#ffffff',
                  color: '#721024',
                  fontWeight: '800',
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                }}
              >
                <Calendar size={18} />
                <span>Book a Visit</span>
              </button>

              <a
                href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.4)'
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '14px', color: '#ffffff' }}>
              Why Choose Just Like Home?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Nurturing motherly care and individual attention',
                'British EYFS play-based learning approach',
                'Purpose-built campus with shaded outdoor lawn',
                '24/7 CCTV surveillance and secured reception',
                'Flexible full-day and half-day care options',
                'Transparent parent communication every day'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', opacity: 0.95 }}>
                  <CheckCircle2 size={16} className="text-amber-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
