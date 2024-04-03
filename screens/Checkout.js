import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Checkout() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            alert('Order Placed Successfully');
            navigation.navigate('Delivery');
        }, 3000);
       
    }, []);

    return (
        <View className="flex-1 bg-white justify-center item-center">
            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
        </View>
    );
}