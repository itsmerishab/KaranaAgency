
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectHero } from '../components/works-detail/ProjectHero';
import { ProjectContent } from '../components/works-detail/ProjectContent';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="text-white text-center py-20 font-montserrat">Project not found</div>;

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="relative z-10">
      <ProjectHero project={project} />

      <ProjectContent project={project} />

      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link
            to={`/works/${prevProject.slug}`}
            className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300"
          >
            <ChevronLeft className="text-cosmic-gold group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">Previous Project</span>
              <span className="text-white font-bold font-montserrat">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            to={`/works/${nextProject.slug}`}
            className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300 text-right"
          >
            <div className="text-right">
              <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">Next Project</span>
              <span className="text-white font-bold font-montserrat">{nextProject.title}</span>
            </div>
            <ChevronRight className="text-cosmic-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-cosmic-gold to-cosmic-gold-light text-cosmic-black">
          <h2 className="text-3xl md:text-5xl font-black font-montserrat mb-8 tracking-tight">
            START YOUR NEXT <br />
            MASTERPIECE
          </h2>
          <Link
            to="/contact"
            className="px-10 py-5 bg-cosmic-black text-white font-bold rounded-full inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Request a Consultation
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
