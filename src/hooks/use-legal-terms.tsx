
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LegalTermProps } from "@/components/TermCard";
import { toast } from "@/components/ui/use-toast";

export function useLegalTerms() {
  const [terms, setTerms] = useState<LegalTermProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTerms() {
      try {
        const { data, error } = await supabase
          .from("dicionario_juridico")
          .select("id, termo, definicao, exemplo_uso, area_direito");

        if (error) {
          throw new Error(error.message);
        }

        setTerms(data || []);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch legal terms";
        setError(errorMessage);
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchTerms();
  }, []);

  return { terms, loading, error };
}
