import { BUSINESS_INFO } from '../data/businessInfo';

export default function PrivacyPage() {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#777B57] font-semibold">
            Legal & Confidentiality
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#40352E] font-normal tracking-tight">
            Privacy Policy
          </h1>
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          <p className="text-xs text-[#777B57]">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-12 rounded-sm shadow-2xs space-y-8 text-xs sm:text-sm text-[#5A4E46] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">1. Commitment to Guest Privacy</h2>
            <p>
              At {BUSINESS_INFO.name}, located at {BUSINESS_INFO.address.full}, we consider your privacy of utmost importance. This Privacy Policy outlines how we collect, handle, and protect your personal information when scheduling massage appointments or browsing our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">2. Information We Collect</h2>
            <p>When requesting an appointment or contacting our reception desk, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Guest Name and preferred mode of address.</li>
              <li>Contact telephone number and/or WhatsApp number.</li>
              <li>Email address for appointment verifications.</li>
              <li>Preferred therapy selections, session timings, and physical focal area notes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">3. How Your Information is Used</h2>
            <p>
              Your contact details are used strictly to coordinate your spa appointment, confirm therapist allocation, and inform you of relevant scheduling details. We do not sell, rent, or trade your personal data to external third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">4. Health & Safety Consultations</h2>
            <p>
              Any physical discomforts, allergies to specific botanical carrier oils, or medical considerations discussed during intake consultations remain entirely confidential between you and your assigned certified therapist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#40352E] font-normal">5. Contact Regarding Privacy</h2>
            <p>
              If you have inquiries regarding our data handling procedures, feel free to contact our sanctuary concierge at{' '}
              <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="text-[#B77A60] underline">
                {BUSINESS_INFO.contact.email}
              </a>{' '}
              or speak with our front desk team at {BUSINESS_INFO.contact.displayPhone}.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
