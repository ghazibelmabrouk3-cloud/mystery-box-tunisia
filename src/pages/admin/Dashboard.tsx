import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { ShoppingCart, DollarSign, Users, TrendingUp } from "lucide-react";

interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  totalCustomers: number;
  pendingOrders: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    pendingOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Get total orders
      const { count: totalOrders } = await supabase
        .from("orders")
        .select("*", { count: "exact", head: true });

      // Get total revenue
      const { data: revenueData } = await supabase
        .from("orders")
        .select("total_price");

      const totalRevenue = revenueData?.reduce(
        (sum, order) => sum + parseFloat(order.total_price.toString()),
        0
      ) || 0;

      // Get unique customers count
      const { data: customersData } = await supabase
        .from("orders")
        .select("customer_name, phone")
        .order("customer_name");

      const uniqueCustomers = new Set(
        customersData?.map((order) => `${order.customer_name}-${order.phone}`)
      ).size;

      // Get pending orders
      const { count: pendingOrders } = await supabase
        .from("orders")
        .select("*", { count: "exact", head: true })
        .eq("status", "processing");

      setStats({
        totalOrders: totalOrders || 0,
        totalRevenue,
        totalCustomers: uniqueCustomers,
        pendingOrders: pendingOrders || 0,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Commandes Totales",
      value: stats.totalOrders.toString(),
      description: "Toutes les commandes",
      icon: ShoppingCart,
    },
    {
      title: "Revenus Totaux",
      value: `${stats.totalRevenue.toFixed(2)} TND`,
      description: "Revenus générés",
      icon: DollarSign,
    },
    {
      title: "Clients",
      value: stats.totalCustomers.toString(),
      description: "Clients uniques",
      icon: Users,
    },
    {
      title: "Commandes en Attente",
      value: stats.pendingOrders.toString(),
      description: "À traiter",
      icon: TrendingUp,
    },
  ];

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Aperçu de votre boutique Boxu
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Commandes Récentes</CardTitle>
            <CardDescription>
              Dernières commandes passées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Consultez la page Commandes pour voir toutes les commandes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistiques</CardTitle>
            <CardDescription>
              Performances de la boutique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Graphiques et analyses détaillées disponibles prochainement
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;