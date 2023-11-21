import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoardingScreen, LoginScreen, RegisterScreen, ForgetScreen, ChangePassScreen } from '../screens';
import User from './User';
import AdminDrawer from './AdminDrawer';
import AdminTab from './AdminTab';
const Stack = createStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Admin" component={AdminTab} />
            <Stack.Screen name="HomeScreen" component={User} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
            <Stack.Screen name="ChangePassScreen" component={ChangePassScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack