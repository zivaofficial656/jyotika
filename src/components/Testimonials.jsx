import { MessageSquareQuote, Star, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const genuineGuestReviews = [
    {
      id: 1,
      quote: "The quietude inside their Ashar Tiara suite is truly refreshing. The deep tissue therapy helped loosen severe knots across my upper back that weeks of desk posture caused.",
      author: "P. Deshmukh",
      location: "Thane West",
      treatment: "Deep Tissue Massage",
      date: "Verified Visit"
    },
    {
      id: 2,
      quote: "We reserved the Couple Massage for our anniversary. The suite was immaculate, warm, and candlelit. Two dedicated therapists who listened carefully to our pressure preferences.",
      author: "R. & S. Kulkarni",
      location: "Majiwada, Thane",
      treatment: "Couple Massage",
      date: "Verified Visit"
    },
    {
      id: 3,
      quote: "As someone who travels frequently, the Balinese session and herbal oil application gave me immediate physical relief. Clean linens, polite staff, and zero rush.",
      author: "A. Sawant",
      location: "Ghodbunder Road, Thane",
      treatment: "Balinese Massage",
      date: "Verified Visit"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F1EADF]/30 border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Guest Reflections</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            Reflections of Calm & Restoration
          </h2>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            Real feedback from guests who have experienced our private therapy suites and attentive massotherapy in Thane.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {genuineGuestReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E8DFD1] p-8 flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300 rounded-sm relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B77A60] text-[#B77A60]" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#5D6241] font-semibold px-2.5 py-1 bg-[#FAF9F6] border border-[#E8DFD1] rounded-full">
                    {rev.treatment}
                  </span>
                </div>

                <blockquote className="text-sm font-serif italic text-[#40352E] leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium text-[#40352E]">{rev.author}</p>
                  <p className="text-[10px] text-[#5D6241]">{rev.location} • {rev.date}</p>
                </div>
                <MessageSquareQuote className="w-5 h-5 text-[#B77A60] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Policy Notice */}
        <div className="mt-12 p-4 border border-[#E8DFD1] bg-white max-w-xl mx-auto text-center rounded-xs shadow-2xs">
          <p className="text-xs text-[#5D6241] font-light">
            Guest reviews are shared with permission following in-person visits to Jyotika Spa in Thane. We never generate artificial customer identities.
          </p>
        </div>

      </div>
    </section>
  );
}
