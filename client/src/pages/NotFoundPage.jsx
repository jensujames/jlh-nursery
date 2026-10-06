import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone, Heart } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      backgroundColor: '#f8faf8',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)'
    }}>
      <div 
        style={{ 
          maxWidth: '620px', 
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '2.5rem',
          padding: 'clamp(40px, 6vw, 60px) clamp(24px, 5vw, 50px)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 20px 50px rgba(74, 14, 26, 0.06), 0 2px 12px rgba(255, 255, 255, 0.9) inset',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />

        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '1.25rem',
          backgroundColor: '#ffffff',
          color: '#721024',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          border: '2px solid rgba(114, 16, 36, 0.18)',
          boxShadow: '0 10px 22px rgba(114, 16, 36, 0.08)'
        }}>
          <Compass size={36} />
        </div>

        <span
          style={{
            display: 'inline-block',
            padding: '6px 18px',
            borderRadius: '999px',
            backgroundColor: '#ffffff',
            color: '#721024',
            fontSize: '12.5px',
            fontWeight: '800',
            letterSpacing: '0.5px',
            border: '1.5px solid rgba(114, 16, 36, 0.16)',
            marginBottom: '14px',
            boxShadow: '0 4px 12px rgba(114, 16, 36, 0.06)'
          }}
        >
          404 • PAGE NOT FOUND
        </span>

        <h1 style={{
          fontSize: 'clamp(26px, 4vw, 36px)',
          color: '#721024',
          fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
          fontWeight: '900',
          marginTop: '0.5rem',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          This Little Page Seems to Be Lost
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#475569',
          lineHeight: '1.75',
          marginBottom: '2.5rem'
        }}>
          The page you are looking for may have moved or doesn't exist. Let us help you find your way back to a cozy place.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #721024 0%, #8f152f 100%)',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '14.5px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(114, 16, 36, 0.28)',
              transition: 'all 0.25s ease'
            }}
          >
            <Home size={18} />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '999px',
              backgroundColor: '#ffffff',
              color: '#721024',
              fontWeight: '800',
              fontSize: '14.5px',
              textDecoration: 'none',
              border: '2px solid #721024',
              boxShadow: '0 6px 18px rgba(114, 16, 36, 0.08)',
              transition: 'all 0.25s ease'
            }}
          >
            <Phone size={18} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
