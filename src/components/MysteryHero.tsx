import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import mysteryBoxImage from "@/assets/mystery-box-hero.jpg";

const MysteryHero = () => {
  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="mystery-gradient px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Mystery Box -<br />
            Découvrez la surprise !
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="bg-white text-black px-6 py-3 rounded-2xl text-2xl font-bold">
              99,000 TND
            </div>
            <Button 
              variant="mystery" 
              size="lg" 
              className="px-8 py-3 text-lg font-medium"
              onClick={scrollToForm}
            >
              Acheter Maintenant
            </Button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-lg">Livraison dans toute la Tunisie</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-lg">Valeur supérieure au prix d'achat</span>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center">
          <div className="mystery-elegant-shadow rounded-3xl overflow-hidden">
            <img 
              src={mysteryBoxImage} 
              alt="Mystery Box Product" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MysteryHero;