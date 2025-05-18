import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import legalTerms from "@/data/legalTerms";
import TermCard from "@/components/TermCard";
const Index = () => {
  // Get 3 random terms for featured section
  const featuredTerms = [...legalTerms].sort(() => 0.5 - Math.random()).slice(0, 3);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-netflix-red mb-6 text-shadow">Dicionário Jurídico</h1>
            <p className="text-xl md:text-2xl text-netflix-light mb-8 max-w-3xl mx-auto">
              Seu dicionário jurídico digital para entender termos e conceitos legais de forma simples e objetiva.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/dictionary">
                <Button className="bg-netflix-red hover:bg-netflix-red/80 text-white rounded px-8 py-6 text-lg">
                  Explorar Dicionário
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Featured Terms */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-netflix-light mb-8 text-center">
              Termos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTerms.map(term => <TermCard key={term.id} term={term} className="h-full" />)}
            </div>
            <div className="text-center mt-8">
              <Link to="/dictionary">
                <Button variant="outline" className="text-netflix-light border-netflix-red hover:bg-netflix-red/10">
                  Ver todos os termos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* About Section */}
          <div className="bg-netflix-card p-6 md:p-10 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-netflix-red mb-4">Sobre o Dicionário Jurídico</h2>
            <p className="text-netflix-light mb-4">O Dicionário Jurídico digital visa facilitar o entendimento de termos e conceitos legais para estudantes, profissionais e qualquer pessoa interessada em compreender melhor a linguagem jurídica.</p>
            <p className="text-netflix-light">
              Nosso objetivo é tornar o conhecimento jurídico mais acessível através de definições claras e exemplos práticos de aplicação dos termos no dia a dia jurídico.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-netflix-black py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-netflix-text">© 2025 JusLex - Dicionário Jurídico</p>
        </div>
      </footer>
    </div>;
};
export default Index;