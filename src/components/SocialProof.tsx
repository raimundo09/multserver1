import { Users, Shield, Clock, Star, TrendingUp, Globe } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50K+",
      label: "Clientes Ativos",
      description: "Usuários satisfeitos em todo Brasil"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9/5",
      label: "Avaliação Média",
      description: "Baseado em mais de 50.000 reviews"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime",
      description: "Disponibilidade garantida 24/7"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "3 Anos",
      label: "No Mercado",
      description: "Experiência e confiabilidade"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "2M+",
      label: "Horas Assistidas",
      description: "Conteúdo consumido mensalmente"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "27 Estados",
      label: "Cobertura Nacional",
      description: "Presente em todo território brasileiro"
    }
  ];

  const brands = [
    "Netflix", "Amazon Prime", "Disney+", "HBO Max", 
    "Paramount+", "Apple TV+", "Globoplay", "SBT"
  ];

  return (
    <section className="py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <div className="text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-muted-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Acesso a todas as plataformas premium
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-muted-foreground font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground mb-2">100% Seguro</h4>
            <p className="text-muted-foreground text-sm">
              Pagamento seguro e dados protegidos com criptografia de ponta
            </p>
          </div>
          
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground mb-2">Suporte 24/7</h4>
            <p className="text-muted-foreground text-sm">
              Atendimento especializado disponível todos os dias da semana
            </p>
          </div>
          
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-foreground mb-2">Sem Fidelidade</h4>
            <p className="text-muted-foreground text-sm">
              Cancele quando quiser, sem multas ou taxas adicionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
