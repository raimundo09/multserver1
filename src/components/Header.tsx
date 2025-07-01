import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determina se rolou para baixo ou para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Esconde quando rola para baixo
      } else {
        setIsVisible(true); // Mostra quando rola para cima
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo aumentado */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/multserver-logo.png"
              alt="MULT SERVER Logo"
              style={{ height: '100px', width: 'auto', objectFit: 'contain', background: 'transparent' }}
              className="transition-all duration-300 hover:scale-110"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#planos", label: "Planos" },
              { href: "#recursos", label: "Recursos" },
              { href: "#contato", label: "Contato" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-foreground hover:text-orange-500 transition-colors font-medium group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="relative border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 overflow-hidden group"
              onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
            >
              <span className="relative z-10">Teste Grátis</span>
              <div className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            <Button className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 overflow-hidden">
              <span className="relative z-10">Assinar Agora</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 text-foreground hover:text-orange-500 transition-colors duration-300 group"
            onClick={toggleMenu}
          >
            <div className="absolute inset-0 bg-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="relative z-10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 bg-background/95 backdrop-blur-xl rounded-lg border border-border/20">
            <nav className="flex flex-col space-y-1 mt-6 px-4">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#planos", label: "Planos" },
                { href: "#recursos", label: "Recursos" },
                { href: "#contato", label: "Contato" }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="relative px-4 py-3 text-foreground hover:text-orange-500 transition-colors font-medium rounded-lg hover:bg-orange-500/10" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-6">
                <Button 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold rounded-full transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
                >
                  Teste Grátis
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300">
                  Assinar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
