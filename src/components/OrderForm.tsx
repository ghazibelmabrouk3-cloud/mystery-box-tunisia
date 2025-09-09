import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tunisianGovernorates = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte",
  "Béja", "Jendouba", "Le Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid",
  "Sousse", "Monastir", "Mahdia", "Sfax", "Gafsa", "Tozeur", "Kebili", "Gabès",
  "Medenine", "Tataouine"
];

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    governorate: "",
    address: ""
  });

  const productPrice = 99;
  const shippingPrice = 8;
  const totalPrice = productPrice + shippingPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Order submitted:", formData);
  };

  return (
    <section id="order-form" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <Card className="mystery-card-shadow border-2 border-black/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Commandez votre Mystery Box
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nom Complet *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="border-black/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-black/20"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="governorate">Gouvernorat *</Label>
                <Select value={formData.governorate} onValueChange={(value) => setFormData({...formData, governorate: value})}>
                  <SelectTrigger className="border-black/20">
                    <SelectValue placeholder="Sélectionnez votre gouvernorat" />
                  </SelectTrigger>
                  <SelectContent>
                    {tunisianGovernorates.map((gov) => (
                      <SelectItem key={gov} value={gov}>
                        {gov}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Adresse Complète *</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Rue, ville, code postal..."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="border-black/20"
                  required
                />
              </div>
              
              {/* Pricing Summary */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between text-lg">
                  <span>Produit:</span>
                  <span>{productPrice}.000 TND</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Livraison:</span>
                  <span>{shippingPrice}.000 TND</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-3">
                  <span>Total:</span>
                  <span>{totalPrice}.000 TND</span>
                </div>
              </div>
              
              <Button 
                type="submit" 
                variant="mystery" 
                size="lg" 
                className="w-full text-lg font-medium py-4"
              >
                Commander Maintenant
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;