import { Clock, Globe2, Award, BookOpen, Building } from "lucide-react";

const WhyRussiaSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "WHO & NMC Recognized",
      description: "All our partner universities are recognized by WHO, NMC (India), and medical councils of 100+ countries worldwide.",
      highlight: "Global Recognition",
    },
    {
      icon: Clock,
      title: "No Entrance Exams",
      description: "Direct admission based on 12th standard marks. No need to crack competitive exams like NEET for admission (NEET qualified preferred).",
      highlight: "Easy Admission",
    },
    {
      icon: BookOpen,
      title: "English Medium",
      description: "Complete MBBS curriculum taught in English with additional local language training for clinical practice.",
      highlight: "No Language Barrier",
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "State-of-the-art laboratories, hospitals, and research facilities with hands-on clinical training from early semesters.",
      highlight: "World-Class Facilities",
    },
    {
      icon: Globe2,
      title: "Cultural Diversity",
      description: "Study alongside students from 80+ countries, building a global network while experiencing rich Russian culture.",
      highlight: "Global Exposure",
    },
  ];

  return (
    <section id="why-russia" className="section-padding bg-muted/50">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Why Study in Russia
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover Why <span className="text-gradient">Thousands Choose Russia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Russia has been a preferred destination for Indian medical students for over 3 decades, offering quality education at affordable costs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-xl p-6 card-elevated group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:hero-gradient transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {benefit.highlight}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRussiaSection;
