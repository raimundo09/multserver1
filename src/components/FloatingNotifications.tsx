
import { useState, useEffect } from 'react';
import { Zap, User, MapPin, Clock } from 'lucide-react';

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
          className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-orange-200/30 rounded-xl shadow-xl p-3 max-w-[280px] animate-slide-in-left overflow-hidden group hover:scale-105 transition-all duration-300"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-transparent rounded-xl"></div>
          
          <div className="relative z-10 flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-orange-600" />
                </div>
                <p className="text-xs font-bold text-gray-800 truncate">
                  {notification.name}
                </p>
              </div>
              
              <div className="mb-2">
                <p className="text-xs text-gray-600 font-medium mb-1">
                  ✨ Acabou de assinar
                </p>
                
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-md text-xs font-bold shadow-md">
                  {notification.plan}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-500" />
                  <span className="font-medium text-xs">{notification.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-orange-500" />
                  <span className="font-medium text-xs">{notification.timeAgo}</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-2 border border-green-200/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-700 font-medium">Valor:</span>
                  <span className="text-sm font-bold text-green-600">{notification.planValue}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success indicator */}
          <div className="absolute top-2 left-2">
            <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-lg animate-pulse">
              <div className="w-full h-full bg-white/30 rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-b-xl"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingNotifications;
