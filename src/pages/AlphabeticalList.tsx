
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLegalTerms } from "@/hooks/use-legal-terms";

const AlphabeticalList = () => {
  const { terms, loading, error } = useLegalTerms();
  const [groupedTerms, setGroupedTerms] = useState<Record<string, typeof terms>>({});
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    if (terms && terms.length > 0) {
      const grouped = terms.reduce((acc: Record<string, typeof terms>, term) => {
        const firstLetter = term.termo.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(term);
        return acc;
      }, {});
      
      // Sort terms within each letter group
      Object.keys(grouped).forEach(letter => {
        grouped[letter].sort((a, b) => a.termo.localeCompare(b.termo));
      });
      
      setGroupedTerms(grouped);
      
      // Select the first letter that has terms
      if (!selectedLetter) {
        const firstAvailableLetter = alphabet.find(letter => grouped[letter]?.length > 0);
        if (firstAvailableLetter) {
          setSelectedLetter(firstAvailableLetter);
        }
      }
    }
  }, [terms, selectedLetter]);

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile && <MobileNav />}
      <Navbar />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-netflix-red mb-6 text-center">
            Termos Jurídicos A-Z
          </h1>
          
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
          ) : (
            <div className="animate-fade-in">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {alphabet.map((letter) => (
                  <Button
                    key={letter}
                    variant={selectedLetter === letter ? "default" : "outline"}
                    className={`w-10 h-10 p-0 ${
                      groupedTerms[letter]?.length > 0
                        ? selectedLetter === letter
                          ? "bg-netflix-red hover:bg-red-700"
                          : "hover:border-netflix-red hover:text-netflix-red"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={() => groupedTerms[letter]?.length > 0 && setSelectedLetter(letter)}
                    disabled={!groupedTerms[letter]?.length}
                  >
                    {letter}
                  </Button>
                ))}
              </div>
              
              {selectedLetter && groupedTerms[selectedLetter] && (
                <div className="bg-netflix-card rounded-lg p-4 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-netflix-red border-b border-gray-700 pb-2">
                    {selectedLetter}
                  </h2>
                  <ul className="space-y-2">
                    {groupedTerms[selectedLetter].map((term) => (
                      <li key={term.id} className="border-b border-gray-700 pb-2 last:border-0">
                        <Link
                          to={`/term/${term.id}`}
                          className="block p-2 hover:bg-netflix-black rounded transition-colors"
                        >
                          <span className="text-netflix-light text-lg">{term.termo}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

export default AlphabeticalList;
