import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React, { useState } from "react";
import { variables } from "@/style/theme";
import { supabase } from "@/lib/supabase";

import { useRouter } from "expo-router";

import Title from "@design/text/Title";

import BackIcon from "@assets/images/icons/chevronLeft.svg";
import Button from "@/components/design/Button/Button";

const settings = () => {
  const router = useRouter();

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationsEnabled, setVibrationsEnabled] = useState(true);
  const [textToSpeechEnabled, setTextToSpeechEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Pressable
          onPress={() => router.navigate("/profile")}
          style={styles.backIconContainer}
        >
          <BackIcon width={40} height={30} />
        </Pressable>
        <Title text="Settings" />
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.setting}>
          <Title text="Sound" />
          <Switch
            trackColor={{
              false: variables.colors.secondary,
              true: variables.colors.primary,
            }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSoundEnabled((prev) => !prev)}
            value={soundEnabled}
          />
        </View>
        <View style={styles.setting}>
          <Title text="Vibrations" />
          <Switch
            trackColor={{
              false: variables.colors.secondary,
              true: variables.colors.primary,
            }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setVibrationsEnabled((prev) => !prev)}
            value={vibrationsEnabled}
          />
        </View>
        <View style={styles.setting}>
          <Title text="Text to Speech" />
          <Switch
            trackColor={{
              false: variables.colors.secondary,
              true: variables.colors.primary,
            }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setTextToSpeechEnabled((prev) => !prev)}
            value={textToSpeechEnabled}
          />
        </View>
        <Button
          onPress={async () => {
            await supabase.auth.signOut();
            router.replace("/auth/login");
          }}
          color={variables.colors.secondary}
        >
          Logout
        </Button>
      </View>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.background,
    paddingLeft: variables.padding.xxxLarge,
    paddingRight: variables.padding.xxxLarge,
    paddingTop: variables.padding.xxxLarge,
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: variables.margin.large,
    position: "relative",
  },
  backIconContainer: {
    position: "absolute",
    left: 0,
  },

  settingsContainer: {
    flex: 1,
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
  },

  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: variables.margin.large,
  },
});
