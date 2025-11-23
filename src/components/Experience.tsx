const Experience = () => {
  const experiences = [
    {
      company: "Infinity Shipping Services",
      location: "Karachi, Pakistan",
      role: "Customer Service & Data Support Assistant",
      duration: "May 2021 – Aug 2021",
      responsibilities: [
        "Delivered multi-channel customer support while resolving inquiries and service issues efficiently.",
        "Used Microsoft Excel to monitor service request trends, escalate recurring issues, and support process improvements.",
        "Organized and maintained structured customer data to enhance workflow and reporting accuracy.",
        "Contributed to weekly team reports analyzing customer feedback and performance metrics.",
      ],
    },
    {
      company: "Rewterz",
      location: "Pakistan",
      role: "Data Analyst Intern",
      duration: "May 2022 - Aug 2022",
      responsibilities: [
        "Built predictive models using Python + SQL for cybersecurity threat detection.",
        "Automated data ingestion & cleaning pipelines improving data accuracy by 22%.",
        "Developed dashboards to uncover key security risk factors and trends.",
        "Supported cybersecurity analysis workflows involving structured threat data.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          💼 Experience
        </h2>

        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-[22px] p-6 sm:p-8 shadow-xl animate-fade-card border-l-4 border-primary"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-primary mb-1 transition-all hover:translate-x-2">
                  {exp.role}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                  {exp.company} – {exp.location}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{exp.duration}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-base leading-relaxed flex items-start gap-2 sm:gap-3 transition-all hover:translate-x-2"
                  >
                    <span className="text-primary font-bold mt-1 animate-pulse">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
