import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { HERO_IMAGES } from '../data/images';

export default function FinalBookingCTA({ onOpenBooking }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#40352E] text-white overflow-hidden">
      {/* Background Subtle Ambiance Image with Deep Brown Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={HERO_IMAGES.main}
          alt="Jyotika Spa Thane Ambiance"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle Sand Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-[#B77A60]/50 bg-white/5 backdrop-blur-xs rounded-full text-[11px] tracking-[0.26em] uppercase text-[#E8DFD1]">
          <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
          <span>Sanctuary Reservations</span>
        </div>

        {/* Exact Headline as requested: "Make Time for Yourself." */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF9F6] leading-tight">
          Make Time for <span className="italic font-light text-[#B77A60]">Yourself.</span>
        </h2>

        <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E8DFD1]/90 font-light leading-relaxed">
          Step off the pavement of Thane and immerse yourself in soothing botanical therapies, warm oils, and quiet stillness at Ashar Tiara Complex.
        </p>

        {/* Exact Buttons as requested: Book Appointment & Contact Us */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Button 1: Book Appointment */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium text-[#40352E] bg-[#FAF9F6] hover:bg-[#E8DFD1] transition-all duration-300 rounded-xs shadow-lg cursor-pointer active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 mr-2.5 text-[#B77A60]" />
            Book Appointment
          </button>

          {/* Button 2: Contact Us */}
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium text-white bg-transparent hover:bg-white/10 border border-[#B77A60] hover:border-[#E8DFD1] transition-all duration-300 rounded-xs cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 mr-2.5 text-[#B77A60]" />
            Contact Us
          </Link>

        </div>

        <p className="text-xs text-[#E8DFD1]/70 pt-4 font-light">
          {BUSINESS_INFO.address.full} • Open Daily {BUSINESS_INFO.hours[0].time}
        </p>

      </div>
    </section>
  );
}
