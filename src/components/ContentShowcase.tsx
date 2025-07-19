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
        <div className="relative overflow-hidden rounded-3xl mb-16 shadow-2xl border-0">
          {/* Fundo gradiente com blur decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-purple to-red-600 opacity-90 blur-[2px] z-0"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-12">
            {/* Lado esquerdo: Benefícios */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white drop-shadow-lg">Qualidade Excepcional</h3>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">Transmissão em 4K sem travamentos, sem anúncios e com suporte 24/7</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-2 bg-white/10 rounded-xl p-4 min-h-[80px] min-w-0 w-full shadow-md hover:scale-105 transition-transform border border-white/20 text-center break-words">
                    <div className="w-7 h-7 bg-green-500/90 rounded-full flex items-center justify-center shadow mb-1">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="font-semibold text-white text-sm md:text-base drop-shadow break-words leading-tight">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Lado direito: Headline, logo e botão */}
            <div className="flex flex-col items-center justify-center relative py-8 px-2 md:py-12 min-h-[340px] md:min-h-[420px] w-full max-w-lg mx-auto">
              {/* Logo menor e mais integrado */}
              <div className="relative z-10 flex flex-col items-center justify-center mb-4">
                <img src="/lovable-uploads/multserver-logo.png" alt="MULT SERVER Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-xl" />
              </div>
              {/* Headline moderna */}
              <div className="relative z-10 mb-2 text-center">
                <h3 className="text-2xl md:text-4xl font-black text-white drop-shadow-lg">
                  Streaming sem limites, <span className="text-yellow-400">só na MULT SERVER</span>
                </h3>
              </div>
              {/* Subheadline */}
              <div className="relative z-10 mb-4">
                <p className="text-base md:text-xl text-white font-bold max-w-md mx-auto drop-shadow">
                  Assista tudo em alta qualidade, sem travamentos, em qualquer lugar.<br className='hidden md:block' />
                  <span className='text-yellow-400 font-extrabold block mt-1'>Experimente grátis agora!</span>
                </p>
              </div>
              {/* Seta animada */}
              <div className="relative z-10 flex flex-col items-center mb-2">
                <svg className="w-7 h-7 md:w-9 md:h-9 text-brand-orange animate-bounce mb-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" /></svg>
              </div>
              {/* Botão moderno com gradiente animado */}
              <Button 
                size="lg" 
                className="relative mt-2 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange hover:from-brand-purple hover:to-brand-blue text-white text-lg md:text-xl px-8 md:px-14 py-3 md:py-5 rounded-2xl font-extrabold shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 animate-glow flex items-center gap-3 focus:ring-4 focus:ring-brand-orange/40 focus:outline-none group border-0"
                style={{ boxShadow: '0 8px 32px 0 rgba(0,207,255,0.18)' }}
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
