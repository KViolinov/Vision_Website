import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-lg font-bold text-primary-foreground">J</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                JARVIS
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your Personal AI. Fully Private. Fully Customizable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Features", "FAQ", "Download"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/yourusername/jarvis"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/jarvis/issues"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
              </li>
              <li>
                <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:contact@bolyarcoders.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/yourusername/jarvis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 JARVIS. Built by{" "}
              <span className="text-primary font-semibold">BolyarCoders</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Open Source • Privacy First • Community Driven
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
