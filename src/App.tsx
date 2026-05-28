import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/animation/LoadingScreen';
import { SmoothScroll } from './components/animation/SmoothScroll';
import { PageTransition } from './components/animation/PageTransition';
import { CosmicCursor } from './components/animation/CosmicCursor';
import { CosmicScene } from './components/cosmic/CosmicScene';
import ScrollToTop from './components/utils/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages for optimal bundle splitting and speed
const Home = lazy(() => import('./pages/Home'));
const BuyProducts = lazy(() => import('./pages/BuyProducts'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple elegant loading indicator inside suspense fallback
const RouteLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-cosmic-gold/20 border-t-cosmic-gold rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />
      <SmoothScroll />
      <CosmicCursor />
      <CosmicScene>
        {/* Hero elements can be passed here or handled per page */}
      </CosmicScene>

      <Navbar />

      <main className="relative z-10">
        <PageTransition>
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<BuyProducts />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/works" element={<BuyProducts />} />
              <Route path="/works/:slug" element={<ProjectPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}

