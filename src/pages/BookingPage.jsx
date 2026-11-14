import { useState } from 'react';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { trackBookingSubmission } from '../utils/analytics';
import { BUSINESS_INFO } from '../data/businessInfo';
import JyotikaLogo from '../components/JyotikaLogo';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0]?.name || 'Swedish Massage',
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    guests: '1 Person (Individual)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      return;
    }
    trackBookingSubmission(formData.service);
    setSubmitted(true);
  };

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Online Reservations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Reserve Your Treatment | <span className="italic font-light text-[#B77A60]">Jyotika Spa Thane</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Choose your preferred therapy, timing slot, and guest details. Our reception will contact you promptly to finalize your booking.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-12 shadow-sm rounded-sm">
          
          <div className="flex items-center space-x-4 pb-6 mb-8 border-b border-[#E8DFD1]">
            <JyotikaLogo variant="symbol" size="sm" />
            <div>
              <p className="font-serif text-xl text-[#40352E] font-medium">Jyotika Spa • Thane</p>
              <p className="text-xs text-[#5D6241]">{BUSINESS_INFO.address.full}</p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF9F6] border border-[#B77A60] flex items-center justify-center text-[#B77A60]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl text-[#40352E]">Appointment Request Received</h2>
              <p className="text-sm text-[#595048] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-medium text-[#40352E]">{formData.name}</span>. We have received your reservation request for <span className="font-medium text-[#40352E]">{formData.service}</span>.
              </p>
              <div className="p-4 bg-[#FAF9F6] border border-[#E8DFD1] max-w-sm mx-auto text-xs text-[#40352E] rounded-xs">
                {formData.guests} {formData.date ? `• Date: ${formData.date}` : ''} • {formData.timeSlot}
              </div>
              <p className="text-xs text-[#5D6241] pt-2 max-w-md mx-auto">
                Our reception team will call or message your phone number ({formData.phone}) to confirm therapist availability and room allocation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="booking-service" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                  Select Treatment / Curated Package
                </label>
                <select
                  id="booking-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                  <option value="Jyotika Signature Sanctuary Ritual">Jyotika Signature Sanctuary Ritual (Package)</option>
                  <option value="Couples Serenity Retreat">Couples Serenity Retreat (Package)</option>
                  <option value="Deep Muscle Recovery Suite">Deep Muscle Recovery Suite (Package)</option>
                  <option value="Express Urban Reset">Express Urban Reset (Package)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-name" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter guest name"
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#5D6241]/60"
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                    Mobile Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98200 12345"
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#5D6241]/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-date" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                  />
                </div>

                <div>
                  <label htmlFor="booking-timeslot" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    id="booking-timeslot"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:30 PM)">Evening (5:00 PM – 9:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-email" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#5D6241]/60"
                  />
                </div>

                <div>
                  <label htmlFor="booking-guests" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                    Number of Guests
                  </label>
                  <select
                    id="booking-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs"
                  >
                    <option value="1 Person (Individual)">1 Person (Individual)</option>
                    <option value="2 People (Couple / Duo)">2 People (Couple / Duo)</option>
                    <option value="Small Group">Small Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="booking-notes" className="block text-xs uppercase tracking-wider text-[#595048] mb-2 font-medium">
                  Special Notes or Muscle Focus Areas
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention target muscle tightness, pressure preferences, or special occasion requests..."
                  className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#E8DFD1] text-xs text-[#40352E] focus:outline-none focus:border-[#B77A60] rounded-xs placeholder:text-[#5D6241]/60"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#B77A60] hover:bg-[#a66d54] transition-colors rounded-xs shadow-sm cursor-pointer active:scale-[0.99] border border-[#B77A60]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Submit Booking Request
                </button>
              </div>

              <p className="text-[11px] text-[#5D6241] text-center pt-2">
                *Appointments are verified directly with our reception team prior to confirmation.
              </p>

            </form>
          )}

        </div>
      </div>
    </main>
  );
}
