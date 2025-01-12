import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

type Props = {
  text: string;
};

const Title = ({text}:Props) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: variables.fonts.bold,
    color: variables.colors.text,
    fontSize: variables.fontSizes.xxLarge,
  },
});
