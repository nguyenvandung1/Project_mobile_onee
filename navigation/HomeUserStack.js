import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeUser, ProductDetails } from '../screens'



const stack = createStackNavigator();
export default function HomeUserStack() {
  return (
        <stack.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
          <stack.Screen name='HomeUserSC' component={HomeUser}/>
          <stack.Screen name='ProductDetails' component={ProductDetails}/>
        </stack.Navigator>
  )
}