
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import TermCard from "@/components/TermCard";
import legalTerms from "@/data/legalTerms";
import { Search } from "lucide-react";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(legalTerms);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const filtered = legalTerms.filter((term) => {
        const normalizedTerm = term.term.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const normalizedDefinition = term.definition.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        return normalizedTerm.includes(normalizedSearchTerm) || 
               normalizedDefinition.includes(normalizedSearchTerm);
      });
      setFilteredTerms(filtered);
    } else {
      setFilteredTerms(legalTerms);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-netflix-red mb-6">
              Dicionário Jurídico
            </h1>
            <p className="text-netflix-light mb-8 max-w-2xl mx-auto">
              Explore nossa coleção de termos jurídicos com definições claras e exemplos práticos.
            </p>
            <div className="mb-10">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
          
          {filteredTerms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredTerms.map((term) => (
                <TermCard key={term.id} term={term} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-netflix-text mb-4" />
              <h2 className="text-xl font-medium text-netflix-light mb-2">Nenhum resultado encontrado</h2>
              <p className="text-netflix-text">
                Tente buscar por outro termo ou verifique a ortografia.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-netflix-black py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-netflix-text">© 2025 JusLex - Dicionário Jurídico</p>
        </div>
      </footer>
    </div>
  );
};

export default Dictionary;
