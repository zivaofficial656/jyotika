import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Clock, Tag, Check, Calendar, ArrowLeft, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function TreatmentDetailPage({ onOpenBooking }) {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get other signature treatments to explore
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F1EADF]/40 border-b border-[#E8DFD1] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs text-[#777B57]">
            <Link to="/" className="hover:text-[#40352E] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#40352E] transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-[#40352E] font-medium">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Editorial Treatment Hero */}
      <div className="bg-[#FAF9F6] border-b border-[#E8DFD1] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#F1EADF] border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.22em] uppercase text-[#777B57] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
                <span>Signature Bodywork • Thane</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight leading-tight">
                {service.name}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#B77A60] leading-relaxed">
                &ldquo;{service.tagline}&rdquo;
              </p>

              <p className="text-base text-[#5A4E46] font-light leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Meta pills */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-[#E8DFD1] rounded-xs text-xs text-[#40352E]">
                  <Clock className="w-4 h-4 text-[#B77A60]" />
                  <span>Duration: <strong>{service.duration}</strong></span>
                </div>

                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-[#E8DFD1] rounded-xs text-xs text-[#40352E]">
                  <Tag className="w-4 h-4 text-[#B77A60]" />
                  <span>Pricing: <strong>{service.price}</strong></span>
                </div>

                {service.pressure && (
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F1EADF]/60 border border-[#E8DFD1] rounded-xs text-xs text-[#777B57] font-medium">
                    <span>{service.pressure}</span>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all rounded-xs shadow-sm cursor-pointer border border-[#40352E]"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
                  Reserve This Treatment
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.16em] uppercase font-medium text-[#40352E] bg-white hover:bg-[#F1EADF] border border-[#E8DFD1] rounded-xs transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
                  Back to All Treatments
                </Link>
              </div>
            </div>

            {/* Treatment Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#E8DFD1] p-3 bg-white shadow-xl rounded-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-xs bg-[#E8DFD1]/20">
                  <img
                    src={service.image}
                    alt={`${service.name} at Jyotika Spa Thane`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-serif text-xl text-[#40352E]">{service.name}</p>
                  <p className="text-[11px] text-[#777B57] uppercase tracking-wider mt-0.5">Ashar Tiara Complex, Thane</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Therapy Details & Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Key Benefits */}
          <div className="lg:col-span-7 bg-white border border-[#E8DFD1] p-8 sm:p-12 rounded-sm shadow-2xs space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#40352E] font-normal">
              Therapeutic Benefits & Inclusions
            </h2>
            <div className="w-12 h-0.5 bg-[#B77A60] rounded-full" />
            
            <ul className="space-y-4 pt-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#5A4E46] leading-relaxed">
                  <div className="p-1 rounded-full bg-[#FAF9F6] border border-[#E8DFD1] text-[#B77A60] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {service.idealFor && (
              <div className="mt-6 p-5 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs space-y-1 text-xs text-[#5A4E46]">
                <span className="font-semibold text-[#40352E] uppercase tracking-wider text-[10px]">Recommended For:</span>
                <p className="font-light">{service.idealFor}</p>
              </div>
            )}
          </div>

          {/* Preparation & Consultation Policy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#E8DFD1] p-8 rounded-sm shadow-2xs space-y-4">
              <div className="flex items-center space-x-2 text-[#777B57]">
                <HeartHandshake className="w-5 h-5 text-[#B77A60]" />
                <h3 className="font-serif text-xl text-[#40352E]">Personalized Touch</h3>
              </div>
              <p className="text-xs text-[#5A4E46] font-light leading-relaxed">
                Prior to your massage, your certified therapist will discuss any specific muscle tightness, tension knots, or sensitive areas to guarantee tailored care.
              </p>
            </div>

            <div className="bg-white border border-[#E8DFD1] p-8 rounded-sm shadow-2xs space-y-4">
              <div className="flex items-center space-x-2 text-[#777B57]">
                <ShieldCheck className="w-5 h-5 text-[#B77A60]" />
                <h3 className="font-serif text-xl text-[#40352E]">Sanctuary Hygiene</h3>
              </div>
              <p className="text-xs text-[#5A4E46] font-light leading-relaxed">
                Freshly laundered linens, sterilized equipment, and disinfected private suites are prepared for every single guest at Ashar Tiara Complex.
              </p>
            </div>

            <div className="bg-[#40352E] text-white p-8 rounded-sm shadow-md space-y-3">
              <h4 className="font-serif text-xl text-[#FAF9F6]">Reserve This Therapy</h4>
              <p className="text-xs text-[#E8DFD1] font-light">
                Call our concierge directly at {BUSINESS_INFO.contact.displayPhone} or submit an online booking inquiry.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.name)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-xs tracking-wider uppercase font-medium text-[#40352E] bg-[#FAF9F6] hover:bg-[#E8DFD1] rounded-xs cursor-pointer transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
                  Request Booking
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Explore Other Therapies */}
        <div className="pt-12 border-t border-[#E8DFD1] space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#40352E]">Other Signature Treatments</h3>
            <Link
              to="/services"
              className="text-xs uppercase tracking-wider text-[#B77A60] hover:text-[#40352E] font-medium"
            >
              View Full Menu &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div key={rel.id} className="bg-white border border-[#E8DFD1] rounded-sm overflow-hidden flex flex-col justify-between h-full group">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8DFD1]/20">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-serif text-xl text-[#40352E] group-hover:text-[#B77A60] transition-colors">{rel.name}</h4>
                  <p className="text-xs text-[#5A4E46] font-light line-clamp-2">{rel.shortDescription || rel.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={`/treatments/${rel.slug}`}
                    className="block text-center px-4 py-2.5 text-[11px] uppercase tracking-wider bg-[#FAF9F6] hover:bg-[#F1EADF] border border-[#E8DFD1] text-[#40352E] rounded-xs transition-colors"
                  >
                    Explore {rel.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
