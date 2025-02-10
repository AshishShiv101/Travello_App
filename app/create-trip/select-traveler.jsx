import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const SelectTraveler = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle:''
    })
  },[])
  return (
    <View style={
      {
        padding:25,
        paddingTop:75,
        backgroundColor:'#fff',
        height:'100%',
      }
    }>
      <Text style={{
        fontSize:35,
        fontWeight:'lato-bold',
      }}>Who's Traveling</Text>
      <View>
        <Text style={{
          fontFamily:'lato-bold',
          fontSize:20,
          marginTop:20,
        }}>
          Choose your traveles
        </Text>
      </View>
    </View>
  )
}

export default SelectTraveler

const styles = StyleSheet.create({})