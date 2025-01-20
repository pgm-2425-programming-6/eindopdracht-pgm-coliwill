import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import { getAchievementImageUrl } from "@/core/modules/storage/utils";

type Props = {
  imageUrl: string; 
  overlay?: boolean; // Optional overlay prop
};

const Achievement = ({ imageUrl, overlay = false }: Props) => {
  return (
    <Pressable onPress={() => console.log("Achievement pressed")}>
      <View style={styles.svgWrapper}>
        <SvgUri
          uri={getAchievementImageUrl(imageUrl)}
          width={80}
          height={80}
        />
        {overlay && ( // Conditionally render the overlay
          <View style={styles.overlay} />
        )}
      </View>
    </Pressable>
  );
};

export default Achievement;

const styles = StyleSheet.create({
  svgWrapper: {
    position: "relative", // Wrapper with relative positioning
    width: 80,
    height: 80,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
});
