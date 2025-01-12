import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageCard from "@design/card/ImageCard";
import { variables } from "@/style/theme";

const QuizCard = () => {
  return (
    <View style={styles.container}>
      <ImageCard />
      <View style={styles.textContainer}>
        <Text style={styles.title}>PGM-6</Text>
        <Text style={styles.subTitle}>Mobile development</Text>
      </View>
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
