import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeUser, ProductDetails } from '../screens'
import OrderScreen from '../screens/Product/OrderScreen';



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