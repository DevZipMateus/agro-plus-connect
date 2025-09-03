import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <img 
                    src="/lovable-uploads/038df2fe-fc88-4942-85ee-8f62c9f0a969.png"
                    alt="Agro+ Nutrição Animal" 
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Agro+ Nutrição Animal</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Mais que produtos, entregamos soluções
                  </p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Fundada em 2022, oferecemos produtos de qualidade, atendimento personalizado 
                e soluções completas para o dia a dia de quem vive e trabalha no campo.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>CNPJ:</strong> 42.406.627/0001-97
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <div className="text-sm">
                    <a 
                      href="tel:+5566997220387"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth block"
                    >
                      (66) 99722-0387
                    </a>
                    <a 
                      href="tel:+5566999899756"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth block"
                    >
                      (66) 99989-9756
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5" />
                  <a 
                    href="mailto:agromaisnutricaoanimal01@gmail.com"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    agromaisnutricaoanimal01@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5" />
                  <div className="text-sm text-primary-foreground/80">
                    <p>Avenida dos Bandeirantes, SN</p>
                    <p>Distrito de União do Norte</p>
                    <p>Peixoto de Azevedo - MT</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Instagram size={16} />
                  <a 
                    href="https://instagram.com/agromaisuniaodonorte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    @agromaisuniaodonorte
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Agro+ Nutrição Animal. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/5566997220387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-lg text-sm font-medium transition-smooth"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://maps.app.goo.gl/6z3BhZfzQDurjsxaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                >
                  Como Chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;