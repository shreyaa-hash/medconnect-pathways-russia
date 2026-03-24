import { CheckCircle, Target, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    "NMC (National Medical Commission) Approved Universities",
    "Complete Visa & Documentation Assistance",
    "Pre-Departure Orientation Programs",
    "On-Ground Support Abroad",
    "FMGE/NEXT Exam Coaching",
    "Student Community Network",
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make quality medical education accessible to every aspiring Indian doctor through transparent guidance and unwavering support.",
    },
    {
      icon: Heart,
      title: "Our Commitment",
      description: "We promise personalized attention for every student, ensuring your dreams of becoming a doctor are supported with honest advice.",
    },
    {
      icon: Globe,
      title: "Our Reach",
      description: "Partnered with top NMC-approved Russian universities to connect you with world-class medical education opportunities.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 hero-gradient-soft" />
      
      <div className="container-width relative">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Your Trusted Partner in
            <span className="text-gradient block sm:inline"> Medical Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Siddhi Vinayak Global MedConnect is the bridge between Indian students and prestigious Russian medical universities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Choose Us?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We understand that choosing to study medicine abroad is a life-changing decision. That's why we provide comprehensive support at every step, ensuring a smooth and successful journey for our students.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 card-elevated relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="grid grid-cols-2 gap-6 relative">
              {[
                { value: "15+", label: "Partner Universities" },
                { value: "24/7", label: "Student Support" },
                { value: "100%", label: "Admission Guidance" },
                { value: "NMC", label: "Approved Universities" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-5 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="bg-card rounded-2xl p-8 card-elevated text-center group"
            >
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-primary">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;