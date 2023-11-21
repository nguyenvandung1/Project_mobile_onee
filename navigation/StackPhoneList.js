import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PhoneEditScreen from '../screens/Admin/PhoneEditScreen'
import ManagePhoneScreen from '../screens/Admin/ManagePhoneScreen'
import ListPhoneScreen from '../screens/Admin/ListPhoneScreen'
const Stack = createStackNavigator()
const StackPhoneList = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PhoneListScreen' component={ManagePhoneScreen} />
            <Stack.Screen name='PhoneEditScreen' component={PhoneEditScreen} />
        </Stack.Navigator>
    )
}

export default StackPhoneList