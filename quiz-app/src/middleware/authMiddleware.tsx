import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { supabase } from '@lib/supabase';

const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.replace('/auth/login');
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
};

export default AuthMiddleware;