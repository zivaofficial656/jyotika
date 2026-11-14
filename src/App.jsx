import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';
import SEOManager from './components/SEOManager';
import FloatingContactButtons from './components/FloatingContactButtons';
import RouteLoader from './components/RouteLoader';

import HomePage from './pages/HomePage';

// Route-level code splitting via React.lazy for secondary routes
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TreatmentDetailPage = lazy(() => import('./pages/TreatmentDetailPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const CoupleSpaPage = lazy(() => import('./pages/CoupleSpaPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);

  const handleOpenBooking = (initialItem = null) => {
    setSelectedBookingItem(initialItem);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#40352E] flex flex-col font-sans selection:bg-[#B77A60] selection:text-white overflow-x-hidden">
      {/* Dynamic Route Meta & Schema Manager */}
      <SEOManager />

      {/* Scroll to Top helper on route navigation */}
      <ScrollToTop />

      {/* Sticky Luxury Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Page Routing with Suspense fallback */}
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectServiceForBooking={(service) => handleOpenBooking(service)}
              />
            }
          />
          <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectServiceForBooking={(service) => handleOpenBooking(service)}
              />
            }
          />
          {/* Individual Dedicated Treatment Pages */}
          <Route
            path="/treatments/:slug"
            element={<TreatmentDetailPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/experience"
            element={<ExperiencePage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/couple-spa"
            element={<CoupleSpaPage onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/packages" element={<PackagesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/offers" element={<PackagesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage onOpenBooking={handleOpenBooking} />} />

        </Routes>
      </Suspense>

      {/* Floating Action Buttons: Phone & WhatsApp */}
      <FloatingContactButtons />

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking Appointment Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedBookingItem(null);
        }}
        initialItem={selectedBookingItem}
      />
    </div>
  );
}
