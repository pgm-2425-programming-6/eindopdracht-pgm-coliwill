import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { variables } from "@/style/theme";

import SettingsIcon from "@assets/images/icons/settings.svg";
import EditIcon from "@assets/images/icons/edit.svg";

import ImageCard from "@design/card/ImageCard";

import Title from "@design/text/Title";
import Subtitle from "@/components/design/text/Subtitle";
import normalText from "@/components/design/text/NormalText";
import NormalText from "@/components/design/text/NormalText";
import Button from "@/components/design/Button/Button";
import CategoryDropdown from "@/components/design/dropdown/CategoryDropdown";
import ProgressBar from "@design/progressBar/ProgressBar";
import LinkButton from "@design/Button/LinkButton";

import { useRouter } from "expo-router";
import GetLoggedInUser from "@/components/functional/GetLoggedInUser";

const profile = () => {
  const router = useRouter();

  console.log(profile);
  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        { backgroundColor: variables.colors.background },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.topNav}>
          <Pressable onPress={() => router.push("/(tabs)/settings")}>
            <SettingsIcon width={40} height={30} />
          </Pressable>
          <Title text="Profile" />
          <Pressable
            onPress={() => router.push("/(tabs)/(profile)/updateProfile")}
          >
            <EditIcon width={40} height={30} />
          </Pressable>
        </View>

        <View style={{ alignItems: "center" }}>
          <GetLoggedInUser />
          <View style={styles.rank}>
            <NormalText text="Rank" color={variables.colors.buttonText} />
          </View>
        </View>

        <View style={styles.achievementsContainer}>
          <View style={styles.achievement}>
            <Title text="10" />
            <NormalText text="Quizes playeddsdcwd" align="center" />
          </View>
          <View style={styles.achievement}>
            <Title text="32332" />
            <NormalText text="Quizes played" align="center" />
          </View>
          <View style={styles.achievement}>
            <Title text="34849" />
            <NormalText text="Quizes played" align="center" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={variables.colors.secondary}
              onPress={() => console.log("Button pressed")}
            >
              Friends
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              color={variables.colors.secondary}
              onPress={() => console.log("Button pressed")}
            >
              Badges
            </Button>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Title text="Progress" />

            <CategoryDropdown />
          </View>
        </View>

        <View style={styles.quizContainer}>
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <ImageCard />
              <View style={styles.innerCard}>
                <Title text="PGM-6" />
                <Subtitle text="Quiz" />
                <ProgressBar progress={100} />
                <LinkButton
                  onPress={() => console.log("Button pressed")}
                  color={variables.colors.primary}
                  complete
                >
                  Completed
                </LinkButton>
              </View>
            </View>
            <View style={styles.card}>
              <ImageCard />
              <View style={styles.innerCard}>
                <Title text="PGM-6" />
                <Subtitle text="Quiz" />
                <ProgressBar progress={100} />
                <LinkButton
                  onPress={() => console.log("Button pressed")}
                  color={variables.colors.primary}
                  complete
                >
                  Completed
                </LinkButton>
              </View>
            </View>
            <View style={styles.card}>
              <ImageCard />
              <View style={styles.innerCard}>
                <Title text="PGM-6" />
                <Subtitle text="Quiz" />
                <ProgressBar progress={76} />
                <LinkButton
                  onPress={() => console.log("Button pressed")}
                  color={variables.colors.primary}
                >
                  Continue
                </LinkButton>
              </View>
            </View>
            <View style={styles.card}>
              <ImageCard />
              <View style={styles.innerCard}>
                <Title text="PGM-6" />
                <Subtitle text="Quiz" />
                <ProgressBar progress={76} />
                <LinkButton
                  onPress={() => console.log("Button pressed")}
                  color={variables.colors.primary}
                >
                  Continue
                </LinkButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: variables.padding.xxxLarge,
    paddingRight: variables.padding.xxxLarge,
    paddingTop: variables.padding.xxxLarge,
  },

  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: variables.margin.large,
  },

  rank: {
    backgroundColor: variables.colors.primary,
    paddingTop: variables.padding.medium,
    paddingBottom: variables.padding.medium,
    paddingLeft: variables.padding.large,
    paddingRight: variables.padding.large,
    borderRadius: variables.borderRadius.large,
    marginTop: variables.margin.small,
  },

  achievementsContainer: {
    marginTop: variables.margin.large,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  achievement: {
    alignItems: "center",
    maxWidth: "30%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: variables.margin.large,
  },
  button: {
    width: "45%",
  },

  progressContainer: {
    marginTop: variables.margin.large,
  },

  quizContainer: {
    marginTop: variables.margin.large,
    borderRadius: variables.borderRadius.medium,
    overflow: "hidden",
    height: 300,
  },

  card: {
    flexDirection: "row",
    gap: variables.margin.large,
    marginBottom: variables.margin.large,
  },
  innerCard: {
    flex: 1,
  },
});
