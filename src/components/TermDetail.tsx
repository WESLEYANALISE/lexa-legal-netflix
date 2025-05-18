
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LegalTermProps } from "./TermCard";

interface TermDetailProps {
  term: LegalTermProps;
}

const TermDetail = ({ term }: TermDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-up">
      <Link to="/dictionary">
        <Button variant="ghost" className="mb-6 text-netflix-text hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao dicionário
        </Button>
      </Link>
      <Card className="bg-netflix-card border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-netflix-red text-2xl md:text-3xl">{term.termo}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-netflix-light mb-2">Definição</h3>
            <p className="text-netflix-light">{term.definicao}</p>
          </div>
          {term.exemplo_uso && (
            <div>
              <h3 className="text-lg font-medium text-netflix-light mb-2">Exemplo</h3>
              <p className="text-netflix-light italic border-l-2 border-netflix-red pl-4">{term.exemplo_uso}</p>
            </div>
          )}
          
          {term.area_direito && (
            <div className="pt-4 border-t border-gray-800">
              <p className="text-netflix-red text-sm">
                #{term.area_direito.replace(/\s+/g, '')}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TermDetail;
