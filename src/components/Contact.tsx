import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        { label: "(66) 99722-0387", link: "tel:+5566997220387" },
        { label: "(66) 99989-9756", link: "tel:+5566999899756" }
      ]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: [
        { 
          label: "agromaisnutricaoanimal01@gmail.com", 
          link: "mailto:agromaisnutricaoanimal01@gmail.com" 
        }
      ]
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        { 
          label: "Avenida dos Bandeirantes, SN", 
          link: "https://maps.app.goo.gl/6z3BhZfzQDurjsxaA" 
        },
        { label: "Distrito de União do Norte" },
        { label: "Peixoto de Azevedo - MT" }
      ]
    },
    {
      icon: Clock,
      title: "CNPJ",
      details: [
        { label: "42.406.627/0001-97" }
      ]
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você. Entre em contato conosco e descubra 
              como podemos ajudar no desenvolvimento da sua propriedade rural.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
                Informações de Contato
              </h3>
              
              <div className="grid gap-4 sm:gap-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-smooth">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                        <div className="p-2 bg-muted rounded-lg border">
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <div key={idx}>
                            {detail.link ? (
                              <a 
                                href={detail.link}
                                target={detail.link.startsWith('http') ? '_blank' : undefined}
                                rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-primary hover:text-primary-dark transition-smooth text-sm sm:text-base"
                              >
                                {detail.label}
                              </a>
                            ) : (
                              <span className="text-muted-foreground text-sm sm:text-base">{detail.label}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-primary border-0 text-primary-foreground">
                <CardContent className="p-4 sm:p-6 text-center">
                  <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Atendimento via WhatsApp
                  </h3>
                  <p className="mb-4 opacity-90 text-sm sm:text-base">
                    Fale conosco diretamente pelo WhatsApp para um atendimento mais rápido
                  </p>
                  <a 
                    href="https://wa.me/5566997220387" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="secondary" 
                      className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold text-sm sm:text-base"
                    >
                      Chamar no WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
                Nossa Localização
              </h3>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.842845384885!2d-54.97468768462773!3d-10.218481292652676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEzJzA2LjUiUyA1NMKwNTgnMjAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Agro+ Nutrição Animal"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/6z3BhZfzQDurjsxaA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full text-sm sm:text-base">
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver no Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  Siga-nos no Instagram
                </h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Acompanhe nossas novidades e dicas para o campo
                </p>
                <a 
                  href="https://instagram.com/agromaisuniaodonorte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground text-sm sm:text-base">
                    @agromaisuniaodonorte
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;