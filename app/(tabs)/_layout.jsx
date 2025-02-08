import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Colors} from './../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: 'black'
    }}>
      <Tabs.Screen name="mytrip" 
        options={{
          tabBarLabel:"My Trip",
          tabBarIcon: ({ color }) => <FontAwesome6 name="location-dot" size={24} color="black" />
        
        }}
      />
      <Tabs.Screen name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="airplane-search" size={24} color="black" />

        }}
      />
      <Tabs.Screen name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color="black" />

        }}
      />
    </Tabs>
  )
}

export default TabLayout