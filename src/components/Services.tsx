import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Users, User, Video, Heart, Clock, CheckCircle2, Sparkles, Award, Calendar } from "lucide-react";
import therapyAbstract from "@/assets/therapy-abstract.jpg";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Consultație individuală",
      description:
        "Sesiuni personalizate pentru anxietate, depresie, stres și dezvoltare personală. Abordare integrativă adaptată nevoilor tale unice.",
      price: "250",
      duration: "50 minute",
      highlights: [
        "Evaluare clinică completă",
        "Plan terapeutic personalizat",
        "Tehnici validate științific",
        "Suport între ședințe"
      ],
      badge: "Cel mai popular",
    },
    {
      icon: Users,
      title: "Terapie de cuplu",
      description:
        "Îmbunătățiți comunicarea, rezolvați conflictele și redescoperă conexiunea emoțională. Pentru relații mai armonioase.",
      price: "350",
      duration: "75 minute",
      highlights: [
        "Comunicare eficientă",
        "Rezolvare sănătoasă a conflictelor",
        "Reconstruire intimitate",
        "Exerciții practice pentru acasă"
      ],
      badge: "Sesiune extinsă",
    },
    {
      icon: Video,
      title: "Consiliere online",
      description:
        "Acces la terapie profesională din confortul casei tale. Platformă securizată, confidențialitate garantată.",
      price: "230",
      duration: "50 minute",
      highlights: [
        "Program flexibil 24/7",
        "Acces de oriunde",
        "Platformă GDPR compliant",
        "Același nivel de profesionalism"
      ],
      badge: "Flexibilitate maximă",
    },
    {
      icon: Heart,
      title: "Terapie pentru adolescenți",
      description:
        "Suport specializat pentru provocările adolescenței. Gestionarea emoțiilor, identitate și relații sociale.",
      price: "230",
      duration: "45 minute",
      highlights: [
        "Abordare adaptată vârstei",
        "Dezvoltare identitate",
        "Management emoțional",
        "Consultare părinți inclusă"
      ],
      badge: "Specializare",
    },
  ];

  const packages = [
    {
      title: "Pachet Starter",
      sessions: "5 ședințe",
      price: "1.150",
      originalPrice: "1.250",
      discount: "8%",
      features: [
        "Economisești 100 RON",
        "Valabil 2 luni",
        "Flexibilitate programare"
      ]
    },
    {
      title: "Pachet Intensiv",
      sessions: "10 ședințe",
      price: "2.150",
      originalPrice: "2.500",
      discount: "14%",
      features: [
        "Economisești 350 RON",
        "Valabil 4 luni",
        "Prioritate la programări"
      ],
      popular: true
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-[#f8f6f3] to-background">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-96 opacity-20 pointer-events-none">
        <img src={therapyAbstract} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            SERVICII ȘI TARIFE
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
            Tipuri de <span className="text-primary italic">consultații</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fiecare ședință este personalizată în funcție de nevoile tale. 
            Oferim flexibilitate și suport continuu pe parcursul călătoriei tale de transformare.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-8">
                {/* Badge */}
                {service.badge && (
                  <Badge className="mb-4 bg-primary/10 text-primary border-0 w-fit">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {service.badge}
                  </Badge>
                )}

                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">{service.price}</span>
                      <span className="text-lg text-muted-foreground">RON</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">per ședință</p>
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Programează-te
                  </Button>
                </div>
              </CardHeader>
            </div>
          ))}
        </div>

        {/* Packages Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5" />
              <span className="font-medium">Oferte speciale</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Pachete de ședințe
            </h3>
            <p className="text-muted-foreground">
              Economisește și asigură-ți continuitatea în terapie cu pachetele noastre avantajoase
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 hover-lift ${
                  pkg.popular ? "border-primary shadow-2xl scale-105" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    Cel mai avantajos
                  </div>
                )}

                <CardHeader className="p-8">
                  <h4 className="text-2xl font-serif text-foreground mb-2">{pkg.title}</h4>
                  <p className="text-muted-foreground mb-6">{pkg.sessions}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-xl text-muted-foreground">RON</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        {pkg.originalPrice} RON
                      </span>
                      <Badge className="bg-green-500/10 text-green-700 border-0">
                        Economisești {pkg.discount}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className={pkg.popular ? "w-full bg-primary hover:bg-primary/90" : "w-full"}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Alege acest pachet
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border border-border/50 hover-lift">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Prima ședință</h4>
            <p className="text-sm text-muted-foreground">
              Include evaluare completă și stabilirea planului terapeutic personalizat
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-border/50 hover-lift">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Programări urgente</h4>
            <p className="text-sm text-muted-foreground">
              Disponibilitate pentru situații care necesită intervenție rapidă
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-border/50 hover-lift">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Confidențialitate</h4>
            <p className="text-sm text-muted-foreground">
              Toate ședințele sunt strict confidențiale conform codului deontologic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
