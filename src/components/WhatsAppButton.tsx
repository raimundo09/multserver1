import React from 'react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511972121789?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20planos%20MULT%20SERVER"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-6 right-6 bg-white p-2 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
    style={{ boxShadow: '0 4px 32px 0 rgba(0, 207, 255, 0.25)' }}
    aria-label="Fale conosco no WhatsApp"
  >
    <img src="/lovable-uploads/whatsapp-logo-gradient.png" alt="WhatsApp" style={{ width: '48px', height: '48px', display: 'block' }} />
  </a>
);

export default WhatsAppButton;
