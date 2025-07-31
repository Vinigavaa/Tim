import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const Testimonial = ({ quote, author, position, rating }: TestimonialProps) => (
  <div 
    className="rounded-xl p-6 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
    style={{ backgroundColor: 'rgba(0, 71, 148, 0.15)' }}
  >
    {/* Rating stars */}
    <div>
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5 fill-current"
            style={{ color: '#eb022d' }}
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-blue-100 mb-6 leading-relaxed text-lg">"{quote}"</p>
    </div>
    
    {/* Author info */}
    <div 
      className="pt-4 border-t"
      style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
    >
      <p className="font-semibold text-white text-lg">{author}</p>
      <p className="text-sm text-blue-200">{position}</p>
    </div>
  </div>
);

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Única loja da TIM que me ajudou nas questões de planos e consegui recuperar meu número. Atendimento excelente!",
      author: "Kethelyn Rabello",
      position: "Cliente TIM",
      rating: 5
    },
    {
      quote: "Loja excelente, melhor atendimento da região! Sempre resolvem meus problemas com rapidez e eficiência.",
      author: "Érica Vitalli",
      position: "Cliente TIM",
      rating: 5
    },
    {
      quote: "Comprei meu iPhone 14, excelente qualidade e atendimento, transparência e preço justo. Super recomendo!",
      author: "Gustavo Mendes",
      position: "Cliente TIM",
      rating: 5
    },
    {
      quote: "Assistência técnica perfeita! Quebraram a tela do meu celular e ficou como novo. Garantia respeitada.",
      author: "Marina Silva",
      position: "Cliente TIM",
      rating: 5
    },
    {
      quote: "8 anos sendo cliente e nunca me decepcionaram. Sempre com produtos novos e preços competitivos.",
      author: "Roberto Santos",
      position: "Cliente TIM",
      rating: 5
    },
    {
      quote: "Capa personalizada ficou incrível! Qualidade da impressão surpreendente e entrega rápida.",
      author: "Ana Carolina",
      position: "Cliente TIM",
      rating: 5
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: '#004794' }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div 
            className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-6"
            style={{
              backgroundColor: 'rgba(235, 2, 45, 0.15)',
              border: '1px solid rgba(235, 2, 45, 0.3)',
              color: '#eb022d'
            }}
          >
            ⭐ DEPOIMENTOS
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            O que dizem nossos clientes
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Mais de 8 anos cuidando das pessoas de Santa Luzia com qualidade, 
            transparência e o melhor atendimento da região.
          </p>
        </div>
        
        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
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
        
        {/* Métricas da TIM Santa Luzia */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          {[
            { value: "8+", label: "Anos de experiência" },
            { value: "4.9★", label: "Avaliação Google" },
            { value: "1000+", label: "Clientes atendidos" },
            { value: "90", label: "Dias de garantia" }
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #eb022d 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-blue-200">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Call-to-action final */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 text-lg">
            Faça parte da nossa família de clientes satisfeitos
          </p>
        </div>
      </div>
    </section>
  );
}