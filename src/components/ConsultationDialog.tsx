import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "919936949794";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("consultation_requests")
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course || null,
          message: formData.message || null,
        });

      if (dbError) throw dbError;

      // Build WhatsApp message
      const lines = [
        `*New Consultation Request*`,
        `👤 Name: ${formData.name}`,
        `📞 Phone: ${formData.phone}`,
        `📧 Email: ${formData.email}`,
        formData.course ? `📚 Course: ${formData.course}` : "",
        formData.message ? `💬 Message: ${formData.message}` : "",
      ].filter(Boolean);

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(whatsappUrl, "_blank");

      setIsSubmitted(true);
      toast.success("Redirecting to WhatsApp!", {
        description: "Your request has also been saved.",
      });
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after dialog closes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="hero-gradient p-6 text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-accent" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-display text-primary-foreground">
              {isSubmitted ? "Thank You!" : "Start Your Medical Journey"}
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80">
              {isSubmitted
                ? "We've received your request successfully."
                : "Get free expert counseling for MBBS in Russia"}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Request Submitted!
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert counselor will reach out to you within 24 hours to guide you through the admission process.
              </p>
              
              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+919936949794"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9936949794
                  </a>
                  <a
                    href="mailto:Contact.svglobalmedconnect@gmail.com"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>

              <Button onClick={handleClose} variant="default" className="w-full">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Preferred Course</Label>
                  <Input
                    id="course"
                    placeholder="e.g., MBBS, MD, etc."
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your educational background or any specific questions..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get Free Counseling
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                100% Free • No Obligation • Expert Guidance
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
