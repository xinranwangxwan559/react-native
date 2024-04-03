import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { getCategories } from '../api.js';
import { urlFor } from '../sanity.js';


export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        }
        );
    }
        , []);


    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categories.map((category, index) => {
                    const isActive = category._id ==activeCategory;
                    const btnClass = isActive ? 'bg-gray-400' : 'bg-gray-200';
                    const textClass = isActive ? 'font-semifold text-gray' : 'text-black';

                    return (
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category._id)}
                                className={"p-1 rounded-full shadow bg-gray-200 "+btnClass}>
                            
                                <Image style={{ width: 55, height: 55, borderRadius: 55 / 2}} source={{uri: urlFor(category.image).url()}} />
                            </TouchableOpacity>
                            <Text className={"text-sm "+textClass}>{category.name}</Text>

                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
