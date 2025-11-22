import { Button } from "./ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          📄 Resume
        </h2>

        <div className="mt-12 glass-card glass-card-hover rounded-[22px] p-12 shadow-xl animate-fade-card text-center">
          <FileText className="w-24 h-24 mx-auto mb-6 text-primary animate-float" />
          <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my education, experience, skills, and projects.
          </p>
          <Button
            size="lg"
            className="font-bold bg-gradient-to-r from-primary to-primary-dark btn-hover"
          >
            <Download className="mr-2" />
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
