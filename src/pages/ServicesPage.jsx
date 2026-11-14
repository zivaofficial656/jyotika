import { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { Sparkles, Search } from 'lucide-react';

export default function ServicesPage({ onSelectServiceForBooking }) {
  const [selectedService, setSelectedService] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Therapies' },
    { id: 'massage', label: 'Full Body Massage' },
    { id: 'targeted', label: 'Targeted Relief' },
    { id: 'couples', label: 'Couples Sanctuary' },
  ];

  const filteredServices = SERVICES.filter((srv) => {
    const matchesCategory =
      filterCategory === 'all' || srv.category === filterCategory;
    const matchesSearch =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Complete Therapy Catalog</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Therapies & Wellness Rituals | <span className="italic font-light text-[#B77A60]">Jyotika Spa Thane</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Explore our curated menu of Swedish, Deep Tissue, Balinese, Aromatherapy, and Couple Spa sessions at Ashar Tiara Complex, Gandhi Nagar, Thane.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 border border-[#E8DFD1] rounded-sm shadow-2xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium rounded-full transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#B77A60] text-white shadow-xs'
                    : 'bg-[#FAF9F6] text-[#595048] border border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#5D6241] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF9F6] border border-[#E8DFD1] focus:outline-none focus:border-[#B77A60] rounded-xs text-[#40352E] placeholder:text-[#5D6241]/60"
            />
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookNow={(s) => onSelectServiceForBooking ? onSelectServiceForBooking(s) : window.location.assign('/booking')}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#E8DFD1] rounded-sm">
            <p className="font-serif text-xl text-[#40352E]">No matching therapies found.</p>
            <p className="text-xs text-[#595048] mt-1">Try resetting your search or filter options.</p>
            <button
              onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
              className="mt-4 px-5 py-2.5 text-xs uppercase tracking-wider bg-[#B77A60] text-white rounded-xs border border-[#B77A60]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Massage Pressure & Duration Guide */}
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-12 rounded-sm shadow-2xs space-y-6">
          <div className="border-b border-[#E8DFD1] pb-4">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#B77A60] font-semibold">Treatment Consultation</span>
            <h3 className="font-serif text-2xl text-[#40352E] mt-1">Finding Your Ideal Massage Pressure</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#595048]">
            <div className="p-5 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#5D6241] tracking-wider">Gentle to Light</span>
              <p className="font-serif text-lg text-[#40352E]">Swedish & Aromatherapy</p>
              <p className="font-light leading-relaxed">Focuses on surface circulation, rhythmic relaxation, and gentle lymphatic flow. Ideal for sensory de-escalation and quiet unwinding.</p>
            </div>

            <div className="p-5 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#5D6241] tracking-wider">Medium to Acupressure</span>
              <p className="font-serif text-lg text-[#40352E]">Balinese & Hot Stone</p>
              <p className="font-light leading-relaxed">Combines rhythmic compression, palm acupressure, gentle passive stretches, and penetrating warmth to open tight energy lines.</p>
            </div>

            <div className="p-5 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#5D6241] tracking-wider">Therapeutic & Firm</span>
              <p className="font-serif text-lg text-[#40352E]">Deep Tissue Bodywork</p>
              <p className="font-light leading-relaxed">Concentrated deep-layer pressure targeting chronic knots, postural adhesions, and neck/spinal strain from long screen hours.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onBookNow={(s) => onSelectServiceForBooking ? onSelectServiceForBooking(s) : window.location.assign('/booking')}
      />
    </main>
  );
}
