import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Users, User, Video, Heart, Brain, Smile } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Psihoterapie individuală",
      description:
        "Abordare personalizată pentru anxietate, depresie, stres, traumă și dezvoltare personală.",
      price: "250 RON / ședință (50 min)",
    },
    {
      icon: Users,
      title: "Terapie de cuplu",
      description:
        "Îmbunătățirea comunicării, rezolvarea conflictelor și consolidarea relației de cuplu.",
      price: "300 RON / ședință (60 min)",
    },
    {
      icon: Video,
      title: "Consiliere online",
      description:
        "Sesiuni de terapie prin video-call pentru flexibilitate și acces ușor din orice locație.",
      price: "230 RON / ședință (50 min)",
    },
    {
      icon: Heart,
      title: "Terapie pentru adolescenți",
      description:
        "Suport specializat pentru adolescenți în gestionarea emoțiilor și schimbărilor specifice vârstei.",
      price: "230 RON / ședință (45 min)",
    },
    {
      icon: Brain,
      title: "Evaluare psihologică",
      description:
        "Evaluări complete pentru diagnostic și planificare terapeutică personalizată.",
      price: "350 RON / evaluare",
    },
    {
      icon: Smile,
      title: "Workshop-uri de grup",
      description:
        "Sesiuni de grup pentru management stress, mindfulness și dezvoltare personală.",
      price: "La cerere",
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
              className="hover-lift bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-semibold text-lg">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-secondary/30 rounded-2xl text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Notă:</strong> Prima ședință de evaluare este
            esențială pentru stabilirea unui plan terapeutic personalizat. Tarifele pot varia
            în funcție de complexitatea cazului. Acceptăm și programări urgente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
