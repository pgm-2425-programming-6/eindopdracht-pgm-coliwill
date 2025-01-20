import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import CrownIcon from "@assets/images/icons/crown.svg";
import HomeIcon from "@assets/images/icons/home.svg";
import LightningIcon from "@assets/images/icons/lightning.svg";
import { variables } from "@/style/theme";
import SmallAvatar from "../avatar/SmallAvatar";
import { useRouter } from "expo-router";

import { SvgUri } from "react-native-svg";

import useProfileFetcher from "@/hooks/useProfileFetcher";
import { getAvatarImageUrl } from "@/core/modules/storage/utils";

const NavBar = () => {
  const { profile, loading, error } = useProfileFetcher();

  const router = useRouter();
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => router.navigate("/")}>
        <HomeIcon
          width={40}
          height={30}
          color={variables.colors.navIconActive}
        />
      </Pressable>

      <Pressable onPress={() => console.log("Leaderboard pressed")}>
        <CrownIcon
          width={40}
          height={30}
          color={variables.colors.navIconInactive}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/achievements")}>
        <LightningIcon
          width={40}
          height={30}
          color={variables.colors.navIconInactive}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/profile")}>
        <SvgUri
          width="50"
          height="50"
          uri={profile?.avatar ? getAvatarImageUrl(profile.avatar) : ""}
        />
      </Pressable>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    borderTopLeftRadius: variables.borderRadius.medium,
    borderTopRightRadius: variables.borderRadius.medium,
  },
});
