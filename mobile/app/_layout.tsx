import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>

    <PaperProvider>
      {/* non aktifkan header */}
      <Stack screenOptions={{
        headerShown: false,
      }}>
        
      </Stack>
      <StatusBar barStyle={"light-content"} backgroundColor={"#a51c31"} />
    </PaperProvider>
  );
}
