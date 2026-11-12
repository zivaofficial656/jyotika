import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { HERO_IMAGES } from '../data/images';
import JyotikaLogo from './JyotikaLogo';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#FAF9F6]">
      {/* Subtle Sand & Terracotta Ambient Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[950px] max-w-full h-[520px] bg-gradient-to-b from-[#E8DFD1]/60 via-[#F1EADF]/40 to-transparent rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Boutique Location Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 border border-[#E8DFD1] bg-[#F1EADF]/60 rounded-full text-[11px] tracking-[0.25em] uppercase text-[#777B57] shadow-2xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
              <span>Jyotika Spa • Gandhi Nagar, Thane</span>
            </div>

            {/* Exact Headline: "Where Your Wellbeing Finds Its Balance." */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal leading-[1.08] text-[#40352E] tracking-tight">
              Where Your Wellbeing <span className="italic font-light text-[#B77A60]">Finds Its Balance.</span>
            </h1>

            {/* Exact Supporting text: "Discover a thoughtful approach to relaxation and wellness at Jyotika Spa." */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#5A4E46] font-light leading-relaxed">
              Discover a thoughtful approach to relaxation and wellness at Jyotika Spa. From restorative full body massotherapy to tranquil couple sanctuaries, experience unhurried care at Ashar Tiara Complex in Thane.
            </p>

            {/* Buttons: Explore Treatments & Book Your Visit */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all duration-300 shadow-sm rounded-xs group cursor-pointer border border-[#40352E]"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#E8DFD1] group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium text-[#40352E] bg-white hover:bg-[#F1EADF] transition-all duration-300 border border-[#E8DFD1] hover:border-[#B77A60] rounded-xs shadow-2xs cursor-pointer active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 mr-2 text-[#B77A60]" />
                Book Your Visit
              </button>
            </div>

            {/* Subtle Highlights Bar */}
            <div className="pt-8 border-t border-[#E8DFD1] grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              <div className="bg-[#FAF9F6] p-4 border border-[#E8DFD1] rounded-xs">
                <p className="text-[10px] uppercase tracking-wider text-[#777B57] font-semibold">Location</p>
                <p className="text-xs font-semibold text-[#40352E] mt-0.5">Ashar Tiara, Gandhi Nagar, Thane</p>
              </div>
              <div className="bg-[#FAF9F6] p-4 border border-[#E8DFD1] rounded-xs">
                <p className="text-[10px] uppercase tracking-wider text-[#777B57] font-semibold">Sanctuary Suites</p>
                <p className="text-xs font-semibold text-[#40352E] mt-0.5">Private Single & Couple Rooms</p>
              </div>
              <div className="bg-[#FAF9F6] p-4 border border-[#E8DFD1] rounded-xs">
                <p className="text-[10px] uppercase tracking-wider text-[#777B57] font-semibold">Botanical Care</p>
                <p className="text-xs font-semibold text-[#40352E] mt-0.5">Cold-Pressed Essential Extracts</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Asymmetric Luxury Photographic Frame */}
              <div className="relative border border-[#E8DFD1] p-3 bg-white shadow-xl rounded-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[#E8DFD1]/30">
                  <img
                    src={HERO_IMAGES.main}
                    alt="Jyotika Spa Thane - Luxury Wellness Sanctuary and Therapy Suite"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#40352E]/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-[10px] tracking-[0.28em] uppercase text-[#E8DFD1]">Ashar Tiara • Thane</p>
                    <p className="font-serif text-xl tracking-wide font-normal">Unhurried Boutique Stillness</p>
                  </div>
                </div>
              </div>

              {/* Offset Detail Badge */}
              <div className="hidden sm:flex items-center space-x-3.5 absolute -bottom-6 -left-6 bg-[#FAF9F6] border border-[#E8DFD1] p-4 shadow-xl max-w-xs rounded-xs">
                <JyotikaLogo variant="symbol" size="sm" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#B77A60] font-semibold">Jyotika Spa</p>
                  <p className="text-xs text-[#40352E] font-serif leading-snug">
                    Ashar Tiara Complex, Thane West
                  </p>
                </div>
              </div>

              {/* Top Accent Floating Tag */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-white/95 border border-[#E8DFD1] px-4 py-2 shadow-md rounded-xs">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#777B57] font-semibold">Open Daily 10 AM – 9:30 PM</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
