import {
  Mic,
  Music,
  Mail,
  MessageSquare,
  FileText,
  Camera,
  Home,
  Calendar,
  Database,
  Smartphone,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Speech Recognition",
      description: "Natural voice commands with high accuracy offline processing",
    },
    {
      icon: Music,
      title: "Music Controls",
      description: "Spotify integration with voice-controlled playback",
    },
    {
      icon: Mail,
      title: "Email & Messaging",
      description: "Send emails and WhatsApp messages hands-free",
    },
    {
      icon: FileText,
      title: "OCR Text Reader",
      description: "Convert images to text and read documents aloud",
    },
    {
      icon: Camera,
      title: "Visual Recognition",
      description: "Ask 'What do you see?' and get AI-powered descriptions",
    },
    {
      icon: Home,
      title: "Smart Home Control",
      description: "IR blaster, Zigbee, and ESP-NOW device integration",
    },
    {
      icon: Calendar,
      title: "Events & Reminders",
      description: "Never miss important dates with intelligent scheduling",
    },
    {
      icon: Database,
      title: "Local Database",
      description: "All data stored securely on your device with full logs",
    },
    {
      icon: Smartphone,
      title: "Mobile Companion",
      description: "Control JARVIS remotely with the companion app",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need in a personal AI assistant, designed for privacy and control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-6 group hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
