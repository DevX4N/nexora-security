import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import InteractiveProduct from "@/components/InteractiveProduct";
import Integrations from "@/components/Integrations";
import NetworkVisualization from "@/components/NetworkVisualization";
import Benefits from "@/components/Benefits";
import CaseStudy from "@/components/CaseStudy";
import BeforeAfter from "@/components/BeforeAfter";
import SecurityArchitecture from "@/components/SecurityArchitecture";
import Testimonials from "@/components/Testimonials";
import EnterpriseCTA from "@/components/EnterpriseCTA";
import DemoForm from "@/components/DemoForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Metrics />
        <Features />
        <InteractiveProduct />
        <Integrations />
        <NetworkVisualization />
        <Benefits />
        <CaseStudy />
        <BeforeAfter />
        <SecurityArchitecture />
        <Testimonials />
        <EnterpriseCTA />
        <DemoForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
