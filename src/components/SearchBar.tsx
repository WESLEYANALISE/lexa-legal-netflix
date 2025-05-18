
import { useState, useRef, useEffect } from "react";
import { Search, ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LegalTermProps } from "./TermCard";

interface SearchBarProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredTerms?: LegalTermProps[];
}

const SearchBar = ({ onSearch, searchTerm, setSearchTerm, filteredTerms = [] }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call onSearch immediately as user types
    
    // Show preview if there's text in the search box
    setIsOpen(value.length > 0);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when pressing escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectTerm = (termId: string) => {
    setIsOpen(false);
    navigate(`/term/${termId}`);
  };

  const previewTerms = filteredTerms.slice(0, 5); // Show only the first 5 terms in the preview

  return (
    <div className="w-full max-w-2xl mx-auto relative" ref={containerRef}>
      <form className="w-full relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-netflix-text" />
          <Input
            type="text"
            placeholder="Buscar termo jurídico..."
            value={searchTerm}
            onChange={handleChange}
            className="pl-10 bg-netflix-card text-netflix-light border-netflix-text focus:border-netflix-red transition-all"
            onFocus={() => searchTerm.length > 0 && setIsOpen(true)}
          />
        </div>
      </form>
      
      {isOpen && filteredTerms.length > 0 && (
        <Card className="absolute z-50 w-full mt-1 bg-netflix-card border-netflix-text shadow-lg animate-fade-in">
          <Command className="bg-transparent text-netflix-light">
            <CommandList>
              <CommandEmpty>
                <div className="py-6 text-center text-netflix-text">
                  Nenhum resultado encontrado
                </div>
              </CommandEmpty>
              
              <CommandGroup heading="Resultados da pesquisa">
                {previewTerms.map((term) => (
                  <CommandItem 
                    key={term.id}
                    onSelect={() => handleSelectTerm(term.id)}
                    className="cursor-pointer hover:bg-netflix-hover text-netflix-light px-4 py-3"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-netflix-red">{term.termo}</span>
                      <span className="text-xs text-netflix-text line-clamp-1">
                        {term.definicao}
                      </span>
                    </div>
                  </CommandItem>
                ))}
                
                {filteredTerms.length > 5 && (
                  <div className="px-4 py-2 border-t border-netflix-hover">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center text-netflix-text hover:text-netflix-light"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver todos os {filteredTerms.length} resultados
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
