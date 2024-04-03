import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { restaurantData } from "../constants/restaurantData.js";
import { theme } from "../theme/index.js";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice.js";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice.js";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice.js";
import { urlFor } from '../sanity.js';


export default function CartScreen() {

    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});
    const dispatch = useDispatch();
    const deliveryFee = 2;

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item._id]) { 
                group[item._id].push(item);
            } else {
                group[item._id] = [item];
            }
            return group;
        }, {});
        setGroupedItems(Object.values(items)); 
    }, [cartItems]);
    


    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: theme.primary }}
                    className="absolute z-10 rounded-full p-1 mt-4 shadow top-5 left-2">

                    <Feather name="arrow-left" size={25} color="white" />



                </TouchableOpacity>
                <View>
                    <Text className="text-center mt-4 font-bold text-xl">Your Cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>

                </View>

            </View>
            {/* delivery time */}
            <View style={{ backgroundColor: theme.primary }}
                className="flex-row items-center px-4">
                <Image source={require('../assets/images/bikeguy.webp')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: theme.secondary }}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="bg-white pt-5"
            >
                {
                    Object.entries(groupedItems).map(([key, items]) => {
                        let dish = items[0];
                        
                        return (
                            <View key={key} className="flex-row items-center bg-white space-x-3 py-2 rounded-3xl shadow-2xl mb-3 mx-2">
                                <Text className="font-bold" style={{ color: theme.primary }}>
                                    {items.length}x
                                </Text>
                                <Image className="h-14 w-14 rounded-full" source={{uri: urlFor(dish.image).url()}} />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-bold text-gray-700">${dish.price}</Text>
                                <TouchableOpacity className="bg-gray-200 rounded-full p-2"
                                    onPress={() => dispatch(removeFromCart({ id: dish._id }))}
                                    style={{ backgroundColor: theme.primary }}>
                                    <Feather name="minus" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }


            </ScrollView>

            {/* totals */}

            <View style={{ backgroundColor: theme.secondary }} className="p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">

                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">{cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">

                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">${deliveryFee}</Text>
                </View>
                <View className="flex-row justify-between">

                    <Text className="text-gray-700 font-extrabold">Order Total</Text>
                    <Text className="text-gray-700 font-extrabold">${deliveryFee+cartTotal}</Text>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Checkout')}
                        style={{ backgroundColor: theme.primary }}
                        className="p-3 rounded-full">

                        <Text className="text-white text-center text-lg font-bold">Checkout</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    );
}