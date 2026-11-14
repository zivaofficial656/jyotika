import Contact from '../components/Contact';
import { Sparkles, MapPin, Car, Train } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function ContactPage({ onOpenBooking }) {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Find & Visit Us</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Connect With Jyotika Spa | <span className="italic font-light text-[#B77A60]">Thane, Maharashtra</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Conveniently situated at Ashar Tiara Commercial Complex in Gandhi Nagar, Thane. We look forward to welcoming you for a restorative wellness experience.
          </p>
        </div>
      </div>

      {/* Transit & Arrival Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xs bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-[#B77A60]">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg text-[#40352E] font-normal">Sanctuary Address</h3>
            <p className="text-xs text-[#595048] font-light leading-relaxed">
              {BUSINESS_INFO.address.full}
            </p>
          </div>

          <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xs bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-[#B77A60]">
              <Car className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg text-[#40352E] font-normal">Complex Parking & Drop-off</h3>
            <p className="text-xs text-[#595048] font-light leading-relaxed">
              Dedicated visitor parking and convenient passenger drop-off zones within the Ashar Tiara Commercial Complex premises.
            </p>
          </div>

          <div className="bg-white border border-[#E8DFD1] p-6 rounded-sm shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xs bg-[#FAF9F6] border border-[#E8DFD1] flex items-center justify-center text-[#B77A60]">
              <Train className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg text-[#40352E] font-normal">Transit & Accessibility</h3>
            <p className="text-xs text-[#595048] font-light leading-relaxed">
              Readily accessible via Eastern Express Highway, Ghodbunder Road, and Thane Railway Station with easy auto-rickshaw and cab connections.
            </p>
          </div>
        </div>
      </div>

      <Contact onOpenBooking={onOpenBooking} />
    </main>
  );
}
