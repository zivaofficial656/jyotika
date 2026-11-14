import { 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  MapPin 
} from 'lucide-react';

export default function WhyChooseUs() {
  const genuineBenefits = [
    {
      icon: Users,
      title: "Professional Therapists",
      description: "Our practitioners bring genuine expertise in human muscular anatomy, Swedish effleurage, deep tissue trigger points, and respectful care."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Consultations",
      description: "Every massage begins with a brief consultation to adjust pressure gradients, target problem knots, and tailor your organic botanical oil blend."
    },
    {
      icon: ShieldCheck,
      title: "Clean & Comfortable Suites",
      description: "Quiet, climate-controlled private therapy rooms with fresh organic linens, sterilized equipment, and single-use hygienic amenities."
    },
    {
      icon: Sparkles,
      title: "Natural Cold-Pressed Botanicals",
      description: "We work with pure plant-derived carrier oils and therapeutic essential oil extracts devoid of synthetic perfumes or mineral additives."
    },
    {
      icon: Smile,
      title: "Unhurried, Welcoming Hospitality",
      description: "Courteous, polite service from your initial welcome tea to post-treatment relaxation. We intentionally space appointments to prevent rushing."
    },
    {
      icon: MapPin,
      title: "Convenient Thane Location",
      description: "Centrally situated on the 1st Floor of Ashar Tiara Commercial Complex in Gandhi Nagar, Thane, with convenient elevator and parking access."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            Boutique Excellence
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            Why Choose Jyotika Spa
          </h2>
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            A conscious commitment to authentic hospitality, mindful massotherapy, and pristine comfort in Thane.
          </p>
        </div>

        {/* 6 Features Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genuineBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8DFD1] p-8 hover:border-[#B77A60] transition-all duration-300 relative group flex flex-col justify-between shadow-2xs hover:shadow-xl rounded-sm"
              >
                <div>
                  <div className="w-12 h-12 border border-[#E8DFD1] bg-[#FAF9F6] flex items-center justify-center text-[#B77A60] mb-6 group-hover:bg-[#40352E] group-hover:text-[#FAF9F6] group-hover:border-[#40352E] transition-colors duration-300 rounded-xs">
                    <Icon className="w-5.5 h-5.5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#40352E] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A4E46] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFD1]/60 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#5D6241] uppercase font-mono font-medium">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-0.5 bg-[#E8DFD1] group-hover:w-12 group-hover:bg-[#B77A60] transition-all duration-300 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
