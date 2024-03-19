import React from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    inter: require("../../assets/fonts/inter.ttf"),
    "inter-bold": require("../../assets/fonts/inter-bold.ttf"),
    "inter-medium": require("../../assets/fonts/inter-medium.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Slot />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
