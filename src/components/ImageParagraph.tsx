import { Button } from "./ui/button";
import celebratingImage from "@/assets/woman-celebrating.jpg";
import relaxingImage from "@/assets/woman-relaxing.jpg";
import kitchenImage from "@/assets/woman-kitchen.jpg";

const scrollToServices = () => {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
};

const ImageParagraph = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ea]">
      {/* Teal curved wave at top */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-br from-[#0d5f6f] to-[#1a8a9f] overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,64 C320,96 480,32 720,64 C960,96 1120,32 1440,64 L1440,0 L0,0 Z" 
            fill="currentColor"
            className="text-[#0d5f6f]"
          />
        </svg>
        
        {/* Gold particles on wave */}
        <div className="absolute top-4 left-[15%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-8 left-[18%] w-2 h-2 bg-[#d4af37]" />
        <div className="absolute top-6 left-[22%] w-1.5 h-1.5 bg-[#d4af37]" />
        <div className="absolute top-10 left-[25%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-4 left-[28%] w-2 h-2 bg-[#d4af37]" />
        <div className="absolute top-7 left-[32%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-5 left-[35%] w-1.5 h-1.5 bg-[#d4af37]" />
        <div className="absolute top-9 left-[38%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-6 left-[42%] w-2 h-2 bg-[#d4af37]" />
        <div className="absolute top-4 left-[45%] w-1 h-1 bg-[#d4af37]" />
        <div className="absolute top-8 left-[48%] w-1.5 h-1.5 bg-[#d4af37]" />
      </div>

      <div className="container-custom relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Three images artistically positioned */}
          <div className="lg:col-span-5 relative h-[500px] md:h-[600px]">
            {/* Bottom left image - relaxing */}
            <div 
              className="absolute bottom-0 left-0 w-48 h-64 md:w-56 md:h-72 overflow-hidden shadow-2xl z-10"
            >
              <img 
                src={relaxingImage} 
                alt="Relaxare și echilibru" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top center image - celebrating */}
            <div 
              className="absolute top-0 left-1/4 md:left-1/3 w-56 h-80 md:w-64 md:h-96 overflow-hidden shadow-2xl z-20"
            >
              <img 
                src={celebratingImage} 
                alt="Eliberare și bucurie" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side image - kitchen */}
            <div 
              className="absolute top-16 right-0 w-64 h-72 md:w-80 md:h-80 overflow-hidden shadow-2xl z-30"
            >
              <img 
                src={kitchenImage} 
                alt="Împuternicire și încredere" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text content with large overlapping words */}
          <div className="lg:col-span-7 space-y-6 relative z-40">
            {/* Large overlapping text */}
            <div className="space-y-0 mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground/20 leading-none">
                ELIBERATĂ
              </h2>
              <p className="text-2xl md:text-3xl font-script text-[#a53860] italic -mt-2 ml-4">
                E timpul să te simți...
              </p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground/20 leading-none -mt-1">
                ALINIATĂ
              </h3>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground/20 leading-none -mt-1">
                ÎMPUTERNICITĂ
              </h3>
            </div>

            {/* Paragraph text */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Meriți să înflorești, nu doar să supraviețuiești. Pornește muzica preferată 
                (eu ascult Lizzo non-stop) și pregătește-te să parcurgem împreună calea 
                spre schimbarea <span className="italic">lumii</span> tale.
              </p>

              <Button 
                onClick={scrollToServices}
                size="lg"
                className="bg-[#a53860] hover:bg-[#8b2f50] text-white mt-6 px-8 py-6 text-base font-medium uppercase tracking-wide"
              >
                Vezi serviciile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageParagraph;
