import { Play, Star, Tv, Film, MonitorPlay, Monitor, Smartphone, Tablet, Tv as TvIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContentShowcase = () => {
  const contentCategories = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Canais Ao Vivo",
      description: "Mais de 50.000 canais de TV",
      items: ["Globo", "SBT", "Record", "Band", "ESPN", "Fox Sports", "Discovery", "National Geographic"]
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Filmes",
      description: "Lançamentos e clássicos",
      items: ["Marvel", "DC Comics", "Ação", "Terror", "Comédia", "Drama", "Aventura", "Ficção"]
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Séries",
      description: "Séries nacionais e internacionais",
      items: ["Netflix", "Amazon Prime", "HBO", "Disney+", "Apple TV+", "Paramount+", "Globoplay", "SBT Play"]
    }
  ];

  const qualityFeatures = [
    { label: "4K Ultra HD", available: true },
    { label: "Full HD 1080p", available: true },
    { label: "HD 720p", available: true },
    { label: "Sem Travamentos", available: true },
    { label: "Sem Anúncios", available: true },
    { label: "Multiplataforma", available: true }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Conteúdo Ilimitado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesse milhares de filmes, séries e canais de TV com a melhor qualidade do mercado
          </p>
        </div>

        {/* Content Categories */}
        <div className="relative flex flex-col items-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {contentCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-blue via-brand-purple to-brand-orange rounded-3xl p-8 shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 hover:scale-105 border-2 border-brand-blue/30 group relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="text-white mb-4 text-4xl animate-bounce-slow drop-shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black mb-2 text-white font-montserrat group-hover:text-brand-blue transition-colors duration-300 drop-shadow">{category.title}</h3>
                <p className="text-white/90 mb-6 font-medium drop-shadow">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-brand-blue hover:text-white transition-colors duration-200 cursor-pointer border border-white/30">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* E MUITO + */}
          <div className="mt-10 flex flex-col items-center">
            <span className="uppercase tracking-widest text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange animate-pulse-slow drop-shadow-lg">E MUITO +</span>
            <span className="mt-2 text-lg text-brand-blue font-semibold">Descubra um universo de entretenimento exclusivo!</span>
          </div>
        </div>

        {/* Quality Features */}
        <div className="bg-gradient-to-r from-brand-orange to-red-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Qualidade Excepcional
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Transmissão em 4K sem travamentos, sem anúncios e com suporte 24/7
              </p>
              <div className="grid grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center relative py-12 min-h-[380px] md:min-h-[420px] w-full max-w-xl mx-auto">
              {/* Glow animado e gradiente de fundo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-orange blur-[120px] opacity-80 animate-pulse-slow"></div>
              </div>
              {/* Logo central com glow e destaque */}
              <div className="relative z-10 flex flex-col items-center justify-center mb-8 animate-glow">
                <img src="/lovable-uploads/multserver-logo.png" alt="MULT SERVER Logo" className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 64px #00CFFF)' }} />
              </div>
              {/* Headline impactante */}
              <div className="relative z-10 mb-2">
                <h3 className="text-3xl md:text-5xl font-black text-center bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                  <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">Streaming sem limites, só na MULT SERVER</span>
                </h3>
              </div>
              {/* Subheadline persuasiva */}
              <div className="relative z-10 mb-6">
                <p className="text-lg md:text-2xl text-center text-white font-bold max-w-md mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                  Assista tudo em alta qualidade, sem travamentos, em qualquer lugar.<br className='hidden md:block' />
                  <span className='text-brand-orange font-extrabold'>Experimente grátis agora!</span>
                </p>
              </div>
              {/* Seta animada para o botão */}
              <div className="relative z-10 flex flex-col items-center mb-2">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-brand-orange animate-bounce mb-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" /></svg>
              </div>
              {/* Botão de ação moderno e animado */}
              <Button 
                size="lg" 
                className="relative mt-2 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange hover:from-brand-purple hover:to-brand-blue text-white text-lg md:text-2xl px-8 md:px-16 py-4 md:py-6 rounded-2xl font-extrabold shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 animate-glow flex items-center gap-3 focus:ring-4 focus:ring-brand-orange/40 focus:outline-none group"
                style={{ boxShadow: '0 8px 32px 0 rgba(0,207,255,0.25)' }}
                onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
              >
                <span className="text-2xl group-hover:animate-wiggle">🚀</span> Testar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
