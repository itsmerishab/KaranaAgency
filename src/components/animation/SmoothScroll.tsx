import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
  useEffect(() => {
    // Skip Lenis on touch devices — saves a rAF loop on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,        // Slightly snappier than 1.2
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};
