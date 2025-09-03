import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/17f44d35-a4db-4e16-8c24-a83cd800f4c7.png",
      alt: "CochoFlex Durafort - Metalforce",
      title: "CochoFlex Durafort",
      description: "Parede chanfrada para empilhamento e transporte. Polietileno 100% virgem."
    },
    {
      src: "/lovable-uploads/1370a7d1-eb12-4644-886a-39fd5e036ec0.png",
      alt: "Sementes Facholi Platina",
      title: "Sementes Facholi Platina",
      description: "A semente grafitada da Facholi. Alta pureza, excelente plantabilidade e ótima fluidez."
    },
    {
      src: "/lovable-uploads/fdb52f4b-cbab-46c0-8706-9a4e15e73f1e.png",
      alt: "Novas Tecnologias Nutrição Animal Facholi",
      title: "Linha de Nutrição Animal",
      description: "Novas tecnologias da linha de nutrição animal Facholi para equinos."
    },
    {
      src: "/lovable-uploads/56ce515e-d7c8-498f-bac0-b2276badd42a.png",
      alt: "PotenFós Rebanho - Facholi",
      title: "PotenFós Rebanho",
      description: "Cromo orgânico, 25% de proteína. Maximize seus resultados com mais ganho de peso."
    },
    {
      src: "/lovable-uploads/805b4bfb-c600-4614-bd2c-6edc9cb79a4c.png",
      alt: "PotenFós 80 Plus - Facholi",
      title: "PotenFós 80 Plus",
      description: "Máximo desempenho na sua vacada com excelente escore corporal e maior índice de prenhez."
    },
    {
      src: "/lovable-uploads/e45203e8-20ab-491e-b152-4e0fa85c75b2.png",
      alt: "Linha PotenFós - Bezerros Alta Qualidade",
      title: "Bezerros de Alta Qualidade",
      description: "Invista na produção de bezerros de alta qualidade com a linha PotenFós."
    },
    {
      src: "/lovable-uploads/4e8351a0-1b38-4f2c-8452-37846545f6ad.png",
      alt: "Bebedouro Australiano - Metalforce",
      title: "Bebedouro Australiano",
      description: "Modo adequado de fornecimento de água com pintura eletrostática e diferentes capacidades."
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Produtos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça a qualidade dos produtos das marcas Facholi e Metalforce que oferecemos
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-muted shadow-elegant">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 relative"
                  >
                    <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                        <div className="max-w-3xl">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm sm:text-base text-white/90">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              onClick={goToPrevious}
              aria-label="Produto anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              onClick={goToNext}
              aria-label="Próximo produto"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentIndex === index 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para produto ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-muted rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Interessou-se por algum produto?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Entre em contato conosco para saber mais informações, preços e disponibilidade
              </p>
              <a 
                href="https://wa.me/5566997220387" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold">
                  Solicitar Informações
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;