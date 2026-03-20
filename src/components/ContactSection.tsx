import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Instagram } from "lucide-react";
import { toast } from "sonner";
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });
  const WHATSAPP_NUMBER = "918299226673";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      await supabase.from("consultation_requests").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.city || null,
        message: formData.message || null,
      });

      const lines = [
        `*New Consultation Request*`,
        `👤 Name: ${formData.name}`,
        `📞 Phone: ${formData.phone}`,
        `📧 Email: ${formData.email}`,
        formData.city ? `🏙️ City: ${formData.city}` : "",
        formData.message ? `💬 Message: ${formData.message}` : "",
      ].filter(Boolean);

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(whatsappUrl, "_blank");

      toast.success("Redirecting to WhatsApp!", {
        description: "Your request has also been saved.",
      });
      setFormData({ name: "", email: "", phone: "", city: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: Phone,
    title: "Call Us",
    details: ["+91 9936949794", "+91 8299226673"],
    subtitle: "24/7 Student Helpline"
  }, {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 8299226673"],
    subtitle: "Chat with us instantly",
    link: "https://wa.me/918299226673",
    linkText: "Start WhatsApp Chat →"
  }, {
    icon: Instagram,
    title: "Instagram",
    details: ["@medconnect_global"],
    subtitle: "Follow us for updates",
    link: "https://instagram.com/medconnect_global",
    linkText: "Follow on Instagram →"
  }, {
    icon: Mail,
    title: "Email Us",
    details: ["Contact.svglobalmedconnect@gmail.com"],
    subtitle: "Quick Response Guaranteed"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: ["Sushil Nagar, near Jalaun Bypass", "Orai"],
    subtitle: "Head Office",
    link: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x399d7f8c2394f667:0xb4d9c6958998bcea?entry=s&sa=X&ved=2ahUKEwiqnYL06KSSAxWJzgIHHa9-EHIQ4kB6BAgOEAA&hl=en",
    linkText: "View on Google Maps →"
  }, {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
    subtitle: "We're Here to Help"
  }];
  return <section id="contact" className="section-padding bg-muted/50">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start Your <span className="text-gradient">Medical Journey Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book a free counseling session with our expert advisors and take the first step towards your dream medical career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-elevated">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request Free Counseling
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input required placeholder="Enter your name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input required type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input required type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    City *
                  </label>
                  <Input required placeholder="Your city" value={formData.city} onChange={e => setFormData({
                  ...formData,
                  city: e.target.value
                })} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea placeholder="Tell us about your educational background and interests..." rows={4} value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </> : <>
                    <Send className="w-4 h-4" />
                    Request Free Counseling
                  </>}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map(info => <div key={info.title} className="bg-card rounded-xl p-6 card-elevated flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">{info.title}</h4>
                  <p className="text-xs text-secondary mb-2">{info.subtitle}</p>
                  {info.details.map(detail => <p key={detail} className="text-muted-foreground text-sm">{detail}</p>)}
                  {info.link && <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 text-sm underline underline-offset-2 inline-flex items-center gap-1 mt-1">
                      {info.linkText}
                    </a>}
                </div>
              </div>)}

            {/* Additional CTA */}
            <div className="bg-card rounded-xl p-6 hero-gradient">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h4 className="font-display font-bold text-primary-foreground">Admission Open 2026</h4>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">Limited seats available for 2026 intake. Apply now to secure your spot at top Russian universities.</p>
              <Button variant="accent" size="lg" className="w-full">
                Apply Now - Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;