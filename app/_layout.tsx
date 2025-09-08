import useAuthStore from "@/store/auth.store";
import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import './global.css';

Sentry.init({
  dsn: 'https://e2ee8852dda8e73298198a59bff98c39@o4509982574379008.ingest.de.sentry.io/4509982586175568',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function RootLayout() {

  const { isLoading, fetchAuthenticatedUser } = useAuthStore();

  const [fontsLoaded, error] = useFonts({
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded ,error]);

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  if (isLoading || !fontsLoaded) return null;
  return (
    <>
      <Stack>
        <Stack.Screen
         name="(tabs)" 
          options={{ 
            headerShown: false 
          }}/>
        <Stack.Screen
        name='(auth)'
        options={{headerShown: false}}/>
      </Stack>
      <StatusBar style="auto" />
    </>
  );
});