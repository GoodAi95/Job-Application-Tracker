
import { ThemedView } from '@/components/themed-view';
import { Button } from 'expo-router/react-navigation';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  return (
    <ThemedView>
      <Text>
        YOOOOOOOOOOOOOOOOOO!
      </Text>
      <Button onPress={() => console.log('Log in pressed!')} href="/explore">
        Log in
      </Button>

      <Button onPress={() => console.log('Sign up pressed!')} href="/explore">
        Sign up
      </Button>
    </ThemedView>
  );
}