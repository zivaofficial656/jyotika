import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';

export default function FloatingContactButtons() {
  const prefilledMessage = encodeURIComponent(
    'Hello Jyotika Spa, I would like to know more about your spa services and booking availability.'
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${prefilledMessage}`;
  const phoneTel = BUSINESS_INFO.contact.phoneTel || `tel:${BUSINESS_INFO.contact.phone}`;

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col items-end space-y-3 pb-[env(safe-area-inset-bottom)] pointer-events-none select-none print:hidden"
    >
      {/* 1. TOP: Phone / Call Now Button */}
      <div className="relative flex items-center justify-end pointer-events-auto group">
        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="hidden sm:inline-flex items-center px-3 py-1.5 mr-2.5 bg-[#40352E] text-white text-xs font-medium tracking-wide rounded-md shadow-md border border-[#E8DFD1]/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none"
        >
          Call Now • {BUSINESS_INFO.contact.displayPhone}
        </span>

        <a
          href={phoneTel}
          onClick={() => trackCallClick('floating_button')}
          aria-label="Call Now"
          title="Call Now"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#B77A60] hover:bg-[#a3674f] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-3 focus:ring-[#B77A60]/50 border-2 border-white/90 cursor-pointer animate-call-pulse"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] transition-transform group-hover:rotate-12" />
          <span className="sr-only">Call Jyotika Spa at {BUSINESS_INFO.contact.displayPhone}</span>
        </a>
      </div>

      {/* 2. BOTTOM: WhatsApp Chat Button */}
      <div className="relative flex items-center justify-end pointer-events-auto group">
        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="hidden sm:inline-flex items-center px-3 py-1.5 mr-2.5 bg-[#1F2937] text-white text-xs font-medium tracking-wide rounded-md shadow-md border border-[#25D366]/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none"
        >
          Chat on WhatsApp
        </span>

        <a
          href={whatsappUrl}
          onClick={() => trackWhatsAppClick('floating_button')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-3 focus:ring-[#25D366]/50 border-2 border-white/90 cursor-pointer animate-wa-pulse"
        >
          {/* Authentic WhatsApp SVG Logo */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="sr-only">Chat with Jyotika Spa on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
