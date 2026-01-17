import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/221771724547"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;
