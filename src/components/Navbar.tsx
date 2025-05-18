
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-netflix-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-netflix-red font-bold text-2xl">JusLex</h1>
            </Link>
            <div className="hidden md:block ml-10">
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
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/dictionary">
              <Button variant="ghost" className="text-netflix-text hover:text-white">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-netflix-text hover:text-white focus:outline-none"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive("/")
                  ? "text-white"
                  : "text-netflix-text hover:text-white"
              )}
            >
              Início
            </Link>
            <Link
              to="/dictionary"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive("/dictionary")
                  ? "text-white"
                  : "text-netflix-text hover:text-white"
              )}
            >
              Dicionário
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
