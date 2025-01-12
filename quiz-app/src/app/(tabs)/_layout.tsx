import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack, useRootNavigationState } from "expo-router";
import AuthMiddleware from "@/middleware/authMiddleware";
import { variables } from "@/style/theme";
import NavBar from "@design/navigation/navBar";

const RootLayout = () => {
  // Get the root navigation state
  const rootNavigationState = useRootNavigationState();
  const currentRoute = rootNavigationState?.routes[rootNavigationState.index]?.name;

  // Specify screens where the navbar should not be visible
  const noNavBarScreens = [ "anotherScreen",]; // Add route names where navbar is hidden

  return (
    <AuthMiddleware>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="achievments" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
        </Stack>
        {/* Conditionally render the NavBar */}
        {!noNavBarScreens.includes(currentRoute) && <NavBar />}
      </View>
    </AuthMiddleware>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 
  },
});
