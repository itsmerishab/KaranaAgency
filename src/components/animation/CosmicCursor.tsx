import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CosmicCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rafId = useRef<number>(0);
  const pending = useRef<{ x: number; y: number } | null>(null);

  // Stiffer spring = snappier, less frame-by-frame calculation
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Store latest position
      pending.current = { x: e.clientX, y: e.clientY };

      // Throttle via rAF — only apply once per frame
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        if (pending.current) {
          cursorX.set(pending.current.x);
          cursorY.set(pending.current.y);
          pending.current = null;
        }
        rafId.current = 0;
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full bg-cosmic-gold pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Single subtle ring instead of ping+blur (was 2 elements) */}
      <div className="absolute inset-[-4px] rounded-full border border-cosmic-gold/40" />
    </motion.div>
  );
};
