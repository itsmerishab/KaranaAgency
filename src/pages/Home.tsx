
import { Hero } from '../components/home/Hero';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { Capabilities } from '../components/home/Capabilities';
import { ContactCTA } from '../components/home/ContactCTA';

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <ServicesGrid />
      <Capabilities />
      <ContactCTA />
    </div>
  );
}
