import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from '../../context/CreateTripContext';

const SearchPlace = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const { tripData, setTripData } = useContext(CreateTripContext) || {}; // Ensure context exists
  const router = useRouter()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search Place',
    });
  }, []);

  // Debounce API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length >= 3) {
        fetchPlaces(query);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Fetch Places from Photon API
  const fetchPlaces = async (searchTerm) => {
    if (searchTerm.length < 3) return; // Avoid unnecessary API calls
    try {
      const response = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(searchTerm)}&limit=5`
      );
      const data = await response.json();
      setPlaces(data.features || []);
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  return (
    <View style={{ padding: 25, paddingTop: 75, backgroundColor: '#fff', height: '100%' }}>
      <TextInput
        placeholder="Search"
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 15,
          backgroundColor: '#f9f9f9',
        }}
        value={query}
        onChangeText={setQuery} // Use direct setter
      />

      <FlatList
        data={places}
        keyExtractor={(item, index) =>
          item.properties.osm_id ? item.properties.osm_id.toString() + index : index.toString()
        }
        renderItem={({ item }) => {
          const name = item.properties.name || 'Unnamed Location';
          const country = item.properties.country || 'Unknown Country';
          const city = item.properties.city || item.properties.state || 'Unknown City';
          const latitude = item.geometry.coordinates[1] || 0; // Ensure correct lat/lon order
          const longitude = item.geometry.coordinates[0] || 0;

          return (
            <TouchableOpacity
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}
              onPress={() => {
                console.log('Selected Place:', name);
                setQuery(name); // Set selected place in search bar
                setTripData({ name, coordinates: { latitude, longitude }, country, city });
                setPlaces([]); // Clear suggestions after selection
                router.push('/create-trip/select-traveler');
              }}
            >
              <Text>{name}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>
                {country}, {city}
              </Text>
            </TouchableOpacity>

          );
        }}
      />
    </View>
  );
};

export default SearchPlace;
