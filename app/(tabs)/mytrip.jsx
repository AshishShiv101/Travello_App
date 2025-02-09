import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Colors.ts'
import AntDesign from '@expo/vector-icons/AntDesign';
import StartNewTripCard from '../../components/Mytrips/StartNewTripCard.jsx';
const MyTrip = () => {

  const [userTrips,setUserTrips] = useState([]);

  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor:"white",
      height:"100%",
    }}>
    <View style={{
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    }}>  
      <Text style={{
        fontFamily:"lato-bold",
        fontSize:35
      }} 
      >MyTrip</Text>
      <AntDesign name="pluscircle" size={40} color="black" />
    </View>
    {userTrips?.length==0?
      <StartNewTripCard/>
      :null
    }
    </View>
  )
}

export default MyTrip