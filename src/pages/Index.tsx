
import { Navigation } from "@/components/Navigation";
import { Mail, Linkedin } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen" id="top">
      <Navigation />
      
      {/* Hero Section with Photo */}
      <header className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto max-w-4xl flex items-center gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/2025-03-20-00021-RPE_MAR.jpg" 
              alt="Álef Rebouças" 
              className="w-64 h-64 object-cover rounded-full border-4 border-[#F9C784] shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in text-[#F9C784]">
              Álef Rebouças
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl fade-in" style={{animationDelay: "0.2s"}}>
              Criando soluções que conectam tecnologia e pessoas através de produtos que fazem a diferença.
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-[#1A1F2C]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-[#F9C784]">Sobre mim</h2>
          <div className="space-y-6 text-muted">
            <p className="fade-in">
              Como Gerente de Produto, lidero squads multidisciplinares aplicando metodologias ágeis e processos bem definidos, garantindo entregas consistentes mesmo sob pressão e com recursos limitados. Minha atuação combina visão estratégica com foco na execução, gerando impacto real nos indicadores de negócio.
            </p>
            <p className="fade-in" style={{animationDelay: "0.2s"}}>
              Tenho facilidade para transitar entre áreas técnicas, comerciais e executivas, traduzindo metas corporativas em soluções de produto com alto valor percebido. Mais do que entregar funcionalidades, busco criar produtos que se tornam referência. Assumo desafios com foco em resultado, sempre comprometido com a criação de valor para clientes, times e stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6 bg-[#222533]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-[#F9C784]">Experiência Profissional</h2>
          <div className="space-y-8">
            <div className="card fade-in">
              <h3 className="text-2xl font-semibold text-[#9b87f5] mb-4">
                Product Owner | Klok Tech
              </h3>
              <p className="text-sm text-muted mb-4">2022 – atual</p>
              <ul className="space-y-2 text-muted">
                <li>• Liderança de squad com 15 pessoas</li>
                <li>• Criação e evolução de produtos financeiros massificados</li>
                <li>• Gestão de roadmap, discovery, homologação e comunicação com stakeholders</li>
              </ul>
            </div>
            
            <div className="card fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-semibold text-[#9b87f5] mb-4">
                Coordenador Regional | Bee Delivery
              </h3>
              <p className="text-sm text-muted mb-4">2020 – 2021</p>
              <ul className="space-y-2 text-muted">
                <li>• Ativação de 5 operações próprias e liderança comercial em 3 capitais</li>
                <li>• Gestão de equipe e relacionamento com clientes B2B</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-[#F9C784]">Cases de Produto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card fade-in">
              <h3 className="text-xl font-semibold mb-4 text-[#E7E9EE]">Migração de Produtos Financeiros</h3>
              <p className="text-[#C2D0E5]">
                Estruturação do processo de migração de +140 produtos financeiros
              </p>
              <p className="text-[#9298C8] mt-4 text-sm">
                Redução do tempo de implantação de semanas para dias
              </p>
            </div>
            
            <div className="card fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-semibold mb-4 text-[#E7E9EE]">Integração PIX</h3>
              <p className="text-[#C2D0E5]">
                Implementação de pagamentos via PIX em produtos financeiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-[#222533]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-[#F9C784]">Contato</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="mailto:alefreboucas@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-[#9b87f5] hover:bg-[#8b77e5] transition-colors rounded-lg text-white font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              E-mail
            </a>
            <a 
              href="https://linkedin.com/in/alefreboucas" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/5 border border-[#9b87f5] transition-colors rounded-lg text-white font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
