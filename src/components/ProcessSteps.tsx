import { ShoppingCart, Truck, Gift } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Commandez votre Boxu",
      description: "Remplissez le formulaire et confirmez votre commande"
    },
    {
      icon: Truck,
      title: "Attendez la livraison",
      description: "Livraison en 3-5 jours dans toute la Tunisie"
    },
    {
      icon: Gift,
      title: "Découvrez votre surprise",
      description: "Ouvrez votre boîte et profitez de vos surprises"
    }
  ];

  return (
    <section className="py-20 px-6 bg-mystery-light-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center space-y-6">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                {/* Step Number */}
                <div className="text-sm font-medium text-muted-foreground">
                  {index + 1}.
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;