import { GraduationCap, Users, Building2, Award } from "lucide-react";

const TestimonialsSection = () => {
  const stats = [
    {
      icon: Building2,
      value: "15+",
      label: "Partner Universities",
      description: "Top NMC & WHO recognized medical universities in Russia",
    },
    {
      icon: GraduationCap,
      value: "6 Years",
      label: "MBBS Program",
      description: "Complete medical degree with clinical training",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Indian Students",
      description: "Currently studying in our partner universities",
    },
    {
      icon: Award,
      value: "100%",
      label: "Admission Support",
      description: "End-to-end guidance from application to arrival",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background relative">
      {/* Subtle top decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-width">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Your Journey to <span className="text-gradient">Medical Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We're here to guide you every step of the way towards achieving your dream of becoming a doctor.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-card rounded-2xl p-7 card-elevated text-center group"
            >
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="font-display text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="font-semibold text-foreground mb-2">{stat.label}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;