import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Cum să gestionezi anxietatea în viața de zi cu zi",
      excerpt:
        "Strategii practice și exerciții pentru reducerea anxietății și îmbunătățirea bunăstării emoționale.",
      date: "15 Martie 2024",
      category: "Anxietate",
      readTime: "5 min",
    },
    {
      title: "Importanța comunicării în relațiile de cuplu",
      excerpt:
        "Tehnici de comunicare eficientă care pot transforma și întări relația ta de cuplu.",
      date: "8 Martie 2024",
      category: "Relații",
      readTime: "7 min",
    },
    {
      title: "Mindfulness: Practici pentru prezent",
      excerpt:
        "Introducere în mindfulness și cum această practică poate îmbunătăți sănătatea mentală.",
      date: "1 Martie 2024",
      category: "Dezvoltare personală",
      readTime: "6 min",
    },
  ];

  return (
    <section id="articles" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Resurse
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-6">
            Articole și resurse utile
          </h2>
          <p className="text-lg text-muted-foreground">
            Articole despre sănătate mentală, dezvoltare personală și strategii de coping
            pentru o viață echilibrată.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="hover-lift bg-card border-border animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime} citire</span>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                  {article.category}
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 hover:bg-transparent p-0 h-auto font-medium group/btn"
                >
                  Citește mai mult
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary/5"
          >
            Vezi toate articolele
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
