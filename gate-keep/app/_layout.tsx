import { useFonts, Geologica_400Regular } from '@expo-google-fonts/geologica'
import { Stack } from "expo-router";

export default function RootLayout() {
let [fontsLoaded, fontError] = useFonts({
  Geologica_400Regular
});

if (!fontsLoaded && fontError) {
  return (null);
}
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
