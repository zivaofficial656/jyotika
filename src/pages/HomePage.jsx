import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SpaExperience from '../components/SpaExperience';
import SpaVideoSection from '../components/SpaVideoSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FinalBookingCTA from '../components/FinalBookingCTA';

export default function HomePage({ onOpenBooking, onSelectServiceForBooking }) {
  return (
    <main className="flex-grow">
      {/* B. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* C. Introduction Section: "A Pause From the Everyday." */}
      <About />

      {/* D. Signature Treatments: Swedish, Deep Tissue, Aromatherapy, Balinese, Couple, Head & Shoulder */}
      <Services onSelectServiceForBooking={onSelectServiceForBooking} />

      {/* E. Spa Experience: Treatment rooms, ambience, facilities, therapists, hygiene */}
      <SpaExperience />

      {/* E.2 Full-Width Ambient Video Showcase: "Experience the Art of Relaxation." */}
      <SpaVideoSection onOpenBooking={onOpenBooking} />

      {/* F. Why Choose Us: Genuine business strengths */}
      <WhyChooseUs />

      {/* G. Gallery: Authentic real spa atmosphere */}
      <Gallery />

      {/* H. Customer Testimonials: Real guest reflections */}
      <Testimonials />

      {/* I. Location Section: Thane address, Google Maps, hours, directions */}
      <Contact onOpenBooking={onOpenBooking} />

      {/* J. Final Booking CTA: "Your Moment of Relaxation Awaits." */}
      <FinalBookingCTA onOpenBooking={onOpenBooking} />
    </main>
  );
}
