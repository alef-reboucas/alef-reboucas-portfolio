
import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseWhiteLabel() {
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
          Plataforma White-Label para Venda de produtos financeiros
        </h1>

        <article className="prose prose-invert max-w-none">
          <p className="text-lg text-[#AAB8D0]">
            Em breve mais detalhes sobre este case.
          </p>
        </article>
      </main>
    </div>
  );
}
