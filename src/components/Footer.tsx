import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Why Russia", href: "#why-russia" },
    { name: "Universities", href: "#universities" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Admission Assistance",
    "Visa Processing",
    "FMGE Coaching",
    "Accommodation",
    "Travel Support",
    "Student Insurance",
  ];

  const universities = [
    "Kazan Federal University",
    "RUDN University Moscow",
    "Kursk State Medical University",
    "Crimean Federal University",
    "Bashkir State Medical University",
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/medconnect_global", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/918299226673", label: "WhatsApp" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-width section-padding pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Siddhi Vinayak Global MedConnect" className="h-14 w-auto" />
              <span className="font-display font-bold text-primary-foreground text-base leading-tight">
                Siddhi Vinayak<br />Global MedConnect
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Your trusted consultancy for medical education in Russia. Helping students achieve their dreams of becoming doctors.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">+91 9936949794</p>
                  <p className="text-sm">+91 8299226673</p>
                  <p className="text-xs text-primary-foreground/50">24/7 Student Helpline</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Contact.svglobalmedconnect@gmail.com</p>
                  <p className="text-xs text-primary-foreground/50">Quick Response</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Sushil Nagar, near Jalaun Bypass</p>
                  <p className="text-xs text-primary-foreground/50">Orai, Uttar Pradesh</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">+91 8299226673</p>
                  <p className="text-xs text-primary-foreground/50">WhatsApp Chat</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-width px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © 2019 Siddhi Vinayak Global MedConnect. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
