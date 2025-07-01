import { Button } from '@/components/ui/button';
import { Play, Download, Star, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente mais suave */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/e5c16884-5b6e-4c26-9cff-7ba4182d1256.png')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Efeitos decorativos mais sutis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-left space-y-8">
            {/* Badge de confiança */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white animate-glow mt-12">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Mais de 50.000 clientes satisfeitos</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white font-montserrat">
                <span className="text-white">A MELHOR</span>
                <br />
                <span className="text-brand-orange">EXPERIÊNCIA</span>
                <br />
                <span className="text-white">DE STREAMING</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed">
                Milhares de filmes, séries e canais em <span className="text-brand-orange font-bold">qualidade 4K</span>. 
                Assista quando e onde quiser, sem anúncios e sem travamentos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-black text-brand-orange">50K+</div>
                <div className="text-sm text-white/80">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brand-orange">99.9%</div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-brand-orange">24/7</div>
                <div className="text-sm text-white/80">Suporte</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-6 rounded-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow" 
                onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20assinar', '_blank')}
              >
                🚀 QUERO ASSINAR
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300" 
                onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
              >
                ✨ TESTE GRÁTIS
              </Button>
            </div>
          </div>

          {/* Right Column - Card de destaque */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl animate-float">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-orange to-red-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-white space-y-4">
                    <h3 className="text-2xl font-bold">Comece Agora</h3>
                    <p className="text-white/80">Teste grátis por 24 horas</p>
                    
                    <div className="flex items-center justify-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-sm text-white/70">4.9/5 baseado em 10.000+ avaliações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
