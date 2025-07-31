import { Smartphone, Shield, Wrench, Clock, Users, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';

export function DifferentialsSection() {
  const handleRepairClick = createWhatsAppHandler(WHATSAPP_MESSAGES.REPAIR);

  const differentials = [
    {
      icon: <Wrench size={24} />,
      title: "Quebrou a tela? A gente conserta!",
      description: "Assistência técnica especializada com diagnóstico gratuito e peças originais. Seu celular fica novo em folha."
    },
    {
      icon: <Clock size={24} />,
      title: "Rapidez no atendimento",
      description: "Reparos expressos para não ficar sem seu celular. A maioria dos consertos feitos no mesmo dia."
    },
    {
      icon: <Shield size={24} />,
      title: "Garantia em todos os serviços",
      description: "Garantia de 90 dias em todos os reparos. Trabalhamos apenas com peças de qualidade e mão de obra especializada."
    },
    {
      icon: <Heart size={24} />,
      title: "8 anos cuidando de você",
      description: "Experiência e confiança que só quem está no mercado há anos pode oferecer. Sua satisfação é nossa prioridade."
    }
  ];

  return (
    <section 
      id="differentials" 
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Efeitos de blur decorativos sutis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: '#004794' }}
        />
        <div 
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#eb022d' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo principal */}
          <div className="space-y-8">
            <div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: '#004794' }}
              >
                Precisou? Vem pra TIM!
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Problemas com seu celular? Nas Lojas TIM você encontra a solução 
                completa com qualidade, rapidez e garantia.
              </p>
            </div>
            
            <div className="space-y-6">
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg shrink-0"
                    style={{ 
                      backgroundColor: 'rgba(235, 2, 45, 0.1)',
                      color: '#eb022d'
                    }}
                  >
                    {differential.icon}
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-semibold mb-2"
                      style={{ color: '#004794' }}
                    >
                      {differential.title}
                    </h3>
                    <p className="text-gray-600">
                      {differential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleRepairClick}
                className="font-semibold h-12 px-8 text-lg shadow-lg"
                style={{
                  backgroundColor: '#eb022d',
                  color: 'white'
                }}
                aria-label="Solicitar reparo via WhatsApp"
              >
                🔧 Solicitar Reparo
              </Button>
              
              <button
                onClick={() => window.open('tel:+5548998438888', '_self')}
                className="font-semibold h-12 px-8 text-lg rounded-md border-2"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#004794',
                  color: '#004794'
                }}
                aria-label="Ligar para as Lojas TIM"
              >
                📞 Ligar Agora
              </button>
            </div>
          </div>

          {/* Imagem estática da loja */}
          <div className="relative">
            <div 
              className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
              aria-label="Interior da loja TIM"
            >
              <img 
                src="/loja1.png"
                alt="Interior da loja TIM"
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Overlay sutil */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0, 71, 148, 0.1) 0%, rgba(235, 2, 45, 0.05) 100%)' 
                }}
              />
            </div>
            
            {/* Texto sobre a loja */}
            <div className="text-center mt-6">
              <h4 
                className="text-xl font-bold mb-2"
                style={{ color: '#004794' }}
              >
                Conheça nossas lojas
              </h4>
              <p className="text-gray-600">
                Ambiente moderno e acolhedor com profissionais especializados 
                prontos para atender você da melhor forma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}