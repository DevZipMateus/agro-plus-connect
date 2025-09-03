import { Target, Eye, Heart, Leaf, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Trabalhamos apenas com marcas e produtos de confiança"
    },
    {
      icon: Clock,
      title: "Compromisso",
      description: "Priorizamos o atendimento rápido e eficiente"
    },
    {
      icon: Heart,
      title: "Respeito ao Cliente",
      description: "Cada pessoa é tratada com atenção e cuidado"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Incentivamos práticas que preservem o meio ambiente"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sobre a Agro+ Nutrição Animal
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Fundada em 2022 com o propósito de atender às necessidades do homem e da mulher do campo
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Nossa História</h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  Fundada com o propósito de atender às necessidades do homem e da mulher do campo, 
                  Agro+ Nutrição Animal nasceu em 2022 na cidade de Peixoto de Azevedo, no distrito 
                  de União do Norte.
                </p>
                <p>
                  Desde o início, nosso compromisso sempre foi oferecer produtos de qualidade, 
                  atendimento personalizado e soluções completas para o dia a dia de quem vive 
                  e trabalha no campo.
                </p>
                <p>
                  Ao longo dos anos, conquistamos a confiança de produtores rurais, criadores e 
                  amantes da vida no campo, sendo reconhecidos pela seriedade, respeito e dedicação 
                  com que tratamos cada cliente.
                </p>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-6 sm:p-8 shadow-elegant order-1 lg:order-2">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2022</div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-4">Ano de Fundação</div>
                <div className="text-base sm:text-lg font-medium text-foreground">
                  Peixoto de Azevedo - União do Norte
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-4 sm:pt-6">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">🌱 Nossa Missão</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Fornecer produtos e serviços que contribuam para o desenvolvimento sustentável 
                  do campo, apoiando o produtor rural em todas as etapas, com qualidade, 
                  eficiência e atendimento humano.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-4 sm:pt-6">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">💡 Nossa Visão</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Ser referência regional em soluções agropecuárias, tornando-se o ponto de 
                  confiança para quem busca qualidade, variedade e suporte especializado.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-smooth sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-4 sm:pt-6">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">🤝 Nossos Valores</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Tradição e Inovação: unimos experiência de mercado com tecnologias modernas 
                  para oferecer o melhor.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-4 sm:p-6 shadow-elegant hover:shadow-glow transition-smooth text-center"
              >
                <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{value.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-muted rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border">
              <p className="text-base sm:text-lg text-foreground font-medium">
                "Aqui, você encontra muito mais que produtos: encontra parceria, conhecimento 
                e confiança para cuidar da sua produção e do seu negócio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;