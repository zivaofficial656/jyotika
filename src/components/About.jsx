import { Sparkles, Flower2, HeartHandshake, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ABOUT_IMAGES } from '../data/images';

export default function About() {
  const philosophyPillars = [
    {
      icon: Flower2,
      title: 'Pure Botanicals',
      description: 'Cold-pressed carrier oils and organic aromatic essences formulated to deeply nourish muscle tissue without synthetic scents.'
    },
    {
      icon: HeartHandshake,
      title: 'Attentive Practitioners',
      description: 'Consultative care where every stroke, pressure level, and focal area is calibrated to your physical wellbeing.'
    },
    {
      icon: ShieldCheck,
      title: 'Pristine Hygiene Standard',
      description: 'Private therapy rooms with fresh laundered linens, sterilized equipment, and single-use hygienic amenities for every guest.'
    },
    {
      icon: Clock,
      title: 'The Art of Unhurried Pace',
      description: 'Generous buffers between bookings guarantee you are never hurried through consultation, treatment, or post-ritual tea.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            Boutique Philosophy
          </p>
          {/* Exact Headline as requested: "A Pause From the Everyday." */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            A Pause From the Everyday.
          </h2>
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            Welcome to Jyotika Spa—a contemporary boutique sanctuary in Thane dedicated to mindful touch, restorative bodywork, and genuine hospitality.
          </p>
        </div>

        {/* Asymmetric Layout with Large Photograph and Elegant Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Large Editorial Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#E8DFD1] p-3 bg-white shadow-xl rounded-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-xs bg-[#E8DFD1]/20">
                <img
                  src={ABOUT_IMAGES.intro}
                  alt="Jyotika Spa contemporary boutique interior and serene massage room in Thane"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
              <div className="p-4 bg-[#F1EADF]/40 border-t border-[#E8DFD1] flex items-center justify-between text-xs text-[#5A4E46]">
                <span className="font-serif italic text-sm text-[#40352E]">1st Floor, Ashar Tiara Complex</span>
                <span className="text-[11px] tracking-widest uppercase text-[#5D6241] font-semibold">Thane, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Elegant Story Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#5A4E46] font-light leading-relaxed">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] text-[11px] tracking-widest uppercase text-[#A35D43] font-semibold rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
              <span>A Welcoming Wellness Destination</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#40352E] font-normal leading-snug">
              Mindful Rest, Restorative Bodywork & Quiet Serenity
            </h3>

            <p>
              Located on the 1st Floor of Ashar Tiara Commercial Complex in Gandhi Nagar, Thane, Jyotika Spa was designed as a tranquil retreat from the clamor of daily life. We believe authentic wellness begins with quiet intentionality—a space where you can pause, breathe deeply, and allow your body to reset.
            </p>

            <p>
              Whether you need to unclench persistent postural knots with a therapeutic deep tissue massage, share a peaceful afternoon in our candlelit couple suite, or calm sensory overload with aromatic botanical oils, our certified practitioners guide every session with unhurried care.
            </p>
            
            <div className="p-6 border-l-2 border-[#B77A60] bg-white text-base italic font-serif text-[#40352E] shadow-2xs rounded-r-xs">
              &ldquo;We have created a welcoming haven where every detail—from the warmth of our oils to the quietude of our private suites—is designed to help you regain your natural balance.&rdquo;
            </div>

            <p className="text-xs text-[#5D6241]">
              Visit us at {BUSINESS_INFO.address.full}.
            </p>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#E8DFD1]">
          {philosophyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8DFD1] hover:border-[#B77A60] transition-all duration-300 shadow-2xs hover:shadow-lg rounded-xs group"
              >
                <div className="w-11 h-11 border border-[#E8DFD1] flex items-center justify-center text-[#B77A60] mb-4 bg-[#FAF9F6] group-hover:bg-[#40352E] group-hover:text-[#FAF9F6] group-hover:border-[#40352E] transition-colors duration-300 rounded-xs">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="font-serif text-xl font-normal text-[#40352E] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5A4E46] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
