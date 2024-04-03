import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../theme/index.js';
import RestaurantCard from './restaurantCard.js';

export default function FeaturedRow({ title, description, restaurants }) {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
                    <Text style={{ color: '#6e6e6e', fontSize: 12 }}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: theme.primary, fontWeight: '600' }}>View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={{ paddingVertical: 15 }}
            >
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        item={restaurant}
                        key={restaurant.id}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
