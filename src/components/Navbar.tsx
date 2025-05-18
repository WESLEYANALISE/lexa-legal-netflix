
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  if (isMobile) {
    return null;
  }
  
  return (
    <nav className="bg-netflix-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-netflix-red font-bold text-2xl">JusLex</h1>
            </Link>
            <div className="ml-10">
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive("/")
                      ? "text-white"
                      : "text-netflix-text hover:text-white"
                  )}
                >
                  Início
                </Link>
                <Link
                  to="/dictionary"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive("/dictionary")
                      ? "text-white"
                      : "text-netflix-text hover:text-white"
                  )}
                >
                  Dicionário
                </Link>
                <Link
                  to="/search"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive("/search")
                      ? "text-white"
                      : "text-netflix-text hover:text-white"
                  )}
                >
                  Buscar IA
                </Link>
                <Link
                  to="/list"
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive("/list")
                      ? "text-white"
                      : "text-netflix-text hover:text-white"
                  )}
                >
                  Lista A-Z
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
