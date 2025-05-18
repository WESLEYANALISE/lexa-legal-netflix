
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import TermCard from "@/components/TermCard";
import { useLegalTerms } from "@/hooks/use-legal-terms";
import { Search } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { terms, loading, error } = useLegalTerms();
  const [filteredTerms, setFilteredTerms] = useState(terms);
  const isMobile = useIsMobile();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (terms?.length > 0) {
      if (searchTerm) {
        const normalizedSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtered = terms.filter((term) => {
          const normalizedTerm = term.termo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          const normalizedDefinition = term.definicao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          
          return normalizedTerm.includes(normalizedSearchTerm) || 
                normalizedDefinition.includes(normalizedSearchTerm);
        });
        setFilteredTerms(filtered);
      } else {
        setFilteredTerms(terms);
      }
    }
  }, [searchTerm, terms]);

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile && <MobileNav />}
      <Navbar />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-netflix-red mb-6">
              Dicionário Jurídico
            </h1>
            <p className="text-netflix-light mb-8 max-w-2xl mx-auto">
              Explore nossa coleção de termos jurídicos com definições claras e exemplos práticos.
            </p>
            <div className="mb-10">
              <SearchBar onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 mx-auto border-t-2 border-netflix-red rounded-full mb-4"></div>
              <p className="text-netflix-light">Carregando termos jurídicos...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-2">Erro ao carregar os termos jurídicos</p>
              <p className="text-netflix-text">{error}</p>
            </div>
          ) : filteredTerms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredTerms.map((term) => (
                <TermCard key={term.id} term={term} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-netflix-text mb-4" />
              <h2 className="text-xl font-medium text-netflix-light mb-2">Nenhum resultado encontrado</h2>
              <p className="text-netflix-text mb-4">
                Tente buscar por outro termo ou verifique a ortografia.
              </p>
              <p className="text-netflix-text">
                Não encontrou o que procurava? Experimente nossa{' '}
                <a href="/search" className="text-netflix-red hover:underline">Busca com IA</a>.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <footer className="bg-netflix-black py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-netflix-text">© 2025 JusLex - Dicionário Jurídico</p>
        </div>
      </footer>
    </div>
  );
};

export default Dictionary;
