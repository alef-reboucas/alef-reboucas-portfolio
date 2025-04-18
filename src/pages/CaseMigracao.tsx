
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

export default function CaseMigracao() {
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
            🚀 Case: Implantação e Migração de mais de 150 Produtos Financeiros em Cartões Private Label
          </h1>
          
          <div className="space-y-8 text-[#E7E9EE]">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">🎯 O Desafio</h2>
              <div className="space-y-4">
                <p>
                  Com um cenário de alta complexidade e múltiplos stakeholders — incluindo processadoras de cartões, 
                  times internos da Klok, seguradoras, varejistas e empresas de capitalização — a Klok assumiu a 
                  missão de migrar mais de 150 seguros e assistências para sua plataforma. Cada produto tinha 
                  características únicas e exigia uma abordagem personalizada. Além disso, o fator tempo era crítico: 
                  a cada semana sem migração, havia perda direta de receita.
                </p>
                <p>
                  O projeto também envolvia forte dependência de contratos comerciais, o que exigia um planejamento 
                  dinâmico e sensível ao ritmo de fechamento dos acordos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">🛠️ A Abordagem</h2>
              <div className="space-y-4">
                <p>
                  À frente da iniciativa, Alef atuou como Product Owner e Gerente de Projetos, sendo responsável 
                  por estruturar um processo padronizado, escalável e previsível para conduzir as migrações. 
                  Para isso, implementou:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Um pipeline com etapas bem definidas e ritos de acompanhamento;</li>
                  <li>Um planejamento anual da esteira, com previsão inclusive de novos produtos ainda em fase de negociação;</li>
                  <li>Um modelo de <strong className="text-[#F9C784]">"slots"</strong> que oferecia visibilidade ao time comercial sobre a capacidade de implantação;</li>
                  <li>Priorização baseada em matriz impacto-esforço;</li>
                  <li>Ferramentas como Jira e MS Project para controle e execução.</li>
                </ul>
                <p>
                  A comunicação foi um dos pilares do sucesso. Alef organizou checkpoints semanais com stakeholders 
                  da Klok e da processadora, além de reuniões específicas para cada produto com a presença dos 
                  executivos responsáveis pelo varejo, seguradora, processadora e Klok.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">📈 Os Resultados</h2>
              <div className="space-y-4">
                <p>
                  Em um período de 1 ano e meio, foram migrados com sucesso <strong className="text-[#F9C784]">mais de 150 produtos</strong>, 
                  incluindo seguros prestamistas, bolsa protegida, assistência saúde e odontológica, garantia 
                  estendida, roubo/furto qualificado, entre outros.
                </p>
                <p>
                  O projeto foi concluído <strong className="text-[#F9C784]">sem falhas críticas em produção</strong>, consolidando a 
                  credibilidade técnica da Klok e gerando valor direto aos varejistas por meio de melhorias 
                  implementadas já durante o processo de migração.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
