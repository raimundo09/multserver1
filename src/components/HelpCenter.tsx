import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  Play, 
  Download, 
  Smartphone, 
  Tv, 
  Monitor,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookOpen,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState<number[]>([]);

  const categories = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Primeiros Passos",
      description: "Como começar a usar o MULT SERVER",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Dispositivos",
      description: "Configuração em diferentes aparelhos",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança",
      description: "Dúvidas sobre pagamento e segurança",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Problemas Técnicos",
      description: "Soluções para problemas comuns",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const faqs = [
    {
      question: "Como faço para começar a usar o MULT SERVER?",
      answer: "É muito simples! Primeiro, escolha um plano que melhor atenda suas necessidades. Depois, entre em contato conosco pelo WhatsApp para receber suas credenciais de acesso. Em seguida, baixe o aplicativo compatível com seu dispositivo e faça login. Nossa equipe está sempre pronta para te ajudar em cada etapa!"
    },
    {
      question: "Quais dispositivos são compatíveis?",
      answer: "O MULT SERVER funciona em praticamente todos os dispositivos: Smart TVs (Samsung, LG, Sony), celulares Android e iOS, tablets, notebooks, computadores, TV Box, Chromecast, Fire TV Stick e muito mais! Temos aplicativos específicos para cada plataforma."
    },
    {
      question: "Como funciona o teste grátis?",
      answer: "Oferecemos um teste grátis de 4 horas para você conhecer todos os nossos canais, filmes e séries. Durante o teste, você terá acesso completo a todo o conteúdo para verificar a qualidade e compatibilidade com sua internet. É a melhor forma de conhecer nosso serviço!"
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos PIX (pagamento instantâneo), cartão de crédito e boleto bancário. Todos os pagamentos são processados de forma segura. Você pode escolher entre planos mensais ou anuais, com descontos especiais para planos mais longos."
    },
    {
      question: "Posso assistir em mais de um dispositivo?",
      answer: "Sim! Você pode configurar seu login em diversos dispositivos. Porém, para assistir simultaneamente em mais de uma tela, você precisará adquirir um ponto extra. Isso garante que você tenha a melhor experiência possível em todos os seus aparelhos."
    },
    {
      question: "O que fazer se o conteúdo não carregar?",
      answer: "Primeiro, verifique sua conexão com a internet. Recomendamos pelo menos 10MB para 4K e 5MB para Full HD. Se o problema persistir, reinicie o aplicativo ou dispositivo. Em caso de dúvidas, nossa equipe de suporte está disponível 24/7 pelo WhatsApp."
    }
  ];

  const tutorials = [
    {
      title: "Como instalar no Smart TV",
      duration: "3 min",
      difficulty: "Fácil",
      icon: <Tv className="w-6 h-6" />
    },
    {
      title: "Configuração no Android",
      duration: "2 min",
      difficulty: "Fácil",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Instalação no iPhone/iPad",
      duration: "4 min",
      difficulty: "Médio",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Configuração no PC",
      duration: "5 min",
      difficulty: "Fácil",
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-dark to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange bg-clip-text text-transparent">
              Central de Ajuda
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre respostas rápidas para suas dúvidas e aprenda a usar o MULT SERVER da melhor forma
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              As dúvidas mais comuns dos nossos clientes, respondidas de forma clara e objetiva
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  )}
                </button>
                {openFaq.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Tutoriais em Vídeo
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Aprenda a configurar o MULT SERVER em diferentes dispositivos com nossos tutoriais passo a passo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {tutorial.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tutorial.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tutorial.duration}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tutorial.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' :
                    tutorial.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ainda precisa de ajuda?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Nossa equipe de suporte está disponível 24/7 para te ajudar com qualquer dúvida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 mb-4">Resposta em até 5 minutos</p>
              <Button
                onClick={() => window.open('https://wa.me/5511972121789?text=Preciso%20de%20ajuda%20com%20o%20MULT%20SERVER', '_blank')}
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold"
              >
                Falar no WhatsApp
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-white/80 mb-4">Suporte técnico especializado</p>
              <Button
                onClick={() => window.open('tel:+5511972121789', '_blank')}
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold"
              >
                Ligar Agora
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-white/80 mb-4">Resposta em até 2 horas</p>
              <Button
                onClick={() => window.open('mailto:suporte@multserver.com.br', '_blank')}
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold"
              >
                Enviar E-mail
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white/90">Suporte disponível 24/7</span>
            </div>
            <p className="text-white/80">
              Tempo médio de resposta: <span className="font-semibold">2 minutos</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter; 