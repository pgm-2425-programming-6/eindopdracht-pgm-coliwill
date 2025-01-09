import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AuthMiddleware from "@/middleware/authMiddleware";

const Rootlayout = () => {
  return (
    <AuthMiddleware>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="two" options={{ headerShown: false }} />
      </Stack>
    </AuthMiddleware>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({});
