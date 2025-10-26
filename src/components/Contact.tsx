import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Eroare",
        description: "Te rugăm să completezi toate câmpurile obligatorii.",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp integration
    const whatsappMessage = encodeURIComponent(
      `Bună ziua,\n\nNumele meu este ${formData.name}.\nEmail: ${formData.email}\nTelefon: ${formData.phone || "N/A"}\n\nMesaj: ${formData.message}`
    );
    const whatsappUrl = `https://wa.me/40700000000?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Succes!",
      description: "Te redirecționăm către WhatsApp pentru confirmare.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const benefits = [
    "Răspuns în maxim 24 de ore",
    "Prima consultație include evaluare completă",
    "Confidențialitate garantată 100%",
    "Opțiuni de programare flexibile"
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-b from-background to-[#f5f1eb] py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            HAI SĂ ÎNCEPEM
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight">
            Programează o <span className="text-primary italic">consultație</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Primul pas către transformare începe cu o simplă conversație. 
            Completează formularul și te voi contacta în cel mai scurt timp.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info & Benefits */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+40700000000"
                className="block bg-white border-2 border-border p-6 hover:border-primary transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Apelează acum</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      +40 700 000 000
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@cabinet-psihologie.ro"
                className="block bg-white border-2 border-border p-6 hover:border-primary transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Trimite email</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                      contact@cabinet-psihologie.ro
                    </p>
                  </div>
                </div>
              </a>

              <div className="bg-white border-2 border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Cabinet</p>
                    <p className="text-lg font-semibold text-foreground">
                      Str. Exemplu nr. 123<br />București, România
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="bg-primary/5 border-2 border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif text-foreground">Program consultații</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Luni - Vineri</span>
                  <span className="font-medium">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sâmbătă</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Duminică</span>
                  <span className="font-medium">Închis</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border-2 border-border p-8 lg:p-10">
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Solicită o programare
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nume complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Introduceți numele și prenumele"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemplu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+40 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mesajul tău *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descrie pe scurt motivul pentru care dorești să programezi o consultație..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[180px] border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Trimite cererea pe WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Câmpuri obligatorii. Datele tale sunt protejate conform GDPR și vor fi folosite strict 
                  în scop de programare și comunicare profesională.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
