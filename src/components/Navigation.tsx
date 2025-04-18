
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1C2543]/90 backdrop-blur-sm py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#top" className="text-xl font-semibold text-[#F4B860]">Álef Rebouças</a>
          <div className="hidden md:flex space-x-8">
            <a href="#sobre" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Sobre</a>
            <a href="#experiencia" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Experiência</a>
            <a href="#cases" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Cases</a>
            <a href="#contato" className="nav-link text-[#F4B860] hover:text-[#F4B860]/80">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
