import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


export default function ThaiFoodTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray", }} >
            <Tab.Screen
                name="FlashScreen"
                component={FlashScreen}
                options={{
                    tabBarLabel: "Pikachu",
                   // tabBarIcon: ({ color, size }) => (<FontAwesome name="bolt" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="FlameScreen"
                component={FlameScreen}
                options={{
                    tabBarLabel: "Charmander",
                   // tabBarIcon: ({ color, size }) => (<FontAwesome name="fire" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="LeafScreen"
                component={LeafScreen}
                options={{
                    tabBarLabel: "Ivysour",
                   // tabBarIcon: ({ color, size }) => (<FontAwesome name="leaf" color={color} size={size} />),
                    headerShown: false
                }}
            />
        </Tab.Navigator>

    );
}
function FlashScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg" }}
                style={{ width: '100%', height: 500 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}>Pikachu</Text>
        </View>
    );
}

function FlameScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png" }}
                style={{ width: '100%', height: 500 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}>Charmander</Text>
        </View>
    );
}

function LeafScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "https://i.pinimg.com/originals/46/7e/db/467edb818bc862ef7f54dece5df4d762.png" }}
                style={{ width: '100%', height: 500 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}>Ivysour</Text>
        </View>
    );
}
