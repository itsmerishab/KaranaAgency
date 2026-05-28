import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[10000] bg-cosmic-black flex flex-col items-center justify-center"
    >
      <div className="relative w-32 h-32 mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-cosmic-gold/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border-2 border-cosmic-gold/50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-cosmic-gold rounded-full flex items-center justify-center text-cosmic-black font-black text-3xl">
            K
          </div>
        </div>
      </div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-cosmic-gold"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 text-white/30 font-montserrat uppercase tracking-widest text-xs"
      >
        Initializing Cosmic Systems... {progress}%
      </motion.div>
    </motion.div>
  );
}
