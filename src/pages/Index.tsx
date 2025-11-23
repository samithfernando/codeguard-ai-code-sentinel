import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Demo />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
