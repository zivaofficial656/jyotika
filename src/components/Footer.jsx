import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Calendar, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICES } from '../data/servicesData';
import JyotikaLogo from './JyotikaLogo';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Sanctuary', path: '/about' },
    { name: 'All Treatments', path: '/services' },
    { name: 'Our Experience', path: '/experience' },
    { name: 'Photo & Video Gallery', path: '/gallery' },
    { name: 'Offers & Rituals', path: '/packages' },
    { name: 'Guest FAQs', path: '/faq' },
    { name: 'Contact & Location', path: '/contact' },
    { name: 'Online Booking', path: '/booking' },
  ];

  return (
    <footer className="bg-[#F1EADF]/60 text-[#40352E] border-t border-[#E8DFD1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8DFD1]">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <JyotikaLogo size="md" />
            </Link>

            <p className="text-xs text-[#5A4E46] font-light leading-relaxed max-w-sm pt-2">
              {BUSINESS_INFO.shortDescription}
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#5A4E46] font-light leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B77A60] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>

              {BUSINESS_INFO.contact.phoneTel && (
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#B77A60] shrink-0" />
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="hover:text-[#B77A60] transition-colors tracking-wide font-medium text-[#40352E]"
                  >
                    {BUSINESS_INFO.contact.displayPhone}
                  </a>
                </div>
              )}

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#B77A60] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="hover:text-[#B77A60] transition-colors font-medium text-[#40352E]"
                >
                  {BUSINESS_INFO.contact.emailDisplay}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3 text-[#777B57]">
              <span className="text-[11px] uppercase tracking-wider text-[#777B57] font-semibold">Follow:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white border border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E] rounded-full transition-colors"
                aria-label="Jyotika Spa Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white border border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E] rounded-full transition-colors"
                aria-label="Jyotika Spa Facebook"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#777B57] font-semibold">
              Explore Sanctuary
            </p>
            <ul className="grid grid-cols-1 gap-2 text-xs text-[#5A4E46]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#B77A60] hover:translate-x-1 transition-all py-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Treatments Column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#777B57] font-semibold">
              Signature Treatments
            </p>
            <ul className="space-y-2 text-xs text-[#5A4E46]">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/treatments/${srv.slug}`}
                    className="hover:text-[#B77A60] transition-colors py-0.5 inline-block"
                  >
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Action & Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#777B57] font-semibold">
              Visiting Hours
            </p>
            <div className="text-xs text-[#5A4E46] space-y-1 font-light">
              <p><span className="font-medium text-[#40352E]">Daily:</span> 10:00 AM – 09:30 PM</p>
              <p className="text-[#777B57] text-[11px]">Prior booking recommended for dedicated therapist allocation.</p>
            </div>
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all rounded-xs cursor-pointer shadow-2xs border border-[#40352E]"
              >
                <Calendar className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
                Book Appointment
              </button>
            </div>
            <p className="text-[10px] text-[#777B57]">
              UPI, Credit/Debit Cards, Cash, Net Banking
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777B57] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}, Thane. All rights reserved.
          </p>

          <div className="flex items-center space-x-5">
            <Link to="/privacy" className="hover:text-[#40352E] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#E8DFD1]">•</span>
            <Link to="/terms" className="hover:text-[#40352E] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#E8DFD1]">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center hover:text-[#40352E] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1 text-[#B77A60]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
