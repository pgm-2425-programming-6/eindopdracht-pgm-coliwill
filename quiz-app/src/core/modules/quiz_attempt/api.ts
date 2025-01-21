import { supabase } from "@/lib/supabase";


export const insertQuizAttempt = async (userId: string, quizId: string, score: number) => {
  const { data, error } = await supabase
    .from("quiz_attempt")
    .insert([{ user_id: userId, quiz_id: quizId, score }]);

  if (error) {
    console.error("Error inserting quiz attempt:", error.message);
    return false;
  }

  console.log("Quiz attempt inserted:", data);
  return true;
};

export const getAllQuizAttempts = async () => {
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*");

  if (error) {
    console.error("Error fetching all quiz attempts:", error.message);
    return null;
  }

  return data;
}