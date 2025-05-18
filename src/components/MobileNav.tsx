
import { Home, Search, Book } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-netflix-black border-t border-gray-800 py-2 px-4 md:hidden">
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
          <span className="text-xs mt-1">Buscar</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
