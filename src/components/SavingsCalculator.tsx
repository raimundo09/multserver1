
import { useState } from 'react';
import { Calculator, TrendingDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SavingsCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { name: 'Netflix', price: 55.90 },
    { name: 'Amazon Prime', price: 19.90 },
    { name: 'Disney+', price: 33.90 },
    { name: 'HBO Max', price: 34.90 },
    { name: 'Paramount+', price: 19.90 },
    { name: 'Apple TV+', price: 9.90 },
    { name: 'Globoplay', price: 24.90 },
    { name: 'TV a Cabo', price: 120.00 }
  ];

  const ourPlans = [
    { name: 'Econômico', price: 30, period: '1 mês' },
    { name: 'Super Econômico', price: 25, period: '3 meses' },
    { name: 'Mega Econômico', price: 18.33, period: '6 meses' },
    { name: 'Ultra Econômico', price: 15.41, period: '1 ano' }
  ];

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const totalCost = selectedServices.reduce((sum, serviceName) => {
    const service = services.find(s => s.name === serviceName);
    return sum + (service?.price || 0);
  }, 0);

  const getSavings = (planPrice: number) => totalCost - planPrice;
  const getSavingsPercentage = (planPrice: number) => 
    totalCost > 0 ? ((getSavings(planPrice) / totalCost) * 100) : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/30 rounded-full px-6 py-3 mb-6">
            <Calculator className="w-5 h-5 text-brand-orange" />
            <span className="text-sm font-medium text-brand-orange">Calculadora de Economia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra quanto você pode <span className="gradient-text">economizar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare os custos dos serviços que você usa hoje com nossos planos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Services Selection */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand-orange" />
              Selecione seus serviços atuais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => toggleService(service.name)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                    selectedServices.includes(service.name)
                      ? 'border-brand-orange bg-brand-orange/20 shadow-lg'
                      : 'border-gray-600 bg-white/5 hover:border-gray-500'
                  }`}
                >
                  <div className="font-semibold">{service.name}</div>
                  <div className="text-sm text-gray-300">R$ {service.price.toFixed(2)}/mês</div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-red-500/20 rounded-xl border border-red-500/30">
              <div className="text-lg font-bold">Gasto Total Atual</div>
              <div className="text-3xl font-bold text-red-400">
                R$ {totalCost.toFixed(2)}<span className="text-lg">/mês</span>
              </div>
            </div>
          </div>

          {/* Savings Results */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingDown className="w-6 h-6 text-green-400" />
                Sua economia com MULT SERVER
              </h3>
              
              {ourPlans.map((plan, index) => (
                <div key={index} className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{plan.name}</span>
                    <span className="text-sm text-gray-300">({plan.period})</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-300">Economia mensal</div>
                      <div className="text-xl font-bold text-green-400">
                        R$ {getSavings(plan.price).toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Economia</div>
                      <div className="text-xl font-bold text-green-400">
                        {getSavingsPercentage(plan.price).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalCost > 0 && (
              <div className="text-center">
                <div className="mb-4 p-4 bg-gradient-to-r from-brand-orange to-red-600 rounded-xl">
                  <div className="text-sm text-white/90">Economia anual com nosso melhor plano</div>
                  <div className="text-3xl font-bold text-white">
                    R$ {(getSavings(15.41) * 12).toFixed(2)}
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5511972121789?text=Vi%20a%20calculadora%20e%20quero%20economizar!', '_blank')}
                >
                  💰 QUERO ECONOMIZAR
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
