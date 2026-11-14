import { Sparkles, Bed, Wind, Users, ShieldCheck, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EXPERIENCE_IMAGES, GALLERY_IMAGES } from '../data/images';

export default function ExperiencePage({ onOpenBooking }) {
  const pillars = [
    {
      icon: Bed,
      title: "Private Single & Dual Suites",
      desc: "Sound-insulated treatment suites engineered for quiet stillness, featuring extra-wide memory foam therapy beds, contoured face rests, and custom temperature controls."
    },
    {
      icon: Wind,
      title: "Serene Acoustic & Scent Design",
      desc: "Subtle acoustic soundscapes and gentle cold-diffused botanical extracts (lavender, frankincense, lemongrass) trigger immediate relaxation for overstimulated minds."
    },
    {
      icon: Users,
      title: "Practitioner Craftsmanship",
      desc: "Every therapist at Jyotika Spa is trained in anatomical muscular alignment, intuitive pressure modulation, and respectful guest etiquette."
    },
    {
      icon: ShieldCheck,
      title: "Clinical-Grade Sanitation",
      desc: "Hygiene is non-negotiable. Rooms are disinfected between each appointment; linens are freshly laundered; and disposable amenities are standard."
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Warm Welcome & Consultation",
      desc: "Arrive at our 1st Floor Ashar Tiara suite and unwind with our warm botanical welcome tea while discussing personal pressure goals with your therapist."
    },
    {
      step: "02",
      title: "Sensory Immersion",
      desc: "Enter your private suite, adjust the ambient lighting to your preference, and breathe in custom botanical essences."
    },
    {
      step: "03",
      title: "Mindful Tailored Bodywork",
      desc: "Receive customized massotherapy where pressure, tempo, and warm herbal oils are tuned to release your deepest musculoskeletal knots."
    },
    {
      step: "04",
      title: "Unhurried Return",
      desc: "Take your time easing back into the day with quiet relaxation and hydrating herbal infusions in our peaceful lounge."
    }
  ];

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-[#F1EADF]/40 border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>The Jyotika Environment</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Our Experience | <span className="italic font-light text-[#B77A60]">A World of Quiet Stillness</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5A4E46] font-light leading-relaxed">
            Discover what sets Jyotika Spa apart: unhurried appointments, certified therapists, private suites, and meticulous cleanliness at Ashar Tiara in Thane.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* Asymmetric Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#5A4E46] font-light leading-relaxed">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">
              The Sanctuary Architecture
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal leading-snug">
              Designed as an Antidote to Urban Rush
            </h2>

            <p>
              In a busy commercial city like Thane, noise and sensory bombardment are constant. Jyotika Spa was deliberately built to counter this reality. From acoustic door sealing to warm indirect illumination, our suites are designed to help you let down your guard the moment you cross the threshold.
            </p>

            <p>
              We reject the hurried, clinical atmosphere common in standard day spas. Here, sessions are unhurried, consultations are thorough, and therapists are trained to respect your silence, allowing you to drift into restorative repose.
            </p>

            <div className="p-6 bg-white border-l-2 border-[#B77A60] text-base italic font-serif text-[#40352E] rounded-r-xs shadow-2xs">
              &ldquo;Silence and attentive touch are not luxuries—they are the natural conditions under which the body heals itself.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            <div className="space-y-4">
              <div className="overflow-hidden border border-[#E8DFD1] bg-white aspect-[4/5] shadow-md rounded-sm group">
                <img
                  src={EXPERIENCE_IMAGES.treatmentRooms}
                  alt="Private single treatment room at Jyotika Spa Thane"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width="300"
                  height="375"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#5D6241] text-center font-medium">
                Pristine Therapy Suites
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden border border-[#E8DFD1] bg-white aspect-[4/5] shadow-md rounded-sm group">
                <img
                  src={GALLERY_IMAGES.relaxationCorner}
                  alt="Post ritual herbal tea lounge at Jyotika Spa Thane"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width="300"
                  height="375"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#5D6241] text-center font-medium">
                Herbal Relaxation Nook
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Experience */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">Sanctuary Standards</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">What to Expect at Jyotika Spa</h2>
            <div className="w-12 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DFD1] p-8 rounded-sm hover:border-[#B77A60] shadow-2xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 border border-[#E8DFD1] bg-[#FAF9F6] flex items-center justify-center text-[#B77A60] mb-6 group-hover:bg-[#40352E] group-hover:text-[#FAF9F6] group-hover:border-[#40352E] transition-colors duration-300 rounded-xs">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-serif text-xl text-[#40352E] font-normal mb-3">
                      {pil.title}
                    </h3>
                    <p className="text-xs text-[#5A4E46] font-light leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E8DFD1]/50 text-[10px] text-[#5D6241] uppercase tracking-widest font-mono">
                    Standard 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Journey Walkthrough */}
        <div className="bg-white border border-[#E8DFD1] p-8 sm:p-14 rounded-sm shadow-2xs space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">Your Visit Step-by-Step</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">How Your Session Unfolds</h2>
            <p className="text-xs text-[#5A4E46] font-light">From arrival at Ashar Tiara Complex to your unhurried departure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, i) => (
              <div key={i} className="p-6 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs space-y-3">
                <span className="font-mono text-2xl text-[#B77A60] font-semibold">{step.step}</span>
                <h4 className="font-serif text-lg text-[#40352E] font-normal">{step.title}</h4>
                <p className="text-xs text-[#5A4E46] font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="bg-[#40352E] text-white p-8 sm:p-14 rounded-sm shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#E8DFD1] font-semibold">
              Ashar Tiara • Thane
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF9F6]">Ready to Experience Jyotika Spa?</h3>
            <p className="text-xs sm:text-sm text-[#E8DFD1]/90 font-light leading-relaxed">
              We look forward to welcoming you to our sanctuary. Book online or speak with our concierge directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-wider uppercase font-medium text-white border border-[#B77A60] hover:border-[#E8DFD1] hover:bg-white/10 rounded-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
                Call Concierge
              </a>
            )}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-wider uppercase font-medium text-[#40352E] bg-[#FAF9F6] hover:bg-[#E8DFD1] rounded-xs shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
              Book Appointment
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
