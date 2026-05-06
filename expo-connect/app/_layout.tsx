import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts as useInterFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts as useWorkSansFonts, WorkSans_600SemiBold, WorkSans_700Bold, WorkSans_800ExtraBold } from '@expo-google-fonts/work-sans';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthProvider } from '@/context/AuthContext';
import { CampusColors } from '@/constants/theme';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded] = useInterFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const [workSansLoaded] = useWorkSansFonts({
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
  });

  const loaded = interLoaded && workSansLoaded;

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const navTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <ThemeProvider
          value={{
            ...navTheme,
            colors: {
              ...navTheme.colors,
              background: CampusColors.surface,
              card: CampusColors.surfaceContainerLowest,
              primary: CampusColors.primary,
              text: CampusColors.onSurface,
              border: CampusColors.outlineVariant,
            },
          }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="parent" />
            <Stack.Screen name="faculty" />
            <Stack.Screen name="student" />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Info', headerShown: true }} />
          </Stack>
          <StatusBar style="dark" />
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
