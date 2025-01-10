import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import { variables } from "@/style/theme";

type Props = {
  onPress: () => void;
  children: string;
  disabled?: boolean;
  color?: string;
};

const LinkButton = ({onPress, children, disabled, color}:Props) => {
  return (
    <Pressable
      style={[styles.buttonContainer, { borderColor: color || variables.colors.buttonText }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color: color || variables.colors.buttonText }]}>{children}</Text>
    </Pressable>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-start",
    padding: variables.padding.small,
    borderRadius: variables.borderRadius.large,
    borderColor: variables.colors.buttonText,
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: variables.fonts.regular,
    color: variables.colors.buttonText,
    fontSize: variables.fontSizes.medium,
    flexShrink: 1,
  },
});
