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
import { supabase } from "@/lib/supabase";

import { variables } from "@/style/theme";

import { Button } from "react-native";
import { useRouter } from "expo-router";
import { Session } from "@supabase/supabase-js";
import LinkButton from "@design/Button/LinkButton";
import HorizontalScrollView from "@design/ScrollContainer/HorizontalScrollContainer";
import SmallAvatar from "@design/avatar/SmallAvatar";
import QuizCard from "@design/card/QuizCard";
import { useQuery } from "@tanstack/react-query";

import Title from "@design/text/Title";
import Subtitle from "@design/text/Subtitle";
import { getQuizzes } from "@/core/modules/quizzes/api";

const index = () => {
  const router = useRouter();

  const {
    data: quizzes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getQuizzes,
  });

  console.log(quizzes);

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
          <Title text="Welcome user" />
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
          <HorizontalScrollView>
            <LinkButton color={variables.colors.primary} onPress={() => {}}>
              Subject title
            </LinkButton>
          </HorizontalScrollView>
        </View>
        <Title text="Friendlist" />
        <View style={styles.horizontalScroll}>
          <HorizontalScrollView>
            <SmallAvatar text="Bordercolin" />
          </HorizontalScrollView>
        </View>
        <Title text="Discovery" />
        <View style={styles.horizontalScroll}>
          <HorizontalScrollView>
            <QuizCard />
          </HorizontalScrollView>
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
