import React, { ReactElement, useCallback, useEffect, useState } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeScreen from "./Screens/HomeScreem/HomeScreen";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App(): ReactElement {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "SF-Pro-Display-Regular": require("./assets/fonts/SF-Pro-Display-Regular.ttf"),
    "SF-Pro-Display-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.ttf"),
    "SF-Pro-Display-Bold": require("./assets/fonts/SF-Pro-Display-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && isReady) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, isReady]);

  useEffect(() => {
    async function prepare(): Promise<void> {
      try {
        await SplashScreen.preventAutoHideAsync();
        void onLayoutRootView();
      }   finally {
        setIsReady(true);
      }
    }

    void prepare();
  }, [onLayoutRootView]);
  if (!isReady || !fontsLoaded) {
    return <></>;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
