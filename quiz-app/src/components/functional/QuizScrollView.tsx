import React from "react";
import { useQuery } from "@tanstack/react-query";
import QuizCard from "@design/card/QuizCard";
import { getQuizImageUrl } from "@/core/modules/storage/utils";
import { getQuizzes } from "@/core/modules/quizzes/api";
import HorizontalScroll from "@design/ScrollContainer/HorizontalScroll";
import { Text } from "react-native";

interface QuizCardData {
  id: string;
  imageUrl: string;
  quizTitle: string;
  quizCategory: string;
}

const QuizScrollView = () => {
  const {
    data: quizzes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getQuizzes,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading quizzes!</Text>;
  }

  const quizCards: QuizCardData[] =
    quizzes?.map((quiz) => ({
      id: quiz.id,
      imageUrl: getQuizImageUrl(quiz.quiz_image),
      quizTitle: quiz.name,
      quizCategory: quiz.categories.name,
    })) || [];

  return (
    <HorizontalScroll<QuizCardData>
      data={quizCards}
      renderItem={({ item }) => (
        <QuizCard
          quizId={item.id}
          imageUrl={item.imageUrl}
          quizTitle={item.quizTitle}
          quizCategory={item.quizCategory}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default QuizScrollView;
