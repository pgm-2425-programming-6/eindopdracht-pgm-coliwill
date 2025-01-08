import { DefaultTheme } from "@react-navigation/native";

const Colors = {
  green: "#305450",
  orange: "#C1512F",
  background: "F3EFD4",
  white: "#fff",
  black: "#000",
}

const borderRadius = {
  small: 5,
  medium: 10,
  large: 15,
}

const fonts = {
  regular: "Fredoka-Regular",
  light: "Fredoka-Light",
  medium: "Fredoka-Medium",
  bold: "Fredoka-Bold",
  semiBold: "Fredoka-SemiBold",
}

export const variables = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green,
    background: Colors.background,
    text: Colors.black,
    buttonText: Colors.white,
    border: Colors.white,
  },
  borderRadius,
  fonts
};