import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MysteryHeader = () => {
  return (
    <header className="mystery-gradient px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
          Boxu
        </Link>
        
        {/* Login Icon */}
        <Link to="/login">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default MysteryHeader;