import { useState, useEffect } from 'react';
import { Button } from './button';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { createWhatsAppHandler, WHATSAPP_MESSAGES } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Lista de links da navegação
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  // Detecta o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fecha o menu móvel quando um link é clicado
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Controla o scroll do body quando menu móvel está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handlers para WhatsApp
  const handleWhatsAppContact = createWhatsAppHandler(WHATSAPP_MESSAGES.CONTACT_GENERAL);
  const handlePhoneWhatsApp = createWhatsAppHandler(WHATSAPP_MESSAGES.PHONE_CONTACT);

  // Função para fechar o menu mobile
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handler para clique no overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMobileMenu();
    }
  };

  // Classes para background responsivo e adequado
  const getNavbarClasses = () => {
    if (isMobile) {
      // No mobile, sempre usar background sólido para melhor legibilidade
      return 'backdrop-blur-md bg-transparent border-b border-white/10';
    } else {
      // No desktop, usar lógica original
      return isScrolled 
        ? 'backdrop-blur-md bg-transparent border-b border-white/5' 
        : 'bg-transparent';
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarClasses()}`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3" aria-label="Prosperity Company">
              <img 
                src="/logo.png" 
                alt="Prosperity Company" 
                className="h-8 w-auto object-contain"
              />
              <div className="text-lg font-semibold">
                <span className="text-red-500">Santa</span>
                <span className="text-blue-500 ml-1 font-normal hidden sm:inline">Luzia</span>
              </div>
            </a>

            {/* Links de navegação - Desktop */}
            <nav className="hidden md:flex items-center space-x-1" role="navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm text-blue-500 hover:text-blue-900 transition-colors duration-200 rounded-md"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Botões de ação - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handlePhoneWhatsApp}
                className="p-2 text-blue-500 hover:text-blue-900 transition-colors duration-200 rounded-md"
                aria-label="Entrar em contato via WhatsApp"
              >
                <Phone size={18} />
              </button>
              <Button 
                size="sm"
                onClick={handleWhatsAppContact}
                className="btn-primary h-9 px-4 text-sm"
                aria-label="Entrar em contato via WhatsApp"
              >
                Fale conosco
              </Button>
            </div>

            {/* Botões mobile */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handlePhoneWhatsApp}
                className="p-2 text-white hover:text-gray-200 transition-colors duration-200 rounded-md bg-white/10 hover:bg-white/20"
                aria-label="Entrar em contato via WhatsApp"
              >
                <Phone size={18} />
              </button>
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/20 transition-colors duration-200 bg-white/10"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu móvel - Overlay completo */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] md:hidden"
          onClick={handleOverlayClick}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-transparent backdrop-blur-md" />
          
          {/* Menu content */}
          <div className="relative z-10 flex flex-col h-full pt-20 pb-6 px-4">
            {/* Botão de fechar no topo */}
            <div className="absolute top-4 right-4 z-20">
                              <Button 
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                className="text-white hover:bg-white/20 transition-colors duration-200 bg-white/10"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </Button>
            </div>

            <nav className="flex flex-col space-y-2 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-6 py-4 text-white hover:bg-white/10 transition-all duration-200 rounded-xl text-lg font-medium border border-white/5 hover:border-white/20 hover:translate-x-1"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Botão de ação no final */}
            <div className="pt-6 px-2">
              <Button 
                className="w-full btn-primary h-14 text-lg font-semibold rounded-xl"
                onClick={(e) => {
                  closeMobileMenu();
                  handleWhatsAppContact(e);
                }}
                aria-label="Entrar em contato via WhatsApp"
              >
                Fale conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 