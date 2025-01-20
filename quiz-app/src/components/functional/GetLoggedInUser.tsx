import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import useProfileFetcher from "@hooks/useProfileFetcher";
import { variables } from "@/style/theme";
import avatars from "@functional/AllAvatars";
import { getAvatarImageUrl } from "@/core/modules/storage/utils";
import { SvgUri } from "react-native-svg";

import Title from "@design/text/Title";

const GetLoggedInUser = () => {
  const { profile, loading, error } = useProfileFetcher();

  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={variables.colors.primary} />
        <Text>Loading Profile...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No profile data available.</Text>
      </View>
    );
  }


 
  return (
    <>
      <SvgUri
        width="200"
        height="200"
        uri={profile.avatar ? getAvatarImageUrl(profile.avatar) : ""}
      />
      <Title text={profile.username} />
    </>
  );
};

export default GetLoggedInUser;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: variables.colors.secondary,
    fontSize: 16,
    textAlign: "center",
  },
});
