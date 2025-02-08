import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { auth } from "../../../configs/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Colors from "@/constants/Colors";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter an email and password");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created!");
      router.replace("/mytrip");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Image source={require("./../../../assets/images/login.jpg")} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.title}>Travello</Text>
        <Text style={styles.subtitle}>See the world as never before.</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor={Colors.textSecondary}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={20} color="#fff" />
          <Text style={styles.googleButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <Text style={styles.signUpPrompt}>Already have an account?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={() => router.replace("auth/sign-in")}>
          <Text style={styles.signUpButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.background },
  image: { width: "100%", height: 400 },
  overlay: { position: "absolute", top: 150, left: 0, right: 0, alignItems: "center" },
  title: { fontSize: 30, fontFamily: "lato-bold", textAlign: "center", color: "#fff" },
  subtitle: { fontSize: 16, textAlign: "center", color: "#fff", marginTop: 5 },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    marginTop: -20,
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  signInButton: {
    width: "100%",
    backgroundColor: Colors.textPrimary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.textPrimary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: 250,
    marginBottom: 20,
  },
  googleButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold", marginLeft: 10, textAlign: "center" },
  signUpButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.textPrimary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  signUpButtonText: { color: Colors.textPrimary, fontSize: 16, fontWeight: "bold" },
});

export default SignUp;
