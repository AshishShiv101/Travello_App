import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { SelectTravele } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from './../../constants/Colors';
import { CreateTripContext } from './../../context/CreateTripContext';

const SelectTraveler = () => {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext) || {}; // Ensure context exists

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: selectedTraveler,
    });
  }, [selectedTraveler]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's Traveling</Text>
      <Text style={styles.subtitle}>Choose your travelers</Text>

      {/* FlatList should take up available space */}
      <View style={styles.listContainer}>
        <FlatList
          data={SelectTravele}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <OptionCard
              option={item}
              isSelected={selectedTraveler === item.title}
              onSelect={() => setSelectedTraveler(item.title)}
            />
          )}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures full height usage
    padding: 25,
    paddingTop: 75,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Lato-Bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'Lato-Bold',
  },
  listContainer: {
    flexGrow: 1, // Ensures the FlatList takes available space
    marginBottom: 20, // Adds some space before the button
  },
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
