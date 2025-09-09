const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Boxu</h3>
            <p className="text-gray-300 leading-relaxed">
              Découvrez des surprises uniques avec nos Mystery Box soigneusement préparées en Tunisie.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens Utiles</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Conditions générales
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Politique de retour
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: contact@boxu.tn</p>
              <p>Téléphone: +216 XX XXX XXX</p>
              <p>Livraison dans toute la Tunisie</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Boxu. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;