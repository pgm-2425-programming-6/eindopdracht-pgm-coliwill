import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";

import { variables } from "@/style/theme";

import { useRouter } from "expo-router";

import LinkButton from "@design/Button/LinkButton";

import Title from "@design/text/Title";
import Subtitle from "@design/text/Subtitle";

import QuizScrollView from "@/components/functional/QuizScrollView";
import CategoriesScrollView from "@/components/functional/CategoriesScrollView";
import FriendListScrollView from "@/components/functional/FriendListScrollView";

import useProfileFetcher from "@/hooks/useProfileFetcher";

const index = () => {

  const { profile } = useProfileFetcher();

  
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        { backgroundColor: variables.colors.background },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ marginBottom: variables.margin.large }}>
          <Title text={`welcome ${profile?.username}`} />
          <Subtitle text="Let's Quiz" />
        </View>

        <View style={styles.card}>
          <View style={{ width: "45%" }}>
            <Text style={styles.cardText}>Discover your available Quizes</Text>
            <LinkButton onPress={() => {}}>Check out</LinkButton>
          </View>

          <Image
            style={{
              width: 160,
              resizeMode: "contain",
            }}
            source={require("@assets/images/homeImage.png")}
          />
        </View>
        <Title text="Subjects" />
        <View style={styles.horizontalScroll}>
          <CategoriesScrollView />
        </View>
        <Title text="Friendlist" />
        <View style={styles.horizontalScroll}>
          <FriendListScrollView />
        </View>
        <Title text="Discovery" />
        <View style={styles.horizontalScroll}>
          <QuizScrollView />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: variables.padding.xxxLarge,
    paddingRight: variables.padding.xxxLarge,
    paddingTop: variables.padding.xxxLarge,
  },

  card: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: variables.colors.primary,
    padding: variables.padding.medium,
    borderRadius: variables.borderRadius.large,
    marginBottom: variables.margin.large,
  },

  cardText: {
    fontFamily: variables.fonts.regular,
    color: variables.colors.cardText,
    fontSize: variables.fontSizes.xLarge,
    marginBottom: variables.margin.large,
  },

  horizontalScroll: {
    marginTop: variables.margin.medium,
    marginBottom: variables.margin.large,
  },
});
