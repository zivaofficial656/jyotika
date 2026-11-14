import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import ImageLightbox from './ImageLightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS.slice(0, 8)
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory).slice(0, 8);

  const handleNavigateLightbox = (direction) => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    setLightboxItem(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white border border-[#E8DFD1] rounded-full text-xs tracking-[0.25em] uppercase text-[#5D6241] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B77A60]" />
            <span>Visual Sanctuary</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#40352E] tracking-tight">
            Atmosphere & Photography
          </h2>
          
          <div className="w-16 h-0.5 bg-[#B77A60] mx-auto mt-4 rounded-full" />
          
          <p className="text-base text-[#5A4E46] font-light leading-relaxed pt-2">
            A visual glimpse into our private single and couple treatment rooms, soothing welcome lounge, authentic bodywork setups, and sensory botanical details in Thane.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" role="tablist">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[44px] px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-all border rounded-full cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#40352E] text-white border-[#40352E] shadow-sm'
                  : 'bg-white text-[#5A4E46] border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#40352E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Premium Uniform-Sized Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
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
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
                
                {/* Refined Hover Overlay */}
                <div className="absolute inset-0 bg-[#40352E]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <span className="p-2 bg-white/20 backdrop-blur-xs rounded-full border border-white/30 text-[#E8DFD1]">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-normal leading-snug">{item.title}</p>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#E8DFD1] mt-1 opacity-90 font-light">
                      Click to expand
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* View Full Gallery & Cinema Films CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/gallery"
            className="inline-flex items-center px-6 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-[#40352E] bg-white border border-[#E8DFD1] hover:border-[#B77A60] hover:text-[#B77A60] transition-all rounded-xs shadow-2xs group cursor-pointer"
          >
            <span>Explore Complete Visual & Video Gallery</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={lightboxItem}
        items={filteredItems}
        onClose={() => setLightboxItem(null)}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
}
