import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { dataProduct } from '../../data/data'
import PhoneItem from '../../components/ListPhone/PhoneItem'
import { PhoneContext } from '../../store/phone-context'

const ListPhoneScreen = () => {
  const phonesContext = useContext(PhoneContext)
  console.log(phonesContext.phones);
  function listPhone(itemData) {
    const item = itemData.item
    return < PhoneItem item={item} />
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={phonesContext.phones} keyExtractor={(itemData) => itemData.id} renderItem={listPhone} />
    </View>
  )
}


export default ListPhoneScreen