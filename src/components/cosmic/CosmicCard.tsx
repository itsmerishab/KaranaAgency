import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CosmicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const CosmicCard = ({ children, className }: CosmicCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'relative group transition-colors duration-500',
        'bg-black/40 border border-cosmic-gold/30 rounded-2xl p-6',
        'hover:border-cosmic-gold/80 hover:shadow-gold-glow backdrop-blur-sm',
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cosmic-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};
