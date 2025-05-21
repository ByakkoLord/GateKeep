import { ButtonsContextProvider } from '@/contexts/buttonsContext';
import { useFonts, Geologica_400Regular, Geologica_500Medium, Geologica_700Bold, Geologica_600SemiBold } from '@expo-google-fonts/geologica'
import { Stack } from "expo-router";

export default function RootLayout() {
let [fontsLoaded, fontError] = useFonts({
  Geologica_400Regular,
  Geologica_500Medium,
  Geologica_600SemiBold,
  Geologica_700Bold
});

if (!fontsLoaded && fontError) {
  return (null);
}
  return (
    <ButtonsContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

    </ButtonsContextProvider>
  );
}
