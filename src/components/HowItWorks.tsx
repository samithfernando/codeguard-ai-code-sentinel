import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Scan, CheckCircle2, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Code2,
      title: "AI Generates Code",
      description: "Copy code from any AI tool like you normally would",
    },
    {
      icon: Scan,
      title: "CodeSentinelAI Analyzes",
      description: "Our AI scans for errors, bugs, and vulnerabilities instantly",
    },
    {
      icon: CheckCircle2,
      title: "Get Instant Feedback",
      description: "See confidence score, issues found, and suggested fixes",
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Validate in <span className="text-gradient">3 Steps</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    className="relative"
                  >
                    <div className="bg-card border border-border rounded-lg p-8 card-elevated hover:border-primary/50 transition-all hover:scale-105">
                      {/* Step number */}
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-lg glow-primary">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                        <Icon className="text-primary" size={32} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-display font-bold mb-3 text-center text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for larger screens */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
                        >
                          <ArrowRight className="text-primary" size={32} />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
