import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import useCustomFonts from "@functional/useFonts";
import { variables } from "@/style/theme";
import LoginForm from "@design/Form/LoginForm";
import { supabase } from "@/lib/supabase";
import { Router } from "expo-router";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function signInWithEmail(data: { email: string; password: string }) {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      console.log("Login successful:", data.email);
      Alert.alert("Login successful!");
      router.push("/two");
    }
    setLoading(false);
  }

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ margin: variables.margin.large }}
        source={require("@assets/images/logo.png")}
      />
      <LoginForm onSubmit={signInWithEmail} />
    </View>
  );
};

export default Index;

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
