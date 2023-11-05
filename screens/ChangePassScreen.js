import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CustomButtonAuth, InputField } from '../components'
import { COLORS } from '../constant'

const ChangePassScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                <InputField label={'New PassWord'} inputType={'PassWord'} keyBoardType={'email-address'}
                    icon={<Ionicons name="lock-open-outline" size={20} color="#666" style={{ marginRight: 5 }} />} />
                <InputField label={'Confirm New PassWord'} inputType={'PassWord'} keyBoardType={'email-address'}
                    icon={<Ionicons name="lock-open-outline" size={20} color="#666" style={{ marginRight: 5 }} />} />
                <CustomButtonAuth label={'Submit'} onPress={() => { }} />
            </View>
        </SafeAreaView>
    )
}

export default ChangePassScreen