
import { motion } from 'framer-motion';
import type { Service } from '../../data/services';
import { CheckCircle2 } from 'lucide-react';

interface ServiceDetailsProps {
  service: Service;
}

export const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* What We Deliver */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white font-montserrat mb-8 tracking-tight">
              WHAT WE <span className="text-cosmic-gold">DELIVER</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {service.offerings.map((offering, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300"
                >
                  <CheckCircle2 className="text-cosmic-gold shrink-0" size={20} />
                  <span className="text-white/80 font-montserrat">{offering}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white font-montserrat mb-8 tracking-tight">
              OUR <span className="text-cosmic-gold">PROCESS</span>
            </h2>
            <div className="space-y-8">
              {service.process.map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-cosmic-gold/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cosmic-gold rounded-full" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                    {step.phase}
                  </h4>
                  <p className="text-white/60 text-sm font-montserrat">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white font-montserrat mb-8 tracking-tight">
              TECH <span className="text-cosmic-gold">STACK</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {service.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center text-center group hover:border-cosmic-gold/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                    <span className="text-white/50 text-xs font-bold">
                      {tech.name.split(/[\s/-]+/).map(n => n[0]).join('').substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-white/80 text-xs font-montserrat">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
