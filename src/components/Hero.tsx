import { Button } from "./ui/button";
import heroImage from "@/assets/hero-psychologist.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Clear visibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Content Container */}
      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - White Card with Text */}
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl animate-fade-in max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              Un spațiu sigur pentru{" "}
              <span className="text-primary">echilibru emoțional</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Psihoterapie și consiliere profesională pentru dezvoltare personală,
              relații armonioase și depășirea momentelor dificile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 hover-lift"
              >
                Programează o consultație
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6"
              >
                Descoperă mai multe
              </Button>
            </div>
          </div>

          {/* Right - Space for psychologist image (visible in background) */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
