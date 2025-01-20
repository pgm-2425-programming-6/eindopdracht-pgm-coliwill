import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { variables } from "@/style/theme";
import { useRouter } from "expo-router";
import BackIcon from "@assets/images/icons/chevronLeft.svg";
import Title from "@/components/design/text/Title";
import AchievementsList from "@/components/functional/AchievementsList";

const Achievements = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: variables.colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <FlatList
        ListHeaderComponent={
          <View style={styles.topNav}>
            <Pressable
              onPress={() => router.navigate("/")}
              style={styles.backIconContainer}
            >
              <BackIcon width={40} height={30} />
            </Pressable>
            <Title text="Achievements" />
          </View>
        }
        data={[]} // Pass an empty data array since content is managed by `AchievementsList`
        renderItem={null} // Prevent FlatList from rendering unnecessary items
        ListFooterComponent={<AchievementsList />} // Render the achievements list as a footer
        contentContainerStyle={styles.achievementsContainer}
      />
    </KeyboardAvoidingView>
  );
};

export default Achievements;

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
  achievementsContainer: {
    flexGrow: 1,
    paddingBottom: variables.padding.large,
  },
});
