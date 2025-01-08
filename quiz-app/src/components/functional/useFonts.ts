import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    "Fredoka-Bold": require("@assets/fonts/Fredoka-Bold.ttf"),
    "Fredoka-Regular": require("@assets/fonts/Fredoka-Regular.ttf"),
    "Fredoka-Medium": require("@assets/fonts/Fredoka-Medium.ttf"),
    "Fredoka-Light": require("@assets/fonts/Fredoka-Light.ttf"),
    "Fredoka-SemiBold": require("@assets/fonts/Fredoka-SemiBold.ttf"),
  });

  return fontsLoaded;
};

export default useCustomFonts;
