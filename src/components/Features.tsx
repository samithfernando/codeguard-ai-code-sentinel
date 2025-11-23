import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Lock, Wrench, GitCompare, Rocket } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Instant Validation",
      description: "Real-time analysis of your AI-generated code in milliseconds",
      span: "col-span-1 row-span-1",
    },
    {
      icon: Target,
      title: "Confidence Score",
      description: "0-100 rating showing how likely the code is to work correctly",
      span: "col-span-1 row-span-1",
    },
    {
      icon: Lock,
      title: "Security Scanning",
      description: "Automatically detects vulnerabilities like SQL injection and XSS",
      span: "col-span-1 row-span-2",
    },
    {
      icon: Wrench,
      title: "One-Click Fixes",
      description: "Auto-correct common errors with a single click",
      span: "col-span-1 row-span-1",
    },
    {
      icon: GitCompare,
      title: "Diff Highlighting",
      description: "See exactly what changed and why",
      span: "col-span-1 row-span-1",
    },
    {
      icon: Rocket,
      title: "Works with Any AI",
      description: "Browser extension integrates directly into your workflow with all AI tools",
      span: "col-span-1 row-span-2",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${feature.span} bg-card border border-border rounded-lg p-6 card-elevated hover:border-primary/50 hover:scale-105 transition-all group`}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
