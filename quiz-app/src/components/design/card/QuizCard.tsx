import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageCard from "@design/card/ImageCard";
import { variables } from "@/style/theme";

import { useRouter } from "expo-router";

type Props = {
  imageUrl: string;
  quizTitle: string;
  quizCategory: string;
  quizId: string;
};

const QuizCard = ({ imageUrl, quizTitle, quizCategory, quizId }: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push(`/quizzes/${quizId}` as any)}
      >
        <ImageCard imageUrl={imageUrl} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{quizTitle}</Text>
          <Text style={styles.subTitle}>{quizCategory}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  container: {
    padding: variables.padding.medium,
    backgroundColor: variables.colors.cardBackground,
    borderRadius: variables.borderRadius.medium,
  },
  textContainer: {
    marginTop: variables.margin.medium,
    padding: variables.padding.small,
    borderRadius: variables.borderRadius.small,
  },
  title: {
    fontFamily: variables.fonts.bold,
    color: variables.colors.text,
    fontSize: variables.fontSizes.xLarge,
    maxWidth: 110,
  },

  subTitle: {
    fontFamily: variables.fonts.regular,
    color: variables.colors.text,
    fontSize: variables.fontSizes.small,
    maxWidth: 110,
  },
});
