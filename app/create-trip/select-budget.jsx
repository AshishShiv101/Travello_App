import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SelectBudget() {
    const navigation = useNavigation()

    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerBackTitle: 'Back',            h
        })
    },[])
  return (
    <View style={{
        paddingTop: 75,
        padding: 25,
    }}>
      <Text style={{
        fontFamily: "lato-bold",
        fontSize:35,
        marginTop: 20,
      }}>Budget</Text>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}