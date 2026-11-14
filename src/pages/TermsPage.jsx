import { BUSINESS_INFO } from '../data/businessInfo';

export default function TermsPage() {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            Terms of Service
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#40352E] font-normal tracking-tight">
            Terms & Conditions
          </h1>
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          <p className="text-xs text-[#5D6241]">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-12 rounded-sm shadow-2xs space-y-8 text-xs sm:text-sm text-[#5A4E46] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">1. Overview</h2>
            <p>
              Welcome to {BUSINESS_INFO.name}. By scheduling an appointment or utilizing our sanctuary services at {BUSINESS_INFO.address.full}, you agree to the following terms and guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">2. Appointments & Confirmation</h2>
            <p>
              Online and telephone appointment requests are subject to confirmation based on therapist and treatment room availability. An appointment is officially scheduled once our front desk connects with you directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">3. Arrival & Etiquette</h2>
            <p>
              We recommend arriving 10 to 15 minutes prior to your scheduled time slot to enjoy your welcome tea and complete consultation. Late arrivals may result in an adjusted session duration so subsequent scheduled appointments are not delayed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">4. Rescheduling & Cancellations</h2>
            <p>
              If you need to reschedule or cancel your session, please notify our reception team at least 3 hours in advance so we may accommodate other guests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">5. Health & Well-being</h2>
            <p>
              Guests are kindly asked to inform our therapists of any medical conditions, high blood pressure, recent injuries, or pregnancy prior to beginning the session.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">6. Code of Conduct</h2>
            <p>
              Jyotika Spa is a professional wellness sanctuary dedicated to genuine restorative therapy. Respectful behavior is expected at all times. Any inappropriate conduct will result in the immediate termination of the session.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
