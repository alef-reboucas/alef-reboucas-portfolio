import { Navigation } from "@/components/Navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { cases } from "@/constants";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Navigation />

      <header className="pt-32 px-6 pb-20 bg-[#1C2543]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#F9C784]">
            Olá, eu sou o Alef!
          </h1>
          <p className="text-xl md:text-2xl text-[#E7E9EE] mb-8">
            Sou desenvolvedor full-stack e estou sempre buscando novos desafios
            e oportunidades para criar soluções inovadoras.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://linkedin.com/in/alefreboucas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/5 border border-[#9b87f5] transition-colors rounded-lg text-white font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Conecte-se comigo!
            </a>
            <a
              href="mailto:alefreboucas@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-[#9b87f5] hover:bg-[#8b77e5] transition-colors rounded-lg text-white font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Fale comigo através do meu e-mail!
            </a>
          </div>
        </div>
      </header>

      <section id="cases" className="py-16 px-6 bg-[#2D3A61]">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle>Meus Cases</SectionTitle>
          <p className="text-lg text-[#C2D0E5] mb-8">
            Aqui estão alguns dos meus projetos mais recentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item) => (
              <Link to={item.link} key={item.title} className="card fade-in">
                <h3 className="text-xl font-semibold mb-2 text-[#F9C784]">
                  {item.title}
                </h3>
                <p className="text-[#E7E9EE]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 px-6 bg-[#1C2543]">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle>Contato</SectionTitle>
          <p className="text-lg text-[#C2D0E5] mb-8">
            Sinta-se à vontade para entrar em contato comigo através das minhas
            redes sociais ou por e-mail.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://linkedin.com/in/alefreboucas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/5 border border-[#9b87f5] transition-colors rounded-lg text-white font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Conecte-se comigo!
            </a>
            <a
              href="mailto:alefreboucas@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-[#9b87f5] hover:bg-[#8b77e5] transition-colors rounded-lg text-white font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Fale comigo através do meu e-mail!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
