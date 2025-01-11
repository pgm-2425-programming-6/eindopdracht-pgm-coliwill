import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

const ImageCard = () => {
  return (
    <Image
      source={require("@assets/images/quiz-img.png")}
      style={{
        width: 120,
        height: 100,
        borderRadius: variables.borderRadius.medium,
      }}
    ></Image>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
