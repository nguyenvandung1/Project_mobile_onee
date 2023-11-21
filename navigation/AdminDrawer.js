import React from 'react'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import ListPhoneScreen from '../screens/Admin/ListPhoneScreen'
import ManageOrder from '../screens/Admin/ManageOrder'
import HomeUserStack from './HomeUserStack'
import ManagePhoneScreen from '../screens/Admin/ManagePhoneScreen'
import { Ionicons } from '@expo/vector-icons'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import StackPhoneList from './StackPhoneList'

const Drawer = createDrawerNavigator()

const AdminDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={
                (props) => {
                    return (
                        <>
                            <SafeAreaView style={{ flex: 1 }}>
                                <View style={styles.headerDrawer}>
                                    <Image style={styles.headerImage} source={require('../assets/images/imgOnBoarding/Enjoy.png')} />
                                    <Text style={styles.nameManager}>Huỳnh Thành Đạt</Text>
                                    <Text style={styles.textDescription}>Manager</Text>
                                </View>
                                <DrawerItemList {...props} />
                            </SafeAreaView>
                            <View style={styles.bottomDrawer}>
                                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }} >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name='newspaper-outline' size={24} />
                                        <Text style={styles.textBottomDrawer}>Stats</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }} >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name='log-out-outline' size={24} />
                                        <Text style={styles.textBottomDrawer}>Log out</Text>
                                    </View>
                                </TouchableOpacity>
                            </View >
                        </>
                    )
                }
            }
            screenOptions={{
                drawerStyle: { backgroundColor: '#fff', width: 250 },
                headerStyle: { backgroundColor: 'red' },
                headerTintColor: 'white',
                headerTitleStyle: { fontWeight: 'bold' },
                drawerActiveTintColor: 'red',
                drawerLabelStyle: { color: '#111', marginLeft: -15 }
            }}>
            <Drawer.Screen name="Home" options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
            }} component={HomeUserStack} />
            <Drawer.Screen name="ListPhone" options={{
                drawerLabel: 'List Phone',
                title: 'List Phone',
                drawerIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />
            }} component={ListPhoneScreen} />
            <Drawer.Screen name="ManageOrder" options={{
                drawerLabel: 'Manage Order',
                title: 'Manage Order',
                drawerIcon: ({ color, size }) => <Ionicons name='cart-outline' size={size} color={color} />
            }} component={ManageOrder} />
            <Drawer.Screen name="ManagePhone" options={{
                drawerLabel: 'Manage Phone',
                title: 'Manage Phone',
                drawerIcon: ({ color, size }) => <Ionicons name='phone-portrait-outline' size={size} color={color} />
            }} component={StackPhoneList} />
        </Drawer.Navigator >
    )
}

const styles = StyleSheet.create({
    headerDrawer: {
        backgroundColor: 'red',
        height: 225,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#f4f4f4',
    },
    headerImage: {
        marginTop: 25,
        height: 130,
        width: '50%',
        borderRadius: 100
    },
    nameManager: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        marginVertical: 6
    },
    textDescription: {
        color: '#111',
    },
    bottomDrawer: {
        padding: 20,
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderTopColor: '#f4f4f4',
    },
    textBottomDrawer: {
        fontSize: 15,
        marginLeft: 5
    }
})
export default AdminDrawer