import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFonts  from "@functional/useFonts";
import { variables } from "@/style/theme";

const queryClient = new QueryClient();



const QuizzesLayout = () => {

  const fontsLoaded = useFonts();
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen name="[quizId]/index" options={{ headerShown: false }} />
          <Stack.Screen name="[quizId]/questions/[questionId]" options={{ headerShown: false }} />
        </Stack>
      </View>
    </QueryClientProvider>
  );
};

export default QuizzesLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});