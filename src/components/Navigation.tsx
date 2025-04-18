
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1C2543]/90 backdrop-blur-sm py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a href="#top" className="text-xl font-semibold text-[#F4B860]">Álef Rebouças</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#sobre" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Sobre</a>
            <a href="#cases" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Cases</a>
            <a href="#contato" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Contato</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F4B860] focus:outline-none" 
            onClick={handleMobileMenuClick}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1F2C] absolute w-full border-t border-[#AAB8D0]/10 mt-2">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a 
              href="#sobre" 
              className="block py-3 text-center text-[#F4B860] hover:bg-[#F4B860]/10 rounded-lg"
              onClick={closeMobileMenu}
            >
              Sobre
            </a>
            <a 
              href="#cases" 
              className="block py-3 text-center text-[#F4B860] hover:bg-[#F4B860]/10 rounded-lg"
              onClick={closeMobileMenu}
            >
              Cases
            </a>
            <a 
              href="#contato" 
              className="block py-3 text-center text-[#F4B860] hover:bg-[#F4B860]/10 rounded-lg"
              onClick={closeMobileMenu}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
