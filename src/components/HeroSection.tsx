import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Award, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ConsultationDialog from "./ConsultationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const stats = [
    { icon: GraduationCap, value: "15+", label: "Partner Universities" },
    { icon: Users, value: "24/7", label: "Dedicated Support" },
    { icon: Award, value: "100%", label: "Genuine Guidance" },
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Medical students studying" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 hero-gradient opacity-[0.92]" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-width section-padding w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-5 py-2.5 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary-foreground">
              #1 Medical Education Consultancy for Abroad
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your Gateway to a
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              World-Class Medical Career
            </span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed animate-fade-up" 
            style={{ animationDelay: "0.2s" }}
          >
            Siddhi Vinayak Global MedConnect guides Indian students to top medical universities abroad with affordable fees, globally recognized degrees, and comprehensive support from admission to graduation.
          </p>

          {/* CTA Button */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" 
            style={{ animationDelay: "0.3s" }}
          >
            <Button 
              variant="accent" 
              size="xl" 
              className="group shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-shadow"
              onClick={() => setDialogOpen(true)}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-primary-foreground/10 text-center hover:bg-primary-foreground/15 transition-colors"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/70 text-xs md:text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-7 h-12 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-3">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;