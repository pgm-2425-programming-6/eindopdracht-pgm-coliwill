import { supabase } from "@/lib/supabase";
import { Choices } from "./types";

export const getChoicesByMultipleChoiceId = async (multiple_choice_id: string) => {
  const { data, error } = await supabase
    .from("choices")
    .select("*")
    .eq("multiple_choice_id", multiple_choice_id);

  if (error) {
    console.error("Error fetching choices:", error.message);
    return [];
  }

  console.log("Fetched Choices:", data); 
  return data;
};
