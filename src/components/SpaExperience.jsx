import { Sparkles, Bed, Wind, Users, ShieldCheck } from 'lucide-react';
import { EXPERIENCE_IMAGES } from '../data/images';

export default function SpaExperience() {
  const experiences = [
    {
      title: 'Private Therapy Suites',
      category: 'Treatment Spaces',
      description: 'Sound-insulated single and couple suites dressed in crisp organic cotton linens, adjustable ambient lighting, and personalized temperature control.',
      image: EXPERIENCE_IMAGES.treatmentRooms,
      icon: Bed
    },
    {
      title: 'Serene Sensory Ambiance',
      category: 'Atmosphere',
      description: 'Quiet acoustic undertones, subtle botanical oil aromas, and warm natural textures designed to calm your central nervous system upon arrival.',
      image: EXPERIENCE_IMAGES.lounge,
      icon: Wind
    },
    {
      title: 'Attentive Practitioners',
      category: 'Certified Care',
      description: 'Practitioners trained in mindful anatomical muscle restoration, intuitive pressure modulation, and courteous, respectful hospitality.',
      image: EXPERIENCE_IMAGES.therapists,
      icon: Users
    },
    {
      title: 'Strict Sanitation Standards',
      category: 'Hygiene & Cleanliness',
      description: 'Every suite undergoes thorough disinfection between visits. Single-use amenities, freshly laundered linens, and sanitized tools for each guest.',
      image: EXPERIENCE_IMAGES.hygiene,
      icon: ShieldCheck
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F1EADF]/40 border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#777B57] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>The Jyotika Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            An Atmosphere of Pure Calm
          </h2>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            Every room at Jyotika Spa in Ashar Tiara Complex is purposefully crafted to immerse you in quietude, spotless cleanliness, and restorative tactile care.
          </p>
        </div>

        {/* 4 Feature Columns with Authentic Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8DFD1] hover:border-[#B77A60] transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between h-full shadow-2xs hover:shadow-xl group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DFD1]/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs p-2 rounded-full border border-[#E8DFD1] text-[#B77A60] shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Narrative */}
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#777B57] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-[#40352E] font-normal group-hover:text-[#B77A60] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5A4E46] font-light leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="w-full h-px bg-[#E8DFD1]/60" />
                  <p className="text-[10px] tracking-widest uppercase text-[#777B57] mt-3 font-mono">
                    Ashar Tiara • Thane
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width Atmosphere Banner */}
        <div className="mt-14 p-6 sm:p-10 bg-white border border-[#E8DFD1] rounded-sm shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="font-serif text-2xl text-[#40352E] font-normal">Our Cleanliness & Guest Safety Guarantee</h4>
            <p className="text-xs text-[#5A4E46] font-light leading-relaxed">
              We strictly maintain medical-grade sterilization between all sessions. Single-use amenities and freshly laundered organic cotton linens are standard for every guest.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#FAF9F6] border border-[#E8DFD1] rounded-full text-xs text-[#40352E] font-medium shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#B77A60]" />
            <span>Pristine Hygiene Standard</span>
          </div>
        </div>

      </div>
    </section>
  );
}
