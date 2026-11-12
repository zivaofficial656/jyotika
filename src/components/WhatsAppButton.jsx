import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function WhatsAppButton() {
  const prefilledMessage = encodeURIComponent(
    'Hello Jyotika Spa, I would like to know more about your spa services and booking availability.'
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${prefilledMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jyotika Spa on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border border-white/20"
    >
      <MessageCircle className="w-5 h-5 fill-white stroke-none shrink-0" />
      <span className="text-xs font-medium tracking-wide hidden sm:inline-block">
        WhatsApp Us
      </span>
    </a>
  );
}
