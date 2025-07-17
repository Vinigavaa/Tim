import { HeroSection } from '../components/HeroSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { ServicesSection } from '../components/ServicesSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Toaster } from '../components/ui/toaster';

export default function Index() {
  return (
    <main className="min-h-screen bg-uniform">
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <SocialProofSection />
      <FinalCTASection />
      <Toaster />
    </main>
  );
}
