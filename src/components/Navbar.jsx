import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import JyotikaLogo from './JyotikaLogo';
import { trackCallClick } from '../utils/analytics';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition during render
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/services' },
    { name: 'Our Experience', path: '/experience' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8DFD1] shadow-xs py-3'
          : 'bg-[#FAF9F6]/85 backdrop-blur-xs border-b border-[#E8DFD1]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* New Brand Logo */}
          <Link
            to="/"
            className="focus:outline-none"
            aria-label="Jyotika Spa Thane Homepage"
          >
            <JyotikaLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase font-medium transition-all py-1.5 relative ${
                    isActive
                      ? 'text-[#B77A60] font-semibold'
                      : 'text-[#5A4E46] hover:text-[#40352E]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B77A60] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call & Book Appointment CTAs */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                onClick={() => trackCallClick('navbar_desktop')}
                className="inline-flex items-center justify-center px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium text-[#40352E] hover:text-[#B77A60] border border-[#E8DFD1] hover:border-[#B77A60] transition-all bg-white/70 rounded-xs shadow-2xs"
                title={`Call desk: ${BUSINESS_INFO.contact.displayPhone}`}
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#B77A60]" />
                <span>Call Desk</span>
              </a>
            )}

            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] transition-all duration-300 shadow-sm rounded-xs cursor-pointer active:scale-[0.98] border border-[#40352E]"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center lg:hidden space-x-2">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                onClick={() => trackCallClick('navbar_mobile')}
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2.5 text-[#40352E] bg-white border border-[#E8DFD1] rounded-xs hover:border-[#B77A60] active:scale-95"
                aria-label={`Call ${BUSINESS_INFO.contact.displayPhone}`}
              >
                <Phone className="w-4 h-4 text-[#B77A60]" />
              </a>
            )}
            <button
              onClick={onOpenBooking}
              type="button"
              className="min-h-[44px] inline-flex items-center justify-center px-4 py-2 text-xs tracking-widest uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] rounded-xs shadow-2xs active:scale-95"
              aria-label="Book appointment"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-[#40352E] hover:text-[#B77A60] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Modern Responsive Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden border-b border-[#E8DFD1] bg-[#FAF9F6] px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="mb-4 pb-3 border-b border-[#E8DFD1]">
            <JyotikaLogo size="sm" />
          </div>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-[0.16em] uppercase py-2.5 border-b border-[#E8DFD1]/50 transition-colors ${
                    isActive ? 'text-[#B77A60] font-semibold' : 'text-[#5A4E46] hover:text-[#40352E]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 space-y-3">
              {BUSINESS_INFO.contact.phoneTel && (
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  onClick={() => trackCallClick('navbar_drawer')}
                  className="w-full flex items-center justify-center px-4 py-3 text-xs tracking-[0.16em] uppercase font-medium text-[#40352E] bg-white border border-[#E8DFD1] rounded-xs"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#B77A60]" />
                  Call {BUSINESS_INFO.contact.displayPhone}
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center px-4 py-3 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] rounded-xs shadow-xs"
              >
                <Calendar className="w-4 h-4 mr-2 text-[#E8DFD1]" />
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
