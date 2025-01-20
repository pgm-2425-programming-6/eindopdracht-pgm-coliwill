import { Image, Pressable, StyleSheet, Text, View, Switch } from "react-native";
import React, { useEffect, useState } from "react";
import { variables } from "@/style/theme";
import Button from "@/components/design/Button/Button";
import LeftIcon from "@assets/images/icons/chevronLeft.svg";

import { useSearchParams } from "expo-router/build/hooks";
import { getQuizImageUrl } from "@/core/modules/storage/utils";
import { useRouter } from "expo-router";
import Title from "@/components/design/text/Title";
import NormalText from "@/components/design/text/NormalText";
import { getQuizById } from "@/core/modules/quizzes/api";


const Index = () => {



 
  const router = useRouter();
  const searchParams = useSearchParams();
  const quizId = searchParams.get("quizId");
  const questionId = searchParams.get("quizId");
  const [textToSpeechEnabled, setTextToSpeechEnabled] = useState(false);
  const [quiz, setQuiz] = useState<{
    name: string;
    categories: { name: string };
  } | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (quizId) {
        try {
          const fetchedQuiz = await getQuizById(quizId);
          setQuiz(fetchedQuiz);
          console.log(fetchedQuiz);
        } catch (error) {
          console.error("Error fetching quiz:", error);
        }
      } else {
        console.log("Quiz ID is null");
      }
    };

    fetchQuiz();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate("/(tabs)")}>
        <LeftIcon width={40} height={30} />
      </Pressable>
      <View style={{ alignItems: "center", marginTop: variables.margin.large }}>
        <Image
          source={{ uri: getQuizImageUrl("intro.png") }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      {quiz && (
        <View style={{ marginTop: variables.margin.large }}>
          <Title text={quiz.name} />
          <NormalText text={quiz.categories.name} />
        </View>
      )}

      <View style={{ marginTop: variables.margin.large }}>
        <NormalText text="Are you ready? In this quiz you will answer multiple choice and open questions. Once a question is answered you can’t go back. Text to speech will be available for each question. " />
      </View>
      <View style={{ marginTop: variables.margin.large }}>
        <Title text="Good Luck!" />
      </View>

      <View style={styles.setting}>
        <Title text="Text To Speech" />
        <Switch
          trackColor={{
            false: variables.colors.secondary,
            true: variables.colors.primary,
          }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setTextToSpeechEnabled((prev) => !prev)}
          value={textToSpeechEnabled}
        />
      </View>

      <Button onPress={() => router.push(`/quizzes/${quizId}/questions/${questionId}`)}>
        Start Quiz
      </Button>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingLeft: variables.padding.xxxLarge,
    paddingRight: variables.padding.xxxLarge,
    paddingTop: variables.padding.xxxLarge,
    backgroundColor: variables.colors.background,
    flex: 1,
  },

  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: variables.margin.medium,
    marginTop: variables.margin.xLarge,
  },
});
