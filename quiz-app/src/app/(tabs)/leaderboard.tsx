import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { variables } from "@/style/theme";
import Title from "@design/text/Title";
import BackIcon from "@assets/images/icons/chevronLeft.svg";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { QuizAttempts } from "@/core/modules/quiz_attempt/types";
import { getAllQuizAttempts } from "@/core/modules/quiz_attempt/api";
import { getAllProfiles } from "@/core/modules/profile/api";
import { Profile } from "@/core/modules/profile/types";

const Leaderboard = () => {
  const router = useRouter();

  const { data: attempts = [], isLoading: attemptsLoading, error: attemptsError } = useQuery({
    queryKey: ["quiz_attempts"],
    queryFn: getAllQuizAttempts,
  });

  const { data: profiles = [], isLoading: profilesLoading, error: profilesError } = useQuery({
    queryKey: ["profiles"],
    queryFn: getAllProfiles,
  });

  if (attemptsLoading || profilesLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (attemptsError || profilesError) {
    return (
      <View style={styles.container}>
        <Text>Error loading leaderboard data!</Text>
      </View>
    );
  }

  const leaderboardData = attempts?.map((attempt) => {
    const userProfile = profiles?.find((profile: Profile) => profile.user_id === attempt.user_id);
    return {
      id: attempt.id,
      score: attempt.score,
      username: userProfile?.username || "Unknown User", // Map user_id to get the username
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Pressable onPress={() => router.navigate("/")} style={styles.backIconContainer}>
          <BackIcon width={40} height={30} />
        </Pressable>
        <Title text="Leaderboard" />
      </View>

      {(leaderboardData ?? []).length > 0 ? (
        (leaderboardData ?? []).map((entry) => (
          <View key={entry.id} style={styles.entryContainer}>
            <Text>Username: {entry.username}</Text>
            <Text>Score: {entry.score}</Text>
          </View>
        ))
      ) : (
        <Text>No leaderboard data available.</Text>
      )}
    </View>
  );
};

export default Leaderboard;

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
  entryContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: variables.colors.primary,
    borderRadius: variables.borderRadius.medium,
  },
});
