import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AppLoading from "expo-app-loading";
import useCustomFonts from "@functional/useFonts";
import { variables } from "@/style/theme";

const index = () => {
  const fontsLoaded = useCustomFonts();

if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
      <Link href="/two">two</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: variables.fonts.light,
    color: variables.colors.primary,
  },
});
