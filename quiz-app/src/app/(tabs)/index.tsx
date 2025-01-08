import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import useCustomFonts from "@functional/useFonts";
import { variables } from "@/style/theme";
import TextInputField from "@design/Form/TextInputField";
import LoginForm from "@design/Form/LoginForm";

const index = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image style={{ margin: variables.margin.large }} source={require("@assets/images/logo.png")} />
      <LoginForm />
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
