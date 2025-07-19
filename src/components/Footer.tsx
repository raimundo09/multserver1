import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  return <footer id="contato" className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/multserver-logo.png" alt="MULT SERVER Logo" style={{ height: '72px', width: 'auto', objectFit: 'contain', background: 'transparent', filter: 'drop-shadow(0 0 16px #00CFFF)' }} />
            </div>
            <p className="text-gray-300 leading-relaxed">
              A melhor plataforma de IPTV do Brasil. Entretenimento sem limites com qualidade excepcional.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="p-2 border-gray-600 hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 border-gray-600 hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-blue">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-300 hover:text-brand-blue transition-colors">Início</a></li>
              <li><a href="#planos" className="text-gray-300 hover:text-brand-blue transition-colors">Planos</a></li>
              <li><a href="#recursos" className="text-gray-300 hover:text-brand-blue transition-colors">Recursos</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-brand-blue transition-colors">Contato</a></li>
              <li>
                <a href="https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                  Teste Grátis
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-blue">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="/help-center" className="text-gray-300 hover:text-brand-blue transition-colors">Central de Ajuda</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-brand-blue transition-colors">FAQ</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-brand-blue transition-colors">Política de Privacidade</a></li>
              <li><a href="/terms-of-service" className="text-gray-300 hover:text-brand-blue transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-blue">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">(11) 97212-1789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">contato@multserver.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange hover:from-brand-purple hover:to-brand-blue text-white font-semibold py-3" onClick={() => window.open('https://wa.me/5511972121789?text=Olá!%20Gostaria%20de%20mais%20informações', '_blank')}>
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MULT SERVER. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Feito com ❤️ no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;