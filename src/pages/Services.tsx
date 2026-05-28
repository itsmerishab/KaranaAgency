
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { CosmicCard } from '../components/cosmic/CosmicCard';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  const categories = Array.from(new Set(services.map(s => s.category)));

  return (
    <div className="relative z-10 min-h-screen px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black font-montserrat text-white mb-8 tracking-tight"
        >
          OUR <span className="text-cosmic-gold">EXPERTISE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg max-w-2xl mx-auto font-montserrat"
        >
          A multidisciplinary approach to engineering, blending physical precision with digital intelligence.
        </motion.p>
      </div>

      <div className="space-y-32">
        {categories.map((category, catIdx) => (
          <div key={category} className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="flex items-center gap-6"
            >
              <h2 className="text-3xl font-black text-white font-montserrat uppercase tracking-widest">
                {category}
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-cosmic-gold/50 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(s => s.category === category).map((service) => {
                const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.Box) as React.ComponentType<{ size: number }>;
                return (
                  <CosmicCard key={service.id} className="group flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-cosmic-gold/10 rounded-lg flex items-center justify-center text-cosmic-gold group-hover:bg-cosmic-gold group-hover:text-cosmic-black transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-montserrat">
                        {service.name}
                      </h3>
                      <p className="text-white/60 text-sm font-montserrat leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-cosmic-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all pt-6"
                    >
                      Learn More <span className="text-lg">→</span>
                    </Link>
                  </CosmicCard>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
