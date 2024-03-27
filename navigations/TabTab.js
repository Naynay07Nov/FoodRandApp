import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RestaurantReview from '../screens/RestaurantReview';
import FoodHome from '../screens/FoodHome';
import FRhome from '../screens/FRhome';


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
                name="FRhome"
                component={FRhome}
                options={{ title: "Review" }}
            
            />
           
        </Stack.Navigator>
        
    );
}








