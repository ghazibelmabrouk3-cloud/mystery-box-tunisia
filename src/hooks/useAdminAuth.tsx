import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface AdminAuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
}

export const useAdminAuth = () => {
  const [authState, setAuthState] = useState<AdminAuthState>({
    user: null,
    session: null,
    loading: true,
    isAdmin: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          // Check if user is admin
          const { data: adminUser, error } = await supabase
            .from("admin_users")
            .select("*")
            .eq("email", session.user.email)
            .single();

          const isAdmin = !error && adminUser && adminUser.is_active;

          setAuthState({
            user: session.user,
            session,
            loading: false,
            isAdmin,
          });

          // Redirect non-admin users
          if (!isAdmin && location.pathname.startsWith("/admin")) {
            navigate("/admin/login");
          }
        } else {
          setAuthState({
            user: null,
            session: null,
            loading: false,
            isAdmin: false,
          });

          // Redirect to login if accessing admin pages without auth
          if (location.pathname.startsWith("/admin") && location.pathname !== "/admin/login") {
            navigate("/admin/login");
          }
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const { data: adminUser, error } = await supabase
          .from("admin_users")
          .select("*")
          .eq("email", session.user.email)
          .single();

        const isAdmin = !error && adminUser && adminUser.is_active;

        setAuthState({
          user: session.user,
          session,
          loading: false,
          isAdmin,
        });

        if (!isAdmin && location.pathname.startsWith("/admin")) {
          navigate("/admin/login");
        }
      } else {
        setAuthState({
          user: null,
          session: null,
          loading: false,
          isAdmin: false,
        });

        if (location.pathname.startsWith("/admin") && location.pathname !== "/admin/login") {
          navigate("/admin/login");
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location]);

  return authState;
};