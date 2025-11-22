import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Data Science • Machine Learning • Deep Learning • AI";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 animate-fade-in"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-[25px] p-12 md:p-20 shadow-2xl overflow-hidden">
          {/* Shine overlay effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute -top-1/2 -left-1/3 w-[200%] h-[200%] bg-gradient-to-br from-white/25 to-transparent rotate-[25deg] animate-shine" />
          </div>

          <div className="relative z-10 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
              👋 Hi, I'm <span className="text-white">Abdul Wasay</span>
            </h1>
            
            <div className="h-12 md:h-16 mb-6">
              <p className="text-2xl md:text-3xl font-semibold inline-block border-r-2 border-white pr-2 whitespace-nowrap overflow-hidden">
                {displayText}
              </p>
            </div>

            <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed opacity-95">
              I'm a Computer Science student at York University with a strong passion for Data Science,
              Machine Learning, Deep Learning, and Applied Mathematics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="font-bold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Mail className="mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
