import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import useCustomFonts from "@functional/useFonts";
import { variables } from "@/style/theme";
import TextInputField from "@design/Form/TextInputField";



const index = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <TextInputField />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: variables.padding.xxxLarge,
    paddingRight: variables.padding.xxxLarge,
    backgroundColor: variables.colors.background,
  },
});
