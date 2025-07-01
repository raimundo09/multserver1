
import { useState } from 'react';
import { Play, Tv, Smartphone, Monitor, X } from 'lucide-react';

const DemoGallery = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'netflix',
      title: 'Netflix & Séries',
      description: 'Milhares de filmes e séries em 4K',
      icon: <Tv className="w-6 h-6" />,
      image: '/lovable-uploads/f0d46198-26b6-4f09-bef6-61b8305f4ee7.png',
      features: ['Catálogo completo Netflix', 'Séries exclusivas', 'Filmes 4K HDR', 'Legendas em português']
    },
    {
      id: 'sports',
      title: 'Esportes ao Vivo',
      description: 'Todos os campeonatos e jogos',
      icon: <Monitor className="w-6 h-6" />,
      image: '/lovable-uploads/27032849-96c2-494b-b2f4-d90062a03491.png',
      features: ['Brasileirão', 'Champions League', 'Premier League', 'UFC e Lutas']
    },
    {
      id: 'kids',
      title: 'Infantil',
      description: 'Conteúdo seguro para crianças',
      icon: <Smartphone className="w-6 h-6" />,
      image: '/lovable-uploads/57ef3347-122a-4eb5-8474-6b8dacb9af13.png',
      features: ['Disney+', 'Cartoon Network', 'Nickelodeon', 'Conteúdo educativo']
    },
    {
      id: 'international',
      title: 'Canais Internacionais',
      description: 'Conteúdo do mundo todo',
      icon: <Play className="w-6 h-6" />,
      image: '/lovable-uploads/f70aabfa-73ac-4848-a355-0f914ec1c2b5.png',
      features: ['Canais americanos', 'Europeus', 'Documentários', 'Notícias globais']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-6">
            <Play className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Demonstração</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja nosso <span className="gradient-text">conteúdo</span> em ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa vasta biblioteca de conteúdo premium em diferentes categorias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {demos.map((demo) => (
            <div 
              key={demo.id}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => setSelectedDemo(demo.id)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  {demo.icon}
                </div>
                <h3 className="font-bold text-foreground">{demo.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm">{demo.description}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDemo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {demos.find(d => d.id === selectedDemo)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedDemo(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={demos.find(d => d.id === selectedDemo)?.image} 
                    alt={demos.find(d => d.id === selectedDemo)?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Conteúdo disponível:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    onClick={() => window.open('https://wa.me/5511972121789?text=Vi%20a%20demonstração%20e%20quero%20assinar!', '_blank')}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                  >
                    🚀 QUERO ASSINAR AGORA
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoGallery;
