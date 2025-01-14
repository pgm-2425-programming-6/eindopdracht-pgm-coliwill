import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { variables } from "@/style/theme";

interface Props {
  imageUrl: string;
}

const ImageCard = ({imageUrl}: Props) => {
  return (
    <View>
      <Image
        source={{ uri: "https://lmccjkaiuubtaixacunu.supabase.co/storage/v1/object/public/quizzes/it-exp.png" }}
        style={{
          width: 120,
          height: 100,
          borderRadius: variables.borderRadius.medium,
        }}
      />
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
