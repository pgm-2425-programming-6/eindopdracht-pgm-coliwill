import { useQuery } from "@tanstack/react-query";
import { getInputQuestionsByQuizId, getMultipleChoiceQuestionsByQuizId } from "@/core/modules/questions/api";
import { input_questions, multiple_choice_questions } from "@/core/modules/questions/types";

type CombinedQuestion = input_questions | (multiple_choice_questions & { multiple_choice_id: number });

export const useCombinedQuestions = (quizId: string | null) => {
  return useQuery({
    queryKey: ["combinedQuestions", quizId],
    queryFn: async () => {
      if (!quizId) return [];

      // Fetch input and multiple-choice questions
      const [inputQuestions, multipleChoiceQuestions] = await Promise.all([
        getInputQuestionsByQuizId(quizId),
        getMultipleChoiceQuestionsByQuizId(quizId),
      ]);

      // Add `multiple_choice_id` to multiple-choice questions
      const combinedMultipleChoiceQuestions = (multipleChoiceQuestions || []).map((mcq) => ({
        ...mcq,
        multiple_choice_id: mcq.id, // Add the `multiple_choice_id` property
      }));

      // Combine and sort questions by order
      const combinedQuestions = [
        ...(inputQuestions || []),
        ...combinedMultipleChoiceQuestions,
      ];

      return combinedQuestions.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)); // Sort by 'order'
    },
    enabled: !!quizId, // Only run if quizId exists
  });
};
