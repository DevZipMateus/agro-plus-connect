import { Wheat, Pill, Scale, Droplets, Shield, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Wheat,
      title: "Sal Mineral e Proteinado",
      description: "Suplementação nutricional completa para o gado, garantindo saúde e produtividade.",
      features: ["Formulações específicas", "Alta qualidade", "Resultados comprovados"]
    },
    {
      icon: Wheat,
      title: "Rações",
      description: "Rações balanceadas para diferentes tipos de animais e fases produtivas.",
      features: ["Nutrição completa", "Diferentes formulações", "Qualidade premium"]
    },
    {
      icon: Droplets,
      title: "Sementes de Pastagem",
      description: "Sementes selecionadas para formação e recuperação de pastagens.",
      features: ["Alta germinação", "Variedades adaptadas", "Resistência climática"]
    },
    {
      icon: Pill,
      title: "Medicamentos Veterinários",
      description: "Linha completa de medicamentos para prevenção e tratamento animal.",
      features: ["Produtos registrados", "Eficácia comprovada", "Orientação técnica"]
    },
    {
      icon: Wrench,
      title: "Porteiras e Bebedouros",
      description: "Equipamentos robustos para manejo e estrutura da propriedade rural.",
      features: ["Material resistente", "Fácil instalação", "Durabilidade garantida"]
    },
    {
      icon: Scale,
      title: "Balanças",
      description: "Sistemas de pesagem precisos para controle de produção.",
      features: ["Alta precisão", "Tecnologia avançada", "Suporte técnico"]
    }
  ];

  const partners = [
    {
      name: "Facholi Nutrição e Sementes",
      type: "Representante Oficial",
      description: "Parceria estratégica para nutrição animal e sementes de qualidade"
    },
    {
      name: "Metalforce",
      type: "Representante Oficial", 
      description: "Soluções em aço para estruturas rurais e equipamentos"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma linha completa de produtos e soluções para atender todas as 
              necessidades do produtor rural
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-elegant transition-smooth group cursor-pointer h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-muted rounded-full w-fit group-hover:bg-primary/10 transition-smooth border">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{service.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partners Section */}
          <div className="bg-muted rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 border">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Nossos Parceiros
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Representamos marcas de confiança no mercado agropecuário
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="text-center p-4 sm:p-6">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="mb-4">
                      <Badge className="bg-primary text-primary-foreground mb-2 text-xs sm:text-sm">
                        {partner.type}
                      </Badge>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      {partner.name}
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-card rounded-2xl p-6 sm:p-8 shadow-elegant">
            <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Qualidade Garantida
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Todos os nossos produtos passam por rigoroso controle de qualidade. 
              Oferecemos apenas o que há de melhor para o seu rebanho e sua propriedade.
            </p>
            <a 
              href="https://wa.me/5566997220387" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold transition-smooth text-sm sm:text-base">
                Solicite um Orçamento
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;