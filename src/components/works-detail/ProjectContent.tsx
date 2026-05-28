
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { CosmicImage } from '../cosmic/CosmicImage';

interface ProjectContentProps {
  project: Project;
}

export const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto space-y-32">
      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-cosmic-gold font-montserrat uppercase tracking-widest">
            THE CHALLENGE
          </h3>
          <p className="text-white/70 text-lg font-montserrat leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black text-cosmic-gold font-montserrat uppercase tracking-widest">
            THE SOLUTION
          </h3>
          <p className="text-white/70 text-lg font-montserrat leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-12">
        <h3 className="text-3xl font-black text-white font-montserrat text-center uppercase tracking-widest">
          VISUAL EVIDENCE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <CosmicImage
                src={img.url}
                alt={img.alt}
                title={`${project.title} - ${img.alt}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-12 text-center">
        <h3 className="text-3xl font-black text-white font-montserrat uppercase tracking-widest">
          IMPACT & RESULTS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {project.metrics?.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-cosmic-gold/20 hover:border-cosmic-gold/50 transition-all duration-300"
            >
              <span className="text-4xl font-black text-cosmic-gold block mb-2 font-montserrat">
                {metric.value}
              </span>
              <span className="text-white/50 text-xs uppercase tracking-widest font-bold">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-white/60 text-lg max-w-3xl mx-auto font-montserrat italic leading-relaxed">
          "{project.results}"
        </p>
      </div>
    </div>
  );
}

