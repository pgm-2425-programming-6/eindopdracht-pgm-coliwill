import { supabase } from "@/lib/supabase";


export const insertQuizAttempt = async (userId: string, quizId: string, score: number) => {
  try {
    const { data, error } = await supabase
      .from("quiz_attempts")
      .insert([{ user_id: userId, quiz_id: quizId, score }]);

    if (error) {
      console.error("Error inserting quiz attempt:", error.message);
      return { success: false, error: error.message };
    }

    console.log("Inserted quiz attempt:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error inserting quiz attempt:", err);
    return { success: false, error: err.message };
  }
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