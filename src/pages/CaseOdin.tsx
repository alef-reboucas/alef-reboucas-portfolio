
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
            Odin - Your AI Copilot for gym
          </h1>
          
          <div className="space-y-6 text-[#E7E9EE]">
            <p>
              Desenvolvimento de um assistente pessoal inteligente para acompanhamento 
              de treinos, utilizando tecnologia de ponta em IA e abordagem Low-code 
              para maior agilidade e personalização.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">O Desafio</h2>
            <p>
              Criar uma solução que combine inteligência artificial com expertise em 
              educação física para oferecer acompanhamento personalizado de treinos, 
              adaptando-se às necessidades individuais de cada usuário.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">A Solução</h2>
            <p>
              Desenvolvimento de um copiloto AI que utiliza processamento de linguagem 
              natural e machine learning para criar e ajustar programas de treino, 
              além de fornecer feedback em tempo real sobre a execução dos exercícios.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#F9C784]">Resultados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhoria na aderência aos programas de treino</li>
              <li>Feedback personalizado e em tempo real</li>
              <li>Maior engajamento dos usuários com seus objetivos fitness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
