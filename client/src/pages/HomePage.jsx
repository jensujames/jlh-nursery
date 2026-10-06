import React from 'react';
import { Link } from 'react-router-dom';
import ThreeMascotHero from '../components/ThreeMascotHero';
import { 
  Heart, Sparkles, BookOpen, Sun, Compass, ShieldCheck, 
  Baby, Smile, Users, MapPin, Phone, Mail, ArrowRight, MessageCircle, Calendar
} from 'lucide-react';

export default function HomePage({ onBookVisitClick }) {
  const PROGRAMS = [
    {
      title: 'Early Years Education',
      desc: 'Play-based experiences supporting communication, social, emotional, physical and cognitive development.',
      color: '#F15A29',
      bg: '#fff5f0',
      icon: Baby
    },
    {
      title: 'Nursery & Preschool',
      desc: 'A stimulating environment that encourages curiosity, friendships, creativity and a positive relationship with learning.',
      color: '#72C5E8',
      bg: '#f0f9ff',
      icon: Sparkles
    },
    {
      title: 'School Readiness',
      desc: 'Building the confidence, routines and foundational skills children need for their next step into school.',
      color: '#83C441',
      bg: '#f4fbf0',
      icon: BookOpen
    },
    {
      title: 'Full-Day & Half-Day Care',
      desc: 'Flexible care options designed around the needs of young children and their families.',
      color: '#C62828',
      bg: '#fef2f2',
      icon: Sun
    }
  ];

  const ACTIVITIES = [
    { title: 'Phonics & Literacy', icon: BookOpen, color: '#F15A29' },
    { title: 'Early Numeracy', icon: Sparkles, color: '#72C5E8' },
    { title: 'Arabic Learning', icon: Compass, color: '#83C441' },
    { title: 'Arts & Creativity', icon: Smile, color: '#FFE600' },
    { title: 'Music, Rhymes & Stories', icon: Heart, color: '#C62828' },
    { title: 'Sensory Exploration', icon: Baby, color: '#72C5E8' },
    { title: 'Physical & Outdoor Play', icon: Sun, color: '#83C441' },
    { title: 'Life Skills & Independence', icon: ShieldCheck, color: '#F15A29' }
  ];

  const FACILITIES = [
    'Safe and welcoming classrooms',
    'Indoor and outdoor play',
    'Baby care and quiet room',
    'Sensory spaces',
    'Reading corner',
    'Life-skills areas',
    'Child-friendly washrooms',
    'First-aid/clinic facility',
    'Secure reception',
    'CCTV monitoring'
  ];

  const WHY_CHOOSE = [
    {
      title: 'Nurturing Care',
      desc: 'Kindness, patience and understanding are at the heart of every interaction.',
      color: '#F15A29'
    },
    {
      title: 'Learning Through Play',
      desc: 'Children explore concepts naturally through purposeful, hands-on experiences.',
      color: '#72C5E8'
    },
    {
      title: 'Individual Attention',
      desc: 'We recognise each child\'s interests, abilities and developmental journey.',
      color: '#83C441'
    },
    {
      title: 'Whole-Child Development',
      desc: 'We support social, emotional, physical, communication and intellectual growth.',
      color: '#FFE600'
    },
    {
      title: 'Building Confidence',
      desc: 'We encourage independence, good manners and essential everyday life skills.',
      color: '#C62828'
    },
    {
      title: 'Parent Partnership',
      desc: 'We build respectful relationships with families and keep parents connected.',
      color: '#F15A29'
    }
  ];

  return (
    <div className="home-page-structured" style={{ backgroundColor: '#FFFDF7', color: '#3F3F3F' }}>
      
      {/* 1. Flagship 3D Mascot Hero Stage */}
      <ThreeMascotHero onBookVisitClick={onBookVisitClick} />

      {/* 2. A Place to Learn, Grow and Feel at Home (About Just Like Home) */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '28px',
          padding: 'clamp(32px, 5vw, 64px)',
          boxShadow: '0 12px 40px rgba(241, 90, 41, 0.06)',
          border: '1.5px solid #ffede4',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#fff1ec',
              color: '#F15A29',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              ABOUT JUST LIKE HOME
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '900',
              lineHeight: 1.2,
              color: '#1e293b',
              margin: '0 0 20px 0'
            }}>
              A Place to Learn, Grow and Feel at Home
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', marginBottom: '18px' }}>
              Childhood's earliest years are filled with important little moments - first friendships, new words, discoveries, questions, achievements and growing independence. At Just Like Home Nursery, we make those moments meaningful.
            </p>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569', marginBottom: '32px' }}>
              Our approach combines early-years learning with the care, patience and personal attention of a nurturing home environment. Children are encouraged to discover the world through play, creativity, movement and hands-on experiences while developing confidence at their own pace.
            </p>
            <Link
              to="/about-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                borderRadius: '999px',
                backgroundColor: '#F15A29',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(241, 90, 41, 0.28)'
              }}
            >
              <span>About Just Like Home</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src="/images/nurturing-hero.jpg"
              alt="A Place to Learn, Grow and Feel at Home"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.08)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
            }}>
              <p style={{ margin: 0, fontWeight: '800', color: '#0f172a', fontSize: '14px' }}>
                Motherly Care &amp; Play-Based Discovery
              </p>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '12.5px' }}>
                Villa 47, Al Rashidiya 2, Ajman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Early Years Programs for Every Little Step */}
      <section style={{ padding: '40px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
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
            OUR PROGRAMS
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
            Early Years Programs for Every Little Step
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569' }}>
            Every stage of early childhood brings new opportunities to learn and grow. Our programs support children's changing developmental needs while making learning engaging, enjoyable and meaningful.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {PROGRAMS.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  border: '1.5px solid #f1f5f9',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: prog.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <Icon size={26} color={prog.color} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '850', color: '#0f172a', margin: '0 0 12px 0' }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#64748b', margin: 0 }}>
                    {prog.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/programs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '999px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.28)'
            }}
          >
            <span>Explore Our Programs</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 4. Little Hands. Big Discoveries. (Activities) */}
      <section style={{ padding: '60px 20px 80px', backgroundColor: '#faf6f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#ecfdf5',
              color: '#059669',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '14px'
            }}>
              ACTIVITIES &amp; DISCOVERY
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
              Little Hands. Big Discoveries.
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569' }}>
              We believe young children learn best by doing. Our learning experiences encourage children to explore, experiment, communicate, imagine and solve problems through activities designed around their age and stage of development.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginBottom: '40px'
          }}>
            {ACTIVITIES.map((act, idx) => {
              const Icon = act.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '24px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    border: '1.5px solid #f1f5f9'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#fff7ed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={22} color={act.color} />
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '16px', color: '#1e293b' }}>
                    {act.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/nursery-activities"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 28px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                color: '#1e293b',
                fontWeight: '800',
                fontSize: '14.5px',
                textDecoration: 'none',
                border: '1.5px solid #cbd5e1',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              <span>View All Nursery Activities</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Philosophy Spotlight */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #fff5f0 0%, #fff8f5 100%)',
          borderRadius: '32px',
          padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 48px)',
          border: '2px solid #ffdecb',
          boxShadow: '0 16px 40px rgba(241, 90, 41, 0.08)'
        }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '999px',
            backgroundColor: '#F15A29',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '800',
            marginBottom: '20px'
          }}>
            OUR MISSION &amp; CARE
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 38px)', fontWeight: '900', color: '#0f172a', margin: '0 0 20px 0', lineHeight: 1.25 }}>
            We Don't Just Educate Children. We Nurture Little Hearts.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#475569', maxWidth: '820px', margin: '0 auto 24px auto' }}>
            At Just Like Home Nursery, every child deserves to feel seen, heard, valued and encouraged. We recognise that no two children develop in exactly the same way. We celebrate individual personalities, interests, abilities and achievements while providing the gentle encouragement children need to become increasingly confident and independent.
          </p>
          <p style={{ fontSize: '18px', fontWeight: '850', color: '#F15A29', margin: 0 }}>
            Preparing children for life with motherly care and attention.
          </p>
        </div>
      </section>

      {/* 6. Designed for Happy Learning & Safe Exploration (Facilities) */}
      <section style={{ padding: '40px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '999px',
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            fontSize: '13px',
            fontWeight: '800',
            marginBottom: '14px'
          }}>
            FACILITIES &amp; SAFETY
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
            Designed for Happy Learning &amp; Safe Exploration
          </h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#475569' }}>
            From active play to quiet story time, our nursery provides dedicated spaces for the different experiences that make up a child's day.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginBottom: '40px'
        }}>
          {FACILITIES.map((fac, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '18px 20px',
                border: '1.5px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F15A29', flexShrink: 0 }} />
              <span style={{ fontWeight: '750', fontSize: '14.5px', color: '#334155' }}>
                {fac}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/facilities"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '999px',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(220, 38, 38, 0.28)'
            }}
          >
            <span>Explore Our Nursery</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 7. Why Parents Choose Just Like Home */}
      <section style={{ padding: '60px 20px 80px', backgroundColor: '#f9f6f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#fff1ec',
              color: '#F15A29',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '14px'
            }}>
              WHY JUST LIKE HOME
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0' }}>
              Why Parents Choose Just Like Home
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {WHY_CHOOSE.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  border: '1.5px solid #f1f5f9',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  width: '36px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: item.color,
                  marginBottom: '16px'
                }} />
                <h3 style={{ fontSize: '20px', fontWeight: '850', color: '#0f172a', margin: '0 0 10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#64748b', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Growing Together With Families */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '28px',
          padding: 'clamp(36px, 5vw, 56px)',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 12px 36px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            backgroundColor: '#eff6ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Users size={32} color="#0284c7" />
          </div>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: '900', color: '#0f172a', margin: '0 0 12px 0' }}>
              Growing Together With Families
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569', margin: 0 }}>
              Parents know their children better than anyone. That is why we believe early education works best as a partnership. We value open communication and work with families to understand each child's needs, progress, interests and achievements. When nursery and home work together, children have the confidence to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Visit Just Like Home Nursery in Ajman */}
      <section style={{ padding: '40px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: 'clamp(32px, 5vw, 56px)',
          border: '1.5px solid #ffdecb',
          boxShadow: '0 16px 48px rgba(241, 90, 41, 0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: '#fff1ec',
              color: '#F15A29',
              fontSize: '13px',
              fontWeight: '800',
              marginBottom: '14px'
            }}>
              LOCATION &amp; VISITS
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 36px)', fontWeight: '900', color: '#0f172a', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Visit Just Like Home Nursery in Ajman
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569', marginBottom: '24px' }}>
              Conveniently located in Al Rashidiya 2, Ajman, Just Like Home Nursery provides families with a nurturing environment where children can learn, play, make friends and grow with confidence.
            </p>

            <div style={{
              background: '#f8fafc',
              borderRadius: '18px',
              padding: '20px',
              marginBottom: '28px',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '850', color: '#0f172a', fontSize: '15px' }}>
                Just Like Home Nursery
              </p>
              <p style={{ margin: '0 0 6px 0', color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#F15A29" />
                <span>Villa No. 47, Al Rashidiya 2, Ajman</span>
              </p>
              <p style={{ margin: '0 0 6px 0', color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#F15A29" />
                <span>Phone: 050 200 5346</span>
              </p>
              <p style={{ margin: 0, color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#F15A29" />
                <span>Email: nurseryjustlikehome@gmail.com</span>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://maps.google.com/?q=Just+Like+Home+Nursery+Villa+47+Al+Rashidiya+2+Ajman"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '14px',
                  textDecoration: 'none'
                }}
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
              <a
                href="https://wa.me/971502005346?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Just%20Like%20Home%20Nursery."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '999px',
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '14px',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div style={{ borderRadius: '24px', overflow: 'hidden', height: '360px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <iframe
              title="Just Like Home Nursery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2882194605553!2d55.45187!3d25.40187!2m3!1f0!2f0!3f0!3m2!1i1024!2i780!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI0JzA2LjciTiA1NcKwMjcnMDYuNyJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 10. Come See Why It Feels Just Like Home (Closing Callout) */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #F15A29 0%, #C62828 100%)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', fontWeight: '900', margin: '0 0 18px 0', lineHeight: 1.2 }}>
            Come See Why It Feels Just Like Home
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, opacity: 0.95, margin: '0 0 32px 0' }}>
            Choosing your child's nursery is an important decision - and sometimes the best way to know is simply to experience it. Meet our team, explore our nursery and discover the warm learning environment waiting for your little one.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <button
              type="button"
              onClick={onBookVisitClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                color: '#C62828',
                fontWeight: '900',
                fontSize: '15.5px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
              }}
            >
              <Calendar size={18} />
              <span>Book Your Nursery Visit</span>
            </button>
            <a
              href="https://wa.me/971502005346?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Just%20Like%20Home%20Nursery."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                fontWeight: '850',
                fontSize: '15.5px',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: '800', letterSpacing: '0.5px', opacity: 0.9 }}>
            Where Little Hearts Feel at Home.
          </p>
        </div>
      </section>

    </div>
  );
}
