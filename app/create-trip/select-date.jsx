import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, Link, useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const SelectDates = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tripData, setTripData] = useState({});
  const router = useRouter()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Select Dates',
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === 'START_DATE') {
      setStartDate(moment(date)); // Store date using moment
      setEndDate(null); // Reset end date when start date changes
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show('Please select Start and End Date', ToastAndroid.SHORT);
      return;
    }

    const totalNoOfDays = endDate.diff(startDate, 'days');
    console.log('Total Days:', totalNoOfDays + 1);

    setTripData({
      ...tripData,
      startDate: startDate.format('YYYY-MM-DD'), // Formatting for clarity
      endDate: endDate.format('YYYY-MM-DD'),
      totalNoOfDays: totalNoOfDays + 1, // Add 1 to include the last day
    });

    router.push('/create-trip/select-budget')
  };

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
      <TouchableOpacity style={styles.continueButton} onPress={OnDateSelectionContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
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
