import { supabase } from "@/lib/supabase";
import { Quizzes } from "./types";

export const getQuizzes = async (): Promise<any[] | null> => {
  const { data, error } = await supabase
    .from("quizzes")
    .select("id, name, quiz_image, categories(name)")

  if (error) {
    console.error("Error fetching quizzes with categories:", error.message);
    return null;
  }

  return data.map((entry) => ({
    id: entry.id,
    name: entry.name,
    quiz_image: entry.quiz_image,
    categories: entry.categories,
  }));
};

export const getQuizById = async (quizId: string): Promise<any | null> => {
  const { data, error } = await supabase
    .from("quizzes")
    .select("id, name, quiz_image, categories(name)")
    .eq("id", quizId)
    .single();

  if (error) {
    console.error("Error fetching quiz by id:", error.message);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    quiz_image: data.quiz_image,
    categories: data.categories,
  };
}