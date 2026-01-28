import Header from "@/components/Header";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyRussiaSection from "@/components/WhyRussiaSection";
import UniversitiesSection from "@/components/UniversitiesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CTABanner />
        <HeroSection />
        <AboutSection />
        <WhyRussiaSection />
        <UniversitiesSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
