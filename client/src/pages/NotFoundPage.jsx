import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone, Heart } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      backgroundColor: '#fdfbf7'
    }}>
      <div style={{ maxWidth: '580px', width: '100%' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#fce7eb',
          color: '#7b1127',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 8px 25px rgba(123, 17, 39, 0.15)'
        }}>
          <Compass size={44} />
        </div>

        <span className="badge-maroon" style={{ marginBottom: '0.75rem' }}>
          404 • PAGE NOT FOUND
        </span>

        <h1 style={{
          fontSize: '2.5rem',
          color: '#3d050f',
          fontFamily: 'var(--font-heading)',
          marginTop: '0.5rem',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          This Little Page Seems to Be Lost
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: '#57524e',
          lineHeight: '1.7',
          marginBottom: '2.5rem'
        }}>
          The page you are looking for may have moved or doesn't exist. Let us help you find your way back to a cozy place.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            className="btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}
          >
            <Home size={18} />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/contact"
            className="btn-secondary"
            style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem' }}
          >
            <Phone size={18} />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
