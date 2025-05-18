
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import MobileNav from "@/components/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchDefinitionWithAI } from "@/services/geminiService";

const AISearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<{termo: string; definicao: string; exemplo_uso: string} | null>(null);
  const isMobile = useIsMobile();

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
  };

  const handleAISearch = async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Campo vazio",
        description: "Por favor, digite um termo para pesquisar",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await fetchDefinitionWithAI(searchTerm);
      setAiResult({
        termo: searchTerm,
        ...result
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível obter a definição da IA",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile && <MobileNav />}
      <Navbar />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-netflix-red mb-6">
              Busca com IA
            </h1>
            <p className="text-netflix-light mb-8 max-w-2xl mx-auto">
              Não encontrou o termo que procura? Use nossa IA para obter definições para termos jurídicos não catalogados.
            </p>
            <div className="mb-4">
              <SearchBar onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <Button 
              onClick={handleAISearch} 
              className="bg-netflix-red hover:bg-red-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Pesquisando..." : "Buscar com IA"}
            </Button>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 mx-auto border-t-2 border-netflix-red rounded-full mb-4"></div>
              <p className="text-netflix-light">Consultando IA...</p>
            </div>
          ) : aiResult && (
            <div className="animate-fade-in">
              <Card className="bg-netflix-card border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-netflix-red text-2xl md:text-3xl">{aiResult.termo}</CardTitle>
                  <div className="inline-block bg-netflix-red/20 text-netflix-red text-xs px-2 py-1 rounded-full mt-2">
                    Definido por IA
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-netflix-light mb-2">Definição</h3>
                    <p className="text-netflix-light">{aiResult.definicao}</p>
                  </div>
                  {aiResult.exemplo_uso && (
                    <div>
                      <h3 className="text-lg font-medium text-netflix-light mb-2">Exemplo</h3>
                      <p className="text-netflix-light italic border-l-2 border-netflix-red pl-4">{aiResult.exemplo_uso}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
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

export default AISearch;
