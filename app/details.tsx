import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter, SplashScreen, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Button, Text, YStack } from 'tamagui';

import { Container, Main, Subtitle, Title } from '../tamagui.config';

export default function Details() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  const BackButton = () => (
    <Button
      unstyled
      flexDirection="row"
      backgroundColor="transparent"
      paddingLeft={0}
      pressStyle={{ opacity: 0.5 }}
      onPress={router.back}
      icon={<Feather name="chevron-left" size={16} color="#007AFF" />}>
      <Text color="#007AFF">Back</Text>
    </Button>
  );

  return (
    <Container>
      <Stack.Screen options={{ title: 'Details', headerLeft: () => <BackButton /> }} />
      <Main>
        <YStack>
          <Title>Details</Title>
          <Subtitle>Showing details for user {name}.</Subtitle>
        </YStack>
      </Main>
    </Container>
  );
}
