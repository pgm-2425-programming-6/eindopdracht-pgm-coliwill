import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

type Props = {
  text: string;
  color?: string;
  align?: "center" | "left" | "right";
};

const NormalText = ({text,color, align}:Props) => {
  return (
    <View>
      <Text style={[styles.text, { color: color || variables.colors.text, textAlign: align }]}>{text}</Text>
    </View>
  );
};

export default NormalText;

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.fonts.regular,
    fontSize: variables.fontSizes.medium,
  },
});
