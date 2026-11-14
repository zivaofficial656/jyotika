import { Play, Clock, Sparkles } from 'lucide-react';

export default function VideoCard({ video, onSelectVideo }) {
  return (
    <article
      onClick={() => onSelectVideo(video)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectVideo(video);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Play film: ${video.title}`}
      className="group flex flex-col bg-white border border-[#E8DFD1] rounded-sm overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B77A60]"
    >
      {/* Video Poster Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#241F1C]">
        <img
          src={video.poster}
          alt={video.alt || video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width="480"
          height="270"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 group-hover:from-black/80 transition-colors" />

        {/* Play Icon Badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/90 group-hover:bg-[#B77A60] text-[#40352E] group-hover:text-white flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Top Badges: Category & Duration */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-[10px] tracking-widest uppercase text-white rounded-xs border border-white/20 font-medium">
            <Sparkles className="w-3 h-3 text-[#E0A890]" />
            <span>{video.category}</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[11px] text-white rounded-xs font-mono">
            <Clock className="w-3 h-3 text-[#E8DFD1]" />
            <span>{video.duration}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div className="space-y-2">
          <h3 className="font-serif text-lg sm:text-xl text-[#40352E] font-normal group-hover:text-[#B77A60] transition-colors leading-snug">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#5A4E46] font-light leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-[#B77A60] font-medium tracking-wider uppercase border-t border-[#E8DFD1]/60">
          <span className="group-hover:translate-x-1 transition-transform inline-flex items-center">
            Watch Experience &rarr;
          </span>
          <span className="text-[11px] text-[#5D6241] font-normal lowercase tracking-normal">
            high definition
          </span>
        </div>
      </div>
    </article>
  );
}
