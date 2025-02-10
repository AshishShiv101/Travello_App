import { useFonts } from "expo-font";

import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { auth } from "../configs/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { View, ActivityIndicator } from "react-native";
import {CreateTripContext} from "../context/CreateTripContext";
import Colors from "@/constants/Colors";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [tripData, setTripData] = useState([]); // ✅ Moved above the conditional return
  const router = useRouter();

  useFonts({
    "lato-regular": require("../assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("../assets/fonts/Lato-Bold.ttf"),
    "lato-light": require("../assets/fonts/Lato-Light.ttf"),
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (!user) router.replace("/auth/sign-in"); // Redirect if not logged in
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background }}>
        <ActivityIndicator size="large" color={Colors.textPrimary} />
      </View>
    );
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
