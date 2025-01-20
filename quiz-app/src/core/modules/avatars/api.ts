import { supabase } from "@/lib/supabase";
import { Avatars } from "./types";

const getAvatars = async (): Promise<Avatars[] | null> => {
  const { data, error } = await supabase.from("avatars").select("id, created_at, image_name");

  if (error) {
    console.error("Error fetching avatars:", error.message);
    return null;
  }

  return data;
}

export default getAvatars;