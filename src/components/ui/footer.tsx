import { MessageCircle, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../../lib/utils';

export function Footer() {
  const handleFooterWhatsApp = createWhatsAppHandler(WHATSAPP_MESSAGES.FOOTER_CONTACT);
  const handlePhoneWhatsApp = createWhatsAppHandler(WHATSAPP_MESSAGES.PHONE_CONTACT);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uniform border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Prosperity Company" className="h-8 w-auto" />
              <div className="text-lg font-semibold">
                <span className="gradient-text">Prosperity</span>
                <span className="text-gray-300 ml-1">Company</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos negócios através de estratégias de marketing digital 
              que geram resultados reais e sustentáveis.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">SEO Avançado</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Performance Ads</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Gestão de Redes</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Design & Criação</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#differentials" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-red-500 shrink-0" />
                <span className="text-gray-400">Florianópolis, SC</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-red-500 shrink-0" />
                <button 
                  onClick={handlePhoneWhatsApp}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (48) 92009-9966
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-red-500 shrink-0" />
                <a href="mailto:contato@prosperitycompany.com" className="text-gray-400 hover:text-white transition-colors">
                  contato@prosperitycompany.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social media and copyright */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Prosperity Company. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleFooterWhatsApp}
              className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
              aria-label="Contatar via WhatsApp"
            >
              <MessageCircle size={16} />
            </button>
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 