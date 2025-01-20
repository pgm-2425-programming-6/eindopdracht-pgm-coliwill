import { supabase } from "@/lib/supabase";
import { Achievements } from "./types";

export const getAchievements = async (): Promise<Achievements[] | null> => {
  const { data, error } = await supabase.from("achievements").select("id, name, created_at, description, icon");

  if (error) {
    console.error("Error fetching achievements:", error.message);
    return null;
  }

  return data;
};