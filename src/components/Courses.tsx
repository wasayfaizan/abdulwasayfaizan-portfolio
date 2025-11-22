import { GraduationCap } from "lucide-react";

const Courses = () => {
  const courses = [
    "Python Data Analysis (Udemy)",
    "MySQL Certificate (Udemy)",
    "Google Data Analytics",
    "Machine Learning A-Z",
    "Deep Learning Specialization",
    "Computer Vision (Udemy)",
    "Power BI Certification",
    "OpenAI & Generative AI Developer Course",
  ];

  return (
    <section id="courses" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          🎓 Courses & Certifications
        </h2>

        <div className="mt-12 glass-card glass-card-hover rounded-[22px] p-8 md:p-12 shadow-xl animate-fade-card">
          <ul className="space-y-4">
            {courses.map((course, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg transition-transform hover:translate-x-2 duration-300"
              >
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Courses;
