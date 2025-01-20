import { supabase } from "@/lib/supabase";
import { User_Achievements } from "./types";

export const getLoggedInUserAchievements = async (userId: string): Promise<User_Achievements[] | null> => {
  const { data, error } = await supabase.from("achievements_user").select("id, user_id, achievement_id,unlocked_at").eq("user_id", userId);

  if (error) {
    console.error("Error fetching user achievements:", error.message);
    return null;
  }

  return data;
}