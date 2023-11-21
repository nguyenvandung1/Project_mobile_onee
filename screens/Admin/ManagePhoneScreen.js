import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { dataProduct } from '../../data/data'
import PhoneItem from '../../components/ListPhone/PhoneItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { PhoneContext } from '../../store/phone-context'

const ManagePhoneScreen = () => {
  const navigation = useNavigation()
  const phonesContext = useContext(PhoneContext)
  function renderManagePhone(itemData) {
    const item = itemData.item
    return <PhoneItem item={item} />
  }
  function editHanlder() {
    navigation.navigate('PhoneEditScreen')
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={phonesContext.phones} renderItem={renderManagePhone} keyExtractor={item => item.id} />
      <View style={styles.buttonPosi}>
        <TouchableOpacity onPress={editHanlder}>
          <View style={styles.buttonCircleAdd}>
            <Text style={styles.iconAdd}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonPosi: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonCircleAdd: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconAdd: {
    color: 'white',
    fontSize: 24,
  }
})

export default ManagePhoneScreen