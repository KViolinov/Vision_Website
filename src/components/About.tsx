import { Brain, Shield, Wifi, WifiOff, Home, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: WifiOff,
      title: "Offline First",
      description: "Works fully locally when no internet connection available",
    },
    {
      icon: Brain,
      title: "Dual AI Mode",
      description: "Local LLM for offline, Gemini for online processing",
    },
    {
      icon: Home,
      title: "Smart Home Ready",
      description: "Raspberry Pi 5 + ESP32 IoT system integration",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your data stays on your device, always",
    },
    {
      icon: Smartphone,
      title: "Mobile Companion",
      description: "Control JARVIS from anywhere with the mobile app",
    },
    {
      icon: Wifi,
      title: "Cloud Optional",
      description: "Enhanced features available with internet connectivity",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About JARVIS
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            JARVIS is an offline-first personal assistant that puts you in control.
            Designed for both everyday users and visually-impaired students,
            it combines powerful AI with complete privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-6 group hover:shadow-glow"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
