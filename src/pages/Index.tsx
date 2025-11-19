import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Accessibility from "@/components/Accessibility";
import FAQ from "@/components/FAQ";
import DownloadSection from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Accessibility />
      <FAQ />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
