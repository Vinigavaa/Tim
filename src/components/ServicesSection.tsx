import { Smartphone, Shield, Wrench, Headphones } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const ServiceCard = ({ title, description, icon, imageSrc }: ServiceCardProps) => {
  return (
    <article 
      className="rounded-xl shadow-lg overflow-hidden h-full flex flex-col backdrop-blur-sm"
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
          className="w-full h-full object-cover"
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
        
        {/* Botão estático */}
        <div 
          className="w-full font-semibold py-3 px-4 rounded-md text-center"
          style={{
            backgroundColor: '#eb022d',
            color: 'white'
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <Headphones size={16} />
            Venha Conferir
          </div>
        </div>
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
      imageSrc: "/novos.jpeg"
    },
    {
      title: "Celulares Seminovos",
      description: "Smartphones seminovos revisados e testados, com ótima qualidade e preços acessíveis. Garantia e procedência assegurada.",
      icon: <Smartphone size={28} />,
      imageSrc: "/seminovos.jpeg"
    },
    {
      title: "Capas e Películas",
      description: "Proteção completa para seu celular com capas resistentes e películas de vidro temperado. Diversos modelos e cores disponíveis.",
      icon: <Shield size={28} />,
      imageSrc: "/capas.jpeg"
    },
    {
      title: "Capas Personalizadas",
      description: "Crie sua capa única! Capas personalizadas com suas fotos, designs ou logos. Impressão de alta qualidade e durabilidade.",
      icon: <Shield size={28} />,
      imageSrc: "/personalizados.jpeg"
    },
    {
      title: "Acessórios",
      description: "Carregadores, fones de ouvido, cabos, suportes e todos os acessórios que você precisa para seu smartphone e tablet.",
      icon: <Headphones size={28} />,
      imageSrc: "/acessorios.jpeg"
    },
    {
      title: "Assistência Técnica",
      description: "Serviço técnico especializado para reparo de smartphones. Diagnóstico gratuito, peças originais e garantia no serviço.",
      icon: <Wrench size={28} />,
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
            Nas Lojas TIM oferecemos soluções completas para seu smartphone. 
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
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        
        {/* Call-to-action adicional */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 text-lg">
            Visite nossas lojas em Criciúma e Forquilhinha
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="font-semibold text-white mb-1">TIM Santa Luzia</div>
              <div className="text-blue-100 text-sm">📱 48-998438888</div>
            </div>
            <div className="text-center p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="font-semibold text-white mb-1">TIM São Defende</div>
              <div className="text-blue-100 text-sm">📱 48-998424444</div>
            </div>
            <div className="text-center p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="font-semibold text-white mb-1">TIM Forquilhinha Centro</div>
              <div className="text-blue-100 text-sm">📱 48-998359999</div>
            </div>
            <div className="text-center p-4 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="font-semibold text-white mb-1">TIM Forquilhinha Combo</div>
              <div className="text-blue-100 text-sm">📱 48-996645555</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}