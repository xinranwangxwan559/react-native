import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { categories } from '../constants/restaurantData.js';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categories.map((category, index) => {
                    const isActive = category.id ==activeCategory;
                    const btnClass = isActive ? 'bg-gray-400' : 'bg-gray-200';
                    const textClass = isActive ? 'font-semifold text-gray' : 'text-black';

                    return (
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category.id)}
                                className={"p-1 rounded-full shadow bg-gray-200 "+btnClass}>
                            
                                <Image style={{ width: 45, height: 45 }} source={category.image} />
                            </TouchableOpacity>
                            <Text className={"text-sm "+textClass}>{category.name}</Text>

                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
