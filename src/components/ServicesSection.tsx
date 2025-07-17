import { Smartphone, Shield, Wrench, Headphones } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  whatsappMessage: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, icon, whatsappMessage, imageSrc }: ServiceCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para criar URL do WhatsApp com mensagem personalizada
  const createWhatsAppUrl = (message: string) => {
    try {
      const encodedMessage = encodeURIComponent(message);
      return `https://wa.me/554896832076?text=${encodedMessage}`;
    } catch (err) {
      console.error('Erro ao codificar mensagem do WhatsApp:', err);
      return `https://wa.me/554896832076`;
    }
  };

  const handleWhatsAppClick = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const url = createWhatsAppUrl(whatsappMessage);
      
      if (typeof window !== 'undefined' && window.open) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = url;
        }
      } else {
        window.location.href = url;
      }
    } catch (err) {
      console.error('Erro ao abrir WhatsApp:', err);
      setError('Não foi possível abrir o WhatsApp. Tente novamente.');
      
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article 
      className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(0, 71, 148, 0.15)' }}
    >
      {/* Área da imagem */}
      <div 
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Overlay sutil para melhor contraste */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 71, 148, 0.1)' }}
        />
      </div>
      
      {/* Conteúdo do card */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-white">
          {title}
        </h3>
        
        <p className="text-blue-100 mb-6 flex-1 leading-relaxed">
          {description}
        </p>
        
        {/* Erro de WhatsApp */}
        {error && (
          <div 
            className="mb-4 p-3 rounded border text-sm"
            style={{ 
              backgroundColor: 'rgba(235, 2, 45, 0.1)', 
              borderColor: 'rgba(235, 2, 45, 0.2)',
              color: '#eb022d'
            }}
          >
            {error}
          </div>
        )}
        
        {/* Botão do WhatsApp */}
        <Button 
          className="w-full font-semibold transition-all duration-200"
          onClick={handleWhatsAppClick}
          disabled={isLoading}
          style={{
            backgroundColor: '#eb022d',
            color: 'white'
          }}
          aria-label={`Entrar em contato via WhatsApp sobre ${title}`}
        >
          {isLoading ? (
            <>
              <div 
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"
              />
              Abrindo...
            </>
          ) : (
            <>
              <Headphones size={16} className="mr-2" />
              Estou interessado
            </>
          )}
        </Button>
      </div>
    </article>
  );
};

export function ServicesSection() {
  const services = [
    {
      title: "Celulares Novos",
      description: "Ampla variedade de smartphones novos das melhores marcas. Últimos lançamentos com garantia de fábrica e assistência técnica especializada.",
      icon: <Smartphone size={28} />,
      whatsappMessage: "Olá! Gostaria de conhecer os celulares novos disponíveis na TIM Santa Luzia",
      imageSrc: "/novos.jpeg"
    },
    {
      title: "Celulares Seminovos",
      description: "Smartphones seminovos revisados e testados, com ótima qualidade e preços acessíveis. Garantia e procedência assegurada.",
      icon: <Smartphone size={28} />,
      whatsappMessage: "Olá! Tenho interesse nos celulares seminovos da TIM Santa Luzia",
      imageSrc: "/seminovos.jpeg"
    },
    {
      title: "Capas e Películas",
      description: "Proteção completa para seu celular com capas resistentes e películas de vidro temperado. Diversos modelos e cores disponíveis.",
      icon: <Shield size={28} />,
      whatsappMessage: "Olá! Preciso de capas e películas para meu celular na TIM Santa Luzia",
      imageSrc: "/capas.jpeg"
    },
    {
      title: "Capas Personalizadas",
      description: "Crie sua capa única! Capas personalizadas com suas fotos, designs ou logos. Impressão de alta qualidade e durabilidade.",
      icon: <Shield size={28} />,
      whatsappMessage: "Olá! Quero fazer uma capa personalizada na TIM Santa Luzia",
      imageSrc: "/personalizados.jpeg"
    },
    {
      title: "Acessórios",
      description: "Carregadores, fones de ouvido, cabos, suportes e todos os acessórios que você precisa para seu smartphone e tablet.",
      icon: <Headphones size={28} />,
      whatsappMessage: "Olá! Preciso de acessórios para celular na TIM Santa Luzia",
      imageSrc: "/acessorios.jpeg"
    },
    {
      title: "Assistência Técnica",
      description: "Serviço técnico especializado para reparo de smartphones. Diagnóstico gratuito, peças originais e garantia no serviço.",
      icon: <Wrench size={28} />,
      whatsappMessage: "Olá! Meu celular precisa de assistência técnica na TIM Santa Luzia",
      imageSrc: "/assistencia.jpeg"
    }
  ];

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: '#004794' }}
    >
      {/* Efeitos de blur decorativos sutis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#eb022d' }}
        />
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#eb022d' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Na TIM Santa Luzia oferecemos soluções completas para seu smartphone. 
            Desde vendas até assistência técnica especializada.
          </p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              whatsappMessage={service.whatsappMessage}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        
        {/* Call-to-action adicional */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 text-lg">
            Visite nossa loja ou entre em contato pelo WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-white font-semibold">📍 Endereço: Santa Luzia, Criciuma - SC</span>
            <span className="text-white font-semibold">📱 WhatsApp: (48) 99843-8888</span>
          </div>
        </div>
      </div>
    </section>
  );
}