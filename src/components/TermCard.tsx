
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface LegalTermProps {
  id: string;
  term: string;
  definition: string;
  example: string;
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
          <CardTitle className="text-netflix-red text-lg">{term.term}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-netflix-light text-sm line-clamp-3">{term.definition}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TermCard;
