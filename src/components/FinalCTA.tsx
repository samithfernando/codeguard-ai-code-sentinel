import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Countdown timer
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-12-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Parallax background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            Ready to Stop{" "}
            <span className="text-gradient">Debugging?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12"
          >
            Join the waitlist and be among the first to validate AI code with confidence
          </motion.p>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 glow-primary h-12 px-8">
              Join Waitlist
            </Button>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-sm text-muted-foreground mb-4">Launching in</p>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-card border border-border rounded-lg p-4 card-elevated">
                  <div className="text-3xl font-display font-bold text-gradient">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground"
          >
            No credit card required • Early access for waitlist members
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
