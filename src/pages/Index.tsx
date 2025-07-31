import { HeroSection } from '../components/HeroSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { ServicesSection } from '../components/ServicesSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Toaster } from '../components/ui/toaster';
import { LocationsSection } from '../components/LocationCard';

export default function Index() {
  return (
    <main className="min-h-screen bg-uniform">
      <HeroSection />
      <LocationsSection/>
      <ServicesSection />
      <DifferentialsSection />
      <SocialProofSection />
      <FinalCTASection />
      <Toaster />
    </main>
  );
}
