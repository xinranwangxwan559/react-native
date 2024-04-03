import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../theme';
import Categories from '../components/categories.js';
import FeaturedRow from '../components/featuredRow.js';
import { restaurantData } from '../constants/restaurantData.js';


export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            {/* search bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 mt-3">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-200">
                    <MaterialCommunityIcons name="shopping-search" size={25} color="gray" />
                    <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-200">
                        <Feather name="map-pin" size={25} color="gray" />
                        <Text className="text-gray-800">Auckland</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: theme.primary }} className="p-3 rounded-full items-center justify-center">
                    <Feather name="sliders" size={25} color="white" />
                </View>
            </View>

            {/* main */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 70 }}
            >
                {/* categories */}
                <Categories />

                {/* feature */}
                <View className="mt-5">
                    {restaurantData.restaurant.map((item, index) => (
                        <FeaturedRow
                            key={index}
                            title={restaurantData.title}
                            restaurants={restaurantData.restaurant}
                            description={item.description}
                        />
                    ))}
                </View>


            


        </ScrollView>


        </SafeAreaView >
    );
}
