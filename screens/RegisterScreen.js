import React, { useState } from 'react'
import { Platform, View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constant/index'
import RegisterSvg from '../assets/images/imgAuth/registration.svg'
import GoogleSvg from '../assets/images/imgAuth/google.svg'
import FacebookSvg from '../assets/images/imgAuth/facebook.svg'
import TwitterSvg from '../assets/images/imgAuth/twitter.svg'
import { CustomButtonAuth, InputField } from '../components'
const RegisterScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dobLabel, setDobLabel] = useState('Date of birth')

    function toggleDatePicker() {
        setOpen(!open)
    }
    function onChange({ type }, selectedDate) {
        console.log(type);
        console.log(selectedDate);
        if (type == 'set') {
            console.log('join');
            const currentDate = selectedDate
            setDate(currentDate)
            if (Platform.OS === 'android') {
                toggleDatePicker()
                setDobLabel(currentDate.toDateString())
            }
        } else {
            console.log('non');
            toggleDatePicker()
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
                <StatusBar barStyle='dark-content' backgroundColor={COLORS.background} />
                <View style={{ alignItems: 'center' }}>
                    <RegisterSvg width={300} height={300} style={{ transform: [{ rotate: '-5deg' }] }} />
                </View>
                <Text style={styles.titleRegister}>Register</Text>


                <InputField label={'Full Name'}
                    icon={<Ionicons name="person-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                />
                <InputField label={'Email ID'} keyBoardType={'email-address'}
                    icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />}
                />
                <InputField label={'Pass word'} inputType={"PassWord"}
                    icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                />
                <InputField label={'Confirm PassWord'} inputType={"PassWord"}
                    icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                />
                <View style={styles.calendarInput}>
                    <Ionicons name="calendar-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TouchableOpacity onPress={toggleDatePicker}>
                        <Text style={{ color: "#666" }}>{dobLabel}</Text>
                    </TouchableOpacity>
                </View>
                {open && (
                    <DateTimePicker
                        mode='date' display='spinner'
                        value={date}
                        onChange={onChange}
                        maximumDate={new Date()} minimumDate={new Date('1960-01-01')} />)}

                <CustomButtonAuth label={"Register"} onPress={() => { }} />
                <Text style={styles.textLoginWith}>Or, Register with other...</Text>

                <View style={styles.containerLoginMedia}>
                    <TouchableOpacity onPress={() => { }} style={styles.loginMedia}>
                        <GoogleSvg width={24} height={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.loginMedia}>
                        <FacebookSvg width={24} height={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.loginMedia}>
                        <TwitterSvg width={24} height={24} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerRegister}>
                    <Text>Already register?</Text>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} >
                        <Text style={styles.textRegister}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    titleRegister: {
        fontSize: 28,
        fontWeight: '500',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 30
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
    },
    textLogin: {
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 18,
        color: '#fff'
    },
    textLoginWith: {
        textAlign: 'center',
        color: "#666",
        marginBottom: 30
    },
    containerLoginMedia: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    loginMedia: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    containerRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    textRegister: {
        color: COLORS.primary,
        fontWeight: "700",
        marginLeft: 5
    },
    calendarInput: {
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 30
    }
})

export default RegisterScreen