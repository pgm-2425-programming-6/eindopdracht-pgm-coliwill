import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Profile = {
  id: string;
  user_id: string;
  username: string;
  avatar: string | null;
};

const useProfileFetcher = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.rpc("get_user_profile");

        if (error) {
          console.error("Error fetching profile:", error.message);
          setError(error.message);
        } else {
          setProfile(data[0] as Profile);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("Unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};

export default useProfileFetcher;