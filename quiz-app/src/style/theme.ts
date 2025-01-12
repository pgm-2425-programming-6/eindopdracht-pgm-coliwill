import { DefaultTheme } from "@react-navigation/native";

const Colors = {
  green: "#305450",
  darkOrange: "#EAC39F",
  orange: "#C1512F",
  gray:"#B5B4AE",
  background: "#F3EFD4",
  white: "#fff",
  black: "#000",
}

const padding = {
  small: 5,
  medium: 10,
  large: 15,
  xLarge: 20,
  xxLarge: 25,
  xxxLarge: 30,
}

const margin = {
  small: 5,
  medium: 10,
  large: 15,
  xLarge: 20,
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

const fontSizes = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xLarge: 20,
  xxLarge: 24,
  xxxLarge: 32,
}

export const variables = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green,
    secondary: Colors.orange,
    background: Colors.background,
    cardBackground: Colors.darkOrange,
    text: Colors.black,
    cardText: Colors.white,
    buttonText: Colors.white,
    border: Colors.white,
    inputBackground: Colors.white,
    navIconActive: Colors.orange,
    navIconInactive: Colors.gray,
  },
  borderRadius,
  fonts,
  padding,
  fontSizes,
  margin,
};