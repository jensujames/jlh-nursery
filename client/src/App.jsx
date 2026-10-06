import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import BookVisitModal from './components/BookVisitModal';
import AdminPortalModal from './components/AdminPortalModal';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import SmoothScroll from './components/SmoothScroll';

// Multi-Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import EyfsPage from './pages/EyfsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import CampsPage from './pages/CampsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleBookVisit = () => setIsBookModalOpen(true);
  const handleOpenAdmin = () => setIsAdminModalOpen(true);

  // Global Section-Intersection Observer for smooth entrances
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      {/* Global Scroll Progress Ribbon (ScrollCraft Top Header Progress Bar) */}
      <ScrollProgressBar />

      <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
        {/* Sticky Header with Navigation */}
        <Navbar 
          onBookVisitClick={handleBookVisit}
          onAdminClick={handleOpenAdmin}
        />

        {/* Dynamic Multi-Page Routes */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onBookVisitClick={handleBookVisit} />} />
            <Route path="/about-us" element={<AboutPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/programs" element={<ProgramsPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/eyfs-learning" element={<EyfsPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/nursery-activities" element={<ActivitiesPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/facilities" element={<FacilitiesPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/camps" element={<CampsPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/admissions" element={<AdmissionsPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/gallery" element={<GalleryPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/blog" element={<BlogPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/contact" element={<ContactPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/preschool-school-readiness" element={<ProgramsPage onBookVisitClick={handleBookVisit} />} />
            <Route path="/daycare-ajman" element={<ProgramsPage onBookVisitClick={handleBookVisit} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Luxury Footer */}
        <Footer 
          onBookVisitClick={handleBookVisit}
          onAdminClick={handleOpenAdmin}
        />

        {/* Floating Quick Dock */}
        <FloatingDock onBookVisitClick={handleBookVisit} />

        {/* Modals */}
        <BookVisitModal 
          isOpen={isBookModalOpen} 
          onClose={() => setIsBookModalOpen(false)} 
        />

        <AdminPortalModal 
          isOpen={isAdminModalOpen} 
          onClose={() => setIsAdminModalOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}
