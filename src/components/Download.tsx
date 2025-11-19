import { Download, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get Started Today
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Download JARVIS and start experiencing the future of personal AI assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:shadow-glow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Windows Application
              </h3>
              <p className="text-sm text-muted-foreground">
                Desktop app with full offline capabilities and local LLM support
              </p>
              <Button
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow transition-all duration-300"
                asChild
              >
                <a href="https://kvb-bg.com/jarvis/JARVIS_Setup.exe" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download EXE
                </a>
              </Button>
            </div>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:shadow-glow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Github className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Source Code
              </h3>
              <p className="text-sm text-muted-foreground">
                Open source repository with full documentation and examples
              </p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/yourusername/jarvis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:shadow-glow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Setup Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Complete guide for Raspberry Pi hub and ESP32 device setup
              </p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-2">System Requirements</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Windows 10/11 • 8GB RAM minimum • 5GB storage space • Optional: Raspberry Pi 5 for smart home features
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
