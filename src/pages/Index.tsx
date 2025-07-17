import { HeroSection } from '../components/HeroSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { ServicesSection } from '../components/ServicesSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { LeadForm } from '../components/LeadForm';
import { Toaster } from '../components/ui/toaster';

export default function Index() {
  return (
    <main className="min-h-screen bg-uniform">
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <SocialProofSection />
      
      {/* Seção do formulário de captura de leads */}
      <section id="lead-capture" className="section-modern bg-uniform relative">
        {/* Efeitos de blur vermelho decorativos */}
        <div className="red-blur-1 top-32 left-16"></div>
        <div className="red-blur-2 bottom-24 right-20"></div>
        <div className="red-blur-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <LeadForm />
        </div>
      </section>
      
      <FinalCTASection />
      <Toaster />
    </main>
  );
}
