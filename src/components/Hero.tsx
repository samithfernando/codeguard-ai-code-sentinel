import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Code2 } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useWaitlistStats } from "@/hooks/use-waitlist-stats";

const Hero = () => {
  const { count: waitlistCount } = useWaitlistStats();

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Stop Wasting Time on Broken Code</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Stop Debugging{" "}
              <br />
              <span className="text-gradient animate-pulse">AI Code</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Validate AI-generated code in seconds. Catch errors, security flaws, and logic bugs before you copy-paste.
            </p>
          </motion.div>

          {/* Enhanced split-screen mockup with code examples */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto"
          >
            {/* Left: AI Code with errors */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-card border border-destructive/50 rounded-xl p-6 card-elevated overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Code2 className="text-destructive" size={20} />
                    <span className="text-sm font-semibold text-destructive">AI Output</span>
                  </div>
                  <XCircle className="text-destructive" size={24} />
                </div>

                <div className="bg-background/50 backdrop-blur rounded-lg p-4 font-mono text-xs sm:text-sm space-y-2 border border-destructive/20">
                  <div className="text-muted-foreground">
                    <span className="text-primary">function</span>{" "}
                    <span className="text-accent">fetchData</span>() {"{"}
                  </div>
                  <div className="text-muted-foreground pl-4">
                    <span className="text-primary">const</span> response = <span className="text-accent">fetch</span>(url);
                  </div>
                  <div className="text-muted-foreground pl-4 relative">
                    <span className="text-primary">return</span> response.json()
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -left-2 top-0 w-1 h-full bg-destructive rounded"
                    />
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2 text-xs text-destructive bg-destructive/10 rounded p-3">
                    <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Missing await:</span> Promise not handled
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-destructive bg-destructive/10 rounded p-3">
                    <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">No error handling:</span> Will crash on failure
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: CodeGuard validation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-card border border-primary/50 rounded-xl p-6 card-elevated glow-primary overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="text-sm font-semibold text-primary">CodeSentinelAI</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full"
                  />
                </div>

                <div className="bg-background/50 backdrop-blur rounded-lg p-6 border border-primary/20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mb-4"
                  >
                    <div className="text-6xl font-display font-bold text-gradient mb-2">23%</div>
                    <div className="text-sm text-muted-foreground">Confidence Score</div>
                  </motion.div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Syntax Check</span>
                      <span className="text-primary">✓ Passed</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Logic Analysis</span>
                      <span className="text-destructive">✗ 2 Issues</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Security Scan</span>
                      <span className="text-primary">✓ Clean</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-4 bg-primary/10 rounded-lg p-3 border border-primary/20"
                >
                  <p className="text-xs text-primary font-semibold mb-2">⚡ Quick Fix Available</p>
                  <p className="text-xs text-muted-foreground">Add async/await and try-catch block</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-lg mx-auto"
          >
            <WaitlistForm source="hero" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center space-y-2 mt-4"
            >
              <p className="text-sm text-muted-foreground">
                Launching December 2025 • No credit card required
              </p>
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span>Free tier available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span>{waitlistCount}+ developers waiting</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
