import React from 'react';
import ThreeMascotHero from '../components/ThreeMascotHero';
import HomeQuickExplore from '../components/HomeQuickExplore';
import HomeNurturingSection from '../components/HomeNurturingSection';
import HomeCorePillars from '../components/HomeCorePillars';
import ReviewsSection from '../components/ReviewsSection';

export default function HomePage({ onBookVisitClick }) {
  return (
    <div className="home-page-minimal">
      {/* 1. Flagship 3D Mascot Hero with Interactive Blocks, Where Little Hearts Feel at Home, & Section 3 Full-Width 3D Curved Gallery */}
      <ThreeMascotHero onBookVisitClick={onBookVisitClick} />

      {/* 2. Vibrant Colorful Gateway Cards to All Dedicated Pages */}
      <HomeQuickExplore />

      {/* 3. Nurturing Today, Inspiring Tomorrow Section */}
      <HomeNurturingSection onBookVisitClick={onBookVisitClick} />

      {/* 4. The 4 Golden Pillars & Motherly Care Philosophy */}
      <HomeCorePillars />

      {/* 5. Parent Love & Social Proof Spotlight */}
      <ReviewsSection />
    </div>
  );
}
