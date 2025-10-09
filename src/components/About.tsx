import { CheckCircle2 } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const qualifications = [
    "Licență în Psihologie, Universitatea București",
    "Master în Psihoterapie Cognitiv-Comportamentală",
    "Acreditare Colegiul Psihologilor din România",
    "Formare continuă în terapia de cuplu și familie",
    "Certificare în intervenții trauma și EMDR",
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

            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Formare și certificări:
              </h3>
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{qual}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
