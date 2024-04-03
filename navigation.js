
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaruantScreen from './screens/RestaruantScreen';
import CartScreen from './screens/CartScreen';
import Checkout from './screens/Checkout';
import DeliveryScreen from './screens/DeliveryScreen';

export default function Nav() { 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false
        }
      
      }>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaruant" component={RestaruantScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}}   component={CartScreen} />
        <Stack.Screen name="Checkout" option={{presentation:'fullScreenModal'}} component={Checkout} />
        <Stack.Screen name="Delivery" option={{presentation:'fullScreenModal'}} component={DeliveryScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
