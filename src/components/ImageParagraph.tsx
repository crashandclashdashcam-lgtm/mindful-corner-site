import { Button } from "./ui/button";
import therapyImage from "@/assets/therapy-session-1.jpg";
import empowermentImage from "@/assets/empowerment-1.jpg";
import wellnessImage from "@/assets/wellness-1.jpg";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const ImageParagraph = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative particles */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Gold particles effect */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden opacity-30">
        <div className="absolute w-2 h-2 bg-primary" style={{ top: "10%", left: "15%", animation: "float 3s ease-in-out infinite" }} />
        <div className="absolute w-1 h-1 bg-primary" style={{ top: "30%", left: "25%", animation: "float 4s ease-in-out infinite 0.5s" }} />
        <div className="absolute w-3 h-3 bg-primary" style={{ top: "20%", left: "35%", animation: "float 3.5s ease-in-out infinite 1s" }} />
        <div className="absolute w-2 h-2 bg-primary" style={{ top: "40%", left: "45%", animation: "float 4.5s ease-in-out infinite 1.5s" }} />
        <div className="absolute w-1 h-1 bg-primary" style={{ top: "15%", left: "55%", animation: "float 3s ease-in-out infinite 2s" }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Images in artistic layout */}
          <div className="lg:col-span-5 relative h-[600px]">
            {/* Image 1 - Bottom left */}
            <div 
              className="absolute bottom-0 left-0 w-64 h-80 overflow-hidden shadow-2xl border-4 border-white hover-scale z-10"
              style={{ transform: "rotate(-5deg)" }}
            >
              <img 
                src={wellnessImage} 
                alt="Stare de bine" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 - Top center */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-96 overflow-hidden shadow-2xl border-4 border-white hover-scale z-20"
              style={{ transform: "rotate(3deg)" }}
            >
              <img 
                src={empowermentImage} 
                alt="Împuternicire" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 - Right side */}
            <div 
              className="absolute top-32 right-0 w-64 h-72 overflow-hidden shadow-2xl border-4 border-white hover-scale z-10"
              style={{ transform: "rotate(-3deg)" }}
            >
              <img 
                src={therapyImage} 
                alt="Sesiune de terapie" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Large text overlay */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground/10 leading-tight mb-4">
                ECHILIBRU
              </h2>
              <p className="text-3xl md:text-4xl font-script text-primary italic -mt-6">
                E timpul să te simți...
              </p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground/10 leading-tight mt-2">
                ÎMPUTERNICIT
              </h3>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meriti să înflorești, nu doar să supraviețuiești. Este timpul să te redescoperi 
                și să îți recapeți puterea interioară. Împreună vom explora calea spre o viață 
                mai autentică, mai echilibrată și mai împlinită.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Într-un spațiu sigur și fără judecată, vei învăța să îți recunoști valorile, 
                să îți stabilești limite sănătoase și să construiești relația pe care o meriți 
                cu tine însuți și cu cei din jurul tău.
              </p>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Începe Transformarea
              </Button>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary">
              <p className="text-lg italic text-muted-foreground">
                "Schimbarea începe în momentul în care decizi că meriți mai mult decât ceea ce ai acum."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageParagraph;
