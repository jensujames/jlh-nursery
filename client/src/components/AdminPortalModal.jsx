import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { getApiUrl } from '../config/api';

export default function AdminPortalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('visits'); // 'visits' or 'enquiries'
  const [visits, setVisits] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resVisits, resEnquiries] = await Promise.all([
        fetch(getApiUrl('/api/visits')),
        fetch(getApiUrl('/api/enquiries'))
      ]);
      const dataVisits = await resVisits.json();
      const dataEnquiries = await resEnquiries.json();

      if (dataVisits.success) setVisits(dataVisits.data);
      if (dataEnquiries.success) setEnquiries(dataEnquiries.data);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (visitId, newStatus) => {
    try {
      const res = await fetch(getApiUrl(`/api/visits/${visitId}/status`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setVisits(prev => prev.map(v => (v._id === visitId || v.id === visitId) ? { ...v, status: newStatus } : v));
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const filteredVisits = visits.filter(v => 
    (v.parentName && v.parentName.toLowerCase().includes(filterQuery.toLowerCase())) ||
    (v.phone && v.phone.includes(filterQuery)) ||
    (v.childName && v.childName.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  const filteredEnquiries = enquiries.filter(e =>
    (e.name && e.name.toLowerCase().includes(filterQuery.toLowerCase())) ||
    (e.message && e.message.toLowerCase().includes(filterQuery.toLowerCase())) ||
    (e.phone && e.phone.includes(filterQuery))
  );

  return (
    <div 
      data-lenis-prevent="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        backgroundColor: 'rgba(28, 4, 11, 0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div 
        data-lenis-prevent="true"
        role="dialog"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '2rem',
          maxWidth: '1000px',
          width: '100%',
          maxHeight: '92vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
          border: '2px solid rgba(123, 17, 39, 0.2)'
        }}
      >
        
        {/* Header */}
        <div style={{
          padding: '1.75rem 2rem',
          backgroundColor: '#460713',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#fef08a',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              marginBottom: '0.2rem'
            }}>
              <Sparkles size={12} /> Nursery Staff Management
            </div>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
              Admissions & Tour Bookings Hub
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={fetchData}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '0.5rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            <button
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Search & Tabs Subheader */}
        <div style={{
          padding: '1rem 2rem',
          backgroundColor: '#fdfbf7',
          borderBottom: '1px solid #f3ece6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('visits')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: activeTab === 'visits' ? '1.5px solid #7b1127' : '1px solid #d1d5db',
                backgroundColor: activeTab === 'visits' ? '#7b1127' : '#ffffff',
                color: activeTab === 'visits' ? '#ffffff' : '#374151',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Tour Bookings ({visits.length})
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: activeTab === 'enquiries' ? '1.5px solid #7b1127' : '1px solid #d1d5db',
                backgroundColor: activeTab === 'enquiries' ? '#7b1127' : '#ffffff',
                color: activeTab === 'enquiries' ? '#ffffff' : '#374151',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Inquiries ({enquiries.length})
            </button>
          </div>

          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="text"
              placeholder="Filter by name or phone..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.85rem 0.5rem 2.25rem',
                borderRadius: '9999px',
                border: '1px solid #d1d5db',
                fontSize: '0.85rem',
                outline: 'none',
                backgroundColor: '#ffffff'
              }}
            />
          </div>
        </div>

        {/* Content Table / List */}
        <div style={{ padding: '1.5rem 2rem', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'visits' ? (
            filteredVisits.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                No booked visits recorded yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filteredVisits.map((v, i) => {
                  const visitId = v._id || v.id;
                  return (
                    <div
                      key={visitId || i}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '1rem',
                        border: '1px solid rgba(123, 17, 39, 0.1)',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: '800', fontSize: '1rem', color: '#3d050f' }}>
                          {v.parentName}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                          <Phone size={13} style={{ color: '#7b1127' }} />
                          <a href={`tel:${v.phone}`} style={{ color: '#7b1127', textDecoration: 'none', fontWeight: '600' }}>
                            {v.phone}
                          </a>
                        </div>
                        {v.email && (
                          <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: '0.1rem' }}>
                            {v.email}
                          </div>
                        )}
                      </div>

                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1f2937' }}>
                          Child: {v.childName || 'Little One'}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                          Age: {v.childAge}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#d4af37', fontWeight: '700', marginTop: '0.2rem' }}>
                          {v.programInterest}
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>
                          <Calendar size={14} style={{ color: '#7b1127' }} />
                          <span>{v.preferredDate}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.2rem' }}>
                          <Clock size={13} />
                          <span>{v.preferredTime}</span>
                        </div>
                        {v.notes && (
                          <div style={{ fontSize: '0.76rem', color: '#6b7280', fontStyle: 'italic', marginTop: '0.3rem' }}>
                            "{v.notes}"
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          fontSize: '0.76rem',
                          fontWeight: '700',
                          backgroundColor: v.status === 'Confirmed' ? '#dcfce7' : v.status === 'Completed' ? '#e0f2fe' : '#fef3c7',
                          color: v.status === 'Confirmed' ? '#15803d' : v.status === 'Completed' ? '#0369a1' : '#b45309'
                        }}>
                          {v.status || 'Pending'}
                        </span>

                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          <button
                            onClick={() => handleStatusChange(visitId, 'Confirmed')}
                            style={{
                              fontSize: '0.72rem',
                              padding: '0.25rem 0.55rem',
                              borderRadius: '6px',
                              border: '1px solid #86efac',
                              backgroundColor: '#f0fdf4',
                              color: '#166534',
                              cursor: 'pointer'
                            }}
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => handleStatusChange(visitId, 'Completed')}
                            style={{
                              fontSize: '0.72rem',
                              padding: '0.25rem 0.55rem',
                              borderRadius: '6px',
                              border: '1px solid #bae6fd',
                              backgroundColor: '#f0f9ff',
                              color: '#075985',
                              cursor: 'pointer'
                            }}
                          >
                            Complete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            filteredEnquiries.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                No general inquiries recorded yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filteredEnquiries.map((e, idx) => (
                  <div
                    key={e._id || e.id || idx}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '1rem',
                      border: '1px solid rgba(123, 17, 39, 0.1)',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '800', color: '#3d050f' }}>{e.name}</div>
                      <div style={{ fontSize: '0.76rem', color: '#9ca3af' }}>{new Date(e.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#7b1127', fontWeight: '600', marginBottom: '0.35rem' }}>
                      Subject: {e.subject} • Phone: {e.phone} {e.email && `• ${e.email}`}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6', backgroundColor: '#fdfbf7', padding: '0.75rem', borderRadius: '0.5rem' }}>
                      {e.message}
                    </p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
}
