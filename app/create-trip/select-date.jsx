import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, Link } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';

const SelectDates = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Select Dates',
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  //for date picker functionality
  const onDateChange = (date, type) => {
    if (type === 'START_DATE') {
      setSelectedDates({ start: date, end: null });
    } else {
      setSelectedDates((prev) => ({ ...prev, end: date }));
    }
  };
  const OnDateSelectionContinue=(date,type)=>{
    console.log(date,type)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Date</Text>
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{ backgroundColor: '#000' }}
          selectedDayTextColor="#fff"
        />
      </View>
      <Link href="/create-trip/select-date" asChild>
        <TouchableOpacity style={styles.continueButton}
        onPress={OnDateSelectionContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: '#fff',
    height: '100%',
  },
  title: {
    fontFamily: 'lato-bold',
    fontSize: 35,
    marginBottom: 20,
  },
  calendarContainer: {
    marginTop: 30,
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectDates;
