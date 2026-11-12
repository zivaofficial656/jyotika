import { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function LegalModal({ isOpen, onClose, type }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/55 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white border border-[#E9DDCC] shadow-2xl p-6 sm:p-8 my-8 rounded-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#787E65] hover:text-[#263D32] border border-[#E9DDCC] hover:border-[#B69A68] rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center space-x-3 pb-4 border-b border-[#E9DDCC]">
            <Shield className="w-5 h-5 text-[#B69A68]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#787E65]">Jyotika Spa Legal Policy</span>
          </div>

          <h2 id="legal-modal-title" className="font-serif text-2xl font-normal text-[#263D32]">
            {type === 'terms' ? 'Terms & Conditions' : 'Privacy & Confidentiality'}
          </h2>

          <div className="max-h-[60vh] overflow-y-auto text-xs text-[#595A54] space-y-4 pr-2 font-light leading-relaxed">
            {type === 'terms' ? (
              <>
                <p>
                  <strong>Appointments:</strong> All reservation requests submitted via our website are subject to verification based on therapist availability. An appointment is officially scheduled once verified by our reception at {BUSINESS_INFO.name}.
                </p>
                <p>
                  <strong>Health Information:</strong> Our services are intended for relaxation and general wellbeing. Please notify therapists of any health conditions prior to treatment.
                </p>
                <p>
                  <strong>Cancellations:</strong> If you must adjust or cancel your appointment, please contact us at least 3 hours prior.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Privacy:</strong> We collect contact details strictly to process appointment requests. We do not sell or share your information with external commercial entities.
                </p>
                <p>
                  <strong>Inquiries:</strong> If you wish to update your records, please contact our front desk at {BUSINESS_INFO.name}, Thane.
                </p>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-[#E9DDCC] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-xs tracking-wider uppercase text-white bg-[#263D32] hover:bg-[#1B2B23] rounded-xs cursor-pointer border border-[#263D32]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
