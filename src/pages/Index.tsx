import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageParagraph from "@/components/ImageParagraph";
import Empowerment from "@/components/Empowerment";
import About from "@/components/About";
import Services from "@/components/Services";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ImageParagraph />
        <Empowerment />
        <About />
        <Services />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
