import { PACKAGES } from '../data/packagesData';
import { Sparkles, Check, Calendar, Gift, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function PackagesPage({ onOpenBooking }) {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Curated Sanctuary Journeys</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Curated Packages & Retreats | <span className="italic font-light text-[#B77A60]">Jyotika Spa Thane</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Immerse yourself in thoughtfully combined body polishing, deep massotherapy, hot basalt stone therapy, and herbal tea ceremonies at Ashar Tiara Complex in Thane.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        
        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-[#E8DFD1] hover:border-[#B77A60] transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between h-full shadow-2xs hover:shadow-xl group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F1EADF]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DFD1] text-[11px] tracking-wider uppercase font-semibold text-[#A35D43] shadow-sm">
                    {pkg.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#5D6241] font-semibold flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#B77A60]" />
                      {pkg.duration}
                    </span>
                    <span className="text-xs font-medium text-[#40352E] bg-[#FAF9F6] px-2.5 py-1 border border-[#E8DFD1] rounded-xs">
                      {pkg.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#40352E] group-hover:text-[#B77A60] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#595048] font-light leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="pt-4 border-t border-[#E8DFD1]/60 space-y-2">
                    <p className="text-[10px] uppercase tracking-wider text-[#5D6241] font-semibold">
                      Package Inclusions:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#595048]">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#B77A60] shrink-0 mt-0.5" />
                          <span className="font-light">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.idealFor && (
                    <div className="pt-2 text-[11px] text-[#5D6241] italic">
                      Recommended for: {pkg.idealFor}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-8 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenBooking ? onOpenBooking(pkg.title) : window.location.assign('/booking')}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#B77A60] hover:bg-[#a66d54] rounded-xs shadow-2xs transition-colors border border-[#B77A60] cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Inquire Package Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wellness Gifting & Custom Requests */}
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-14 rounded-sm shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FAF9F6] border border-[#E8DFD1] rounded-full text-[10px] tracking-widest uppercase text-[#B77A60] font-semibold">
              <Gift className="w-3.5 h-3.5" />
              <span>Gifting & Custom Journeys</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#40352E]">
              Looking for a Custom Wellness Experience?
            </h3>
            <p className="text-xs sm:text-sm text-[#595048] font-light leading-relaxed max-w-2xl">
              We happily customize treatment sequences for wedding parties, anniversaries, corporate executive de-stress packages, or personalized gift certificates. Speak with our concierge team to tailor session lengths and oil selections.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onOpenBooking ? onOpenBooking('Custom Spa Package') : window.location.assign('/booking')}
              type="button"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-wider uppercase font-medium text-white bg-[#B77A60] hover:bg-[#a66d54] rounded-xs shadow-2xs border border-[#B77A60] cursor-pointer"
            >
              Inquire Custom Package
            </button>
            <p className="text-[11px] text-[#5D6241] text-center">
              Call reception directly: {BUSINESS_INFO.contact.displayPhone}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
