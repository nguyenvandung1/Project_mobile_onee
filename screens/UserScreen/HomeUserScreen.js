import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
// import { Product } from '../../components/style';
import { dataProduct, imgSliderHome } from '../../data/data';


const { width, height } = Dimensions.get('window');



export default function HomeUser({ navigation }) {

  const [search, setSearch] = useState('');
  const updateSeach = (vl) => {
    setSearch(vl);
  }

  const scrollProduct = useRef();


  const [indexSlide, setindexSlide] = useState(0);
  const scrollRef = useRef();

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      setindexSlide(slide)
    }
  }

  const autoSlide = () => {
    setTimeout(() => {
      let i = (indexSlide + 1) % imgSliderHome.length;
      setindexSlide(i);
      dotClick(i);
    }, 4000);
  };
  // autoSlide();

  const dotClick = (index) => {
    setindexSlide(index);
    const scrollX = width * index;
    scrollRef.current.scrollTo({
      animated: true,
      x: scrollX,
    })
  };


  const dots = imgSliderHome.map((i, index) => (
    <TouchableOpacity key={index} className='justify-center items-center mx-2 h-12'   onPress={() => dotClick(index)}>
      <Text 
        className={`text-6xl h-12 font-thin ${indexSlide === i.id ? 'text-black font-extralight' : 'text-gray-300 font-thin'
          }`}
        onPressIn={() => {

        }}
      >
        -
      </Text>
    </TouchableOpacity>
  ));

  // title

  const [pagination, setPagination] = useState([

    {
      id: 7,
      title: "iPhone",
    },
    {
      id: 8,
      title: "iPad",
    },
    {
      id: 9,
      title: "Macbook",
    },


  ]);
  const [activeId, setActiveId] = useState(0);

  const setActiveTitle = (id) => {
    setActiveId(id)
    let index = id;
    if (index === 7) {
      scrollProduct.current.scrollTo({
        animated: true,
        y: 150,
      });
    } else if (index === 8) {
      scrollProduct.current.scrollTo({
        animated: true,
        y: 550,
      });
    } else if (index === 9) {
      scrollProduct.current.scrollTo({
        animated: true,
        y: 1000,
      });
    }
  }




  const Product = (item, index) => {
    let priceNew = item.priceNew.toLocaleString('en-US');
    let priceOld = item.priceOld.toLocaleString('en-US');
    const navigateToProductDetails = () => {
      // Truyền item qua màn hình 'ProductDetails'
      navigation.navigate('ProductDetails', { productItem: item });
    };
    return (
      <TouchableOpacity key={index}  onPress={() => {navigateToProductDetails()}} className='w-44 h-80 items-center bg-white rounded-lg mx-2' style={{ elevation: 5, shadowColor: 'black', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2, }}>
        <View className='h-40 mt-6'>
          <Image className='w-36 h-36' style={{ objectFit: 'contain' }} source={item.img[0]} />
        </View>
        <View className='h-16'>
          <Text className='text-base font-medium'>{item.title}</Text>
        </View>
        <View className='mt-3'>
          <Text className='text-blue-600 text-base'>{priceNew}₫</Text>
          <Text className='text-zinc-400 text-xs text-center' style={{ textDecorationLine: 'line-through' }}>{priceOld}₫</Text>
        </View>
      </TouchableOpacity>
    )
  }





  return (
    <View className='flex-1 mt-5'>
      <View style={{ flex: 0.08 }} className='bg-slate-200 p-2 flex-row justify-between items-center'>
        <TouchableOpacity className='justify-center items-center w-10 h-10 rounded-xl bg-slate-400 '>
          <Text>{<Ionicon name='chevron-back-outline' size={30} color={'white'} />}</Text>
        </TouchableOpacity>

        <View className='w-72 h-full justify-center flex-row justify-center items-center'>
          <TextInput placeholder='Search' value={search} onChangeText={updateSeach} className='h-4/6 w-9/12 rounded-lg border-slate-400 border-solid border-2 px-2 mx-2' />

          <TouchableOpacity>
            <Ionicon name='search-outline' color={'rgb(148, 163, 184)'} size={36} />
          </TouchableOpacity>
        </View>
      </View>

      <View className='' style={{ flex: 0.9 }}>
        <View className='h-10 my-2 justify-center items-center flex-row border-slate-400 ' style={st.shadowHeader}>
          {pagination.map((item) => {
            const id = item.id;
            return (
              <TouchableOpacity key={id} className={`mx-2 w-20 justify-center items-center rounded-xl ${id == activeId ? 'bg-slate-300' : ''}`} onPress={() => setActiveTitle(id)}>
                <Text className={`text-lg font-medium ${activeId == item.id ? 'text-white' : 'text-gray-700'}`} >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <ScrollView className='h-5/6'
          ref={scrollProduct}
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => {
            // onChangeSetIndex(nativeEvent);
            const categoryIndex = nativeEvent.contentOffset.y
            // console.log(categoryIndex)
            if(categoryIndex <= 150){
              setActiveId(7);
            } else if(categoryIndex <= 550){
              setActiveId(8);
            } else{
              setActiveId(9);
            }
          }}

        >

        {/* SLIDER */}
          <View className=' w-full justify-center items-center' style={{ flex: 0.9 }}>
            <ScrollView
              onScroll={({ nativeEvent }) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              className=' bg-white'
              ref={scrollRef}
              scrollEventThrottle={32}
            >
              {imgSliderHome.map((img, index) => {
                return (
                  <View key={index} className='justify-center items-center' style={{ width: width }}>
                    <Image className='object-contain' style={st.img}  source={img.img} />
                  </View>
                )
              })}

            </ScrollView>
            <View className=' justify-center items-center flex-row' style={{ width: width }}>
              {/* {imgSliderHome.map((i, index) => {
                return (<Text className='text-6xl font-thin'>-</Text>)
              })} */}
              {dots}
            </View>
          </View>

          {/* <Text>{sliderI}</Text> */}

          <View className=' bg- p-5 items-center'>

            {/* iphone */}
            <View className='items-center justify-center mt-5' style={{ width: width * 0.9, height: height * 0.5 }}>
              <Text className='text-2xl font-medium mb-5'>iPhone</Text>
              <View style={{ width: width * 0.91, height: height * 0.5 }} className=''>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  horizontal
                  className='h-52'

                >
                  {/* product */}
                  {dataProduct.map((item, i) => {
                    return Product(item, i)
                  })}
                </ScrollView>
              </View>
            </View>

            {/* iPad */}
            <View className='items-center justify-center mt-10' style={{ width: width * 0.9, height: height * 0.5 }}>
              <Text className='text-2xl font-medium mb-5'>iPad</Text>
              <View style={{ width: width * 0.91, height: height * 0.5 }} className=''>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  horizontal
                  className='h-52'

                >
                  {/* product */}
                  {dataProduct.map((item, i) => {
                    return Product(item, i)
                  })}
                </ScrollView>
              </View>
            </View>

            {/* Macbook */}
            <View className='items-center justify-center mt-10' style={{ width: width * 0.9, height: height * 0.5 }}>
              <Text className='text-2xl font-medium mb-5'>Macbook</Text>
              <View style={{ width: width * 0.91, height: height * 0.5 }} className=''>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  horizontal
                  className='h-52'

                >
                  {/* product */}
                  {dataProduct.map((item, i) => {
                    return Product(item, i)
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}
const st = StyleSheet.create({
  shadowHeader: {
    elevation: 5, shadowColor: 'black', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2,
  },
  text_logo: {
    fontFamily: 'cursive'
  },
  img: {
    width: width,
    height: height * 0.179,
    objectFit: 'contain'
  }
})