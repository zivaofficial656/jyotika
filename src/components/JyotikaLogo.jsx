import elegantLogo from '../assets/images/elegant-jyotika-spa-logo.webp';

export default function JyotikaLogo({
  variant = 'default', // 'default' | 'light' | 'symbol'
  className = '',
  size = 'md' // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12 md:h-13',
    lg: 'h-14 sm:h-16 md:h-18',
    xl: 'h-20 sm:h-24'
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={elegantLogo}
        alt="Jyotika Spa - Contemporary Boutique Wellness Sanctuary Thane"
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          isLight ? 'brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]' : 'drop-shadow-xs'
        }`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
