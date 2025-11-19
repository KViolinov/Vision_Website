import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import jarvisLogo from "@/assets/jarvis-logo.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--glow-primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--glow-accent)/0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
          {/* Logo with Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-glow-pulse" />
            <img
              src={jarvisLogo}
              alt="JARVIS Logo"
              className="w-32 h-32 md:w-40 md:h-40 relative z-10 animate-float"
            />
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                JARVIS
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Offline AI Assistant & Smart Home Hub
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Personal AI. Fully Private. Fully Customizable.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Run your own AI locally. Control your home. Automate everything.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
              asChild
            >
              <a href="https://kvb-bg.com/jarvis/JARVIS_Setup.exe" download>
                <Download className="mr-2 h-5 w-5" />
                Download for Windows
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              asChild
            >
              <a
                href="https://github.com/yourusername/jarvis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Small Note */}
          <p className="text-sm text-muted-foreground mt-4">
            Free version available. Premium features coming soon.
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
