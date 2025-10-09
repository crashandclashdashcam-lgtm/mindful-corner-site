import { GraduationCap, Award, BookOpen, Heart, Brain } from "lucide-react";
import { Badge } from "./ui/badge";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Licență în Psihologie",
      institution: "Universitatea București",
      year: "2012",
      type: "Educație fundamentală",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Award,
      title: "Master Psihoterapie Cognitiv-Comportamentală",
      institution: "Universitatea București",
      year: "2014",
      type: "Specializare",
      color: "bg-secondary/20 text-secondary-foreground",
    },
    {
      icon: BookOpen,
      title: "Acreditare CPR",
      institution: "Colegiul Psihologilor din România",
      year: "2015",
      type: "Certificare profesională",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Heart,
      title: "Formare în Terapia de Cuplu și Familie",
      institution: "Institutul de Terapie de Familie",
      year: "2018",
      type: "Formare continuă",
      color: "bg-accent/20 text-accent-foreground",
    },
    {
      icon: Brain,
      title: "Certificare EMDR",
      institution: "EMDR Europe Accredited Training",
      year: "2020",
      type: "Specializare trauma",
      color: "bg-secondary/20 text-secondary-foreground",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 z-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image placeholder */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Poză profesională</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Despre mine
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-4">
                Cu empatie și profesionalism
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sunt psiholog clinician cu peste 10 ani de experiență în
                psihoterapie individuală și de cuplu. Abordarea mea este
                centrată pe client, combinând tehnici din terapia
                cognitiv-comportamentală cu elemente de mindfulness și
                intervenții bazate pe empatie.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cred că fiecare persoană are resursele necesare pentru schimbare
              și vindecare. Rolul meu este să creez un mediu sigur și
              non-judgmental unde să poți explora gândurile, emoțiile și
              comportamentele într-un mod autentic.
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Formare și certificări
              </h3>
              <div className="grid gap-4">
                {qualifications.map((qual, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-card rounded-xl border border-border hover-lift transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon container */}
                      <div className={`w-12 h-12 rounded-lg ${qual.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <qual.icon className="w-6 h-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                            {qual.title}
                          </h4>
                          <Badge variant="secondary" className="flex-shrink-0 text-xs">
                            {qual.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {qual.institution}
                        </p>
                        <Badge className={`${qual.color} border-0 text-xs`}>
                          {qual.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Formare continuă:</strong> Particip regulat 
                  la conferințe internaționale, workshop-uri și supervizare clinică pentru a menține 
                  cele mai înalte standarde profesionale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
