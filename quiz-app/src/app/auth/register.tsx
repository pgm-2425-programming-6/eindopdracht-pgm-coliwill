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
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      console.log("Register successful:", data.email);

      // RPC Call to create the profile
      const { error: rpcError } = await supabase.rpc('create_profile_after_signup');

      if (rpcError) {
        console.error("Error creating profile:", rpcError.message);
        Alert.alert("Error creating profile. Please contact support.");
      } else {
        Alert.alert("Register successful! Your profile has been created.");
        router.push("/auth/login");
      }
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
