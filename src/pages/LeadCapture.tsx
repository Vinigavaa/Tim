import { LeadForm } from '../components/LeadForm';
import { Toaster } from '../components/ui/toaster';

export function LeadCapture() {
  return (
    <div className="min-h-screen bg-uniform flex items-center justify-center p-4">
      {/* Efeitos de blur vermelho decorativos */}
      <div className="red-blur-1 top-20 left-20"></div>
      <div className="red-blur-2 bottom-20 right-20"></div>
      <div className="red-blur-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <LeadForm />
        <Toaster />
      </div>
    </div>
  );
} 