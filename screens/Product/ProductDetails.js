import { View, Text, TouchableOpacity, Dimensions, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { FavoriteProducts } from '../../data/data';



const { width, height } = Dimensions.get('window');

export default function ProductDetails({ route, navigation }) {
  const { productItem } = route.params;
  let priceNew = productItem.priceNew.toLocaleString('en-US');
  let priceOld = productItem.priceOld.toLocaleString('en-US');
  // console.log(productItem);

  // time count down
  const [day, setday] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const targetDate = new Date('2023-11-30T00:00:00').getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining <= 0) {
        setday(0);
        setHour(0);
        setMinute(0);
        setSecond(0);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setday(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Clear interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Dãy dependency rỗng để chạy effect chỉ một lần khi mount




  // heart
  // FavoriteProducts.find()
  const itemIndex = -1;
  const checkItems = ()=>{
    if(FavoriteProducts.length == 0){
      return false
    } else{
      const itemIndex = FavoriteProducts.findIndex((item, index)=>{
        return item.title == productItem.title;
      })
  
      if(itemIndex == -1){
        return false;
      } else{
        return true;
      }
    }
    
  }
  
  const [isLiked, setIsLiked] = useState(checkItems());

  const handlePress = () => {
    setIsLiked(!isLiked);
    if(isLiked){
        FavoriteProducts.push(productItem);
    } else{
      if(FavoriteProducts.length != 0){
        const itemIndex = FavoriteProducts.findIndex((item, index)=>{
          return item.title == productItem.title;
        })
        FavoriteProducts.splice(itemIndex, 1);
      }
    }
    console.log(FavoriteProducts.length);
  };

  return (
    <View className='flex-1 bg-neutral-100 items-center pt-5'>
      <View style={{ height: height * 0.08, width: width }} className='bg-slate-200 p-2 flex-row justify-between items-center'>
        <TouchableOpacity className='justify-center items-center w-10 h-10 rounded-xl bg-slate-400 ' onPress={() => { navigation.goBack() }}>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>
        <View className='w-full'>
          <Text className='text-center text-xl font-semibold text-gray-700'>{productItem.title}</Text>
        </View>
      </View>

      <View style={{ height: height * 0.75 }}>
        <ScrollView>
          <View style={st.imgProduct}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
            >
              {productItem.img.map((img, index) => {
                return (
                  <View className='justify-center items-center' style={{ height: height * 0.4, width: width }}>
                    <Image className='w-60' style={st.img} source={img} />
                  </View>
                )
              })}

            </ScrollView>
          </View>
          <View style={st.price} className='bg-gray-300 flex-row justify-aroundr '>
            <View style={{ width: width * 0.5 }} className='justify-center items-center h-full'>
              <Text className='text-orange-600 font-bold text-xl'>{priceNew}₫</Text>
              <Text className='text-zinc-400 text-xs text-center' style={{ textDecorationLine: 'line-through' }}>₫{priceOld}</Text>
            </View>
            <View className='items-center justify-center'>
              <Text className='mb-2 text-xl font-medium text-orange-600'>ƯU ĐÃI CÒN LẠI</Text>
              <View className='flex-row'>
                <View style={[st.itemTime]}>
                  <Text style={[st.textTime]}>{day}</Text>
                </View>
                <View style={[st.itemTime]}>
                  <Text style={[st.textTime]}>{hour}</Text>
                </View>
                <View style={[st.itemTime]}>
                  <Text style={[st.textTime]}>{minute}</Text>
                </View>
                <View style={[st.itemTime]}>
                  <Text style={[st.textTime]}>{second}</Text>
                </View>
              </View>
            </View>
          </View>

          <View className='m-5 '>
            <View>
              <Text className='text-2xl'>{productItem.title}</Text>
            </View>

            <TouchableOpacity onPress={handlePress}>
              <Ionicon name={isLiked ? 'heart' : 'heart-outline'} size='25' color={'red'}/>
            </TouchableOpacity>

            <View className='my-4'>
              <Text className='text-gray-400'>Số lượng sản phẩm trong kho: {productItem.quantity}</Text>
            </View>

            <View className='w-full h-60  border border-gray-400 rounded-xl py-3 px-2 justify-between my-5'>
              <View className='flex-row m-2 items-center'>
                <Ionicon name='checkmark-circle' size={25} color={'rgb(37 99 235)'}></Ionicon>
                <Text className='mx-1'>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</Text>
              </View>

              <View className='flex-row m-2 items-center'>
                <Ionicon name='checkmark-circle' size={25} color={'rgb(37 99 235)'}></Ionicon>
                <Text className='mx-1'>Bảo hành chính hãng 1 năm</Text>
              </View>

              <View className='flex-row m-2 items-center'>
                <Ionicon name='checkmark-circle' size={25} color={'rgb(37 99 235)'}></Ionicon>
                <Text className='mx-1'>Giao hàng nhanh toàn quốc</Text>
              </View>

              <View className='flex-row m-2 items-center'>
                <Ionicon name='checkmark-circle' size={25} color={'rgb(37 99 235)'}></Ionicon>
                <Text className='mx-1'>Hoàn thuế cho người nước ngoài</Text>
              </View>
            </View>

            <View className='my-5'>
              <Text className='text-lg font-bold my-2'>Thông tin sản phẩm:</Text>
              <Text className='text-justify text-base'>
                {productItem.productInfo}
              </Text>
            </View>

          </View>
        </ScrollView>
      </View>
      <View style={{ height: height * 0.10, width: width }} className=' items-center'>
      <TouchableOpacity className='h-14 rounded-xl bg-orange-400' style={{width: width*0.98}}>
        <Text className='text-center my-auto text-white text-xl font-medium'>Đặt hàng ngay</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}


const st = StyleSheet.create({
  imgProduct: {
    height: height * 0.4,
    width: width,
    backgroundColor: 'white'
  },
  img: {
    // height: 100
    objectFit: 'contain'
  },
  price: {
    width: width,
    height: 90,
    // backgroundColor: 'black'
  },
  itemTime: {
    width: 30,
    height: 30,
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(234 88 12)',
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: 'black'
  },
  textTime: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white'
  }
})