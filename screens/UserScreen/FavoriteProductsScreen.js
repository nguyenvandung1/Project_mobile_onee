import { View, Text, ScrollView, Image, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get('window');

export default function FavoriteProductsScreen() {
  
  
  return (
    <View className='flex-1 bg-neutral-100 items-center pt-5'>
      <View style={{ height: height * 0.08, width: width }} className='bg-slate-200 p-2 flex-row justify-between items-center'>
        <TouchableOpacity className='justify-center items-center w-10 h-10 rounded-xl bg-slate-400 ' onPress={() => { navigation.goBack() }}>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>
        <View className='w-full'>
          <Text className='text-center text-xl font-semibold text-gray-700'>FavoriteProducts</Text>
        </View>
      </View>

      
    </View>
  )
}


