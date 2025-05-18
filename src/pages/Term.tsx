import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TermDetail from "@/components/TermDetail";
import { LegalTermProps } from "@/components/TermCard";
import { supabase } from "@/integrations/supabase/client";
import MobileNav from "@/components/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";
const Term = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const [term, setTerm] = useState<LegalTermProps | null>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  useEffect(() => {
    async function fetchTerm() {
      if (id) {
        try {
          const {
            data,
            error
          } = await supabase.from("dicionario_juridico").select("id, termo, definicao, exemplo_uso, area_direito").eq("id", id).single();
          if (error) {
            throw new Error(error.message);
          }
          if (!data) {
            navigate("/dictionary", {
              replace: true
            });
            return;
          }
          setTerm(data);
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : "Failed to fetch term details";
          toast({
            title: "Error",
            description: errorMessage,
            variant: "destructive"
          });
          navigate("/dictionary", {
            replace: true
          });
        } finally {
          setLoading(false);
        }
      }
    }
    fetchTerm();
  }, [id, navigate]);
  if (loading) {
    return <div className="min-h-screen flex flex-col">
        {isMobile && <MobileNav />}
        <Navbar />
        <div className="flex-grow flex items-center justify-center mt-16">
          <div className="animate-spin h-8 w-8 border-t-2 border-netflix-red rounded-full mr-2"></div>
          <div className="text-netflix-red text-xl">Carregando...</div>
        </div>
      </div>;
  }
  if (!term) {
    return null;
  }
  return <div className="min-h-screen flex flex-col">
      {isMobile && <MobileNav />}
      <Navbar />
      
      <div className="sm:px-6 lg:px-8 flex-grow mt-16 py-0 px-0 my-0">
        <TermDetail term={term} />
      </div>
      
      <footer className="bg-netflix-black py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-netflix-text">© 2025 JusLex - Dicionário Jurídico</p>
        </div>
      </footer>
    </div>;
};
export default Term;