
import { Home, Search, Book, List } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-netflix-black border-b border-gray-800 py-2 px-4 z-10">
      <div className="flex justify-around items-center">
        <Link 
          to="/" 
          className={cn(
            "flex flex-col items-center p-2", 
            isActive("/") ? "text-netflix-red" : "text-netflix-text"
          )}
        >
          <Home size={20} />
          <span className="text-xs mt-1">Início</span>
        </Link>
        
        <Link 
          to="/dictionary" 
          className={cn(
            "flex flex-col items-center p-2", 
            isActive("/dictionary") ? "text-netflix-red" : "text-netflix-text"
          )}
        >
          <Book size={20} />
          <span className="text-xs mt-1">Dicionário</span>
        </Link>
        
        <Link 
          to="/search" 
          className={cn(
            "flex flex-col items-center p-2", 
            isActive("/search") ? "text-netflix-red" : "text-netflix-text"
          )}
        >
          <Search size={20} />
          <span className="text-xs mt-1">Buscar IA</span>
        </Link>

        <Link 
          to="/list" 
          className={cn(
            "flex flex-col items-center p-2", 
            isActive("/list") ? "text-netflix-red" : "text-netflix-text"
          )}
        >
          <List size={20} />
          <span className="text-xs mt-1">Lista A-Z</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
