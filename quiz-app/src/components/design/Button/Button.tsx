import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

type Props = {
  onPress: () => void;
  children: string;
  disabled?: boolean;
};

const Button = ({ onPress, children, disabled = false }: Props) => {
  return (
    <Pressable
      style={styles.button}
      accessibilityLabel={children}
      onPress={onPress}
      disabled={disabled}
    >
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.fonts.bold,
    color: variables.colors.buttonText,
    fontSize: variables.fontSizes.xxxLarge,
  },
  button: {
    backgroundColor: variables.colors.primary,
    padding: variables.padding.large,
    borderRadius: variables.borderRadius.large,
    width: "100%",
    alignItems: "center",
  },
});
