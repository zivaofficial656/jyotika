import { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Phone } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { trackBookingSubmission } from '../utils/analytics';
import JyotikaLogo from './JyotikaLogo';

export default function BookingModal({ isOpen, onClose, initialService = null }) {
  const initialServiceName = initialService
    ? (typeof initialService === 'string' ? initialService : initialService.name)
    : (SERVICES[0]?.name || 'Swedish Massage');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialServiceName,
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    guests: '1 Person (Individual)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync service if initialService prop changes
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    const newService = initialService
      ? (typeof initialService === 'string' ? initialService : initialService.name)
      : (SERVICES[0]?.name || 'Swedish Massage');
    setFormData((prev) => ({ ...prev, service: newService }));
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      return;
    }
    trackBookingSubmission(formData.service);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white border border-[#E8DFD1] shadow-2xl p-5 sm:p-8 my-6 rounded-sm max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#777B57] hover:text-[#40352E] border border-[#E8DFD1] hover:border-[#B77A60] transition-colors rounded-full cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF9F6] border border-[#B77A60] flex items-center justify-center text-[#B77A60]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-[#40352E]">Appointment Request Received</h3>
            <div className="text-xs text-[#5A4E46] space-y-2 max-w-md mx-auto leading-relaxed">
              <p>
                Thank you, <span className="font-medium text-[#40352E]">{formData.name}</span>. We have logged your reservation inquiry for:
              </p>
              <div className="p-3 bg-[#FAF9F6] border border-[#E8DFD1] text-[#40352E] font-medium text-xs rounded-xs">
                {formData.service} • {formData.guests} {formData.date ? `• ${formData.date}` : ''}
              </div>
              <p className="pt-2 text-[11px] text-[#777B57]">
                Our reception team at Jyotika Spa Thane will reach out via {formData.phone || formData.email} to confirm available therapists and timing for your session.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 text-xs tracking-wider uppercase text-white bg-[#40352E] hover:bg-[#B77A60] transition-colors rounded-xs shadow-2xs cursor-pointer border border-[#40352E]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center space-x-3 pb-4 border-b border-[#E8DFD1]">
              <JyotikaLogo variant="symbol" size="sm" />
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B77A60] font-semibold">Jyotika Spa Reservations</span>
                <h2 id="booking-modal-title" className="font-serif text-2xl font-normal text-[#40352E]">
                  Reserve Your Experience
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                  Select Therapy
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                  <option value="Signature Sanctuary Ritual">Signature Sanctuary Ritual (Package)</option>
                  <option value="Couples Serenity Retreat">Couples Serenity Retreat (Package)</option>
                  <option value="Deep Muscle Recovery Suite">Deep Muscle Recovery Suite (Package)</option>
                  <option value="Express Urban Reset">Express Urban Reset (Package)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#9C8F85]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98200 12345"
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#9C8F85]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:30 PM)">Evening (5:00 PM – 9:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#9C8F85]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                  >
                    <option value="1 Person (Individual)">1 Person (Individual)</option>
                    <option value="2 People (Couple / Duo)">2 People (Couple / Duo)</option>
                    <option value="Small Group">Small Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-wider uppercase text-[#5A4E46] mb-1 font-medium">
                  Preferences or Focal Areas
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Target muscle tightness, pressure preferences..."
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#9C8F85]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all cursor-pointer rounded-xs shadow-2xs border border-[#40352E] active:scale-[0.99]"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
                  Request Appointment
                </button>
              </div>

              {BUSINESS_INFO.contact.phoneTel && (
                <div className="text-center pt-1">
                  <p className="text-[11px] text-[#777B57]">
                    Or speak directly with reception:
                  </p>
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="inline-flex items-center text-xs font-medium text-[#40352E] hover:text-[#B77A60] mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-[#B77A60]" />
                    {BUSINESS_INFO.contact.displayPhone}
                  </a>
                </div>
              )}

              <div className="text-[10px] text-[#777B57] text-center pt-2 border-t border-[#E8DFD1]/60">
                Jyotika Spa • Ashar Tiara Commercial Complex, Gandhi Nagar, Thane
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
