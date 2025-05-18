
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TermDetail from "@/components/TermDetail";
import legalTerms from "@/data/legalTerms";
import type { LegalTermProps } from "@/components/TermCard";

const Term = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [term, setTerm] = useState<LegalTermProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundTerm = legalTerms.find(term => term.id === id);
      if (foundTerm) {
        setTerm(foundTerm);
      } else {
        navigate("/dictionary", { replace: true });
      }
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-netflix-red text-xl">Carregando...</div>
        </div>
      </div>
    );
  }

  if (!term) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 flex-grow">
        <TermDetail term={term} />
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

export default Term;
