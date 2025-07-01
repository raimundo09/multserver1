
import { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define o fim da oferta para 24 horas a partir de agora
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Reinicia para mais 24 horas quando acabar
        clearInterval(timer);
        window.location.reload();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 mb-8">
      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-2xl animate-pulse-glow">
        <div className="text-center text-white">
          <div className="flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 mr-2 animate-bounce" />
            <span className="text-lg font-bold">OFERTA LIMITADA</span>
            <Zap className="w-6 h-6 ml-2 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs mt-1">HORAS</div>
            </div>
            
            <div className="text-2xl font-bold">:</div>
            
            <div className="text-center">
              <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs mt-1">MINUTOS</div>
            </div>
            
            <div className="text-2xl font-bold">:</div>
            
            <div className="text-center">
              <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2 min-w-[60px] animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs mt-1">SEGUNDOS</div>
            </div>
          </div>
          
          <div className="mt-2 text-sm opacity-90">
            ⚡ Preços promocionais válidos apenas hoje!
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
