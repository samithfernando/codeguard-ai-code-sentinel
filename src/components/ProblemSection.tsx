import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Bug, ShieldAlert } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: AlertTriangle,
      title: "Confidently Wrong",
      description: "AI models generate incorrect code with 100% confidence, making it hard to spot errors until they break production.",
    },
    {
      icon: Bug,
      title: "Hidden Bugs",
      description: "Subtle logic errors that pass syntax checks but create runtime issues that waste hours of debugging time.",
    },
    {
      icon: ShieldAlert,
      title: "Security Risks",
      description: "SQL injection, XSS vulnerabilities, and other security flaws that AI models often overlook in generated code.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            AI Code Sounds Confident.{" "}
            <span className="text-gradient">But Is It Correct?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-lg p-8 card-elevated hover:border-primary/50 hover:-translate-y-2 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-primary group-hover:animate-glow-pulse transition-all">
                  <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
