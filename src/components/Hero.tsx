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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f1ea]">
      {/* Teal curved wave at top */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-gradient-to-br from-[#0d5f6f] to-[#1a8a9f] overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,64 C320,96 480,32 720,64 C960,96 1120,32 1440,64 L1440,0 L0,0 Z" 
            fill="currentColor"
            className="text-[#0d5f6f]"
          />
        </svg>
        
        {/* Gold particles on wave */}
        <div className="absolute top-4 left-[10%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-8 left-[13%] w-2 h-2 bg-[#d4af37]" />
        <div className="absolute top-6 left-[17%] w-1.5 h-1.5 bg-[#d4af37]" />
        <div className="absolute top-10 left-[20%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-5 left-[24%] w-2 h-2 bg-[#d4af37]" />
        <div className="absolute top-7 left-[28%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-9 left-[32%] w-1.5 h-1.5 bg-[#d4af37]" />
        <div className="absolute top-4 left-[36%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-8 left-[40%] w-2 h-2 bg-[#d4af37]" />
        <div className="absolute top-6 left-[44%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-10 left-[48%] w-1.5 h-1.5 bg-[#d4af37]" />
        <div className="absolute top-5 left-[52%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-7 left-[56%] w-2 h-2 bg-[#d4af37]" />
      </div>

      {/* Background Image - Right side */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: "0.4"
        }}
      />

      {/* Content Container */}
      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Text Content */}
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 lg:p-16 shadow-2xl animate-fade-in max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              Un spațiu sigur pentru{" "}
              <span className="text-[#0d5f6f]">echilibru emoțional</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Psihoterapie și consiliere profesională pentru dezvoltare personală,
              relații armonioase și depășirea momentelor dificile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-[#a53860] hover:bg-[#8b2f50] text-white text-lg px-8 py-6 uppercase tracking-wide font-medium"
              >
                Programează o consultație
              </Button>
              <Button
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#0d5f6f] hover:bg-[#0a4d5a] text-white text-lg px-8 py-6 uppercase tracking-wide font-medium"
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
        <div className="w-6 h-10 border-2 border-[#0d5f6f] flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#0d5f6f]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
