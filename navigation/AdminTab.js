import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SettingUserScreen, ShoppingCartScreen, FavoriteProductsScreen } from '../screens';
import Ionicon from 'react-native-vector-icons/Ionicons'
import AdminDrawer from './AdminDrawer';

export default function AdminTab() {
    const UserStack = createBottomTabNavigator();
    const size = 30;
    return (
        <UserStack.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            tabBarIcon: ({ focused, color }) => {
                if (route.name === 'HomeUserStack') {
                    return (
                        <View style={[st.container, { backgroundColor: focused ? '#f2f2f2' : 'white', }]}>
                            <Ionicon name='home-outline' size={size} color={focused ? 'coral' : '#676767'} />
                            {focused && <Text style={st.text}>Home</Text>}
                        </View>
                    )
                } else if (route.name === 'SettingUser') {
                    return (
                        <View style={[st.container, { backgroundColor: focused ? '#f2f2f2' : 'white', }]}>
                            <Ionicon name='settings-outline' size={size} color={focused ? 'coral' : '#676767'} />
                            {focused && <Text style={st.text}>Setting</Text>}
                        </View>
                    )
                } else if (route.name === 'ShoppingCart') {
                    return (
                        <View style={[st.container, { backgroundColor: focused ? '#f2f2f2' : 'white', }]}>
                            <Ionicon name='cart-outline' size={size} color={focused ? 'coral' : '#676767'} />
                            {focused && <Text style={st.text}>Cart</Text>}
                        </View>
                    )
                } else if (route.name === 'FavoriteProducts') {
                    return (
                        <View style={[st.container, { backgroundColor: focused ? '#f2f2f2' : 'white', }]}>
                            <Ionicon name='heart-outline' size={size} color={focused ? 'coral' : '#676767'} />
                            {focused && <Text style={st.text}>Favorite</Text>}
                        </View>
                    )
                }
            }
        })}>
            <UserStack.Screen name='HomeUserStack' component={AdminDrawer} />
            <UserStack.Screen name='FavoriteProducts' component={FavoriteProductsScreen} />
            <UserStack.Screen name='ShoppingCart' component={ShoppingCartScreen} />
            <UserStack.Screen name='SettingUser' component={SettingUserScreen} />
        </UserStack.Navigator>
    )
}


const st = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 95,
        height: 40

    },
    text: {
        marginStart: 2,
        color: 'rgb(39 39 42)',
        fontWeight: '600'
    }
})