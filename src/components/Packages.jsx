import { Check, Calendar, Sparkles, Clock } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';

export default function Packages({ onOpenBooking }) {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Curated Wellness Journeys</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            Curated Packages for Couples & Restorative Care
          </h2>
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            Experience multi-treatment packages combining full body massage, specialized couple spa rituals, and botanical scrubs at Jyotika Spa Thane.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-[#E8DFD1] hover:border-[#B77A60] transition-all duration-300 flex flex-col justify-between h-full shadow-2xs hover:shadow-xl rounded-sm overflow-hidden group"
            >
              {/* Uniform Image banner */}
              {pkg.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EADF] shrink-0">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} - Jyotika Spa Thane Package`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="400"
                    height="250"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 bg-white/95 backdrop-blur-xs border border-[#E8DFD1] text-[#A35D43] font-semibold shadow-2xs rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#40352E] mb-2 leading-snug group-hover:text-[#B77A60] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#5A4E46] font-light leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Inclusions list */}
                  <div className="space-y-2 pt-3 border-t border-[#E8DFD1]/60">
                    <p className="text-[11px] uppercase tracking-wider text-[#5D6241] font-semibold">
                      Ritual Includes:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#5A4E46]">
                      {pkg.includes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#B77A60] shrink-0 mt-0.5" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8DFD1]/60 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5D6241]">
                    <div className="flex items-center space-x-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#B77A60]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <span className="text-xs font-medium text-[#40352E] bg-[#FAF9F6] px-2.5 py-1 border border-[#E8DFD1] rounded-xs">
                      {pkg.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking ? onOpenBooking(pkg.title) : window.location.assign('/booking')}
                    className="w-full min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all rounded-xs shadow-2xs cursor-pointer border border-[#40352E] active:scale-[0.98]"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#E8DFD1]" />
                    Book Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
