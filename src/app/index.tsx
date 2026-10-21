import { ThemedView } from '@/components/themed-view';
import { Button } from 'expo-router/react-navigation';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView>
      <Text>
        YOOOOOOOOOOOOOOOOOO!
      </Text>
      <Button onPress={() => router.push('/Log-In-Page')}>
        Log in
      </Button>

      <Button onPress={() => router.push('/Sign-Up-Page')}>
        Sign up
      </Button>
    </ThemedView>
  );
}