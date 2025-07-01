
import { Play, Star, Tv, Film, MonitorPlay } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contentCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="text-brand-orange mb-4">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
              </div>
              <p className="mt-6 text-lg font-semibold">Teste agora gratuitamente!</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-brand-orange to-red-600 hover:from-red-600 hover:to-brand-orange text-white text-lg px-12 py-6 rounded-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://wa.me/5511972121789?text=Quero%20fazer%20um%20TESTE!', '_blank')}
          >
            🎬 COMEÇAR TESTE GRÁTIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
