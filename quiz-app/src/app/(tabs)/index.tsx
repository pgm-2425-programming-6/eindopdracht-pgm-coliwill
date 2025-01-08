import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AppLoading from "expo-app-loading";
import useCustomFonts from "@functional/useFonts";
import { variables } from "@/style/theme";
import Button from "@design/Button/Button";

const index = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
        <Button onPress={() => {}}>Child</Button>
        
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: variables.padding.large,
    paddingRight: variables.padding.large,
  },
});
