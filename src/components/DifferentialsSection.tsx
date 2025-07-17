import { Smartphone, Shield, Wrench, Clock, Users, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';
import { useState, useEffect } from 'react';

export function DifferentialsSection() {
  const handleRepairClick = createWhatsAppHandler(WHATSAPP_MESSAGES.REPAIR);
  const [currentImage, setCurrentImage] = useState(0);

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

  const images = [
    { src: '/loja1.png', alt: 'Interior da loja TIM Santa Luzia' },
    { src: '/loja2.png', alt: 'Área de atendimento TIM Santa Luzia' },
    { src: '/loja3.png', alt: 'Bancada de assistência técnica TIM Santa Luzia' }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

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
                Problemas com seu celular? Na TIM Santa Luzia você encontra a solução 
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
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#c7021f'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#eb022d'}
                aria-label="Solicitar reparo via WhatsApp"
              >
                🔧 Solicitar Reparo
              </Button>
              
              <button
                onClick={() => window.open('tel:+5548998438888', '_self')}
                className="font-semibold h-12 px-8 text-lg rounded-md transition-all duration-200 border-2"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#004794',
                  color: '#004794'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 71, 148, 0.05)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }}
                aria-label="Ligar para a TIM Santa Luzia"
              >
                📞 Ligar Agora
              </button>
            </div>
          </div>

          {/* Carrossel de imagens da loja */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay sutil */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(0, 71, 148, 0.1) 0%, rgba(235, 2, 45, 0.05) 100%)' 
                    }}
                  />
                </div>
              ))}
              
              {/* Indicadores do carrossel */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? 'scale-125' 
                        : 'scale-100 opacity-50'
                    }`}
                    style={{ 
                      backgroundColor: currentImage === index ? '#eb022d' : '#ffffff' 
                    }}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Texto sobre a loja */}
            <div className="text-center mt-6">
              <h4 
                className="text-xl font-bold mb-2"
                style={{ color: '#004794' }}
              >
                Conheça nossa loja
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