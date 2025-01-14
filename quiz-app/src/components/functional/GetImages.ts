import { SupabaseClient } from "@supabase/supabase-js";
import { FileObject } from "@supabase/storage-js";

const fetchImages = async (supabase: SupabaseClient): Promise<string[]> => {
  const { data: files, error } = await supabase.storage
    .from("quizzes")
    .list("", { limit: 10, offset: 0 });

  if (error) {
    console.error("Error fetching images:", error.message);
    return [];
  }

  if (files && files.length > 0) {
    const images: string[] = files.map((file: FileObject) => {
      const { publicUrl } = supabase.storage.from("quizzes").getPublicUrl(file.name).data;
      return publicUrl || "";
    });

    return images.filter((url) => url);
  }

  console.log("No files found in the bucket.");
  return [];
};

export default fetchImages;
