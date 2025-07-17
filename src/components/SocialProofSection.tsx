import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const Testimonial = ({ quote, author, position, rating }: TestimonialProps) => (
  <div className="glass-card rounded-xl p-6 h-full flex flex-col justify-between">
    {/* Rating stars */}
    <div>
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-red-500 fill-red-500" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-300 mb-6 leading-relaxed">"{quote}"</p>
    </div>
    
    {/* Author info */}
    <div className="pt-4 border-t border-white/5">
      <p className="font-semibold text-white">{author}</p>
      <p className="text-sm text-gray-400">{position}</p>
    </div>
  </div>
);

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "A equipe da Prosperity Company revolucionou nossa estratégia digital. Em apenas 3 meses, triplicamos o tráfego e duplicamos as conversões no nosso site.",
      author: "Carlos Silva",
      position: "CEO, TechSolutions",
      rating: 5
    },
    {
      quote: "Excelente trabalho de SEO e marketing de conteúdo. Nossa visibilidade online melhorou drasticamente e agora estamos na primeira página para nossas principais palavras-chave.",
      author: "Marina Oliveira",
      position: "CMO, Grupo Inovação",
      rating: 5
    },
    {
      quote: "A Prosperity Company entregou resultados que superaram nossas expectativas. A gestão das campanhas de anúncios trouxe um ROI impressionante e a comunicação foi sempre transparente.",
      author: "Gustavo Mendes",
      position: "Diretor, E-commerce Express",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-modern bg-uniform relative">
      {/* Efeitos de blur vermelho decorativos */}
      <div className="red-blur-1 top-12 right-24"></div>
      <div className="red-blur-3 bottom-24 left-8"></div>
      <div className="red-blur-2 top-1/3 left-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">O que dizem nossos clientes</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Conheça as histórias de sucesso de empresas que transformaram sua presença digital com nossas soluções.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5">
          {[
            { value: "147%", label: "Crescimento médio" },
            { value: "97%", label: "Taxa de renovação" },
            { value: "+500", label: "Clientes atendidos" },
            { value: "3x", label: "Retorno sobre investimento" }
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
