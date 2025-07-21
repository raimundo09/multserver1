
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Shield, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import GuaranteeSection from './GuaranteeSection';

const Pricing = () => {
  const plans = [{
    name: "Mensal",
    price: "20",
    period: "mês",
    duration: "1 mês",
    description: "Pacote completo 1 mês de acesso",
    features: ["Qualidade SD/HD/FHD/4K", "Filmes e séries", "Canais Adultos (opcional)", "Servidores Dedicados"],
    highlighted: false,
    badge: null,
    urgency: false
  }, {
    name: "Trimestral",
    price: "51",
    period: "3 meses",
    duration: "3 meses",
    description: "Pacote completo 3 meses de acesso",
    features: ["Qualidade SD/HD/FHD/4K", "Filmes e séries", "Canais Adultos (opcional)", "Servidores Dedicados"],
    highlighted: false,
    badge: null,
    urgency: false
  }, {
    name: "Semestral",
    price: "90",
    period: "6 meses",
    duration: "6 meses",
    description: "Pacote completo 6 meses de acesso",
    features: ["Qualidade SD/HD/FHD/4K", "Filmes e séries", "Canais Adultos (opcional)", "Servidores Dedicados"],
    highlighted: true,
    badge: "Mais Popular",
    urgency: true
  }, {
    name: "Anual",
    price: "144",
    period: "1 ano",
    duration: "1 ano",
    description: "Pacote completo 1 ano de acesso",
    features: ["Qualidade SD/HD/FHD/4K", "Filmes e séries", "Canais Adultos (opcional)", "Servidores Dedicados"],
    highlighted: false,
    badge: "Melhor Oferta",
    urgency: true
  }];

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha seu <span className="gradient-text">plano ideal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis para todos os gostos e orçamentos. Comece com teste grátis!
          </p>
          
          {/* Contador regressivo */}
          <CountdownTimer />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 rounded-2xl border transition-all duration-300 card-hover ${
                plan.highlighted 
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-transparent shadow-2xl scale-105 ring-2 ring-primary/20' 
                  : 'border-border bg-card'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow ${
                    plan.badge === "Mais Popular" 
                      ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg animate-bounce' 
                      : 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'
                  }`}>
                    {plan.badge === "Melhor Oferta" ? <Crown className="w-4 h-4" /> : <Star className="w-4 h-4 animate-spin" />}
                    <span className="font-bold">{plan.badge}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center space-x-1 mb-2">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.duration} de acesso</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Button 
                  className={`w-full py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-lg animate-pulse-glow' 
                      : plan.urgency
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
                      : 'bg-gradient-to-r from-brand-orange to-brand-pink hover:opacity-90'
                  }`}
                  onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20assinar', '_blank')}
                >
                  {plan.urgency ? '🔥 ASSINAR AGORA' : 'ASSINAR'}
                </Button>
                
                <Button 
                  variant="outline" 
                  className={`w-full py-3 text-sm font-semibold border-2 transition-all duration-300 ${
                    plan.highlighted
                      ? 'border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black'
                      : 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
                  }`}
                  onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  TESTE GRÁTIS
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Garantia */}
        <GuaranteeSection />

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem teste grátis e suporte 24/7
          </p>
          <p className="text-sm text-muted-foreground">* Preços em reais brasileiros.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
