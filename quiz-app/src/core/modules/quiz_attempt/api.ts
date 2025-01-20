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