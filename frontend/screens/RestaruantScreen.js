import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../theme/index.js';
import DishRow from '../components/dishRow.js';
import CardIcon from '../components/cardicon.js';
import { StatusBar } from 'expo-status-bar';
import { setRestaurant } from '../slices/restaurantSlice.js';
import { useDispatch } from 'react-redux';
import { urlFor } from '../sanity.js';



export default function RestaruantScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    const dispatch = useDispatch();
    useEffect(() => {
        if(item && item._id){
            dispatch(setRestaurant({ ...item }));
        }
    }
    , []);


    return (
        <View>
            <CardIcon />
            <StatusBar style="light" />
            <ScrollView>
                <View className="relative">

                    <Image className="w-full h-72" source={{uri: urlFor(item.image).url()}} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-14 left-4 bg-gray-50 rounded-full sadow">
                        <Icon name="leftcircleo" size={30} color={theme.primary} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white -mt-12 pt-5">
                    <View className=" px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row my-1 space-x-2">
                            <View className="flex-row items-center space-x-1">
                                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.stars}</Text>
                                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item?.type?.name}</Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1" style={{ flex: 1, flexWrap: 'wrap' }}>
                                <Feather name="map-pin" className="map-pin-icon text-gray-500" size={20} />
                                <Text className="text-gray-700 text-xxs"> Nearby · {item.address}</Text>
                            </View>

                        </View>
                        <Text className="text-gray-700 mt-2">{item.description}</Text>
                    </View>

                </View>
                <View className="pb-36 bg-white">

                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* dishes */}
                    {item.dishes.map((dish, index) => <DishRow item={{ ...dish }} key={index} />)
                        
                    }

                </View>
            </ScrollView>
        </View>

    );
}