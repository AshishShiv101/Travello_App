import { View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import 'react-native-get-random-values' // Fix for crypto.getRandomValues() error

const SearchPlace = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search Place',
    })
  }, [])

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: '#fff',
      height: "100%",
    }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true} // Ensure place details are retrieved
        onPress={(data, details) => {
          console.log("Selected Place:", data)
          console.log("Place Details:", details)
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY || 'YOUR_API_KEY_HERE',
          language: 'en',
        }}
      />
    </View>
  )
}

export default SearchPlace
