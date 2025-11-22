import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    
    // Validate form data
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      console.error("Validation failed:", validation.error);
      const firstError = validation.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    console.log("Validation passed, sending email...");
    setIsSubmitting(true);

    try {
      console.log("Invoking edge function...");
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: validation.data
      });

      console.log("Edge function response:", { data, error });

      if (error) {
        console.error("Edge function error:", error);
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message || "Unknown error"}. Please try again or contact me directly via email.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          📬 Contact Me
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="glass-card glass-card-hover rounded-[22px] p-8 shadow-xl animate-fade-card">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:a.wasayfaizan@hotmail.com"
                    className="text-primary hover:underline"
                  >
                    a.wasayfaizan@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-primary/20">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/wasayfaizan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/wasayfaizan
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 transition-transform hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-primary/20">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a
                    href="https://github.com/wasayfaizan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/wasayfaizan
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-muted-foreground">
              ✨ Thanks for visiting my portfolio! Feel free to reach out for collaborations,
              opportunities, or just to connect.
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass-card glass-card-hover rounded-[22px] p-8 shadow-xl animate-fade-card" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full font-bold bg-gradient-to-r from-primary to-primary-dark btn-hover"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="mr-2 w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
