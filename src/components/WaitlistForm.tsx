import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";
import { addToWaitlist } from "@/lib/waitlistService";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  className?: string;
  source?: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  className = "", 
  source = "hero" 
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await addToWaitlist({
        email,
        source
      });

      if (result.success) {
        setIsSuccess(true);
        setEmail("");
        toast({
          title: "You're in! 🎉",
          description: result.message,
          duration: 5000,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Signup Failed",
          description: result.message,
        });
      }
    } catch (error) {
      console.error('Waitlist signup error:', error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground h-14 text-base px-4"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 glow-primary h-14 px-8 text-base font-semibold min-w-[150px] whitespace-nowrap"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
            >
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">You're all set! 🎉</h3>
            <p className="text-muted-foreground mb-4">
              You've been successfully added to our waitlist. We'll notify you when we launch!
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSuccess(false)}
              className="text-sm"
            >
              Add Another Email
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};