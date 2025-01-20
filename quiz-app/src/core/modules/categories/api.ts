import { supabase } from "@/lib/supabase";
import { Categories } from "./types";

export const getCategories = async (): Promise<Categories[] | null> => {
  const { data, error } = await supabase.from("categories").select("id, name, created_at");

  if (error) {
    console.error("Error fetching categories:", error.message);
    return null;
  }

  return data;
};