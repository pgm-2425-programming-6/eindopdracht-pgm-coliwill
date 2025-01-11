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
import LinkButton from "@/components/design/Button/LinkButton";
import HorizontalScrollView from "@/components/design/ScrollContainer/HorizontalScrollContainer";
import SmallAvatar from "@/components/design/avatar/SmallAvatar";
import QuizCard from "@/components/design/card/QuizCard";

const index = () => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: variables.colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: variables.colors.background }}
      >
        <Text style={styles.title}>Good morning user!</Text>
        <Text style={styles.subTitle}>Let's Quiz!</Text>
        <View style={styles.card}>
          <View style={{ width: "45%" }}>
            <Text style={styles.cardText}>Discover your available Quizes</Text>
            <LinkButton onPress={() => {}}>Check Out</LinkButton>
          </View>

          <Image
            style={{
              width: 160,
              resizeMode: "contain",
            }}
            source={require("@assets/images/homeImage.png")}
          />
        </View>
        <Text style={styles.title}>Category</Text>
        <View style={styles.horizontalScroll}>
          <HorizontalScrollView>
            <LinkButton color={variables.colors.primary} onPress={() => {}}>
              Category
            </LinkButton>
          </HorizontalScrollView>
        </View>
        <Text style={styles.title}>Friendlist</Text>
        <View style={styles.horizontalScroll}>
          <HorizontalScrollView>
            <SmallAvatar />
          </HorizontalScrollView>
        </View>
        <Text style={styles.title}>Discovery</Text>
        <View style={styles.horizontalScroll}>
          <HorizontalScrollView>
            <QuizCard />
          </HorizontalScrollView>
        </View>
        <Button
          title="Logout"
          onPress={async () => {
            await supabase.auth.signOut();
          }}
        />
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

  title: {
    fontFamily: variables.fonts.bold,
    color: variables.colors.text,
    fontSize: variables.fontSizes.xxLarge,
  },

  subTitle: {
    fontFamily: variables.fonts.light,
    color: variables.colors.text,
    fontSize: variables.fontSizes.small,
    marginBottom: variables.margin.large,
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
