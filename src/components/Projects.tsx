import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Breast Cancer Prediction",
      description: "Predict malignant vs benign cells using machine learning classification models.",
      tech: "Python • Scikit-Learn • Pandas",
      link: "https://github.com/wasayfaizan/Breast-Cancer-Prediction",
    },
    {
      title: "Sentiment Analysis (BERT + LSTM)",
      description: "NLP deep learning model for sentiment analysis on tweets using state-of-the-art transformers.",
      tech: "TensorFlow • NLP • Transformers",
      link: "https://github.com/wasayfaizan/Sentiment-Analysis-on-Tweets-using-LSTM",
    },
    {
      title: "Teen Smartphone Addiction Predictor",
      description: "Predict addiction severity levels using machine learning with an interactive Streamlit interface.",
      tech: "Python • ML • Streamlit",
      link: "https://github.com/wasayfaizan/Teen-Phone-Addiction-Predictor",
    },
    {
      title: "Used Car Price Predictor",
      description: "Regression model with interactive UI for predicting used car prices based on multiple features.",
      tech: "XGBoost • Streamlit",
      link: "https://github.com/wasayfaizan/Cars-Price-Predictor-ML",
    },
    {
      title: "Netflix Data Insights",
      description: "Comprehensive exploratory data analysis and interactive dashboard for Netflix content data.",
      tech: "Pandas • Seaborn • Plotly",
      link: "https://github.com/wasayfaizan/Netflix-data-insights",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground pb-4 border-b-4 border-border animate-fade-up">
          📂 Featured Projects
        </h2>

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card project-card rounded-[22px] p-8 shadow-xl animate-fade-card border-t-4 border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-foreground transition-colors hover:text-primary">{project.title}</h3>
              <p className="text-base mb-4 leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="text-sm font-semibold mb-6 text-primary">
                <span className="font-bold">Tech:</span> {project.tech}
              </p>
              <Button
                asChild
                className="font-bold bg-gradient-to-r from-primary to-primary-dark btn-hover"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
