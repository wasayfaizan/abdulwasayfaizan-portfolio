const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          📌 About Me
        </h2>

        <div className="mt-8 sm:mt-12 glass-card glass-card-hover rounded-[22px] p-6 sm:p-8 md:p-12 shadow-xl animate-fade-card">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            I'm a <span className="font-bold text-primary">Final Year Computer Science student</span> at{" "}
            <span className="font-bold">York University</span> with a minor in Applied Mathematics.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-8">
            I specialize in building Machine Learning models, Deep Learning systems, and Data Analysis pipelines.
          </p>

          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-bold mb-4 text-primary">Interests:</p>
            <ul className="space-y-3 text-base sm:text-lg">
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
