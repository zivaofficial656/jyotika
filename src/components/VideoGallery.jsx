import { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Film } from 'lucide-react';
import { SPA_VIDEOS, VIDEO_CATEGORIES } from '../data/videos';
import VideoCard from './VideoCard';

export default function VideoGallery({ title = "Atmosphere & Therapy Films", subtitle = "Explore our treatment rituals, tranquil suites, and peaceful ambience in motion." }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const modalVideoRef = useRef(null);

  const filteredVideos =
    activeCategory === 'all'
      ? SPA_VIDEOS
      : SPA_VIDEOS.filter((v) => v.category === activeCategory);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideoModal(null);
      }
    };
    if (activeVideoModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideoModal]);

  return (
    <section id="video-gallery" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Film className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Cinematic Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            {title}
          </h2>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />

          <p className="text-sm sm:text-base text-[#5A4E46] font-light leading-relaxed pt-1">
            {subtitle}
          </p>
        </div>

        {/* Video Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14" role="tablist">
          {VIDEO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-all border rounded-full cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#40352E] text-white border-[#40352E] shadow-sm'
                  : 'bg-white text-[#5A4E46] border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelectVideo={(v) => setActiveVideoModal(v)}
            />
          ))}
        </div>

      </div>

      {/* Accessible Cinema Video Player Modal */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideoModal.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#1E1A18] rounded-sm overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#2A2421] border-b border-white/10 text-white">
              <div className="flex items-center space-x-2 truncate pr-4">
                <Sparkles className="w-4 h-4 text-[#E0A890] shrink-0" />
                <h4 className="font-serif text-base sm:text-lg truncate font-normal">
                  {activeVideoModal.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close video player"
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={modalVideoRef}
                src={activeVideoModal.src}
                poster={activeVideoModal.poster}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Description Footer */}
            <div className="p-4 sm:p-6 text-white space-y-2">
              <div className="flex items-center space-x-3 text-xs text-[#E8DFD1]/70 font-mono">
                <span className="uppercase tracking-widest text-[#E0A890]">
                  Category: {activeVideoModal.category}
                </span>
                <span>•</span>
                <span>Length: {activeVideoModal.duration}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E8DFD1]/90 font-light leading-relaxed">
                {activeVideoModal.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
