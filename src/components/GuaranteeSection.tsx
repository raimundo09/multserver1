
import { Shield, CheckCircle, Clock, Headphones, Award, Zap } from 'lucide-react';

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Garantia de 7 Dias",
      description: "Se não ficar satisfeito, devolvemos seu dinheiro"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "100% Funcional",
      description: "Todos os canais testados e funcionando perfeitamente"
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: "Suporte Premium",
      description: "Atendimento especializado 24 horas por dia"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Ativação Imediata",
      description: "Acesso liberado em até 5 minutos após pagamento"
    }
  ];

  return (
    <div className="mt-16 mb-12">
      {/* Selo Principal de Garantia */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl animate-pulse-glow mb-6">
          <Shield className="w-12 h-12 text-white" />
        </div>
        
        <h3 className="text-3xl font-bold text-foreground mb-4">
          <span className="text-green-500">100% Garantido</span> ou seu dinheiro de volta!
        </h3>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Temos tanta confiança na qualidade do nosso serviço que oferecemos garantia total. 
          Experimente sem riscos por 7 dias completos.
        </p>
      </div>

      {/* Grid de Garantias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {guarantees.map((guarantee, index) => (
          <div 
            key={index}
            className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              {guarantee.icon}
            </div>
            
            <h4 className="text-lg font-bold text-foreground mb-2">
              {guarantee.title}
            </h4>
            
            <p className="text-sm text-muted-foreground">
              {guarantee.description}
            </p>
          </div>
        ))}
      </div>

      {/* Selos de Confiança */}
      <div className="mt-12 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="flex items-center space-x-2 px-4 py-2 bg-card/30 rounded-lg">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-semibold text-muted-foreground">Mais de 50.000 clientes</span>
          </div>
          
          <div className="flex items-center space-x-2 px-4 py-2 bg-card/30 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-semibold text-muted-foreground">99.9% de satisfação</span>
          </div>
          
          <div className="flex items-center space-x-2 px-4 py-2 bg-card/30 rounded-lg">
            <Shield className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold text-muted-foreground">Pagamento 100% seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
