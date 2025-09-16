import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/CartDrawer";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-heading font-semibold text-foreground">
            <Sparkles className="h-6 w-6 text-primary" />
            <span>Nova-Wear</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-smooth">
              Products
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-smooth">
              Blog
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <CartDrawer />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;