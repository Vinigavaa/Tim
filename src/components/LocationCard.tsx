import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Dados estruturados das lojas
const STORES_DATA = [
  {
    id: 'santa-luzia',
    name: 'TIM Santa Luzia',
    phone: '48-998438888',
    address: 'Avenida universitária, 2080, sala 13',
    complement: 'anexo ao centro comercial Nogueira',
    district: 'Santa Luzia',
    city: 'Criciúma',
    mapsLink: 'https://maps.app.goo.gl/xm4ySteQD1mssbFW7',
    whatsapp: 'https://wa.me/5548998438888',
    featured: true,
  },
  {
    id: 'sao-defende',
    name: 'TIM São Defende',
    phone: '48-998424444',
    address: 'Avenida universitária, 3999',
    complement: 'anexo ao Rossao atacadista',
    district: 'São Defende',
    city: 'Criciúma',
    mapsLink: 'https://maps.app.goo.gl/Da17CcUbF91NZG828',
    whatsapp: 'https://wa.me/5548998424444',
  },
  {
    id: 'forquilhinha-centro',
    name: 'TIM Forquilhinha Centro',
    phone: '48-998359999',
    address: 'Avenida 25 de julho, 2396',
    complement: '',
    district: 'Centro',
    city: 'Forquilhinha',
    mapsLink: 'https://maps.app.goo.gl/aXBNL1uX43MdgGNU9',
    whatsapp: 'https://wa.me/5548998359999',
  },
  {
    id: 'forquilhinha-combo',
    name: 'TIM Forquilhinha Combo',
    phone: '48-996645555',
    address: 'Rodovia Gabriel Arns, sala 11',
    complement: 'anexo ao Combo Atacadista',
    district: 'Centro',
    city: 'Forquilhinha',
    mapsLink: 'https://maps.app.goo.gl/ASAGWrWoCd2mSzhr6',
    whatsapp: 'https://wa.me/5548996645555',
  }
];

const LocationCard = ({ store, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de mais informações sobre a loja ${store.name}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `${store.whatsapp}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const handleMapsClick = () => {
    window.open(store.mapsLink, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:+55${store.phone.replace('-', '')}`, '_self');
  };

  return (
    <article 
      className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full backdrop-blur-sm border"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'rgba(0, 71, 148, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header do card */}
      <div 
        className="p-6 pb-4"
        style={{ 
          background: 'linear-gradient(135deg, rgba(0, 71, 148, 0.1) 0%, rgba(235, 2, 45, 0.05) 100%)'
        }}
      >
        <div className="flex items-start gap-3">
          <div 
            className="p-3 rounded-xl flex-shrink-0"
            style={{ 
              backgroundColor: '#004794',
              color: 'white'
            }}
          >
            <MapPin size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 
              className="text-xl font-bold mb-1 truncate"
              style={{ color: '#004794' }}
            >
              {store.name}
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              {store.district}, {store.city}
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="px-6 pb-6 space-y-4">
        {/* Endereço */}
        <div className="space-y-1 mt-4 sm:mt-0">
          <div className="flex items-start gap-2">
            <Navigation size={16} className="text-gray-400 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="font-medium">{store.address}</p>
              {store.complement && (
                <p className="text-gray-500">{store.complement}</p>
              )}
            </div>
          </div>
        </div>

        {/* Telefone */}
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-gray-400" />
          <button
            onClick={handlePhoneClick}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {store.phone}
          </button>
        </div>

        {/* Botões de ação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <Button 
            onClick={handleWhatsAppClick}
            className="group relative h-11 px-4 text-sm font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 border-0 transform hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #004794 0%, #0056a8 50%, #004794 100%)',
              backgroundSize: '200% 200%',
              boxShadow: '0 6px 20px rgba(0, 71, 148, 0.3)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundPosition = '100% 0';
              target.style.boxShadow = '0 10px 30px rgba(0, 71, 148, 0.5)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundPosition = '0% 0';
              target.style.boxShadow = '0 6px 20px rgba(0, 71, 148, 0.3)';
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
              WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <Button 
            onClick={handleMapsClick}
            className="group h-11 px-4 text-sm font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 border-0"
            style={{
              background: 'linear-gradient(135deg, #eb022d 0%, #ff1744 50%, #eb022d 100%)',
              backgroundSize: '200% 200%',
              boxShadow: '0 6px 20px rgba(235, 2, 45, 0.3)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundPosition = '100% 0';
              target.style.boxShadow = '0 10px 30px rgba(235, 2, 45, 0.5)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundPosition = '0% 0';
              target.style.boxShadow = '0 6px 20px rgba(235, 2, 45, 0.3)';
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <MapPin size={14} className="group-hover:scale-110 transition-transform duration-300" />
              Ver Maps
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </div>

        {/* Indicador de hover */}
        <div 
          className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            background: 'linear-gradient(90deg, #004794 0%, #eb022d 100%)'
          }}
        />
      </div>
    </article>
  );
};

export function LocationsSection() {
  return (
    <section 
      id="locations" 
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Efeitos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#004794' }}
        />
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#eb022d' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: '#004794' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(235, 2, 45, 0.15) 0%, rgba(0, 71, 148, 0.12) 100%)',
              border: '1px solid rgba(235, 2, 45, 0.3)',
              color: '#eb022d'
            }}
          >
            <MapPin size={16} className="animate-pulse" />
            <span>4 lojas na região</span>
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#004794' }}
          >
            Nossas Lojas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Encontre a loja TIM mais próxima de você em{' '}
            <span 
              className="font-bold bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #004794 0%, #eb022d 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Criciúma e Forquilhinha
            </span>
            . Atendimento especializado e produtos de qualidade em todas as unidades.
          </p>
        </div>
        
        {/* Grid de lojas */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {STORES_DATA.map((store, index) => (
            <LocationCard key={store.id} store={store} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}