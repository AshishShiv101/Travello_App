import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { SelectBudgetOptions } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
export default function SelectBudget() {
    const navigation = useNavigation()
    const [onSelect,setonSelect] = useState()
    const { tripData, setTripData } = useContext(CreateTripContext); // Ensure context exists
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerBackTitle: 'Back',            h
        })
    },[])

    useEffect(()=>{

      selectedOption&&setTripData({
        ...tripData,
        budget: onSelect?.title
      })
    },[onSelect])
  return (
    <View style={{
        paddingTop: 75,
        padding: 25,
        backgroundColor: '#000',
        height:100%OptionCard
    }}>
      <Text style={{
        fontFamily: "lato-bold",
        fontSize:35,
        marginTop: 20,
      }}>Budget</Text>
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
          fontFamily:"lato-bold",
          fontSize:20,
        }}>Choose spending habits for your trip</Text>


        <FlatList
          data={SelectBudgetOptions}
          renderItem={({item,index})=>(
            <TouchableOpacity style={{marginVertical:10}}
            onPress={()=>setonSelect(item)}
            >
              <OptionCard option={item} onSelect={onSelect}/>
            </TouchableOpacity>
          )}
        />
      </View>
      <Link href="/create-trip/select-date" asChild>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
              </TouchableOpacity>
            </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  continueButton: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 15,
    alignSelf: 'center', // Centers button
    width: '80%', // Makes the button wider
    marginBottom: 30, // Ensures space from the bottom
  },
  continueText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
