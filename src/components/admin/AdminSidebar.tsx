import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  Puzzle,
  Bell,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès.",
    });
    navigate("/admin/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "Commandes",
      icon: ShoppingCart,
      path: "/admin/orders",
    },
    {
      title: "Produits",
      icon: Package,
      path: "/admin/products",
    },
    {
      title: "Clients",
      icon: Users,
      path: "/admin/customers",
    },
    {
      title: "Paramètres",
      icon: Settings,
      path: "/admin/settings",
    },
    {
      title: "Intégrations",
      icon: Puzzle,
      path: "/admin/integrations",
    },
    {
      title: "Clion",
      icon: Bell,
      path: "/admin/clion",
    },
  ];

  return (
    <div className="w-64 bg-black text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Boxu Admin</h1>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white hover:bg-gray-800"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto pt-8">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-white hover:bg-gray-800"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Déconnexion
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;