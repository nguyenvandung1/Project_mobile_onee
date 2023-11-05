import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../constant'
import { CustomButtonAuth, InputField } from '../components'

const ForgetScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Image style={{ width: 125, height: 125 }} source={require('../assets/images/imgAuth/forgetpng.png')} />
        </View>
        <Text style={{ marginBottom: 30, fontSize: 16, color: '#666' }}>Provivde the details below to begin the process</Text>
        <InputField label={'Email Address'} keyBoardType={'email-address'} icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />} />
        <CustomButtonAuth label={'Submit'} onPress={() => { navigation.navigate('ChangePassScreen') }} />
      </View>
    </SafeAreaView>
  )
}

export default ForgetScreen