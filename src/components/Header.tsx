import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Início", section: "hero" },
    { label: "Sobre", section: "about" },
    { label: "Serviços", section: "services" },
    { label: "Contato", section: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-elegant border-b transition-smooth">
      {/* Top bar with contact info */}
      <div className="bg-white border-b py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-foreground">
          <div className="flex items-center gap-4">
            <a 
              href="tel:+5566997220387" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Phone size={16} />
              (66) 99722-0387
            </a>
            <a 
              href="mailto:agromaisnutricaoanimal01@gmail.com" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Mail size={16} />
              agromaisnutricaoanimal01@gmail.com
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            Peixoto de Azevedo - União do Norte
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/038df2fe-fc88-4942-85ee-8f62c9f0a969.png"
              alt="Agro+ Nutrição Animal - Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h2 className="font-bold text-lg text-primary">Agro+ Nutrição Animal</h2>
              <p className="text-xs text-muted-foreground">Mais que produtos, entregamos soluções</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-foreground hover:text-primary font-medium transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://wa.me/5566997220387" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary-dark transition-smooth">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-left text-foreground hover:text-primary font-medium transition-smooth"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://wa.me/5566997220387" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button className="bg-primary hover:bg-primary-dark transition-smooth">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;