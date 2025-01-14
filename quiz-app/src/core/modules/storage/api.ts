import { decode } from 'base64-arraybuffer';
import { supabase } from '@/lib/supabase';

export const uploadImage = async (bucket: string, file: string, fileName: string) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, decode(file));

  if (error) {
    console.error('Error uploading image:', error.message);
    return null;
  }

  return data;
}

export const GetAllQuizImages = async () => {
  const { data: files, error } = await supabase.storage
    .from('quizzes')
    .list('');

  if (error) {
    console.error('Error fetching images:', error.message);
    return [];
  }

  if (files && files.length > 0) {
    const images: string[] = files.map((file: any) => {
      const { publicUrl } = supabase.storage.from('quizzes').getPublicUrl(file.name).data;
      return publicUrl || '';
    });

    return images.filter((url) => url);
  }

  console.log('No files found in the bucket.');
  return [];
}


