import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from "@expo/vector-icons";

import FoodHome from '../screens/FoodHome';
import TabTab from './TabTab';
import FRhome from '../screens/FRhome';

const Tab = createBottomTabNavigator();

export default function BottomMenu() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'gray' }} >
        
          <Tab.Screen
            name="FoodHome"
            component={FoodHome}
            options={{
              tabBarLabel: "หน้าหลัก",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
           <Tab.Screen
            name="Review"
            component={FRhome}
            options={{
              tabBarLabel: "Review",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="smile-o" color={color} size={size} /> ),
              
            }}
          />

        </Tab.Navigator>
        
      );
    }
    
    
    




