import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

const TextInputField = ({ label, placeholder, value, onChangeText, secureTextEntry }: Props) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  input: {
    fontFamily: variables.fonts.regular,
    borderRadius: variables.borderRadius.large,
    borderColor: "transparent",
    borderWidth: 1,
    paddingLeft: variables.padding.large,
    paddingVertical: variables.padding.xLarge,
    width: "100%",
    backgroundColor: variables.colors.inputBackground,
  },

  textInputContainer: {
    width: "100%",
    marginBottom: variables.margin.large,
  },
  label: {
    fontFamily: variables.fonts.semiBold,
    fontSize: variables.fontSizes.large,
    color: variables.colors.text,
    marginBottom: variables.margin.small,
    marginLeft: variables.margin.large,
  },
});
