import { useState, useEffect } from 'react';
import { Button } from './button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Lista de links da navegação
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  // Detecta o scroll da página e tamanho da tela
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificação inicial
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
        // Adiciona um pequeno delay para garantir que o menu mobile feche antes do scroll
        setTimeout(() => {
          const navbarHeight = 64; // Altura da navbar
          const elementTop = element.offsetTop;
          const offsetPosition = elementTop - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, isMobile ? 300 : 0);
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
                <span className="text-red-500 hidden sm:inline">Santa</span>
                <span className="text-blue-500 ml-1 font-normal hidden sm:inline"> Luzia</span>
              </div>
            </a>

            {/* Links de navegação - Desktop */}
            <nav className="hidden md:flex items-center space-x-1" role="navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm text-blue-500 hover:text-blue-900 transition-colors duration-300 rounded-md"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Botão menu mobile */}
            <div className="md:hidden">
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-blue-500 hover:bg-white/20 transition-colors duration-300 bg-white/10"
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
          <div className="absolute inset-0 bg-blue-500 backdrop-blur-md" />
          
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
          </div>
        </div>
      )}
    </>
  );
} 