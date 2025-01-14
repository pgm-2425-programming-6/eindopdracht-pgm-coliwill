import { supabase } from "@/lib/supabase";
import { Bucket } from "./types";

export const getQuizImageUrl = (path: string) => {
  const { data } = supabase.storage.from(Bucket.Quizzes).getPublicUrl(path);
  return data?.publicUrl;
}