import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import useCustomFonts from "@functional/useFonts";
import { variables } from "@/style/theme";
import RegisterForm from "@design/Form/RegisterForm";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function signUpWithEmail(data: { email: string; password: string }) {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      console.log("Register successful:", data.email);
      Alert.alert("Register successful!");
      router.push("/auth/login");
    }
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
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
      <RegisterForm onSubmit={signUpWithEmail} />
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
