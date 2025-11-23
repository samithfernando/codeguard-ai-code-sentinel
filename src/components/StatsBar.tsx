import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "66%",
      label: "of developers spend MORE time debugging AI code",
    },
    {
      value: "52%",
      label: "ChatGPT wrong 52% of the time",
    },
    {
      value: "45%",
      label: "cite 'almost right' as #1 frustration",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground">Source: Stack Overflow 2025 Survey</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-lg p-8 card-elevated hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="text-5xl font-display font-bold text-gradient mb-4">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
