import { ArrowRight, Leaf, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with responsive positioning */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-center lg:bg-center"
        style={{
          backgroundImage: 'url(/lovable-uploads/d130e9c9-bd7f-45e8-8ed0-202fcff5ddee.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 mb-4 sm:mb-6">
                <Leaf className="h-4 w-4 text-accent" />
                <span className="text-white text-xs sm:text-sm font-medium">Desde 2022 no campo</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Agro+ Nutrição Animal
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 font-medium">
                Mais que produtos, entregamos soluções
              </p>
              
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Oferecemos produtos de qualidade, atendimento personalizado e soluções completas para o dia a dia de quem vive e trabalha no campo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/5566997220387" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8">
                    Fale Conosco
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-6 sm:px-8"
                  onClick={scrollToContact}
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Qualidade Garantida</h3>
                <p className="text-white/80 text-xs sm:text-sm">Trabalhamos apenas com marcas de confiança</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Atendimento Personalizado</h3>
                <p className="text-white/80 text-xs sm:text-sm">Cada cliente é tratado com atenção e cuidado</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center sm:col-span-2">
                <Leaf className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Sustentabilidade</h3>
                <p className="text-white/80 text-xs sm:text-sm">Incentivamos práticas que preservem o meio ambiente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile for better UX */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;