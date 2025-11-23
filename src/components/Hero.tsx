import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Stop Debugging{" "}
            <span className="text-gradient">AI Code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Validate ChatGPT code in seconds. Catch errors before you copy-paste.
          </motion.p>

          {/* Split-screen mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {/* Left: ChatGPT with errors */}
            <div className="bg-card border border-destructive/50 rounded-lg p-6 card-elevated hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">ChatGPT Output</span>
                <XCircle className="text-destructive" size={24} />
              </div>
              <div className="bg-destructive/10 rounded p-4 font-mono text-sm text-left">
                <div className="text-destructive">❌ Syntax Error</div>
                <div className="text-muted-foreground mt-2">Missing semicolon line 42</div>
              </div>
            </div>

            {/* Right: CodeGuard validation */}
            <div className="bg-card border border-primary/50 rounded-lg p-6 card-elevated glow-primary hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">CodeGuard Analysis</span>
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <div className="bg-primary/10 rounded p-4 text-left">
                <div className="text-2xl font-bold text-gradient mb-2">23%</div>
                <div className="text-sm text-foreground">Confidence Score</div>
                <div className="text-sm text-destructive mt-2">3 issues found</div>
              </div>
            </div>
          </motion.div>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 glow-primary">
              Join Waitlist
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground mt-4"
          >
            Launching December 2025 • No credit card required
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
