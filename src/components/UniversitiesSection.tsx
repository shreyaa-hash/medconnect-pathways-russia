import { GraduationCap, Shield, Globe, BookOpen, Stethoscope, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UniversitiesSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "NMC & WHO Approved",
      description: "All our partner universities are recognized by NMC (India) and WHO, ensuring your degree is valid worldwide.",
      highlights: ["Global Recognition", "Valid in India", "Hassle-Free"],
    },
    {
      icon: GraduationCap,
      title: "Top-Ranked Institutions",
      description: "We collaborate with universities ranked among the best globally, offering world-class infrastructure and faculty.",
      highlights: ["QS Ranked", "Modern Campus", "Experienced Faculty"],
    },
    {
      icon: Globe,
      title: "English Medium Programs",
      description: "Study your entire MBBS course in English with dedicated support for international students from day one.",
      highlights: ["Full English", "No Language Barrier", "Easy Transition"],
    },
    {
      icon: Stethoscope,
      title: "Hands-On Clinical Training",
      description: "Get real hospital exposure from early years with access to advanced labs, simulation centers, and teaching hospitals.",
      highlights: ["Hospital Training", "Modern Labs", "Practical Focus"],
    },
    {
      icon: BookOpen,
      title: "Affordable Fee Structure",
      description: "Quality medical education at a fraction of the cost compared to private colleges in India, with flexible payment options.",
      highlights: ["Low Tuition", "No Donation", "Transparent Fees"],
    },
    {
      icon: Award,
      title: "Safe & Supportive Environment",
      description: "Our partner cities are known for their safety, with Indian food availability, cultural communities, and 24/7 student support.",
      highlights: ["Safe Cities", "Indian Food", "24/7 Support"],
    },
  ];

  return (
    <section id="universities" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Partner Universities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Our Partner Universities?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've handpicked 50+ NMC-approved universities across Russia to give you the best medical education experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card rounded-xl overflow-hidden card-elevated group">
              <div className="hero-gradient p-6">
                <feature.icon className="w-10 h-10 text-primary-foreground mb-3" />
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/90 text-sm">{feature.description}</p>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.highlights.map((highlight) => (
                    <span key={highlight} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UniversitiesSection;