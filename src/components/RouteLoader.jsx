import JyotikaLogo from './JyotikaLogo';

export default function RouteLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 px-4 bg-[#FAF9F6]"
    >
      <div className="relative flex items-center justify-center animate-pulse">
        <JyotikaLogo variant="symbol" size="md" />
      </div>
      <div className="flex items-center space-x-2 text-[#5D6241] text-xs uppercase tracking-[0.2em] font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B77A60] animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-[#B77A60] animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-[#B77A60] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="sr-only">Loading page content...</span>
    </div>
  );
}
