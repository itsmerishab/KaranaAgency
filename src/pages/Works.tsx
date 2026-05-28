import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { ProjectCard } from '../components/works/ProjectCard';

export default function Works() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...services.map(s => s.name)];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesFilter = filter === 'All' || p.services.some(sId => {
        const service = services.find(srv => srv.id === sId);
        return service?.name === filter;
      });
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                            p.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="relative z-10 min-h-screen px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black font-montserrat text-white mb-8 tracking-tight"
        >
          CRAFTED <span className="text-cosmic-gold">EXCELLENCE</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all placeholder:text-white/30"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? 'bg-cosmic-gold text-cosmic-black'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-white/30 font-montserrat">
          No projects found matching your criteria.
        </div>
      )}
    </div>
  );
}
