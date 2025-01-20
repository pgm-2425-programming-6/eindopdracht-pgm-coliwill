import React from "react";
import { View, Text } from "react-native";
import { SvgUri } from "react-native-svg";

type Props = {
  text?: string;
  avatarUrl?: string;
};

const SmallAvatar = ({ text, avatarUrl }: Props) => {
  return (
    <View style={{ alignItems: "center" }}>
      {avatarUrl ? (
        <SvgUri
          width={50}
          height={50}
          uri={avatarUrl}
        />
      ) : (
        <Text>No Avatar</Text>
      )}
      {text ? <Text>{text}</Text> : null}
    </View>
  );
};

export default SmallAvatar;
