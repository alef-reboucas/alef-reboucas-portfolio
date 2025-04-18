
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

export default function CaseOdin() {
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
            💪 Odin — Copilot for Gym
          </h1>
          
          <div className="space-y-12 text-[#E7E9EE]">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">📌 Contexto</h2>
              <p className="leading-relaxed">
                Desde que comecei a treinar, enfrentei uma dificuldade recorrente: acompanhar 
                a evolução dos meus exercícios. Testei diversos aplicativos – gratuitos, pagos, 
                até mesmo o app da própria academia – e nenhum deles conseguiu vencer a 
                praticidade de simplesmente enviar uma mensagem no WhatsApp.
              </p>
              <p className="mt-4 leading-relaxed">
                Essa fricção me gerava um incômodo: não era difícil registrar os treinos, 
                só era pouco natural dentro da minha rotina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">💡 A Ideia</h2>
              <p className="leading-relaxed">
                A partir da combinação de dois interesses pessoais — fitness e produtividade 
                com no-code — decidi criar um bot que funcionasse dentro do Telegram, onde eu 
                pudesse registrar os treinos de forma rápida e receber relatórios de progresso. 
                Assim nasceu o Odin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">⚙️ A Solução</h2>
              <p className="leading-relaxed mb-4">
                <strong>Odin</strong> é um bot pessoal que registra e organiza meus treinos 
                direto pelo Telegram. Foi construído 100% com ferramentas no-code e IA, sem 
                escrever uma linha de código:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>n8n</strong>: Para automações e orquestração das integrações</li>
                <li><strong>Telegram</strong>: Canal de entrada das mensagens</li>
                <li><strong>ChatGPT (4o Mini)</strong>: Interpretação da mensagem e estruturação dos dados</li>
                <li><strong>Supabase</strong>: Armazenamento e recuperação dos treinos</li>
              </ul>
              <p className="leading-relaxed">
                O bot entende o treino enviado como texto, organiza os dados em um banco e 
                permite resgatar o histórico por exercício ou grupo muscular. No final do 
                treino, ele ainda envia um resumo automático.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">🧪 Hipóteses Validadas</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mensagens no Telegram são mais rápidas e práticas do que o uso de apps convencionais</li>
                <li>Usuários valorizam relatórios simples e rápidos sobre desempenho</li>
                <li>É possível construir MVPs robustos e funcionais em menos de 5h com no-code e IA</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">📈 Impacto</h2>
              <p className="leading-relaxed">
                O projeto consumiu <strong>25h entre aprendizado e execução</strong>. Com o 
                conhecimento adquirido, hoje seria possível replicá-lo em menos de <strong>5h</strong>. 
                Isso reforça uma tese que venho validando há algum tempo: ideias simples podem 
                ser testadas com <strong>baixo risco e altíssimo potencial</strong> com a 
                abordagem certa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F9C784]">💬 Aprendizados</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>IA precisa de um bom design conversacional para ser consistente (o 4o Mini ainda é limitado em interpretação)</li>
                <li>Ferramentas no-code exigem raciocínio lógico e conhecimento básico de API, JSON e SQL — mas tornam o desenvolvimento acessível</li>
                <li>Quando você é o único usuário, o ciclo de feedback é instantâneo — e isso acelera muito a evolução</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
