import React, { useEffect } from "react";
import { getQuizzes } from "@/core/modules/quizzes/api";
import { Text } from "react-native";

const QuizzesPage: React.FC = () => {
  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizzes = await getQuizzes();
      console.log("Fetched Quizzes:", quizzes);
    };

    fetchQuizzes();
  }, []); 

  return <Text>Check the console for quizzes data!</Text>;
};

export default QuizzesPage;