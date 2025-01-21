import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack, useRootNavigationState } from "expo-router";
import AuthMiddleware from "@/middleware/authMiddleware";
import { variables } from "@/style/theme";
import NavBar from "@design/navigation/navBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFonts from "@functional/useFonts";

const queryClient = new QueryClient();

const RootLayout = () => {
  const rootNavigationState = useRootNavigationState();
  const currentRoute =
    rootNavigationState?.routes[rootNavigationState.index]?.name;

  const noNavBarScreens = ["anotherScreen"];

  const fontsLoaded = useFonts();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthMiddleware>
        <View style={styles.container}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="leaderboard" options={{ headerShown: false }} />
            <Stack.Screen
              name="(achievements)/achievements"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="settings" options={{ headerShown: false }} />
            <Stack.Screen
              name="(profile)/profile"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(profile)/updateProfile"
              options={{ headerShown: false }}
            />

          </Stack>
          {/* Conditionally render the NavBar */}
          {!noNavBarScreens.includes(currentRoute) && <NavBar />}
        </View>
      </AuthMiddleware>
    </QueryClientProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //
  },
});
