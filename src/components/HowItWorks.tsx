
import { CheckCircle, Search, Play, ArrowRight, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: Play,
      number: "01",
      title: "TESTE GRÁTIS",
      description: "Primeiro disponibilizamos um teste grátis para que você conheça nosso produto e realmente comprove que ele é tão bom como falamos.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Search,
      number: "02", 
      title: "ESCOLHA SEU PLANO",
      description: "Agora que já conhece o produto, escolha um plano: mensal, trimestral, semestral ou anual. Também decida quantos pontos vai querer.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "APROVEITE!",
      description: "Com tudo configurado, você já pode começar a assistir todo o conteúdo disponível em alta qualidade, quando e onde quiser.",
      color: "from-brand-orange to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background/50 to-card/20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Processo Simples</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground font-montserrat">
            COMO FUNCIONA A <span className="text-brand-orange">CONTRATAÇÃO?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Em apenas 3 passos simples você terá acesso ao melhor entretenimento do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/33d84383-c883-447a-96cd-9786baf14114.png" 
                alt="Dispositivos mostrando interface de streaming"
                className="w-full h-auto max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">10K+ avaliações</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white rounded-2xl p-4 shadow-xl">
                <div className="font-bold">99.9%</div>
                <div className="text-xs">Uptime</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* Steps Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="flex items-start gap-6 p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-brand-orange/30 transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/10">
                  {/* Step number */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-3 text-foreground font-montserrat group-hover:text-brand-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <step.icon className="w-8 h-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-brand-orange/50" />
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="pt-8 text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-red-500 hover:from-brand-orange/90 hover:to-red-500/90 text-white text-lg px-8 py-6 rounded-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
              >
                🚀 COMEÇAR TESTE GRÁTIS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
