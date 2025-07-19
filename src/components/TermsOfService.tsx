import { FileText, CheckCircle, AlertTriangle, Shield, Users, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  const lastUpdated = "15 de Janeiro de 2024";

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Aceitação dos Termos",
      content: [
        "Ao acessar e usar os serviços da MULT SERVER, você concorda em cumprir estes Termos de Uso.",
        "Estes termos constituem um acordo legal entre você e a MULT SERVER.",
        "Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.",
        "Reservamo-nos o direito de modificar estes termos a qualquer momento.",
        "O uso continuado após mudanças constitui aceitação dos novos termos."
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Descrição do Serviço",
      content: [
        "A MULT SERVER oferece serviços de streaming de conteúdo audiovisual.",
        "Incluímos canais de TV ao vivo, filmes, séries e conteúdo sob demanda.",
        "O acesso é fornecido através de aplicativos compatíveis com diversos dispositivos.",
        "A qualidade do streaming depende da velocidade da sua conexão com a internet.",
        "Oferecemos diferentes planos com variações de preço e recursos.",
        "Teste grátis disponível por 12 horas para novos usuários."
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Uso Aceitável",
      content: [
        "Uso pessoal e não comercial dos serviços.",
        "Respeito aos direitos autorais e propriedade intelectual.",
        "Não compartilhamento de credenciais com terceiros.",
        "Uso responsável da largura de banda.",
        "Não utilização para atividades ilegais.",
        "Respeito às políticas de uso justo."
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Uso Proibido",
      content: [
        "Compartilhamento de conta com múltiplas pessoas simultaneamente.",
        "Redistribuição ou revenda do conteúdo.",
        "Uso para fins comerciais sem autorização.",
        "Tentativas de contornar medidas de segurança.",
        "Uso de VPNs ou proxies para evadir restrições geográficas.",
        "Atividades que possam prejudicar outros usuários."
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Responsabilidades do Usuário",
      content: [
        "Manter a confidencialidade das credenciais de acesso.",
        "Notificar imediatamente sobre uso não autorizado.",
        "Usar apenas dispositivos e conexões seguras.",
        "Respeitar os direitos de propriedade intelectual.",
        "Não interferir no funcionamento dos serviços.",
        "Cumprir todas as leis aplicáveis."
      ]
    }
  ];

  const limitations = [
    "Serviço disponível apenas em território brasileiro",
    "Qualidade do streaming depende da conexão com a internet",
    "Alguns conteúdos podem ter restrições geográficas",
    "Serviço pode ser interrompido para manutenção",
    "Não garantimos disponibilidade 24/7 absoluta",
    "Conteúdo pode ser alterado sem aviso prévio"
  ];

  const cancellation = [
    "Cancelamento pode ser feito a qualquer momento",
    "Não há taxa de cancelamento ou multa",
    "Acesso permanece ativo até o final do período pago",
    "Reembolso proporcional para planos anuais",
    "Dados da conta são excluídos após 30 dias",
    "Possibilidade de reativação a qualquer momento"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-dark to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange bg-clip-text text-transparent">
              Termos de Uso
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Leia atentamente estes termos antes de usar nossos serviços. 
            Eles estabelecem as regras e responsabilidades para o uso da plataforma MULT SERVER.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Última atualização: {lastUpdated}</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Bem-vindo à MULT SERVER
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Estes Termos de Uso ("Termos") regem o uso dos serviços oferecidos pela MULT SERVER 
            ("nós", "nosso", "serviço"). Ao usar nossos serviços, você concorda em cumprir estes termos 
            e todas as leis e regulamentos aplicáveis.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Recomendamos que você leia estes termos cuidadosamente e mantenha uma cópia para referência futura. 
            Se você tiver dúvidas sobre estes termos, entre em contato conosco.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Limitations */}
        <div className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange rounded-3xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Limitações do Serviço
          </h2>
          <p className="text-lg text-white/90 mb-8">
            É importante entender as limitações e restrições de nossos serviços:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {limitations.map((limitation, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="font-medium">{limitation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Política de Cancelamento
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Entendemos que suas necessidades podem mudar. Nossa política de cancelamento é transparente e justa:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cancellation.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Dúvidas sobre os Termos?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Se você tiver dúvidas sobre estes Termos de Uso ou precisar de esclarecimentos, 
            nossa equipe está pronta para ajudar:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Telefone</h3>
                <p className="text-gray-300">(11) 97212-1789</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">E-mail</h3>
                <p className="text-gray-300">termos@multserver.com.br</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => window.open('https://wa.me/5511972121789?text=Tenho%20dúvidas%20sobre%20os%20termos%20de%20uso', '_blank')}
              className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange hover:from-brand-purple hover:to-brand-blue text-white font-semibold px-8 py-3 rounded-xl"
            >
              Falar com Nossa Equipe
            </Button>
          </div>
        </div>

        {/* Final Notes */}
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-semibold text-blue-300 mb-4">
            📋 Aceitação dos Termos
          </h3>
          <p className="text-blue-200 leading-relaxed">
            Ao usar nossos serviços, você confirma que leu, entendeu e concorda com estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços. 
            O uso continuado constitui aceitação de quaisquer modificações futuras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService; 