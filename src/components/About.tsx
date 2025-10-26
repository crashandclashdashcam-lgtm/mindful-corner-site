import { ChevronRight } from "lucide-react";
import portraitImage from "@/assets/psychologist-portrait.jpg";
import readingImage from "@/assets/reading-comfort.jpg";

const About = () => {
  const professionalFacts = [
    "Peste 10 ani de experiență în psihoterapie individuală și de cuplu",
    "Am lucrat cu peste 500 de clienți, ajutându-i să găsească echilibrul",
    "Specializare în anxietate, depresie și relații interpersonale",
    "Abordare integrativă combinând tehnici cognitive cu mindfulness",
    "Membru activ al Colegiului Psihologilor din România"
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Top Section - Portrait & Intro */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#f5f1eb] to-[#e8dfd5]">
        {/* Gold particles decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
          <div className="absolute w-3 h-3 bg-primary rounded-full" style={{ top: "10%", right: "15%", animation: "float 3s ease-in-out infinite" }} />
          <div className="absolute w-2 h-2 bg-primary rounded-full" style={{ top: "20%", right: "25%", animation: "float 4s ease-in-out infinite 0.5s" }} />
          <div className="absolute w-4 h-4 bg-primary rounded-full" style={{ top: "15%", right: "35%", animation: "float 3.5s ease-in-out infinite 1s" }} />
          <div className="absolute w-2 h-2 bg-primary rounded-full" style={{ top: "30%", right: "20%", animation: "float 4.5s ease-in-out infinite 1.5s" }} />
          <div className="absolute w-1 h-1 bg-primary rounded-full" style={{ top: "25%", right: "40%", animation: "float 3s ease-in-out infinite 2s" }} />
          <div className="absolute w-3 h-3 bg-primary rounded-full" style={{ top: "35%", right: "30%", animation: "float 4s ease-in-out infinite 2.5s" }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                  Sunt Ana-Maria
                </h2>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                  PSIHOLOG CLINICIAN ȘI PSIHOTERAPEUT, DEDICATĂ TRANSFORMĂRII TALE
                </p>
              </div>

              <p className="text-2xl md:text-3xl font-script text-primary italic">
                Dar mai întâi, să mă descriu...
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Sunt Psiholog Clinician Licențiat, specializat în terapie cognitiv-comportamentală. 
                  (Aceasta nu este doar titulatura mea, ci pasiunea mea!) Abordarea mea terapeutică 
                  este centrată pe client, combinând tehnici validate științific cu empatie și intuiție.
                </p>

                <p className="leading-relaxed">
                  Chiar și cele mai înrădăcinate și complexe provocări comportamentale pot fi transformate 
                  prin coaching-ul meu. Nu este vorba despre remedii rapide, ci despre o îmbunătățire continuă 
                  și susținere.
                </p>

                <p className="leading-relaxed">
                  Știu deja ce este necesar. Trebuie doar să te ajut să o realizezi și tu.
                </p>

                <p className="leading-relaxed">
                  Acest model de coaching mindset te va ajuta să îți îmbunătățești mentalitatea și să îți 
                  creezi obiceiuri sănătoase. Învățându-ți obiceiurile, vei aduce apoi obiceiurile tale în 
                  zonele în care te simți cel mai confortabil.
                </p>
              </div>
            </div>

            {/* Right - Portrait Image */}
            <div className="relative animate-scale-in lg:justify-self-end">
              <div className="relative w-full max-w-md">
                <img 
                  src={portraitImage} 
                  alt="Psiholog Ana-Maria" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-30px) translateX(15px);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>

      {/* Bottom Section - Image & Facts */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Large Image */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={readingImage} 
                  alt="Moment de relaxare" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Professional Facts Card */}
            <div className="animate-slide-up order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h3 className="text-3xl font-serif text-foreground mb-8">
                  Faptele <span className="text-primary">profesionale</span> esențiale:
                </h3>

                <div className="space-y-5">
                  {professionalFacts.map((fact, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group hover-lift transition-all p-3 -ml-3 rounded-lg hover:bg-primary/5"
                    >
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <p className="text-muted-foreground leading-relaxed">
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional decorative element */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Fiecare persoană are în ea resursele necesare pentru vindecare și transformare. 
                    Rolul meu este să te ajut să le descoperi."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
