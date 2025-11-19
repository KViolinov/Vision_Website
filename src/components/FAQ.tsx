import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Does JARVIS work offline?",
      answer:
        "Yes! JARVIS is designed to work fully offline using a local LLM. When you have an internet connection, it can use Google Gemini for enhanced capabilities, but core functionality works without internet.",
    },
    {
      question: "What hardware do I need?",
      answer:
        "For the desktop app, any Windows PC with at least 8GB RAM. For the full smart home experience, you'll need a Raspberry Pi 5 and ESP32 devices for IoT control. The mobile companion app works on any Android or iOS device.",
    },
    {
      question: "Is JARVIS free?",
      answer:
        "Yes, the core version of JARVIS is completely free and open source. We're planning premium features for advanced users, but the essential functionality will always remain free.",
    },
    {
      question: "How does it control smart devices?",
      answer:
        "JARVIS uses a combination of technologies: IR blasters for traditional devices, Zigbee for smart home products, and ESP-NOW for custom IoT devices. All controlled through the Raspberry Pi 5 hub.",
    },
    {
      question: "Is my data private?",
      answer:
        "Absolutely. JARVIS stores all data locally on your device. In offline mode, no data ever leaves your computer. Even in online mode, only the specific queries you make are sent to process AI responses.",
    },
    {
      question: "Can I contribute to the project?",
      answer:
        "Yes! JARVIS is open source and we welcome contributions. Check out our GitHub repository for issues, feature requests, and contribution guidelines. Join our community of developers making AI accessible to everyone.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about JARVIS
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
