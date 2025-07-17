import { Check, Target, Zap, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../lib/utils';

export function DifferentialsSection() {
  const handleApproachClick = createWhatsAppHandler(WHATSAPP_MESSAGES.APPROACH);

  const differentials = [
    {
      icon: <Target size={24} />,
      title: "Foco em Resultados",
      description: "Cada estratégia é desenvolvida com base em métricas e dados concretos para garantir o máximo ROI."
    },
    {
      icon: <Zap size={24} />,
      title: "Agilidade e Eficiência",
      description: "Implementamos soluções rápidas e eficazes que aceleram o crescimento do seu negócio."
    },
    {
      icon: <Users size={24} />,
      title: "Equipe Especializada",
      description: "Profissionais com vasta experiência em suas áreas de atuação, sempre atualizados com as últimas tendências."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Crescimento Sustentável",
      description: "Construímos estratégias de longo prazo que garantem crescimento consistente e sustentável."
    }
  ];

  return (
    <section id="differentials" className="section-modern bg-uniform relative">
      {/* Efeitos de blur vermelho decorativos */}
      <div className="red-blur-3 top-24 left-16"></div>
      <div className="red-blur-2 bottom-16 right-20"></div>
      <div className="red-blur-1 top-1/2 right-8"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo principal */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Por que escolher a Prosperity?
              </h2>
              <p className="text-lg text-gray-400 max-w-xl">
                Combinamos estratégia, tecnologia e criatividade para entregar resultados 
                extraordinários que transformam negócios.
              </p>
            </div>
            
            <div className="space-y-6">
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-red-500/10 p-3 rounded-lg text-red-500 shrink-0">
                    {differential.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {differential.title}
                    </h3>
                    <p className="text-gray-400">
                      {differential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={handleApproachClick}
              className="btn-primary h-11 px-6 text-base"
              aria-label="Conhecer nossa abordagem via WhatsApp"
            >
              Conheça nossa abordagem
            </Button>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-gray-400">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400">Satisfação do Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">150%</div>
              <div className="text-gray-400">ROI Médio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
