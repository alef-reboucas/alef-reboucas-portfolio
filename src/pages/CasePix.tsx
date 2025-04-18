
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

export default function CasePix() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 px-6 pb-20 bg-[#1C2543]">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/#cases" 
            className="inline-flex items-center text-[#C2D0E5] hover:text-[#F9C784] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para todos os cases
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#F9C784]">
            Integração PIX
          </h1>
          
          <div className="space-y-6 text-[#E7E9EE]">
            <p>
              Implementação bem-sucedida de pagamentos via PIX em diversos produtos financeiros, 
              melhorando a experiência do usuário e ampliando as opções de transação.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">O Desafio</h2>
            <p>
              Integrar o sistema PIX aos produtos financeiros existentes, garantindo segurança, 
              conformidade com regulamentações do Banco Central e uma experiência fluida para os usuários.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">A Solução</h2>
            <p>
              Desenvolvimento de uma arquitetura de integração robusta com o sistema PIX, 
              com implementação por fases e rigorosos testes de segurança e desempenho.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">Resultados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aumento nas transações financeiras via PIX</li>
              <li>Redução do tempo de processamento de pagamentos</li>
              <li>Melhoria na satisfação do cliente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
