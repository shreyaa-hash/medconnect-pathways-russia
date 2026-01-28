import { Sparkles, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden hero-gradient py-4 md:py-5">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      
      <div className="container-width relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-primary-foreground font-semibold text-sm md:text-base">
              Admissions Open 2025-26
            </span>
          </div>
          
          <div className="hidden sm:block w-px h-5 bg-primary-foreground/30" />
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors group"
          >
            Get Free Counseling
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
