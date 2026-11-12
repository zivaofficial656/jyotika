import { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Send,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICES } from '../data/servicesData';
import JyotikaLogo from './JyotikaLogo';
import { trackCallClick, trackWhatsAppClick, trackContactSubmission } from '../utils/analytics';

export default function Contact({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Swedish Massage',
    preferredDate: '',
    preferredTime: 'Afternoon (1:00 PM – 5:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      return;
    }
    trackContactSubmission();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Swedish Massage',
      preferredDate: '',
      preferredTime: 'Afternoon (1:00 PM – 5:00 PM)',
      message: ''
    });
  };

  const prefilledMessage = encodeURIComponent(
    'Hello Jyotika Spa, I would like to know more about your spa services and booking availability.'
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${prefilledMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#777B57] font-semibold">
            Visit & Connect
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            Visit Our Thane Sanctuary
          </h2>
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            Located on the 1st Floor of Ashar Tiara Commercial Complex in Gandhi Nagar, Thane. Reach us via phone, WhatsApp, or submit an appointment inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Business Details & Maps Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Business Card Box */}
            <div className="bg-white border border-[#E8DFD1] p-8 space-y-6 shadow-2xs rounded-sm">
              <div className="flex items-center space-x-4">
                <JyotikaLogo variant="symbol" size="md" />
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#B77A60] font-semibold">Contemporary Boutique Wellness</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#40352E] mt-0.5">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Exact Verified Thane Address */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-[#E8DFD1]/70">
                <MapPin className="w-5 h-5 text-[#B77A60] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#5A4E46] leading-relaxed">
                  <p className="font-medium text-[#40352E]">Official Sanctuary Address:</p>
                  <p>{BUSINESS_INFO.address.full}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DFD1]/70 text-xs text-[#5A4E46]">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#B77A60] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#40352E]">Phone / Concierge:</p>
                    {BUSINESS_INFO.contact.phoneTel ? (
                      <a
                        href={BUSINESS_INFO.contact.phoneTel}
                        className="font-medium text-[#40352E] hover:text-[#B77A60] transition-colors block text-sm mt-0.5 tracking-wide"
                      >
                        {BUSINESS_INFO.contact.displayPhone}
                      </a>
                    ) : (
                      <p className="italic text-[#777B57]">{BUSINESS_INFO.contact.displayPhone}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#B77A60] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#40352E]">Email Inquiry:</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.contact.email}`}
                      className="text-xs text-[#5A4E46] hover:text-[#B77A60] transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.contact.emailDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-[#E8DFD1]/70">
                <Clock className="w-4 h-4 text-[#B77A60] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5A4E46] space-y-1">
                  <p className="font-medium text-[#40352E]">Opening Hours:</p>
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <p key={i}>
                      <span className="text-[#40352E] font-medium">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              {/* Direct Actions: Call Now, Get Directions, WhatsApp, Book */}
              <div className="pt-4 flex flex-wrap gap-3">
                {BUSINESS_INFO.contact.phoneTel && (
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    onClick={() => trackCallClick('contact_page')}
                    className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-colors rounded-xs shadow-2xs border border-[#40352E]"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
                    Call Now
                  </a>
                )}

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-[#40352E] bg-[#FAF9F6] hover:bg-[#F1EADF] border border-[#E8DFD1] transition-colors rounded-xs"
                >
                  <Navigation className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
                  Get Directions
                </a>

                <a
                  href={whatsappUrl}
                  onClick={() => trackWhatsAppClick('contact_page')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-2 fill-white stroke-none" />
                  WhatsApp
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-[#40352E] bg-white hover:bg-[#FAF9F6] border border-[#B77A60] transition-colors rounded-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
                  Book Now
                </button>
              </div>

            </div>

            {/* Google Maps Visual Embed for Ashar Tiara Commercial Complex, Thane */}
            <div className="border border-[#E8DFD1] bg-white p-2.5 overflow-hidden shadow-2xs rounded-sm">
              <div className="relative aspect-[16/9] w-full bg-[#E8DFD1]/20 rounded-xs overflow-hidden">
                <iframe
                  title="Jyotika Spa Thane Ashar Tiara Location Map"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="p-3 text-center text-[11px] text-[#777B57] flex items-center justify-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#B77A60]" />
                <span>Ashar Tiara Commercial Complex, Gandhi Nagar, Thane 400601</span>
              </div>
            </div>

          </div>

          {/* Contact & Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#E8DFD1] p-8 sm:p-10 shadow-2xs rounded-sm">
            <h3 className="font-serif text-2xl font-normal text-[#40352E] mb-1">
              Appointment Inquiry Form
            </h3>
            <p className="text-xs text-[#777B57] font-light mb-8">
              Submit your preferred date and therapy. Our concierge at Ashar Tiara will contact you promptly to finalize your booking.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#F1EADF] border border-[#B77A60] flex items-center justify-center text-[#B77A60]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-[#40352E]">Inquiry Received</h4>
                <p className="text-xs text-[#5A4E46] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-medium text-[#40352E]">{formData.name}</span>. Your inquiry for <span className="font-medium text-[#40352E]">{formData.service}</span> has been logged. Our reception at Jyotika Spa, Thane will call or message you promptly to confirm availability.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs tracking-wider uppercase text-white bg-[#40352E] hover:bg-[#B77A60] transition-colors rounded-xs shadow-2xs cursor-pointer border border-[#40352E]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                    Full Name <span className="text-[#B77A60]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs placeholder:text-[#A5AA91]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                      Phone / WhatsApp <span className="text-[#B77A60]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98200 12345"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs placeholder:text-[#A5AA91]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. guest@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs placeholder:text-[#A5AA91]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                    Select Preferred Treatment
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.duration})
                      </option>
                    ))}
                    <option value="Jyotika Balance Sanctuary Journey">Jyotika Balance Sanctuary Journey (Package)</option>
                    <option value="Couple Harmony Retreat">Couple Harmony Retreat (Package)</option>
                    <option value="General Wellness Consultation">General Wellness Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-date" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-time" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                      Preferred Timing
                    </label>
                    <select
                      id="contact-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 9:30 PM)">Evening (5:00 PM – 9:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1.5 font-medium">
                    Special Requests or Muscle Focus
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention any physical focal areas, pressure preferences, or questions..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] transition-colors rounded-xs placeholder:text-[#A5AA91]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all cursor-pointer shadow-sm rounded-xs border border-[#40352E] active:scale-[0.99]"
                  >
                    <Send className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
                    Submit Appointment Inquiry
                  </button>
                </div>

                <p className="text-[10px] text-[#777B57] text-center">
                  *Your contact details remain confidential and are strictly used to coordinate your appointment.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
