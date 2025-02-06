import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
   useFonts({
      'lato-regular':require('../assets/fonts/Lato-Regular.ttf'),
      'lato-bold': require('../assets/fonts/Lato-Bold.ttf'),
      'lato-light': require('../assets/fonts/Lato-Light.ttf')
    })
  return (
  
  <Stack screenOptions={{
    headerShown:false,
  }}>
    <Stack.Screen name ="index"/>
  </Stack>
  );
}
