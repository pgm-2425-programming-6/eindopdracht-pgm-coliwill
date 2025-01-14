import { supabase } from "@/lib/supabase";
import { Quizzes } from "./types";

export const getQuizzes = async (): Promise<Quizzes[] | null> => {
  const { data } = await supabase.from("quizzes").select("*");
  return Promise.resolve(data);
}