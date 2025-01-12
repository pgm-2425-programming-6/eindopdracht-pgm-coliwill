import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

type Props = {
  text?: string;
};

const SmallAvatar = ({ text }: Props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          resizeMode: "contain",
        }}
        source={require("@assets/images/smallAvatar.png")}
      />
      {text ? <Text style={styles.text}>{text}</Text> : null}
    </View>
  );
};

export default SmallAvatar;

const styles = StyleSheet.create({
  text: {
    fontFamily: variables.fonts.regular,
    color: variables.colors.text,
    fontSize: variables.fontSizes.xxSmall,
    maxWidth: 50,
    textAlign: "center",
  },
});
