
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ onSearch, searchTerm, setSearchTerm }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-netflix-text" />
        <Input
          type="text"
          placeholder="Buscar termo jurídico..."
          value={searchTerm}
          onChange={handleChange}
          className="pl-10 bg-netflix-card text-netflix-light border-netflix-text focus:border-netflix-red transition-all"
        />
      </div>
    </form>
  );
};

export default SearchBar;
