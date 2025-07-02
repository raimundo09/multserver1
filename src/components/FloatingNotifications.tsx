import { useState, useEffect } from 'react';
import { Zap, User, MapPin, Clock, CheckCircle } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  plan: string;
  planValue: string;
  city: string;
  timeAgo: string;
}

const FloatingNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentId, setCurrentId] = useState(1);

  const names = [
    'João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa', 'Carlos Ferreira',
    'Lucia Almeida', 'Roberto Lima', 'Fernanda Souza', 'Diego Martins', 'Camila Rocha',
    'Bruno Barbosa', 'Julia Nascimento', 'Ricardo Gomes', 'Beatriz Cardoso', 'Felipe Torres',
    'Mariana Ribeiro', 'Eduardo Pereira', 'Larissa Silva', 'Gabriel Santos', 'Rafaela Costa',
    'Lucas Moreira', 'Amanda Rodrigues', 'Thiago Carvalho', 'Priscila Mendes', 'Rafael Araújo',
    'Isabela Nunes', 'Guilherme Freitas', 'Natália Castro', 'Vinicius Dias', 'Caroline Lopes',
    'André Machado', 'Letícia Vieira', 'Gustavo Ramos', 'Patrícia Campos', 'Rodrigo Azevedo',
    'Vanessa Teixeira', 'Mateus Correia', 'Aline Monteiro', 'Daniel Reis', 'Jéssica Pinto',
    'Fernando Moura', 'Tatiane Borges', 'Leandro Farias', 'Bruna Cavalcanti', 'Márcio Coelho',
    'Adriana Nogueira', 'Paulo Silveira', 'Renata Miranda', 'Fábio Cunha', 'Cláudia Vargas'
  ];

  const plans = [
    { name: 'Plano Econômico', value: 'R$ 30,00' },
    { name: 'Plano Super Econômico', value: 'R$ 75,00' }, 
    { name: 'Plano Mega Econômico', value: 'R$ 110,00' },
    { name: 'Plano Ultra Econômico', value: 'R$ 184,90' }
  ];

  const cities = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Salvador, BA',
    'Brasília, DF', 'Fortaleza, CE', 'Curitiba, PR', 'Recife, PE', 'Porto Alegre, RS',
    'Manaus, AM', 'Belém, PA', 'Goiânia, GO', 'Guarulhos, SP', 'Campinas, SP'
  ];

  const timeOptions = ['2 min atrás', '5 min atrás', '8 min atrás', '12 min atrás', '15 min atrás'];

  const formatName = (fullName: string) => {
    const parts = fullName.split(' ');
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1].charAt(0)}.`;
    }
    return fullName;
  };

  // Função para gerar cor de gradiente baseada no nome
  const getAvatarGradient = (name: string) => {
    const colors = [
      'from-brand-blue via-brand-purple to-brand-orange',
      'from-brand-purple via-brand-blue to-brand-orange',
      'from-brand-orange via-brand-blue to-brand-purple',
      'from-brand-blue via-brand-orange to-brand-purple',
    ];
    return colors[name.charCodeAt(0) % colors.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedPlan = plans[Math.floor(Math.random() * plans.length)];
      const fullName = names[Math.floor(Math.random() * names.length)];
      
      const newNotification: Notification = {
        id: currentId,
        name: formatName(fullName),
        plan: selectedPlan.name,
        planValue: selectedPlan.value,
        city: cities[Math.floor(Math.random() * cities.length)],
        timeAgo: timeOptions[Math.floor(Math.random() * timeOptions.length)]
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 0)]); // Apenas 1 notificação por vez
      setCurrentId(prev => prev + 1);

      // Remove notification after 8 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 8000);
    }, 8000 + Math.random() * 4000); // Intervalo entre 8-12 segundos

    return () => clearInterval(interval);
  }, [currentId]);

  return (
    <div className="fixed bottom-6 left-6 z-30 space-y-3 max-w-xs">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-brand-blue/30 rounded-2xl shadow-2xl p-4 max-w-[320px] animate-fade-in overflow-hidden group hover:scale-105 transition-all duration-300"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/5 rounded-2xl"></div>
          {/* Selo animado */}
          <div className="absolute top-2 right-2 flex items-center gap-1">
            <CheckCircle className="w-5 h-5 text-brand-green animate-pulse-slow" />
            <span className="text-xs font-bold text-brand-green animate-pulse-slow">Novo Cliente</span>
          </div>
          <div className="relative z-10 flex items-start gap-3">
            {/* Avatar com iniciais e gradiente */}
            <div className={`flex-shrink-0 mt-0.5 w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarGradient(notification.name)} flex items-center justify-center shadow-lg`}>
              <span className="text-white font-bold text-lg select-none">
                {notification.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-bold text-gray-900 truncate">
                  {notification.name}
                </p>
              </div>
              <div className="mb-2">
                <p className="text-xs text-gray-600 font-medium mb-1 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-brand-blue" /> Acabou de assinar
                </p>
                <div className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse-slow">
                  {notification.plan}
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-blue" />
                  <span className="font-medium text-xs">{notification.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-blue" />
                  <span className="font-medium text-xs">{notification.timeAgo}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-brand-green/10 to-brand-blue/10 rounded-lg p-2 border border-brand-green/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-green font-medium">Valor:</span>
                  <span className="text-lg font-bold text-brand-green animate-pulse">{notification.planValue}</span>
                </div>
              </div>
              {/* Botão de ação */}
              <button
                onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20assinar%20o%20MULT%20SERVER!', '_blank')}
                className="mt-3 w-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange text-white text-xs font-bold py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300 animate-glow"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange rounded-b-2xl"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingNotifications;
