
import { motion } from 'framer-motion';
import type { Service } from '../../data/services';
import { HeroElement } from '../cosmic/HeroElement';

interface ServiceHeroProps {
  service: Service;
}

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0 opacity-50">
        <HeroElement />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cosmic-gold text-xs font-black uppercase tracking-widest mb-4 block">
            {service.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-montserrat text-white mb-8 tracking-tight">
            {service.name}
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-montserrat max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
