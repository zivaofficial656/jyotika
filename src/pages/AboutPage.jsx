import { Sparkles, Flower2, HeartHandshake, ShieldCheck, Clock, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ABOUT_IMAGES, GALLERY_IMAGES } from '../data/images';

export default function AboutPage({ onOpenBooking }) {
  const coreValues = [
    {
      icon: Flower2,
      title: 'Botanical Integrity',
      description: 'We exclusively formulate with cold-pressed natural seed oils, pure botanical essential essences, and herbal extracts devoid of synthetic dyes.'
    },
    {
      icon: HeartHandshake,
      title: 'Attentive Therapist Touch',
      description: 'Our therapists are skilled practitioners who listen to your body, modulating pressure and tempo to match your unique muscle tension patterns.'
    },
    {
      icon: ShieldCheck,
      title: 'Immaculate Cleanliness',
      description: 'Hospitality starts with cleanliness. Freshly laundered organic cotton linens, sanitized suites, and single-use amenities for every appointment.'
    },
    {
      icon: Clock,
      title: 'The Luxury of Time',
      description: 'We build deliberate buffers between appointments. You will never be hurried through consultation, treatment, or post-ritual tea.'
    }
  ];

  const facilityHighlights = [
    {
      title: 'Private Single Therapy Suites',
      desc: 'Quiet, temperature-regulated rooms with soft dimmable lights and ergonomic massage beds.',
      image: ABOUT_IMAGES.suite
    },
    {
      title: 'Couples Sanctuary Suite',
      desc: 'Expansive private dual suite featuring side-by-side therapy tables and intimate candlelit atmosphere.',
      image: GALLERY_IMAGES.suiteCouple
    },
    {
      title: 'Aroma & Herbal Welcome Lounge',
      desc: 'A tranquil reception space with warm natural wood, relaxing seating, and warm botanical infusions.',
      image: ABOUT_IMAGES.lounge
    }
  ];

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      
      {/* Editorial Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Our Heritage & Vision</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight max-w-4xl mx-auto leading-tight">
            A Sanctuary Born to Bring <span className="italic font-light text-[#B77A60]">Balance to Thane.</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Discover the philosophy, people, and standards behind Jyotika Spa—a boutique wellness haven designed for unhurried stillness and authentic bodywork.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-[#595048] font-light leading-relaxed">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">
              The Genesis of Jyotika Spa
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal leading-snug">
              Creating an Oasis in the Heart of Thane
            </h2>

            <p>
              In a fast-paced urban world, continuous momentum requires intentional balance. Jyotika Spa was conceived as a quiet counterpoint—a sanctuary where guests can step into Ashar Tiara Commercial Complex in Gandhi Nagar, Thane and instantly immerse themselves in absolute calm.
            </p>

            <p>
              We set out to create an authentic spa experience free of gimmicks. No rushed sessions, no generic conveyor-belt treatments, and no synthetic fragrances. Instead, we focused on the timeless essentials: certified therapists who understand muscular anatomy, pure cold-pressed botanicals, and immaculate private suites.
            </p>

            <div className="p-6 bg-white border-l-2 border-[#B77A60] text-base italic font-serif text-[#40352E] rounded-r-xs shadow-2xs">
              &ldquo;True rejuvenation does not happen in a hurry. It occurs when the senses are quieted, the breath deepens, and skilled hands release stored tension.&rdquo;
            </div>

            <p className="text-xs text-[#5D6241]">
              Located at Ashar Tiara Commercial Complex, Gandhi Nagar, Thane. Open daily from 10:00 AM to 09:30 PM.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            <div className="space-y-4">
              <div className="overflow-hidden border border-[#E8DFD1] bg-white aspect-[4/5] shadow-md rounded-sm group">
                <img
                  src={ABOUT_IMAGES.suite}
                  alt="Jyotika Spa private therapy suite in Thane"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width="300"
                  height="375"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#5D6241] text-center font-medium">
                Pristine Therapy Suite
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden border border-[#E8DFD1] bg-white aspect-[4/5] shadow-md rounded-sm group">
                <img
                  src={GALLERY_IMAGES.suiteCouple}
                  alt="Jyotika Spa couples suite in Thane"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width="300"
                  height="375"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#5D6241] text-center font-medium">
                Couples Harmony Suite
              </p>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">Our Principles</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">The Pillars of Jyotika Wellness</h2>
            <div className="w-12 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DFD1] p-8 rounded-sm shadow-2xs hover:border-[#B77A60] transition-colors duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F1EADF] flex items-center justify-center text-[#B77A60]">
                    <IconComp className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#40352E] font-medium">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#595048] font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facility Transparency Tour */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">Physical Spaces</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">Designed for Deep Calm</h2>
            <p className="text-sm text-[#595048] font-light">
              Every square foot of Jyotika Spa in Thane has been carefully curated with acoustic dampening, warm ambient lighting, and organic linen comforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilityHighlights.map((fac, idx) => (
              <div key={idx} className="bg-white border border-[#E8DFD1] rounded-sm overflow-hidden shadow-2xs group flex flex-col justify-between h-full">
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#F1EADF]">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl text-[#40352E] font-normal group-hover:text-[#B77A60] transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#595048] font-light leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Invitation */}
        <div className="bg-[#40352E] text-[#FAF9F6] p-10 sm:p-14 rounded-sm text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B77A60] font-medium">
            Personalized Rejuvenation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Begin Your Wellness Journey Today
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#FAF9F6]/80 font-light leading-relaxed">
            Contact our Thane reception directly or submit an online reservation request. We look forward to welcoming you to Jyotika Spa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : window.location.assign('/booking')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#B77A60] hover:bg-[#a66d54] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded-sm shadow-md inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve an Appointment</span>
            </button>
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF9F6]/40 hover:border-[#FAF9F6] text-[#FAF9F6] font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded-sm inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#B77A60]" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
