import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Precision', value: '0.001', suffix: 'mm', icon: Cpu, detail: 'High-fidelity manufacturing' },
  { label: 'Global Reach', value: '40', suffix: '+ Countries', icon: Globe, detail: 'International project delivery' },
  { label: 'Compute Power', value: '10', suffix: ' Petaflops', icon: Zap, detail: 'Advanced simulation capacity' },
  { label: 'IP Portfolio', value: '200', suffix: '+ Patents', icon: Layers, detail: 'Proprietary tech innovation' },
];

export const Capabilities = () => {
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    statsRefs.current.forEach((ref, idx) => {
      if (!ref) return;

      const targetValue = parseFloat(stats[idx].value);

      gsap.fromTo(
        ref,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          snap: { innerText: 0.001 },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 85%',
            toggleActions: 'play once none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-24 bg-cosmic-purple-deep/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-cosmic-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-cosmic-gold" size={32} />
              </div>
              <h3 className="text-4xl font-black text-white mb-2 font-montserrat">
                <span ref={(el) => { if (el) statsRefs.current[idx] = el; }}>{stat.value}</span>
                <span className="text-cosmic-gold">{stat.suffix}</span>
              </h3>
              <p className="text-cosmic-gold font-bold uppercase tracking-widest text-xs mb-2 font-montserrat">
                {stat.label}
              </p>
              <p className="text-white/40 text-sm font-montserrat px-4">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
