import { View, Text, ScrollView, Image, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { FavoriteProducts, imgSliderHome } from '../../data/data';
import { SelectList } from 'react-native-dropdown-select-list';
import { StackView } from '@react-navigation/stack';
import { useFavoriteProducts } from '../../context/context';
const { width, height } = Dimensions.get('window');

export default function FavoriteProductsScreen() {

  const [indexSlide, setindexSlide] = useState(0);
  const scrollRef = useRef();

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      setindexSlide(slide)
    }
  }

  const dotClick = (index) => {
    setindexSlide(index);
    const scrollX = width * index;
    scrollRef.current.scrollTo({
      animated: true,
      x: scrollX,
    })
  };


  const dots = imgSliderHome.map((i) => (
    <TouchableOpacity key={i.id} className='items-center justify-center h-12 mx-2' onPress={() => dotClick(i.id)}>
      <Text
        className={`text-6xl h-12 font-thin ${indexSlide === i.id ? 'text-black font-extralight' : 'text-white font-thin'
          }`}
        onPressIn={() => {
        }}
      >
        -
      </Text>
    </TouchableOpacity>
  ));


  // select list
  const dataSL = [
    // { id: 1, value: 'Tất cả' },
    // { id: 2, value: 'iPhone' },
    // { id: 3, value: 'iPad' },
    // { id: 4, value: 'Macbook' },
    'Tất cả', 'iPhone', 'iPad', 'Macbook'
  ]
  const [selectType, setselectType] = useState(dataSL[0]);


  // console.log(selectType);

  // item
  const [arrItems, setArrItems] = useState(FavoriteProducts);




  const updateSelect = (it) => {
    console.log(it);
    setselectType(it);

    // setArrItems(FavoriteProducts);
  };

  const renderItems = () => {
    // let vl = selectType.value;
    // const list = useMemo(() => FavoriteProducts.filter((item) => item.typeProduct === selectType.value), [FavoriteProducts, selectType]);
    let list = FavoriteProducts.filter((item, i) => {
      console.log('id1: ' + selectType);
      item.typeProduct === selectType
    })
    if (list.length == 0 && FavoriteProducts.length == 0) {
      console.log('id2: ' + selectType + " " + FavoriteProducts.length);
      return (
        <View className='w-full my-5'>
          <Text className='text-xl font-normal text-center'>Danh sách sản phẩm trống!</Text>
        </View>
      )
    } else {
      if (selectType == 'Tất cả') {
        return (
          FavoriteProducts.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View className='flex-row items-center justify-around w-full h-24 mx-auto bg-white rounded-2xl' style={st.shadow}>
                  <Image className='object-contain w-16 h-20' source={item.img[0]} />
                  <Text>{item.title}</Text>
                  <TouchableOpacity key={index} onPress={(index) => { deleteI(index) }}>
                    <Ionicon name='trash' size={35} color={'rgb(300 31 100)'} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })
        )
      } else {
        {
          list.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View className='flex-row items-center justify-around w-full h-24 mx-auto bg-white rounded-2xl' style={st.shadow}>
                  <Image className='object-contain w-16 h-20' source={item.img[0]} />
                  <Text>{item.title}</Text>
                  <TouchableOpacity key={index} onPress={(index) => { deleteI(index) }}>
                    <Ionicon name='trash' size={35} color={'rgb(300 31 100)'} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })
        }
      }
    }
  };



  const [products, setProducts] = useState(FavoriteProducts);

  useEffect(() => {
    setProducts(FavoriteProducts);
  }, [FavoriteProducts]);

  const deleteI = (index) => {
    const arrN = [...FavoriteProducts];

    setselectType(selectType)
    FavoriteProducts.splice(index, 1);
    arrN.splice(index, 1);
    setProducts(arrN)
  }



  return (
    <View className='items-center flex-1 pt-5 bg-neutral-100 '>
      <View style={{ height: height * 0.08, width: width }} className='flex-row items-center justify-center p-2 bg-slate-400'>
        <Text className='text-xl font-semibold text-center text-white'>FavoriteProducts</Text>
      </View>
      <View className='items-center justify-start w-full h-auto bg-white' style={{ flex: 0.999 }}>
        <View>

          <View className='h-56 pt-10 bg-slate-200'>
            <ScrollView
              onScroll={({ nativeEvent }) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              className='bg-white '
              ref={scrollRef}
              scrollEventThrottle={32}
            >
              {imgSliderHome.map((img, index) => {
                return (
                  <View key={index} className='items-center justify-center' style={{ width: width }}>
                    <Image className='object-contain' style={st.img} source={img.img} />
                  </View>
                )
              })}

            </ScrollView>
            <View className='flex-row items-center justify-center ' style={{ width: width }}>
              {dots}
            </View>
          </View>

          <View className='my-5 '>
            <Text className='text-xl font-medium text-center'>Sản phẩm yêu thích</Text>
            <View className='w-2/4 px-5 my-5'>
              <SelectList placeholder='Tất Cả' data={dataSL} setSelected={updateSelect} />
            </View>

            <View className='w-full h-56'>
              <ScrollView style={{ width: width }}>
                {products.map((item, index) => {
                  return (
                    <TouchableOpacity key={index}>
                      <View className='flex-row items-center justify-around w-full h-24 mx-auto bg-white rounded-2xl' style={st.shadow}>
                        <Image className='object-contain w-16 h-20' source={item.img[0]} />
                        <Text>{item.title}</Text>
                        <TouchableOpacity key={index} onPress={(index) => { deleteI(index) }}>
                          <Ionicon name='trash' size={35} color={'rgb(300 31 100)'} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>

      </View>
      {/* <ion-icon name="trash-outline"></ion-icon> */}

    </View>
  )
}

const st = StyleSheet.create({
  img: {
    width: width,
    height: height * 0.179,
    objectFit: 'contain'
  },
  shadow: {

    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: width * 0.95,
    marginTop: 5,
    borderWidth: 0.2,
    borderColor: 'rgb(243 244 246)'
  }
})
