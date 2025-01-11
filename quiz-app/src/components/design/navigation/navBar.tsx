import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import CrownIcon from "@assets/images/crown.svg"; 

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => console.log("Home pressed")}>
        <CrownIcon width={30} height={30} /> 
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
    backgroundColor: "blue", // Replace with your theme color
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#aaa",
  },
});