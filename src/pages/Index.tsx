import MysteryHeader from "@/components/MysteryHeader";
import MysteryHero from "@/components/MysteryHero";
import OrderForm from "@/components/OrderForm";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MysteryHeader />
      <MysteryHero />
      <ProcessSteps />
      <OrderForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
