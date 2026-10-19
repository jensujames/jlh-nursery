import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function HomeNurturingSection({ onBookVisitClick }) {
  return (
    <section 
      id="growing-minds"
      className="growing-minds-section"
    >
      <div className="growing-minds-container">
        
        {/* Main Section Heading */}
        <RevealOnScroll animation="from-top">
          <h2 className="growing-minds-heading">
            The Perfect Place for Growing Minds
          </h2>
        </RevealOnScroll>

        {/* 3-Column Asymmetric Visual Grid */}
        <div className="growing-minds-grid">
          
          {/* Left Column: Text on Top, Image on Bottom (Enters from Left) */}
          <div className="growing-minds-col-left">
            <RevealOnScroll animation="from-left" delay={100}>
              <div className="growing-minds-text-box">
                <h3>Fun &amp; Safe Place to Grow</h3>
                <p>
                  Our center offers bright classrooms, playful environments, and a welcoming community where kids feel safe to explore, learn, create, and make new friends every day.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="from-bottom" delay={200}>
              <div className="growing-minds-img-wrap growing-minds-img-left">
                <img 
                  src="/media/school-readiness/school-readiness-2.jpg" 
                  alt="Young children happily engaging in early childhood learning" 
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Center Column: Tall Portrait Hero Image (Enters from Bottom) */}
          <div className="growing-minds-col-center">
            <RevealOnScroll animation="from-bottom" delay={150}>
              <div className="growing-minds-img-wrap growing-minds-img-center">
                <img 
                  src="/media/preschool/preschool-2.jpg" 
                  alt="Young child learning numeracy in a nurturing environment" 
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Square Image on Top, Text & CTA on Bottom (Enters from Right) */}
          <div className="growing-minds-col-right">
            <RevealOnScroll animation="from-right" delay={180}>
              <div className="growing-minds-img-wrap growing-minds-img-right">
                <img 
                  src="/media/eyfs/eyfs-3.jpg" 
                  alt="Early Years children engaging in creative play" 
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="from-right" delay={260}>
              <div className="growing-minds-text-box" style={{ marginTop: '1.25rem' }}>
                <h3>Meets Fun &amp; Friendship</h3>
                <p>
                  We create a joyful space filled with colorful classrooms, exciting activities, and caring guidance — a place where kids can imagine, discover, grow, and build lasting friendships with confidence.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <button 
                  type="button" 
                  className="growing-minds-btn"
                  onClick={onBookVisitClick}
                >
                  <span>View Schedule</span>
                  <ArrowRight size={17} strokeWidth={2.4} />
                </button>
              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
