import Colors from '@/constants/Colors'
import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  // Check if user is already signed in
  useEffect(() => {
    const checkUser = async () => {
      const savedEmail = await AsyncStorage.getItem('userEmail')
      const savedPassword = await AsyncStorage.getItem('userPassword')

      if (savedEmail && savedPassword) {
        try {
          await signInWithEmailAndPassword(auth, savedEmail, savedPassword)
          router.replace('/mytrip')
        } catch (error) {
          console.log('Auto sign-in failed:', error.message)
        }
      }
    }
    checkUser()
  }, [])

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password')
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)

      if (rememberMe) {
        await AsyncStorage.setItem('userEmail', email)
        await AsyncStorage.setItem('userPassword', password)
      } else {
        await AsyncStorage.removeItem('userEmail')
        await AsyncStorage.removeItem('userPassword')
      }

      router.replace('/mytrip')
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Image source={require('./../../../assets/images/login.jpg')} style={styles.image} />

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

        {/* Remember Me Checkbox */}
        <TouchableOpacity style={styles.rememberMeContainer} onPress={() => setRememberMe(!rememberMe)}>
          <FontAwesome name={rememberMe ? 'check-square' : 'square-o'} size={20} color={Colors.textPrimary} />
          <Text style={styles.rememberMeText}>Keep me signed in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={20} color="#fff" />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <Text style={styles.signUpPrompt}>Don't have an account?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('auth/sign-up')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.background },
  image: { width: '100%', height: 400 },
  overlay: { position: 'absolute', top: 150, left: 0, right: 0, alignItems: 'center' },
  title: { fontSize: 30, fontFamily: 'lato-bold', textAlign: 'center', color: '#fff' },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#fff', marginTop: 5 },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    marginTop: -20,
    paddingTop: 20,
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  signInButton: {
    width: '100%',
    backgroundColor: Colors.textPrimary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
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
  googleButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, textAlign: 'center' },
  signUpPrompt: { fontSize: 14, color: Colors.textSecondary, marginBottom: 10 },
  signUpButton: { width: '100%', borderWidth: 1, borderColor: Colors.textPrimary, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  signUpButtonText: { color: Colors.textPrimary, fontSize: 16, fontWeight: 'bold' },
})

export default SignIn
