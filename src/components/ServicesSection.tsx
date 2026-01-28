import { FileText, Plane, Home, BookOpen, Shield, Headphones, ChevronRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Admission Assistance",
      description: "Complete guidance for university selection, application processing, and guaranteed admission.",
      features: ["University Selection", "Document Verification", "Application Processing", "Admission Letter"],
    },
    {
      icon: Plane,
      title: "Visa & Travel Support",
      description: "Expert assistance with visa documentation, interview preparation, and travel arrangements.",
      features: ["Visa Documentation", "Embassy Appointment", "Flight Booking", "Travel Insurance"],
    },
    {
      icon: Home,
      title: "Accommodation",
      description: "Comfortable and safe hostel accommodation within university campuses with all amenities.",
      features: ["University Hostels", "24/7 Security", "Indian Mess Facility", "Laundry Services"],
    },
    {
      icon: BookOpen,
      title: "FMGE/NEXT Coaching",
      description: "Dedicated coaching programs to prepare students for FMGE/NEXT exams.",
      features: ["Regular Mock Tests", "Expert Faculty", "Study Materials", "Online Classes"],
    },
    {
      icon: Shield,
      title: "Safety & Support",
      description: "Round-the-clock on-ground support team in Russia to assist with emergencies.",
      features: ["24/7 Helpline", "Emergency Support", "Medical Insurance", "Legal Assistance"],
    },
    {
      icon: Headphones,
      title: "Parent Connect",
      description: "Regular updates and communication channels for parents to stay connected.",
      features: ["Monthly Reports", "WhatsApp Groups", "Video Calls", "Parent Visits Support"],
    },
  ];

  const steps = [
    { step: "01", title: "Counseling", desc: "Free career guidance & university selection" },
    { step: "02", title: "Application", desc: "Document processing & admission letter" },
    { step: "03", title: "Visa & Travel", desc: "Visa assistance & travel arrangements" },
    { step: "04", title: "Settlement", desc: "Airport pickup & hostel accommodation" },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container-width relative">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Complete <span className="text-gradient">End-to-End Support</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From the moment you contact us to your successful graduation, we're with you at every step of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-7 card-elevated group hover:hero-gradient transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm mb-5 transition-colors leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground group-hover:text-primary-foreground/75 transition-colors">
                    <ChevronRight className="w-4 h-4 text-secondary group-hover:text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-14">
            Your Journey <span className="text-gradient">With Us</span>
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-20" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((item, index) => (
                <div key={item.step} className="text-center relative group">
                  <div className="w-20 h-20 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
