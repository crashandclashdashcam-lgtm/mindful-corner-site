import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, User, Video, Heart, Brain, Smile, Clock, CheckCircle2, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Psihoterapie individuală",
      description:
        "Sesiuni personalizate pentru a aborda anxietatea, depresia, stresul, trauma și dezvoltarea personală într-un mediu sigur și confidențial.",
      price: "250",
      duration: "50 min",
      badge: "Popular",
      badgeColor: "bg-primary/10 text-primary",
      benefits: [
        "Evaluare clinică completă",
        "Plan terapeutic personalizat",
        "Tehnici cognitive și comportamentale",
      ],
      gradient: "from-primary/5 to-primary/10",
    },
    {
      icon: Users,
      title: "Terapie de cuplu",
      description:
        "Îmbunătățirea comunicării, rezolvarea conflictelor și consolidarea legăturii emoționale dintre parteneri prin tehnici validate științific.",
      price: "300",
      duration: "60 min",
      badge: "Extins",
      badgeColor: "bg-secondary/20 text-secondary-foreground",
      benefits: [
        "Comunicare eficientă",
        "Rezolvare conflicte",
        "Intimitate emoțională",
      ],
      gradient: "from-secondary/5 to-secondary/10",
    },
    {
      icon: Video,
      title: "Consiliere online",
      description:
        "Acces la servicii psihologice de calitate din confortul casei tale, prin platforme securizate de videoconferință.",
      price: "230",
      duration: "50 min",
      badge: "Flexibil",
      badgeColor: "bg-accent/20 text-accent-foreground",
      benefits: [
        "Acces de oriunde",
        "Program flexibil",
        "Platformă securizată",
      ],
      gradient: "from-accent/5 to-accent/10",
    },
    {
      icon: Heart,
      title: "Terapie pentru adolescenți",
      description:
        "Suport specializat adaptat nevoilor emoționale ale adolescenților, pentru gestionarea anxietății, identității și relațiilor.",
      price: "230",
      duration: "45 min",
      badge: "Specializat",
      badgeColor: "bg-lavender/20 text-foreground",
      benefits: [
        "Adaptată vârstei",
        "Gestionare emoțională",
        "Suport parental inclus",
      ],
      gradient: "from-lavender/5 to-lavender/10",
    },
    {
      icon: Brain,
      title: "Evaluare psihologică",
      description:
        "Evaluări comprehensive utilizând instrumente validate pentru diagnostic precis și planificare terapeutică individualizată.",
      price: "350",
      duration: "90-120 min",
      badge: "Comprehensiv",
      badgeColor: "bg-primary/10 text-primary",
      benefits: [
        "Instrumente validate",
        "Raport detaliat",
        "Recomandări personalizate",
      ],
      gradient: "from-primary/5 to-primary/10",
    },
    {
      icon: Smile,
      title: "Workshop-uri de grup",
      description:
        "Sesiuni interactive de grup pentru mindfulness, management stress, comunicare și dezvoltare personală.",
      price: "La cerere",
      duration: "120 min",
      badge: "Interactiv",
      badgeColor: "bg-secondary/20 text-secondary-foreground",
      benefits: [
        "Învățare colectivă",
        "Practici interactive",
        "Suport continuu",
      ],
      gradient: "from-secondary/5 to-secondary/10",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Servicii
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-6">
            Tipuri de consultații și tarife
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferim o gamă variată de servicii psihologice adaptate nevoilor tale.
            Prima consultație include evaluare inițială și stabilirea planului terapeutic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`hover-lift bg-gradient-to-br ${service.gradient} border-border animate-slide-up overflow-hidden relative group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className={`${service.badgeColor} border-0`}>
                    {service.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-base leading-relaxed min-h-[80px]">
                  {service.description}
                </CardDescription>

                {/* Benefits list */}
                <div className="mt-4 space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex items-baseline justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <div className="flex items-baseline gap-2">
                      {service.price !== "La cerere" && (
                        <>
                          <span className="text-3xl font-bold text-primary">{service.price}</span>
                          <span className="text-lg text-muted-foreground">RON</span>
                        </>
                      )}
                      {service.price === "La cerere" && (
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  
                  {service.price !== "La cerere" && (
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">per ședință</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-card rounded-2xl border border-border text-center hover-lift">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Prima ședință</h3>
            <p className="text-sm text-muted-foreground">
              Include evaluare completă și stabilirea planului terapeutic personalizat
            </p>
          </div>

          <div className="p-6 bg-card rounded-2xl border border-border text-center hover-lift">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Programări urgente</h3>
            <p className="text-sm text-muted-foreground">
              Oferim disponibilitate pentru situații care necesită intervenție rapidă
            </p>
          </div>

          <div className="p-6 bg-card rounded-2xl border border-border text-center hover-lift">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Pachete de ședințe</h3>
            <p className="text-sm text-muted-foreground">
              Tarife speciale disponibile pentru pachete de 5 sau 10 ședințe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
