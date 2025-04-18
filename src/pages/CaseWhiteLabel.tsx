
import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseWhiteLabel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 py-24">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-[#AAB8D0] hover:text-[#F4B860] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#F4B860]">
          🚀 Case: Plataforma para Venda e Pós-venda de Produtos Financeiros
        </h1>

        <article className="prose prose-invert max-w-none space-y-12">
          {/* Como identificamos a oportunidade */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#F4B860] flex items-center gap-2">
              🔍 Como identificamos a oportunidade
            </h2>
            <p className="text-lg text-[#AAB8D0] mb-6">
              A plataforma nasceu a partir de escuta ativa e análise das principais barreiras enfrentadas por nossos parceiros na comercialização de produtos financeiros no varejo:
            </p>
            <ul className="space-y-4 text-[#AAB8D0]">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🛑</span>
                <span><strong>Vendas travadas</strong> por falta de prioridade técnica no PDV do varejista. Muitos parceiros tinham deals aprovados, mas não conseguiam colocar os produtos no ar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🧭</span>
                <span><strong>Jornadas de venda mal adaptadas</strong>, com limitações para incluir beneficiários, dependentes ou para ofertar produtos com mais de uma etapa de decisão.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">💬</span>
                <span><strong>Feedbacks recorrentes</strong> de que o canal atual (PDV físico) não era o ideal para produtos que exigem mais contexto ou personalização.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🔌</span>
                <span><strong>Gaps técnicos</strong> nos varejistas que impediam integrações rápidas, atrasando lançamentos por meses.</span>
              </li>
            </ul>
            <p className="text-lg text-[#AAB8D0] mt-6">
              Esses sinais mostraram que o problema não era a demanda, mas <strong>a falta de um canal ágil, personalizável e independente da estrutura do varejista</strong>.
            </p>
          </section>

          {/* A solução */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#F4B860] flex items-center gap-2">
              💡 A solução
            </h2>
            <p className="text-lg text-[#AAB8D0] mb-6">
              Criamos uma <strong>plataforma white-label para venda e pós-venda de produtos financeiros</strong> que elimina a dependência do PDV físico.
              Com ela, o varejista pode lançar produtos com uma jornada 100% customizável, sem precisar priorizar nada em sua esteira de TI.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-[#F4B860]">Principais características:</h3>
            <ul className="space-y-4 text-[#AAB8D0]">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🚫</span>
                <span><strong>Sem necessidade de desenvolvimento no PDV</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🧩</span>
                <span><strong>Jornada 100% configurável</strong>, permitindo incluir dependentes, beneficiários, upgrades e cross-sell</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">⚙️</span>
                <span><strong>Integração rápida</strong> com sistemas de parceiros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">📲</span>
                <span><strong>Multipossibilidades de canal</strong>: link de pagamento, QR Code, e-commerce, aplicativo, etc.</span>
              </li>
            </ul>
          </section>

          {/* Impacto */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#F4B860] flex items-center gap-2">
              ⚡ Impacto
            </h2>
            <ul className="space-y-4 text-[#AAB8D0]">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">⏱️</span>
                <span><strong>Implantação acelerada</strong>: tempo de go-live caiu de <strong>6-12 meses para 4-6 semanas</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🔓</span>
                <span><strong>Sales enablement</strong>: destravamos vendas represadas da Klok e de seguradoras parceiras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">💳</span>
                <span><strong>Múltiplos meios de pagamento</strong>: passamos a oferecer <strong>PIX, cartão, e outros</strong>, aumentando conversão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">💡</span>
                <span><strong>Mais controle da jornada de vendas</strong>, com dados e testes A/B fora do ambiente restrito do PDV</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🧠</span>
                <span><strong>Liberdade para inovar</strong>, com novas ofertas e experiências que antes não eram viáveis</span>
              </li>
            </ul>
          </section>

          {/* Resultados */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#F4B860] flex items-center gap-2">
              📈 Resultados
            </h2>
            <ul className="space-y-4 text-[#AAB8D0]">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">💰</span>
                <span><strong>Milhões de reais em novas receitas</strong> para os parceiros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🚀</span>
                <span><strong>Escalabilidade real</strong>: um produto ativado com um parceiro pode ser replicado em outros, com tempo mínimo de adaptação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">🛒</span>
                <span><strong>Melhora na conversão</strong> por ter uma jornada orientada à venda de produtos financeiros, e não à venda de itens físicos</span>
              </li>
            </ul>
          </section>

          {/* Conclusão */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#F4B860] flex items-center gap-2">
              ✅ Conclusão
            </h2>
            <p className="text-lg text-[#AAB8D0]">
              A plataforma white-label da Klok nasceu da dor real dos nossos parceiros e virou uma <strong>alavanca estratégica de crescimento</strong>.<br/><br/>
              Ela transformou a forma como lançamos produtos financeiros no varejo — <strong>com mais agilidade, flexibilidade e foco em resultado</strong>.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
