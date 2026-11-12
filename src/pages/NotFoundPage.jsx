import { Link } from 'react-router-dom';
import { Home, Calendar } from 'lucide-react';
import JyotikaLogo from '../components/JyotikaLogo';

export default function NotFoundPage({ onOpenBooking }) {
  return (
    <main className="flex-grow pt-32 pb-24 bg-[#FAF9F6] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <JyotikaLogo variant="symbol" size="lg" className="mx-auto" />
        
        <div className="space-y-2">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B77A60] font-semibold">
            Page Not Found • 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#40352E] font-normal">
            Return to Sanctuary
          </h1>
          <p className="text-xs sm:text-sm text-[#5A4E46] font-light max-w-md mx-auto">
            The page you are looking for has moved or does not exist. Allow us to guide you back to our serene treatment menu.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs tracking-wider uppercase font-medium text-white bg-[#40352E] hover:bg-[#B77A60] rounded-xs shadow-2xs border border-[#40352E] transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-2 text-[#E8DFD1]" />
            Back to Homepage
          </Link>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs tracking-wider uppercase font-medium text-[#40352E] bg-white hover:bg-[#F1EADF] border border-[#E8DFD1] hover:border-[#B77A60] rounded-xs shadow-2xs transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 mr-2 text-[#B77A60]" />
            Book Appointment
          </button>
        </div>
      </div>
    </main>
  );
}
