import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
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
      toast.error("Te rugăm să completezi toate câmpurile obligatorii.");
      return;
    }

    // WhatsApp integration
    const whatsappMessage = encodeURIComponent(
      `Bună ziua,\n\nNumele meu este ${formData.name}.\nEmail: ${formData.email}\nTelefon: ${formData.phone || "N/A"}\n\nMesaj: ${formData.message}`
    );
    const whatsappUrl = `https://wa.me/40700000000?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast.success("Te redirecționăm către WhatsApp pentru confirmare.");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+40 700 000 000",
      link: "tel:+40700000000",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@cabinet-psihologie.ro",
      link: "mailto:contact@cabinet-psihologie.ro",
    },
    {
      icon: MapPin,
      title: "Adresă",
      content: "Str. Exemplu nr. 123, București",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-6">
            Programează o consultație
          </h2>
          <p className="text-lg text-muted-foreground">
            Sunt aici pentru a te asculta și sprijini. Completează formularul sau
            contactează-mă direct pentru a programa o întâlnire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover-lift p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-secondary/30 p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Program consultații
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Luni - Vineri: 10:00 - 20:00</p>
                <p>Sâmbătă: 10:00 - 14:00</p>
                <p>Duminică: Închis</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nume complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Introduceți numele dumneavoastră"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+40 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descrieți motivul consultației sau întrebările dumneavoastră..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px] bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Trimite mesaj pe WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Câmpuri obligatorii. Datele tale sunt protejate și confidențiale.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
