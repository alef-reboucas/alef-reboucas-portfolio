
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

export default function CaseMigracao() {
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
            Migração de Produtos Financeiros
          </h1>
          
          <div className="space-y-6 text-[#E7E9EE]">
            <p>
              Estruturação do processo de migração de mais de 140 produtos financeiros, reduzindo significativamente 
              o tempo de implantação de semanas para dias.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">O Desafio</h2>
            <p>
              A necessidade de migrar uma grande quantidade de produtos financeiros para uma nova plataforma, 
              mantendo a integridade dos dados e minimizando o impacto para os usuários finais.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">A Solução</h2>
            <p>
              Desenvolvimento de um processo estruturado de migração, com etapas claras de validação e 
              estratégias eficientes de implementação em lote.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">Resultados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Redução do tempo de implantação de semanas para dias</li>
              <li>Aumento da confiabilidade do processo de migração</li>
              <li>Melhoria na experiência do usuário final durante transições</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
