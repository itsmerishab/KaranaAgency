
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { CosmicImage } from '../cosmic/CosmicImage';

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <CosmicImage
          src={project.heroImage}
          alt={project.title}
          title={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black via-cosmic-black/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.services.map(sId => (
                <span key={sId} className="text-cosmic-gold text-[10px] font-black uppercase tracking-widest bg-cosmic-gold/20 px-3 py-1 rounded-full border border-cosmic-gold/30">
                  {sId.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-7xl font-black font-montserrat text-white tracking-tighter mb-4">
              {project.title}
            </h1>
            {project.client && (
              <p className="text-white/60 text-lg font-montserrat">
                Client: <span className="text-white">{project.client}</span>
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

