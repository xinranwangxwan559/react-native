import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { theme } from "../theme/index.js";
import Feather from "react-native-vector-icons/Feather";
import { addToCart, selectCartItemsById } from "../slices/cartSlice.js";
import { removeFromCart } from "../slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function DishRow({item}){

const dispatch = useDispatch();
const totalItems = useSelector((state) => selectCartItemsById(state, item.id));

const handleIncrease = () => {  
    dispatch(addToCart({ ...item}));
}
const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id}));
}
    

return (
<View className="flex-row items-center bg-white px-3 rounded-3xl shadow-2xl mb-3 mx-2">
    <Image className="rounded-3xl" style={{ width: 100, height: 100 }} source={item.image} />
    <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-gray-500">{item.description}</Text>

            
        </View>
            <View className="flex-row justify-between items-center px-3">
                <Text className="text-gray-500 text-lg font-bold">${item.price}</Text>
                <View className="flex-row items-center">
                    <TouchableOpacity
                        onPress={handleDecrease}
                        disabled={!totalItems.length}
                        className="bg-gray-200 rounded-full p-2"
                        style={{backgroundColor: theme.primary }}
                        >
                        <Feather name="minus"  size={20} color="white" />


                        </TouchableOpacity>
                        <Text className="px-3 text-lg">{totalItems.length}</Text>
                        <TouchableOpacity
                        onPress={handleIncrease}
                        className="bg-gray-200 rounded-full p-2"
                        style={{backgroundColor: theme.primary }}
                        >
                        <Feather name="plus"  size={20} color="white" />


                        </TouchableOpacity>
    </View>
</View>
</View>
</View>
);


}
