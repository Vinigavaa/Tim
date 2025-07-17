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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 sm:py-24 md:py-0 mt-16 sm:mt-20 md:mt-0"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Efeito de blur azul curvado principal - Otimizado para mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blur principal - responsivo */}
        <div 
          className="absolute top-1/2 left-1/2 w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[800px] lg:h-[400px] rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/2 rotate-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 71, 148, 0.25) 0%, rgba(0, 71, 148, 0.15) 50%, rgba(235, 2, 45, 0.1) 100%)',
            clipPath: 'ellipse(70% 50% at 50% 50%)',
          }}
        />
        
        {/* Blur secundário - responsivo */}
        <div 
          className="absolute top-1/3 right-1/4 w-[200px] h-[150px] sm:w-[350px] sm:h-[200px] lg:w-[500px] lg:h-[300px] rounded-full blur-xl sm:blur-2xl transform rotate-45"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 71, 148, 0.15) 0%, rgba(235, 2, 45, 0.08) 100%)',
            clipPath: 'ellipse(60% 40% at 30% 70%)',
          }}
        />
        
        {/* Blur terciário - responsivo */}
        <div 
          className="absolute bottom-1/4 left-1/4 w-[250px] h-[100px] sm:w-[400px] sm:h-[150px] lg:w-[600px] lg:h-[200px] rounded-full blur-xl sm:blur-2xl transform -rotate-12"
          style={{
            background: 'linear-gradient(225deg, rgba(0, 71, 148, 0.12) 0%, rgba(235, 2, 45, 0.05) 100%)',
            clipPath: 'ellipse(80% 30% at 70% 30%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo alinhado à esquerda - Otimizado para mobile */}
          <div className="w-full space-y-4 sm:space-y-6 text-left order-1 lg:order-1">
          
          {/* Badge - responsivo */}
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
            style={{
              backgroundColor: 'rgba(235, 2, 45, 0.1)',
              border: '1px solid rgba(235, 2, 45, 0.2)',
              color: '#eb022d'
            }}
          >
            <div 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#eb022d' }}
            ></div>
            8 anos de atendimento
          </div>
          
          {/* Main title - Responsivo com tamanhos menores para mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
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
          
          {/* Subtitle - Responsivo */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-full lg:max-w-xl">
            Há oito anos conectando as pessoas com bom atendimento e qualidade nos produtos.
          </p>
          
          {/* CTA Buttons - Melhor responsividade */}
          <div className="flex flex-col gap-3 pt-4 sm:pt-6 w-full">
            <Button 
              size="lg"
              onClick={() => window.open('https://www.instagram.com/timsantaluzia?igsh=eXBmOWk3dmhqaTd1', '_blank')}
              className="text-white h-12 sm:h-13 md:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full shadow-lg"
              style={{
                backgroundColor: '#004794',
                boxShadow: '0 10px 25px rgba(0, 71, 148, 0.25)'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#003366'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#004794'}
              aria-label="Seguir no Instagram da TIM Santa Luzia"
            >
              📱 Conheça nosso Instagram
            </Button>
            
            {/* Botão secundário - Responsivo */}
            <button
              onClick={handleLearnMore}
              className="h-12 sm:h-13 md:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full rounded-md transition-all duration-200 flex items-center justify-center"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(235, 2, 45, 0.3)',
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
            </button>
          </div>
          
          {/* Social proof - Responsivo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm pt-4">
            <div className="flex items-center gap-2">
              <div 
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: '#eb022d' }}
              ></div>
              <span>4.9/5 avaliação média</span>
            </div>
          </div>
          
        </div>
        
        {/* Imagem do celular - Responsiva */}
        <div className="flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-md">
            <img 
              src="/celular.png" 
              alt="Smartphone TIM com aplicativos e serviços" 
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
}