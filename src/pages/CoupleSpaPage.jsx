import { Heart, Check, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICE_IMAGES, GALLERY_IMAGES, EXPERIENCE_IMAGES } from '../data/images';

export default function CoupleSpaPage({ onOpenBooking }) {
  const coupleRituals = [
    {
      title: "Harmony Couples Sanctuary",
      duration: "90 mins",
      pricing: "Pricing on consultation",
      description: "Our signature dual therapy experience. Side-by-side Swedish or Balinese massages tailored to individual pressure preferences in our private candlelit suite.",
      image: GALLERY_IMAGES.suiteCouple,
      inclusions: [
        "Private Dual Therapy Suite with Ambient Acoustics",
        "Individual Choice of Swedish or Balinese Bodywork",
        "Warm Herbal Compress & Essential Aromatics",
        "Artisan Herbal Tea & Fresh Fruit Refreshment"
      ]
    },
    {
      title: "Anniversary Symphony Retreat",
      duration: "120 mins",
      pricing: "Pricing on consultation",
      description: "An extended shared retreat combining gentle botanical body polishing with deep restorative massotherapy and calming scalp pressure release.",
      image: SERVICE_IMAGES.couples,
      inclusions: [
        "Full Body Organic Botanical Scrub (30 mins)",
        "Synchronized Restorative Massage (60 mins)",
        "Aromatic Scalp & Temple Tension Release (15 mins)",
        "Private Candlelit Suite Lounge Relaxation (15 mins)"
      ]
    },
    {
      title: "Express Duo Reset",
      duration: "60 mins",
      pricing: "Pricing on consultation",
      description: "A time-efficient shared pause designed for partners seeking revitalization and mutual calm during a busy week.",
      image: EXPERIENCE_IMAGES.lounge,
      inclusions: [
        "Focused Dual Upper Body or Full Body Therapy (50 mins)",
        "Warm Botanical Towel Compress",
        "Calming Essential Oil Hydration",
        "Herbal Post-Treatment Infusion"
      ]
    }
  ];

  const ritualSteps = [
    {
      step: "01",
      title: "Warm Arrival & Consultation",
      desc: "Begin with our calming botanical welcome tea while discussing individual pressure preferences and target tension areas with each dedicated therapist."
    },
    {
      step: "02",
      title: "Private Suite Immersion",
      desc: "Step into our candlelit dual therapy room featuring soft acoustic undertones, soothing aromatherapy scents, and pre-warmed organic linens."
    },
    {
      step: "03",
      title: "Side-by-Side Synchronized Bodywork",
      desc: "Two certified therapists work in harmonious rhythm, ensuring both partners receive focused, attentive care customized to their personal comfort."
    },
    {
      step: "04",
      title: "Unhurried Post-Ritual Stillness",
      desc: "Conclude with fresh herbal infusions and quiet relaxation time in your private suite, easing smoothly back into the day."
    }
  ];

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Shared Sanctuary Experience</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight max-w-4xl mx-auto leading-tight">
            Couples Spa Sanctuary | <span className="italic font-light text-[#B77A60]">Shared Stillness in Thane.</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Recharge together in complete seclusion. Our bespoke dual suites provide an unhurried haven for couples, partners, and friends seeking side-by-side restorative therapy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* Editorial Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#595048] font-light leading-relaxed">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">
              The Art of Shared Renewal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">
              Unwind Together in Your Private Thane Suite
            </h2>
            <p>
              Shared wellness is a meaningful ritual. At Jyotika Spa in Thane, our Couples Sanctuary is conceived as an intimate, sound-insulated retreat where time slows down. We pair two therapists who adapt techniques and pressure levels to each individual guest.
            </p>
            <p>
              Whether celebrating an anniversary, a birthday, or simply taking refuge from weekly work stress, our suites provide soft ambient lighting, gentle acoustic melodies, and pure cold-pressed botanicals for deep rejuvenation.
            </p>
            <div className="p-4 bg-white border-l-2 border-[#B77A60] text-sm italic font-serif text-[#40352E]">
              &ldquo;An intentional space for two people to pause, breathe in sync, and release stored muscular strain.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E8DFD1] shadow-xl bg-white">
              <img
                src={GALLERY_IMAGES.suiteCouple}
                alt="Jyotika Spa private couple therapy room in Thane"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 bg-white border border-[#E8DFD1] shadow-lg rounded-sm max-w-xs text-xs space-y-1">
              <p className="font-serif text-sm font-medium text-[#40352E]">Private Dual Treatment Suite</p>
              <p className="text-xs text-[#5D6241] uppercase tracking-wider">
                Ashar Tiara Complex • Thane
              </p>
            </div>
          </div>
        </div>

        {/* Ritual Packages Showcase */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">Curated Experiences</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">Dual Ritual Options</h2>
            <div className="w-12 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coupleRituals.map((ritual, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8DFD1] hover:border-[#B77A60] transition-colors duration-300 rounded-sm overflow-hidden shadow-2xs flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#F1EADF]">
                    <img
                      src={ritual.image}
                      alt={ritual.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                      loading="lazy"
                      width="400"
                      height="250"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#5D6241]">
                      <span className="uppercase tracking-wider font-medium">{ritual.duration}</span>
                      <span className="italic">{ritual.pricing}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#40352E] font-normal">
                      {ritual.title}
                    </h3>

                    <p className="text-sm text-[#595048] font-light leading-relaxed">
                      {ritual.description}
                    </p>

                    <div className="pt-2 border-t border-[#E8DFD1] space-y-2">
                      <p className="text-xs uppercase tracking-wider text-[#A35D43] font-medium">Ritual Includes:</p>
                      <ul className="space-y-1.5 text-xs text-[#595048] font-light">
                        {ritual.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#B77A60] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onOpenBooking ? onOpenBooking({ serviceName: ritual.title }) : window.location.assign('/booking')}
                    className="w-full min-h-[44px] py-3 bg-[#F1EADF] hover:bg-[#B77A60] hover:text-white text-[#40352E] font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded-sm border border-[#E8DFD1] flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire for Couples</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Journey */}
        <div className="bg-[#F1EADF] p-8 sm:p-14 border border-[#E8DFD1] rounded-sm space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">The Sequence</span>
            <h2 className="font-serif text-3xl text-[#40352E] font-normal">Your Couples Ritual Flow</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ritualSteps.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <span className="font-serif text-3xl text-[#B77A60] font-light">{step.step}</span>
                <h3 className="font-serif text-lg text-[#40352E] font-medium">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#595048] font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Call */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">
            Reserve Your Private Dual Suite
          </h2>
          <p className="text-sm sm:text-base text-[#595048] font-light leading-relaxed">
            Due to high demand for our private couples sanctuary at Ashar Tiara Complex in Thane, advance reservation is recommended for evening and weekend sessions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ serviceName: "Couples Massage Sanctuary" }) : window.location.assign('/booking')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#B77A60] hover:bg-[#a66d54] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded-sm shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Couples Suite</span>
            </button>
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#E8DFD1] hover:border-[#B77A60] text-[#40352E] font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded-sm shadow-2xs flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#B77A60]" />
              <span>Call Concierge</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
