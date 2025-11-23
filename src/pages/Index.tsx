import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Courses from "@/components/Courses";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />\
      <Experience />
      <Skills />
      <Courses />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
