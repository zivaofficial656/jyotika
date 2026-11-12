import { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E9DDCC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E9DDCC] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#787E65] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A68]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#263D32] tracking-tight">
            Guest Inquiries & Etiquette
          </h2>
          <div className="w-16 h-0.5 bg-[#B69A68] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#595A54] font-light leading-relaxed pt-2">
            Essential details regarding appointments, spa etiquette, and therapies at Jyotika Spa in Gandhi Nagar, Thane.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#E9DDCC] border-t border-b border-[#E9DDCC] bg-white p-6 sm:p-8 rounded-sm shadow-2xs">
          {FAQS.slice(0, 6).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#263D32] font-normal group-hover:text-[#B69A68] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 border shrink-0 transition-colors rounded-full ${
                    isOpen ? 'border-[#B69A68] bg-[#B69A68] text-white' : 'border-[#E9DDCC] text-[#263D32] group-hover:border-[#B69A68]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-xs sm:text-sm text-[#595A54] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center text-xs text-[#787E65] font-light">
          Have an additional question? Feel free to reach out via our contact inquiry page or call our front desk directly.
        </div>

      </div>
    </section>
  );
}
