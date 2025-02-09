import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
const StartNewTripCard = () => {
    const router = useRouter()
  return (
    <View
    style={{
        padding:20,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        gap:19,
    }}
    >
    <FontAwesome6 name="map-location" size={30} color="black" />
    <Text style={{
        fontSize:25,
        fontFamily:'lato-bold'
    }}>No trips planned yet</Text>
          <Text style={{
              fontSize: 20,
              fontFamily: 'lato-light',
              textAlign: 'center'
          }}>Get Started and plan a trip to make memories for life</Text>

          <TouchableOpacity style={{
            padding:10,
            backgroundColor: "black",
            borderRadius:15,
            paddingHorizontal:30
          }}
          onPress={()=> router.push('/create-trip/search-place') }
          > 
          <Text style={{
            color: "white",
            fontSize: 17,
            fontFamily: 'lato-regular'
          }}>Start a new trip</Text>
          </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard