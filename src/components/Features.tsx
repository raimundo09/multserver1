import { Tv, Zap, Shield, HeadphonesIcon, Smartphone, Globe, Award, Clock, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Tv,
      title: "Qualidade 4K Ultra HD",
      description: "Assista seus conteúdos favoritos na mais alta qualidade disponível, com resolução 4K e tecnologia HDR.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Streaming Ultra Rápido",
      description: "Tecnologia de ponta para garantir transmissão sem travamentos, mesmo em horários de pico.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "100% Seguro e Confiável",
      description: "Serviço totalmente seguro com servidores protegidos e uptime de 99.9% garantido.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para ajudar você, 24 horas por dia, 7 dias por semana.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Multi-dispositivos",
      description: "Assista em TV, smartphone, tablet, notebook ou qualquer dispositivo conectado à internet.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Conteúdo Internacional",
      description: "Canais do mundo inteiro com dublagem e legendas em português quando disponível.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="recursos" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Recursos Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-montserrat text-foreground">
            Por que escolher o <span className="text-brand-orange">MULT SERVER</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos a melhor experiência de entretenimento com tecnologia de ponta, 
            conteúdo premium e suporte excepcional para você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-brand-orange/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-black mb-4 text-foreground font-montserrat group-hover:text-brand-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
