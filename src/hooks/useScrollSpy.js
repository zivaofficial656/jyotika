import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + offset;

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i];
            const element = document.getElementById(id);
            if (element) {
              const top = element.offsetTop;
              if (scrollPosition >= top) {
                setActiveId(id);
                ticking = false;
                return;
              }
            }
          }
          if (window.scrollY < 200) {
            setActiveId(sectionIds[0] || 'home');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
