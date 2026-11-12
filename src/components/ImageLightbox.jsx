import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ item, items, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo view"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all cursor-pointer z-20"
        aria-label="Close enlarged view"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next navigation buttons */}
      {items && items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => onNavigate(-1)}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all cursor-pointer z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate(1)}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all cursor-pointer z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={item.image}
          alt={item.alt || item.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xs border border-white/10 shadow-2xl"
        />
        <div className="mt-4 text-center text-white">
          <p className="font-serif text-xl sm:text-2xl font-normal tracking-wide">{item.title}</p>
          <p className="text-xs text-[#E8DFD1] uppercase tracking-[0.2em] mt-1 font-light">
            Jyotika Spa Thane Sanctuary
          </p>
        </div>
      </div>
    </div>
  );
}
