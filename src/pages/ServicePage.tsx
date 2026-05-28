
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceDetails } from '../components/services/ServiceDetails';
import { ThreeDPrintingForm } from '../components/services/ThreeDPrintingForm';
import { ProjectCard } from '../components/works/ProjectCard';
import { ChevronRight, Printer } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

export default function ServicePage() {
  const { slug } = useParams();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const service = services.find(s => s.slug === slug);

  if (!service) return <div className="text-white text-center py-20 font-montserrat">Service not found</div>;

  const is3DPrinting = service.id === '3d-printing';
  const serviceProjects = projects.filter(p => p.services.includes(service.id));
  const related = services.filter(s => s.id !== service.id && s.category === service.category).slice(0, 3);

  // ─── 3D PRINTING SPECIAL LAYOUT ──────────────────────────────────────────────
  if (is3DPrinting) {
    const offerings3D = [
      'Slicing',
      'FDM Printing',
      'Prototyping Consultation',
      'Post-process & Finishing',
    ];
    const process3D = [
      { phase: 'Model Acquisition', description: 'We accept STL, OBJ, STEP, IGES files. No model? We help you source or design one.' },
      { phase: 'Material Selection', description: 'Choosing the optimal material — PLA+, PETG, or TPU — based on your use-case.' },
      { phase: 'Slicing', description: 'Precision slicing with optimised supports, infill, and layer height for best results.' },
      { phase: 'Printing', description: 'High-quality FDM printing with calibrated, well-maintained machines.' },
      { phase: 'Finishing (Optional)', description: 'Sanding, painting, or coating for a production-ready look and feel.' },
    ];

    return (
      <div className="relative z-10">
        <ServiceHero service={service} />

        {/* TOP SECTION: What We Deliver left + Request Form right */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: What We Deliver */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-white font-montserrat tracking-tight">
                WHAT WE <span className="text-cosmic-gold">DELIVER</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {offerings3D.map((offering, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300"
                  >
                    <CheckCircle2 className="text-cosmic-gold shrink-0 mt-0.5" size={20} />
                    <span className="text-white/80 font-montserrat">{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Order Form */}
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cosmic-gold/10 rounded-full flex items-center justify-center text-cosmic-gold">
                  <Printer size={20} />
                </div>
                <div>
                  <h3 className="text-white font-black font-montserrat text-lg">Request 3D Printing</h3>
                  <p className="text-white/40 text-xs font-montserrat">We respond within 24 hours</p>
                </div>
              </div>
              <ThreeDPrintingForm />
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-black text-white font-montserrat mb-12 tracking-tight">
            OUR <span className="text-cosmic-gold">PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process3D.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-gold/30 transition-all duration-300">
                <span className="text-cosmic-gold font-black text-3xl font-montserrat block mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">{step.phase}</h4>
                <p className="text-white/60 text-sm font-montserrat leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        {related.length > 0 && (
          <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black font-montserrat text-white tracking-tight mb-4">
                RELATED <span className="text-cosmic-gold">SERVICES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300 group text-left"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat group-hover:text-cosmic-gold transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-white/50 text-sm font-montserrat mb-4 line-clamp-2">{rel.description}</p>
                  <div className="flex items-center gap-2 text-cosmic-gold text-xs font-bold uppercase tracking-widest">
                    Explore <ChevronRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // ─── DEFAULT LAYOUT for all other services ───────────────────────────────────
  return (
    <div className="relative z-10">
      <ServiceHero service={service} />

      <ServiceDetails service={service} />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white tracking-tight mb-4">
            PREVIOUS <span className="text-cosmic-gold">WORKS</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-montserrat">
            Real-world applications of {service.name} in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {serviceProjects.length === 0 && (
            <div className="col-span-full text-center py-20 text-white/30 font-montserrat">
              No projects listed for this specific service.
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/works"
            className="text-cosmic-gold font-bold uppercase tracking-widest text-xs hover:underline"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black font-montserrat text-white tracking-tight mb-4">
            RELATED <span className="text-cosmic-gold">SERVICES</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map(rel => (
            <Link
              key={rel.id}
              to={`/services/${rel.slug}`}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300 group text-left"
            >
              <h4 className="text-lg font-bold text-white mb-2 font-montserrat group-hover:text-cosmic-gold transition-colors">
                {rel.name}
              </h4>
              <p className="text-white/50 text-sm font-montserrat mb-4 line-clamp-2">{rel.description}</p>
              <div className="flex items-center gap-2 text-cosmic-gold text-xs font-bold uppercase tracking-widest">
                Explore <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-cosmic-gold to-cosmic-gold-light text-cosmic-black">
          <h2 className="text-3xl md:text-5xl font-black font-montserrat mb-8 tracking-tight">
            READY TO ELEVATE YOUR <br />
            ENGINEERING CAPABILITIES?
          </h2>
          <Link
            to={`/contact?service=${service.slug}`}
            className="px-10 py-5 bg-cosmic-black text-white font-bold rounded-full inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Request This Service
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
