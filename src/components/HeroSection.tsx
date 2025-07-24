import { Button } from './ui/button';
import { Play, Signal, Wifi, Smartphone, Star, Users, Clock } from 'lucide-react';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';
import { WavyBackground } from './ui/WavyBackground';

export function HeroSection() {
  const handleStartNow = createWhatsAppHandler(WHATSAPP_MESSAGES.START_NOW);

  return (
    <WavyBackground 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      containerClassName="min-h-screen mt-16 sm:mt-20 md:mt-0"
      colors={[
        "#004794", // TIM Blue
        "#0056a8", // TIM Blue variant
        "#eb022d", // TIM Red
        "#ff1744", // TIM Red variant
        "#0066cc", // Tech Blue
        "#004794", // Back to TIM Blue for continuity
      ]}
      waveWidth={60}
      backgroundFill="rgba(255, 255, 255, 0.95)"
      blur={3}
      speed="slow"
      waveOpacity={0.10}
    >
      <div className="flex items-center justify-center min-h-screen py-20 relative z-10">
        <div className="w-full max-w-4xl space-y-6 sm:space-y-8 text-center">
        
          {/* Modern Badge with micro-interactions */}
          <div className="flex justify-center">
            <div 
              className="group inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 2, 45, 0.15) 0%, rgba(0, 71, 148, 0.12) 100%)',
                border: '1px solid rgba(235, 2, 45, 0.3)',
                color: '#eb022d',
                boxShadow: '0 4px 15px rgba(235, 2, 45, 0.15)'
              }}
            >
              <div className="flex items-center gap-2">
                <Clock size={16} className="animate-pulse" />
                <span>8 anos de excelência</span>
              </div>
              <div 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse group-hover:animate-bounce"
                style={{ backgroundColor: '#eb022d' }}
              ></div>
            </div>
          </div>
          
          {/* Hero Title with advanced typography */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
              <span 
                className="block bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #004794 0%, #eb022d 40%, #004794 80%, #eb022d 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                LOJA TIM
              </span>
              <span className="block text-gray-900 mt-2 drop-shadow-sm">
                <span className="hidden sm:inline">Santa Luzia</span>
                <span className="sm:hidden">Santa Luzia</span>
              </span>
            </h1>
            
            {/* Tech accent line */}
            <div className="flex justify-center pt-4">
              <div 
                className="w-24 h-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #004794 0%, #eb022d 50%, #004794 100%)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>
          
          {/* Enhanced Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-3xl mx-auto font-medium">
            Conectando o futuro com{' '}
            <span 
              className="font-bold bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #004794 0%, #eb022d 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              tecnologia avançada
            </span>{' '}
            e atendimento excepcional há 8 anos.
          </p>
          
          {/* Modern CTA Section */}
          <div className="space-y-4 pt-6 sm:pt-8 max-w-md mx-auto">
            {/* Primary CTA */}
            <Button 
              size="lg"
              onClick={() => window.open('https://www.instagram.com/timsantaluzia?igsh=eXBmOWk3dmhqaTd1', '_blank')}
              className="group relative w-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0"
              style={{
                background: 'linear-gradient(135deg, #004794 0%, #0056a8 50%, #004794 100%)',
                backgroundSize: '200% 200%',
                boxShadow: '0 10px 30px rgba(0, 71, 148, 0.4)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundPosition = '100% 0';
                (e.target as HTMLElement).style.boxShadow = '0 15px 40px rgba(0, 71, 148, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundPosition = '0% 0';
                (e.target as HTMLElement).style.boxShadow = '0 10px 30px rgba(0, 71, 148, 0.4)';
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Smartphone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                Conheça nosso Instagram
              </span>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            {/* Secondary CTA */}
            <button
              onClick={() => window.open('https://maps.app.goo.gl/xm4ySteQD1mssbFW7', '_blank')}
              className="group w-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 2, 45, 0.15) 0%, rgba(235, 2, 45, 0.08) 100%)',
                border: '2px solid rgba(235, 2, 45, 0.4)',
                color: '#eb022d'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(235, 2, 45, 0.2) 0%, rgba(235, 2, 45, 0.12) 100%)';
                (e.target as HTMLElement).style.borderColor = 'rgba(235, 2, 45, 0.6)';
                (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(235, 2, 45, 0.25)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(235, 2, 45, 0.15) 0%, rgba(235, 2, 45, 0.08) 100%)';
                (e.target as HTMLElement).style.borderColor = 'rgba(235, 2, 45, 0.4)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Play size={16} className="group-hover:scale-110 transition-transform duration-300" />
              Nossa Localização
            </button>
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-8 justify-center">
            <div className="flex items-center gap-2 text-gray-700 backdrop-blur-sm bg-white/60 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-sm">4.9/5</span>
              <span className="text-gray-600 text-sm">avaliação</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-700 backdrop-blur-sm bg-white/60 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <Users size={14} className="text-blue-600" />
              <span className="font-semibold text-sm">500+</span>
              <span className="text-gray-600 text-sm">clientes satisfeitos</span>
            </div>
          </div>
          
        </div>
      </div>
    </WavyBackground>
  );
}