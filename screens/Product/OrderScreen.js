import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'
import { InputField } from '../../components';

const { width, height } = Dimensions.get('window');

export default function OrderScreen({ route, navigation }) {
  const { productItem } = route.params;

  const [showipAddress, setShowipAddress] = useState(false);
  
  const ShowAddress = () =>{
    setShowipAddress(!showipAddress);
    console.log(showipAddress);
  }


  // const input = (place) =>{

  // }



  return (
    <View className='flex-1 pt-5'>
      <View className='w-full items-center bg-slate-400 flex-row' style={[st.shadowHeader, { height: height * 0.08 }]}>
        <TouchableOpacity className='justify-center ml-4 items-center w-10 h-10 rounded-xl bg-slate-300 '>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>

        <View style={{ width: width - 112 }} className=''><Text className='text-center text-xl font-semibold text-white'>Đặt hàng</Text></View>
      </View>

      <View className='h-full py-5 items-center' style={{ height: height * 0.83 }}>
        <View style={{ width: width * 0.9 }}>

          <View className='w-full h-auto py-4 px-2 mt-10 rounded-xl' style={[st.shadow]}>

            <View className='flex-row justify-around'>
              <View className='w-5/6'>
                <Text className='text-base' ><Ionicon name='location-outline' size={25} color={' rgb(234 88 12)'} />Địa chỉ nhận hàng:</Text>
                <Text className='pl-2'>116 Nguyễn Huy Tưởng, Hòa Minh, Liên Chiểu, Đà Nẵng</Text>
              </View>
              <View className='justify-center items-center w-10'>
                <TouchableOpacity onPress={()=>{ShowAddress()}}>
                  <Ionicon name={ showipAddress ? 'chevron-up' : 'create-outline'} color={'rgb(234 88 12)'} size={25} />
                </TouchableOpacity>
              </View>
            </View>
            {showipAddress && (
                  <InputField></InputField>
                )}

          </View>


        </View>
      </View>
    </View>
  )
}


const st = StyleSheet.create({
  shadowHeader: {
    // elevation: 5, 
    shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 2,
  },
  shadow: {
    shadowColor: 'black', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 2, backgroundColor: 'white'
  }

})