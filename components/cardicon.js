import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme/index.js";
import { useNavigation } from "@react-navigation/native";
import { selectCartItems } from "../slices/cartSlice.js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../slices/cartSlice.js";


export default function CardIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    if(!cartItems.length) return ;
   

    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{backgroundColor: theme.primary}}
            className="flex-row justify-between items-center py-3 rounded-3xl p-4 shadow-lg mx-5">
                <View className="p-2 px-4 rounded-full" style={{backgroundColor: theme.secondary}}>
                    <Text className="text-white font-extrabold text-lg">
                        {cartItems.length}
                    </Text>

                
                </View>
                <Text className="text-white font-bold text-lg ml-3">View Cart</Text>
                <Text className="text-white font-bold text-lg ml-3"> ${cartTotal}</Text>
            </TouchableOpacity>
           
        </View>
    );
}