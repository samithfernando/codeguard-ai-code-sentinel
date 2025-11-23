import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 validations/day",
        "Basic error checking",
        "Confidence score",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$10",
      period: "/month",
      features: [
        "Unlimited validations",
        "All features",
        "Security scanning",
        "One-click fixes",
        "Priority support",
        "Browser extension",
      ],
      cta: "Join Waitlist",
      popular: true,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-card border rounded-lg p-8 card-elevated hover:scale-105 transition-all ${
                plan.popular
                  ? "border-primary/50 glow-primary"
                  : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground border-0">
                  Most Popular
                </Badge>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-display font-bold text-gradient">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>

              {/* Coming soon badge */}
              <div className="mt-4 text-center">
                <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                  Coming Soon
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
