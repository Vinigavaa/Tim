import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';

export function HeroSection() {
  const handleStartNow = createWhatsAppHandler(WHATSAPP_MESSAGES.START_NOW);
  const handleLearnMore = () => {
    window.open('https://www.instagram.com/py_assessoria?igsh=MTcyenk1cDVtMGM1bg==', '_blank');
  };

  return (
    <section 
      id="hero" 
      className="min-h-[75vh] md:min-h-screen bg-white flex items-center justify-center relative overflow-hidden py-8 md:py-0 mb-[-10vh] mt-[10vh]"  
    >
      {/* Efeito de blur azul curvado principal */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blur principal - curvado diagonal com cores personalizadas */}
        <div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 rotate-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 71, 148, 0.25) 0%, rgba(0, 71, 148, 0.15) 50%, rgba(235, 2, 45, 0.1) 100%)',
            clipPath: 'ellipse(70% 50% at 50% 50%)',
          }}
        />
        
        {/* Blur secundário - menor e mais sutil */}
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[300px] rounded-full blur-2xl transform rotate-45"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 71, 148, 0.15) 0%, rgba(235, 2, 45, 0.08) 100%)',
            clipPath: 'ellipse(60% 40% at 30% 70%)',
          }}
        />
        
        {/* Blur terciário - para dar profundidade */}
        <div 
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[200px] rounded-full blur-2xl transform -rotate-12"
          style={{
            background: 'linear-gradient(225deg, rgba(0, 71, 148, 0.12) 0%, rgba(235, 2, 45, 0.05) 100%)',
            clipPath: 'ellipse(80% 30% at 70% 30%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Conteúdo alinhado à esquerda */}
          <div className="max-w-2xl space-y-4 md:space-y-6 text-left">
          
          {/* Badge - com cores personalizadas */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: 'rgba(235, 2, 45, 0.1)',
              border: '1px solid rgba(235, 2, 45, 0.2)',
              color: '#eb022d'
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#eb022d' }}
            ></div>
            8 anos de atendimento
          </div>
          
          {/* Main title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] md:leading-tight text-gray-900">
            TIM <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(135deg, #004794 0%, #eb022d 50%, #004794 100%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            > Santa Luzia</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-xl leading-relaxed">
            Há oito anos conectando as pessoas com bom atendimento e qualidade nos produtos.
          </p>
          
          {/* CTA Buttons - com cores personalizadas */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <Button 
              size="lg"
              onClick={handleStartNow}
              className="text-white h-12 md:h-11 px-8 md:px-6 text-lg md:text-base font-semibold w-full sm:w-auto shadow-lg"
              style={{
                backgroundColor: '#004794',
                boxShadow: '0 10px 25px rgba(0, 71, 148, 0.25)'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#003366'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#004794'}
              aria-label="Começar projeto via WhatsApp"
            >
              Começar agora
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={handleLearnMore}
              className="h-12 md:h-11 px-8 md:px-6 text-lg md:text-base font-semibold w-full sm:w-auto"
              style={{
                borderColor: 'rgba(235, 2, 45, 0.3)',
                color: '#eb022d'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(235, 2, 45, 0.05)';
                (e.target as HTMLElement).style.borderColor = 'rgba(235, 2, 45, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.borderColor = 'rgba(235, 2, 45, 0.3)';
              }}
              aria-label="Saber mais via Instagram"
            >
              <Play size={16} className="mr-2" />
              Saiba mais
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 text-gray-500 text-sm pt-4 md:pt-4">
            <div className="flex items-center gap-2">
              <div 
                className="w-1 h-1 rounded-full mr-1"
                style={{ backgroundColor: '#eb022d' }}
              ></div>
              <span>4.9/5 avaliação média</span>
            </div>
          </div>
          
        </div>
        
        {/* Imagem do celular */}
        <div className="hidden lg:flex items-center justify-center">
          <img 
            src="/celular.png" 
            alt="Celular mostrando aplicativo de marketing digital" 
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
        
      </div>
      </div>
    </section>
  );
}