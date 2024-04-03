import React from 'react';
import { TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../theme/index.js';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({ item }) {

const navigation = useNavigation();



    return (
        <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Restaruant',{...item})}

        >
            <View style={{ shadowColor: theme.secondary, shadowRadius: 7 }} className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image } />

                <View className="px-3 pb-4 space-y-2">

                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Feather name="map-pin" className="map-pin-icon text-gray-500" size={20} />
                        <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
