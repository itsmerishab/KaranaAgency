
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroElement } from '../cosmic/HeroElement';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroElement />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-montserrat text-white leading-tight tracking-tighter mb-8">
            ENGINEERING <br />
            <span className="text-cosmic-gold text-glow-gold">THE FUTURE</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-white/60 text-lg md:text-xl font-montserrat max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Karana is an elite multidisciplinary powerhouse bridging the gap between
          visionary concepts and industrial reality. We engineer the impossible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group px-8 py-4 bg-cosmic-gold text-cosmic-black font-bold rounded-full flex items-center gap-2 hover:bg-cosmic-gold-light transition-all duration-300 hover:shadow-gold-glow"
          >
            Start Your Project
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/works"
            className="px-8 py-4 text-white font-bold rounded-full border border-white/20 hover:border-cosmic-gold/50 hover:text-cosmic-gold transition-all duration-300"
          >
            View Our Works
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
