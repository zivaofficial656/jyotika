import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function Services({ onSelectServiceForBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  // Focus on the 6 signature treatments for Jyotika Spa
  const signatureServices = SERVICES.slice(0, 6);

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleBookNow = (service) => {
    onSelectServiceForBooking(service);
  };

  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#F1EADF] border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#777B57] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Signature Treatments</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            Restorative Therapies & Bodywork
          </h2>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            Every session at Jyotika Spa is delivered by certified therapists using warm, cold-pressed botanical essences. Choose your preferred therapy or explore dedicated individual treatment details.
          </p>
        </div>

        {/* 6 Signature Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={handleViewDetails}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {/* Bottom CTA to view full menu & pricing inquiry notice */}
        <div className="mt-14 pt-8 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#40352E] uppercase tracking-wider">
              Transparent Pricing Consultation
            </p>
            <p className="text-xs text-[#777B57] font-light">
              Treatment durations and customized package pricing are confirmed with our concierge prior to your appointment.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.16em] uppercase font-medium text-[#40352E] bg-white hover:bg-[#F1EADF] border border-[#E8DFD1] hover:border-[#B77A60] transition-all rounded-xs shadow-2xs group shrink-0"
          >
            <span>View All Treatments</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#B77A60] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onBookNow={handleBookNow}
      />
    </section>
  );
}
