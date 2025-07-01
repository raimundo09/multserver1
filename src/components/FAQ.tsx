
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "POSSO TESTAR ANTES DE ASSINAR?",
      answer: "Sim! Disponibilizamos um teste grátis de 12 horas, justamente para você poder conhecer todos os nossos canais, filmes e séries e também para você ver como irá rodar na sua internet. Veja nossos tutoriais antes de solicitar seu teste."
    },
    {
      question: "COMO FUNCIONA O PAGAMENTO?",
      answer: "Possuímos planos mensais, onde você pode renovar livremente. Assim como também possuímos planos mais longos como os anuais com grandes descontos, o poder de escolha é seu. Aceitamos PIX, cartão de crédito e boleto bancário."
    },
    {
      question: "COMO FUNCIONA AS RENOVAÇÕES?",
      answer: "Nossas assinaturas não possuem taxas, multas ou fidelidades, podendo ser cancelado a qualquer momento. Você recebe lembrete antes do vencimento e pode renovar facilmente pelo WhatsApp."
    },
    {
      question: "POSSO ASSISTIR EM MAIS DE UMA TELA?",
      answer: "Você pode configurar seu login em diversos dispositivos, porém não poderá ver simultâneamente em duas telas sem adquirir o ponto extra. Adquira o ponto extra para ver em mais de uma tela ao mesmo tempo."
    },
    {
      question: "QUAIS DISPOSITIVOS SÃO COMPATÍVEIS?",
      answer: "Nossa plataforma funciona em Smart TVs (Samsung, LG, Sony), celulares Android e iOS, tablets, notebooks, computadores, TV Box, Chromecast, Fire TV Stick e muito mais!"
    },
    {
      question: "A QUALIDADE É REALMENTE 4K?",
      answer: "Sim! Oferecemos conteúdo em Full HD e 4K quando disponível. A qualidade varia conforme sua internet - recomendamos pelo menos 10MB para 4K e 5MB para Full HD."
    },
    {
      question: "POSSO USAR FORA DO BRASIL?",
      answer: "Sim, você pode usar nosso serviço em qualquer lugar do mundo, desde que tenha uma conexão estável com a internet. Ideal para brasileiros no exterior!"
    },
    {
      question: "COMO É O SUPORTE TÉCNICO?",
      answer: "Oferecemos suporte 24/7 via WhatsApp. Nossa equipe técnica especializada está sempre pronta para ajudar com instalação, configuração e resolução de problemas."
    },
    {
      question: "HÁ LIMITE DE DADOS OU BANDA?",
      answer: "Não há limite de dados da nossa parte. O consumo depende da sua operadora de internet. Recomendamos internet banda larga para melhor experiência."
    },
    {
      question: "COMO FAÇO A INSTALAÇÃO?",
      answer: "É muito simples! Após a compra, enviamos um tutorial completo via WhatsApp com passo a passo para seu dispositivo. Também oferecemos suporte durante a instalação."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground font-montserrat">
            DÚVIDAS <span className="text-primary">FREQUENTES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-card/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-card/70 transition-colors duration-300"
              >
                <h3 className="text-lg font-black text-foreground font-montserrat pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511972121789?text=Tenho%20algumas%20dúvidas%20sobre%20os%20planos', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
          >
            💬 FALAR NO WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
