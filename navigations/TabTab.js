import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RestaurantReview from '../screens/RestaurantReview';
import FoodHome from '../screens/FoodHome';


const Stack = createStackNavigator();

export default function TabTab() {
    return (
       
        <Stack.Navigator initialRouteName="FoodHome">
            <Stack.Screen
                name="FoodHome"
                component={FoodHome}
                options={{ title: "Home" , headerShown : false, }}
            
            />
              <Stack.Screen
                name="ReataurantReview"
                component={RestaurantReview}
                options={{ title: "Review" }}
            
            />
           
        </Stack.Navigator>
        
    );
}








