import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Calendar, Maximize } from 'lucide-react';
import { HERO_VIDEO } from '../data/videos';

export default function SpaVideoSection({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Attempt graceful muted autoplay
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  return (
    <section
      aria-label="Spa Atmosphere Film"
      className="relative w-full overflow-hidden bg-[#241F1C] text-white py-20 sm:py-28 lg:py-36 my-0 border-y border-[#E8DFD1]/20"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={HERO_VIDEO.src}
          poster={HERO_VIDEO.poster}
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-40' : 'opacity-25'
          }`}
          aria-hidden="true"
        />

        {/* Elegant Luxury Gradients & Warm Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241F1C] via-[#241F1C]/40 to-[#241F1C]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#241F1C]/30 to-[#241F1C]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#E8DFD1] font-medium shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E0A890]" />
          <span>Atmosphere In Motion</span>
        </div>

        {/* Primary Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.15]">
          {HERO_VIDEO.heading}
        </h2>

        {/* Terracotta separator line */}
        <div className="w-20 h-0.5 bg-[#B77A60] mx-auto rounded-full" />

        {/* Supporting description */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#E8DFD1]/90 font-light leading-relaxed">
          {HERO_VIDEO.subheading}
        </p>

        {/* Call to action & Interactive Playback Controls */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {onOpenBooking && (
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm tracking-[0.18em] uppercase font-medium text-[#241F1C] bg-[#FAF9F6] hover:bg-[#E8DFD1] transition-all duration-300 rounded-xs shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2 text-[#B77A60]" />
              Reserve Your Suite
            </button>
          )}

          {/* Minimalist Floating Video Controls */}
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/15">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause atmosphere film' : 'Play atmosphere film'}
              className="p-2 text-white hover:text-[#E0A890] transition-colors rounded-full focus:outline-none cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <div className="w-[1px] h-4 bg-white/20" />

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              className="p-2 text-white hover:text-[#E0A890] transition-colors rounded-full focus:outline-none cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <div className="w-[1px] h-4 bg-white/20" />

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Expand video fullscreen"
              className="p-2 text-white hover:text-[#E0A890] transition-colors rounded-full focus:outline-none cursor-pointer"
              title="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Verified Location Subtext */}
        <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#E8DFD1]/60 font-light pt-2">
          {HERO_VIDEO.caption}
        </p>

      </div>
    </section>
  );
}
