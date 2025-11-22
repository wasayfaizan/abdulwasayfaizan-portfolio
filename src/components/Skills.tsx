import { Code, Database, BarChart3, Brain, HardDrive, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "💻 Programming",
      skills: "Python • R • SQL • Java • JavaScript • Bash • Git",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "📊 Data Science",
      skills: "Pandas • NumPy • Matplotlib • Seaborn • Plotly • Tableau • Power BI",
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "🧮 Math",
      skills: "Linear Algebra • Probability • Statistics • Optimization",
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "🤖 Machine Learning",
      skills: "Scikit-Learn • TensorFlow • PyTorch • CNN • LSTM • Transformers • XGBoost",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "🗄️ Databases",
      skills: "PostgreSQL • MySQL • MongoDB • ETL Pipelines • Spark",
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "☁️ Cloud / DevOps",
      skills: "AWS • Docker • GitHub Actions • Streamlit Deployment",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          🧠 Skills
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-[22px] p-8 shadow-xl animate-fade-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
