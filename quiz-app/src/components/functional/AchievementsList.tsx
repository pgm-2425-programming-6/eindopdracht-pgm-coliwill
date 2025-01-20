import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Achievements } from "@/core/modules/achievements/types";
import { getAchievements } from "@/core/modules/achievements/api";
import Achievement from "@design/achievement/Achievement";
import { getLoggedInUserAchievements } from "@/core/modules/achievements_user/api";
import { supabase } from "@/lib/supabase";

const AchievementsList = () => {
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch the logged-in user's ID
  useEffect(() => {
    const fetchUserId = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
      }
    };

    fetchUserId();
  }, []);

  // Fetch all achievements
  const {
    data: achievements,
    isLoading: achievementsLoading,
    error: achievementsError,
  } = useQuery({
    queryKey: ["achievements"],
    queryFn: getAchievements,
  });

  // Fetch user achievements
  const {
    data: loggedInUserAchievements,
    isLoading: userAchievementsLoading,
    error: userAchievementsError,
  } = useQuery({
    queryKey: ["user_achievements", userId],
    queryFn: () => getLoggedInUserAchievements(userId!),
    enabled: !!userId, // Only run if userId is available
  });

  if (achievementsLoading || userAchievementsLoading) {
    return <Text>Loading...</Text>;
  }

  if (achievementsError || userAchievementsError) {
    return <Text>Error loading achievements!</Text>;
  }

  // Map achievements and dynamically calculate if each one is unlocked
  const achievementsList = achievements?.map((achievement) => ({
    ...achievement,
    overlay: !loggedInUserAchievements?.some(
      (userAchievement) => userAchievement.achievement_id === achievement.id
    ), // Add 'overlay' property dynamically
  })) || [];

  return (
    <FlatList
      data={achievementsList}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Achievement
          imageUrl={item.icon ?? ""}
          overlay={item.overlay} 
        />
      )}
      contentContainerStyle={styles.achievementsListContainer}
    />
  );
};

export default AchievementsList;

const styles = StyleSheet.create({
  achievementsListContainer: {
    
    gap: 5,
  },
});
