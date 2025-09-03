import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    },
    {
      src: "/lovable-uploads/4780d9f1-c5e0-4722-88a2-515233d4e26c.png",
      alt: "Porteiras em Aço - Metalforce",
      title: "Porteiras em Aço",
      description: "Porteiras para divisão de pasto, curral e confinamento. Tamanhos de 2 a 6 metros com pintura eletrostática."
    },
    {
      src: "/lovable-uploads/64fcda41-3a97-4b72-87cc-3de7bb9a4c81.png",
      alt: "PotenFós Cria - Facholi",
      title: "PotenFós Cria",
      description: "Bezerros mais pesados e melhora o escore corporal das matrizes."
    },
    {
      src: "/lovable-uploads/e67ca76d-5bbc-4ab5-9ccb-db386a4d020d.png",
      alt: "Linha Metalforce Completa",
      title: "Soluções em Aço Metalforce",
      description: "Embarcador, cochos com e sem cobertura, bebedouro australiano e tronco de contenção robust."
    },
    {
      src: "/lovable-uploads/27a9352e-d77c-43ab-beb2-b22713831c83.png",
      alt: "PotenFós 80 - Facholi",
      title: "PotenFós 80",
      description: "Com 80g de fósforo para mais produtividade. Suplemento mineral de alta performance."
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Set up carousel API
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  const openImageModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowLeft') {
        navigateModal('prev');
      } else if (e.key === 'ArrowRight') {
        navigateModal('next');
      } else if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, selectedImage]);

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
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="hover:shadow-elegant transition-smooth group cursor-pointer h-full">
                      <CardContent className="p-0 relative">
                        <div 
                          className="aspect-[4/3] overflow-hidden rounded-t-lg cursor-zoom-in"
                          onClick={() => openImageModal(index)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          {/* Zoom indicator */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground overflow-hidden text-ellipsis" 
                             style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                            {image.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden sm:flex -left-12 bg-white/20 border-white/30 text-foreground hover:bg-white/30 backdrop-blur-sm" />
              <CarouselNext className="hidden sm:flex -right-12 bg-white/20 border-white/30 text-foreground hover:bg-white/30 backdrop-blur-sm" />
            </Carousel>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    current === index + 1 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
              {selectedImage !== null && (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Close Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                    onClick={closeImageModal}
                  >
                    <X className="h-6 w-6" />
                  </Button>

                  {/* Navigation Buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full"
                    onClick={() => navigateModal('prev')}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full"
                    onClick={() => navigateModal('next')}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>

                  {/* Main Image */}
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="relative max-w-full max-h-full">
                      <img
                        src={images[selectedImage].src}
                        alt={images[selectedImage].alt}
                        className="max-w-full max-h-full object-contain"
                      />
                      
                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                          {images[selectedImage].title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base">
                          {images[selectedImage].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white text-sm">
                      {selectedImage + 1} de {images.length}
                    </span>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

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