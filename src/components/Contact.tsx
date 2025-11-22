import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
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
                  className="rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full font-bold bg-gradient-to-r from-primary to-primary-dark btn-hover"
                size="lg"
              >
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
