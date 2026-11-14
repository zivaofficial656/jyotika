import { useState } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { SPA_VIDEOS, VIDEO_CATEGORIES } from '../data/videos';
import ImageLightbox from '../components/ImageLightbox';
import VideoCard from '../components/VideoCard';
import { Sparkles, Maximize2, ShieldCheck, Wind, VolumeX, Sparkle, Film, Camera, X } from 'lucide-react';

export default function GalleryPage() {
  const [mediaType, setMediaType] = useState('photos'); // 'photos' | 'videos'
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVideoCategory, setActiveVideoCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const filteredVideos =
    activeVideoCategory === 'all'
      ? SPA_VIDEOS
      : SPA_VIDEOS.filter((v) => v.category === activeVideoCategory);

  const handleNavigateLightbox = (direction) => {
    if (!lightboxItem || !filteredPhotos.length) return;
    const currentIndex = filteredPhotos.findIndex((i) => i.id === lightboxItem.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredPhotos.length - 1;
    if (nextIndex >= filteredPhotos.length) nextIndex = 0;
    setLightboxItem(filteredPhotos[nextIndex]);
  };

  const suiteStandards = [
    {
      icon: VolumeX,
      title: "Sound-Dampened Walls",
      desc: "Engineered acoustic attenuation ensures complete quietude away from street disturbance."
    },
    {
      icon: Wind,
      title: "Individual Climate & Air Filtration",
      desc: "HEPA air filtration and custom suite thermostat control for supreme breathing comfort."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Sanitization",
      desc: "Complete linen renewal, UV sanitation of surfaces, and fresh organic cotton attire per guest."
    },
    {
      icon: Sparkle,
      title: "Soothing Warm Lighting",
      desc: "Indirect amber LED and candlelit undertones promote deep natural parasympathetic release."
    }
  ];

  return (
    <main className="flex-grow pt-24 sm:pt-28 pb-20 bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-[#F1EADF] border-b border-[#E8DFD1] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-[11px] tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Visual Exploration</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#40352E] font-normal tracking-tight">
            Sanctuary Visual Gallery | <span className="italic font-light text-[#B77A60]">Jyotika Spa Thane</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto rounded-full" />
          
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#595048] font-light leading-relaxed">
            Take a visual tour through our private single and couple suites, soothing lounge, authentic therapy setups, and sensory botanical details at Ashar Tiara Complex in Thane.
          </p>

          {/* Media Format Switcher: Photography vs Films */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 bg-white border border-[#E8DFD1] rounded-full shadow-xs">
              <button
                type="button"
                onClick={() => setMediaType('photos')}
                className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                  mediaType === 'photos'
                    ? 'bg-[#40352E] text-white shadow-xs'
                    : 'text-[#595048] hover:text-[#40352E]'
                }`}
              >
                <Camera className="w-3.5 h-3.5 text-[#B77A60]" />
                <span>Photo Sanctuary ({GALLERY_ITEMS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setMediaType('videos')}
                className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                  mediaType === 'videos'
                    ? 'bg-[#40352E] text-white shadow-xs'
                    : 'text-[#595048] hover:text-[#40352E]'
                }`}
              >
                <Film className="w-3.5 h-3.5 text-[#B77A60]" />
                <span>Cinema & Videos ({SPA_VIDEOS.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* ===================== VIEW A: PHOTO SANCTUARY ===================== */}
        {mediaType === 'photos' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-all border rounded-full cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#B77A60] text-white border-[#B77A60] shadow-sm'
                      : 'bg-white text-[#595048] border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Dynamic Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPhotos.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo: ${item.title}`}
                  onClick={() => setLightboxItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxItem(item);
                    }
                  }}
                  className="group relative aspect-[4/3] bg-white border border-[#E8DFD1] overflow-hidden cursor-pointer rounded-sm shadow-2xs hover:shadow-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#B77A60]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="360"
                  />
                  
                  {/* Boutique Hover Overlay */}
                  <div className="absolute inset-0 bg-[#40352E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                    <div className="flex justify-end">
                      <span className="p-2.5 bg-white/20 backdrop-blur-xs rounded-full border border-white/30 text-[#E8DFD1]">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-lg sm:text-xl font-normal leading-snug">{item.title}</p>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-[#E8DFD1] mt-1 font-light">
                        Jyotika Spa • Thane, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== VIEW B: CINEMA & VIDEO FILMS ===================== */}
        {mediaType === 'videos' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist">
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeVideoCategory === cat.id}
                  onClick={() => setActiveVideoCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-all border rounded-full cursor-pointer ${
                    activeVideoCategory === cat.id
                      ? 'bg-[#B77A60] text-white border-[#B77A60] shadow-sm'
                      : 'bg-white text-[#595048] border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Video Cards Grid */}
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
        )}

        {/* Facility Architectural Standards Section */}
        <div className="bg-white border border-[#E8DFD1] p-6 sm:p-12 md:p-14 rounded-sm shadow-2xs space-y-8 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B77A60] font-semibold">Suite Specifications</span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#40352E] font-normal">Our Sanctuary Specifications</h2>
            <p className="text-xs sm:text-sm text-[#595048] font-light">Engineered for absolute relaxation, privacy, and clinical hygiene in Thane.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {suiteStandards.map((std, i) => {
              const Icon = std.icon;
              return (
                <div key={i} className="p-6 bg-[#FAF9F6] border border-[#E8DFD1] rounded-xs space-y-3">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#E8DFD1] flex items-center justify-center text-[#B77A60]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-[#40352E] font-normal">{std.title}</h4>
                  <p className="text-xs text-[#595048] font-light leading-relaxed">{std.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photos */}
      <ImageLightbox
        item={lightboxItem}
        items={filteredPhotos}
        onClose={() => setLightboxItem(null)}
        onNavigate={handleNavigateLightbox}
      />

      {/* Cinema Player Modal for Videos */}
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

            <div className="relative aspect-video w-full bg-black">
              <video
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
    </main>
  );
}
