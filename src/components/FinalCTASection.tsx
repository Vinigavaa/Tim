import { Button } from './ui/button';
import { Smartphone, Wifi, Shield, UserCheck, Headphones, ArrowRight } from 'lucide-react';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';

export function FinalCTASection() {
  const handleTelephonyClick = createWhatsAppHandler(WHATSAPP_MESSAGES.CONTACT_GENERAL);

  const services = [
    {
      icon: <ArrowRight size={20} />,
      title: "Migração e Planos",
      description: "Mudança de plano (pré, pós ou controle), portabilidade e bloqueio/desbloqueio de linha."
    },
    {
      icon: <Smartphone size={20} />,
      title: "Troca de Chip / e-SIM",
      description: "Substituição de chip físico por e-SIM ou nova emissão. Cobrança a partir de R$ 30."
    },
    {
      icon: <Shield size={20} />,
      title: "Biometria",
      description: "Cadastramento facial ou digital para segurança e prevenção de fraudes."
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Efeitos tecnológicos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blur contínuo azul */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(0, 71, 148, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 71, 148, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 20%, rgba(235, 2, 45, 0.1) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Linhas tecnológicas */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke="rgba(0, 71, 148, 0.1)" 
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(0, 71, 148, 0.3)' }} />
              <stop offset="50%" style={{ stopColor: 'rgba(235, 2, 45, 0.2)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 71, 148, 0.1)' }} />
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Linhas diagonais tecnológicas */}
          <line x1="0" y1="0" x2="100%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
          <line x1="20%" y1="0" x2="100%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="40%" x2="80%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.2" />
          <line x1="60%" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
        </svg>
        
        {/* Pontos conectados */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#004794' }} />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#eb022d' }} />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#004794' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: 'rgba(0, 71, 148, 0.1)',
              border: '1px solid rgba(0, 71, 148, 0.2)',
              color: '#004794'
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#004794' }}
            />
            📱 TELEFONIA TIM
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#004794' }}
          >
            Serviços de Telefonia
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em telefonia TIM: desde migração de planos até 
            consultoria especializada em tecnologia 5G.
          </p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: 'rgba(0, 71, 148, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(235, 2, 45, 0.1)' }}
              >
                <div style={{ color: '#eb022d' }}>
                  {service.icon}
                </div>
              </div>
              
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#004794' }}
              >
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call-to-action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#004794' }}
            >
              Precisa de ajuda com sua linha TIM?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe especializada está pronta para atender você com 
              agilidade e transparência. Venha nos conhecer!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleTelephonyClick}
              className="font-semibold h-12 px-8 text-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
              style={{
                backgroundColor: '#eb022d',
                color: 'white',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#c7021f';
                (e.target as HTMLElement).style.transform = 'scale(1.05) translateY(-2px)';
                (e.target as HTMLElement).style.boxShadow = '0 15px 30px rgba(235, 2, 45, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#eb022d';
                (e.target as HTMLElement).style.transform = 'scale(1) translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
              aria-label="Consultar serviços TIM via WhatsApp"
            >
              <Headphones size={18} className="mr-2" />
              Consultar Serviços TIM
            </Button>
            
            <button
              onClick={() => window.open('tel:+5548998438888', '_self')}
              className="font-semibold h-12 px-8 text-lg rounded-md transition-all duration-300 ease-in-out border-2 hover:shadow-lg hover:scale-105 transform"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#004794',
                color: '#004794',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 71, 148, 0.1)';
                (e.target as HTMLElement).style.transform = 'scale(1.05) translateY(-2px)';
                (e.target as HTMLElement).style.boxShadow = '0 10px 20px rgba(0, 71, 148, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.transform = 'scale(1) translateY(0)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
              aria-label="Ligar para TIM Santa Luzia"
            >
              📞 (48) 99843-8888
            </button>
          </div>
          
          {/* Benefícios */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#004794' }} />
              <span>Atendimento especializado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#eb022d' }} />
              <span>Tecnologia 5G</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#004794' }} />
              <span>Consultoria gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}