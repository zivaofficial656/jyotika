import { useEffect } from 'react';
import { X, Clock, Tag, Check, Calendar, Sparkles } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose, onBookNow }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white border border-[#E8DFD1] shadow-2xl overflow-hidden rounded-sm my-6 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#5A4E46] hover:text-[#40352E] bg-white/90 hover:bg-white border border-[#E8DFD1] transition-colors rounded-full cursor-pointer shadow-sm"
          aria-label="Close treatment details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden bg-[#F1EADF] shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#40352E]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8DFD1] font-medium">
              Jyotika Spa Therapy Menu
            </span>
            <h2 id="service-modal-title" className="font-serif text-2xl sm:text-3xl text-white font-normal mt-0.5">
              {service.name}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Tagline */}
          <p className="text-sm italic font-serif text-[#40352E] bg-[#FAF9F6] p-3.5 border-l-2 border-[#B77A60] rounded-r-xs">
            &ldquo;{service.tagline}&rdquo;
          </p>

          {/* Description */}
          <div className="space-y-2 text-xs sm:text-sm text-[#5A4E46] leading-relaxed font-light">
            <p>{service.description}</p>
          </div>

          {/* Meta Bar */}
          <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#E8DFD1] text-xs">
            <div className="flex items-center space-x-2 text-[#40352E]">
              <Clock className="w-4 h-4 text-[#B77A60]" />
              <span className="font-medium">Duration:</span>
              <span className="text-[#5A4E46] font-light">{service.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-[#40352E]">
              <Tag className="w-4 h-4 text-[#B77A60]" />
              <span className="font-medium">Pricing:</span>
              <span className="text-[#5A4E46] font-light">{service.price}</span>
            </div>
          </div>

          {/* Features / Highlights */}
          {service.features && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#40352E] font-semibold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#B77A60]" />
                Key Therapy Inclusions & Benefits
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A4E46]">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#B77A60] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal For */}
          {service.idealFor && (
            <div className="p-3.5 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs text-xs text-[#5A4E46]">
              <span className="font-medium text-[#40352E]">Recommended For: </span>
              <span className="font-light">{service.idealFor}</span>
            </div>
          )}

          {/* Pricing transparency note */}
          <p className="text-[11px] text-[#777B57] italic text-center">
            *Official prices are confirmed upon appointment consultation based on customized pressure and session length.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF9F6] border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-[#777B57]">Jyotika Spa • Gandhi Nagar, Thane</span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs uppercase tracking-wider text-[#5A4E46] hover:text-[#40352E] border border-[#E8DFD1] rounded-xs cursor-pointer transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(service);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] rounded-xs shadow-2xs transition-colors cursor-pointer border border-[#40352E]"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#E8DFD1]" />
              Book Treatment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
