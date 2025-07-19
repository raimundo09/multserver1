import { Star, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Melhor IPTV que já usei! Qualidade excelente e nunca trava. Suporte muito atencioso e rápido. Recomendo 100%!"
    },
    {
      name: "Maria Santos",
      location: "Rio de Janeiro, RJ",
      text: "Estava cansada de pagar caro na TV por assinatura. Aqui tenho muito mais conteúdo por um preço justo. Muito satisfeita!"
    },
    {
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      text: "Uso há 2 anos e nunca me decepcionou. Qualidade 4K perfeita e posso assistir em todos os meus dispositivos."
    },
    {
      name: "Ana Costa",
      location: "Brasília, DF",
      text: "O suporte é incrível! Sempre que precisei foram super rápidos para resolver. Serviço de primeira qualidade."
    },
    {
      name: "Pedro Martins",
      location: "Porto Alegre, RS",
      text: "Migrei de outra operadora e a diferença é gritante. Mais canais, melhor qualidade e preço muito melhor!"
    },
    {
      name: "Luiza Ferreira",
      location: "Salvador, BA",
      text: "Adoro poder assistir meus programas favoritos em qualquer lugar. A qualidade é sempre excelente!"
    },
    {
      name: "Rafael Lima",
      location: "Curitiba, PR",
      text: "Simplesmente sensacional! Nunca mais tive problemas para assistir meus jogos favoritos."
    },
    {
      name: "Juliana Rocha",
      location: "Fortaleza, CE",
      text: "Atendimento rápido e eficiente. Recomendo para todos os meus amigos!"
    },
    {
      name: "Bruno Souza",
      location: "Manaus, AM",
      text: "Ótima variedade de canais e filmes. Estou muito satisfeito com o serviço."
    },
    {
      name: "Fernanda Dias",
      location: "Recife, PE",
      text: "A qualidade do streaming é impecável, mesmo com internet mais lenta."
    },
    {
      name: "Gabriel Alves",
      location: "Goiânia, GO",
      text: "Preço justo e muita variedade. Não troco por nada!"
    },
    {
      name: "Patrícia Lima",
      location: "Vitória, ES",
      text: "Finalmente encontrei um serviço que funciona perfeitamente! Meus filhos adoram os canais infantis."
    },
    {
      name: "Roberto Santos",
      location: "Campo Grande, MS",
      text: "Como técnico de informática, sou muito exigente com qualidade. Este serviço superou todas as expectativas!"
    },
    {
      name: "Carla Mendes",
      location: "Maceió, AL",
      text: "Economia mensal de mais de R$ 200! Agora posso assistir tudo que quero sem me preocupar com o bolso."
    },
    {
      name: "Diego Costa",
      location: "João Pessoa, PB",
      text: "Uso no celular, tablet e TV. Funciona perfeitamente em todos. Melhor investimento que fiz!"
    },
    {
      name: "Amanda Silva",
      location: "Teresina, PI",
      text: "Sou professora e uso muito para documentários educativos. A variedade de conteúdo é impressionante."
    },
    {
      name: "Marcelo Oliveira",
      location: "Natal, RN",
      text: "Fã de esportes aqui! Todos os jogos que quero assistir estão disponíveis em alta qualidade."
    },
    {
      name: "Vanessa Rodrigues",
      location: "Aracaju, SE",
      text: "Minha família toda usa. Desde meus pais até meus filhos adolescentes. Todos adoram!"
    },
    {
      name: "Thiago Pereira",
      location: "Palmas, TO",
      text: "Internet não é das melhores aqui, mas mesmo assim o streaming funciona muito bem. Parabéns!"
    },
    {
      name: "Larissa Santos",
      location: "Boa Vista, RR",
      text: "Moro no Norte e sempre tive problemas com outros serviços. Este funciona perfeitamente!"
    },
    {
      name: "Ricardo Almeida",
      location: "Macapá, AP",
      text: "Qualidade profissional mesmo com internet instável. Serviço realmente diferenciado!"
    },
    {
      name: "Camila Ferreira",
      location: "Rio Branco, AC",
      text: "Testei o período gratuito e me apaixonei! Já estou no segundo mês e só tenho elogios."
    },
    {
      name: "André Costa",
      location: "Porto Velho, RO",
      text: "Como gamer, preciso de qualidade. Este serviço não me decepciona nunca!"
    },
    {
      name: "Isabela Martins",
      location: "Cuiabá, MT",
      text: "Melhor custo-benefício que encontrei. Muito mais conteúdo pelo mesmo preço!"
    }
  ];

  // Carrossel animado
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que clientes reais de todas as regiões do Brasil estão dizendo sobre a experiência com o MULT SERVER. Depoimentos autênticos, de quem já testou e aprovou nosso serviço!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-xl min-h-[320px] md:min-h-[260px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute left-0 top-0 w-full transition-all duration-700 ease-in-out ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
                style={{ pointerEvents: index === current ? 'auto' : 'none' }}
              >
                <div className="p-8 rounded-2xl bg-white/90 border border-orange-100 shadow-2xl flex flex-col items-center animate-fade-in">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6 leading-relaxed text-center font-medium">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
