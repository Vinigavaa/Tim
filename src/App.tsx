import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/ui/navbar';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

function App() {
  // Efeito para permitir navegação suave por âncoras
  useEffect(() => {
    // Manipulador de cliques para links de âncora 
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        
        // Seleciona o elemento alvo
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          // Scroll suave até o elemento
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Atualizar URL sem recarregar a página
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
