import { supabase } from "@/lib/supabase";
import { Profile, ProfileInsert, ProfileUpdate } from "./types";

export const getProfile = async (user_id: string) => {
  const { data } = await supabase.from("profiles").select("*").eq("user_id", user_id);
  return Promise.resolve(data);
}

export const getAllProfiles = async () => {
  const { data } = await supabase.from("profiles").select("*");
  return Promise.resolve(data);
}