import { Eye, Volume2, ScanText, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Accessibility = () => {
  const features = [
    {
      icon: Volume2,
      title: "Voice-First Interface",
      description:
        "Complete voice interaction for hands-free operation. Perfect for users with visual impairments or mobility challenges.",
    },
    {
      icon: Eye,
      title: "Visual Assistance",
      description:
        "Camera-based scene description and object recognition. JARVIS becomes your eyes when you need them.",
    },
    {
      icon: ScanText,
      title: "OCR & Text Reading",
      description:
        "Convert any printed text to speech instantly. Read documents, labels, signs, and more with ease.",
    },
    {
      icon: Smartphone,
      title: "Large Touch Controls",
      description:
        "Mobile app designed with accessibility in mind. Large buttons, high contrast, and intuitive navigation.",
    },
  ];

  return (
    <section id="accessibility" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Everyone
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            JARVIS is designed with accessibility at its core, providing essential support
            for visually-impaired students and users with diverse needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:shadow-glow"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 p-8 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Future updates will include enhanced screen reader support, customizable voice speeds,
              and additional visual accessibility features based on community feedback.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
