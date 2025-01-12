import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { variables } from "@/style/theme";

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.background}>
          <View style={[styles.fill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{`${progress}%`}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: variables.margin.small,

  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  background: {
    flex: 1,
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
  },
  fill: {
    height: "100%",
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.medium,
  },
  progressText: {
    fontFamily: variables.fonts.regular,
  },
});
