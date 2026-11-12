import { useState } from 'react';
import { FAQS } from '../data/faqData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Sparkles, Plus, Minus, Search, MessageCircle, Phone } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Etiquette' },
    { id: 'treatments', label: 'Treatments & Pressure' },
    { id: 'booking', label: 'Booking & Policies' },
    { id: 'couples', label: 'Couples & Privacy' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Jyotika Spa (Thane), I have an inquiry regarding your treatments and availability.`
  );
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.contact.phoneRaw}?text=${whatsappMessage}`;

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF9F6]">
      
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#777B57] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Guest Assistance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Frequently Asked Questions | <span className="italic font-light text-[#B77A60]">Jyotika Spa Thane</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595048] font-light leading-relaxed">
            Clear, transparent answers about appointments, treatment customization, etiquette, and hygiene at our Ashar Tiara Complex sanctuary in Thane.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Search & Categories */}
        <div className="space-y-6">
          <div className="relative">
            <Search className="w-4 h-4 text-[#777B57] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-11 pr-4 py-3.5 text-xs bg-white border border-[#E8DFD1] focus:outline-none focus:border-[#B77A60] rounded-xs text-[#40352E] shadow-2xs placeholder:text-[#777B57]/60"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-medium rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#B77A60] text-white shadow-xs'
                    : 'bg-white text-[#595048] border border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="divide-y divide-[#E8DFD1] border-y border-[#E8DFD1] bg-white p-6 sm:p-8 rounded-sm shadow-2xs">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#40352E] font-normal group-hover:text-[#B77A60] transition-colors pr-6">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 border shrink-0 transition-colors rounded-full ${
                      isOpen
                        ? 'border-[#B77A60] bg-[#B77A60] text-white'
                        : 'border-[#E8DFD1] text-[#40352E] group-hover:border-[#B77A60]'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-10 text-xs sm:text-sm text-[#595048] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white border border-[#E8DFD1] rounded-sm p-6">
            <p className="font-serif text-xl text-[#40352E]">No matching questions found.</p>
            <p className="text-xs text-[#595048] mt-1">Feel free to connect directly with our reception team.</p>
          </div>
        )}

        {/* Still have questions card */}
        <div className="bg-white border border-[#E8DFD1] p-8 rounded-sm shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#40352E]">Still Have a Question?</h3>
            <p className="text-xs text-[#595048] font-light">Our front desk team is delighted to assist you with room or therapy details.</p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xs shadow-2xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 fill-white stroke-none" />
              WhatsApp
            </a>

            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-[#40352E] bg-[#FAF9F6] border border-[#E8DFD1] hover:border-[#B77A60] rounded-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#B77A60]" />
                Call Desk
              </a>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
