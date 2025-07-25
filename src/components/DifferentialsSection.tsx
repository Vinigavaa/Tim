import { Smartphone, Shield, Wrench, Clock, Users, Heart, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';
import { useState, useEffect, useCallback } from 'react';

export function DifferentialsSection() {
  const handleRepairClick = createWhatsAppHandler(WHATSAPP_MESSAGES.REPAIR);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  // Preload images
  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(prev => ({ ...prev, [index]: true }));
      };
      img.src = image.src;
    });
  }, []);

  // Função para navegar para próxima imagem
  const nextImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  // Função para navegar para imagem anterior
  const prevImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  // Função para ir para uma imagem específica
  const goToImage = useCallback((index: number) => {
    if (isTransitioning || index === currentImage) return;
    setIsTransitioning(true);
    setCurrentImage(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentImage, isTransitioning]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prevImage();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        nextImage();
        break;
      case ' ':
        e.preventDefault();
        toggleAutoPlay();
        break;
      case 'Home':
        e.preventDefault();
        goToImage(0);
        break;
      case 'End':
        e.preventDefault();
        goToImage(images.length - 1);
        break;
      default:
        // Number keys (1-9) for direct navigation
        const num = parseInt(e.key);
        if (num >= 1 && num <= images.length) {
          e.preventDefault();
          goToImage(num - 1);
        }
        break;
    }
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, nextImage]);

  // Pausar autoplay quando hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Toggle autoplay
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

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
                className="font-semibold h-12 px-8 text-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
                style={{
                  backgroundColor: '#eb022d',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#c7021f';
                  (e.target as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#eb022d';
                  (e.target as HTMLElement).style.transform = 'scale(1)';
                }}
                aria-label="Solicitar reparo via WhatsApp"
              >
                🔧 Solicitar Reparo
              </Button>
              
              <button
                onClick={() => window.open('tel:+5548998438888', '_self')}
                className="font-semibold h-12 px-8 text-lg rounded-md transition-all duration-300 ease-in-out border-2 hover:shadow-lg hover:scale-105 transform hover:bg-opacity-10"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#004794',
                  color: '#004794'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 71, 148, 0.1)';
                  (e.target as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.transform = 'scale(1)';
                }}
                aria-label="Ligar para a TIM Santa Luzia"
              >
                📞 Ligar Agora
              </button>
            </div>
          </div>

          {/* Carrossel de imagens da loja */}
          <div className="relative">
            <div 
              className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onKeyDown={handleKeyDown}
              tabIndex={0} // Make it focusable for keyboard navigation
              aria-label="Carrossel de imagens da loja"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    currentImage === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                  role="tabpanel"
                  aria-hidden={currentImage !== index}
                  aria-label={`Slide ${index + 1} de ${images.length}: ${image.alt}`}
                >
                  {/* Loading placeholder */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="text-gray-400">Carregando...</div>
                    </div>
                  )}
                  
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
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
              
              {/* Botões de navegação */}
              <button
                onClick={prevImage}
                disabled={isTransitioning}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Imagem anterior"
                title="Seta esquerda ou seta para cima"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              
              <button
                onClick={nextImage}
                disabled={isTransitioning}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Próxima imagem"
                title="Seta direita ou seta para baixo"
              >
                <ChevronRight size={20} className="text-white" />
              </button>

              {/* Controle de autoplay */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
                aria-label={isAutoPlaying ? "Pausar slideshow automático" : "Iniciar slideshow automático"}
                title="Pressione espaço para pausar/iniciar"
              >
                {isAutoPlaying ? (
                  <Pause size={16} className="text-white" />
                ) : (
                  <Play size={16} className="text-white" />
                )}
              </button>
              
              {/* Indicadores do carrossel */}
              <div 
                className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
                role="tablist"
                aria-label="Indicadores do carrossel"
              >
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    disabled={isTransitioning}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                      currentImage === index 
                        ? 'scale-125 ring-2 ring-white/50' 
                        : 'scale-100 opacity-60 hover:opacity-80'
                    }`}
                    style={{ 
                      backgroundColor: currentImage === index ? '#eb022d' : '#ffffff' 
                    }}
                    role="tab"
                    aria-selected={currentImage === index}
                    aria-controls={`carousel-slide-${index}`}
                    aria-label={`Ir para imagem ${index + 1}: ${image.alt}`}
                    title={`Pressione ${index + 1} para navegar diretamente`}
                  />
                ))}
              </div>

              {/* Barra de progresso */}
              {isAutoPlaying && !isPaused && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-100 ease-linear"
                    style={{
                      width: `${((Date.now() % 5000) / 5000) * 100}%`
                    }}
                  />
                </div>
              )}
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