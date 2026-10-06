import React from 'react';
import { Link } from 'react-router-dom';
import ThreeMascotHero from '../components/ThreeMascotHero';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import { 
  Heart, Sparkles, BookOpen, Sun, Compass, ShieldCheck, 
  Baby, Smile, Users, MapPin, Phone, Mail, ArrowRight, 
  MessageCircle, Calendar, CheckCircle2, Award, Clock,
  Camera, Navigation, ChevronRight 
} from 'lucide-react';

export default function HomePage({ onBookVisitClick }) {
  // 1. Programs from document
  const PROGRAMS = [
    {
      title: 'Early Years Education',
      desc: 'Play-based experiences supporting communication, social, emotional, physical and cognitive development.',
      icon: Baby,
      color: '#721024',
      bg: '#FFF1F2'
    },
    {
      title: 'Nursery & Preschool',
      desc: 'A stimulating environment that encourages curiosity, friendships, creativity and a positive relationship with learning.',
      icon: Sparkles,
      color: '#0284c7',
      bg: '#F0F9FF'
    },
    {
      title: 'School Readiness',
      desc: 'Building the confidence, routines and foundational skills children need for their next step into school.',
      icon: Award,
      color: '#16a34a',
      bg: '#F0FDF4'
    },
    {
      title: 'Full-Day & Half-Day Care',
      desc: 'Flexible care options designed around the needs of young children and their families.',
      icon: Clock,
      color: '#721024',
      bg: '#FFF1F2'
    }
  ];

  // 2. Activities from document
  const ACTIVITIES = [
    { title: 'Phonics & Literacy', icon: BookOpen, color: '#721024', bg: '#FFF1F2' },
    { title: 'Early Numeracy', icon: Sparkles, color: '#0284c7', bg: '#F0F9FF' },
    { title: 'Arabic Learning', icon: Compass, color: '#16a34a', bg: '#F0FDF4' },
    { title: 'Arts & Creativity', icon: Smile, color: '#d97706', bg: '#FFFBEB' },
    { title: 'Music, Rhymes & Stories', icon: Heart, color: '#e11d48', bg: '#FFF1F2' },
    { title: 'Sensory Exploration', icon: Baby, color: '#0d9488', bg: '#F0FDFA' },
    { title: 'Physical & Outdoor Play', icon: Sun, color: '#ea580c', bg: '#FFF7ED' },
    { title: 'Life Skills & Independence', icon: ShieldCheck, color: '#721024', bg: '#FFF1F2' }
  ];

  // 3. Facilities from document
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

  // 4. Why Parents Choose Pillars from document
  const PILLARS = [
    {
      title: 'Nurturing Care',
      desc: 'Kindness, patience and understanding are at the heart of every interaction.',
      color: '#e11d48',
      icon: Heart
    },
    {
      title: 'Learning Through Play',
      desc: 'Children explore concepts naturally through purposeful, hands-on experiences.',
      color: '#0284c7',
      icon: Sparkles
    },
    {
      title: 'Individual Attention',
      desc: 'We recognise each child\'s interests, abilities and developmental journey.',
      color: '#16a34a',
      icon: Smile
    },
    {
      title: 'Whole-Child Development',
      desc: 'We support social, emotional, physical, communication and intellectual growth.',
      color: '#d97706',
      icon: Baby
    },
    {
      title: 'Building Confidence',
      desc: 'We encourage independence, good manners and essential everyday life skills.',
      color: '#721024',
      icon: Award
    },
    {
      title: 'Parent Partnership',
      desc: 'We build respectful relationships with families and keep parents connected.',
      color: '#0d9488',
      icon: Users
    }
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about Just Like Home Nursery. My child is [age], and I am interested in [full-day/half-day/preschool]. Please share the available options and help me book a visit."
  );

  return (
    <div className="home-page-exact" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22' }}>
      
      {/* 1. Flagship 3D Mascot Hero Stage */}
      <ThreeMascotHero onBookVisitClick={onBookVisitClick} />


      {/* 3. Early Years Programs for Every Little Step */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
                }}
              >
                OUR PROGRAMS
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0'
                }}
              >
                Early Years Programs for Every Little Step
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569' }}>
                Every stage of early childhood brings new opportunities to learn and grow. Our programs support children's changing developmental needs while making learning engaging, enjoyable and meaningful.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '26px',
              marginBottom: '40px'
            }}
          >
            {PROGRAMS.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 40}>
                  <div
                    style={{
                      background: '#FFFDF7',
                      borderRadius: '26px',
                      padding: '36px 26px',
                      border: '1.5px solid #ffede4',
                      boxShadow: '0 8px 24px rgba(114, 16, 36, 0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '16px',
                          backgroundColor: prog.bg,
                          color: prog.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px'
                        }}
                      >
                        <Icon size={28} />
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '20px',
                          fontWeight: '850',
                          color: '#721024',
                          marginBottom: '12px'
                        }}
                      >
                        {prog.title}
                      </h3>
                      <p style={{ fontSize: '15px', lineHeight: 1.68, color: '#475569', margin: 0 }}>
                        {prog.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/programs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 34px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
              }}
            >
              <span>Explore Our Programs</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Little Hands. Big Discoveries. (Activities) */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#FFFDF7' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
                }}
              >
                ACTIVITIES &amp; DISCOVERY
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0'
                }}
              >
                Little Hands. Big Discoveries.
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569' }}>
                We believe young children learn best by doing. Our learning experiences encourage children to explore, experiment, communicate, imagine and solve problems through activities designed around their age and stage of development.
              </p>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}
          >
            {ACTIVITIES.map((act, idx) => {
              const Icon = act.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 25}>
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '22px',
                      padding: '24px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      boxShadow: '0 4px 16px rgba(114, 16, 36, 0.02)',
                      border: '1.5px solid #ffede4',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: act.bg,
                        color: act.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span style={{ fontWeight: '800', fontSize: '16px', color: '#1e293b' }}>
                      {act.title}
                    </span>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/nursery-activities"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 30px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                color: '#721024',
                fontWeight: '800',
                fontSize: '14.5px',
                textDecoration: 'none',
                border: '1.5px solid #721024',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              <span>View All Nursery Activities</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Philosophy Spotlight ("We Don't Just Educate Children. We Nurture Little Hearts.") */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 20px', maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <RevealOnScroll>
          <div
            style={{
              background: 'linear-gradient(135deg, #fff1f2 0%, #fff8f5 100%)',
              borderRadius: '32px',
              padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 48px)',
              border: '2px solid rgba(114, 16, 36, 0.15)',
              boxShadow: '0 16px 40px rgba(114, 16, 36, 0.06)'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#721024',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '800',
                marginBottom: '20px'
              }}
            >
              <Heart size={14} className="fill-current" />
              OUR CARE PHILOSOPHY
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                fontSize: 'clamp(26px, 3.8vw, 38px)',
                fontWeight: '900',
                color: '#721024',
                margin: '0 0 20px 0',
                lineHeight: 1.25
              }}
            >
              We Don't Just Educate Children. We Nurture Little Hearts.
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#475569', maxWidth: '840px', margin: '0 auto 24px auto', fontWeight: '500' }}>
              We don't just educate children we nurture little hearts, build confidence, encourage curiosity, and create happy memories that last a lifetime. At Just Like Home Nursery, every child deserves to feel safe, valued, respected and encouraged.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                fontSize: '19px',
                fontWeight: '850',
                color: '#721024',
                margin: 0
              }}
            >
              “Where Little Hearts Feel at Home.”
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 6. Designed for Happy Learning & Safe Exploration (Facilities) */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', maxWidth: '1240px', margin: '0 auto' }}>
        <RevealOnScroll>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                border: '1px solid rgba(114, 16, 36, 0.12)',
                marginBottom: '14px'
              }}
            >
              FACILITIES &amp; SAFETY
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: '900',
                color: '#721024',
                margin: '0 0 16px 0'
              }}
            >
              Designed for Happy Learning &amp; Safe Exploration
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569' }}>
              From active play to quiet story time, our nursery provides dedicated spaces for the different experiences that make up a child's day.
            </p>
          </div>
        </RevealOnScroll>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '40px'
          }}
        >
          {FACILITIES.map((fac, idx) => (
            <RevealOnScroll key={idx} delay={idx * 20}>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  border: '1.5px solid #ffede4',
                  boxShadow: '0 4px 14px rgba(114, 16, 36, 0.02)'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#fff1f2',
                    color: '#721024',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <span style={{ fontSize: '15px', fontWeight: '750', color: '#1e293b' }}>
                  {fac}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/facilities"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 30px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '14.5px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
            }}
          >
            <span>Explore Our Nursery</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>


      {/* 8. Why Parents Choose Just Like Home */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '14px'
                }}
              >
                PARENT TRUST &amp; VALUES
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0'
                }}
              >
                Why Parents Choose Just Like Home
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '26px'
            }}
          >
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 35}>
                  <div
                    style={{
                      background: '#FFFDF7',
                      borderRadius: '26px',
                      padding: '32px 26px',
                      border: '1.5px solid #ffede4',
                      boxShadow: '0 6px 20px rgba(114, 16, 36, 0.02)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '18px',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '16px',
                        backgroundColor: '#ffffff',
                        color: pillar.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(114, 16, 36, 0.06)'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                          fontSize: '19px',
                          fontWeight: '800',
                          color: '#721024',
                          marginBottom: '8px'
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p style={{ fontSize: '15px', lineHeight: 1.68, color: '#475569', margin: 0 }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Growing Together With Families */}
      <section style={{ padding: 'clamp(64px, 7vw, 90px) 20px', maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <RevealOnScroll>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '32px',
              padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 56px)',
              border: '1.5px solid #ffede4',
              boxShadow: '0 12px 36px rgba(114, 16, 36, 0.04)'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#fff1f2',
                color: '#721024',
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                border: '1px solid rgba(114, 16, 36, 0.12)',
                marginBottom: '18px'
              }}
            >
              <Users size={14} />
              FAMILY PARTNERSHIP
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                fontSize: 'clamp(26px, 3.8vw, 38px)',
                fontWeight: '900',
                color: '#721024',
                margin: '0 0 18px 0'
              }}
            >
              Growing Together With Families
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#475569', maxWidth: '820px', margin: '0 auto' }}>
              Parents know their children better than anyone. That is why we believe early education works best as a partnership. We value open communication and work with families to understand each child's needs, progress, interests and achievements. When nursery and home work together, children have the confidence to thrive.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 10. Visit Just Like Home Nursery in Ajman (Location & Contact) */}
      <section style={{ padding: '0 20px clamp(48px, 6vw, 80px)', maxWidth: '1240px', margin: '0 auto' }}>
        <RevealOnScroll>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '32px',
              padding: 'clamp(32px, 5vw, 56px)',
              border: '1.5px solid #ffede4',
              boxShadow: '0 12px 40px rgba(114, 16, 36, 0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: '#fff1f2',
                  color: '#721024',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(114, 16, 36, 0.12)',
                  marginBottom: '16px'
                }}
              >
                LOCATION &amp; CONTACT
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: 'clamp(26px, 3.8vw, 38px)',
                  fontWeight: '900',
                  color: '#721024',
                  margin: '0 0 16px 0',
                  lineHeight: 1.25
                }}
              >
                Visit Just Like Home Nursery in Ajman
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#475569', marginBottom: '28px' }}>
                Conveniently located in Al Rashidiya 2, Ajman, Just Like Home Nursery provides families with a nurturing environment where children can learn, play, make friends and grow with confidence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fff1f2', color: '#721024', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#1e293b' }}>Just Like Home Nursery</p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Villa No. 47, Al Rashidiya 2, Ajman</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#1e293b' }}>Phone / WhatsApp</p>
                    <a href="tel:0502005346" style={{ margin: 0, fontSize: '14px', color: '#059669', textDecoration: 'none', fontWeight: '750' }}>050 200 5346</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '800', fontSize: '15px', color: '#1e293b' }}>Email</p>
                    <a href="mailto:nurseryjustlikehome@gmail.com" style={{ margin: 0, fontSize: '14px', color: '#0284c7', textDecoration: 'none', fontWeight: '600' }}>nurseryjustlikehome@gmail.com</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=Villa+47+Al+Rashidiya+2+Ajman"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(114, 16, 36, 0.25)'
                  }}
                >
                  <Navigation size={17} />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`https://wa.me/971502005346?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#059669',
                    fontWeight: '800',
                    fontSize: '14.5px',
                    textDecoration: 'none',
                    border: '1.5px solid #059669'
                  }}
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(114, 16, 36, 0.05)',
                border: '2px solid #ffede4',
                height: '360px'
              }}
            >
              <iframe
                title="Just Like Home Nursery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.3424168050965!2d55.45187127599554!3d25.399222523727766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1310!3m3!1m2!1s0x3e5f583e7428f52f%3A0xb30e8c160c87285c!2sAl%20Rashidiya%202%20-%20Ajman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 11. Come See Why It Feels Just Like Home (Closing CTA) */}
      <LuxuryClosingCta
        badge="BOOK A VISIT"
        title="Come See Why It Feels Just Like Home"
        subtitle="Choosing your child's nursery is an important decision - and sometimes the best way to know is simply to experience it. Meet our team, explore our nursery and discover the warm learning environment waiting for your little one."
        primaryText="Book Your Nursery Visit"
        onPrimaryClick={onBookVisitClick}
        secondaryText="Chat on WhatsApp"
        whatsappMessage={whatsappMessage}
        tagline="Where Little Hearts Feel at Home."
      />

    </div>
  );
}
