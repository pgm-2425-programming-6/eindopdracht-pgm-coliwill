import { supabase } from "@/lib/supabase";
import { Bucket } from "./types";

export const getQuizImageUrl = (path: string) => {
  const { data } = supabase.storage.from(Bucket.Quizzes).getPublicUrl(path);
  return data?.publicUrl;
}

export const getAvatarImageUrl = (path: string) => {
  const { data } = supabase.storage.from(Bucket.Avatars).getPublicUrl(path);
  return data?.publicUrl;
}

export const getQuestionImageUrl = (path: string) => {
  const { data } = supabase.storage.from(Bucket.Questions).getPublicUrl(path);
  return data?.publicUrl;
}