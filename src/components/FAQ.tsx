import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Qu'est-ce qu'une Mystery Box ?",
      answer: "Une Mystery Box est une boîte surprise contenant des produits variés d'une valeur supérieure au prix d'achat. Chaque boîte est soigneusement préparée pour vous offrir une expérience unique et excitante."
    },
    {
      question: "Combien de temps prend la livraison ?",
      answer: "La livraison prend généralement entre 3 à 5 jours ouvrables dans toute la Tunisie. Vous recevrez un numéro de suivi une fois votre commande expédiée."
    },
    {
      question: "Puis-je retourner ma Mystery Box ?",
      answer: "En raison de la nature surprise de nos produits, les retours ne sont acceptés qu'en cas de défaut de fabrication ou de dommage pendant le transport. Contactez-nous dans les 48h suivant la réception."
    },
    {
      question: "Dans quelles régions livrez-vous ?",
      answer: "Nous livrons dans tous les gouvernorats de Tunisie. Les frais de livraison sont de 8 TND quel que soit votre emplacement."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questions fréquentes
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="border border-black/10">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;