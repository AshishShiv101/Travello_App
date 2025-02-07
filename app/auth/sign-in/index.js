import Colors from '@/constants/Colors'
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const SignIn = () => {
  const router = useRouter()

  return (
    <View style={styles.wrapper}>
      {/* Background Image */}
      <Image
        source={require('./../../../assets/images/login.jpg')}
        style={styles.image}
      />

      {/* Overlay Text (Travello & Subtitle) */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Travello</Text>
        <Text style={styles.subtitle}>See the world as never before.</Text>
      </View>

      {/* Login Form Container */}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={Colors.textSecondary}
        />

        {/* Email/Phone Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter email / phone number"
          placeholderTextColor={Colors.textSecondary}
          keyboardType="email-address"
        />

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Sign in with Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={20} color="#fff" />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Sign Up Text */}
        <Text style={styles.signUpPrompt}>Don't have an account?</Text>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('auth/sign-up')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: 400,
  },
  overlay: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'lato-bold',
    textAlign: 'center',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginTop: 5,
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    marginTop: -20,
    paddingTop: 20,
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signInButton: {
    width: '100%',
    backgroundColor: Colors.textPrimary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.textPrimary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: 250,
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  signUpPrompt: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 10,
  },
  signUpButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.textPrimary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default SignIn
