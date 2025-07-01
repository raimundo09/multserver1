
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/5511972121789?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20planos', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-full shadow-2xl transition-transform duration-300 hover:scale-110"
      >
        <img src="/lovable-uploads/1ba5d797-1bd8-4422-9a98-19e870977cd2.png" alt="Fale conosco no WhatsApp" className="w-16 h-16" />
        
        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 -z-10"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10 -z-10" style={{ animationDelay: '0.5s' }}></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
