import { Shield, Lock, Eye, Users, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const lastUpdated = "25 de Junho de 2025";

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Informações que Coletamos",
      content: [
        "Informações de conta (nome, e-mail, telefone)",
        "Dados de pagamento (processados de forma segura)",
        "Informações de uso do serviço",
        "Dados técnicos (IP, dispositivo, navegador)",
        "Comunicações com nosso suporte"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Como Usamos Suas Informações",
      content: [
        "Fornecer e melhorar nossos serviços",
        "Processar pagamentos e renovações",
        "Enviar comunicações importantes",
        "Oferecer suporte técnico",
        "Prevenir fraudes e garantir segurança",
        "Cumprir obrigações legais"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Proteção de Dados",
      content: [
        "Criptografia SSL/TLS para transmissão",
        "Armazenamento seguro em servidores protegidos",
        "Acesso restrito apenas a funcionários autorizados",
        "Monitoramento contínuo de segurança",
        "Backup regular dos dados",
        "Conformidade com LGPD (Lei Geral de Proteção de Dados)"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Compartilhamento de Dados",
      content: [
        "Não vendemos suas informações pessoais",
        "Compartilhamento apenas com provedores de pagamento",
        "Parceiros técnicos para manutenção do serviço",
        "Autoridades quando exigido por lei",
        "Sempre com sua autorização prévia"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Retenção de Dados",
      content: [
        "Dados mantidos enquanto sua conta estiver ativa",
        "Informações de pagamento por 5 anos (obrigação legal)",
        "Logs de acesso por 12 meses",
        "Dados deletados após cancelamento da conta",
        "Direito de solicitar exclusão a qualquer momento"
      ]
    }
  ];

  const rights = [
    "Acessar seus dados pessoais",
    "Corrigir informações incorretas",
    "Solicitar exclusão de dados",
    "Portabilidade dos dados",
    "Revogar consentimento",
    "Solicitar informações sobre uso dos dados"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-dark to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange bg-clip-text text-transparent">
              Política de Privacidade
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Sua privacidade é fundamental para nós. Saiba como protegemos e utilizamos suas informações.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Última atualização: {lastUpdated}</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Compromisso com a Privacidade
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            A MULT SERVER está comprometida em proteger sua privacidade e garantir a segurança de suas informações pessoais. 
            Esta política descreve como coletamos, usamos, protegemos e compartilhamos suas informações quando você utiliza nossos serviços.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Ao usar nossos serviços, você concorda com as práticas descritas nesta política. 
            Recomendamos que você leia atentamente este documento e entre em contato conosco se tiver dúvidas.
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

        {/* Your Rights */}
        <div className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange rounded-3xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Seus Direitos
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Conforme a LGPD, você tem os seguintes direitos relacionados aos seus dados pessoais:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="font-medium">{right}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Se você tiver dúvidas sobre esta política de privacidade ou quiser exercer seus direitos, 
            entre em contato conosco através dos canais abaixo:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-gray-300">privacidade@multserver.com.br</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={() => window.open('https://wa.me/5511972121789?text=Tenho%20dúvidas%20sobre%20a%20política%20de%20privacidade', '_blank')}
              className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange hover:from-brand-purple hover:to-brand-blue text-white font-semibold px-8 py-3 rounded-xl"
            >
              Falar com Nossa Equipe
            </Button>
          </div>
        </div>

        {/* Final Notes */}
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            ⚠️ Importante
          </h3>
          <p className="text-yellow-200 leading-relaxed">
            Esta política pode ser atualizada periodicamente. Recomendamos que você revise regularmente 
            para se manter informado sobre como protegemos suas informações. 
            Alterações significativas serão comunicadas através de nossos canais oficiais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 