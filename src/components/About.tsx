const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          📌 About Me
        </h2>

        <div className="mt-12 glass-card glass-card-hover rounded-[22px] p-8 md:p-12 shadow-xl animate-fade-card">
          <p className="text-lg leading-relaxed mb-6">
            I'm a <span className="font-bold text-primary">5th-year Computer Science student</span> at{" "}
            <span className="font-bold">York University</span> with a minor in Applied Mathematics.
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            I specialize in building Machine Learning models, Deep Learning systems, and Data Analysis pipelines.
          </p>

          <div className="space-y-3">
            <p className="text-xl font-bold mb-4 text-primary">Interests:</p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <span>Machine Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <span>Deep Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span>Data Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏏</span>
                <span>Sports Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <span>AI for Healthcare</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
