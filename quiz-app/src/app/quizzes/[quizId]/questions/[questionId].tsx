import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { getQuestionImageUrl } from "@/core/modules/storage/utils";
import { useSearchParams } from "expo-router/build/hooks";
import { useCombinedQuestions } from "@hooks/useCombinedQuestions";
import { useQuery } from "@tanstack/react-query";
import { getChoicesByMultipleChoiceId } from "@/core/modules/choices/api";
import { insertQuizAttempt } from "@/core/modules/quiz_attempt/api";
import { supabase } from "@/lib/supabase";
import { variables } from "@/style/theme";
import Button from "@/components/design/Button/Button";
import { useRouter } from "expo-router/build/hooks";
import * as Speech from "expo-speech";

const Quiz = () => {
  const searchParams = useSearchParams();
  const quizId = searchParams.get("quizId");
  const [index, setIndex] = useState(0);
  const [inputAnswer, setInputAnswer] = useState("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(10000);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const router = useRouter();
  const {
    data: combinedQuestions,
    isLoading,
    error,
  } = useCombinedQuestions(quizId);

  type Question = {
    created_at: string;
    id: number;
    image: string | null;
    order: number | null;
    question_text: string;
    quiz_id: number;
    multiple_choice_id?: number;
    true_answer?: string;
  };

  const currentQuestion: Question | null = combinedQuestions
    ? combinedQuestions[index]
    : null;

  const { data: choices = [], isLoading: loadingChoices } = useQuery({
    queryKey: ["choices", currentQuestion?.id],
    queryFn: () =>
      getChoicesByMultipleChoiceId(currentQuestion?.id?.toString() || ""),
    enabled: !!currentQuestion?.multiple_choice_id,
  });

  const calculateQuestionScore = () => {
    return Math.round((timeLeft / 10000) * 1000);
  };

  const handleSubmitAnswer = () => {
    if (currentQuestion?.true_answer) {
      const isAnswerCorrect =
        inputAnswer.trim().toLowerCase() ===
        currentQuestion.true_answer.trim().toLowerCase();
      if (isAnswerCorrect) {
        const questionScore = calculateQuestionScore();
        setScore((prevScore) => prevScore + questionScore);
        setCorrectAnswers((prev) => prev + 1);
      }
      setIsCorrect(isAnswerCorrect);
      setIsAnswerSubmitted(true);
    }
  };

  const handleChoicePress = (isCorrect: boolean) => {
    if (isCorrect) {
      const questionScore = calculateQuestionScore();
      setScore((prevScore) => prevScore + questionScore);
      setCorrectAnswers((prev) => prev + 1);
    }
    setIsCorrect(isCorrect);
    setIsAnswerSubmitted(true);
  };

  const handleNext = async () => {
    if (combinedQuestions && index < combinedQuestions.length - 1) {
      setInputAnswer("");
      setIsAnswerSubmitted(false);
      setIsCorrect(null);
      setTimeLeft(10000);
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
      console.log("Inserting quiz attempt with:", { userId, quizId, score });

      if (userId) {
        const success = await insertQuizAttempt(userId, quizId!, score);
        if (success) {
          console.log("Quiz attempt successfully recorded!");
        }
      }
    }
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
      }
    };
    fetchUserId();
  }, []);

  useEffect(() => {
    if (currentQuestion?.question_text) {
      Speech.speak(currentQuestion.question_text, {
        language: "en-US",
        pitch: 1,
        rate: 1,
        onDone: () => console.log("Finished reading the question."),
        onError: (err) => console.error("Error during speech:", err),
      });
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft <= 0 && !isAnswerSubmitted) {
      setIsCorrect(false);
      setIsAnswerSubmitted(true);
    }

    const timerId = setTimeout(() => {
      if (!isAnswerSubmitted) {
        setTimeLeft((prevTime) => Math.max(prevTime - 1000, 0));
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, isAnswerSubmitted]);

  if (!quizId) {
    return <Text>Invalid quiz ID</Text>;
  }

  if (isLoading) {
    return <Text>Loading questions...</Text>;
  }

  if (error) {
    return <Text>Error loading questions!</Text>;
  }

  if (quizCompleted) {
    return (
      <View style={styles.completedContainer}>
        <Text style={styles.completedText}>
          Congratulations! You have completed the quiz.
        </Text>
        <Text style={styles.scoreText}>Your Score: {score}</Text>
        <Text style={styles.scoreTextResult}>
          {correctAnswers}/{combinedQuestions?.length}
        </Text>
        <Button onPress={() => router.replace("/(tabs)")}>Home</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
        data={currentQuestion?.multiple_choice_id ? choices : []}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.choiceButton,
              isAnswerSubmitted && item.is_correct ? styles.correctChoice : {},
              isAnswerSubmitted && !item.is_correct
                ? styles.incorrectChoice
                : {},
            ]}
            disabled={isAnswerSubmitted}
            onPress={() => handleChoicePress(item.is_correct)}
          >
            <Text style={styles.choiceText}>{item.choice_text}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            {currentQuestion && (
              <>
                <Text style={styles.timerText}>
                  {(timeLeft / 1000).toFixed(1)}s
                </Text>
                <Text style={styles.questionText}>
                  {currentQuestion.question_text}
                </Text>

                {currentQuestion.image && (
                  <Image
                    borderRadius={variables.borderRadius.large}
                    width={200}
                    height={200}
                    source={{ uri: getQuestionImageUrl(currentQuestion.image) }}
                  />
                )}
                {"true_answer" in currentQuestion && (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Type your answer here"
                      value={inputAnswer}
                      onChangeText={setInputAnswer}
                      editable={!isAnswerSubmitted}
                    />
                    {!isAnswerSubmitted ? (
                      <Pressable
                        style={styles.submitButton}
                        onPress={handleSubmitAnswer}
                      >
                        <Text style={styles.buttonText}>Submit Answer</Text>
                      </Pressable>
                    ) : isCorrect ? (
                      <Text style={styles.correctText}>
                        Correct! You may proceed.
                      </Text>
                    ) : (
                      <>
                        <Text style={styles.incorrectText}>
                          Incorrect! Proceed to the next question.
                        </Text>
                        <Text>
                          Correct answer was {currentQuestion.true_answer}
                        </Text>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </View>
        }
        ListFooterComponent={
          <Pressable
            style={[
              styles.button,
              !isAnswerSubmitted &&
              currentQuestion &&
              "true_answer" in currentQuestion
                ? styles.disabledButton
                : {},
            ]}
            onPress={handleNext}
            disabled={
              !isAnswerSubmitted &&
              currentQuestion &&
              "true_answer" in currentQuestion
            }
          >
            <Text style={styles.buttonText}>Next Question</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: "center",
  },
  quizIdText: {
    fontSize: 16,
    marginBottom: 10,
  },
  questionText: {
    fontFamily: variables.fonts.regular,
    fontSize: variables.fontSizes.xxLarge,
    marginBottom: 20,
    textAlign: "center",
  },
  timerText: {
    fontFamily: variables.fonts.regular,
    fontSize: 18,
    color: variables.colors.secondary,
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "100%",
    marginBottom: 20,
    borderRadius: variables.borderRadius.large,
    backgroundColor: "#FFF",
  },
  submitButton: {
    padding: 20,
    backgroundColor: variables.colors.primary,
    borderRadius: variables.borderRadius.large,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: variables.colors.primary,
    borderRadius: variables.borderRadius.large,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    fontFamily: variables.fonts.regular,
    color: "#FFF",
    fontSize: variables.fontSizes.xLarge,
  },
  correctText: {
    fontFamily: variables.fonts.regular,
    color: "green",
    fontSize: 16,
    marginBottom: 10,
  },
  incorrectText: {
    fontFamily: variables.fonts.regular,
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  choiceButton: {
    width: "45%",
    height: 80,
    textAlign: "center",
    justifyContent: "center",
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: "#EEE",
    borderRadius: variables.borderRadius.medium,
    marginBottom: 10,
    alignItems: "center",
  },
  correctChoice: {
    backgroundColor: variables.colors.primary,
  },
  incorrectChoice: {
    backgroundColor: variables.colors.secondary,
  },
  choiceText: {
    fontFamily: variables.fonts.regular,
    fontSize: variables.fontSizes.xLarge,
    textAlign: "center",
    color: "black",
  },
  completedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    padding: 20,
    backgroundColor: variables.colors.background,
  },
  completedText: {
    fontFamily: variables.fonts.bold,
    fontSize: variables.fontSizes.xxxLarge,
    textAlign: "center",
    marginBottom: 10,
  },
  scoreText: {
    fontFamily: variables.fonts.regular,
    fontSize: variables.fontSizes.xLarge,
    color: "#333",
    textAlign: "center",
  },

  scoreTextResult: {
    fontFamily: variables.fonts.bold,
    fontSize: variables.fontSizes.xxxLarge,
    color: "#333",
    textAlign: "center",
  },
  container: {
    backgroundColor: variables.colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
