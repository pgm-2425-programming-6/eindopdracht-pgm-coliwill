import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

type Props = {
  children: string;
};

const ErrorText = ({ children }: Props) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: variables.fontSizes.medium,
    marginBottom: variables.margin.medium,
    marginLeft: variables.margin.large,
  },
});
