import { useEffect } from 'react';
import { Navigation } from "@/components/Navigation";
import { Mail, Linkedin, ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    // Hotjar Tracking Code
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:6376830,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  }, []);

  return (
    <div className="min-h-screen" id="top">
      <Navigation />
      
      {/* Hero Section with Photo */}
      <header className="min-h-screen flex items-center pt-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0">
              <img 
                src="/2025-03-20-00021-RPE_MAR.jpg" 
                alt="Álef Rebouças" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-[#F9C784] shadow-lg"
              />
            </div>
            <div className="text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 fade-in text-[#F9C784]">
                Álef Rebouças
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl fade-in" style={{animationDelay: "0.2s"}}>
                Criando soluções que conectam tecnologia e pessoas através de produtos que fazem a diferença.
              </p>
            </div>
          </div>

          {/* New CTA Button */}
          <a 
            href="https://linkedin.com/in/alefreboucas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#F9C784] hover:bg-[#F9C784]/90 text-[#1A1F2C] rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8 fade-in"
            style={{animationDelay: "0.4s"}}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Fale comigo
          </a>

          {/* Scroll Indicator */}
          <p className="text-sm text-[#AAB8D0] flex items-center gap-2 fade-in" style={{animationDelay: "0.6s"}}>
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Role para ver mais
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#1A1F2C]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-[#F9C784] text-2xl sm:text-3xl md:text-4xl">Sobre mim</h2>
          <div className="space-y-6 text-muted">
            <p className="fade-in text-base sm:text-lg">
              Como Gerente de Produto, lidero squads multidisciplinares aplicando metodologias ágeis e processos bem definidos, garantindo entregas consistentes mesmo sob pressão e com recursos limitados. Minha atuação combina visão estratégica com foco na execução, gerando impacto real nos indicadores de negócio.
            </p>
            <p className="fade-in text-base sm:text-lg" style={{animationDelay: "0.2s"}}>
              Tenho facilidade para transitar entre áreas técnicas, comerciais e executivas, traduzindo metas corporativas em soluções de produto com alto valor percebido. Mais do que entregar funcionalidades, busco criar produtos que se tornam referência. Assumo desafios com foco em resultado, sempre comprometido com a criação de valor para clientes, times e stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link to="/case/white-label" className="card fade-in border border-[#AAB8D0]/20 group hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl font-semibold mb-4 text-[#F0F2F5]">Plataforma White-Label para Venda de produtos financeiros</h3>
              <p className="text-[#AAB8D0]">
                Construção de uma plataforma white-label para venda de produtos financeiros
              </p>
              <p className="text-[#6C74B7] mt-4 text-sm">
                Distribuição de produtos financeiros
              </p>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-5 h-5 text-[#AAB8D0] group-hover:text-[#F4B860] transition-colors" />
              </div>
            </Link>

            <Link to="/case/migracao" className="card fade-in border border-[#AAB8D0]/20 group hover:translate-y-[-5px] transition-transform" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-semibold mb-4 text-[#F0F2F5]">Migração de Produtos Financeiros</h3>
              <p className="text-[#AAB8D0]">
                Estruturação do processo de migração de +150 de produtos financeiros
              </p>
              <p className="text-[#6C74B7] mt-4 text-sm">
                Liderando a migração de +150 produtos financeiros
              </p>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-5 h-5 text-[#AAB8D0] group-hover:text-[#F4B860] transition-colors" />
              </div>
            </Link>

            <Link to="/case/odin" className="card fade-in border border-[#AAB8D0]/20 group hover:translate-y-[-5px] transition-transform" style={{animationDelay: "0.4s"}}>
              <h3 className="text-xl font-semibold mb-4 text-[#F0F2F5]">Odin - Your AI Copilot for gym</h3>
              <p className="text-[#AAB8D0]">
                Desenvolvimento de um assistente pessoal para acompanhamento de treinos utilizando AI e Low-code
              </p>
              <p className="text-[#6C74B7] mt-4 text-sm">
                Inteligência artificial aplicada ao fitness
              </p>
              <div className="mt-4 flex justify-end">
                <ArrowRight className="w-5 h-5 text-[#AAB8D0] group-hover:text-[#F4B860] transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#222533]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Contato</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://linkedin.com/in/alefreboucas" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#6C74B7] hover:bg-[#5B63A6] transition-colors rounded-lg text-[#F0F2F5] font-medium text-base sm:text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all w-full sm:w-auto"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              Conecte-se comigo!
            </a>
            <a 
              href="mailto:alefreboucas@gmail.com" 
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-transparent hover:bg-white/5 border border-[#AAB8D0] transition-colors rounded-lg text-[#F0F2F5] font-medium text-base sm:text-lg w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Fale comigo por e-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
