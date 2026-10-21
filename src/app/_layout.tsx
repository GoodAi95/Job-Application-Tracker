import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from 'expo-router';
import { useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PortalHost } from '@rn-primitives/portal';
import '../../global.css';

function RootLayoutNav() {
  return (
    <SafeAreaView>
      <View>
       <Slot />
      </View>
    </SafeAreaView>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootLayoutNav />
      <PortalHost />
    </ThemeProvider>
  );
}
