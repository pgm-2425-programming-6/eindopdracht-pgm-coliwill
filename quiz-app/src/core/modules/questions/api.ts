import { supabase } from "@/lib/supabase";
import { input_questions } from "./types";
import { multiple_choice_questions } from "./types";

export const getInputQuestionsByQuizId = async (quiz_id: string): Promise<input_questions[] | null> => {
  const { data, error } = await supabase.from("input_questions").select("*").eq("quiz_id", quiz_id);

  if (error) {
    console.error("Error fetching input questions:", error.message);
    return null;
  }

  return data;
}

export const getMultipleChoiceQuestionsByQuizId = async (quiz_id: string): Promise<multiple_choice_questions[] | null> => {
  const { data, error } = await supabase.from("multiple_choice_questions").select("*").eq("quiz_id", quiz_id);

  if (error) {
    console.error("Error fetching multiple choice questions:", error.message);
    return null;
  }

  return data;
}
