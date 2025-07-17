import { Button } from './ui/button';
import { CheckCircle, Clock, Star, Users } from 'lucide-react';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';

export function FinalCTASection() {
  const handleConsultationClick = createWhatsAppHandler(WHATSAPP_MESSAGES.CONSULTATION);

  const benefits = [
    {
      icon: <CheckCircle size={16} />,
      text: "Consultoria gratuita personalizada"
    },
    {
      icon: <Clock size={16} />,
      text: "Resposta em até 2 horas"
    },
    {
      icon: <Star size={16} />,
      text: "Estratégia sob medida"
    },
    {
      icon: <Users size={16} />,
      text: "Equipe especializada"
    }
  ];

  return (
    <section id="contact" className="section-modern bg-uniform relative">
      {/* Efeitos de blur vermelho decorativos */}
      <div className="red-blur-2 top-20 left-20"></div>
      <div className="red-blur-1 bottom-32 right-12"></div>
      <div className="red-blur-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Pronto para começar?
          </div>
          
          {/* Main content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Transforme seu negócio hoje mesmo
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Fale conosco agora e descubra como podemos acelerar o crescimento do seu negócio 
            com estratégias de marketing digital que realmente funcionam.
          </p>
          
          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="text-red-500 shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-gray-300 text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={handleConsultationClick}
            className="bg-red-600 hover:bg-red-700 text-white h-12 md:h-11 px-8 md:px-6 text-lg md:text-base font-semibold"
            size="lg"
            aria-label="Agendar consultoria gratuita via WhatsApp"
          >
            Agendar Consultoria Gratuita
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>100% personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Resultados garantidos</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
