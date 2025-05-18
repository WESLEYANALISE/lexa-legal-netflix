
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface LegalTermProps {
  id: string;
  termo: string;
  definicao: string;
  exemplo_uso: string;
  area_direito?: string;
}

interface TermCardProps {
  term: LegalTermProps;
  className?: string;
}

const TermCard = ({ term, className }: TermCardProps) => {
  return (
    <Link to={`/term/${term.id}`}>
      <Card className={cn("netflix-card", className)}>
        <CardHeader className="pb-2">
          <CardTitle className="text-netflix-red text-lg">{term.termo}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-netflix-light text-sm line-clamp-3">{term.definicao}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TermCard;
