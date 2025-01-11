import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import CrownIcon from "@assets/images/crown.svg";
import HomeIcon from "@assets/images/home.svg";
import LightningIcon from "@assets/images/lightning.svg";
import { variables } from "@/style/theme";
import SmallAvatar from "../avatar/SmallAvatar";

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => console.log("Home pressed")}>
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

      <Pressable onPress={() => console.log("Challenges pressed")}>
        <LightningIcon
          width={40}
          height={30}
          color={variables.colors.navIconInactive}
        />
      </Pressable>

      <Pressable onPress={() => console.log("Profile pressed")}>
        <SmallAvatar />
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
