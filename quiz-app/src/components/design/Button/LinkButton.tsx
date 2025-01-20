import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import { variables } from "@/style/theme";

type Props = {
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
  complete?: boolean;
};

const LinkButton = ({ onPress, children, disabled, color, complete }: Props) => {
  const buttonColor = complete ? color || variables.colors.buttonText : 'transparent';
  const textColor = complete ? 'white' : color || variables.colors.buttonText;

  return (
    <Pressable
      style={[styles.buttonContainer, { borderColor: color || variables.colors.buttonText, backgroundColor: buttonColor }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{children}</Text>
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
